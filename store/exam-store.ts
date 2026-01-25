import { create } from 'zustand';

interface ExamState {
    currentQuestionIndex: number;
    answers: Record<number, string>;
    timeRemaining: number;
    isSubmitting: boolean;

    setCurrentQuestion: (index: number) => void;
    setAnswer: (questionId: number, answer: string) => void;
    setTimeRemaining: (time: number) => void;
    setIsSubmitting: (submitting: boolean) => void;
    resetExam: () => void;
}

export const useExamStore = create<ExamState>((set) => ({
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: 0,
    isSubmitting: false,

    setCurrentQuestion: (index) => set({ currentQuestionIndex: index }),
    setAnswer: (questionId, answer) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: answer }
        })),
    setTimeRemaining: (time) => set({ timeRemaining: time }),
    setIsSubmitting: (submitting) => set({ isSubmitting: submitting }),
    resetExam: () => set({
        currentQuestionIndex: 0,
        answers: {},
        timeRemaining: 0,
        isSubmitting: false,
    }),
}));