"use client";

import { useEffect, useMemo, useState } from "react";
import { useExamStore } from "@/store/exam-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuestionRenderer from "@/components/exam/QuestionRenderer";
import QuestionNav from "@/components/exam/QuestionNav";
import SubmitDialog, { SubmitDetails } from "@/components/exam/SubmitDialog";
import { QUESTIONS } from "./questions";
import { getQuestionPoints, TEST_MAX, ESSAY_MAX, wordCount } from "@/lib/scoring";
import { letterGradeFromTotal } from "@/lib/grading";

const EXAM_MINUTES = 90;

/** passages → special labels (excluded from numbering & progress) */
const SPECIAL_LABELS: Record<number, "M" | "G"> = {
    100: "M",   // VIRUSLAR (after 17)
    2301: "M",  // “Kattalar” oqshomi
    2800: "G",  // G‘azal
};

/** manual numeric label overrides so your sequence is 1..32, [33,34,35 on Q33], 36, 37 ... */
const SPECIAL_NUMBERS: Record<number, number> = {
    33: 33,
    36: 36,
    37: 37,
};

export default function ExamPage() {
    const {
        currentQuestionIndex,
        setCurrentQuestion,
        answers,
        setAnswer,
        resetExam,
    } = useExamStore();

    const [timeLeft, setTimeLeft] = useState(EXAM_MINUTES * 60);
    const [submitted, setSubmitted] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [userInfo, setUserInfo] = useState<SubmitDetails | null>(null);

    const [calc, setCalc] = useState<{
        testScore: number;
        testMaxPresent: number;
        scaledTest: number;
        essayWords: number;
        essayScore: number;
        totalPoints: number;
        totalPercent: number;
        grade: string;
    } | null>(null);

    // simple rows for answers vs correct (for the results table)
    const [rows, setRows] = useState<
        { label: string; qid: number; user: string; correct?: string; verdict?: "✔" | "✘" | "-" }[]
    >([]);

    // ids in render order
    const ids = useMemo(() => QUESTIONS.map((q) => q.id), []);

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

        QUESTIONS.forEach((q, index) => {
            // passages: M / G
            if (q.id in SPECIAL_LABELS) {
                const lab = SPECIAL_LABELS[q.id];
                map[q.id] = lab;
                items.push({ label: lab, index, isPassage: true });
                return;
            }

            // numeric labels with overrides
            if (q.id in SPECIAL_NUMBERS) {
                run = SPECIAL_NUMBERS[q.id];
                map[q.id] = String(run);

                if (q.id === 33) {
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
            map[q.id] = String(run);
            items.push({ label: String(run), index });
        });

        const total = items.filter((it) => it.label !== "M" && it.label !== "G").length;
        return { labelMap: map, navItems: items, totalNumbered: total };
    }, []);

    // gradable total for progress = visible numeric labels (37)
    const progressTotal = totalNumbered;

    const q = useMemo(() => QUESTIONS[currentQuestionIndex], [currentQuestionIndex]);

    // init
    useEffect(() => {
        resetExam();
        setTimeLeft(EXAM_MINUTES * 60);
        setSubmitted(false);
        setCalc(null);
        setRows([]);
        setUserInfo(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    // compute + table + telegram (called after user fills dialog)
    async function finalizeAndScore(info: SubmitDetails) {
        setUserInfo(info);

        let testScore = 0;
        let testMaxPresent = 0;
        const newRows: typeof rows = [];

        for (const item of QUESTIONS) {
            if (item.id === 45) continue; // essay separately
            if (item.questionType === "passage") continue; // not graded

            const pts = getQuestionPoints(item.id);
            testMaxPresent += pts;

            const user = (answers[item.id] ?? "").trim();

            if (item.questionType === "multiple_choice") {
                const correct = (item.correctAnswer ?? "").toUpperCase();
                const verdict = user ? (user.toUpperCase() === correct ? "✔" : "✘") : "-";
                if (verdict === "✔") testScore += pts;

                newRows.push({
                    label: labelMap[item.id],
                    qid: item.id,
                    user: user || "—",
                    correct,
                    verdict,
                });
            } else {
                newRows.push({
                    label: labelMap[item.id],
                    qid: item.id,
                    user: user || "—",
                    correct: "—",
                    verdict: "-",
                });
            }
        }

        // essay
        const essayText = String(answers[45] ?? "");
        const essayWords = wordCount(essayText);
        const essayScore = 0; // manual grading later

        // send essay to telegram (best-effort)
        try {
            await fetch("/api/send-essay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ essayText, user: info }),
            });
        } catch {
            // ignore
        }

        const scaledTest = testMaxPresent > 0 ? (testScore / testMaxPresent) * TEST_MAX : 0;
        const totalPoints = scaledTest + essayScore;
        const totalPercent = Math.round((totalPoints / (TEST_MAX + ESSAY_MAX)) * 100);
        const grade = letterGradeFromTotal(totalPoints, TEST_MAX + ESSAY_MAX);

        setRows(newRows);
        setSubmitted(true);
        setCalc({
            testScore: Number(testScore.toFixed(2)),
            testMaxPresent: Number(testMaxPresent.toFixed(2)),
            scaledTest: Number(scaledTest.toFixed(2)),
            essayWords,
            essayScore: Number(essayScore.toFixed(2)),
            totalPoints: Number(totalPoints.toFixed(2)),
            totalPercent,
            grade,
        });
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
                                    onClick={() =>
                                        setCurrentQuestion(Math.min(QUESTIONS.length - 1, currentQuestionIndex + 1))
                                    }
                                    disabled={currentQuestionIndex === QUESTIONS.length - 1}
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
                                onAnswer={(val) => setAnswer(q.id, val)}
                            />
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-3">
                            <div className="min-w-0 flex-1">
                                <QuestionNav
                                    progressTotal={progressTotal}        // = 37
                                    current={currentQuestionIndex}
                                    answers={answers}
                                    ids={ids}
                                    onJump={setCurrentQuestion}
                                    labelMap={labelMap}
                                    navItems={navItems}                   // includes 33,34,35 → same page
                                    footerLeftText={footerLeftText}
                                />
                            </div>
                            <Button onClick={onClickFinish} className="shrink-0">
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
                                        Ism-familiya: <b>{userInfo.firstName} {userInfo.lastName}</b> · Telegram:{" "}
                                        <b>{userInfo.telegram}</b>
                                    </p>
                                )}
                                <p>Test (avto): <b>{calc.testScore}</b> / {calc.testMaxPresent}</p>
                                <p>Test (skalalanib): <b>{calc.scaledTest}</b> / {TEST_MAX}</p>
                                <p>Esse so‘zlar: <b>{calc.essayWords}</b> (ball {calc.essayScore} / {ESSAY_MAX})</p>
                                <hr className="my-2" />
                                <p>Umumiy ball: <b>{calc.totalPoints}</b> / {TEST_MAX + ESSAY_MAX}</p>
                                <p>Umumiy foiz: <b>{calc.totalPercent}%</b></p>
                                <p>Baholash: <b>{calc.grade}</b></p>
                            </div>
                        )}

                        {/* Answers table */}
                        <div className="mt-4 overflow-x-auto">
                            <table className="min-w-full text-sm border">
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
            </div>
        </main>
    );
}
