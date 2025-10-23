// app/exam/questions.ts
import type {Question, DiagramOption} from "@/types";

export const QUESTIONS: Question[] = [
    // 1
    {
        id: 1,
        questionText: "Chiziqcha bilan yoziladigan so‘zlar qatorini aniqlang.",
        questionType: "multiple_choice",
        options: [
            "multi-media, dam-badam, kilovatt-soat",
            "ot-ulov, video-kuzatuv, ochiq-sochiq",
            "xatti-harakat, hisob-kitob, uzuq-yuluq",
            "vafo-jafo, tarkib-baiid, salom-alik",
        ],
        correctAnswer: "C",
        points: 1.7,
    },

    // 2
    {
        id: 2,
        questionText: [
            "Quyidagi gapda imloviy xatoliklarning qaysi turlari ishtirok etgan?",
            "",
            "Matn:",
            "“Merkuriyning kometaga o‘xshash dumi bor. Uning uzunligi 2,5 uillion km.",
            "Merkuriy tekis mintaqasi tufayli yosh deb qaraladi. Yuqori haroratga qaramay,",
            "sayyorada suv muzlarining ulkan zaxiralari mavjud. U chuqur kraterlar va",
            "qutbli nuqtalarning pastki qismida joylashgan. Muzlar hech qachon erimaydi,",
            "chunki baland devorlar ularni quyosh nurlaridan to'sib turadi. Ilgari Merkuriy",
            "Veneraning yo‘ldoshi degan gipoteza mavjud edi.”",
            "",
            "Kategoriya ro‘yxati:",
            "1) Unli va undosh bilan yozish imlosiga oid",
            "2) Chiziqcha bilan yozish imlosiga oid",
            "3) Bosh harf bilan yozish imlosiga oid",
            "4) Qo‘shib yoki ajratib yozish imlosiga oid",
        ].join("\n"),
        questionType: "multiple_choice",
        options: ["3 va 4", "1 va 3", "2 va 3", "1 va 4"],
        correctAnswer: "D",
        points: 1.7,
    },

    // 3 (diagram MCQ) — note the explicit cast to DiagramOption[]
    {
        id: 3,
        questionText:
            "Nutqda o‘zaro sinonimlik hosil qila oluvchi so‘zlar qatorini aniqlang.",
        questionType: "diagram_mcq",
        options: [
            {top: "o‘q", left: "paykon", right: "tir"},
            {top: "zulmkor", left: "jobir", right: "qonxo‘r"},
            {top: "ziyon", left: "futur", right: "talafot"},
            {top: "yovuz", left: "dushman", right: "g‘anim"},
        ] as DiagramOption[],
        correctAnswer: "D",
        points: 1.7,
    },

    // 4
    {
        id: 4,
        questionText:
            "Berilgan so‘zlar va ularning ma’nolari xato izohlangan javobni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Iqtibos — bu boshqa muallifga oid matndan to‘liq yoki qisqacha olingan fikr bo‘lib, ko‘pincha manbasi bilan birga keltiriladi.",
            "Muqoyasa — bu ikki narsa o‘rtasidagi o‘xshashlikni aniqlash emas, balki ularning sinonim ekanini aniqlash usulidir.",
            "Mazmun — bu matn, nutq yoki obraz orqali yetkaziladigan ichki g‘oya, fikrning semantik qatlamidir.",
            "Ifoda — bu fikr va tuyg‘ularni til orqali aniq ifoda bilan yetkazish vositasi bo‘lib, leksik va sintaktik birliklar asosida shakllanadi.",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

    // 5 (“Ayon”) — plain MCQ with textual diagram labels in the stem
    {
        id: 5,
        questionText: [
            "“Ayon” so‘zining ma’nolari XATO izohlangan javobni aniqlang.",
            "",
            "Markaziy so‘z: AYON",
            "1) Ma’nodoshi: amaldorlar",
            "2) Paronimi: a’yon (ot)",
            "3) Ko‘chma ma’nosi: kuchli",
            "4) Antonimi: noaniq",
        ].join("\n"),
        questionType: "multiple_choice",
        options: ["1, 3", "2, 4", "1, 2", "3, 4"],
        correctAnswer: "A",
        points: 1.7,
    },

    // 6
    {
        id: 6,
        questionText:
            "Qaysi javobda kelishik qo‘shimchasini qo‘llash bilan bog‘liq uslubiy xatolik mavjud?",
        questionType: "multiple_choice",
        options: [
            "Yanglishish — har bir kishidai xos ish, lekin yanglishishni qaysarlik bilan inkor qilish nodonlarga xos ishdir.",
            "O‘z uyidagilarini yaxshi qilishga o‘rgata olmaydiganlarning o‘zlari ham hech narsa o‘rgana olmaydi.",
            "Shunday o‘qigingki, go‘yo sizga o‘z bilimlaringiz doim yetishmayotgandek tuyulsin.",
            "Yo‘ldan adashsang, orqaga qaytishing mumkin, ammo so‘zdan adashsang, hech nima qila olmaysan.",
        ],
        correctAnswer: "A",
        points: 1.7,
    },

    // 7 (match-table)
    {
        id: 7,
        questionText:
            "—lar ko‘plik qo‘shimchasi haqidagi to‘g‘ri ma’lumotlarni topib moslashtiring.",
        questionType: "match_table",
        match: {
            left: [
                {key: "A", text: "Sof ko‘plik ma’nosi"},
                {key: "B", text: "Hurmat ma’nosi"},
                {key: "C", text: "Ta’kid ma’nosi"},
                {key: "D", text: "Jamlash ma’nosi"},
            ],
            right: [
                {key: "1", text: "Bunchalik go‘zallikni ko‘rib ko‘zlarim qamashdi."},
                {key: "2", text: "O‘zbekistonda muzeylar juda ham ko‘p."},
                {key: "3", text: "Dadamlar bilan aylanishga chiqdik."},
                {key: "4", text: "Bu kishi oqsuyaklardan: biz gapirsak boshlar(i) og‘rib qoladi."},
                {key: "5", text: "Do‘konga borib nonlardan olib kel."},
                {key: "6", text: "Bu qizlardan kelgusida Nodiralar, Zulfiya(l)ar chiqadi."},
            ],
        },
        options: [
            "a-4; b-1; c-3; d-2,5",
            "a-2,6; b-3; c-1; d-5,6",
            "a-2,5; b-3; c-4; d-5,3",
            "a-2,3; b-1; c-4; d-3,5",
        ],
        correctAnswer: "B",
        points: 2.5,
    },
    // 8) Har uchala parchada ham ishtirok etgan fe'l shakllari
    {
        id: 8,
        questionText:
            "Har uchala parchada ham ishtirok etgan fe’l shakllarini aniqlang.",
        questionType: "multiple_choice",
        options: [
            "2 va 6",
            "1 va 3",
            "3 va 5",
            "1 va 4",
        ],
        correctAnswer: "A",
        points: 2.5,
        // If later you want to show the diagram above the options, you can add:
        imageUrl: "/images/q8-diagram.png",
    },
    // 9) Otlar haqidagi to‘g‘ri ma’lumot
    {
        id: 9,
        questionText: [
            "Bugungi dasturimizda iqtisodchilar, muhandislar, huquqshunoslar, harbiylar, dasturchilar, tibbiyot xodimlari va o‘qituvchilar ishtirok etadi.",
            "",
            "Mazkur gapda ishtirok etgan otlar haqidagi to‘g‘ri ma’lumotni toping."
        ].join("\n"),
        questionType: "multiple_choice",
        options: [
            "Barcha yasama otlar bir xil so‘z turkumidan yasalgan.",
            "Barcha shaxs otlari bir xil gap bo‘lagi vazifasida kelgan.",
            "Barcha otlar shaxs otlari sanaladi.",
            "Barcha shaxs otlari yasama shaxs otlari sanaladi."
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 10) Hollar haqida to‘g‘ri ma’lumot
    {
        id: 10,
        questionText: [
            "Uydan chiqib ketish uchun shoshilib yurdi, birdan temir darvoza oldida kuzatib turgan shubhali kishiga ko‘zi tushdi-yu, qo‘rqqanidan orqasiga qayrildi va tez-tez yurib uyiga qaytib kirdi.",
            "",
            "Ushbu gapdagi hollar haqida berilgan to‘g‘ri ma’lumotni aniqlang."
        ].join("\n"),
        questionType: "multiple_choice",
        options: [
            "Ma’nosiga ko‘ra holning faqat 2 turi qatnashgan.",
            "Ot, fe’l va ravish bilan ifodalangan hollar qatnashgan.",
            "Tobe bog‘lanishlarda ham hokim, ham tobe qism vazifasini bajargan sabab holi qatnashgan.",
            "Fe’l bilan ifodalangan hollar umumiy ma’nosiga ko‘ra o‘zaro bir turga oid."
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 11) Mazmun va grammatik bog‘lanish
    {
        id: 11,
        questionText: [
            "Gapdagi so‘zlarning mazmun va grammatik jihatdan bog‘lanishi to‘g‘ri ko‘rsatilgan javobni aniqlang.",
            "",
            "“Bu o‘tkir va o‘ziga xos poetik tabiatli to‘rt misrada shoir o‘z zamonlarining badiiy jihatdan yuksak, ta’sirli, umrboqiy she’rlar yozishga chaqirayotgani taassurot qoldiradi.”"
        ].join("\n"),
        questionType: "multiple_choice",
        options: [
            "o‘tkir va o‘ziga xos, ta’sirli she’rlar",
            "badiiy jihatdan, she’rlar yozishga",
            "poetik tabiatli, o‘z zamonlarining",
            "taassurot qoldiradi, shoir qoldiradi"
        ],
        correctAnswer: "A",
        points: 1.7,
    },
    // 12) Tire bir xil vazifada qo‘llangan gaplar
    {
        id: 12,
        questionText:
            "Quyidagi qaysi gaplarda qatnashgan TIRE tinish belgisi punktuatsion qoidalarga ko‘ra bir xil vazifada qo‘llangan?",
        questionType: "multiple_choice",
        options: [
            "1 va 2",
            "2 va 4",
            "2 va 6",
            "1 va 5",
        ],
        correctAnswer: "A",
        points: 2.5,
        imageUrl: "/images/q12-diagram.png",
    },
    // 13) Said Ahmad – “Jimjitlik”
    {
        id: 13,
        questionText:
            "Said Ahmadning “Jimjitlik” romaniga nomutanosib bo‘lgan javobni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Tolibjonning onasi Egamberdi qizning nojo‘natvor holi uchun tanbeh beradi.",
            "Do‘lim/ziy kelinining o‘z otasi cho‘pon bo‘lgani haqida Tolibjonning onasiga aytib beradi.",
            "Tolibjonning onasi G‘uromiddin xotini kichkina paytda juda jizzaki bo‘lganini uning o‘ziga hasrat payti aytib bergandi.",
            "Tolibjon yaqin 30 yildan beri o‘g‘lim voyaga yetganda o‘qiydi deb, kitob yig‘ardi.",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 14) O‘tkir Hoshimov – “Tushda kechgan umrlar”
    {
        id: 14,
        questionText:
            "O‘tkir Hoshimovning “Tushda kechgan umrlar” romani haqida berilgan TO‘G‘RI ma’lumotni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Tergov jarayonida Shahnoza Rustamning o‘limiga bevosita aloqasi borligini tan oladi.",
            "Rustam talabchalik davrida paxta terimida qattiq shamollab qoladi va Shahnoza qat’iyatlik bilan shifokorni olib keladi.",
            "Komissaryosh tergovchining nohaqligini ko‘zga ekkan, xonlik davridagi tergov usullarining naqadar muvaffaqiyatsiz ekanligini o‘ylaydi.",
            "Soat Ganiyevning onasi boshiga musibat tushgach, birdaniga nainozxon bo‘lib qoladi va har duosida eshondan uzr so‘raydi.",
        ],
        correctAnswer: "D",
        points: 1.7,
    },

// 15) Jorj Oruell – “Moxona”
    {
        id: 15,
        questionText:
            "Jorj Oruellning “Moxona” asari voqealari xato bayon qilingan javobni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Asarda hayvonlar tomonidan yaratilgan jamiyat adolatsizlikka ham duch kelamiz.",
            "Asarda ikki oyoqda yura oladigan har bir jon – g‘anim. To‘rtta oyoq yaxshi, qanotli jon esa do‘st degan fikrlar aytilgan.",
            "Tegirmonda ular eshardi va u mobaynida sezilarli daromad keltiradi.",
            "Ushbu asar oxirida ikkita cho‘chqa urushib ketadi va asar tugaydi.",
        ],
        correctAnswer: "D",
        points: 1.7,
    },

// 16) Fitrat – “Abulfayzxon”
    {
        id: 16,
        questionText:
            'Fitratning "Abulfayzxon" dramasi qahramonlari haqida to‘g‘ri talqin qilingan javob(lar)ni aniqlang.\n\n' +
            '1. Mir Vafo – Rahimxoimning hukmronlik tarixiga bag‘ishlangan "Tuhfayi xoniy" asarining muallifi. Hakimbiyning odami chamasi ellik-oltmiş yoshlarida edi.\n' +
            '2. Ulfat – xonning xo‘jasaroyi (haram boshlig‘i) edi.\n' +
            '3. Rahimbiy – Abulfayzxonnning o‘g‘li Abdulmo‘minni zaharlab o‘ldiradi.',
        questionType: "multiple_choice",
        options: [
            "1, 2, 3",
            "2, 3",
            "faqat 3",
            "1, 3",
        ],
        correctAnswer: "A",
        points: 1.7, // your weighting scheme
    },

// 17) Pirimqul Qodirov – “Yulduzli tunlar”
    {
        id: 17,
        questionText:
            "Pirimqul Qodirovning “Yulduzli tunlar” romani qahramonlari haqida to‘g‘ri talqin qilingan javob(lar)ni toping.\n1. Bayda – Panipat jangida halok bo‘lgan Ibrohim Lodiyning onasi, ya’ni malika edi.\n2. Bahodir – yosh bo‘lishiga qaramasdan forscha va sanskritni yaxshi bilar, Bobur uchun zarur bo‘lgan ba’zi hujjatlarni tarjima qilar edi.\n3. Xo‘ja Kalonbek – Boburning yonida yurgan ustozlik qilgan yaqin insonlardan biri bo‘lgan.",
        questionType: "multiple_choice",
        options: ["1,3", "1,2,3", "1,2", "2,3"],
        correctAnswer: "B",
        points: 1.7,
    },
    // app/exam/questions.ts (append right after the object with id: 17)

    {
        id: 100,                          // any id not used in scoring; it won’t be shown
        questionType: "passage",
        questionText: [
            "VIRUSLAR",
            "",
            "Viruslar tabiatdagi eng g‘aroyib va sirli mavjudotlardan biridir. [1] Ular na to‘liq tirik, na butunlay o‘lik hisoblanadi. ",
            "Viruslar mustaqil yashay olmaydi — ular faqat tirik hujayraga kirgachgina ko‘payish va yashash qobiliyatiga ega bo‘ladi. ",
            "Ularning o‘lchami nihoyatda kichik bo‘lib, oddiy ko‘z bilan ko‘rib bo‘lmaydi. Masalan, eng kichik virus atigi 20 nanometr liq jamda bo‘ladi. ",
            "Viruslar faqat odamlar va hayvonlargina emas, balki o‘simliklar, bakteriyalar va hatto boshqa viruslarni ham zararlashi ilmiy fakt.",
            "",
            "[2] Bakteriyalami nishonga oladigan viruslar bakteriofaglar deb ataladi. Ular bakteriyaga kirib, uni ichkaridan yemirib yuboradi. ",
            "Virus va bakteriyalar hujayralardagi farqlari tufayli ular boshqa-boshqa mikroorganizmlar sifatida qaraladi; masalan, bakteriyalar esa bir hujayrali organizm hisoblanadi.",
            "",
            "Viruslar juda xilma-xil bo‘lib, ularning har biri o‘ziga xos xususiyatlarga ega. Masalan, gripp virusi odamlar orasida mashhur kasallikni keltirib chiqaradi. ",
            "Ushbu virus har yili shaklini o‘zgartirishi tufayli doimiy ravishda yangi vaksinalar tayyorlash ehtiyoji tug‘iladi. ",
            "Polio virusi esa markaziy asab tizimini zararlaydi va qo‘l-oyoq mushaklarini zaiflashtiradi.",
            "",
            "Viruslar oziq-ovqatni boshqa organdan olmaydi. [3] Ular tirik hujayralarni o‘zlarining “oziq-ovqat manbayi” sifatida ishlatadilar: ",
            "genetik materialini hujayraga joylashtiradi, so‘ngra hujayra virus nusxalarini ko‘paytirishni boshlaydi. ",
            "Hujayra o‘z faoliyatini viruslarning ko‘payishiga bag‘ishlaydi va shuning natijasida zararlanadi.",
            "",
            "[4] Viruslar faqat tirik hujayralarda yashashi mumkin. Shunday bo‘lsa-da, ba’zi viruslar yuzalarda ham bir necha soat, hatto bir necha kungacha yashay oladi. ",
            "Viruslar sharoit tanlamaydi: issiq, sovuq, kislorodli yoki kislorodsiz muhitlarda ham xavfli zonalarda yashab qoladi.",
            "",
            "Insondagi immun tizimi viruslarga qarshi tabiiy holatda kurashadi. Viruslarga qarshi kurashishda emlash (vaksina), ",
            "antiviral dorilar va maxsus profilaktik choralar qo‘llanadi. Shunga qaramay, viruslarning mutatsiyaga uchrashi xususiyati ularni doimiy o‘rganib, yangidan yechimlar topishni talab etadi."
        ].join("\n"),
    },

    // 18) VIRUSLAR – mos bo‘lmagan ma'lumot
    {
        id: 18,
        questionText: "Matn mazmuniga mos bo‘lmagan ma'lumotni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Gripp kasalligini yuzaga chiqaruvchi virus har yili mutatsiyaga uchraydi.",
            "Viruslarni faqat maxsus uskunalar yordamida ko‘rish mumkin.",
            "Polio virusi inson harakatlanish tizimiga zarar yetkazadi.",
            "Viruslarga qarshi kurashishning tabiiy va sun’iy shakllari mavjud.",
        ],
        correctAnswer: "D",
        points: 1.7,
    },

// 19) Matn mazmunida aks etgan ma'lumot
    {
        id: 19,
        questionText: "Matn mazmunida aks etgan ma'lumotni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Viruslar tirik organizmlarning o‘lik hujayralari bilan oziqlanadi.",
            "Vaksinatsiya virus mutatsiyasiga qarshi samarali usul hisoblanadi.",
            "Viruslarning ko‘payishi hujayra ichida sodir bo‘ladi.",
            "Tashqi yuzalarda ham viruslarning ko‘payish xususiyati mavjud.",
        ],
        correctAnswer: "C",
        points: 1.7,
    },

// 20) Raqamlangan gaplardan uslubiy xatolik keltirgani
    {
        id: 20,
        questionText:
            "Raqamlab ko‘rsatilgan qaysi gap matnning mazmuniy tuzilishida uslubiy xatolikni yuzaga keltirgan?",
        questionType: "multiple_choice",
        options: ["4", "2", "1", "3"], // A)4  B)2  C)1  D)3
        correctAnswer: "A",
        points: 1.7,
    },

// 21) Noto‘g‘ri ma'lumot
    {
        id: 21,
        questionText: "Matn mazmuniga oid noto‘g‘ri ma'lumot berilgan javobni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Virus va bakteriya bir hujayrali organizm hisoblanadi.",
            "Inson sochida ham juda kichik hajmdagi viruslar uchraydi.",
            "Viruslar a’lo mal sharoitlarda ham barqaror hayot shakliga ega.",
            "Tanada ularning ko‘payishi insonning immun tizimini ishdan chiqaradi.",
        ],
        correctAnswer: "D",
        points: 1.7,
    },

// 22) Matn mazmuniga oid bo‘lmagan ma'lumot
    {
        id: 22,
        questionText: "Matn mazmuniga oid bo‘lmagan ma'lumotni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Viruslar o‘simliklar dunyosiga ham zarar yetkazishi mumkin.",
            "Mikroorganizmlar bir-birini zararlashi ilmiy dalillangan.",
            "Viruslar o‘zining yangilanayotgan avlodlarini hujayralar ichida yaratadi.",
            "Ba’zi viruslardan antiviral dori vositalarini tayyorlash mumkin.",
        ],
        correctAnswer: "D",
        points: 1.7,
    },
    /* =========  MATN (Kattalar oqshomi) + Savollar 23–27  ========= */

// M) Reading passage (shows as “M” in the navigator)
    {
        id: 2301, // Navigator “M” sifatida ko‘rsatiladi (questionType: "passage")
        questionType: "passage",
        questionText: `
“Kattalar” oqshomi (hikoya)

Menimcha, har bir kishini ertalabki yig‘inlar o‘rniga turli kechalarga taklif qila boshlashgan paytdan boshlab “katta” deb hisoblasa bo‘ladi. 
Bir kuni dadam meni kasalxonadagi bayram kechasiga taklif qildi, ya’ni o‘zi ishxonasi­ga... Men rozi bo‘ldim — o‘sha onda o‘zimni qandaydir kuchliroq va kattarog‘dek his qildim. 
Xayrlashgach, or­timizdan qarab qolgan oyim va buvim mendan kasalxonada hech qanday ahmoqona gap gapirib qo‘ymasligimni va har doim men allaqachon oltinchi sinfga ko‘chganimni doimo yodda saqlashni qat’iy iltimos qilgan edilar. O‘sha kuni buni o‘zim istasam ham unutolmagan bo‘lar edim, chunki dadamning har bir hamkasbi mendan: 
— Xo‘sh, nechanchi sinfdasan? — deb so‘rardi. 
— Oltinchida, — derdim men. 
— Qo‘yasangchi! Bo‘lishi mumkin emas! 
Keyin har biri albatta dadamga qarab: 
— O‘g'ling katta bo‘lib qolibdi-ku! Ishonish qiyin... Lekin juda o‘xshab turibdi! Juda! — derdi. 
Oyimgayam doim unga o‘xshashimni aytishardi. Shuning uchun men o‘z tashqi ko‘rinishim borasida aniq bir fikrga kelolmas edim. 
Oyim chiroyli edi, dadam haqida esa buvim bir gal: 
— Endi, albatta, uni ko‘rkam yigit, deb bo‘lmaydi... 
— Demay qo'yaqoling! — degan edim men. Iltimos... Uni baribir hamma yaxshi ko‘radi! 
— Men buni tan olaman, — dedi buvim. — Buncha asabiylashding? Erkaklar uchun tashqi ko‘rinish umuman katta ahamiyat kasb qilmaydi. 

“Rostdan ham, kasb etmaydi”, — deb o‘yladim men zaldagi ayollar navbati bilan dadamning oldiga kelib, unga xushomad qilish maqsadida men unga juda­yam o‘xshashimni aytishayotganini ko‘rib. 
O‘sha kungi kechada ham hamma menga e’tibor berdi. Dadam bilan birga kelganimning uchungina emas... Adabiyot o‘qituvchim doim hammamiz o‘z imkoniyatimizdan kelib chiqib “yorqin shaxs” bo‘lishimizni so‘r­aydi. O‘sha plakatlar va gullar bilan bezalgan zalda birinchi bor o‘zimni shunday his qildim: mendan boshlab birorta oltinchi sinf bolasi yo‘q edi zald­a. Shuning uchun men o‘zimni haqiqiy yorqin shaxs deb his qilar edim. 

Nihoyat hamma o‘z o‘rniga joylashdi... Men o‘z familiyamni eshitib, xuddi darsda o‘tirgandek, o‘rnimdan turib ketishimga sal qoldi. Lekin ma’lum bo‘lishicha, dadamni prezidiumga saylashgan ekan. 
— To‘g‘ri... — dedi yonimda o‘tirgan kampir. Yuzlari tajang, ko‘zlari ildirakday edi. Bunga odamlar o‘rtasida maqtov eshitish boshqacha yoqimli bo‘lar ekan. Boshqalar dadam ikkining familiyasini aytganda hech narsa gapirishmadi, lekin qattiq qarsak chalishdi. Tushundimki, ular kampirning fikriga qo‘shilishdi: 
“Eh, oyim bilan buvim shuni ko‘rishgandami! — deb o‘ylardim men. — Albatta, o‘zim aytib beraman...” 
Ammo birinchidan, dadam albatta so‘zini inkor qildi. Hatto minbardan kamaytirib aytsam ham,oshirib yuboryapsan, deydi.Ikkinchidan , yuz marta eshitgandan, bir marta ko'rgan yaxshi.Buni hamma biladi!” 
Umrimda birinchi marta nutq eshitdim! Qisqa nutq. 
— Barakalla! — dedi yonimda o‘tirgan boshqa kampir. Notiq tark etgan minbarga qarab: — O‘zini tez qo‘lga oldi, — deb qo‘ydi. 
Men esa yana eshitishga tayyor edim! 
— Hozir biz kasalxonamizning eng yaxshi odam­lari haqida gaplashamiz, — dedi rais. 
Zalda hamma birdan jim bo‘lib, sergak tortdi. Men ham hayajonlanib turar edim. O‘zim uchun emas, albatta... Dadam uchun. 
— Biz bu yerga sobiq bemorlarimizni taklif qildik, — davom etdi rais. — O‘zlari aytsin... 
— Men yaxshi­la­b razm solib ham sobiq bemorlarning shunchalari ko‘p insonlardan ajrata olmadim. 
— Bu yerda kim... bemor edi? — so‘radim yonimdagi kampirdan. 
— Ajratolmayapsanmi? 
— Hamma gap shunda-da! — dedi u. Jimib qoldi. Keyin lablari biroz yoyildi: bu uning kulgani bo‘lsa kerak. 
Bir bahaybat odam minbar tomoniga qadam bosib kelardi. Zalda undan ham so‘g‘lomroq odam yo‘qdek ko‘rinar edi menga. 
— Bu Andryusha... — dedi kampir boyagi­dek kulib. 
Zalning turli burchaklaridan “Andryusha, Andryusha” degan shivirlar eshitildi. 
— Uni bu yerda hamma taniydimi? — so‘radim kampirdan. 
— Bo‘lmasam-chi! U juda­yam zaif edi. Judayam... 
Men ham bu dadamning sobiq bemorini tanir edim. 
“Eh, uni oyoqqa turg‘izib yuborsak edi!” — derdi dadam. — Qani endi uddalasam... Uddaladi... Sobiq bemor oyoqqa turdi! 
Minbar Andryushaning belidan keladi. U ikkala qo‘li bilan go‘yo minbarni ko‘tarib otib yubormoqchidek ushladi. 
— Ishlayapman! — dedi sahnadan turib Andryusha. — Xokkey o‘ynamayman! Hamma­si dunyoda shunday insonlar borligidan... Shunday inson borligidan... 
Prezidiumga qarab, kim haqida so‘z ketayotganini tushundim: dadam ko‘rinmas edi. U oldin ham, sahnada, eng oxirgi qator­da o‘tirgan edi, hozir esa kimningdir ortiga berkinib, umuman ko‘rinmay qolibdi. 
Yana ikkita sobiq kasal, chiqib dadamning sharofati bilan “qayta tug‘ilishganini” aytishdi. Boshqa bunday “tug‘ilish” istashmasligi aniq... Lekin ham­malari dadamga shunday qarashar edi, go‘yo uning yaxshi xotiralari eslangandek edi. U esa ularni operatsiya qilgan edi... 
Men o‘sha yerda o‘tirib, turli aql bovar qilmas hayollar qilardim. “Mana agar faqat beshga o‘qiganimda — hech qachon amalga oshmaydigan xomhayol! — va agar meni maktab majlisida maqtashganda, ko‘p bolalarga bu yoqmagan bo‘lardi. Aniq bilaman...” Bu yerda bo‘lsa ham­ma shifokorlar, hamshiralari va enagalar shunday jilmayishdi-ki, go‘yo ularning o‘zini e’tirof etishgandek. “Nega? — deb o‘ylardim men. — Dadamni yaxshi ko‘rishgani uchun bo‘lsa kerak...” 
Keyin kontsert bo‘ldi. Keyin rasmlar... Yana dadamning oldiga ayollar kelib, raqsga taklif qila boshlashdi. Men esa yana bularning hammasini oyim bilan buvim ko‘rmayotganiga achinib o‘tir­d­im. 
— Men raqsga tushishni bilmayman... — derdi dadam aybdorona. Yaxshisi Andryushani taklif qilinglar! 
— Unga yetib bo‘lmaydi hozir! — deb javob berdi bir oq xalatli ayol. Aftidan, u o‘sha kuni navbatchi bo‘lgan-u, bir daqiqaga tadbirga bosh suqqan. 
Andryusha rostdan ham yetib bo‘lmasdi. Hammadan ko‘p o‘ynardi, hamma­dan baland kulardi va gaplashardi. 
— Go‘yo bularning hammasi qo'lidan kelishinini ko‘rsatib qo‘ymoqchi­dek... 
Dadam meni kamsitmadi: biror marta soatiga qaramadi, biror marta uxlab olishing yoki darslaringni tayyorlashing kerak, deb uyga ketishga chaqirmadi. Biz garderobga hamma bilan birga kirib bordik. 
Pastga tushib, dadam nomerini uzatishi bilan bir oq xalatli erkak yugurib kelib, dadamning qulog‘iga nimadir dedi. 
— Iltimos, o‘g‘limni kuzatib qo‘ysangiz… — deb iltimos qildi dadam kimdandir. 
Hamma meni kuzatib qo‘yishga rozi bo‘ldi. 
— Men qoldim... ko‘pga emas, — dedi dadam va oq xalatli erkakning ortidan yugurib ketdi. 
— U nega... qoldi? — deb so‘radim men. 
— O‘z ishini qilib uchun, — dedi tajang kampir. 
— Qanaqa... ishi?! 
— Kimnidir qutqaradi-da... 

Hali uch kun bor bo‘lishiga qaramay, allaqachon bayramga tayyor bo‘lgan ko‘chalardan ketayapman. 
Dadamning sobiq bemori Andryusha ham yonimda ketardi. U rangi-barang bezak­larga shunday quvonch bilan qaradiki, xuddi bir paytlar ularni boshqa ko‘rishga umid qilmagandek edi. 
Uyimizga yaqinlashganda, Andryusha ham o‘zi uchun tutib turolmadi. 
— Sen dadangga o‘xsharkansan! Chin so‘zim... O‘xsharkansan! — dedi. 
Shunday gapirdi­ki, bu bilan meni tabriklagandek bo‘ldi. 
Men esa u paytda dadamga faqat bir qarashda o‘xshasam kerak, deb o‘yladim. Tashqi ko‘rinish tarafdan, dermidi? “Haqiqatdan unga o‘xshash uchun esa, — o‘yladim men, — menga hali ancha bor... Oson ish emas bu — boshqalarni baxtli qilish!”
`.trim(),
    },

// 23) Bola o‘zini “katta” deb his qilishi nimada aks etgan?
    {
        id: 23,
        questionType: "multiple_choice",
        questionText: "Bola o‘zini “katta” deb his qilishi nimada aks etgan?",
        options: [
            "Dadam bilan bemorlarni kuzatishi bilan.",
            "Kattalar tadbiriga taklif etilishi bilan.",
            "Darsdan keyin ko‘p maqtov eshitishi bilan.",
            "Uyida unga alohida e’tibor qaratilishi bilan."
        ],
        correctAnswer: "B",
        points: 1.1,
    },

// 24) Andryushaning minbarda gapirishi qanday hisni ifodalagan?
    {
        id: 24,
        questionType: "multiple_choice",
        questionText: "Andryushaning minbarda gapirishi qanday hisni ifodalagan?",
        options: [
            "Kechirilmagan xatolaridan pushaymonni.",
            "O‘z kuchini ko‘rsatish istagini.",
            "Minnatdorchilik va quvonch hislarini.",
            "Bemorlikdagi og‘riq iztiroblarini."
        ],
        correctAnswer: "D",
        points: 1.1,
    },

// 25) Andryushaning minbarda gapirishi qanday hisni ifodalagan? (keyga ko‘ra)
    {
        id: 25,
        questionType: "multiple_choice",
        questionText: "Andryushaning minbarda gapirishi qanday hisni ifodalagan?",
        options: [
            "Kechirilmagan xatolaridan pushaymonni.",
            "O‘z kuchini ko‘rsatish istagini.",
            "Minnatdorchilik va quvonch hislarini.",
            "Bemorlikdagi og‘riq iztiroblarini."
        ],
        correctAnswer: "B",
        points: 1.1,
    },

// 26) Dadamning shaxsiyati hikoyada qanday ko‘rsatilgan?
    {
        id: 26,
        questionType: "multiple_choice",
        questionText: "Dadamning shaxsiyati hikoyada qanday ko‘rsatilgan?",
        options: [
            "Kasbiga sodiq va odamlar uchun jonboz inson sifatida.",
            "Qattiqqo‘l, oilasiga ko‘proq e’tibor beruvchi sifatida.",
            "O‘z manfaatini yaxshi ko‘radigan inson sifatida.",
            "Har doim shaxsiy ishlarini birinchi o‘ringa qo‘yadigan inson sifatida."
        ],
        correctAnswer: "D",
        points: 1.1,
    },

// 27) Bola uchun dadaga o‘xshash bo‘lish nimani anglatadi?
    {
        id: 27,
        questionType: "multiple_choice",
        questionText: "Bola uchun dadaga o‘xshash bo‘lish nimani anglatadi?",
        options: [
            "Odamlarni baxtli qilishga intilishi degani.",
            "Shifokor bo‘lishni orzu qilishi degani.",
            "Dadasiga o‘xshash gapirish degani.",
            "Dadasiga o‘xshash kiyinish degani."
        ],
        correctAnswer: "A",
        points: 1.1,
    },
    /* =======================
    G‘AZAL — passage (label G)
    ======================= */

    {
        id: 2800, // special id used for paginator label "G"
        questionType: "passage",
        questionText: `
G‘azalni o‘qing va quyidagi topshiriqlarni bajaring.

1. Furqatingda, ey pari, tan kuydi-yu jon yig‘ladi,
   Dambadam xud qayg‘udin ikki ko‘zum qon yig‘ladi.

2. Hech davo yo‘q dardkim, jonimda bor, oni ko‘rub
   To‘nih chok etti tabibu doru darmon yig‘ladi.

3. Dur tishingga gul yuzung vasfidin kechti hadis,
   Sham’ hayrat o‘tina yondi-yu so‘zon yig‘ladi.

4. Eshikingda it bikin bostim necha yil qovrulub,
   Ushbu holimni ko‘rub kofir, musulmon yig‘ladi.

5. Yi‘ladu hatto raqibning kelg‘ondan rahmi manga,
   Bori ul qattiq ko‘ngulluk chinmu yolg‘on yig‘ladi.

6. Bildilar yuzin ko‘rub Sakkokiy holin so‘rmayin,
   Xosu omu shahru deh, donovu nodon yig‘ladi.
    `.trim(),
    },

    // 28–32: savollar (g‘azal bo‘yicha)
    {
        id: 28,
        questionText: "1-bayt mazmuniga mos kelmaydigan fikrni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Oshiqa tan va jon azobida qolgan.",
            "Har bir nafasda ko‘z yoshlari qon kabi to‘kkan.",
            "Oshiqa kechasi va kunduzi tinimsiz yig‘lagan.",
            "Oshiq jonini berishga tayyor bo‘lmagan.",
        ],
        correctAnswer: "D",
    },
    {
        id: 29,
        questionText: "2-baytdagi asosiy badiiy tasvirni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Tabib ojiz, darmon ojiz bo‘lib taslim bo‘lgan.",
            "Oshiq dardini hech kim tushunmagan.",
            "Jon azobini faqat dushmanlar seza olgan.",
            "Oshiq yuragidagi dardga tabib befarq bo‘lgan.",
        ],
        correctAnswer: "A",
    },
    {
        id: 30,
        questionText: "4-baytda aks etmagan fikrni belgilang.",
        questionType: "multiple_choice",
        options: [
            "Oshiqqa o‘zini sevgilining eshigida itdek tutgan.",
            "Raqib ham oshiq holatiga achingan.",
            "Oshiqqa yillar davomida sadoqat bilan kutgan.",
            "Dushmanlar oshiqni masxara qilgan.",
        ],
        correctAnswer: "D",
    },
    {
        id: 31,
        questionText: "3-bayt mazmunini to‘g‘ri izohlangan javobni tanlang.",
        questionType: "multiple_choice",
        options: [
            "Sham’ nurini oshiqqa yo‘ndirgan, yuzini emas.",
            "Yuz va tishing go‘zalligidan sham’ hayratda yongan.",
            "Hadislar chiroyli ayolni doimo yomon ko‘rgan.",
            "Sham’ hayratdan kulgan, ammo ko‘z yosh to‘kmagan.",
        ],
        correctAnswer: "B",
    },
    {
        id: 32,
        questionText:
            "6-baytda Sakkokiy holatiga nisbatan noto‘g‘ri hukmni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Shahr ahlining barchasi oshiqning holiga yig‘ladi.",
            "Sakkokiyning holini yuzidan o‘qish mumkin edi.",
            "Yiqil fagat donolarni ta’sirlangttan.",
            "Xalqdan tortib olimlargacha unga achingan.",
        ],
        correctAnswer: "C",
    },
    /* ========== 33–37 (new sheet) ========== */

    /**
     * 33–35. Sintaktik tahlil: izohlarni moslashtiring
     * Left — gaplar (33–35); Right — izohlar (A–F)
     *
     * NOTE: Best-guess key is:
     * 33 → D (undalinali gap),
     * 34 → A (atov gap),
     * 35 → B (kiritmali gap).
     * If your key differs, just change `correctAnswer`.
     */
    {
        id: 33,
        questionText:
            "Quyidagi gaplar va sintaktik tahlilga oid izohlar (A–F)ni o‘zaro to‘g‘ri moslashtiring.",
        questionType: "match_table",
        match: {
            left: [
                { key: "33", text: "O hissiz tabiat, shafqatsiz hayot, shunday go‘zallikni bekiting qayerga?" },
                { key: "34", text: "Tirik ulki, undan keyin qolsa joy – hovuz, ko‘l-u ko‘plikla karvonsaroy." },
                { key: "35", text: "Mehnat iqodga aylangan joyda, tabiiyki, o‘lim yo‘q bo‘lib ketadi." },
            ],
            right: [
                { key: "A", text: "atov gap" },
                { key: "B", text: "kiritmali gap" },
                { key: "C", text: "to‘liqsiz gap" },
                { key: "D", text: "undalinali gap" },
                { key: "E", text: "shaxsi (egasi) noma’lum gap" },
                { key: "F", text: "ajratilgan bo‘lakli gap" },
            ],
        },
        // MCQ variants for the mapping above
        options: [
            "33–D; 34–A; 35–B",
            "33–F; 34–C; 35–B",
            "33–D; 34–F; 35–E",
            "33–E; 34–A; 35–B",
        ],
        correctAnswer: "A",
        points: 2.5,
    },

    /**
     * 36. Shakldosh so‘z — fill later if needed
     * (two definitional clues in the prompt image).
     */
    /// 36) Shakldosh so‘z — diagram + input (with correct answer)
    // … keep everything above as-is …

    /* ---------------- 36 & 37 (fixed answers) ---------------- */

    /* 36) Shakldosh so‘z — diagram + single input */
    /* ---------------- 36–44 (with correct keys) ---------------- */

    /* 36) Shakldosh so‘z — single input (correct: Zil) */
    {
        id: 36,
        questionType: "structured",
        questionText: [
            "Berilgan so‘zlar ma’nosini ifodalaydigan **shakldosh** so‘zni yozing.",
            ""
        ].join("\n"),
        imageUrl: "/images/q36-diagram.png",
        parts: [
            { key: "a", label: "Javob:", multiline: false, correct: "Zil" }
        ],
        points: 1.1,
    },

    /* 37) Tinish belgilarining ketma-ketligi — single textarea */
    {
        id: 37,
        questionType: "structured",
        questionText: [
            "Berilgan gapda qo‘llanishi lozim bo‘lgan **tinish belgilarining to‘g‘ri ketma-ketligini** yozing.",
            "",
            "Alhosil tarbiya bizlar uchun y o hayot y o mamot y o najot y o halokat y o saodat y o falokat masalasidur",
        ].join("\n"),
        parts: [
            { key: "a", label: "Javob:", multiline: true, placeholder: "masalan: , ? . - !", correct: ", - , - , ." }
        ],
        points: 1.1,
    },

    /* 38) So‘z turkumi — single input (correct: Haqida) */
    {
        id: 38,
        questionType: "structured",
        questionText: "Har uchala kelishik shakli bilan ham ma'nodoshlik hosil qila oluvchi ko'makchini yozing",
        imageUrl: "/images/q38-diagram.png",
        parts: [
            { key: "a", label: "Javob:", multiline: false, correct: "Haqida" }
        ],
        points: 1.1,
    },

    /* 39) Tilshunoslik termini — single input (correct: Kiritma) */
    {
        id: 39,
        questionType: "structured",
        questionText: "Gapdagi qavs ichida berilgan birlik turini aniqlang va yozing",
        imageUrl: "/images/q39-diagram.png",
        parts: [
            { key: "a", label: "Javob:", multiline: false, correct: "Kiritma" }
        ],
        points: 1.1,
    },

    /* 40) a) Talab etadi; b) Ortib borishi */
    {
        id: 40,
        questionType: "structured",
        questionText: "Gapdagi so‘zlarning mazmun va grammatik jihatdan bog‘lanishini tahlil qiling.",
        imageUrl: "/images/q40-diagram.png",
        parts: [
            { key: "a", label: "a) … tobelanib bog‘langan so‘z:", multiline: false, correct: "Talab etadi" },
            { key: "b", label: "b) … teng munosabatda bog‘langan so‘z:", multiline: false, correct: "Ortib borishi" },
        ],
        points: 1.1,
    },

    /* 41) a) Na…na ; b) Bog‘langan */
    {
        id: 41,
        questionType: "structured",
        questionText: "Berilgan gaplarni grammatik jihatdan to‘g‘ri bog‘lang.",
        imageUrl: "/images/q41-diagram.png",
        parts: [
            { key: "a", label: "a) Qanday grammatik vosita?", multiline: false, correct: "Na…na" },
            { key: "b", label: "b) Qaysi tur hosil bo‘ladi?", multiline: false, correct: "Bog‘langan" },
        ],
        points: 1.1,
    },

    /* 42) a) Tazod ; b) Tardi aks */
    {
        id: 42,
        questionType: "structured",
        questionText: "She’riy parchada aks etgan san’at(lar)ni yozing.",
        imageUrl: "/images/q42-diagram.png",
        parts: [
            { key: "a", label: "a) 1-badiiy san’at:", multiline: false, correct: "Tazod" },
            { key: "b", label: "b) 2-badiiy san’at:", multiline: false, correct: "Tardi aks" },
        ],
        points: 1.1,
    },

    /* 43) a) B ; b) Mutlaq */
    {
        id: 43,
        questionType: "structured",
        questionText: "She’riy parchaning qofiyasini tahlil qiling.",
        imageUrl: "/images/q43-diagram.png",
        parts: [
            { key: "a", label: "a) Raviy:", multiline: false, correct: "B" },
            { key: "b", label: "b) Qofiyaning turi:", multiline: false, correct: "Mutlaq" },
        ],
        points: 1.1,
    },

    /* 44) a) Tuyuq ; b) “Yoringa boringlar …” (buyruq ma’nosi) */
    {
        id: 44,
        questionType: "structured",
        questionText: "Quyidagi she’riy parchaning mazmuni bo‘yicha javob yozing.",
        imageUrl: "/images/q44-diagram.png",
        parts: [
            { key: "a", label: "a) Janr:", multiline: false, correct: "Tuyuq" },
            { key: "b", label: "b) Ajratilgan so‘zning ma’nosi:", multiline: false, correct: "Yoringa boringlar (harakatni ifodalovchi buyruq ma’nosida)" },
        ],
        points: 1.1,
    },

    // 45) ESSE — long-form writing (textarea is rendered by QuestionRenderer)
    {
        id: 45,
        questionType: "essay",
        questionText: [
            "ESSE",
            "Quyidagi vaziyat yuzasidan o‘z munosabatingizni yozma bayon qiling.",
            "",
            "Ko‘pchilik ta’limning raqamlashtirilishiga ijobiy munosabatda bo‘lsa, boshqalar buning bir qator salbiy jihatlari borligini ta’kidlashadi.",
            "",
            "• Fikr-mulohazalaringizni publitsistik uslubda bayon qiling.",
            "• Fikrlaringizni mantiqiy izchillikda, adabiy til me’yorlariga amal qilgan holda ifodalang.",
            "• Bayon qilinayotgan barcha fikr-mulohazalar faqat mavzu doirasida bo‘lishi lozim.",
            "",
            "Quyidagi hollarda esse tekshirilmaydi va 2 ball bilan baholanadi:",
            "- esse yozilgan, lekin mavzuga mos bo‘lmasa;",
            "- essenining hajmi 100 ta so‘zdan kam bo‘lsa;",
            "- esse boshqa manbadan ko‘chirilgan bo‘lsa.",
            "",
            "Esse yozilmagan bo‘lsa, 0 ball beriladi.",
            "",
            "DIQQAT! Esse uchun reja tuzilmaydi, epigraf qo‘yilmaydi."
        ].join("\n"),
        points: 0, // ball qo‘lda kiritiladi; sizning hisoblagichingizda esse alohida baholanadi
    }







];
