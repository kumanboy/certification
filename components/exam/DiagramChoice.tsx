"use client";
import { cn } from "@/lib/utils";

type Props = {
    top: string;
    left: string;
    right: string;
    selected?: boolean;
    onClick?: () => void;
};

export default function DiagramChoice({ top, left, right, selected, onClick }: Props) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "w-full rounded-xl border p-3 text-left transition bg-white",
                selected ? "border-blue-600 ring-2 ring-blue-200" : "hover:bg-gray-50"
            )}
        >
            <div className="relative mx-auto max-w-[520px]">
                {/* Boxes */}
                <div className="flex justify-center">
                    <Box>{top}</Box>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-6">
                    <Box>{left}</Box>
                    <Box>{right}</Box>
                </div>

                {/* Arrows (SVG) */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 520 160">
                    {/* top -> left */}
                    <Arrow x1={260} y1={32} x2={130} y2={104} />
                    {/* top -> right */}
                    <Arrow x1={260} y1={32} y2={104} x2={390} />
                    {/* left <-> right (double) */}
                    <Arrow x1={160} y1={120} x2={360} y2={120} bidirectional />
                </svg>
            </div>
        </button>
    );
}

function Box({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-lg border bg-white px-4 py-2 text-center font-serif italic shadow-sm">
            {children}
        </div>
    );
}

function Arrow({
                   x1, y1, x2, y2, bidirectional,
               }: { x1: number; y1: number; x2: number; y2: number; bidirectional?: boolean }) {
    const markerEnd = "url(#arrow)";
    const markerStart = bidirectional ? "url(#arrow)" : undefined;
    return (
        <svg viewBox="0 0 520 160" className="absolute inset-0 h-full w-full overflow-visible">
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" className="fill-gray-500" />
                </marker>
            </defs>
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="stroke-gray-500"
                strokeWidth={2}
                markerEnd={markerEnd}
                markerStart={markerStart}
            />
        </svg>
    );
}
