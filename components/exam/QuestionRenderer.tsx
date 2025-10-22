// components/exam/QuestionRenderer.tsx
"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Question } from "@/types";
import MatchTable from "./MatchTable";

type Props = {
    q: Question;
    answer?: string;
    onAnswer: (val: string) => void;
};

const LABELS = ["A", "B", "C", "D", "E", "F"];

function isDiagramOption(
    opt: unknown
): opt is { top: string; left: string; right: string } {
    return (
        !!opt &&
        typeof opt === "object" &&
        "top" in (opt as any) &&
        "left" in (opt as any) &&
        "right" in (opt as any)
    );
}

function wordCount(text: string) {
    return (text.trim().match(/\S+/g) || []).length;
}

export default function QuestionRenderer({ q, answer, onAnswer }: Props) {
    const [showImg, setShowImg] = useState(false);

    const Stem =
        q.questionType === "passage" ? (
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                    Matnni o‘qing va keyingi savollarga javob bering.
                </h3>
                <pre className="whitespace-pre-wrap break-words text-base leading-7 bg-white rounded-lg border p-4">
          {q.questionText}
        </pre>
            </div>
        ) : (
            <pre className="whitespace-pre-wrap break-words text-lg font-medium">
        {`${q.id}. ${q.questionText}`}
      </pre>
        );

    // ===== Essay helpers =====
    const essayValue = useMemo(() => String(answer ?? ""), [answer]);
    const essayWords = useMemo(() => wordCount(essayValue), [essayValue]);
    const essayTooLong = essayWords > 300;
    const essayTooShort = essayWords > 0 && essayWords < 250;

    return (
        <div className="space-y-4">
            {Stem}

            {/* optional image (tap to enlarge) */}
            {q.imageUrl && (
                <>
                    <img
                        src={q.imageUrl}
                        alt="diagram"
                        className="mt-1 max-h-72 w-auto cursor-zoom-in rounded-md border bg-white"
                        onClick={() => setShowImg(true)}
                    />
                    {showImg && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                            onClick={() => setShowImg(false)}
                        >
                            <img
                                src={q.imageUrl}
                                alt="diagram enlarged"
                                className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl"
                            />
                        </div>
                    )}
                </>
            )}

            {/* MATCH TABLE */}
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
                                            checked
                                                ? "border-blue-600 bg-blue-50"
                                                : "hover:bg-gray-50"
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

            {/* DIAGRAM MCQ */}
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
                                    className={cn(
                                        "w-full rounded-lg border p-3 text-left transition",
                                        checked
                                            ? "border-blue-600 bg-blue-50"
                                            : "hover:bg-gray-50"
                                    )}
                                >
                                    <div className="mb-2 font-semibold">{label})</div>
                                    <div className="grid grid-cols-3 gap-2 items-start">
                                        <div />
                                        <div className="rounded-md border bg-white px-2 py-2 text-center text-sm font-medium">
                                            {opt.top}
                                        </div>
                                        <div />
                                        <div className="rounded-md border bg-white px-2 py-2 text-center text-sm">
                                            {opt.left}
                                        </div>
                                        <div className="flex items-center justify-center text-xs text-gray-500">
                                            ⇅
                                        </div>
                                        <div className="rounded-md border bg-white px-2 py-2 text-center text-sm">
                                            {opt.right}
                                        </div>
                                    </div>
                                </button>
                            );
                        }

                        const plain = String(opt).replace(/^[A-F]\)\s*/i, "");
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
                                <span>{plain}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* MULTIPLE CHOICE */}
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
                                className={cn(
                                    "w-full rounded-lg border px-4 py-2 text-left transition",
                                    checked ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50"
                                )}
                            >
                                <span className="mr-2 font-semibold">{label})</span>
                                <span>{opt}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* SINGLE-LINE INPUT */}
            {q.questionType === "fill_blank" && (
                <Input
                    placeholder="Javobingizni kiriting"
                    value={answer ?? ""}
                    onChange={(e) => onAnswer(e.target.value)}
                />
            )}

            {/* STRUCTURED (free text, single field) */}
            {q.questionType === "structured" && (
                <textarea
                    className="min-h-32 w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Javob:"
                    value={answer ?? ""}
                    onChange={(e) => onAnswer(e.target.value)}
                />
            )}

            {/* ESSAY (250–300 words, live counter, hard cap 300) */}
            {q.questionType === "essay" && (
                <div className="space-y-1">
          <textarea
              className={cn(
                  "min-h-48 w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2",
                  essayTooShort
                      ? "focus:ring-amber-500 border-amber-400"
                      : essayTooLong
                          ? "focus:ring-red-500 border-red-400"
                          : "focus:ring-blue-500"
              )}
              placeholder="250–300 so‘z yozing…"
              value={essayValue}
              onChange={(e) => {
                  const raw = e.target.value;
                  const parts = raw.trim().length ? raw.trim().split(/\s+/) : [];
                  const limited =
                      parts.length > 300 ? parts.slice(0, 300).join(" ") : raw;
                  onAnswer(limited);
              }}
          />
                    <div
                        className={cn(
                            "text-xs",
                            essayTooShort && "text-amber-600",
                            essayTooLong && "text-red-600",
                            !essayTooShort && !essayTooLong && "text-gray-500"
                        )}
                    >
                        So‘zlar: <b>{essayWords}</b> / 300 {essayTooShort && "(min 250)"}
                    </div>
                </div>
            )}
        </div>
    );
}
