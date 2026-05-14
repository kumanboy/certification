// app/admin/layout.tsx
"use client";

import { useEffect, useState } from "react";
import AdminCodeModal from "@/components/admin/AdminCodeModal";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        async function check() {
            try {
                const r = await fetch("/api/admin/me", { cache: "no-store" });
                const j = (await r.json()) as { ok?: boolean };
                setAllowed(Boolean(r.ok && j.ok));
            } catch {
                setAllowed(false);
            }
        }

        void check();
    }, []);

    return (
        <>
            {children}
            {!allowed ? <AdminCodeModal onSuccess={() => setAllowed(true)} /> : null}
        </>
    );
}