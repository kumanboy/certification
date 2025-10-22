"use client";
import { MatchMeta } from "@/types";

export default function MatchTable({ match }: { match: MatchMeta }) {
    return (
        <div className="rounded-xl border shadow-sm overflow-hidden">
            {/* header */}
            <div className="grid grid-cols-2 bg-gray-50 border-b font-semibold">
                <div className="px-4 py-2">Chap ustun (ma’no)</div>
                <div className="px-4 py-2 border-l">O‘ng ustun (misollar)</div>
            </div>

            {/* body: two columns, each with its own rows to align visually like the image */}
            <div className="grid grid-cols-2">
                {/* left column */}
                <div className="divide-y">
                    {match.left.map((row) => (
                        <div key={row.key} className="flex items-start gap-3 px-4 py-2">
                            <div className="min-w-6 font-semibold">{row.key})</div>
                            <div>{row.text}</div>
                        </div>
                    ))}
                </div>

                {/* right column */}
                <div className="divide-y border-l">
                    {match.right.map((row) => (
                        <div key={row.key} className="flex items-start gap-3 px-4 py-2">
                            <div className="min-w-6 font-semibold">{row.key})</div>
                            <div>{row.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
