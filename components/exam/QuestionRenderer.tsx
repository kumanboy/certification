// components/exam/QuestionRenderer.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Question } from "@/types";
import MatchTable from "./MatchTable";

type Props = { q: Question; answer?: string; onAnswer: (val: string) => void };

const LABELS = ["A", "B", "C", "D", "E", "F"];

function isDiagramOption(opt: unknown): opt is { top: string; left: string; right: string } {
    return !!opt && typeof opt === "object" && "top" in (opt as any) && "left" in (opt as any) && "right" in (opt as any);
}

export default function QuestionRenderer({ q, answer, onAnswer }: Props) {
    const [showImg, setShowImg] = useState(false);

    const Stem =
        q.questionType === "passage" ? (
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">Matnni o‘qing va keyingi savollarga javob bering.</h3>
                <pre className="whitespace-pre-wrap break-words text-base leading-7 bg-white rounded-lg border p-4">
          {q.questionText}
        </pre>
            </div>
        ) : (
            <pre className="whitespace-pre-wrap break-words text-lg font-medium">{`${q.id}. ${q.questionText}`}</pre>
        );

    // helpers for structured multi-part answers: join/split with "||"
    const splitAns = (answer ?? "").split("||");

    const setPart = (idx: number, val: string) => {
        const arr = [...splitAns];
        // make sure length fits
        while (arr.length < (q.parts?.length ?? 1)) arr.push("");
        arr[idx] = val;
        onAnswer(arr.join("||"));
    };

    return (
        <div className="space-y-4">
            {Stem}

            {/* optional image (click to enlarge) */}
            {q.imageUrl && (
                <>
                    <img
                        src={q.imageUrl}
                        alt="diagram"
                        className="mt-1 max-h-72 w-auto cursor-zoom-in rounded-md border bg-white"
                        onClick={() => setShowImg(true)}
                    />
                    {showImg && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setShowImg(false)}>
                            <img src={q.imageUrl} alt="diagram enlarged" className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl" />
                        </div>
                    )}
                </>
            )}

            {/* match-table */}
            {q.questionType === "match_table" && q.match && (
                <>
                    <MatchTable match={q.match} />
                    {q.options?.length ? (
                        <div className="grid gap-2 mt-3">
                            {q.options.map((raw, idx) => {
                                const label = LABELS[idx] ?? String(idx + 1);
                                const opt = String(raw).replace(/^[A-F]\)\s*/i, "");
                                const checked = (answer ?? "").toUpperCase() === label;
                                return (
                                    <button
                                        key={label}
                                        onClick={() => onAnswer(label)}
                                        className={cn(
                                            "w-full rounded-lg border px-4 py-2 text-left transition",
                                            checked ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50"
                                        )}
                                    >
                                        <span className="mr-2 font-semibold">{label})</span>
                                        <span className="font-mono">{opt}</span>
                                    </button>
                                );
                            })}
                        </div>
                    ) : null}
                </>
            )}

            {/* diagram_mcq */}
            {q.questionType === "diagram_mcq" && (
                <div className="grid gap-3">
                    {q.options?.map((opt, idx) => {
                        const label = LABELS[idx] ?? String(idx + 1);
                        const checked = (answer ?? "").toUpperCase() === label;

                        if (isDiagramOption(opt)) {
                            return (
                                <button
                                    key={label}
                                    onClick={() => onAnswer(label)}
                                    className={cn("w-full rounded-lg border p-3 text-left transition", checked ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50")}
                                >
                                    <div className="mb-2 font-semibold">{label})</div>
                                    <div className="grid grid-cols-3 gap-2 items-start">
                                        <div />
                                        <div className="rounded-md border bg-white px-2 py-2 text-center text-sm font-medium">{opt.top}</div>
                                        <div />
                                        <div className="rounded-md border bg-white px-2 py-2 text-center text-sm">{opt.left}</div>
                                        <div className="flex items-center justify-center text-xs text-gray-500">⇅</div>
                                        <div className="rounded-md border bg-white px-2 py-2 text-center text-sm">{opt.right}</div>
                                    </div>
                                </button>
                            );
                        }

                        const plain = String(opt).replace(/^[A-F]\)\s*/i, "");
                        return (
                            <button
                                key={label}
                                onClick={() => onAnswer(label)}
                                className={cn("w-full rounded-lg border px-4 py-2 text-left transition", checked ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50")}
                            >
                                <span className="mr-2 font-semibold">{label})</span>
                                <span>{plain}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* multiple choice */}
            {q.questionType === "multiple_choice" && (
                <div className="grid gap-2">
                    {q.options?.map((raw, idx) => {
                        const label = LABELS[idx] ?? String(idx + 1);
                        const opt = String(raw).replace(/^[A-F]\)\s*/i, "");
                        const checked = (answer ?? "").toUpperCase() === label;
                        return (
                            <button
                                key={label}
                                onClick={() => onAnswer(label)}
                                className={cn("w-full rounded-lg border px-4 py-2 text-left transition", checked ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50")}
                            >
                                <span className="mr-2 font-semibold">{label})</span>
                                <span>{opt}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* structured (single or multi-part free text) */}
            {q.questionType === "structured" && (
                <div className="space-y-3">
                    {(q.parts && q.parts.length ? q.parts : [{ key: "a", label: "Javob:", multiline: false }]).map((p, idx) => (
                        <div key={p.key} className="space-y-1">
                            <div className="text-sm font-medium">
                                {p.key}) {p.label}
                            </div>
                            {p.multiline ? (
                                <textarea
                                    className="min-h-32 w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder={p.placeholder ?? "Javobingizni yozing"}
                                    value={splitAns[idx] ?? ""}
                                    onChange={(e) => setPart(idx, e.target.value)}
                                />
                            ) : (
                                <Input
                                    placeholder={p.placeholder ?? "Javobingizni kiriting"}
                                    value={splitAns[idx] ?? ""}
                                    onChange={(e) => setPart(idx, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* essay */}
            {q.questionType === "essay" && (
                <textarea
                    className="min-h-60 w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Kamida 250 so‘z yozing..."
                    value={answer ?? ""}
                    onChange={(e) => onAnswer(e.target.value)}
                />
            )}
        </div>
    );
}
