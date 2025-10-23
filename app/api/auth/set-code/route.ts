// app/api/auth/set-code/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { createHmac } from "crypto";

type SetCodeBody = {
    ttlSeconds?: number; // optional override from caller
};

function pickAlphabetCode(hmac: Buffer, len = 6): string {
    const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no O/0, l/1
    const base = alphabet.length;
    let out = "";
    // use first len bytes; mix for distribution
    for (let i = 0; i < len; i++) {
        out += alphabet[hmac[i] % base];
    }
    return out;
}

function deriveCode(secret: string, slot: number, len = 6): string {
    const digest = createHmac("sha256", secret).update(String(slot)).digest();
    return pickAlphabetCode(digest, len);
}

function normalizeTtlSeconds(bodyTtl: number | undefined): number {
    if (typeof bodyTtl === "number" && Number.isFinite(bodyTtl) && bodyTtl > 0) return bodyTtl;
    const envMinutes = Number(process.env.ROTATE_INTERVAL_MIN || 180);
    return (Number.isFinite(envMinutes) && envMinutes > 0 ? envMinutes : 180) * 60;
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
    const slotSizeMs = ttlSeconds * 1000;
    const now = Date.now();
    const slot = Math.floor(now / slotSizeMs);

    const secret = process.env.ACCESS_CODE_ADMIN_SECRET!;
    const code = deriveCode(secret, slot, 6);
    const expiresAt = Math.floor((slot + 1) * slotSizeMs / 1000);

    // Stateless: we don’t persist; any region can recompute.
    return NextResponse.json({ ok: true, code, expiresAt }, { status: 200 });
}

export function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
