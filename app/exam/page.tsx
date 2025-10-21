"use client";

import { useEffect, useMemo, useState } from "react";
import { useExamStore } from "@/store/exam-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuestionRenderer from "@/components/exam/QuestionRenderer";
import { QUESTIONS } from "./questions";
import { getQuestionPoints, TEST_MAX, ESSAY_MAX, wordCount } from "@/lib/scoring";
import { letterGradeFromTotal } from "@/lib/grading";

const EXAM_MINUTES = 90; // change if needed

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
    const [calc, setCalc] = useState<{
        testScore: number;       // raw points gathered from present test items
        testMaxPresent: number;  // theoretical max from present test items
        scaledTest: number;      // scaled to official 75
        essayWords: number;
        essayScore: number;      // manual later (0 for now)
        totalPoints: number;     // scaledTest + essayScore (out of 150)
        totalPercent: number;    // %
        grade: string;
    } | null>(null);

    // init
    useEffect(() => {
        resetExam();
        setTimeLeft(EXAM_MINUTES * 60);
        setSubmitted(false);
        setCalc(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // countdown
    useEffect(() => {
        if (submitted) return;
        const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
        return () => clearInterval(t);
    }, [submitted]);

    // auto-submit on time up
    useEffect(() => {
        if (timeLeft === 0 && !submitted) onSubmit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft]);

    const q = useMemo(() => QUESTIONS[currentQuestionIndex], [currentQuestionIndex]);

    function onSubmit() {
        // 1) Auto-grade all non-essay questions using your per-ID weights
        let testScore = 0;
        let testMaxPresent = 0;

        for (const item of QUESTIONS) {
            if (item.id === 45) continue; // essay handled below
            const pts = getQuestionPoints(item.id);
            testMaxPresent += pts;

            const ans = (answers[item.id] ?? "").trim();

            if (item.questionType === "multiple_choice") {
                if (ans.toUpperCase() === (item.correctAnswer ?? "").toUpperCase()) {
                    testScore += pts;
                }
            } else if (item.questionType === "fill_blank") {
                const a = ans.toLowerCase().replace(/\s+/g, " ").trim();
                const c = (item.correctAnswer ?? "").toLowerCase().replace(/\s+/g, " ").trim();
                if (a && c && a === c) testScore += pts;
            }
        }

        // 2) Essay (Q45) must be ≥ 250 words
        let essayWords = 0;
        let essayScore = 0; // will be graded manually later (max 75)
        const essay = QUESTIONS.find((x) => x.id === 45);
        if (essay) {
            const text = (answers[45] ?? "");
            essayWords = wordCount(text);
            if (essayWords < 250) {
                alert("Esse kamida 250 so‘z bo‘lishi shart.");
                return; // block submission until requirement satisfied
            }
            // Keep 0 for now (manual marking). If you add a rubric, compute here up to ESSAY_MAX.
            essayScore = 0;
        }

        // 3) Scale present testScore to official TEST_MAX=75 so partial sets remain fair
        const scaledTest = testMaxPresent > 0 ? (testScore / testMaxPresent) * TEST_MAX : 0;

        // 4) Overall total out of 150 and letter grade (from your 75-point chart thresholds)
        const totalPoints = scaledTest + essayScore; // out of 150 (75 + 75)
        const totalPercent = Math.round((totalPoints / (TEST_MAX + ESSAY_MAX)) * 100);
        const grade = letterGradeFromTotal(totalPoints, TEST_MAX + ESSAY_MAX);

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

    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;

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
                            <div className="text-sm text-gray-500">
                                Savol {currentQuestionIndex + 1} / {QUESTIONS.length}
                            </div>
                            <div className="space-x-2">
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        setCurrentQuestion(Math.max(0, currentQuestionIndex - 1))
                                    }
                                    disabled={currentQuestionIndex === 0}
                                >
                                    Oldingi
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        setCurrentQuestion(
                                            Math.min(QUESTIONS.length - 1, currentQuestionIndex + 1)
                                        )
                                    }
                                    disabled={currentQuestionIndex === QUESTIONS.length - 1}
                                >
                                    Keyingi
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <QuestionRenderer
                                q={q as any}
                                answer={answers[q.id]}
                                onAnswer={(val) => setAnswer(q.id, val)}
                            />
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                                {QUESTIONS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentQuestion(i)}
                                        className={`h-8 w-8 rounded-md border text-sm ${
                                            i === currentQuestionIndex
                                                ? "border-blue-600 bg-blue-50"
                                                : "hover:bg-gray-50"
                                        }`}
                                        title={`Savol ${i + 1}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <Button onClick={onSubmit}>Yakunlash</Button>
                        </div>
                    </Card>
                ) : (
                    <Card>
                        <h2 className="text-xl font-semibold">Natija</h2>
                        {calc && (
                            <div className="mt-3 space-y-1">
                                <p>
                                    Test (avto) to‘plangan ball (hozirgi to‘plam):{" "}
                                    <b>{calc.testScore}</b> / {calc.testMaxPresent}
                                </p>
                                <p>
                                    Test (skalalanib) = <b>{calc.scaledTest}</b> / {TEST_MAX}
                                </p>
                                <p>
                                    Essa so‘zlar soni: <b>{calc.essayWords}</b> (≥ 250, ball:
                                    {` ${calc.essayScore}`} / {ESSAY_MAX})
                                </p>
                                <hr className="my-2" />
                                <p>
                                    Umumiy ball: <b>{calc.totalPoints}</b> / {TEST_MAX + ESSAY_MAX}
                                </p>
                                <p>
                                    Umumiy foiz: <b>{calc.totalPercent}%</b>
                                </p>
                                <p>
                                    Baholash: <b>{calc.grade}</b>
                                </p>
                                <p className="text-sm text-gray-500">
                                    Eslatma: essening yakuniy balli qo‘lda baholashdan so‘ng yangilanadi.
                                </p>
                            </div>
                        )}
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
