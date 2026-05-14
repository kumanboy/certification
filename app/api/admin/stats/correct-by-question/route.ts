// app/api/admin/stats/correct-by-question/route.ts
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { getActiveQuestions } from "@/lib/questions-db";
import type { Question, StructuredPart } from "@/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AttemptRow = {
    answers_json: Record<string, string> | string | null;
};

type StatItem = {
    label: string;
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

function buildLabelsOrder(questions: Question[]): string[] {
    const out: string[] = [];

    for (const q of questions) {
        if (q.questionType === "passage") continue;
        if (q.id === 45) continue;

        if (q.id === 33) {
            out.push("33", "34", "35");
            continue;
        }

        if (q.questionType === "structured" || q.questionType === "structured_textarea") {
            const parts = (q.parts ?? []) as StructuredPart[];

            if (parts.length <= 1) {
                out.push(String(q.id));
            } else {
                for (const p of parts) {
                    out.push(`${q.id}${p.key}`);
                }
            }

            continue;
        }

        out.push(String(q.id));
    }

    return out;
}

function isCorrectForQuestion(
    q: Question,
    answers: Record<string, string>
): Record<string, boolean> {
    const result: Record<string, boolean> = {};

    if (q.questionType === "passage" || q.id === 45) return result;

    const idKey = String(q.id);
    const userRaw = (answers[idKey] ?? "").trim();

    if (q.id === 33) {
        const correct = String(q.correctAnswer ?? "").trim().toUpperCase();
        const ok = userRaw.length > 0 && userRaw.toUpperCase() === correct;

        result["33"] = ok;
        result["34"] = ok;
        result["35"] = ok;

        return result;
    }

    if (
        q.questionType === "multiple_choice" ||
        q.questionType === "diagram_mcq" ||
        q.questionType === "match_table"
    ) {
        const correct = String(q.correctAnswer ?? "").trim().toUpperCase();
        result[String(q.id)] = userRaw.length > 0 && userRaw.toUpperCase() === correct;

        return result;
    }

    if (q.questionType === "structured" || q.questionType === "structured_textarea") {
        const parts = (q.parts ?? []) as StructuredPart[];
        const userParts = String(answers[idKey] ?? "").split("||");

        if (parts.length <= 1) {
            const correct = normalizeFreeText(String(parts[0]?.correct ?? ""));
            result[String(q.id)] =
                correct.length > 0 && normalizeFreeText(userParts[0] ?? "") === correct;

            return result;
        }

        for (let i = 0; i < parts.length; i += 1) {
            const p = parts[i];
            const correct = normalizeFreeText(String(p.correct ?? ""));

            result[`${q.id}${p.key}`] =
                correct.length > 0 && normalizeFreeText(userParts[i] ?? "") === correct;
        }

        return result;
    }

    return result;
}

export async function GET() {
    try {
        const questions = await getActiveQuestions();
        const labelsOrder = buildLabelsOrder(questions);

        const counts: Record<string, number> = {};
        for (const lab of labelsOrder) counts[lab] = 0;

        const r = await pool.query("SELECT answers_json FROM attempts");
        const rows = r.rows as AttemptRow[];

        const totalAttempts = rows.length;

        for (const row of rows) {
            const answers = parseAnswersJson(row.answers_json);

            for (const q of questions) {
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