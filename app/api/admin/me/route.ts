// app/api/admin/me/route.ts
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const secret = new TextEncoder().encode(
    process.env.ADMIN_JWT_SECRET || process.env.ADMIN_CODE || "change-this-secret"
);

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("admin_token")?.value;

        if (!token) {
            return NextResponse.json({ ok: false }, { status: 401 });
        }

        await jwtVerify(token, secret);

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false }, { status: 401 });
    }
}