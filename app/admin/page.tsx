// app/admin/page.tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    const chartScrollRef = useRef<HTMLDivElement | null>(null);

    const fetchStats = useCallback(async () => {
        setLoading(true);

        try {
            const r = await fetch("/api/admin/stats/correct-by-question", {
                cache: "no-store",
            });

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

            setTimeout(() => {
                chartScrollRef.current?.scrollTo({ left: 0 });
            }, 0);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);

            setStats({
                ok: false,
                totalAttempts: 0,
                items: [],
                error: msg,
            });
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchStats();
    }, [fetchStats]);

    const items = useMemo(() => stats?.items ?? [], [stats?.items]);

    const maxCount = useMemo(() => {
        let m = 0;

        for (const it of items) {
            m = Math.max(m, it.correctCount);
        }

        return m;
    }, [items]);

    const chartWidth = useMemo(() => {
        const barWidth = 48;
        const minWidth = 760;
        return Math.max(minWidth, items.length * barWidth);
    }, [items.length]);

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-5 sm:px-6">
            <div className="mx-auto max-w-6xl space-y-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Admin</h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Test statistikasi va natijalar boshqaruvi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap">
                        <Button
                            variant="outline"
                            onClick={() => void fetchStats()}
                            disabled={loading}
                            className="w-full lg:w-auto"
                        >
                            {loading ? "Yuklanmoqda..." : "Yangilash"}
                        </Button>

                        <a
                            href="/api/attempts/export/pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full lg:w-auto"
                        >
                            <Button className="w-full lg:w-auto">
                                PDF yuklab olish
                            </Button>
                        </a>

                        <a href="/admin/questions" className="w-full lg:w-auto">
                            <Button variant="outline" className="w-full lg:w-auto">
                                Savollarni boshqarish
                            </Button>
                        </a>
                    </div>
                </div>

                <Card className="overflow-hidden p-4 sm:p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold">
                                Savollar bo‘yicha to‘g‘ri javoblar statistikasi
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Jami urinishlar:{" "}
                                <b>{stats?.ok ? stats.totalAttempts : 0}</b>
                            </p>

                            {stats?.error ? (
                                <p className="mt-1 text-sm text-red-600">
                                    Xatolik: {stats.error}
                                </p>
                            ) : null}
                        </div>

                        <div className="rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-700">
                            Savollar: <b>{items.length}</b>
                        </div>
                    </div>

                    <div className="mt-5">
                        {items.length === 0 ? (
                            <div className="rounded-lg border bg-white p-8 text-center text-sm text-gray-500">
                                Hozircha statistika mavjud emas.
                            </div>
                        ) : (
                            <div
                                ref={chartScrollRef}
                                className="w-full overflow-x-auto rounded-xl border bg-white"
                                style={{
                                    WebkitOverflowScrolling: "touch",
                                }}
                            >
                                <div
                                    className="relative px-3 pb-4 pt-4"
                                    style={{
                                        width: `${chartWidth}px`,
                                        minWidth: "100%",
                                    }}
                                >
                                    <div className="flex h-72 items-end gap-3 border-b border-gray-200 pb-8">
                                        {items.map((it) => {
                                            const height =
                                                maxCount > 0
                                                    ? Math.max(
                                                        4,
                                                        Math.round((it.correctCount / maxCount) * 210)
                                                    )
                                                    : 4;

                                            return (
                                                <div
                                                    key={it.label}
                                                    className="flex w-9 shrink-0 flex-col items-center justify-end"
                                                >
                                                    <div
                                                        className="mb-2 max-w-[46px] truncate text-center text-[11px] text-gray-700"
                                                        title={String(it.correctCount)}
                                                    >
                                                        {it.correctCount}
                                                    </div>

                                                    <div
                                                        title={`${it.label}: ${it.correctCount}`}
                                                        className="w-full rounded-t-md bg-blue-600 transition-all"
                                                        style={{ height: `${height}px` }}
                                                    />

                                                    <div
                                                        className="absolute bottom-3 w-9 truncate text-center text-[11px] text-gray-700"
                                                        style={{
                                                            transform: "translateY(0)",
                                                        }}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-2 flex gap-3">
                                        {items.map((it) => (
                                            <div
                                                key={`label-${it.label}`}
                                                className="w-9 shrink-0 truncate text-center text-[11px] text-gray-700"
                                                title={it.label}
                                            >
                                                {it.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <p className="mt-3 text-xs leading-5 text-gray-500">
                            Izoh: ustun balandligi eng ko‘p to‘g‘ri javob olingan savolga
                            nisbatan hisoblanadi. Jadvalni chapga yoki o‘ngga surib ko‘rish mumkin.
                        </p>
                    </div>
                </Card>
            </div>
        </main>
    );
}
