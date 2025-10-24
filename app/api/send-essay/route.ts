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

function requiredEnv(...names: string[]): string {
    for (const n of names) {
        const v = process.env[n];
        if (v && v.trim().length > 0) return v;
    }
    throw new Error(`Missing required env. Tried: ${names.join(", ")}`);
}

export async function POST(req: NextRequest) {
    try {
        const raw: unknown = await req.json();
        const body = raw as Partial<EssaySubmitBody>;

        // Basic validation
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

        // Use your actual envs, with sensible fallbacks
        const TELEGRAM_BOT_TOKEN = requiredEnv(
            "ESSAY_BOT_SENDER",
            "TELEGRAM_BOT_TOKEN"
        );
        const TELEGRAM_CHAT_ID = requiredEnv(
            "CHANNEL_ID",
            "TELEGRAM_CHAT_ID",
            "TELEGRAM_ADMIN_CHAT_ID"
        );

        const fullName = `${body.lastName} ${body.firstName}`.trim();
        const contact =
            (typeof body.telegram === "string" && body.telegram.trim()) ||
            (typeof body.phone === "string" && body.phone.trim()) ||
            "—";

        const essayText = typeof body.essayText === "string" ? body.essayText : "";
        const essayPreview = essayText
            .slice(0, 700)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // answers compact view
        const ansObj: AnswersMap = body.answers as AnswersMap;
        const compactAnswers = Object.keys(ansObj)
            .sort((a, b) => Number(a) - Number(b))
            .map((k) => `${k}:${String(ansObj[Number(k)])}`)
            .join(", ");

        const text = [
            `<b>Yangi esse yuborildi</b>`,
            ``,
            `<b>F.I.Sh:</b> ${fullName}`,
            `<b>Kontakt:</b> ${contact}`,
            ``,
            `<b>Natijalar</b>`,
            `• Test (avto): ${body.testScore} / ${body.testMaxPresent}`,
            `• Test (shkalalanib): ${body.scaledTest} / 75`,
            `• Umumiy: ${body.totalPoints} / 150  (${body.totalPercent}%)`,
            `• Baho: ${body.grade}`,
            ``,
            `<b>Javoblar:</b> ${compactAnswers || "—"}`,
            ``,
            `<b>Esse (so‘zlar: ${body.essayWords})</b>`,
            essayPreview || "—",
        ].join("\n");

        const resp = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: "HTML",
                    disable_web_page_preview: true,
                }),
            }
        );

        const jsonUnknown: unknown = await resp.json();
        const ok =
            resp.ok &&
            typeof jsonUnknown === "object" &&
            jsonUnknown !== null &&
            "ok" in jsonUnknown &&
            (jsonUnknown as { ok: unknown }).ok === true;

        if (!ok) {
            const description =
                typeof jsonUnknown === "object" &&
                jsonUnknown !== null &&
                "description" in jsonUnknown &&
                typeof (jsonUnknown as { description?: unknown }).description === "string"
                    ? (jsonUnknown as { description: string }).description
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
