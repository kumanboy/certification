// bot/src/index.ts
import * as dotenv from 'dotenv';
dotenv.config();
import { Telegraf, Context } from 'telegraf';

// ====== ENV ======
function requireEnv(name: string): string {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env: ${name}`);
    return v;
}

const BOT_TOKEN = requireEnv('BOT_TOKEN');                 // from @BotFather
const ADMIN_ID = requireEnv('ADMIN_ID');                   // your Telegram numeric id
const BACKEND_URL = requireEnv('BACKEND_URL').replace(/\/$/, ''); // e.g. http://localhost:3000
const ADMIN_SECRET = requireEnv('ADMIN_SECRET');           // must match ACCESS_CODE_ADMIN_SECRET in Next.js
const ROTATE_INTERVAL_MIN = Number(process.env.ROTATE_INTERVAL_MIN ?? 180); // default 180 = 3h

// ====== INIT BOT ======
const bot = new Telegraf(BOT_TOKEN);

// ====== HELPERS ======
function isAdmin(ctx: Context): boolean {
    return String(ctx.from?.id) === String(ADMIN_ID);
}

function generateCode(length = 6): string {
    // 6-digit numeric
    const n = Math.floor(100000 + Math.random() * 900000).toString();
    return n.slice(0, length);
}

async function pushCodeToBackend(code: string, ttlSeconds = ROTATE_INTERVAL_MIN * 60) {
    const res = await fetch(`${BACKEND_URL}/api/auth/set-code`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': ADMIN_SECRET,
        },
        body: JSON.stringify({ code, ttlSeconds }),
    });

    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Backend set-code failed: ${res.status} ${text}`);
    }

    // { ok: true, expiresAt: number }
    return res.json() as Promise<{ ok: boolean; expiresAt: number }>;
}

async function rotateOnce(ctx?: Context) {
    const code = generateCode(6);
    const { expiresAt } = await pushCodeToBackend(code);
    const minutesLeft = Math.max(0, Math.round((expiresAt * 1000 - Date.now()) / 60000));

    const msg =
        `✅ Yangi kod: <b>${code}</b>\n` +
        `⏳ Amal qilish muddati: ~${minutesLeft} daqiqa`;

    if (ctx) {
        await ctx.reply(msg, { parse_mode: 'HTML' });
    } else {
        await bot.telegram.sendMessage(ADMIN_ID, msg, { parse_mode: 'HTML' });
    }

    return { code, minutesLeft };
}

// ====== COMMANDS ======
bot.start(async (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    return ctx.reply(
        [
            'Assalomu alaykum! Bu bot universal kirish kodini boshqaradi.',
            '',
            'Buyruqlar:',
            '/generate — yangi kod yaratib backendga o‘rnatish',
            '/code — kod yaratib yuborish (xuddi /generate)',
            `/rotate_on — har ${ROTATE_INTERVAL_MIN} daqiqada avtomatik yangilash`,
            '/rotate_off — avtomatik yangilashni o‘chirish',
            '/help — yordam',
            '/ping — sog‘liq tekshiruvi',
        ].join('\n')
    );
});

bot.help((ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    return ctx.reply(
        [
            'Buyruqlar:',
            '/generate — yangi kod yaratib backendga o‘rnatish',
            '/code — kod yaratib yuborish',
            `/rotate_on — har ${ROTATE_INTERVAL_MIN} daqiqada avtomatik yangilash`,
            '/rotate_off — avtomatik yangilashni o‘chirish',
            '/help — yordam',
            '/ping — sog‘liq tekshiruvi',
        ].join('\n')
    );
});

bot.command('ping', (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    return ctx.reply('pong ✅');
});

bot.command('generate', async (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    try {
        await rotateOnce(ctx);
    } catch (err: any) {
        await ctx.reply(`❌ Xato: ${err.message ?? String(err)}`);
    }
});

bot.command('code', async (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    try {
        await rotateOnce(ctx);
    } catch (err: any) {
        await ctx.reply(`❌ Xato: ${err.message ?? String(err)}`);
    }
});

let interval: NodeJS.Timeout | null = null;

bot.command('rotate_on', async (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    if (interval) return ctx.reply('🔁 Avtomatik allaqachon yoqilgan.');

    try {
        // rotate now
        await rotateOnce(ctx);
        // then schedule
        interval = setInterval(() => {
            rotateOnce().catch((e) => {
                // send a minimal alert to admin if rotation fails
                bot.telegram.sendMessage(
                    ADMIN_ID,
                    `❌ Avtomatik yangilashda xato: ${e?.message ?? String(e)}`
                ).catch(() => {});
            });
        }, ROTATE_INTERVAL_MIN * 60 * 1000);

        return ctx.reply(`🔁 Avtomatik yangilash yoqildi (har ${ROTATE_INTERVAL_MIN} daqiqa).`);
    } catch (err: any) {
        return ctx.reply(`❌ Xato: ${err.message ?? String(err)}`);
    }
});

bot.command('rotate_off', (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    if (!interval) return ctx.reply('Avtomatik yoqilmagan.');
    clearInterval(interval);
    interval = null;
    return ctx.reply('⏹️ Avtomatik yangilash o‘chirildi.');
});

// Safety: ignore non-admin chats
bot.on('message', (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('Access denied.');
    return ctx.reply('Buyruqlar: /generate /code /rotate_on /rotate_off /help /ping');
});

// ====== START ======
bot.launch().then(() => {
    console.log('✅ Bot started');
}).catch((e) => {
    console.error('❌ Bot failed to start:', e);
    process.exit(1);
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
