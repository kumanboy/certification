"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type StatItem = {
    label: string;
    correctCount: number;
};

type StatsResponse = {
    ok: boolean;
    totalAttempts: number;
    items: StatItem[];
    error?: string;
};

export default function AdminPage() {
    const [stats, setStats] = useState<StatsResponse | null>(null);
    const [loading, setLoading] = useState(false);

    // ✅ stable function (safe for deps)
    const fetchStats = useCallback(async () => {
        setLoading(true);
        try {
            const r = await fetch("/api/admin/stats/correct-by-question", { cache: "no-store" });
            const j = (await r.json()) as StatsResponse;

            if (!r.ok || !j.ok) {
                setStats({
                    ok: false,
                    totalAttempts: 0,
                    items: [],
                    error: j.error ?? `HTTP ${r.status}`,
                });
                return;
            }
            setStats(j);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setStats({ ok: false, totalAttempts: 0, items: [], error: msg });
        } finally {
            setLoading(false);
        }
    }, []);

    // ✅ no warning: deps include fetchStats
    useEffect(() => {
        void fetchStats();
    }, [fetchStats]);

    const maxCount = useMemo(() => {
        const items = stats?.items ?? [];
        let m = 0;
        for (const it of items) m = Math.max(m, it.correctCount);
        return m;
    }, [stats]);

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-6xl space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-semibold">Admin</h1>

                    <div className="flex flex-wrap gap-2">
                        <Button variant="outline" onClick={() => void fetchStats()} disabled={loading}>
                            {loading ? "Yuklanmoqda..." : "Yangilash"}
                        </Button>

                        <a href="/api/attempts/export/pdf" target="_blank" rel="noopener noreferrer">
                            <Button>PDF yuklab olish</Button>
                        </a>
                    </div>
                </div>

                <Card className="p-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-semibold">Savollar bo‘yicha to‘g‘ri javoblar statistikasi</h2>
                        <p className="text-sm text-gray-600">
                            Jami urinishlar: <b>{stats?.ok ? stats.totalAttempts : 0}</b>
                        </p>
                        {stats?.error ? <p className="text-sm text-red-600">Xatolik: {stats.error}</p> : null}
                    </div>

                    <div className="mt-4 overflow-x-auto">
                        <div className="min-w-[1100px]">
                            <div className="flex items-end gap-2 rounded-md border bg-white p-3">
                                {(stats?.items ?? []).map((it) => {
                                    const h = maxCount > 0 ? Math.max(2, Math.round((it.correctCount / maxCount) * 180)) : 2;

                                    return (
                                        <div key={it.label} className="flex w-10 flex-col items-center gap-2">
                                            <div className="text-xs text-gray-600">{it.correctCount}</div>
                                            <div
                                                title={`${it.label}: ${it.correctCount}`}
                                                className="w-full rounded-md bg-blue-600"
                                                style={{ height: `${h}px` }}
                                            />
                                            <div className="text-[11px] text-gray-700">{it.label}</div>
                                        </div>
                                    );
                                })}
                            </div>

                            <p className="mt-2 text-xs text-gray-500">
                                Izoh: balandlik — eng ko‘p to‘g‘ri javob olingan savolga nisbatan hisoblanadi.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}
