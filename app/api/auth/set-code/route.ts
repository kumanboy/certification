// app/api/auth/set-code/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { saveActiveCode } from "@/lib/active-code";

type SetCodeBody = { ttlSeconds?: number };

function normalizeTtlSeconds(bodyTtl: number | undefined): number {
    if (typeof bodyTtl === "number" && Number.isFinite(bodyTtl) && bodyTtl > 0) return bodyTtl;
    const envMinutes = Number(process.env.ROTATE_INTERVAL_MIN || 180);
    return (Number.isFinite(envMinutes) && envMinutes > 0 ? envMinutes : 180) * 60;
}

function makeCode(len = 6): string {
    const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    const buf = randomBytes(len);
    let out = "";
    for (let i = 0; i < len; i++) out += alphabet[buf[i] % alphabet.length];
    return out;
}

function isSetCodeBody(x: unknown): x is SetCodeBody {
    if (typeof x !== "object" || x === null) return false;
    const o = x as Record<string, unknown>;
    return !("ttlSeconds" in o && typeof o.ttlSeconds !== "number");

}

export async function POST(req: Request) {
    const admin = req.headers.get("x-admin-secret");
    if (!admin || admin !== process.env.ACCESS_CODE_ADMIN_SECRET) {
        return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    let raw: unknown;
    try {
        raw = await req.json();
    } catch {
        raw = {};
    }
    if (!isSetCodeBody(raw)) {
        return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    const ttlSeconds = normalizeTtlSeconds(raw.ttlSeconds);

    // Generate a brand-new code each time /generate is pressed
    const code = makeCode(6);
    const expiresAt = Math.floor(Date.now() / 1000) + ttlSeconds;

    // Save as the ONLY active code (KV with TTL or dev fallback)
    await saveActiveCode({ code, expiresAt }, ttlSeconds);

    return NextResponse.json({ ok: true, code, expiresAt }, { status: 200 });
}

export function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
