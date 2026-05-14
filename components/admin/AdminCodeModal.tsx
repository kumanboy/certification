// components/admin/AdminCodeModal.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
    onSuccess: () => void;
};

export default function AdminCodeModal({ onSuccess }: Props) {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function submitCode(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
            const r = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
                cache: "no-store",
            });

            const j = (await r.json()) as { ok?: boolean; error?: string };

            if (!r.ok || !j.ok) {
                setError(j.error ?? "Kod noto‘g‘ri");
                return;
            }

            onSuccess();
        } catch {
            setError("Kirishda xatolik yuz berdi.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="w-full max-w-sm rounded-2xl border bg-white p-5 shadow-xl">
                <h2 className="text-xl font-semibold">Admin kodini kiriting</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Admin panelga kirish uchun 4 xonali kod kerak.
                </p>

                <form onSubmit={submitCode} className="mt-4 space-y-3">
                    <Input
                        value={code}
                        onChange={(e) => {
                            const onlyNumbers = e.target.value.replace(/\D/g, "").slice(0, 4);
                            setCode(onlyNumbers);
                        }}
                        placeholder="4 xonali kod"
                        inputMode="numeric"
                        maxLength={4}
                        className="text-center text-xl tracking-[0.4em]"
                        autoFocus
                    />

                    {error ? <p className="text-sm text-red-600">{error}</p> : null}

                    <Button type="submit" className="w-full" disabled={loading || code.length < 4}>
                        {loading ? "Tekshirilmoqda..." : "Kirish"}
                    </Button>
                </form>
            </div>
        </div>
    );
}