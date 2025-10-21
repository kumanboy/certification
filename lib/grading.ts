// lib/grading.ts

// ---- Primary API (use this for overall total out of 150) ----
export function letterGradeFromTotal(totalPoints: number, maxPoints = 150): string {
    // Convert to % and then apply thresholds derived from the 75-point chart.
    const percent = (totalPoints / maxPoints) * 100;

    // Thresholds are the same ratios as the 75-point chart:
    // A+ >= 70/75, A >= 65/75, B+ >= 60/75, B >= 55/75, C+ >= 50/75, C >= 45/75
    const APLUS = (70 / 75) * 100; // 93.333...
    const A     = (65 / 75) * 100; // 86.666...
    const BPLUS = (60 / 75) * 100; // 80.000
    const B     = (55 / 75) * 100; // 73.333...
    const CPLUS = (50 / 75) * 100; // 66.666...
    const C     = (45 / 75) * 100; // 60.000

    if (percent >= APLUS) return "A+";
    if (percent >= A)     return "A";
    if (percent >= BPLUS) return "B+";
    if (percent >= B)     return "B";
    if (percent >= CPLUS) return "C+";
    if (percent >= C)     return "C";
    return "F";
}

// ---- Convenience: test-only grading (raw score out of 75) ----
export function letterGradeFromTestScore(scoreOutOf75: number): string {
    if (scoreOutOf75 >= 70) return "A+";
    if (scoreOutOf75 >= 65) return "A";
    if (scoreOutOf75 >= 60) return "B+";
    if (scoreOutOf75 >= 55) return "B";
    if (scoreOutOf75 >= 50) return "C+";
    if (scoreOutOf75 >= 45) return "C";
    return "F";
}

// ---- If you still want a percent-only helper, keep this thin wrapper ----
export function letterGrade(percent: number): string {
    // Uses the same thresholds as above (derived from the 75-pt chart)
    const APLUS = (70 / 75) * 100;
    const A     = (65 / 75) * 100;
    const BPLUS = (60 / 75) * 100;
    const B     = (55 / 75) * 100;
    const CPLUS = (50 / 75) * 100;
    const C     = (45 / 75) * 100;

    if (percent >= APLUS) return "A+";
    if (percent >= A)     return "A";
    if (percent >= BPLUS) return "B+";
    if (percent >= B)     return "B";
    if (percent >= CPLUS) return "C+";
    if (percent >= C)     return "C";
    return "F";
}
