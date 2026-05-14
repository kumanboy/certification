// app/api/questions/route.ts
import { NextResponse } from "next/server";
import { getActiveQuestions } from "@/lib/questions-db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const questions = await getActiveQuestions();
        return NextResponse.json({ ok: true, questions });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("api/questions error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}