// app/admin/questions/page.tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Question, QuestionType, StructuredPart } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const QUESTION_TYPES: QuestionType[] = [
    "multiple_choice",
    "diagram_mcq",
    "match_table",
    "structured",
    "passage",
    "essay",
];

type AdminQuestion = Question & {
    sortOrder?: number;
    isActive?: boolean;
};

type ApiResponse = {
    ok: boolean;
    questions?: Question[];
    error?: string;
};

type UploadResponse = {
    ok: boolean;
    url?: string;
    error?: string;
};

const emptyQuestion: AdminQuestion = {
    id: 1,
    questionText: "",
    questionType: "multiple_choice",
    options: ["", "", "", ""],
    correctAnswer: "A",
    imageUrl: "",
    points: 1.7,
    parts: [],
    sortOrder: 1,
    isActive: true,
};

function safeJsonParse<T>(value: string, fallback: T): T {
    try {
        return JSON.parse(value) as T;
    } catch {
        return fallback;
    }
}

function prettyJson(value: unknown): string {
    if (value === undefined || value === null) return "";
    return JSON.stringify(value, null, 2);
}

export default function AdminQuestionsPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const [editingId, setEditingId] = useState<number | null>(null);
    const [form, setForm] = useState<AdminQuestion>(emptyQuestion);

    const [optionsText, setOptionsText] = useState(prettyJson(emptyQuestion.options));
    const [partsText, setPartsText] = useState("");
    const [matchText, setMatchText] = useState("");
    const [diagram4Text, setDiagram4Text] = useState("");

    const sortedQuestions = useMemo(() => {
        return [...questions].sort((a, b) => a.id - b.id);
    }, [questions]);

    const fetchQuestions = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const r = await fetch("/api/admin/questions", { cache: "no-store" });
            const j = (await r.json()) as ApiResponse;

            if (!r.ok || !j.ok || !Array.isArray(j.questions)) {
                setQuestions([]);
                setError(j.error ?? `HTTP ${r.status}`);
                return;
            }

            setQuestions(j.questions);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setError(msg);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchQuestions();
    }, [fetchQuestions]);

    function resetForm() {
        setEditingId(null);
        setForm(emptyQuestion);
        setOptionsText(prettyJson(emptyQuestion.options));
        setPartsText("");
        setMatchText("");
        setDiagram4Text("");
        setMessage(null);
        setError(null);
    }

    function startEdit(q: Question) {
        setEditingId(q.id);
        setForm({
            ...q,
            sortOrder: q.id,
            isActive: true,
            imageUrl: q.imageUrl ?? "",
            points: q.points ?? 0,
        });

        setOptionsText(prettyJson(q.options ?? []));
        setPartsText(prettyJson(q.parts ?? []));
        setMatchText(prettyJson(q.match ?? null));
        setDiagram4Text(prettyJson(q.diagram4 ?? null));
        setMessage(null);
        setError(null);
    }

    function validateForm(): string | null {
        if (!Number.isFinite(Number(form.id)) || Number(form.id) <= 0) {
            return "Savol ID noto‘g‘ri.";
        }

        if (!form.questionText.trim()) {
            return "Savol matni kiritilishi shart.";
        }

        if (!form.questionType) {
            return "Savol turi tanlanishi shart.";
        }

        if (
            ["multiple_choice", "diagram_mcq", "match_table"].includes(form.questionType) &&
            !String(form.correctAnswer ?? "").trim()
        ) {
            return "Test savoli uchun to‘g‘ri javob kiritilishi shart.";
        }

        return null;
    }

    async function uploadImage(file: File | null) {
        if (!file) return;

        setUploadingImage(true);
        setError(null);
        setMessage(null);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const r = await fetch("/api/admin/upload-image", {
                method: "POST",
                body: formData,
                cache: "no-store",
            });

            const j = (await r.json()) as UploadResponse;

            if (!r.ok || !j.ok || !j.url) {
                setError(j.error ?? `Upload failed: HTTP ${r.status}`);
                return;
            }

            setForm((p) => ({
                ...p,
                imageUrl: j.url,
            }));

            setMessage("Rasm yuklandi va Rasm URL maydoniga joylandi.");
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setError(msg);
        } finally {
            setUploadingImage(false);
        }
    }

    async function saveQuestion() {
        setSaving(true);
        setError(null);
        setMessage(null);

        try {
            const validationError = validateForm();

            if (validationError) {
                setError(validationError);
                return;
            }

            const payload: AdminQuestion = {
                ...form,
                id: Number(form.id),
                questionText: form.questionText.trim(),
                questionType: form.questionType,
                options: safeJsonParse(optionsText || "[]", []),
                parts: safeJsonParse<StructuredPart[]>(partsText || "[]", []),
                match: safeJsonParse(matchText || "null", undefined),
                diagram4: safeJsonParse(diagram4Text || "null", undefined),
                correctAnswer: form.correctAnswer
                    ? String(form.correctAnswer).trim().toUpperCase()
                    : undefined,
                imageUrl: form.imageUrl ? String(form.imageUrl).trim() : undefined,
                points: Number(form.points ?? 0),
                sortOrder: Number(form.sortOrder ?? form.id),
                isActive: form.isActive ?? true,
            };

            const url =
                editingId === null
                    ? "/api/admin/questions"
                    : `/api/admin/questions/${editingId}`;

            const method = editingId === null ? "POST" : "PUT";

            const r = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                cache: "no-store",
            });

            const j = (await r.json()) as { ok?: boolean; error?: string };

            if (!r.ok || !j.ok) {
                setError(j.error ?? `HTTP ${r.status}`);
                return;
            }

            setMessage(editingId === null ? "Savol qo‘shildi." : "Savol yangilandi.");
            await fetchQuestions();
            resetForm();
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setError(msg);
        } finally {
            setSaving(false);
        }
    }

    async function deleteQuestion(id: number) {
        const ok = window.confirm(`${id}-savolni o‘chirishni tasdiqlaysizmi?`);
        if (!ok) return;

        setError(null);
        setMessage(null);

        try {
            const r = await fetch(`/api/admin/questions/${id}`, {
                method: "DELETE",
                cache: "no-store",
            });

            const j = (await r.json()) as { ok?: boolean; error?: string };

            if (!r.ok || !j.ok) {
                setError(j.error ?? `HTTP ${r.status}`);
                return;
            }

            setMessage("Savol o‘chirildi.");
            await fetchQuestions();

            if (editingId === id) resetForm();
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setError(msg);
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-5 sm:px-6">
            <div className="mx-auto max-w-7xl space-y-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Savollar boshqaruvi</h1>
                        <p className="mt-1 text-sm text-gray-600">
                            Test savollarini qo‘shish, tahrirlash, o‘chirish va rasm yuklash.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                        <Button variant="outline" onClick={() => void fetchQuestions()} disabled={loading}>
                            {loading ? "Yuklanmoqda..." : "Yangilash"}
                        </Button>

                        <Button variant="outline" onClick={resetForm}>
                            Yangi savol
                        </Button>
                    </div>
                </div>

                {error ? (
                    <Card className="border-red-200 bg-red-50 p-4 text-sm text-red-700">
                        Xatolik: {error}
                    </Card>
                ) : null}

                {message ? (
                    <Card className="border-green-200 bg-green-50 p-4 text-sm text-green-700">
                        {message}
                    </Card>
                ) : null}

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[420px_1fr]">
                    <Card className="p-4">
                        <h2 className="text-lg font-semibold">
                            {editingId === null ? "Yangi savol qo‘shish" : `${editingId}-savolni tahrirlash`}
                        </h2>

                        <div className="mt-4 space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="mb-1 block text-sm text-gray-600">ID</label>
                                    <Input
                                        type="number"
                                        value={form.id}
                                        disabled={editingId !== null}
                                        onChange={(e) =>
                                            setForm((p) => ({
                                                ...p,
                                                id: Number(e.target.value),
                                                sortOrder: Number(e.target.value),
                                            }))
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm text-gray-600">Ball</label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={form.points ?? 0}
                                        onChange={(e) =>
                                            setForm((p) => ({
                                                ...p,
                                                points: Number(e.target.value),
                                            }))
                                        }
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm text-gray-600">Savol turi</label>
                                <select
                                    value={form.questionType}
                                    onChange={(e) =>
                                        setForm((p) => ({
                                            ...p,
                                            questionType: e.target.value as QuestionType,
                                        }))
                                    }
                                    className="w-full rounded-md border bg-white px-3 py-2 text-sm"
                                >
                                    {QUESTION_TYPES.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm text-gray-600">Savol matni</label>
                                <textarea
                                    value={form.questionText}
                                    onChange={(e) =>
                                        setForm((p) => ({
                                            ...p,
                                            questionText: e.target.value,
                                        }))
                                    }
                                    className="min-h-36 w-full rounded-md border px-3 py-2 text-sm"
                                    placeholder="Savol matnini kiriting..."
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm text-gray-600">
                                        To‘g‘ri javob
                                    </label>
                                    <Input
                                        value={form.correctAnswer ?? ""}
                                        onChange={(e) =>
                                            setForm((p) => ({
                                                ...p,
                                                correctAnswer: e.target.value.toUpperCase(),
                                            }))
                                        }
                                        placeholder="A"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1 block text-sm text-gray-600">
                                        Rasm URL
                                    </label>

                                    <div className="space-y-2">
                                        <Input
                                            value={form.imageUrl ?? ""}
                                            onChange={(e) =>
                                                setForm((p) => ({
                                                    ...p,
                                                    imageUrl: e.target.value,
                                                }))
                                            }
                                            placeholder="/images/questions/example.png"
                                        />

                                        <label className="flex cursor-pointer items-center justify-center rounded-md border bg-white px-3 py-2 text-sm transition hover:bg-gray-50">
                                            {uploadingImage ? "Yuklanmoqda..." : "Rasm yuklash"}
                                            <input
                                                type="file"
                                                accept="image/png,image/jpeg,image/jpg,image/webp"
                                                className="hidden"
                                                disabled={uploadingImage}
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0] ?? null;
                                                    void uploadImage(file);
                                                    e.target.value = "";
                                                }}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {form.imageUrl ? (
                                <div className="rounded-md border bg-white p-2">
                                    <div className="mb-2 flex items-center justify-between gap-2">
                                        <p className="text-xs text-gray-500">Rasm ko‘rinishi:</p>

                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            onClick={() =>
                                                setForm((p) => ({
                                                    ...p,
                                                    imageUrl: "",
                                                }))
                                            }
                                        >
                                            Rasmni olib tashlash
                                        </Button>
                                    </div>

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={form.imageUrl}
                                        alt="Question preview"
                                        className="max-h-48 w-full rounded object-contain"
                                    />
                                </div>
                            ) : null}

                            <div>
                                <label className="mb-1 block text-sm text-gray-600">
                                    Variantlar JSON
                                </label>
                                <textarea
                                    value={optionsText}
                                    onChange={(e) => setOptionsText(e.target.value)}
                                    className="min-h-32 w-full rounded-md border px-3 py-2 font-mono text-xs"
                                    placeholder={`["A variant", "B variant", "C variant", "D variant"]`}
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm text-gray-600">
                                    Structured parts JSON
                                </label>
                                <textarea
                                    value={partsText}
                                    onChange={(e) => setPartsText(e.target.value)}
                                    className="min-h-28 w-full rounded-md border px-3 py-2 font-mono text-xs"
                                    placeholder={`[{"key":"a","label":"Javob:","correct":"MARD"}]`}
                                />
                            </div>

                            <details className="rounded-md border bg-white p-3">
                                <summary className="cursor-pointer text-sm font-medium">
                                    Qo‘shimcha JSON maydonlar
                                </summary>

                                <div className="mt-3 space-y-3">
                                    <div>
                                        <label className="mb-1 block text-sm text-gray-600">
                                            Match JSON
                                        </label>
                                        <textarea
                                            value={matchText}
                                            onChange={(e) => setMatchText(e.target.value)}
                                            className="min-h-24 w-full rounded-md border px-3 py-2 font-mono text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm text-gray-600">
                                            Diagram4 JSON
                                        </label>
                                        <textarea
                                            value={diagram4Text}
                                            onChange={(e) => setDiagram4Text(e.target.value)}
                                            className="min-h-24 w-full rounded-md border px-3 py-2 font-mono text-xs"
                                        />
                                    </div>
                                </div>
                            </details>

                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={form.isActive ?? true}
                                    onChange={(e) =>
                                        setForm((p) => ({
                                            ...p,
                                            isActive: e.target.checked,
                                        }))
                                    }
                                />
                                Faol savol
                            </label>

                            <div className="flex flex-col gap-2 sm:flex-row">
                                <Button onClick={() => void saveQuestion()} disabled={saving}>
                                    {saving ? "Saqlanmoqda..." : "Saqlash"}
                                </Button>

                                <Button variant="outline" onClick={resetForm}>
                                    Tozalash
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-lg font-semibold">Savollar ro‘yxati</h2>
                            <p className="text-sm text-gray-600">Jami: {questions.length}</p>
                        </div>

                        <div className="mt-4 overflow-x-auto">
                            <table className="min-w-[950px] w-full border text-sm">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="border px-2 py-2 text-left">ID</th>
                                    <th className="border px-2 py-2 text-left">Turi</th>
                                    <th className="border px-2 py-2 text-left">Savol</th>
                                    <th className="border px-2 py-2 text-left">Rasm</th>
                                    <th className="border px-2 py-2 text-left">Javob</th>
                                    <th className="border px-2 py-2 text-left">Ball</th>
                                    <th className="border px-2 py-2 text-left">Amal</th>
                                </tr>
                                </thead>

                                <tbody>
                                {sortedQuestions.map((q) => (
                                    <tr key={q.id}>
                                        <td className="border px-2 py-2">{q.id}</td>
                                        <td className="border px-2 py-2">{q.questionType}</td>
                                        <td className="max-w-[420px] border px-2 py-2">
                                            <div className="line-clamp-3 whitespace-pre-wrap">
                                                {q.questionText}
                                            </div>
                                        </td>
                                        <td className="border px-2 py-2">
                                            {q.imageUrl ? (
                                                <span className="text-xs text-blue-700">
                                                        Bor
                                                    </span>
                                            ) : (
                                                <span className="text-xs text-gray-400">
                                                        Yo‘q
                                                    </span>
                                            )}
                                        </td>
                                        <td className="border px-2 py-2">{q.correctAnswer ?? "—"}</td>
                                        <td className="border px-2 py-2">{q.points ?? 0}</td>
                                        <td className="border px-2 py-2">
                                            <div className="flex flex-col gap-2 sm:flex-row">
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => startEdit(q)}
                                                >
                                                    Tahrirlash
                                                </Button>

                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => void deleteQuestion(q.id)}
                                                >
                                                    O‘chirish
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                                {sortedQuestions.length === 0 ? (
                                    <tr>
                                        <td
                                            className="border px-2 py-8 text-center text-gray-500"
                                            colSpan={7}
                                        >
                                            Hozircha bazada savollar yo‘q.
                                        </td>
                                    </tr>
                                ) : null}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </main>
    );
}