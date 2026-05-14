// app/api/admin/questions/seed/route.ts
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { QUESTIONS } from "@/app/exam/questions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
    try {
        let inserted = 0;
        let updated = 0;

        for (let i = 0; i < QUESTIONS.length; i += 1) {
            const q = QUESTIONS[i];

            const sql = `
                INSERT INTO questions (
                    id,
                    question_text,
                    question_type,
                    options_json,
                    correct_answer,
                    image_url,
                    points,
                    match_json,
                    parts_json,
                    diagram4_json,
                    sort_order,
                    is_active
                )
                VALUES (
                    $1, $2, $3, $4::jsonb, $5, $6, $7,
                    $8::jsonb, $9::jsonb, $10::jsonb, $11, TRUE
                )
                ON CONFLICT (id)
                DO UPDATE SET
                    question_text = EXCLUDED.question_text,
                    question_type = EXCLUDED.question_type,
                    options_json = EXCLUDED.options_json,
                    correct_answer = EXCLUDED.correct_answer,
                    image_url = EXCLUDED.image_url,
                    points = EXCLUDED.points,
                    match_json = EXCLUDED.match_json,
                    parts_json = EXCLUDED.parts_json,
                    diagram4_json = EXCLUDED.diagram4_json,
                    sort_order = EXCLUDED.sort_order,
                    is_active = TRUE,
                    updated_at = now()
                RETURNING xmax = 0 AS inserted
            `;

            const values = [
                q.id,
                q.questionText,
                q.questionType,
                JSON.stringify(q.options ?? null),
                q.correctAnswer ?? null,
                q.imageUrl ?? null,
                Number(q.points ?? 0),
                JSON.stringify(q.match ?? null),
                JSON.stringify(q.parts ?? null),
                JSON.stringify(q.diagram4 ?? null),
                i + 1,
            ];

            const r = await pool.query<{ inserted: boolean }>(sql, values);

            if (r.rows[0]?.inserted) inserted += 1;
            else updated += 1;
        }

        return NextResponse.json({
            ok: true,
            total: QUESTIONS.length,
            inserted,
            updated,
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("questions seed error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}