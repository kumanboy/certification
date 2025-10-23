// app/api/auth/set-code/route.ts
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { setCode } from "@/lib/code-store";

// tiny generator: 6-char, no look-alikes (O/0, l/1)
function makeCode(len = 6) {
    const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < len; i++) {
        result += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return result;
}

export async function POST(req: Request) {
    try {
        // 1) auth
        const admin = req.headers.get("x-admin-secret");
        if (!admin || admin !== process.env.ACCESS_CODE_ADMIN_SECRET) {
            return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
        }

        // 2) parse body
        let body: any = {};
        try {
            body = await req.json();
        } catch {
            return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
        }

        // 3) normalize inputs
        const rawTtl = Number(body?.ttlSeconds);
        const ttlSeconds = Number.isFinite(rawTtl) && rawTtl > 0 ? rawTtl : 60 * 60 * 3; // default 3h
        const provided = typeof body?.code === "string" ? body.code.trim() : "";
        const code = provided || makeCode(6); // <-- generate if empty/missing

        // 4) persist
        const expiresAt = Math.floor(Date.now() / 1000) + ttlSeconds;
        await setCode({ code, expiresAt });

        // 5) respond
        return NextResponse.json({ ok: true, code, expiresAt }, { status: 200 });
    } catch (err) {
        console.error("set-code error:", err);
        return NextResponse.json({ ok: false, error: "Internal Error" }, { status: 500 });
    }
}

export function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
