import {NextResponse} from "next/server";
import {pool} from "@/lib/db";
import {QUESTIONS} from "@/app/exam/questions";
import type {StructuredPart} from "@/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AttemptRow = {
    answers_json: Record<string, string> | string | null;
};

type StatItem = {
    label: string; // e.g. "1", "40a", "40b", "33", "34", "35"
    correctCount: number;
};

function normalizeFreeText(s: string): string {
    let v = s.normalize("NFKC").trim();
    v = v.replace(/[`´ʻ’‘ʹʼ]/g, "'");
    v = v.replace(/\u2026/g, "...").replace(/\.{2,}/g, "...");
    v = v.replace(/[–—]/g, "-");
    v = v.replace(/\s+/g, " ");
    return v.toUpperCase();
}

function parseAnswersJson(v: Record<string, string> | string | null): Record<string, string> {
    if (v === null) return {};
    if (typeof v === "string") {
        try {
            const obj = JSON.parse(v) as Record<string, string>;
            return typeof obj === "object" && obj !== null ? obj : {};
        } catch {
            return {};
        }
    }
    return v;
}

/**
 * Build the ordered labels list exactly like your chart:
 * - normal questions: "1", "2", ...
 * - Q33 (covers 33–35) => output labels: "33","34","35"
 * - structured (multi parts): "40a","40b" etc
 * - structured (single part): "36","37" etc
 * - exclude passages + essay (45)
 */
function buildLabelsOrder(): string[] {
    const out: string[] = [];

    for (const q of QUESTIONS) {
        if (q.questionType === "passage") continue;
        if (q.id === 45) continue; // essay excluded

        // Special: your Q33 page represents 33–35
        if (q.id === 33) {
            out.push("33", "34", "35");
            continue;
        }

        if (q.questionType === "structured") {
            const parts = (q.parts ?? []) as StructuredPart[];

            if (parts.length <= 1) {
                out.push(String(q.id)); // 36,37,38,39...
            } else {
                for (const p of parts) out.push(`${q.id}${p.key}`); // 40a,40b...
            }
            continue;
        }

        // MCQ / diagram_mcq / match_table etc.
        out.push(String(q.id));
    }

    return out;
}

function isCorrectForQuestion(
    q: (typeof QUESTIONS)[number],
    answers: Record<string, string>
): Record<string, boolean> {
    // returns map label -> correct?
    // because structured can produce multiple labels (40a/40b),
    // and Q33 produces 33/34/35

    const result: Record<string, boolean> = {};

    // ignore passages/essay
    if (q.questionType === "passage" || q.id === 45) return result;

    const idKey = String(q.id);
    const userRaw = (answers[idKey] ?? "").trim();

    // Q33 special (represents 33–35)
    if (q.id === 33) {
        const correct = String(q.correctAnswer ?? "").trim().toUpperCase();
        const ok = userRaw.length > 0 && userRaw.toUpperCase() === correct;
        result["33"] = ok;
        result["34"] = ok;
        result["35"] = ok;
        return result;
    }

    // MCQ-like
    if (
        q.questionType === "multiple_choice" ||
        q.questionType === "diagram_mcq" ||
        q.questionType === "match_table"
    ) {
        const correct = String(q.correctAnswer ?? "").trim().toUpperCase();
        result[String(q.id)] = userRaw.length > 0 && userRaw.toUpperCase() === correct;
        return result;
    }

    // Structured
    if (q.questionType === "structured") {
        const parts = (q.parts ?? []) as StructuredPart[];
        const userParts = String(answers[idKey] ?? "").split("||");

        if (parts.length <= 1) {
            const correct = normalizeFreeText(String(parts[0]?.correct ?? ""));
            result[String(q.id)] = correct.length > 0 && normalizeFreeText(userParts[0] ?? "") === correct;
            return result;
        }

        for (let i = 0; i < parts.length; i += 1) {
            const p = parts[i];
            const correct = normalizeFreeText(String(p.correct ?? ""));
            result[`${q.id}${p.key}`] = correct.length > 0 && normalizeFreeText(userParts[i] ?? "") === correct;
        }
        return result;
    }

    return result;
}

export async function GET() {
    try {
        const labelsOrder = buildLabelsOrder();

        const counts: Record<string, number> = {};
        for (const lab of labelsOrder) counts[lab] = 0;

        const r = await pool.query("SELECT answers_json FROM attempts");
        const rows = r.rows as AttemptRow[];

        const totalAttempts = rows.length;

        for (const row of rows) {
            const answers = parseAnswersJson(row.answers_json);

            for (const q of QUESTIONS) {
                const okMap = isCorrectForQuestion(q, answers);
                for (const [lab, ok] of Object.entries(okMap)) {
                    if (ok && Object.prototype.hasOwnProperty.call(counts, lab)) {
                        counts[lab] = counts[lab] + 1;
                    }
                }
            }
        }

        const items: StatItem[] = labelsOrder.map((lab) => ({
            label: lab,
            correctCount: counts[lab] ?? 0,
        }));

        return NextResponse.json({
            ok: true,
            totalAttempts,
            items,
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("stats/correct-by-question error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}
