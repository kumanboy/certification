// app/api/auth/set-code/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { setCode } from "@/lib/code-store";

type SetCodeBody = {
    code?: string;
    ttlSeconds?: number;
};

function isSetCodeBody(x: unknown): x is SetCodeBody {
    if (typeof x !== "object" || x === null) return false;
    const o = x as Record<string, unknown>;
    if ("code" in o && typeof o.code !== "string") return false;
    return !("ttlSeconds" in o && typeof o.ttlSeconds !== "number");

}

// 6-char, no lookalikes
function makeCode(len = 6): string {
    const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let out = "";
    for (let i = 0; i < len; i++) out += alphabet[(Math.random() * alphabet.length) | 0];
    return out;
}

export async function POST(req: Request) {
    // 1) Admin auth
    const admin = req.headers.get("x-admin-secret");
    if (!admin || admin !== process.env.ACCESS_CODE_ADMIN_SECRET) {
        return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    // 2) Parse & validate body (no `any`)
    let raw: unknown;
    try {
        raw = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }
    if (!isSetCodeBody(raw)) {
        return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    // 3) Normalize inputs
    const ttlSeconds =
        typeof raw.ttlSeconds === "number" && raw.ttlSeconds > 0 ? raw.ttlSeconds : 60 * 60 * 3;

    const provided = typeof raw.code === "string" ? raw.code.trim() : "";
    const code = provided || makeCode(6); // generate if empty/missing

    // 4) Persist
    const expiresAt = Math.floor(Date.now() / 1000) + ttlSeconds;
    await setCode({ code, expiresAt });

    // 5) Respond (include code for Telegram to show)
    return NextResponse.json({ ok: true, code, expiresAt }, { status: 200 });
}

export function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
