// app/api/send-essay/route.ts
import { NextRequest, NextResponse } from "next/server";

type AnswersMap = Record<number, string>;

interface EssaySubmitBody {
    firstName: string;
    lastName: string;
    telegram?: string;
    phone?: string;
    answers: AnswersMap;
    essayText: string;
    essayWords: number;
    testScore: number;
    testMaxPresent: number;
    scaledTest: number;
    totalPoints: number;
    totalPercent: number;
    grade: string;
}

function envRequired(names: string[]): string {
    for (const name of names) {
        const v = process.env[name];
        if (v) return v;
    }
    throw new Error(`Missing required env: one of ${names.join(", ")}`);
}

function escapeHtml(s: string): string {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
    try {
        const raw: unknown = await req.json();
        const body = raw as Partial<EssaySubmitBody>;

        if (!body.firstName || !body.lastName) {
            return NextResponse.json(
                { ok: false, error: "firstName/lastName required" },
                { status: 400 }
            );
        }
        if (!body.answers || typeof body.answers !== "object") {
            return NextResponse.json(
                { ok: false, error: "answers required" },
                { status: 400 }
            );
        }

        // Your provided variable names with safe fallbacks
        const TELEGRAM_BOT_TOKEN = envRequired(["ESSAY_BOT_SENDER", "TELEGRAM_BOT_TOKEN"]);
        const TELEGRAM_CHAT_ID = envRequired(["CHANNEL_ID", "TELEGRAM_CHAT_ID"]);

        const fullName = `${body.lastName} ${body.firstName}`.trim();
        const contact =
            (typeof body.telegram === "string" && body.telegram.trim()) ||
            (typeof body.phone === "string" && body.phone.trim()) ||
            "—";

        const essayText = typeof body.essayText === "string" ? body.essayText : "";
        const essayPreview = escapeHtml(essayText.slice(0, 3500)); // Telegram 4096 char limit (leave headroom)

        const ansObj: AnswersMap = body.answers as AnswersMap;
        const compactAnswers = Object.keys(ansObj)
            .map((k) => Number(k))
            .sort((a, b) => a - b)
            .map((k) => `${k}:${String(ansObj[k] ?? "")}`)
            .join(", ");

        const lines = [
            `<b>📝 Yangi natija va esse</b>`,
            ``,
            `<b>F.I.Sh:</b> ${escapeHtml(fullName)}`,
            `<b>Kontakt:</b> ${escapeHtml(contact)}`,
            ``,
            `<b>Natijalar</b>`,
            `• Test (avto): ${body.testScore} / ${body.testMaxPresent}`,
            `• Test (skalalanib): ${body.scaledTest} / 75`,
            `• Umumiy: ${body.totalPoints} / 150  (${body.totalPercent}%)`,
            `• Baho: ${escapeHtml(String(body.grade ?? ""))}`,
            ``,
            `<b>Javoblar:</b> ${escapeHtml(compactAnswers || "—")}`,
            ``,
            `<b>Esse</b> (so‘zlar: ${body.essayWords ?? 0})`,
            essayPreview || "—",
        ];
        const text = lines.join("\n");

        const resp = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
                parse_mode: "HTML",
                disable_web_page_preview: true,
            }),
        });

        const json: unknown = await resp.json();
        const ok =
            resp.ok &&
            typeof json === "object" &&
            json !== null &&
            "ok" in json &&
            (json as { ok: unknown }).ok === true;

        if (!ok) {
            const description =
                typeof json === "object" &&
                json !== null &&
                "description" in json &&
                typeof (json as { description?: unknown }).description === "string"
                    ? (json as { description: string }).description
                    : `HTTP ${resp.status}`;
            return NextResponse.json(
                { ok: false, error: `Telegram send failed: ${description}` },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
