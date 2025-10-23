// app/api/send-essay/route.ts
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

async function sendTG(token: string, chatId: string, text: string) {
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
            chat_id: chatId, // can be -100… or @channelusername
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
        }),
    });

    const rawText = await resp.text();
    let data: { ok?: boolean; description?: string } | null = null;
    try {
        data = JSON.parse(rawText) as { ok?: boolean; description?: string };
    } catch {
        // keep rawText for diagnostics
    }

    const ok = resp.ok && !!data?.ok;
    const description = data?.description ?? `HTTP ${resp.status} ${resp.statusText}`;
    return { ok, description, rawText };
}

export async function POST(req: NextRequest) {
    try {
        const raw = (await req.json()) as Partial<EssaySubmitBody>;

        if (!raw.firstName || !raw.lastName) {
            return NextResponse.json({ ok: false, error: "firstName/lastName required" }, { status: 400 });
        }
        if (!raw.answers || typeof raw.answers !== "object") {
            return NextResponse.json({ ok: false, error: "answers required" }, { status: 400 });
        }

        // Use the channel bot & channel id (your curl worked with these)
        const CHANNEL_BOT = required("ESSAY_BOT_SENDER");   // e.g. 8217…:AA…
        const CHANNEL_ID = required("CHANNEL_ID");          // e.g. -1003097514170 or @username

        // Optional admin fallback (YOUR personal chat id)
        const ADMIN_CHAT = optional("TELEGRAM_ADMIN_CHAT_ID") ?? optional("TELEGRAM_CHAT_ID");

        const fullName = `${raw.lastName} ${raw.firstName}`.trim();
        const contact =
            (typeof raw.telegram === "string" && raw.telegram.trim()) ||
            (typeof raw.phone === "string" && raw.phone.trim()) ||
            "—";

        const essayText = typeof raw.essayText === "string" ? raw.essayText : "";
        const essayPreview = essayText.slice(0, 700).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const ansObj = raw.answers as AnswersMap;
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
            `• Test (avto): ${raw.testScore} / ${raw.testMaxPresent}`,
            `• Test (skalalanib): ${raw.scaledTest} / 75`,
            `• Umumiy: ${raw.totalPoints} / 150  (${raw.totalPercent}%)`,
            `• Baho: ${raw.grade}`,
            ``,
            `<b>Javoblar:</b> ${compactAnswers || "—"}`,
            ``,
            `<b>Esse (so‘zlar: ${raw.essayWords})</b>`,
            essayPreview || "—",
        ].join("\n");

        // 1) Try to post in the channel
        const channelRes = await sendTG(CHANNEL_BOT, CHANNEL_ID, text);
        if (channelRes.ok) {
            return NextResponse.json({ ok: true, target: "channel" });
        }

        // 2) Fallback to admin (so you SEE the error)
        if (ADMIN_CHAT) {
            const fallbackText =
                `⚠️ <b>Channel send failed</b>: ${channelRes.description}\n\n` +
                `<i>Check that the bot is added to the channel as an admin with “Post Messages” permission.</i>\n\n` +
                text;

            const adminRes = await sendTG(CHANNEL_BOT, ADMIN_CHAT, fallbackText);
            if (adminRes.ok) {
                return NextResponse.json({
                    ok: true,
                    target: "admin_fallback",
                    reason: channelRes.description,
                });
            }

            return NextResponse.json(
                {
                    ok: false,
                    error: `Channel failed: ${channelRes.description}; Admin failed: ${adminRes.description}`,
                    details: { channelRaw: channelRes.rawText, adminRaw: adminRes.rawText },
                },
                { status: 502 }
            );
        }

        // No admin fallback configured
        return NextResponse.json(
            {
                ok: false,
                error: `Channel send failed: ${channelRes.description}`,
                details: { channelRaw: channelRes.rawText },
            },
            { status: 502 }
        );
    } catch (e) {
        const msg = e instanceof Error ? e.message : "Unexpected error";
        return NextResponse.json({ ok: false, error: msg }, { status: 500 });
    }
}
