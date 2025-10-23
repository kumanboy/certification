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

function envStrict(name: string): string {
    const v = process.env[name];
    if (!v || !v.trim()) throw new Error(`Missing required env: ${name}`);
    return v.trim();
}

function envOptional(name: string): string | undefined {
    const v = process.env[name];
    return v && v.trim() ? v.trim() : undefined;
}

async function sendToTelegram(token: string, chatId: string, text: string) {
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,          // channel id like -1003097514170 works here
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
        }),
    });

    const data = (await resp.json()) as { ok?: boolean; description?: string };
    return { ok: resp.ok && data?.ok === true, description: data?.description ?? `HTTP ${resp.status}` };
}

export async function POST(req: NextRequest) {
    try {
        const raw: unknown = await req.json();
        const body = raw as Partial<EssaySubmitBody>;

        if (!body.firstName || !body.lastName) {
            return NextResponse.json({ ok: false, error: "firstName/lastName required" }, { status: 400 });
        }
        if (!body.answers || typeof body.answers !== "object") {
            return NextResponse.json({ ok: false, error: "answers required" }, { status: 400 });
        }

        // Use your channel bot + channel id (required)
        const BOT_TOKEN = envStrict("ESSAY_BOT_SENDER");         // 8217...:AA...
        const CHANNEL_ID = envStrict("CHANNEL_ID");              // -1003097514170

        // Optional personal fallback (admin chat)
        const ADMIN_CHAT_ID =
            envOptional("TELEGRAM_ADMIN_CHAT_ID") ||
            envOptional("TELEGRAM_CHAT_ID");

        const fullName = `${body.lastName} ${body.firstName}`.trim();
        const contact =
            (typeof body.telegram === "string" && body.telegram.trim()) ||
            (typeof body.phone === "string" && body.phone.trim()) ||
            "—";

        const essayText = typeof body.essayText === "string" ? body.essayText : "";
        const essayPreview = essayText.slice(0, 700).replace(/</g, "&lt;").replace(/>/g, "&gt;");

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
            `• Test (skalalanib): ${body.scaledTest} / 75`,
            `• Umumiy: ${body.totalPoints} / 150  (${body.totalPercent}%)`,
            `• Baho: ${body.grade}`,
            ``,
            `<b>Javoblar:</b> ${compactAnswers || "—"}`,
            ``,
            `<b>Esse (so‘zlar: ${body.essayWords})</b>`,
            essayPreview || "—",
        ].join("\n");

        // 1) Try CHANNEL first (required)
        const toChannel = await sendToTelegram(BOT_TOKEN, CHANNEL_ID, text);
        if (toChannel.ok) {
            return NextResponse.json({ ok: true, target: "channel" });
        }

        // 2) If channel fails and admin fallback exists, send to admin as backup
        if (ADMIN_CHAT_ID) {
            const toAdmin = await sendToTelegram(BOT_TOKEN, ADMIN_CHAT_ID, `⚠️ Channel send failed (${toChannel.description}).\n\n${text}`);
            if (toAdmin.ok) {
                return NextResponse.json({ ok: true, target: "admin_fallback", reason: toChannel.description });
            }
            return NextResponse.json(
                { ok: false, error: `Channel failed: ${toChannel.description}; Admin failed: ${toAdmin.description}` },
                { status: 502 }
            );
        }

        // No fallback available
        return NextResponse.json(
            { ok: false, error: `Channel send failed: ${toChannel.description}` },
            { status: 502 }
        );
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
