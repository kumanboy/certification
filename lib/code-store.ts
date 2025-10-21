type CodeRecord = { code: string; expiresAt: number }; // unix seconds

const useKV = !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN;
const CODE_KEY = "uzbek_exam_universal_code";

async function kvFetch(path: string, init?: RequestInit) {
    const base = process.env.KV_REST_API_URL!;
    const headers = {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        "Content-Type": "application/json",
    };
    return fetch(`${base}${path}`, { ...init, headers });
}

// In-memory fallback (per process)
let mem: CodeRecord | null = null;

export async function setCode(rec: CodeRecord) {
    if (useKV) {
        await kvFetch(`/set/${CODE_KEY}`, { method: "POST", body: JSON.stringify(rec) });
    } else {
        mem = rec;
    }
}

export async function getCode(): Promise<CodeRecord | null> {
    if (useKV) {
        const res = await kvFetch(`/get/${CODE_KEY}`);
        if (!res.ok) return null;
        const data = await res.json().catch(() => null);
        return data?.result || null;
    }
    return mem;
}

export async function isValidCode(input: string) {
    const rec = await getCode();
    if (!rec) return false;
    const now = Math.floor(Date.now() / 1000);
    return rec.code === input && now < rec.expiresAt;
}
