// app/exam/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useExamStore } from "@/store/exam-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuestionRenderer from "@/components/exam/QuestionRenderer";
import QuestionNav from "@/components/exam/QuestionNav";
import SubmitDialog, { SubmitDetails } from "@/components/exam/SubmitDialog";
import { QUESTIONS } from "./questions";
import { getQuestionPoints, TEST_MAX, ESSAY_MAX, } from "@/lib/scoring";
import { letterGradeFromTotal } from "@/lib/grading";
import type { StructuredPart } from "@/types";
import Link from "next/link";

const EXAM_MINUTES = 120;
const STORAGE_KEY = "exam_state_v2";

/** passages → special labels (excluded from numbering & progress) */
const SPECIAL_LABELS: Record<number, "M" | "G"> = {
    100: "M",
    2301: "M",
    2800: "G",
};

/** manual numeric label overrides so your sequence is 1..32, [33,34,35 on Q33], 36, 37 ... */
const SPECIAL_NUMBERS: Record<number, number> = {
    33: 33,
    36: 36,
    37: 37,
};

type RowsItem = {
    label: string;
    qid: number;
    user: string;
    correct?: string;
    verdict?: "✔" | "✘" | "-";
};

export default function ExamPage() {
    const { currentQuestionIndex, setCurrentQuestion, answers, setAnswer, resetExam } = useExamStore();

    const [timeLeft, setTimeLeft] = useState(EXAM_MINUTES * 60);
    const [submitted, setSubmitted] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [userInfo, setUserInfo] = useState<SubmitDetails | null>(null);

    // ✅ Only what you want to show: Name + Percent + Grade
    const [calc, setCalc] = useState<{
        totalPercent: number;
        grade: string;
    } | null>(null);

    const [rows, setRows] = useState<RowsItem[]>([]);

    // ids in render order
    const ids = useMemo(() => QUESTIONS.map((qq) => qq.id), []);

    /**
     * Build labels + navigator items:
     *  - Passages show "M"/"G"
     *  - Q33 page shows as 33 but navigator will also display 34 & 35 pointing to the same page
     *  - Q36 label "36", Q37 label "37" (so total visible labels become 37)
     */
    const { labelMap, navItems, totalNumbered } = useMemo(() => {
        let run = 0;
        const map: Record<number, string> = {};
        const items: { label: string; index: number; isPassage?: boolean }[] = [];

        QUESTIONS.forEach((qq, index) => {
            // passages: M / G
            if (qq.id in SPECIAL_LABELS) {
                const lab = SPECIAL_LABELS[qq.id];
                map[qq.id] = lab;
                items.push({ label: lab, index, isPassage: true });
                return;
            }

            // numeric labels with overrides
            if (qq.id in SPECIAL_NUMBERS) {
                run = SPECIAL_NUMBERS[qq.id];
                map[qq.id] = String(run);

                if (qq.id === 33) {
                    items.push({ label: "33", index });
                    items.push({ label: "34", index });
                    items.push({ label: "35", index });
                    // keep run at 35 so next numeric becomes 36
                } else {
                    items.push({ label: String(run), index });
                }
                return;
            }

            // default numbering
            run += 1;
            map[qq.id] = String(run);
            items.push({ label: String(run), index });
        });

        const total = items.filter((it) => it.label !== "M" && it.label !== "G").length;
        return { labelMap: map, navItems: items, totalNumbered: total };
    }, []);

    // gradable total for progress = visible numeric labels (37)
    const progressTotal = totalNumbered;

    const q = useMemo(() => QUESTIONS[currentQuestionIndex], [currentQuestionIndex]);

    // -------- Persistence (hydrate + autosave) --------
    const hydratedOnceRef = useRef(false);

    useEffect(() => {
        // Initial reset, then hydrate from localStorage once
        resetExam();

        // hydrate after reset
        if (!hydratedOnceRef.current) {
            try {
                const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
                if (raw) {
                    const parsed = JSON.parse(raw) as { answers?: Record<string, string> } | null;
                    if (parsed && parsed.answers) {
                        // apply saved answers (including essay id 45)
                        Object.entries(parsed.answers).forEach(([k, v]) => {
                            const idNum = Number(k);
                            if (Number.isFinite(idNum)) setAnswer(idNum, String(v));
                        });
                    }
                }
            } catch {
                // ignore corrupted storage
            } finally {
                hydratedOnceRef.current = true;
            }
        }

        setTimeLeft(EXAM_MINUTES * 60);
        setSubmitted(false);
        setCalc(null);
        setRows([]);
        setUserInfo(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // autosave answers to localStorage
    useEffect(() => {
        try {
            if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers }));
        } catch {
            // ignore
        }
    }, [answers]);

    // timer
    useEffect(() => {
        if (submitted) return;
        const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
        return () => clearInterval(t);
    }, [submitted]);

    // auto submit → open dialog
    useEffect(() => {
        if (timeLeft === 0 && !submitted) setShowDialog(true);
    }, [timeLeft, submitted]);

    // compute + table + save to DB (called after user fills dialog)
    async function finalizeAndScore(info: SubmitDetails) {
        setUserInfo(info);

        let testScore = 0;
        let testMaxPresent = 0;
        const newRows: RowsItem[] = [];

        function normalize(s: string): string {
            let v = s.normalize("NFKC").trim();
            v = v.replace(/[`´ʻ’‘ʹʼ]/g, "'");
            v = v.replace(/\u2026/g, "...").replace(/\.{2,}/g, "...");
            v = v.replace(/[–—]/g, "-");
            v = v.replace(/\s+/g, " ");
            return v.toUpperCase();
        }

        const disp = (s?: string) => {
            const v = (s ?? "").trim();
            return v ? v : "—";
        };

        for (const item of QUESTIONS) {
            if (item.id === 45) continue; // essay separately
            if (item.questionType === "passage") continue; // passages not graded

            const pts = getQuestionPoints(item.id);
            testMaxPresent += pts;

            const label = labelMap[item.id];
            const userAns = (answers[item.id] ?? "").trim();

            // Letter-keyed types
            if (
                item.questionType === "multiple_choice" ||
                item.questionType === "diagram_mcq" ||
                item.questionType === "match_table"
            ) {
                const correct = (item.correctAnswer ?? "").toUpperCase();
                const verdict: "✔" | "✘" | "-" = userAns ? (userAns.toUpperCase() === correct ? "✔" : "✘") : "-";
                if (verdict === "✔") testScore += pts;

                newRows.push({
                    label,
                    qid: item.id,
                    user: disp(userAns),
                    correct: correct || "—",
                    verdict,
                });
                continue;
            }

            // Structured (free text with per-part answers)
            if (item.questionType === "structured") {
                const parts: StructuredPart[] = item.parts ?? [];
                const userParts = String(answers[item.id] ?? "").split("||");
                const correctParts = parts.map((p) => (p.correct ?? "").trim());

                let verdict: "✔" | "✘" | "-" = "-";
                if (correctParts.some((c) => c.length > 0)) {
                    const allOk =
                        correctParts.length > 0 &&
                        correctParts.every((c, i) => c.length > 0 && normalize(c) === normalize(userParts[i] ?? ""));
                    verdict = allOk ? "✔" : "✘";
                    if (verdict === "✔") testScore += pts;
                }

                newRows.push({
                    label,
                    qid: item.id,
                    user: disp(userParts.join("||")),
                    correct: disp(correctParts.filter((c) => c.length > 0).join("||")),
                    verdict,
                });
                continue;
            }

            // Fallback
            newRows.push({
                label,
                qid: item.id,
                user: disp(userAns),
                correct: "—",
                verdict: "-",
            });
        }

        // Essay (still counted for wordCount but score is manual = 0)
        const essayScore = 0;


        // Totals (0..150)
        const scaledTest = testMaxPresent > 0 ? (testScore / testMaxPresent) * TEST_MAX : 0;
        const totalPoints = scaledTest + essayScore;
        const totalPercent = Math.round((totalPoints / (TEST_MAX + ESSAY_MAX)) * 100);
        const grade = letterGradeFromTotal(totalPoints, TEST_MAX + ESSAY_MAX);

        // ✅ Save ONLY: firstName, lastName, percent, grade
        try {
            const r = await fetch("/api/attempts/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: info.firstName,
                    lastName: info.lastName,
                    totalPercent,
                    grade,
                    answersJson: Object.fromEntries(
                        Object.entries(answers).map(([k, v]) => [String(k), String(v ?? "")])
                    ),
                }),
                cache: "no-store",
            });

            const j = (await r.json()) as { ok?: boolean; error?: string };
            if (!r.ok || !j.ok) {
                const msg = j?.error ? `DB save failed: ${j.error}` : `DB save failed (HTTP ${r.status})`;
                console.error(msg);
                alert(msg);
            }
        } catch (e) {
            console.error("DB save threw:", e);
            alert("Natijani bazaga yozishda xatolik yuz berdi.");
        }

        setRows(newRows);
        setSubmitted(true);
        setCalc({ totalPercent, grade });
    }

    function onClickFinish() {
        setShowDialog(true);
    }

    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    // header & footer
    const headerLabel = useMemo(() => {
        const id = ids[currentQuestionIndex];
        const lab = labelMap[id];
        if (lab === "M") return "Matnni o‘qing va keyingi savollarga javob bering.";
        if (lab === "G") return "G‘azalni o‘qing va keyingi savollarga javob bering.";
        return `Savol ${lab} / ${totalNumbered}`;
    }, [currentQuestionIndex, ids, labelMap, totalNumbered]);

    const footerLeftText = useMemo(() => {
        const id = ids[currentQuestionIndex];
        const lab = labelMap[id];
        if (lab === "M") return "Matn";
        if (lab === "G") return "G‘azal";
        return `Savol ${lab} / ${totalNumbered}`;
    }, [currentQuestionIndex, ids, labelMap, totalNumbered]);

    // Intercept answers to force CAPITALS on Q33–Q44
    function handleAnswerForCurrent(val: string) {
        const id = q.id;
        const isCapRange = id >= 33 && id <= 44;
        const normalized = isCapRange ? val.toUpperCase() : val;
        setAnswer(id, normalized);
    }

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-3xl space-y-6">
                <header className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Imtihon</h1>
                    <div className="rounded-lg border bg-white px-3 py-1.5 text-sm">
                        Vaqt:{" "}
                        <span className="font-mono">
              {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
            </span>
                    </div>
                </header>

                {!submitted ? (
                    <Card>
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">{headerLabel}</div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestionIndex - 1))}
                                    disabled={currentQuestionIndex === 0}
                                    className="whitespace-nowrap"
                                >
                                    Oldingi
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setCurrentQuestion(Math.min(QUESTIONS.length - 1, currentQuestionIndex + 1))}
                                    disabled={currentQuestionIndex === QUESTIONS.length - 1}
                                    className="whitespace-nowrap"
                                >
                                    Keyingi
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <QuestionRenderer q={q} answer={answers[q.id]} onAnswer={handleAnswerForCurrent} />
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="min-w-0 flex-1">
                                <QuestionNav
                                    progressTotal={progressTotal}
                                    current={currentQuestionIndex}
                                    answers={answers}
                                    ids={ids}
                                    onJump={setCurrentQuestion}
                                    labelMap={labelMap}
                                    navItems={navItems}
                                    footerLeftText={footerLeftText}
                                />
                            </div>
                            <Button onClick={onClickFinish} className="w-full shrink-0 sm:w-auto">
                                Yakunlash
                            </Button>
                        </div>

                        {/* Submit dialog */}
                        <SubmitDialog
                            open={showDialog}
                            onClose={() => setShowDialog(false)}
                            onSubmit={(info) => {
                                setShowDialog(false);
                                finalizeAndScore(info);
                            }}
                        />
                    </Card>
                ) : (
                    <Card className="p-4">
                        <h2 className="text-xl font-semibold">Natija</h2>

                        {calc && (
                            <div className="mt-3 space-y-1">
                                {userInfo && (
                                    <p className="text-sm text-gray-600">
                                        Ism-familiya:{" "}
                                        <b>
                                            {userInfo.firstName} {userInfo.lastName}
                                        </b>
                                    </p>
                                )}
                                <p>
                                    Umumiy foiz: <b>{calc.totalPercent}%</b>
                                </p>
                                <p>
                                    Daraja: <b>{calc.grade}</b>
                                </p>
                            </div>
                        )}

                        {/* Answers table (optional; you can remove if you don’t want users to see it) */}
                        <div className="mt-4 overflow-x-auto">
                            <table className="min-w-full border text-sm">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="border px-2 py-1 text-left">#</th>
                                    <th className="border px-2 py-1 text-left">Savol</th>
                                    <th className="border px-2 py-1 text-left">Sizning javob</th>
                                    <th className="border px-2 py-1 text-left">To‘g‘ri javob</th>
                                    <th className="border px-2 py-1 text-left">Natija</th>
                                </tr>
                                </thead>
                                <tbody>
                                {rows.map((r, i) => (
                                    <tr key={`${r.qid}-${i}`}>
                                        <td className="border px-2 py-1">{i + 1}</td>
                                        <td className="border px-2 py-1">{r.label}</td>
                                        <td className="border px-2 py-1">{r.user}</td>
                                        <td className="border px-2 py-1">{r.correct ?? "—"}</td>
                                        <td className="border px-2 py-1">{r.verdict ?? "-"}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <Button variant="outline" onClick={() => location.reload()}>
                                Qayta boshlash
                            </Button>
                        </div>
                    </Card>
                )}

                {/* ===== Telegram CTA (page footer) ===== */}
                <div className="mt-6 rounded-lg border bg-white p-4 text-center">
                    <p className="mb-3 text-sm md:text-base">
            <span className="font-medium">
              Online Diagnostika Test tahlili bo&#39;ladigan telegram kanalimizga qo&#39;shiling
            </span>
                    </p>
                    <Link
                        href="https://t.me/sardortoshmuhammad_onatili"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                    >
                        Telegram kanalga qo&#39;shilish
                    </Link>
                </div>
                {/* ===== /Telegram CTA ===== */}
            </div>
        </main>
    );
}
