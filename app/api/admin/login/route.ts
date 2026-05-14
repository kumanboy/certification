// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const secret = new TextEncoder().encode(
    process.env.ADMIN_JWT_SECRET || process.env.ADMIN_CODE || "change-this-secret"
);

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as { code?: string };
        const code = String(body.code ?? "").trim();

        if (!process.env.ADMIN_CODE) {
            return NextResponse.json(
                { ok: false, error: "ADMIN_CODE is not configured" },
                { status: 500 }
            );
        }

        if (code !== process.env.ADMIN_CODE) {
            return NextResponse.json(
                { ok: false, error: "Kod noto‘g‘ri" },
                { status: 401 }
            );
        }

        const token = await new SignJWT({ role: "admin" })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("12h")
            .sign(secret);

        const res = NextResponse.json({ ok: true });

        res.cookies.set("admin_token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 12,
        });

        return res;
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}