import type { Question } from "@/types";

export const QUESTIONS: Question[] = [
    // 1) Chiziqcha bilan yoziladigan so‘zlar qatorini aniqlang.
    {
        id: 1,
        questionText: "Chiziqcha bilan yoziladigan so‘zlar qatorini aniqlang.",
        questionType: "multiple_choice",
        options: [
            "A) multi-media, dam-badam, kilovatt-soat",
            "B) ot-ulov, video-kuzatuv, ochiq-sochiq",
            "C) xatti-harakat, hisob-kitob, uzuq-yuluq",
            "D) vafo-jafo, tarkib-baiid, salom-alik",
        ],
        // To'g'ri javob: C (hammasi me’yorda defis bilan yoziladi)
        correctAnswer: "C",
    },

    // 2) Imloviy xatolik turlari (matn + kategoriyalarni matn ko‘rinishida beramiz)
    {
        id: 2,
        questionText:
            [
                "Quyidagi gapda imloviy xatoliklarning qaysi turlari ishtirok etgan?",
                "",
                "Matn:",
                "“Merkuriyning kometaga o‘xshash dumi bor. Uning uzunligi 2,5 uillion km.",
                "Merkuriy tekis mintaqasi tufayli yosh deb qaraladi. Yuqori haroratga qaramay,",
                "sayyorada suv muzlarining ulkan zaxiralari mavjud. U chuqur kraterlar va",
                "qutbli nuqtalarning pastki qismida joylashgan. Muzlar hech qachon erimaydi,",
                "chunki baland devorlar ularni quyosh nurlaridan to1sib turadi. Ilgari Merkuriy",
                "Veneraning yo‘ldoshi degan gipoteza mavjud edi.”",
                "",
                "Kategoriya ro‘yxati:",
                "1) Unli va undosh bilan yozish imlosiga oid",
                "2) Chiziqcha bilan yozish imlosiga oid",
                "3) Bosh harf bilan yozish imlosiga oid",
                "4) Qo‘shib yoki ajratib yozish imlosiga oid",
            ].join("\n"),
        questionType: "multiple_choice",
        options: [
            "A) 3 va 4",
            "B) 1 va 3",
            "C) 2 va 3",
            "D) 1 va 4",
        ],
        // To'g'ri javob: D (1 va 4)
        correctAnswer: "D",
    },

    // ...continue with Q3..Q45 here
];
