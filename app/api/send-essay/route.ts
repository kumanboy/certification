import { NextResponse } from "next/server";

export async function POST(req: Request) {
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
