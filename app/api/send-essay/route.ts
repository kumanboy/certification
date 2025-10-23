// app/api/send-essay/route.ts
/* Force Node runtime + no caching on Vercel */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

function required(name: string): string {
    const v = process.env[name];
    if (!v || !v.trim()) throw new Error(`Missing required env: ${name}`);
    return v.trim();
}
function optional(name: string): string | undefined {
    const v = process.env[name];
    return v && v.trim() ? v.trim() : undefined;
}

async function tgSendMessage(token: string, chatId: string, text: string) {
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // channel id can be "-100…", or "@channelusername"
        body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
        }),
        // no cache
        cache: "no-store",
    });

    let data: unknown;
    try {
        data = await resp.json();
    } catch {
        // ignore parse error
    }
    const ok =
        resp.ok &&
        typeof data === "object" &&
        data !== null &&
        "ok" in data &&
        (data as { ok: unknown }).ok === true;

    const description =
        typeof data === "object" &&
        data !== null &&
        "description" in data &&
        typeof (data as { description?: unknown }).description === "string"
            ? (data as { description: string }).description
            : `HTTP ${resp.status}`;

    return { ok, description, raw: data };
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

        // Use your channel bot + channel id (required)
        const CHANNEL_BOT = required("ESSAY_BOT_SENDER");   // 8217…:AA…
        const CHANNEL_ID =
            optional("CHANNEL_ID") ?? // "-1003097514170" or "@your_channel"
            required("TELEGRAM_CHAT_ID"); // fallback if you had it set this way

        // Optional admin fallback (sends to you if channel fails)
        const ADMIN_CHAT =
            optional("TELEGRAM_ADMIN_CHAT_ID") ?? optional("TELEGRAM_CHAT_ID");

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

        // 1) Try channel first
        const toChannel = await tgSendMessage(CHANNEL_BOT, CHANNEL_ID, text);
        if (toChannel.ok) {
            return NextResponse.json({ ok: true, target: "channel" });
        }

        // 2) Fallback to admin if configured
        if (ADMIN_CHAT) {
            const toAdmin = await tgSendMessage(
                CHANNEL_BOT,
                ADMIN_CHAT,
                `⚠️ Channel send failed: ${toChannel.description}\n\n${text}`
            );
            if (toAdmin.ok) {
                return NextResponse.json({
                    ok: true,
                    target: "admin_fallback",
                    reason: toChannel.description,
                });
            }
            return NextResponse.json(
                {
                    ok: false,
                    error: `Channel failed: ${toChannel.description}; Admin failed: ${toAdmin.description}`,
                    details: { channel: toChannel.raw },
                },
                { status: 502 }
            );
        }

        // No fallback
        return NextResponse.json(
            {
                ok: false,
                error: `Channel send failed: ${toChannel.description}`,
                details: { channel: toChannel.raw },
            },
            { status: 502 }
        );
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unexpected error";
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
