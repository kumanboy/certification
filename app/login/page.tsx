"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();
    const sp = useSearchParams();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setErr(null);
        try {
            const res = await fetch("/api/auth/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Login failed");
            const next = sp.get("redirect") || "/exam";
            router.replace(next);
        } catch (e: any) {
            setErr(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <form
                onSubmit={onSubmit}
                className="w-full max-w-sm space-y-4 rounded-2xl border bg-white p-6 shadow"
            >
                <h1 className="text-xl font-semibold text-center">Kirish</h1>
                <p className="text-sm text-gray-500 text-center">
                     Kodni kiriting
                </p>
                <Input
                    placeholder="Kodni kiriting"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                {err && <p className="text-sm text-red-600">{err}</p>}
                <Button type="submit" disabled={loading}>
                    {loading ? "Tekshirilmoqda..." : "Kirish"}
                </Button>
                <p className="text-xs text-gray-400 text-center">Imtihon 3 soat davom etadi</p>
            </form>
        </main>
    );
}
