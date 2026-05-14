// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
    process.env.ADMIN_JWT_SECRET || process.env.ADMIN_CODE || "change-this-secret"
);

async function isAdmin(req: NextRequest): Promise<boolean> {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) return false;

    try {
        await jwtVerify(token, secret);
        return true;
    } catch {
        return false;
    }
}

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isProtectedAdminApi =
        pathname.startsWith("/api/admin") &&
        pathname !== "/api/admin/login" &&
        pathname !== "/api/admin/me";

    if (isProtectedAdminApi) {
        const allowed = await isAdmin(req);

        if (!allowed) {
            return NextResponse.json(
                { ok: false, error: "Unauthorized" },
                { status: 401 }
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/api/admin/:path*"],
};