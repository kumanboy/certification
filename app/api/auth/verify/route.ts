export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { isValidCode } from "@/lib/code-store";
import { createSessionToken } from "@/lib/session";

export async function POST(req: Request) {
    const { code } = await req.json();
    if (!code) return NextResponse.json({ ok: false, error: "Code required" }, { status: 400 });

    const ok = await isValidCode(code);
    if (!ok) return NextResponse.json({ ok: false, error: "Invalid or expired code" }, { status: 401 });

    const userId = crypto.randomUUID();
    const token = await createSessionToken(userId);

    const res = NextResponse.json({ ok: true });
    res.headers.set(
        "Set-Cookie",
        `session=${token}; Path=/; Max-Age=${60 * 60 * 3}; HttpOnly; Secure; SameSite=Lax`
    );
    return res;
}
