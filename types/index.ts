export interface User {
    id: string;
    sessionToken: string;
    createdAt: Date;
    expiresAt: Date;
}

export type QuestionType =
    | "multiple_choice"
    | "fill_blank"
    | "essay";

export interface Question {
    id: number;
    questionText: string;
    questionType: QuestionType;
    options?: string[];          // for MCQ
    correctAnswer?: string;      // single correct for MCQ/fill
    imageUrl?: string;           // optional image shown above question
    points?: number;             // not used (we calculate by id), but kept for flexibility
    // optional hint for the renderer (e.g., draw a diagram)
    diagram?: boolean;
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