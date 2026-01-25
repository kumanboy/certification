import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
    firstName: string;
    lastName: string;
    totalPercent: number;
    grade: string;
    answersJson: Record<string, string>;
};

function isRecordOfStrings(v: unknown): v is Record<string, string> {
    if (typeof v !== "object" || v === null) return false;
    const obj = v as Record<string, unknown>;
    for (const val of Object.values(obj)) {
        if (typeof val !== "string") return false;
    }
    return true;
}

export async function POST(req: NextRequest) {
    try {
        const b = (await req.json()) as Partial<Body>;

        if (!b.firstName || !b.lastName) {
            return NextResponse.json(
                { ok: false, error: "firstName/lastName required" },
                { status: 400 }
            );
        }

        if (typeof b.totalPercent !== "number" || !b.grade) {
            return NextResponse.json(
                { ok: false, error: "totalPercent/grade required" },
                { status: 400 }
            );
        }

        if (!b.answersJson || !isRecordOfStrings(b.answersJson)) {
            return NextResponse.json(
                { ok: false, error: "answersJson must be Record<string,string>" },
                { status: 400 }
            );
        }

        const q = `
      INSERT INTO attempts (
        first_name,
        last_name,
        total_percent,
        grade,
        answers_json
      )
      VALUES ($1, $2, $3, $4, $5::jsonb)
      RETURNING id, created_at
    `;

        const values: [string, string, number, string, string] = [
            String(b.firstName),
            String(b.lastName),
            Number(b.totalPercent),
            String(b.grade),
            JSON.stringify(b.answersJson),
        ];

        const r = await pool.query(q, values);
        return NextResponse.json({ ok: true, attempt: r.rows[0] });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("attempts/create error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}
