import {  NextResponse } from "next/server";
type EssayPayload = {
    fullName: string;
    telegram?: string;
    phone?: string;
    essay: string;                       // 250–300 words
    answers?: Record<string, string>;    // optional map qId -> answer
};


export async function POST(req: Request) {
    const data = (await req.json()) as unknown;

    // Narrow `unknown` → EssayPayload with basic guards
    if (typeof data !== "object" || data === null) {
        return NextResponse.json({ ok: false, error: "Bad payload" }, { status: 400 });
    }
    const payload = data as Partial<EssayPayload>;

    if (typeof payload.essay !== "string" || typeof payload.fullName !== "string") {
        return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    try {
        const { essayText, user } = (await req.json()) as {
            essayText?: string;
            user: { lastName: string; firstName: string; telegram: string };
        };

        if (!essayText || !essayText.trim()) {
            return NextResponse.json({ ok: true, skipped: true });
        }

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID; // channel or group id

        if (!token || !chatId) {
            return NextResponse.json({ ok: false, error: "Missing Telegram envs" }, { status: 500 });
        }

        const text =
            `📝 *Esse topshirildi*\n` +
            `👤 ${user.lastName} ${user.firstName}\n` +
            `📨 ${user.telegram}\n\n` +
            `*Matn:*\n${essayText}`;

        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: "Markdown",
                disable_web_page_preview: true,
            }),
        });

        const data = await res.json();
        if (!data.ok) {
            return NextResponse.json({ ok: false, error: data.description }, { status: 500 });
        }


        return NextResponse.json({ ok: true });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
    }
}
