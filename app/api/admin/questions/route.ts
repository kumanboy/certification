// app/api/admin/questions/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { getAllAdminQuestions } from "@/lib/questions-db";
import type { Question } from "@/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = Question & {
    sortOrder?: number;
    isActive?: boolean;
};

export async function GET() {
    try {
        const questions = await getAllAdminQuestions();
        return NextResponse.json({ ok: true, questions });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("admin/questions GET error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const b = (await req.json()) as Partial<Body>;

        if (!b.id || !b.questionText || !b.questionType) {
            return NextResponse.json(
                { ok: false, error: "id, questionText, questionType required" },
                { status: 400 }
            );
        }

        const q = `
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
                $8::jsonb, $9::jsonb, $10::jsonb, $11, $12
            )
            RETURNING id
        `;

        const values = [
            Number(b.id),
            String(b.questionText),
            String(b.questionType),
            JSON.stringify(b.options ?? null),
            b.correctAnswer ? String(b.correctAnswer).toUpperCase() : null,
            b.imageUrl ? String(b.imageUrl) : null,
            Number(b.points ?? 0),
            JSON.stringify(b.match ?? null),
            JSON.stringify(b.parts ?? null),
            JSON.stringify(b.diagram4 ?? null),
            Number(b.sortOrder ?? b.id),
            typeof b.isActive === "boolean" ? b.isActive : true,
        ];

        const r = await pool.query(q, values);
        return NextResponse.json({ ok: true, question: r.rows[0] });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("admin/questions POST error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}