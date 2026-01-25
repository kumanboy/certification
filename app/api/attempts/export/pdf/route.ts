// app/api/attempts/export/pdf/route.ts
import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import { pool } from "@/lib/db";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AttemptRow = {
    first_name: string;
    last_name: string;
    total_percent: number;
    grade: string;
};

function requireFontPath(): string {
    const fontPath = path.join(process.cwd(), "public", "fonts", "DejaVuSans.ttf");
    if (!fs.existsSync(fontPath)) {
        throw new Error(
            `Font file not found: ${fontPath}. Put a .ttf font at public/fonts/DejaVuSans.ttf`
        );
    }
    return fontPath;
}

function concatToArrayBuffer(chunks: Uint8Array[]): ArrayBuffer {
    let total = 0;
    for (const c of chunks) total += c.byteLength;

    // IMPORTANT: force a real ArrayBuffer (not SharedArrayBuffer)
    const ab = new ArrayBuffer(total);
    const out = new Uint8Array(ab);

    let offset = 0;
    for (const c of chunks) {
        out.set(c, offset);
        offset += c.byteLength;
    }

    return ab;
}

function padText(v: string): string {
    return String(v ?? "").trim();
}

function drawCell(
    doc: PDFKit.PDFDocument,
    x: number,
    y: number,
    w: number,
    h: number,
    text: string,
    opts?: { align?: "left" | "center" | "right"; bold?: boolean }
) {
    doc.rect(x, y, w, h).stroke();

    const paddingX = 6;
    const paddingY = 6;

    if (opts?.bold) doc.fontSize(10).font("dejavu-bold");
    else doc.fontSize(10).font("dejavu");

    doc.text(text, x + paddingX, y + paddingY, {
        width: w - paddingX * 2,
        height: h - paddingY * 2,
        align: opts?.align ?? "left",
        lineBreak: false,
        ellipsis: true,
    });
}

async function buildPdfArrayBuffer(rows: AttemptRow[]): Promise<ArrayBuffer> {
    const fontPath = requireFontPath();
    const boldFontPath = fontPath; // DejaVuSans.ttf is fine for "bold" if you don't have bold ttf
    // If you have DejaVuSans-Bold.ttf, put it in public/fonts and set it here instead.

    return await new Promise<ArrayBuffer>((resolve, reject) => {
        const doc = new PDFDocument({ size: "A4", margin: 40 });

        const chunks: Uint8Array[] = [];
        doc.on("data", (chunk: Uint8Array) => chunks.push(chunk));
        doc.on("end", () => resolve(concatToArrayBuffer(chunks)));
        doc.on("error", (err) => reject(err));

        // Register + set font BEFORE any text (prevents Helvetica.afm issue)
        doc.registerFont("dejavu", fontPath);
        doc.registerFont("dejavu-bold", boldFontPath);
        doc.font("dejavu");

        // ===== PDF HEADER =====
        doc.font("dejavu-bold").fontSize(16).text("Natijalar hisoboti", { align: "center" });
        doc.moveDown(0.2);
        doc.font("dejavu").fontSize(10).text(`Yaratildi: ${new Date().toLocaleString("uz-UZ")}`, {
            align: "center",
        });
        doc.moveDown(1);

        // ===== TABLE LAYOUT =====
        const startX = 40;
        const tableTopY = doc.y + 10;

        // A4 width ~ 595.28, margins 40+40 => usable ~ 515.28
        // Exact widths sum to 515
        const colW = {
            no: 30,
            ism: 150,
            fam: 150,
            foiz: 60,
            daraja: 125,
        };

        const rowH = 24;

        const xNo = startX;
        const xIsm = xNo + colW.no;
        const xFam = xIsm + colW.ism;
        const xFoiz = xFam + colW.fam;
        const xDaraja = xFoiz + colW.foiz;

        // Header row
        let y = tableTopY;

        // header background (optional)
        doc.save();
        doc.rect(startX, y, colW.no + colW.ism + colW.fam + colW.foiz + colW.daraja, rowH)
            .fillOpacity(0.08)
            .fillAndStroke("#000", "#000");
        doc.restore();

        drawCell(doc, xNo, y, colW.no, rowH, "№", { align: "center", bold: true });
        drawCell(doc, xIsm, y, colW.ism, rowH, "Ism", { bold: true });
        drawCell(doc, xFam, y, colW.fam, rowH, "Familiya", { bold: true });
        drawCell(doc, xFoiz, y, colW.foiz, rowH, "Foiz", { align: "center", bold: true });
        drawCell(doc, xDaraja, y, colW.daraja, rowH, "Daraja", { bold: true });

        y += rowH;

        // Rows
        for (let i = 0; i < rows.length; i += 1) {
            // page break (keep header on new page)
            const bottomLimit = 800; // safe area
            if (y + rowH > bottomLimit) {
                doc.addPage();
                doc.font("dejavu");

                y = 60;

                // redraw header on new page
                doc.save();
                doc.rect(startX, y, colW.no + colW.ism + colW.fam + colW.foiz + colW.daraja, rowH)
                    .fillOpacity(0.08)
                    .fillAndStroke("#000", "#000");
                doc.restore();

                drawCell(doc, xNo, y, colW.no, rowH, "№", { align: "center", bold: true });
                drawCell(doc, xIsm, y, colW.ism, rowH, "Ism", { bold: true });
                drawCell(doc, xFam, y, colW.fam, rowH, "Familiya", { bold: true });
                drawCell(doc, xFoiz, y, colW.foiz, rowH, "Foiz", { align: "center", bold: true });
                drawCell(doc, xDaraja, y, colW.daraja, rowH, "Daraja", { bold: true });

                y += rowH;
            }

            const r = rows[i];

            drawCell(doc, xNo, y, colW.no, rowH, String(i + 1), { align: "center" });
            drawCell(doc, xIsm, y, colW.ism, rowH, padText(r.first_name));
            drawCell(doc, xFam, y, colW.fam, rowH, padText(r.last_name));
            drawCell(doc, xFoiz, y, colW.foiz, rowH, `${Number(r.total_percent)}%`, { align: "center" });
            drawCell(doc, xDaraja, y, colW.daraja, rowH, padText(r.grade));

            y += rowH;
        }

        doc.end();
    });
}

export async function GET() {
    try {
        const q = `
            SELECT
                first_name,
                last_name,
                total_percent,
                grade
            FROM attempts
            ORDER BY created_at DESC
        `;

        const r = await pool.query(q);
        const rows = r.rows as AttemptRow[];

        const pdfArrayBuffer = await buildPdfArrayBuffer(rows);

        // ✅ Strict TS: ArrayBuffer is BodyInit-safe
        return new Response(pdfArrayBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="natijalar-hisoboti.pdf"',
                "Cache-Control": "no-store",
            },
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("export/pdf error:", e);
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}
