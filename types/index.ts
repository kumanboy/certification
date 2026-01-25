// types/index.ts

/** Matching table meta (Q7 style) */
export interface MatchMeta {
    left: { key: string; text: string }[];   // e.g., A–D
    right: { key: string; text: string }[];  // e.g., 1–6
}

/** 3-node diagram option used as a single choice (Q3 style). */
export interface DiagramOption {
    top: string;
    left: string;
    right: string;
}

/** 4-node fixed diagram (center + 4 directions) shown above the options (not always used). */
export interface DiagramFour {
    center: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
}

export type QuestionType =
    | "multiple_choice"
    | "diagram_mcq"
    | "match_table"
    | "fill_blank"
    | "structured"          // free-text (single or multi-part); inputs or textareas
    | "structured_textarea" // legacy alias (treated like "structured")
    | "passage"
    | "essay";

/**
 * Structured question parts.
 * Backward-compatible fields:
 *  - New:    label / multiline / placeholder
 *  - Legacy: prompt / kind("text" | "select" | "textarea") / options / correct
 */
export type StructuredPart = {
    key: string;                 // "a" | "b" | "1" | ...
    // New fields used by the current renderer:
    label?: string;
    multiline?: boolean;
    placeholder?: string;

    // Legacy fields still accepted so older code compiles:
    prompt?: string;
    kind?: "text" | "select" | "textarea";
    options?: string[];
    correct?: string;
};

export interface Question {
    id: number;
    /** Use \n for new lines; passages are rendered in <pre>. */
    questionText: string;
    questionType: QuestionType;

    /** For MCQ / diagram_mcq. */
    options?: (string | DiagramOption)[];
    correctAnswer?: string;
    imageUrl?: string;
    points?: number;

    /** For match_table. */
    match?: MatchMeta;

    /** For structured (free-text) questions (Q36–Q44). */
    parts?: StructuredPart[];

    /** Optional: show a 4-way diagram above the options. */
    diagram4?: DiagramFour;

    /** Legacy optional multi-input API (not used by current renderer). */
    subInputs?: Array<{ key: string; label: string; textarea?: boolean }>;
}
