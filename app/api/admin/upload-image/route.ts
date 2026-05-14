// app/api/admin/upload-image/route.ts
import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_TYPES = new Set([
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
]);

function safeFileName(name: string): string {
    const ext = path.extname(name).toLowerCase();

    const base = path
        .basename(name, ext)
        .toLowerCase()
        .replace(/[^a-z0-9-_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

    const stamp = Date.now();

    return `${base || "question-image"}-${stamp}${ext}`;
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                { ok: false, error: "Image file required" },
                { status: 400 }
            );
        }

        if (!ALLOWED_TYPES.has(file.type)) {
            return NextResponse.json(
                { ok: false, error: "Only PNG, JPG, JPEG, WEBP images are allowed" },
                { status: 400 }
            );
        }

        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                { ok: false, error: "Image must be smaller than 5MB" },
                { status: 400 }
            );
        }

        const fileName = safeFileName(file.name);

        const uploadDir = path.join(
            process.cwd(),
            "public",
            "images",
            "questions"
        );

        await mkdir(uploadDir, { recursive: true });

        const fullPath = path.join(uploadDir, fileName);
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        await writeFile(fullPath, buffer);

        return NextResponse.json({
            ok: true,
            url: `/images/questions/${fileName}`,
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("upload-image error:", e);

        return NextResponse.json(
            { ok: false, error: msg },
            { status: 500 }
        );
    }
}