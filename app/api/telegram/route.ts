// app/api/telegram/route.ts
import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID; // your user id: 5893746179
const ACCESS_CODE_ADMIN_SECRET = process.env.ACCESS_CODE_ADMIN_SECRET!;
const ROTATE_INTERVAL_MIN = Number(process.env.ROTATE_INTERVAL_MIN || 180);
const TG_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

async function sendMessage(chat_id: string | number, text: string) {
    try {
        await fetch(`${TG_API}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id, text }),
            cache: "no-store",
        });
    } catch (err) {
        console.error("Failed to send Telegram message:", err);
    }
}

export async function POST(req: Request) {
    try {
        const update = await req.json();
        const msg = update.message ?? update.edited_message;
        const text: string | undefined = msg?.text?.trim();
        const chat_id = msg?.chat?.id?.toString();
        const from_id = msg?.from?.id?.toString(); // <-- NEW

        if (!text || !chat_id) return NextResponse.json({ ok: true });

        if (text === "/start" || text === "/help") {
            await sendMessage(chat_id, "Salom! Admin kod yaratish uchun /generate buyrug'ini yuboring.");
            return NextResponse.json({ ok: true });
        }

        if (text === "/generate") {
            // Enforce admin by sender, not by chat id (works in groups too)
            if (TELEGRAM_ADMIN_CHAT_ID && from_id !== TELEGRAM_ADMIN_CHAT_ID) { // <-- CHANGED
                await sendMessage(chat_id, "Ushbu buyruq faqat administrator uchun.");
                return NextResponse.json({ ok: true });
            }

            const origin = new URL(req.url).origin;
            const res = await fetch(`${origin}/api/auth/set-code`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-admin-secret": ACCESS_CODE_ADMIN_SECRET,
                },
                body: JSON.stringify({ code: "", ttlSeconds: ROTATE_INTERVAL_MIN * 60 }),
                cache: "no-store",
            });

            if (!res.ok) {
                console.error("set-code failed", res.status);
                await sendMessage(chat_id, `❌ Kod yaratilmedi (HTTP ${res.status}).`);
                return NextResponse.json({ ok: true });
            }

            const data = await res.json();
            if (!data?.ok || !data?.code) {
                await sendMessage(chat_id, "❌ Kod yaratilmadi.");
                return NextResponse.json({ ok: true });
            }

            await sendMessage(chat_id, `✅ Kod: ${data.code}\nAmal qilish muddati: ${ROTATE_INTERVAL_MIN} daqiqa.`);
            return NextResponse.json({ ok: true });
        }

        if (text.startsWith("/")) {
            await sendMessage(chat_id, "Noma’lum buyruq. Foydalanish: /generate");
        }
        return NextResponse.json({ ok: true });
    } catch (e) {
        console.error("telegram webhook error", e);
        return NextResponse.json({ ok: true });
    }
}

export function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
