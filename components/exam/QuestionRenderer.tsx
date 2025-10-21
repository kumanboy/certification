"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Question } from "@/types";
import DiagramPlaceholder from "./DiagramPlaceholder";
import Image from "next/image";

type Props = {
    q: Question & { diagram?: boolean };
    answer?: string;
    onAnswer: (val: string) => void;
};

const LABELS = ["A","B","C","D","E","F"];

export default function QuestionRenderer({ q, answer, onAnswer }: Props) {
    return (
        <div className="space-y-4">
            <div className="text-lg font-medium">{q.id}. {q.questionText}</div>

            {/* Optional static image (paste into /public/exams/ona1/q<ID>.png or set q.imageUrl) */}
            {q.imageUrl && (
                <div className="relative h-56 w-full overflow-hidden rounded-lg border bg-white">
                    <Image src={q.imageUrl} alt={`Q${q.id}`} fill className="object-contain" />
                </div>
            )}

            {/* Built-in diagram, no files needed */}
            {q.diagram && <DiagramPlaceholder />}

            {q.questionType === "multiple_choice" && (
                <div className="grid gap-2">
                    {q.options?.map((opt, idx) => {
                        const label = LABELS[idx] ?? String(idx + 1);
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

            {q.questionType === "fill_blank" && (
                <Input
                    placeholder="Javobingizni kiriting"
                    value={answer ?? ""}
                    onChange={(e) => onAnswer(e.target.value)}
                />
            )}

            {q.questionType === "essay" && (
                <textarea
                    className="min-h-40 w-full rounded-lg border p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Kamida 250 so‘z yozing..."
                    value={answer ?? ""}
                    onChange={(e) => onAnswer(e.target.value)}
                />
            )}
        </div>
    );
}
