// Official test scoring buckets:
export function getQuestionPoints(id: number): number {
    if (id >= 1 && id <= 6) return 1.7;
    if (id >= 7 && id <= 8) return 2.5;
    if (id >= 9 && id <= 11) return 1.7;
    if (id === 12) return 2.5;
    if (id >= 13 && id <= 22) return 1.7;
    if (id >= 23 && id <= 27) return 1.1;
    if (id >= 28 && id <= 32) return 2.5;
    if (id >= 33 && id <= 35) return 1.7;
    if (id === 36) return 1.7;
    if (id === 37) return 2.5;
    if (id === 38 || id === 39) return 1.7;
    if (id === 40) return 2.5;
    if (id >= 41 && id <= 44) return 1.7;
    // 45 = essay (separate bucket)
    return 0;
}

export const TEST_MAX = 75;   // Q1..Q44
export const ESSAY_MAX = 75;  // Q45

export function wordCount(s: string): number {
    return (s.trim().match(/\b[\p{L}\p{N}’'-]+\b/gu) || []).length;
}
