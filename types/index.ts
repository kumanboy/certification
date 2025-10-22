// types/index.ts

export interface User {
    id: string;
    sessionToken: string;
    createdAt: Date;
    expiresAt: Date;
}

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

/** 4-node fixed diagram (center + 4 directions) shown above the options (Q5 style). */
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
    | "structured"
    | "structured_textarea"
    | "passage"
    | "essay";

export type StructuredPart = {
    key: string;                 // "a" | "b" | "1"...
    prompt: string;              // the text shown next to input
    kind: "text" | "select";     // input type
    options?: string[];          // if kind === "select"
    correct: string;             // canonical correct answer
};

export interface Question {
    id: number;
    questionText: string;                   // use \n for new lines
    questionType: QuestionType;

    /** For MCQ and diagram_mcq. */
    options?: (string | DiagramOption)[];

    correctAnswer?: string;
    imageUrl?: string;
    points?: number;

    match?: MatchMeta;
    parts?: StructuredPart[];

    /** Show a 4-way diagram above the options (Q5). */
    diagram4?: DiagramFour;
    subInputs?: Array<{ key: string; label: string; textarea?: boolean }>;

}

export interface ExamAttempt {
    id: string;
    userId: string;
    startedAt: Date;
    completedAt?: Date;
    answers: Record<number, string>;
    score?: number;
    grade?: string;
    timeSpent?: number;
}

export interface AccessCode {
    code: string;
    expiresAt: Date;
}
