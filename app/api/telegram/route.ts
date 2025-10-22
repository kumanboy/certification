// app/api/telegram/route.ts
import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.BOT_TOKEN!;
const ADMIN_ID = process.env.ADMIN_ID;                // optional: restrict /generate
const BACKEND_URL = (process.env.BACKEND_URL || "").replace(/\/$/, "");
const ADMIN_SECRET = process.env.ADMIN_SECRET!;
const TG_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function sendMessage(chat_id: string | number, text: string) {
    await fetch(`${TG_API}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text }),
    });
}

export async function POST(req: Request) {
    try {
        const update = await req.json();
        const msg = update.message ?? update.edited_message;
        const text: string | undefined = msg?.text?.trim();
        const chat_id: string | undefined = msg?.chat?.id?.toString();

        if (!text || !chat_id) return NextResponse.json({ ok: true });

        if (text === "/start") {
            await sendMessage(chat_id, "Salom! Kod yaratish uchun /generate ni yuboring.");
            return NextResponse.json({ ok: true });
        }

        if (text === "/generate") {
            // If ADMIN_ID is set, only allow that user
            if (ADMIN_ID && chat_id !== ADMIN_ID) {
                await sendMessage(chat_id, "Ushbu buyruq faqat administrator uchun.");
                return NextResponse.json({ ok: true });
            }

            if (!BACKEND_URL) {
                await sendMessage(chat_id, "❌ BACKEND_URL sozlanmagan.");
                return NextResponse.json({ ok: true });
            }

            const res = await fetch(`${BACKEND_URL}/api/auth/set-code`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-admin-secret": ADMIN_SECRET,
                },
                body: JSON.stringify({ code: "", ttlSeconds: (Number(process.env.ROTATE_INTERVAL_MIN)||180)*60 }),
                cache: "no-store",
            });

            if (!res.ok) {
                await sendMessage(chat_id, `❌ Kod yaratilmedi (HTTP ${res.status}).`);
                return NextResponse.json({ ok: true });
            }

            const data = await res.json();
            if (!data?.ok || !data?.code) {
                await sendMessage(chat_id, "❌ Kod yaratilmadi.");
                return NextResponse.json({ ok: true });
            }

            await sendMessage(chat_id, `✅ Kod: ${data.code}\nAmal qilish muddati: ${process.env.ROTATE_INTERVAL_MIN || 180} daqiqa.`);
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
