import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const q = (searchParams.get("q") ?? "").trim();

        const sql = q
            ? `
        SELECT id, first_name, last_name, total_percent, grade, created_at
        FROM attempts
        WHERE (first_name ILIKE $1 OR last_name ILIKE $1)
        ORDER BY created_at DESC
        LIMIT 500
      `
            : `
        SELECT id, first_name, last_name, total_percent, grade, created_at
        FROM attempts
        ORDER BY created_at DESC
        LIMIT 500
      `;

        const values = q ? [`%${q}%`] : [];
        const r = await pool.query(sql, values);

        return NextResponse.json({ ok: true, items: r.rows });
    } catch (e) {
        console.error("attempts/list error:", e);
        return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
    }
}
