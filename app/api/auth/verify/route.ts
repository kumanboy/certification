// app/api/auth/verify/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { createHmac, randomUUID } from "crypto";
import { createSessionToken } from "@/lib/session";

type VerifyBody = { code: string };

function isVerifyBody(x: unknown): x is VerifyBody {
    if (typeof x !== "object" || x === null) return false;
    const o = x as Record<string, unknown>;
    return typeof o.code === "string" && o.code.length > 0;
}

function normalizeTtlSeconds(): number {
    const envMinutes = Number(process.env.ROTATE_INTERVAL_MIN || 180);
    return (Number.isFinite(envMinutes) && envMinutes > 0 ? envMinutes : 180) * 60;
}

function pickAlphabetCode(hmac: Buffer, len = 6): string {
    const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    const base = alphabet.length;
    let out = "";
    for (let i = 0; i < len; i++) out += alphabet[hmac[i] % base];
    return out;
}

function deriveCode(secret: string, slot: number, len = 6): string {
    const digest = createHmac("sha256", secret).update(String(slot)).digest();
    return pickAlphabetCode(digest, len);
}

export async function POST(req: Request) {
    let raw: unknown;
    try { raw = await req.json(); }
    catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }

    if (!isVerifyBody(raw)) {
        return NextResponse.json({ ok: false, error: "Code required" }, { status: 400 });
    }

    const submitted = raw.code.trim().toUpperCase();
    const ttlSeconds = normalizeTtlSeconds();
    const secret = process.env.ACCESS_CODE_ADMIN_SECRET!;

    // >>> NEW: check per-second slots within the TTL window
    const nowSec = Math.floor(Date.now() / 1000);
    let valid = false;
    for (let s = nowSec; s >= nowSec - ttlSeconds; s--) {
        const expected = deriveCode(secret, s, 6);
        if (submitted === expected) { valid = true; break; }
    }

    if (!valid) {
        return NextResponse.json({ ok: false, error: "Invalid or expired code" }, { status: 401 });
    }

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
