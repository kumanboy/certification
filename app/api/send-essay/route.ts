// app/api/send-essay/route.ts
import { NextRequest, NextResponse } from "next/server";

type AnswersMap = Record<number, string>;

interface EssaySubmitBody {
    firstName: string;
    lastName: string;
    telegram?: string;
    phone?: string;
    answers: AnswersMap;     // all answers (including 45)
    essayText: string;       // Q45 text
    essayWords: number;      // word count
    testScore: number;       // raw test score (present set)
    testMaxPresent: number;  // max from present items
    scaledTest: number;      // scaled to 75
    totalPoints: number;     // scaledTest + essayScore (usually essayScore=0 here)
    totalPercent: number;    // %
    grade: string;           // letter grade
}

interface TelegramSendMessageResp {
    ok: boolean;
    result?: {
        message_id: number;
        date?: number;
        chat?: {
            id: number;
            type: string;
            title?: string;
            username?: string;
            first_name?: string;
            last_name?: string;
        };
        text?: string;
    };
    description?: string;
    error_code?: number;
}

function envRequired(name: string): string {
    const v = process.env[name];
    if (!v) throw new Error(`Missing required env: ${name}`);
    return v;
}

export async function POST(req: NextRequest) {
    try {
        // ↓ Avoid `any` from NextRequest.json()
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

        const TELEGRAM_BOT_TOKEN = envRequired("TELEGRAM_BOT_TOKEN");
        const TELEGRAM_CHAT_ID = envRequired("TELEGRAM_CHAT_ID");

        const fullName = `${body.lastName} ${body.firstName}`.trim();
        const contact = body.telegram?.trim() || body.phone?.trim() || "—";

        const essayPreview =
            (body.essayText ?? "")
                .slice(0, 700)
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

        const compactAnswers = Object.keys(body.answers!)
            .sort((a, b) => Number(a) - Number(b))
            .map((k) => `${k}:${String(body.answers![Number(k)])}`)
            .join(", ");

        const text = [
            `<b>Yangi esse yuborildi</b>`,
            ``,
            `<b>F.I.Sh:</b> ${fullName}`,
            `<b>Kontakt:</b> ${contact}`,
            ``,
            `<b>Natijalar</b>`,
            `• Test (avto): ${body.testScore} / ${body.testMaxPresent}`,
            `• Test (skalalanib): ${body.scaledTest} / 75`,
            `• Umumiy: ${body.totalPoints} / 150  (${body.totalPercent}%)`,
            `• Baho: ${body.grade}`,
            ``,
            `<b>Javoblar:</b> ${compactAnswers || "—"}`,
            ``,
            `<b>Esse (so‘zlar: ${body.essayWords})</b>`,
            essayPreview || "—",
        ].join("\n");

        const tgRes = await fetch(
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

        const tgJson: TelegramSendMessageResp = await tgRes.json();

        if (!tgRes.ok || !tgJson.ok) {
            const description = tgJson.description || `HTTP ${tgRes.status}`;
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
