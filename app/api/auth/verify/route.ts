// app/api/auth/verify/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createSessionToken } from "@/lib/session";
import { loadActiveCode } from "@/lib/active-code";

type VerifyBody = { code: string };

function isVerifyBody(x: unknown): x is VerifyBody {
    if (typeof x !== "object" || x === null) return false;
    const o = x as Record<string, unknown>;
    return typeof o.code === "string" && o.code.length > 0;
}

export async function POST(req: Request) {
    let raw: unknown;
    try {
        raw = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }
    if (!isVerifyBody(raw)) {
        return NextResponse.json({ ok: false, error: "Code required" }, { status: 400 });
    }

    const submitted = raw.code.trim().toUpperCase();
    const active = await loadActiveCode();
    const nowSec = Math.floor(Date.now() / 1000);

    if (!active || active.expiresAt <= nowSec) {
        return NextResponse.json({ ok: false, error: "Invalid or expired code" }, { status: 401 });
    }

    if (submitted !== active.code.toUpperCase()) {
        return NextResponse.json({ ok: false, error: "Invalid or expired code" }, { status: 401 });
    }

    const ttlSeconds = active.expiresAt - nowSec; // remaining time for cookie
    const userId = randomUUID();
    const token = await createSessionToken(userId);

    const res = NextResponse.json({ ok: true });
    res.headers.set(
        "Set-Cookie",
        `session=${token}; Path=/; Max-Age=${ttlSeconds}; HttpOnly; Secure; SameSite=Lax`
    );
    return res;
}

export function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
