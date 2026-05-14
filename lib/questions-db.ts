
// lib/questions-db.ts
import { pool } from "@/lib/db";
import type { Question } from "@/types";
import { QUESTIONS } from "@/app/exam/questions";

type QuestionRow = {
    id: number;
    question_text: string;
    question_type: Question["questionType"];
    options_json: Question["options"] | null;
    correct_answer: string | null;
    image_url: string | null;
    points: string | number | null;
    match_json: Question["match"] | null;
    parts_json: Question["parts"] | null;
    diagram4_json: Question["diagram4"] | null;
    sort_order: number;
    is_active: boolean;
};

export function rowToQuestion(row: QuestionRow): Question {
    return {
        id: Number(row.id),
        questionText: row.question_text,
        questionType: row.question_type,
        options: row.options_json ?? undefined,
        correctAnswer: row.correct_answer ?? undefined,
        imageUrl: row.image_url ?? undefined,
        points: row.points === null ? undefined : Number(row.points),
        match: row.match_json ?? undefined,
        parts: row.parts_json ?? undefined,
        diagram4: row.diagram4_json ?? undefined,
    };
}

export async function getActiveQuestions(): Promise<Question[]> {
    const r = await pool.query<QuestionRow>(`
        SELECT *
        FROM questions
        WHERE is_active = TRUE
        ORDER BY sort_order ASC, id ASC
    `);

    if (r.rows.length > 0) {
        return r.rows.map(rowToQuestion);
    }

    // Fallback: your old hardcoded questions still work if DB is empty
    return QUESTIONS;
}

export async function getAllAdminQuestions(): Promise<Question[]> {
    const r = await pool.query<QuestionRow>(`
        SELECT *
        FROM questions
        ORDER BY sort_order ASC, id ASC
    `);

    return r.rows.map(rowToQuestion);
}