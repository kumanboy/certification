"use client";

import { cn } from "@/lib/utils";

type NavItem = {
    /** text shown on the chip: "1".."37", "M", "G" */
    label: string;
    /** index in `ids` to jump to (e.g., 33/34/35 all map to the same index for Q33 page) */
    index: number;
    /** whether this chip is a passage chip (excluded from numeric total) */
    isPassage?: boolean;
};

type Props = {
    /** if omitted, computed from gradable ids */
    progressTotal?: number;
    /** gradable ids (unique question ids, no duplicates for 33/34/35); if omitted, computed from ids/labelMap */
    gradableIds?: number[];
    /** 0-based index of currently visible item (index in `ids`) */
    current: number;
    /** user answers keyed by real question id */
    answers: Record<number, string>;
    /** real question ids in render order */
    ids: number[];
    /** jump to index in `ids` */
    onJump: (index: number) => void;
    /** labels for each id (used for header + fallback) */
    labelMap: Record<number, string>;
    /** optional prebuilt nav items list (lets us show 33,34,35 for the same page) */
    navItems?: NavItem[];
    /** footer left text (e.g., “Savol 33 / 37”, “Matn”, “G‘azal”) */
    footerLeftText?: string;
};

export default function QuestionNav({
                                        progressTotal,
                                        gradableIds,
                                        current,
                                        answers,
                                        ids,
                                        onJump,
                                        labelMap,
                                        navItems,
                                        footerLeftText,
                                    }: Props) {
    // Compute default gradable ids if not given (exclude M/G passages)
    const effectiveGradableIds =
        gradableIds ??
        ids.filter((id) => {
            const lab = labelMap?.[id];
            return lab !== "M" && lab !== "G";
        });

    // Denominator for progress: if caller gave progressTotal (e.g., 37), use it; otherwise use gradable count
    const effectiveProgressTotal =
        typeof progressTotal === "number" ? progressTotal : effectiveGradableIds.length;

    // Count answered unique questions (do NOT count duplicates like 33/34/35 separately)
    const answeredCount = effectiveGradableIds.filter((id) => !!answers[id]).length;

    const percent =
        effectiveProgressTotal > 0
            ? Math.round((answeredCount / effectiveProgressTotal) * 100)
            : 0;

    // What to render as chips: if navItems provided, use them (shows 33,34,35…)
    // otherwise fall back to simple ids->labelMap.
    const chips: NavItem[] =
        navItems ??
        ids.map((_, idx) => ({
            label: labelMap[ids[idx]] ?? String(idx + 1),
            index: idx,
            isPassage: labelMap[ids[idx]] === "M" || labelMap[ids[idx]] === "G",
        }));

    return (
        <div className="space-y-2">
            {/* Progress */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                    className="h-full bg-blue-600 transition-[width] duration-300"
                    style={{ width: `${percent}%` }}
                    aria-label={`Yakunlangan: ${percent}%`}
                />
            </div>

            {/* Chips: scroll on mobile, wrap on large screens */}
            <div
                className={cn(
                    "w-full rounded-xl border bg-white/80 p-2",
                    "flex gap-2 overflow-x-auto md:overflow-x-auto lg:overflow-x-visible",
                    "md:[scrollbar-width:none] md:[-ms-overflow-style:none] md:[&::-webkit-scrollbar]:hidden",
                    "xl:flex-wrap"
                )}
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {chips.map((item, i) => {
                    const isCurrent = item.index === current;
                    const idAtIndex = ids[item.index];
                    const isAnswered = !!answers[idAtIndex];
                    const label = item.label;

                    return (
                        <button
                            key={`${label}-${i}-${item.index}`}
                            onClick={() => onJump(item.index)}
                            className={cn(
                                "min-w-10 px-3 py-2 rounded-full text-sm font-medium border transition",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                                isCurrent && "bg-blue-600 text-white border-blue-600",
                                !isCurrent && isAnswered && "bg-blue-50 text-blue-700 border-blue-200",
                                !isCurrent &&
                                !isAnswered &&
                                "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            )}
                            aria-current={isCurrent ? "page" : undefined}
                            title={label === "M" ? "Matn" : label === "G" ? "G‘azal" : `Savol ${label}`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* Footer */}
            {footerLeftText ? (
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="truncate">{footerLeftText}</span>
                    <span>Belgilangani: {answeredCount}</span>
                </div>
            ) : null}
        </div>
    );
}
