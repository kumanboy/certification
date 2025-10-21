export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { setCode } from "@/lib/code-store";

export async function POST(req: Request) {
    const admin = req.headers.get("x-admin-secret");
    if (!admin || admin !== process.env.ACCESS_CODE_ADMIN_SECRET) {
        return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const { code, ttlSeconds = 60 * 60 * 3 } = await req.json();
    if (!code || typeof code !== "string") {
        return NextResponse.json({ ok: false, error: "Invalid code" }, { status: 400 });
    }

    const expiresAt = Math.floor(Date.now() / 1000) + ttlSeconds;
    await setCode({ code, expiresAt });
    return NextResponse.json({ ok: true, expiresAt });
}
