// lib/active-code.ts
type ActiveCode = { code: string; expiresAt: number };

const KV_URL = process.env.KV_REST_API_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || "";
const KEY = "active_code_v1";

import { getRedis } from "./redis";

function hasKv(): boolean {
    return KV_URL.length > 0 && KV_TOKEN.length > 0;
}

async function kvSave(value: ActiveCode, ttlSeconds: number): Promise<void> {
    const url = `${KV_URL}/set/${encodeURIComponent(KEY)}/${encodeURIComponent(
        JSON.stringify(value)
    )}?EX=${ttlSeconds}`;
    const res = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${KV_TOKEN}` },
        cache: "no-store",
    });
    if (!res.ok) throw new Error(`KV set failed (${res.status})`);
}

async function kvLoad(): Promise<ActiveCode | null> {
    const url = `${KV_URL}/get/${encodeURIComponent(KEY)}`;
    const res = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${KV_TOKEN}` },
        cache: "no-store",
    });
    if (!res.ok) return null;
    type KvGet = { result: string | null };
    const data = (await res.json()) as KvGet;
    if (!data.result) return null;
    try {
        return JSON.parse(data.result) as ActiveCode;
    } catch {
        return null;
    }
}

// ---- Redis Cloud path
async function redisSave(value: ActiveCode, ttlSeconds: number): Promise<void> {
    const r = getRedis();
    if (!r) throw new Error("REDIS_URL not set");
    if (r.status === "wait") await r.connect();
    const payload = JSON.stringify(value);
    await r.set(KEY, payload, "EX", ttlSeconds);
}

async function redisLoad(): Promise<ActiveCode | null> {
    const r = getRedis();
    if (!r) return null;
    if (r.status === "wait") await r.connect();
    const val = await r.get(KEY);
    if (!val) return null;
    try {
        return JSON.parse(val) as ActiveCode;
    } catch {
        return null;
    }
}

// ---- Dev fallback (same instance only)
const g = globalThis as unknown as { __ACTIVE_CODE__?: ActiveCode };

export async function saveActiveCode(value: ActiveCode, ttlSeconds: number): Promise<void> {
    if (hasKv()) return kvSave(value, ttlSeconds);
    const r = getRedis();
    if (r) return redisSave(value, ttlSeconds);
    g.__ACTIVE_CODE__ = value;
}

export async function loadActiveCode(): Promise<ActiveCode | null> {
    if (hasKv()) return kvLoad();
    const r = getRedis();
    if (r) return redisLoad();
    return g.__ACTIVE_CODE__ ?? null;
}
