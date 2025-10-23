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

/** Return the first defined env from the list, else throw */
function envFirst(...names: string[]): string {
    for (const n of names) {
        const v = process.env[n];
        if (v && v.trim()) return v.trim();
    }
    throw new Error(`Missing required env: one of [${names.join(", ")}]`);
}

/** Telegram send helper (sendMessage) */
async function tgSend(token: string, chatId: string, text: string) {
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
        }),
    });

    const data: unknown = await resp.json();
    const ok =
        resp.ok &&
        typeof data === "object" &&
        data !== null &&
        "ok" in data &&
        (data as { ok: unknown }).ok === true;

    if (!ok) {
        const desc =
            typeof data === "object" &&
            data !== null &&
            "description" in data &&
            typeof (data as { description?: unknown }).description === "string"
                ? (data as { description: string }).description
                : `HTTP ${resp.status}`;
        throw new Error(`Telegram send failed: ${desc}`);
    }
}

export async function POST(req: NextRequest) {
    try {
        const raw: unknown = await req.json();
        const body = raw as Partial<EssaySubmitBody>;

        // Basic validation
        if (!body || !body.firstName || !body.lastName) {
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

        // Use your env names; fall back to TELEGRAM_* if present
        const TELEGRAM_BOT_TOKEN = envFirst("ESSAY_BOT_SENDER", "TELEGRAM_BOT_TOKEN");
        const TELEGRAM_CHAT_ID = envFirst("CHANNEL_ID", "TELEGRAM_CHAT_ID");

        const fullName = `${body.lastName} ${body.firstName}`.trim();
        const contact =
            (typeof body.telegram === "string" && body.telegram.trim()) ||
            (typeof body.phone === "string" && body.phone.trim()) ||
            "—";

        // Answers (compact)
        const ansObj: AnswersMap = body.answers as AnswersMap;
        const compactAnswers = Object.keys(ansObj)
            .sort((a, b) => Number(a) - Number(b))
            .map((k) => `${k}:${String(ansObj[Number(k)])}`)
            .join(", ");

        const essayText = typeof body.essayText === "string" ? body.essayText : "";
        const essayPreview = essayText.slice(0, 2000) // safe chunk
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Header + scores + answers (keep well under 4096)
        const header = [
            `<b>Yangi natija / esse</b>`,
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
        ].join("\n");

        // Send header/results first
        await tgSend(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, header);

        // Send essay separately (so we never hit the 4096 char limit)
        const essayMsg = [
            `<b>Esse (so‘zlar: ${body.essayWords})</b>`,
            essayPreview || "—",
        ].join("\n");
        await tgSend(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, essayMsg);

        return NextResponse.json({ ok: true });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
