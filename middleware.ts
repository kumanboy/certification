import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED = [/^\/exam(\/.*)?$/];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const needsAuth = PROTECTED.some((r) => r.test(pathname));
    if (!needsAuth) return NextResponse.next();

    const session = req.cookies.get("session")?.value;
    if (!session) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("redirect", pathname);
        return NextResponse.redirect(url);
    }
    // Lightweight — JWT exp is enforced when server reads it; here we just check presence.
    return NextResponse.next();
}
