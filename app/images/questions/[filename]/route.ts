// app/images/questions/[filename]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getContentType(filename: string): string {
    const ext = path.extname(filename).toLowerCase();

    if (ext === ".png") return "image/png";
    if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
    if (ext === ".webp") return "image/webp";

    return "application/octet-stream";
}

function isSafeFilename(filename: string): boolean {
    if (!filename) return false;
    if (filename.includes("/") || filename.includes("\\")) return false;
    if (filename.includes("..")) return false;

    return /\.(png|jpg|jpeg|webp)$/i.test(filename);
}

export async function GET(
    _req: NextRequest,
    context: { params: Promise<{ filename: string }> }
) {
    try {
        const { filename } = await context.params;

        if (!isSafeFilename(filename)) {
            return NextResponse.json(
                { ok: false, error: "Invalid filename" },
                { status: 400 }
            );
        }

        const fullPath = path.join(
            process.cwd(),
            "public",
            "images",
            "questions",
            filename
        );

        await stat(fullPath);

        const file = await readFile(fullPath);

        return new Response(file, {
            status: 200,
            headers: {
                "Content-Type": getContentType(filename),
                "Cache-Control": "no-store, no-cache, must-revalidate",
            },
        });
    } catch {
        return NextResponse.json(
            { ok: false, error: "Image not found" },
            { status: 404 }
        );
    }
}