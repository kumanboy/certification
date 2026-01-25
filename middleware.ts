import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Auth is DISABLED — open access
export function middleware(req: NextRequest) {
    return NextResponse.next();
}
