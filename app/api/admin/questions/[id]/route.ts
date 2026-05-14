// app/api/admin/questions/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";
import type { Question } from "@/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = Question & {
    sortOrder?: number;
    isActive?: boolean;
};

export async function PUT(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const questionId = Number(id);

        if (!Number.isFinite(questionId)) {
            return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
        }

        const b = (await req.json()) as Partial<Body>;

        if (!b.questionText || !b.questionType) {
            return NextResponse.json(
                { ok: false, error: "questionText and questionType required" },
                { status: 400 }
            );
        }

        const q = `
            UPDATE questions
            SET
                question_text = $2,
                question_type = $3,
                options_json = $4::jsonb,
                correct_answer = $5,
                image_url = $6,
                points = $7,
                match_json = $8::jsonb,
                parts_json = $9::jsonb,
                diagram4_json = $10::jsonb,
                sort_order = $11,
                is_active = $12,
                updated_at = now()
            WHERE id = $1
            RETURNING id
        `;

        const values = [
            questionId,
            String(b.questionText),
            String(b.questionType),
            JSON.stringify(b.options ?? null),
            b.correctAnswer ? String(b.correctAnswer).toUpperCase() : null,
            b.imageUrl ? String(b.imageUrl) : null,
            Number(b.points ?? 0),
            JSON.stringify(b.match ?? null),
            JSON.stringify(b.parts ?? null),
            JSON.stringify(b.diagram4 ?? null),
            Number(b.sortOrder ?? questionId),
            typeof b.isActive === "boolean" ? b.isActive : true,
        ];

        const r = await pool.query(q, values);

        if (r.rowCount === 0) {
            return NextResponse.json({ ok: false, error: "Question not found" }, { status: 404 });
        }

        return NextResponse.json({ ok: true, question: r.rows[0] });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("admin/questions PUT error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}

export async function DELETE(
    _req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const questionId = Number(id);

        if (!Number.isFinite(questionId)) {
            return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
        }

        const r = await pool.query("DELETE FROM questions WHERE id = $1 RETURNING id", [questionId]);

        if (r.rowCount === 0) {
            return NextResponse.json({ ok: false, error: "Question not found" }, { status: 404 });
        }

        return NextResponse.json({ ok: true });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("admin/questions DELETE error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}