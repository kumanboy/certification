// app/api/send-essay/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

interface TelegramMessage { message_id: number }
interface TelegramSendResponse { ok: boolean; result?: TelegramMessage; description?: string }

function requiredEnv(...names: string[]): string {
    for (const n of names) {
        const v = process.env[n];
        if (v && v.trim().length > 0) return v.trim();
    }
    throw new Error(`Missing required env. Tried: ${names.join(", ")}`);
}

async function sendTelegramMessage(
    botToken: string,
    chatId: string,
    text: string,
    parseMode: "HTML" | "MarkdownV2" = "HTML"
): Promise<void> {
    const resp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId, // numeric id or @channelusername (bot must be a member/admin)
            text,
            parse_mode: parseMode,
            disable_web_page_preview: true,
        }),
        cache: "no-store",
    });

    const data = (await resp.json()) as TelegramSendResponse;
    if (!resp.ok || !data.ok) {
        const desc = (typeof data.description === "string" && data.description) || `HTTP ${resp.status}`;
        throw new Error(desc);
    }
}

/** Split a long string into chunks under Telegram’s limit. */
function chunkText(input: string, maxLen = 3900): string[] {
    if (input.length <= maxLen) return [input];
    const chunks: string[] = [];
    let remain = input;
    while (remain.length > maxLen) {
        let cut = remain.lastIndexOf("\n", maxLen);
        if (cut < Math.floor(maxLen * 0.6)) cut = remain.lastIndexOf(",", maxLen);
        if (cut < 0) cut = maxLen;
        chunks.push(remain.slice(0, cut));
        remain = remain.slice(cut).replace(/^[\n, ]+/, "");
    }
    if (remain) chunks.push(remain);
    return chunks;
}

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as Partial<EssaySubmitBody>;

        // Basic validation
        if (!body?.firstName || !body?.lastName) {
            return NextResponse.json({ ok: false, error: "firstName/lastName required" }, { status: 400 });
        }
        if (!body.answers || typeof body.answers !== "object") {
            return NextResponse.json({ ok: false, error: "answers required" }, { status: 400 });
        }

        // Use SAME token everywhere to avoid mismatches
        const TELEGRAM_BOT_TOKEN = requiredEnv("TELEGRAM_BOT_TOKEN");
        // Prefer a numeric chat id (for channels it’s usually -100XXXXXXXXXX)
        const TELEGRAM_CHAT_ID = requiredEnv("TELEGRAM_CHAT_ID");

        // Quick ping first — gives immediate, clear failure if bot can’t post to chat
        try {
            await sendTelegramMessage(
                TELEGRAM_BOT_TOKEN,
                TELEGRAM_CHAT_ID,
                "🟢 Esse xizmati ulanishi muvaffaqiyatli. Javoblar yuborilmoqda…"
            );
        } catch (e) {
            const hint =
                e instanceof Error ? e.message : "unknown";
            // Common hints for real-world failures:
            // - “Forbidden: bot was blocked by the user”
            // - “Bad Request: chat not found”
            // - “Forbidden: bot is not a member of the channel chat”
            // - “Forbidden: not enough rights to send text messages to the chat”
            return NextResponse.json(
                {
                    ok: false,
                    error: `Ping failed: ${hint}. Check TELEGRAM_CHAT_ID and that the bot is in the chat (admin for channels).`,
                },
                { status: 502 }
            );
        }

        const fullName = `${body.lastName} ${body.firstName}`.trim();
        const contact =
            (typeof body.telegram === "string" && body.telegram.trim()) ||
            (typeof body.phone === "string" && body.phone.trim()) ||
            "—";

        const essayText = typeof body.essayText === "string" ? body.essayText : "";
        const essayPreview = essayText.slice(0, 700).replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const ansObj = body.answers as AnswersMap;
        const compactAnswers = Object.keys(ansObj)
            .sort((a, b) => Number(a) - Number(b))
            .map((k) => `${k}:${String(ansObj[Number(k)])}`)
            .join(", ");

        const header = [
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
        ].join("\n");

        const answersBlock = `<b>Javoblar:</b> ${compactAnswers || "—"}`;
        const essayBlock = [``, `<b>Esse (so‘zlar: ${body.essayWords})</b>`, essayPreview || "—"].join("\n");

        const planned = `${header}${answersBlock}\n${essayBlock}`;
        const parts = chunkText(planned, 3900);

        for (let i = 0; i < parts.length; i += 1) {
            const suffix = parts.length > 1 ? `\n\n(${i + 1}/${parts.length})` : "";
            // eslint-disable-next-line no-await-in-loop
            await sendTelegramMessage(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, parts[i] + suffix, "HTML");
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        console.error("send-essay error:", message);
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
