// app/exam/page.tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useExamStore } from "@/store/exam-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuestionRenderer from "@/components/exam/QuestionRenderer";
import QuestionNav from "@/components/exam/QuestionNav";
import SubmitDialog, { SubmitDetails } from "@/components/exam/SubmitDialog";
import { getQuestionPoints, TEST_MAX } from "@/lib/scoring";
import { letterGradeFromTotal } from "@/lib/grading";
import type { Question, StructuredPart } from "@/types";
import Link from "next/link";

const EXAM_MINUTES = 120;
const STORAGE_KEY = "exam_state_v2";
const STORAGE_TTL_MS = 24 * 60 * 60 * 1000; // 1 day

/** passages → special labels */
const SPECIAL_LABELS: Record<number, "M" | "G"> = {
    100: "M",
    2301: "M",
    2800: "G",
};

/** manual numeric label overrides */
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

type QuestionsResponse = {
    ok: boolean;
    questions?: Question[];
    error?: string;
};

type SavedExamState = {
    answers?: Record<string, string>;
    savedAt?: number;
};

export default function ExamPage() {
    const {
        currentQuestionIndex,
        setCurrentQuestion,
        answers,
        setAnswer,
        resetExam,
    } = useExamStore();

    const [questions, setQuestions] = useState<Question[]>([]);
    const [questionsLoading, setQuestionsLoading] = useState(true);
    const [questionsError, setQuestionsError] = useState<string | null>(null);

    const [timeLeft, setTimeLeft] = useState(EXAM_MINUTES * 60);
    const [submitted, setSubmitted] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [userInfo, setUserInfo] = useState<SubmitDetails | null>(null);

    const [calc, setCalc] = useState<{
        totalPercent: number;
        grade: string;
    } | null>(null);

    const [rows, setRows] = useState<RowsItem[]>([]);

    const hydratedOnceRef = useRef(false);

    const fetchQuestions = useCallback(async () => {
        setQuestionsLoading(true);
        setQuestionsError(null);

        try {
            const r = await fetch("/api/questions", { cache: "no-store" });
            const j = (await r.json()) as QuestionsResponse;

            if (!r.ok || !j.ok || !Array.isArray(j.questions)) {
                setQuestions([]);
                setQuestionsError(j.error ?? `Savollarni yuklashda xatolik: HTTP ${r.status}`);
                return;
            }

            setQuestions(j.questions);
            setCurrentQuestion(0);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setQuestions([]);
            setQuestionsError(msg);
        } finally {
            setQuestionsLoading(false);
        }
    }, [setCurrentQuestion]);

    useEffect(() => {
        void fetchQuestions();
    }, [fetchQuestions]);

    const ids = useMemo(() => questions.map((qq) => qq.id), [questions]);

    const { labelMap, navItems, totalNumbered } = useMemo(() => {
        let run = 0;
        const map: Record<number, string> = {};
        const items: { label: string; index: number; isPassage?: boolean }[] = [];

        questions.forEach((qq, index) => {
            if (qq.id in SPECIAL_LABELS) {
                const lab = SPECIAL_LABELS[qq.id];
                map[qq.id] = lab;
                items.push({ label: lab, index, isPassage: true });
                return;
            }

            if (qq.id in SPECIAL_NUMBERS) {
                run = SPECIAL_NUMBERS[qq.id];
                map[qq.id] = String(run);

                if (qq.id === 33) {
                    items.push({ label: "33", index });
                    items.push({ label: "34", index });
                    items.push({ label: "35", index });
                    run = 35;
                } else {
                    items.push({ label: String(run), index });
                }

                return;
            }

            run += 1;
            map[qq.id] = String(run);
            items.push({ label: String(run), index });
        });

        const total = items.filter((it) => it.label !== "M" && it.label !== "G").length;

        return { labelMap: map, navItems: items, totalNumbered: total };
    }, [questions]);

    const progressTotal = totalNumbered;

    const q = useMemo(() => {
        return questions[currentQuestionIndex] ?? null;
    }, [questions, currentQuestionIndex]);

    useEffect(() => {
        resetExam();

        if (!hydratedOnceRef.current) {
            try {
                const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

                if (raw) {
                    const parsed = JSON.parse(raw) as SavedExamState | null;
                    const savedAt = Number(parsed?.savedAt ?? 0);
                    const isExpired = !savedAt || Date.now() - savedAt > STORAGE_TTL_MS;

                    if (isExpired) {
                        localStorage.removeItem(STORAGE_KEY);
                    } else if (parsed?.answers) {
                        Object.entries(parsed.answers).forEach(([k, v]) => {
                            const idNum = Number(k);
                            if (Number.isFinite(idNum)) setAnswer(idNum, String(v));
                        });
                    }
                }
            } catch {
                try {
                    if (typeof window !== "undefined") {
                        localStorage.removeItem(STORAGE_KEY);
                    }
                } catch {
                    // ignore
                }
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

    useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify({
                        answers,
                        savedAt: Date.now(),
                    })
                );
            }
        } catch {
            // ignore
        }
    }, [answers]);

    useEffect(() => {
        if (submitted || questionsLoading || questions.length === 0) return;

        const t = setInterval(() => {
            setTimeLeft((s) => (s > 0 ? s - 1 : 0));
        }, 1000);

        return () => clearInterval(t);
    }, [submitted, questionsLoading, questions.length]);

    useEffect(() => {
        if (timeLeft === 0 && !submitted && questions.length > 0) {
            setShowDialog(true);
        }
    }, [timeLeft, submitted, questions.length]);

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

        for (const item of questions) {
            if (item.id === 45) continue;
            if (item.questionType === "passage") continue;

            const pts = Number(item.points ?? getQuestionPoints(item.id) ?? 0);
            testMaxPresent += pts;

            const label = labelMap[item.id] ?? String(item.id);
            const userAns = (answers[item.id] ?? "").trim();

            if (
                item.questionType === "multiple_choice" ||
                item.questionType === "diagram_mcq" ||
                item.questionType === "match_table"
            ) {
                const correct = (item.correctAnswer ?? "").toUpperCase();
                const verdict: "✔" | "✘" | "-" = userAns
                    ? userAns.toUpperCase() === correct
                        ? "✔"
                        : "✘"
                    : "-";

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

            if (item.questionType === "structured" || item.questionType === "structured_textarea") {
                const parts: StructuredPart[] = item.parts ?? [];
                const userParts = String(answers[item.id] ?? "").split("||");
                const correctParts = parts.map((p) => (p.correct ?? "").trim());

                let verdict: "✔" | "✘" | "-" = "-";

                if (correctParts.some((c) => c.length > 0)) {
                    const allOk =
                        correctParts.length > 0 &&
                        correctParts.every(
                            (c, i) => c.length > 0 && normalize(c) === normalize(userParts[i] ?? "")
                        );

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

            newRows.push({
                label,
                qid: item.id,
                user: disp(userAns),
                correct: "—",
                verdict: "-",
            });
        }

        const totalPoints = testMaxPresent > 0 ? (testScore / testMaxPresent) * TEST_MAX : 0;
        const totalPercent = testMaxPresent > 0 ? Math.round((testScore / testMaxPresent) * 100) : 0;
        const grade = letterGradeFromTotal(totalPoints, TEST_MAX);

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

        try {
            if (typeof window !== "undefined") {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch {
            // ignore
        }
    }

    function onClickFinish() {
        setShowDialog(true);
    }

    function handleAnswerForCurrent(val: string) {
        if (!q) return;

        const id = q.id;
        const isCapRange = id >= 33 && id <= 44;
        const normalized = isCapRange ? val.toUpperCase() : val;

        setAnswer(id, normalized);
    }

    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

    const headerLabel = useMemo(() => {
        const id = ids[currentQuestionIndex];
        const lab = labelMap[id];

        if (lab === "M") return "Matnni o‘qing va keyingi savollarga javob bering.";
        if (lab === "G") return "G‘azalni o‘qing va keyingi savollarga javob bering.";
        if (!lab) return "Savol yuklanmoqda...";

        return `Savol ${lab} / ${totalNumbered}`;
    }, [currentQuestionIndex, ids, labelMap, totalNumbered]);

    const footerLeftText = useMemo(() => {
        const id = ids[currentQuestionIndex];
        const lab = labelMap[id];

        if (lab === "M") return "Matn";
        if (lab === "G") return "G‘azal";
        if (!lab) return "";

        return `Savol ${lab} / ${totalNumbered}`;
    }, [currentQuestionIndex, ids, labelMap, totalNumbered]);

    if (questionsLoading) {
        return (
            <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <Card className="p-5 text-center">
                        <h1 className="text-xl font-semibold">Savollar yuklanmoqda...</h1>
                        <p className="mt-2 text-sm text-gray-600">Iltimos, biroz kuting.</p>
                    </Card>
                </div>
            </main>
        );
    }

    if (questionsError || questions.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <Card className="space-y-4 p-5 text-center">
                        <div>
                            <h1 className="text-xl font-semibold text-red-600">Savollar yuklanmadi</h1>
                            <p className="mt-2 text-sm text-gray-600">
                                {questionsError ?? "Hozircha faol savollar topilmadi."}
                            </p>
                        </div>

                        <Button onClick={() => void fetchQuestions()}>
                            Qayta yuklash
                        </Button>
                    </Card>
                </div>
            </main>
        );
    }

    if (!q) {
        return (
            <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <Card className="space-y-4 p-5 text-center">
                        <h1 className="text-xl font-semibold text-red-600">Savol topilmadi</h1>
                        <Button onClick={() => setCurrentQuestion(0)}>
                            Birinchi savolga qaytish
                        </Button>
                    </Card>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-4 sm:px-6 sm:py-6">
            <div className="mx-auto max-w-3xl space-y-5 sm:space-y-6">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-semibold">Imtihon</h1>

                    <div className="w-fit rounded-lg border bg-white px-3 py-1.5 text-sm">
                        Vaqt:{" "}
                        <span className="font-mono">
                            {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
                        </span>
                    </div>
                </header>

                {!submitted ? (
                    <Card className="p-4 sm:p-5">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="text-sm text-gray-500">{headerLabel}</div>

                            <div className="grid grid-cols-2 gap-2 sm:flex">
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
                                    onClick={() =>
                                        setCurrentQuestion(Math.min(questions.length - 1, currentQuestionIndex + 1))
                                    }
                                    disabled={currentQuestionIndex === questions.length - 1}
                                    className="whitespace-nowrap"
                                >
                                    Keyingi
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <QuestionRenderer
                                q={q}
                                answer={answers[q.id]}
                                onAnswer={handleAnswerForCurrent}
                            />
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

                        <SubmitDialog
                            open={showDialog}
                            onClose={() => setShowDialog(false)}
                            onSubmit={(info) => {
                                setShowDialog(false);
                                void finalizeAndScore(info);
                            }}
                        />
                    </Card>
                ) : (
                    <Card className="p-4 sm:p-5">
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

                        <div className="mt-4 overflow-x-auto">
                            <table className="min-w-[700px] border text-sm">
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
                        className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 sm:w-auto"
                    >
                        Telegram kanalga qo&#39;shilish
                    </Link>
                </div>
            </div>
        </main>
    );
}