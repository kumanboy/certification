"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type SubmitDetails = {
    firstName: string;
    lastName: string;
    telegram?: string;
    phone?: string;
};

type Props = {
    open: boolean;
    onClose: () => void;
    onSubmit: (details: SubmitDetails) => void;
};

export default function SubmitDialog({ open, onClose, onSubmit }: Props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telegram, setTelegram] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState<string | null>(null);
    const firstInputRef = useRef<HTMLInputElement | null>(null);

    // focus first field when opening
    useEffect(() => {
        if (open) {
            setTimeout(() => firstInputRef.current?.focus(), 0);
        } else {
            setError(null);
        }
    }, [open]);

    if (!open) return null;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim()) {
            setError("Ism va familiya kiritilishi shart.");
            return;
        }
        if (!telegram.trim() && !phone.trim()) {
            setError("Telegram yoki telefon raqamidan kamida bittasini kiriting.");
            return;
        }
        onSubmit({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            telegram: telegram.trim() || undefined,
            phone: phone.trim() || undefined,
        });
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className="w-full max-w-lg rounded-xl border bg-white p-4 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Yuborishdan oldin ma’lumotlarni kiriting</h3>
                    <button
                        aria-label="Yopish"
                        className="rounded-md p-1 text-gray-500 hover:bg-gray-100"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm text-gray-600">Familiya</label>
                            <Input
                                ref={firstInputRef}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Familiyangiz"
                                required
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm text-gray-600">Ism</label>
                            <Input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Ismingiz"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm text-gray-600">
                                Telegram (foydalanuvchi nomi)
                            </label>
                            <Input
                                value={telegram}
                                onChange={(e) => setTelegram(e.target.value)}
                                placeholder="@username"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm text-gray-600">Telefon raqami</label>
                            <Input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+99890 123 45 67"
                            />
                        </div>
                    </div>

                    {error ? <p className="text-sm text-red-600">{error}</p> : null}

                    <div className="mt-2 flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Bekor qilish
                        </Button>
                        <Button type="submit">Yuborish</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
