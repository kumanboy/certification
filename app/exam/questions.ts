// app/exam/questions.ts
import type {Question, DiagramOption} from "@/types";

export const QUESTIONS: Question[] = [
    // 1
    {
        id: 1,
        questionText: "Imloviy jihatdan to‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
        questionType: "multiple_choice",
        options: [
            "tasavvur, musavvir, tasvir",
            "muammo, mutloqo, layoqat",
            "madanshunoslik, agranom, muarrix",
            "maishatbozlik, dastyor, qo‘g‘alon",
        ],
        correctAnswer: "A",
        points: 1.7,
    },

// 2
    {
        id: 2,
        questionText: "Imloviy jihatdan to‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
        questionType: "multiple_choice",
        options: [
            "hazmi-taom, g‘ina-kudurat, bir narsa",
            "umumxalq, vitse-prezident, vaqti-vaqtda",
            "mulimedia, radioeshittirish, video-kuzatuv",
            "ultrabinafsha, avto ulov, kinoteatr",
        ],
        correctAnswer: "B",
        points: 1.7,
    },
    // 3 (diagram MCQ) — note the explicit cast to DiagramOption[]
    // {
    //     id: 3,
    //     questionText:
    //         "Nutqda o‘zaro sinonimlik hosil qila oluvchi so‘zlar qatorini aniqlang.",
    //     questionType: "diagram_mcq",
    //     options: [
    //         {top: "o‘q", left: "paykon", right: "tir"},
    //         {top: "zulmkor", left: "jobir", right: "qonxo‘r"},
    //         {top: "ziyon", left: "futur", right: "talafot"},
    //         {top: "yovuz", left: "dushman", right: "g‘anim"},
    //     ] as DiagramOption[],
    //     correctAnswer: "C",
    //     points: 1.7,
    // },
    {
        id: 3,
        questionText: "Qaysi javobda sinonimik qator va shu \n" +
            "sinonimik qatorga mansub bo‘la oladigan \n" +
            "so‘zlar TO ‘G ‘RI moslashtirib \n" +
            "kolrsatilgan?",
        questionType: "multiple_choice",
        options: [
            "1a,b; 2b,c,d,e",
            "1a,d; 2b,c,e,f",
            "1a,e; 2b,c,d,f",
            "1e ,f; 2a,b,c,d",
        ],
        correctAnswer: "B",
        points: 1.7,
        imageUrl: "/images/q3-diagram.png",
    },

    // 4
    // 4 (diagram MCQ)
    {
        id: 4,
        questionText: "O‘zaro ma’nodosh bo‘la oladigan so‘zlarni aniqlang.",
        questionType: "diagram_mcq",
        options: [
            { top: "reja",     left: "nishon", right: "mo‘ljal" },
            { top: "yashirin", left: "sir",    right: "berk" },
            { top: "ta’na",    left: "nasihat", right: "ibrat" },
            { top: "ishora",   left: "belgi",  right: "alomat" },
        ] as DiagramOption[],
        correctAnswer: "D",
        points: 1.7,
    },


    // 5 (“Ayon”) — plain MCQ with textual diagram labels in the stem
    {
        id: 5,
        questionText:
            "Qaysi qatorda qo‘shimcha qo‘llash bilan bog‘liq uslubiy xatolik mavjud EMAS?",
        questionType: "multiple_choice",
        options: [
            "Alifbo islohoti samarali natija berish bilan birga chalasavodsizlikka ham sabab bo‘lishi mumkin.",
            "Ishingda muvaffaqiyatsizlikka uchrasang ham, dod-faryod qilma sabrli bo‘lishga intil.",
            "Ta’lim tizimining barcha bo‘g‘inlari hamjihatlik bilan ishlasa, samaradorlik yana oshadi.",
            "Bugungi kunda parrandaclii ham serdaromadli sohalardan biri bo'lib kelgan."
        ],
        correctAnswer: "C",
        points: 1.7,
    },

    // 6
    {
        id: 6,
        questionText:
            "Berilgan so‘zlar va ularning ma’nolari xato izohlangan javobni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Tasavvur – biror narsani ongda yoki xayolda tasvirlash, ko‘rish, tasavvur qilish.",
            "Tasnif – biror narsaning xususiyatlari, ko‘rinishi, holati yoki vaziyatini so‘z bilan ifodalash.",
            "Tashviqot – g'oya, qarash yoki mahsulotlarni ko‘proq odamlar orasida yoyish, uni targ‘ib qilish.",
            "Tadrij – ish yoki holatning bosqichma-bosqich, asta-sekin, ketma-ket ravishda sodir bo‘lishi.",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

    // 7 (match-table)
    {
        id: 7,
        questionText:
            "Parchada qatnashgan qo‘shimchalar haqida hukmlardan nechtasi to‘g‘ri ko‘rsatilgan?\n\n" +
            "Istiqlol yillarida kinematografiyani har tomonlama rivojlantirish, bu borada zarur moddiy va ma’naviy shart-sharoitlarni yaratish bo‘yicha amalga oshirilgan keng ko‘lamli chora-tadbirlar tufayli yangi-yangi filmlar suratga olinmoqda.\n\n" +
            "1. Fe’lga xos lug‘aviy va sintaktik shakl yasovchi qo‘shimcha qo‘llangan;\n" +
            "2. Shakldosh ot yasovchi qo‘shimcha qo‘llangan;\n" +
            "3. Ravishga xos so‘z yasovchi qo‘shimcha qo‘llangan;\n" +
            "4. Shakldosh sifat yasovchi qo‘shimcha qo‘llangan;\n" +
            "5. Otga xos lug‘aviy shakl yasovchi qo‘shimcha qo‘llangan;",
        questionType: "multiple_choice",
        options: ["uchtasi", "to‘rttasi", "ikkitasi", "beshtasi"],
        correctAnswer: "C",
        points: 1.7,
    },
    // 8) Har uchala parchada ham ishtirok etgan fe'l shakllari
    {
        id: 8,
        questionText:
            "Har uchala parchada ham ishtirok etgan fe’l shakllarini aniqlang.\n\n" +
            "1. Bilasizmi, uzoq mushohada qildim, oxiri qayerda xato qilganimni tushundim, endi hech qachon o‘ylamay so‘lamayman.\n\n" +
            "2. Shunchalik xafa bo‘ldimki, bu achchiq iztirobnni hech qachon unuta olmayman.\n\n" +
            "3. Namunchqa o‘ylayvermasang, o‘zi-ga shartta ayt-go‘yu, odam-ku tushunar axir u ham.",
        questionType: "multiple_choice",
        options: [
            "Har uchala gapda ham sodda yasam fe’l ishtirok etgan.",
            "Har uchala gapda fe’lning tuzilishiga ko‘ra ikki turi qatnashgan.",
            "Har uchala gapda ham ikki xil vazifa shakli qatnashgan.",
            "Har uchala gapda ikki xil nisbat shakli qo‘llangan.",
        ],
        correctAnswer: "B",
        points: 2.5,
    }
    ,
    // 9) Otlar haqidagi to‘g‘ri ma’lumot
    {
        id: 9,
        questionText:
            "Har ikkala gapda qatnashgan sifatlar haqida to‘g‘ri hukmni aniqlang.\n\n" +
            "I. Elchi o‘rnidan turib, yuzlari cho‘zinchoq, ko‘zlari katta, novchadan kelgan Siparganingizga ta’zim qildi.\n\n" +
            "II. Manbada berilgan qimmatli dalillarga asoslangan fikrlar to‘liq yoki qisqa yozib olinadi. Bu keyingi ijodiy ish uchun asos bo‘ladi.",
        questionType: "multiple_choice",
        options: [
            "Har ikkala gapda nisbiy yasama sifat qatnashgan.",
            "Har ikkala gapda ham qo‘shma sifat qatnashgan.",
            "Har ikkala gapda asli yasama sifat qatnashgan.",
            "Har ikkala gapda qiyosiy darajadagi sifat qatnashgan.",
        ],
        correctAnswer: "A",
        points: 1.7,
    },

// 10) Hollar haqida to‘g‘ri ma’lumot
    {
        id: 10,
        questionText:
            "Berilgan parcha haqidagi to‘g‘ri hukmni aniqlang.\n\n" +
            "Behi atirguldoshlar oilasiga mansub, bo‘yi o‘n ikki metrgacha boradigan serhosil daraxt. Barglari tukli, tuzumsimon yoki keng ellipssimon, bandi kalta, shoxlarda ketma-ket joylashgan.",
        questionType: "multiple_choice",
        options: [
            "Ushbu parchada aniqlanmishlar ega va to‘ldiruvchi vazifasida kelgan.",
            "Ushbu parchada hol ot kesimga to‘g‘ridan to‘g‘ri tobelangan.",
            "Ushbu parchada hol kesimga to‘g‘ridan to‘g‘ri tobelangan.",
            "Ushbu parchada bir bosh bo‘lakli gaplar qatnashgan.",
        ],
        correctAnswer: "C",
        points: 1.7,
    },

// 11) Mazmun va grammatik bog‘lanish
    // 11
    {
        id: 11,
        questionText:
            "Gapdagi so‘zlarning mazmun va grammatik jihatdan bog‘lanishi to‘g‘ri ko‘rsatilgan javobni aniqlang.\n\n" +
            "Buyuk bir donishmand odamzodning nopok istaklari va tuban ehtiroslarini bir uyga qamab qo‘yilgan uch maxluq: odam, to‘ng‘iz va arslonga o‘xshatgan ekan.",
        questionType: "multiple_choice",

        options: [
            "buyuk donishmand, nopok ehtiroslarini",
            "istaklari va ehtiroslarini, uch maxluq",
            "qamab qo‘yilgan, arslonga o‘xshatgan",
            "nopok va tuban, donishmand istaklari",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 12
    {
        id: 12,
        questionText:
            "Qaysi javobda tire bir xil punktuatsion qoida asosida qo‘yilgan?\n\n" +
            "1. «Oddiylik axloqiy barkamollikning bosh shartidir», — deb yozgan edi L.N. Tolstoy.\n" +
            "2. Tuya mingan uzoqni ko‘zar, eshak mingan – yaqinini.\n" +
            "3. O‘zbekiston Milliy sug‘urta kompaniyasi — «O‘zbekinvest» bugun tobora rivojlanmoqda.\n" +
            "4. Endi nima bo‘lib shundoq bo‘lganini aytib o‘tirishga fursatim yo‘q — idorada odamlar kutib o‘tiribdi.\n" +
            "5. Xon bo‘lmasa, bek bo‘lmasa, bor-yo‘g‘i jo‘ngina bir cho‘pon – qo‘yboqar bo‘lsa?",
        questionType: "multiple_choice",

        options: ["2, 4", "1, 3", "1, 4", "3, 5"],
        correctAnswer: "D",
        points: 2.5,
    },

// 13
    {
        id: 13,
        questionText:
            "Erkin Vohidovning «Ruhlar isyoni» dostonı haqida ma’lumot berilgan qatorni aniqlang.",
        questionType: "multiple_choice",

        options: [
            "Urushda qahramon bo‘lib kelgan, ammo urush sabab bir oyoqdan ajrilgan kishi tasvirlangan.",
            "Xalqni ozodlik va erk uchun kurushga chorlagan shoir tasvirlangan.",
            "Zilzila sabab qurilishda brigadir darajasiga ko‘tarilgan shaxs tasvirlangan.",
            "Xalqni mustaqillikka erishishga yordam bergan qahramon tasvirlangan.",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 14
    {
        id: 14,
        questionText: "Chexovning «Garov» hikoyasi haqida xato mulohazani aniqlang.",
        questionType: "multiple_choice",

        options: [
            "Rohat uchun umridan kechgan huquqshunos tasvirlangan.",
            "Boyligidan ajralib qolishni xohlamagan bankir tasvirlangan.",
            "Ikki dunyo saodatini anglab yetgan huquqshunos tasvirlangan.",
            "Mol-dunyoga ruju qo‘ygan, ammo vijdoni o‘lmagan bankir tasvirlangan.",
        ],
        correctAnswer: "A",
        points: 1.7,
    },

// 15
    {
        id: 15,
        questionText:
            "Abdulla Qodiriyning «O‘tkan kunlar» romanidagi qahramonlar haqida to‘g‘ri ma’lumotni aniqlang.\n\n" +
            "1. Usta Olim – o‘zi istagan inson bilan turmush qurgan bo‘lsa-da, undan erta ajralib qolgan qahramon;\n" +
            "2. Hasanali – avval boshqa mamlakat kelib qolgan, keyin oila qurgan bo‘lsa-da, farzandli bo‘lmagan xizmatkor;\n" +
            "3. O‘zbekoyim – ko‘p odamlarga so‘zi o‘tadigan, lekin yaqin insoni uni ranjitib qo‘yadigan ish qilgani uchun biroz muddat zafagarchilik qilib yurgan obraz.",
        questionType: "multiple_choice",

        options: ["1 va 2", "1, 2 va 3", "2 va 3", "faqat 2"],
        correctAnswer: "D",
        points: 1.7,
    },

// 16
    {
        id: 16,
        questionText:
            "Sharof Boshbekovning «Temir xotin» komediyasi haqida berilgan to‘g‘ri hukmni aniqlang.",
        questionType: "multiple_choice",

        options: [
            "Qo‘chqor misolida sodda va mehnatkash aholining tinimsiz mehnat qilishi, lekin turmush tarzining hech yaxshilanmayotgani ochib berilgan.",
            "Olimjon kabi yetuk olimlar yetishib chiqayotgan mamlakatda ilm-fanga yuksak darajada e’tibor qaratilganidan darak beradi.",
            "O‘sha davrdagi oilaviy munosabatlarning keskinlashuvi, buning oqibatida farzandlarning sarson bo‘lishi kabi jamiyatdagi illatlar aks ettirilgan.",
            "Alomat singari temir robotlarning ko‘payishi kelgusida ishsizlikka olib kelishi mumkinligi haqidagi fikrlar ilgari surilgan.",
        ],
        correctAnswer: "A",
        points: 1.7,
    },

// 17
    {
        id: 17,
        questionText:
            "O‘tkir Hoshimov qalamiga mansub «Tushda kechgan umrlar» asarida Soatning otasi o‘ldirilgach masjid buzilib o‘rniga klub qurilishi orqali qanday badiiy maqsad ifodalangan?",
        questionType: "multiple_choice",

        options: [
            "Hukumatning jinoyatlarga qarshi ayovsiz kurashi ifodalangan.",
            "Hukumatning islom dinini bu zaminda yo‘q qilish harakati ifodalangan.",
            "Hukumatning agar davlat amaldoriga suiqasd qilmoqchi bo‘lsa qanday holatga tushishi ifodalangan.",
            "Hukumatning adolatsiz tuzuminini aks ettirish ifodalangan.",
        ],
        correctAnswer: "B",
        points: 1.7,
    },
    // app/exam/questions.ts (append right after the object with id: 17)

    {
        id: 100,
        questionType: "passage",
        questionText: [
            "URAN",
            "",
            "I",
            "Uranning kashf etilishi XVIII asr oxiriga to‘g‘ri keladi. Nemis kimyogari Martin Genrix Klaprot o‘sha vaqtlarda radiy olish uchun qo‘llanilgan nasturanddan “yangi” elementni ajratib oldi. U bu elementni yaqinda kashf etilgan Uran sayyorasi sharafiga “uran” deb ataydi. E’tiborlisi jihati, kumush qazib oluvchi konchilar uran mavjudligini Klaprotdan bir necha yil oldin payqagan, ammo bunga ahamiyat bermagan. Klaprot uranni ajratib olgandan keyingina olimlar uni batafsil o‘rganishga muvaffaq bo‘ladi.",
            "",
            "II",
            "Vaqt o‘tishi bilan yer qobig‘ida ko‘p uchraydigan bu element radioaktiv ekani ma’lum bo‘ldi. Bu mazkur modda o‘zidan radiatsiya chiqaradi degan ma’noni anglatadi. Bundan tashqari, uning sekin radioaktiv parchalanishi Yerdagi issiqlikning asosiy manbai bo‘lib, konveksiya va kontinental siljishlar rag‘batlantiradi. Uran sirli xususiyatlarga ega va insoniyatni atomning hayratga soluvchi energiyasi bilan ta’minlaydigan metallidir. Uranning tabiiy radioaktivligi undan tibbiyot, qishloq xo‘jaligi, sanoat va biologiyada keng, ba’zan hayratlanarli tarzda foydalanishning asosidir.",
            "",
            "III",
            "Reaktor ichida uran atomlarining yadrosi neytronlar bilan bombardimon qilinadi, bu ularning bir nechta kichik yadrolarga bo‘linishiga olib keladi. Bunday yadroviy bo‘linish paytida chiqarilgan energiya kuchli issiqlik paydo bo‘lishiga olib keladi. Bo‘linib ketgan yadro ham ko‘proq neytronlar chiqaradi, bu esa ko‘proq bo‘linish reaksiyalariga sabab bo‘ladi va undan ham ko‘proq energiya hosil bo‘ladi. Uranni rudalardan ajratib olish juda uzoq va murakkab jarayon. Zavodlar kuniga yuzlab tonna rudani qayta ishlaydi, ammo har bir tonnadan atigi bir necha kilogramm uran olinadi. Dastlab ruda maydalanib, elakdan o‘tkaziladi. Keyin chiqindilardan tozalash uchun turli xil kimyoviy moddalar bilan ishlov beriladi.",
            "",
            "IV",
            "Zanjir reaksiyasi natijasida hosil bo‘lgan issiqlikdan keyinchalik bug‘ ishlab chiqarishda foydalaniladi, bu esa elektr generatorini boshqaradigan turbinani aylantiradi. Uran juda yuqori energiya zichligiga ega. Bu degani, oz miqdorda uran katta miqdorda energiya ishlab chiqarishi mumkin. Shu tufayli yadro yoqilg‘isi eng tejjamkor energiya hisoblanadi. Uran o‘zidan radiatsiya chiqaradi. Kimyoviy jihatdan uran juda faolidir. Havo ta’sirida qolgan uran bo‘lagi tezda qoramtir qobiq hosil qiladi. Ushbu qobiq uran va havodagi kislorod birikmasidir. Shuningdek, uran boshqa ko‘plab elementlar bilan ham muhim birikmalar hosil qiladi. Uran oz miqdorda keng tarqalgan, ammo global miqyosda u energetika va fan-texnika sohalarida beqiyos ahamiyatga ega element hisoblanadi."
        ].join("\n"),
    },

    // 18) VIRUSLAR – mos bo‘lmagan ma'lumot
    // 18
    {
        id: 18,
        questionText:
            "Matn mazmunida noto‘g‘ri ifodalangan ma’lumotni aniqlang.",
        questionType: "multiple_choice",

        options: [
            "Kumush qazib oluvchilar Uranni oldinroq payqashgan.",
            "Uranning sharafiga yangi topilgan sayyoraga shunday nom berilgan.",
            "Zanjir reaksiyasida bug‘ issiqlikdan keyin hosil bo‘ladi.",
            "Neytronlar yadrolarning bo‘linishidan hosil bo‘ladigan moddalardir.",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 19
    {
        id: 19,
        questionText:
            "Raqamlab ko‘rsatilgan qaysi parchada matnning mazmuniy tuzilishida uslubiy xatolikni yuzaga keltirgan gap berilgan?",
        questionType: "multiple_choice",

        options: ["IV", "II", "I", "III"],
        correctAnswer: "A",
        points: 1.7,
    },

// 20
    {
        id: 20,
        questionText: "Matnning mazmunida aks etgan ma’lumotni aniqlang.",
        questionType: "multiple_choice",

        options: [
            "Insoniyatni hayratga soluvchi atom faqat urandan tashkil topgan.",
            "Urandan qishloq xo‘jaligida foydalanilgani uchun unda radioaktivlik kuchlidir.",
            "Reaktor ichidagi atomlarning portlashi natijasida kichik yadrolar hosil bo‘ladi.",
            "Uran dastlab topilgandayoq uning radioaktiv nur ekanligi aniq bo‘lgandi.",
        ],
        correctAnswer: "C",
        points: 1.7,
    },

// 21
    {
        id: 21,
        questionText: "Matn mazmunida to‘g‘ri ifodalangan ma’lumotni aniqlang.",
        questionType: "multiple_choice",

        options: [
            "Uranning kashf etilishi va u haqidagi dastlabki ma’lumotlar bir asrda uchraydi.",
            "Uran fizik jihatdan juda faol element bo‘lganligi uchun qimmatdir.",
            "Uranning qoramtir qobiq hosil qilishi havo ta’sirida qolishiga sabab bo‘ladi.",
            "Uran yerdagi qisman issiqlikni ta’minlovchi vosita hisoblanadi.",
        ],
        correctAnswer: "A",
        points: 1.7,
    },

// 22
    {
        id: 22,
        questionText: "Matn mazmunida noto‘g‘ri ifodalangan ma’lumotni aniqlang.",
        questionType: "multiple_choice",

        options: [
            "Boshqa moddalar tarkibidan uranni ajratib olish murakkab jarayon hisoblanadi.",
            "Urandan turli sohalarda foydalanish mumkin.",
            "Uranning hajmi va ishlab chiqarayotgan energiyasi o‘zaro nomutanosibdir.",
            "Uran katta miqdorda energiya ishlab chiqarganidan tarkibi zich joylashgan bo‘ladi.",
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
«ALIFBENING BIRINCHI HARFI»

Miyam biroz dam ola qolsin, degan maqsadda poyezdda o‘zim bilan gazeta ham, kitob ham olib chiqmadi. Niyatim — kupedagi hamrohlar bilan o‘rtamashlab ketish. Goh pirdan, goh muriddan deganlardek, navbatma-navbat shakarqultorlik qilib ketamiz, qiziq-qiziq voqealardan aytishib, manzilga yetib qolganimizni ham bilmay qolamiz. Yo‘lda har xil odamlar bilan tanishib ketish juda maza bo‘la-di-da! Siz mutlaqo notanish kishilarning ichki olamiga kirasiz. Go‘yo yangi bir mamlakatni kashf qilgandek zavqlanib ketasiz. Yangi orttirgan tanishingiz bilan besh soatmi, o‘n soatmi, bir kunmi, ikki kunmi ko‘ngil ochib gaplashib ketasiz. Keyin biror stansiyada kelib, u bilan xayrlashasiz. Shundan keyin ikkovingiz ham bir umr qayta uchrashmaysiz. Mabodo, uchrashib qolsang, bir-biringizni tanimaysiz. Lekin tasodifan eshitilgan bir gap, tasodifan eshitilgan bir voqea butun umr yodda saqlanib qoladi. Shu orzu bilan poyezdga chiqdim. To‘rt kishilik kupeda atigi ikki yo‘lovchimiz. Shunisi ham ma’qul. Odam tezroq topishib keta-di. Yurakdagi gaplar ham ancha erkinroq, bemalolroq chiqadi. Biz ikkivoyiz ham deraza yonida yuz-u yuz o‘tiribmiz. Ham kupega kirgach, semiz odam bilan salomlashdim. Javob o‘rniga allaqanday pishillagan ovoz eshitildi. (1) Joyimga o‘tirib ham ulgurmagan edim, u ko‘zoynagini burniga qo‘ndirib, gazeta o‘qishga tushib ketdi. Uning sariq badrangi o‘zlashgan so‘layomadigandek shunday qotib turganidaki, chetdan qaragan odam uni gazetani o‘qiyatgandemas, iskapyot deb o‘ylashi mumkin. Qo‘lda avturchkalik ham bor. Gazetani o‘qir ekan, yo‘loqlakay allanqanday belgilar chizadi. Aftidan, muhim joylarini qora lab ketayotgan bo‘lsa kerak. Yon tomonda bir quchoq gazeta qalashib yotibdi. O‘ziyam o‘n besh kunlikning yig‘ig‘idir shekilli. Gazeta o‘qishni yashko‘radigan odamligi bilinib turibdi. Kattaroq olim, professor bo‘lsa ehtimol. Balki siyosatchidir. Gazetani burib, hozirgi siyosiy ahvolni iskab ko‘rayotgan bo‘lsa ham ajab emas. Poyezd yurib ketgan edi, uni gapga tortmoqchi bo‘ldim:

— Safaringiz bexatar bo‘lsin, beyafandim! — dedim. Burnini gazetadan ko‘tarmay, yana allalnima deb po‘ng‘illadi. Poyezd birinchi stansiyada to‘xtab, yana yurib ketdi. Uchinchi, to‘rtinchi stansiyalar ham orqada qoldi. Bizning kupe esa suv quygandek jim. Bunga­qada yuragim tars yorilib ketishi hech gap emas! Kupedan chiqib ketay desam, poyezdda odam tiqilib yotib-di, qimirlashga imkon yo‘q. (2) Qolaversa, shuncha kitob to‘g‘ri. Nima, gapirgan bilan gapning yo‘g‘i chiqarmidi? Odam degan vaqtning qadriga yetishi kerak. Ha, tinmay o‘qish kerak. Yo‘lda ulfatlashib ketish yassiz narsaku-ya, lekin ezma odam jonning egovii bo‘ladi. Ming‘ullayerib miyangani qopib qo‘lingga beradi. Bu odam chakka­gi ochiq hamrohlariga uchrab, rosa ta’ziri­ni yegan bo‘lsa ham ajab emas. Lekin bir narsaga hayron bo‘lib o‘tiribman, semiz hamroh­im bitta sahifaga tikilganicha ketayotgan edi. Ikki ko‘zi gazet­aning bir joyiga qadalgandi. U miq etmadi. Kechirasiz, sizdan bir narsa so‘ramoqchi edim,— deb qoldi hamrohim. Miyamga: “Xayriyat, endi suhbatlashadigan bo‘libmiz”, degan fikr keldi. — Marhamat, afandim. — Bemor nimadan qo‘rqadi?

Meni kulgi qoplab ketdi, degan xayolda betiga tikildim. Hazillashayotgan odamga o‘xshamaydi. — Bemor nimadan qo‘rqadi, deysizmi? — savolini qaytarily so‘radi. — Shundoq. Doktordan. Uqazeta betiga imnimdir yozdi-da, keyin dedi: — To‘g‘ri kelmas ekan! Bemor kasalxonadan qo‘rqadi. Qaytadan gazeta betiga nimanidir yozib, to‘ng‘illadi: — Bu ham emas! Doktorga beriladigan puldan! — Yo‘q. Birinchi harfi “o“, ikkinchisi “p“ bo‘lishi kerak. hammasi bo‘lib sakkizta harf. — Operatsiya! — Xuddi o‘zi! Uyqana gazetaga shoshning ketdi. Allav­agacha ikkivoyiz ham jim o‘tiribmiz. Keyin yana o‘zi gap boshladi: — Kechirasiz, beyafandim, sizni yana bezovta qil­yapman. — Zarari yo‘q... Biror malakani, aholi ko‘paysa, nima oshishi kerak? — Deputatlar soni. — Yo‘q,— deb to‘ng‘illadi u. — Qamoqxona! Yana ruchkasini bilan nimanidir yozib ko‘rdi. — To‘g‘ri kelmapti! — Qahvaychilar! Ikkinchi harfi “s“, oxirgisi “i“. — Iste’mol! — hm! Yana ancha vaqt jim ketdik. Bir payt to‘satdan uning ovozi eshitildi: — Assalomu alaykum. Men ham alik oldim: — Va alaykum assalom! — To‘g‘ri, to‘g‘ri, — deb yubordi u. Nimasi to‘g‘ri? — Assalomu alaykumga beriladigan javob-da. Bu semiz odam jinning o‘xshash ishqib­ilib, jazavasi tutib, bo‘lg‘imga yopishmasa bo‘lgani. — Beyafandim, sizdan bir narsa so‘ramoqchiman. — Bemalol. Bir notaning nomini aytib berolmaysizmi? Do! — Yo‘q, u emas. Re! — To‘g‘ri kelmaydi! Mil! — Yo‘q! Fa! — Boshqacharoq. Birinchi harfi “s“. O‘zi ikki harfdan iborat. — Si! — Otangizga rahmat-e! Ikki soatdan beri topolmay garang edim. Sizni yetkazganiga shukur, muzi­kadan ancha boxabar ekansiz. — Ha, ancha xabarman bor musiqadan. Sol, lya degan boshqa notalarni ham bilaman. Yana orqaga uzoq jimlik cho‘kdi. — Beyafandim! Labbay, taqsir! — Kurash tushiladigan joyga nima deyiladi? Maydoncha deyiladi. E, salomat bo‘ling! — “Bo‘zaqir“ degan so‘zni yozib, nega chiqmaydi, deb o‘tirgan edim. Qo‘lidagi gazetani uloqtirib, boshqa birini oldi. Yana menga savol yo‘lladi: — Osmondan nima yog‘iladi? Tosh, deb yozgan edim, to‘g‘ri- Yomg‘ir! — Xuddi o‘zi! Balo ekansiz! Yana jimib qoldik. Poyezd uch-to‘rt stansiyada to‘xtab o‘tdi. Semiz hamrohim so‘rab qoldi: — Beyafandim, markazning turkchasi qanday bo‘ladi? — Eshak! — Buni qarang, ayni o‘zi! — Ya!.. Bo‘lmasam, chi!.. Ovqat arabi tilida nima deyiladi? — Qanaqa ovqat? O‘zimizning o‘naki ovqat-da. — zonaki ovqatning nomi boshqa, yonda kompoti bo‘lsa yana boshqa. Uch harfdan iborat ekan! — Aql! — Voy, quvib qo‘ygan dek! “A“ ga Anqaraga yetib keldik. Semiz odam kela­guncha krossvord yechish bilan band bo‘ldi. Lekin krossvordning har bir so‘zini mendan so‘rab turdi. Men har kuni hamma gazetalarni olib turaman,— dedi u. Gazetani o‘qib turish ma’qul gap! — deb javob berdim unga. — E, qayoqda deysiz,— deya e’tiroz bildirdi u,— bir satrini ham o‘qimayman. Gazetalarda chiqqan jami­ki krossvordni topmagunimcha ko‘nglim joyiga tushmaydi. Juda g‘alati ermakk- da bu! Hali­gacha mening tishim o‘tmagan birorta krossvord bosilgan yo‘q! Birpasda qo‘ltig‘imdagi chamadonimni oldim. Men shu stansiyada tushadiganman, u o‘tib ketadi. — Xo‘p, xayr! Semiz odam gazetadan boshini ko‘tardi. Alifbening birinchi harfi nimaydi? — so‘radi u ko‘zlarini baqraytirib. — “A“,— deb javob berdim. — Qoyil! Xuddi o‘zi!
  `.trim(),
    },

// 23) Bola o‘zini “katta” deb his qilishi nimada aks etgan?
    // 23
    {
        id: 23,
        questionText: "Matn mazmunida to‘g‘ri ifodalangan ma’lumotni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Hikoyada hukumatning xalq ustidan o‘rnatgan siyosiy nazorati tasvirlangan.",
            "Hikoyada hukumatning jamiyat taqdiriga bepisandligi tasvirlangan.",
            "Hikoyada ilmsiz insonlarning qadri past ekanligi tasvirlangan.",
            "Hikoyada hukumat vakillarining aholini taqdirini o‘ylashi tasvirlangan.",
        ],
        correctAnswer: "C",
        points: 1.7,
    },

// 24
    {
        id: 24,
        questionText: "Matn mazmunida to‘g‘ri ifodalangan ma’lumotni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Hikoyada ommaviy axborot vositalar o‘z vazifasini unutib har xil ko‘ngilochar dasturlarga o‘tib ketgani tasvirlangan.",
            "Hikoyada ikki ilmsiz yo‘lovchi holati tasvirlangan.",
            "Hikoyada qahramonlarning ikkkisi ham jamiyat taqdiriga bepisandligi tasvirlangan.",
            "Hikoyada gazeta va jurnallarning nihoyatda rivojlanayotgani tasvirlangan.",
        ],
        correctAnswer: "D",
        points: 1.7,
    },

// 25
    {
        id: 25,
        questionText: "Berilgan parchada qanday badiiy maqsad ifodalangan?",
        questionType: "multiple_choice",
        options: [
            "Gazeta o‘qiyotgan ilmli insonning holati tasvirlangan.",
            "Ilm-fanga sho‘ng‘ib ketganidan atrofdagi voqealarga befarq inson tasvirlangan.",
            "Ilmsiz bir insonning gazetadagi krossvordlarni yechishga urinayotgani tasvirlangan.",
            "Ilmsizligini yashirish uchun gazetadan bosh ko‘tarmayotgan inson holati tasvirlangan.",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 26
    {
        id: 26,
        questionText: "Matn mazmunida to‘g‘ri ifodalangan ma’lumotni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Ilmsizlik jamiyatda avj olib ketganligi tasvirlangan.",
            "Hukumatning xalqni ilmli qilishga intilayotganligi tasvirlangan.",
            "Ilmsizligida uyalayotgan inson holati tasvirlangan.",
            "Jamiyatdagi barcha ziyoli insonlar holati tasvirlangan.",
        ],
        correctAnswer: "A",
        points: 1.7,
    },

// 27
    {
        id: 27,
        questionText: "Berilgan parchada qanday badiiy maqsad ifodalangan?",
        questionType: "multiple_choice",
        options: [
            "Hikoyachining hamrohi qilgan hurmatsizlikka bo‘lgan noroziligi aks ettirilgan.",
            "Hikoyachining hamrohiga bo‘lgan pisandsizligi tasvirlangan.",
            "Hikoyachining hamrohining ilmsizligiga nisbatan istehzosi tasvirlangan.",
            "Hikoyachi qahramonning o‘zini ovutishi tasvirlangan.",
        ],
        correctAnswer: "A",
        points: 1.7,
    }
    ,
    /* =======================
   G‘AZAL — passage (label G)
   ======================= */

    {
        id: 2800, // special id used for paginator label "G"
        questionType: "passage",
        questionText: `
G‘azalni o‘qing va quyidagi topshiriqlarni bajaring.

1. Yuziga ko‘zguni har dam qilur ul siymbar moni’,
   Aningdekkim quyosh ruxsorig‘a bo‘lg‘ay qamar moni’.

2. Jahonni ul quyoshning barqi husni o‘rtagay erdi,
   Karonsiz bahri ashkim bo‘lmasa erdi agar moni’.

3. Quruq jismimni g‘am tiyg‘idin asrar dardi ila shavqung,
   Yig‘ochqa kesmagidin o‘ylakim bo‘lg‘ay samar moni’.

4. Qabul etman qanot egnim uza chiqsa og‘ir debkim,
   Yo‘lunda barqdek po‘yamg‘a bo‘lg‘ay bolu par moni’.

5. Ko‘zum uzra hubobī ashk ul yuz moni’iy ermas,
   Biaynih shishadekkim, bo‘lmas aylarga nazar moni’.

6. Dema zohidki, taqvog‘a ne moni’durki, bordurlar
   Shabobu bodavu ishqu jununum sarbasar moni’.

7. O‘qqa birla qadu qoshu ko‘zung zuhdumg‘a qo‘ymaslar,
   Nechuk qilg‘ay kishi bir ishki, bo‘lg‘ay bu qadar moni’.

8. Ko‘ngul baytulharomi tavfig‘a moni’ xavotirdur,
   Safarga Ka’ba sari o‘ylakim bo‘lg‘ay xatar moni’.

9. Navoyi jonig’a tan gardi ermish moni’yi maqsud,
   Nasimi vasl eskach fayz bog‘idin ketar moni’. n\n\

LUG‘AT:
siymbar¹ — go‘zal; karonsiz² — chegara; hubobī⁴ — pufakcha; biaynīh⁵ — o‘ziday, xuddi;
sarbasar⁶ — butunlay; zuhd⁷ — taqvodorlik; tavf⁸ — aylanish.
  `.trim(),
    }
    ,

    // 28–32: savollar (g‘azal bo‘yicha)
    // 28
    {
        id: 28,
        questionText: "G‘azal matla’si haqidagi XATO hukmni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "Ma’shuqaning yuzi quyoshga nisbatan tashbihlangan.",
            "Ma’shuqaning ko‘zgusi yulduzga nisbatan tashbihlangan.",
            "Ma’shuqaning yuzini ko‘rsatmasligi tamsil bilan ifodalangan.",
            "Ma’shuqaning ko‘zgusi oyga nisbatan tashbihlangan."
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 29
    {
        id: 29,
        questionText: "G‘azal baytlari to‘g‘ri tahlil qilingan qatorni aniqlang.",
        questionType: "multiple_choice",
        options: [
            "2-bayt — Oshiqning ko‘z yoshi butun dunyoni ishqdan g‘arq qiladi.",
            "3-bayt — Oshiqni bu hayotda ushlab turgan narsa muhabbat bo‘ladi.",
            "4-bayt — Oshiq yornining yoniga xuddi chaqmoq singari uchib boradi.",
            "5-bayt — Oshiqni taqvo qilishdan to‘sayotgan narsa uning nafsga qul bo‘lgani."
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 30
    {
        "id": 30,
        "questionText": "G‘azalda quyidagi qaysi she’riy san’atlar mavjud EMAS?\n 1. Ta’did — baytda sanash ohangi bilan kelgan she’riy san’ati.\n 2. Ishtiqoq — baytda asosdosh so‘zlarni qo‘llash san’ati.\n 3. Tardi aks — baytda so‘zlarning o‘zaro teskari tartib bilan kelish san’ati.\n 4. Tamsil — baytda biror voqeaga nisbatan hayotiy misol keltirish san’ati.",
        "questionType": "multiple_choice",
        "options": ["1, 3", "3, 4", "2, 4", "2, 3"],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 31
    {
        id: 31,
        questionText: "G‘azalda quyida berilgan qaysi o‘xshatish mavjud EMAS?",
        questionType: "multiple_choice",
        options: [
            "Oshiq ma’shuqasini quyoshga tashbehlantirgan.",
            "Oshiq o‘zini muhabbat azobidan qurigan daraxtga o‘xshatgan.",
            "Oshiq o‘z yurishini chaqmoq tezligiga o‘xshatgan.",
            "Oshiq ko‘z yoshlarini ko‘piklari shishaga o‘xshatilgan."
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 32
    {
        id: 32,
        questionText: "Berilgan qaysi baytda mubolag‘a she’riy san’ati qo‘llangan?",
        questionType: "multiple_choice",
        options: ["1", "2", "3", "4"],
        correctAnswer: "B",
        points: 1.7,
    }
    ,
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
        "id": 33,
        "questionText": "Quyidagi gaplar va sintaktik tahlilga oid izohlar (A–F)ni o‘zaro to‘g‘ri moslashtiring.",
        "questionType": "match_table",
        "match": {
            "left": [
                {
                    "key": "33",
                    "text": "Kechqurun qirg‘oqda aylanib tanho,\nSevdim, sevib qoldim to‘lqinlaringni.\nOyni cho‘miltirgan tinch tunlaringni\nTushimda ko‘rganda ne qilarman, o."
                },
                {
                    "key": "34",
                    "text": "Yana ikki ko‘zdan sirqildi namlar,\nBillurin yuvdilar pokiza g‘amlar.\nQani ul Sir, Amu mavj urgan damlar,\nEy, sen dengiz tubin dolgalatuvchi!"
                },
                {
                    "key": "35",
                    "text": "Bolalik! Men seni bir umr qalbda\nOna sut’i kabi saqlay muqaddas\nVa lekin ertangi kunimdan kechib,\nSenga qaytmoqni hech qilmayman havas."
                }
            ],
            "right": [
                { "key": "A", "text": "undalmalı gap" },
                { "key": "B", "text": "shaxsi (egasi) umumlashgan gap" },
                { "key": "C", "text": "uyushgan bo‘lakli gap" },
                { "key": "D", "text": "ajratilgan bo‘lakli gap" },
                { "key": "E", "text": "to‘liqsiz gap" },
                { "key": "F", "text": "bir bosh bo‘lakli gap" }
            ]
        },
        "options": [
            "33–D; 34–F; 35–B",
            "33–F; 34–C; 35–A",
            "33–D; 34–C; 35–E",
            "33–E; 34–A; 35–B"
        ],
        "correctAnswer": "B",
        "points": 2.5
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
        "id": 36,
        "questionType": "structured",
        "questionText": "Berilgan parchada leksik shakldoshlik xususiyatiga ega so‘zni yozing.",
        "imageUrl": "/images/q36-diagram.png",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLAR BILAN YOZISHINGIZ SHART",
                "multiline": false,
                "correct": "QATTIQ"
            }
        ],
        "points": 1.1
    },
    {
        "id": 37,
        "questionType": "structured",
        "questionText": "Berilgan gapda qo‘llanishi kerak bo‘lgan tinish belgilarining to‘g‘ri ketma-ketligini yozing.\n\nSokrat shunday degan Agar inson o‘zini bilmasa u ko‘p boylikka ega bo‘lsa ham chinakam farovonlikka erisha olmaydi chunki haqiqiy farovonlik o‘z-o‘zini anglashda yotadi",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "masalan: , . ; : \" ... \"",
                "multiline": false,
                "correct": ": << , , , >> ."
            }
        ],
        "points": 1.1
    },
    {
        "id": 38,
        "questionType": "structured",
        "questionText": "Gapda qaysi qo‘shimchani qo‘llash bilan bog‘liq xatolik kuzatilgan?",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "-DA"
            }
        ],
        "points": 1.1
    },
    {
        "id": 39,
        "questionType": "structured",
        "questionText": "Gapni sintaktik tahlil qiling va ostiga chizilgan so‘z qaysi gap bo‘lak vazifasida kelgan?\n\nYarim kecha mahal safardan qaytib,\nXonadon eshigin yopmagin qattiq;\nQo‘shnilar ko‘nglini bezovta qilib,\nOilangga qo‘rquv solishin aniq.",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "masalan: Hol, to‘ldiruvchi, aniqlovchi ...",
                "multiline": false,
                "correct": "HOL"
            }
        ],
        "points": 1.1
    },
    {
        "id": 40,
        "questionType": "structured",
        "questionText": "Gapdagi so‘zlarning mazmunan va grammatik jihatdan bog‘lanishini tahlil qiling.\n\nInson o‘zga kishi oldida ayblariga iqror bo‘lgach, ularni darhol unutadi, ammo o‘zga kishi uning ayblarini yodida saqlab qoladi.",
        "parts": [
            {
                "key": "a",
                "label": "Birinchi ajratib ko‘rsatilgan so‘z qaysi so‘zga tobelanib bog‘langan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "IQROR BO‘LGACH"
            },
            {
                "key": "b",
                "label": "Ikkinchi ajratib ko‘rsatilgan so‘z qaysi so‘zga tobelanib bog‘langan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "YODIDA SAQLAB QOLADI"
            }
        ],
        "points": 1.1
    },
    {
        "id": 41,
        "questionType": "structured",
        "questionText": "Berilgan gaplarni grammatik jihatdan to‘g‘ri bog‘lang.\n\nHammmasi mana bunday boshlangan: yapon psixoterapevti Tamaki Saitoning huzuriga bir ota-ona xavotir bilan kelishadi va o‘z xonasidan chiqmay yashayotgan farzandlari haqida gapirib berishadi.",
        "parts": [
            {
                "key": "a",
                "label": "Parchada qaysi yordamchi vosita bir gap bo‘lagini boshqasiga tobelantirgan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "BILAN"
            },
            {
                "key": "b",
                "label": "Parchada qaysi yordamchi vosita sodda gapni bir-biriga bog‘lagan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "VA"
            }
        ],
        "points": 1.1
    },
    {
        "id": 42,
        "questionType": "structured",
        "questionText": "She’riy parchada ifodalangan she’riy san’atlarni aniqlang va yozing.\n\nDema zohidki, taqvog‘a ne moni’durki, bordurlar,\nShabob-u bodavu ishq-u jununum sarbasar moni’.",
        "parts": [
            {
                "key": "a",
                "label": "Parchada ta’sirchanlikni oshirgan she’riy san’atni aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "TA’DID"
            },
            {
                "key": "b",
                "label": "Mazkur she’riy san’atning ta’rifini yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "SANASH OHANGI"
            }
        ],
        "points": 1.1
    },
    {
        "id": 43,
        "questionType": "structured",
        "questionText": "She’riy parchadagi qofiyalarni tahlil qiling.\n\nSurati devordek hayronmen ul ruxsor‘a,\nYo‘qsa g‘amzang o‘qlari tikmish meni devor‘a?",
        "parts": [
            {
                "key": "a",
                "label": "Qofiyadosh so‘zlardagi raviy harfini yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "R"
            },
            {
                "key": "b",
                "label": "Qofiyaning qaysi turi shakllantirgan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "MUTLAQ"
            }
        ],
        "points": 1.1
    },
    {
        "id": 44,
        "questionType": "structured",
        "questionText": "Quyidagi parcha mazmunini tahlil qiling va savollarga javob yozing.\n\nNecha samar sochmoq esa shoz ishi,\nKoprak otar tosh anga tergan kishi.\nKon necha bazli yuhari pok etar,\nOlg‘uchi koprak yuragin chok etar.\nSham yorutub uy ich-u toshini,\nEv iyasi koprak uzub boshini.",
        "parts": [
            {
                "key": "a",
                "label": "She’riy parchaning janrini aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "QIT’A"
            },
            {
                "key": "b",
                "label": "Berilgan she’riy parchada qanday fazilat ulug‘langan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "SAXIYLIK"
            }
        ],
        "points": 1.1
    },

    // 45) ESSE — long-form writing (textarea is rendered by QuestionRenderer)
    {
        "id": 45,
        "questionType": "essay",
        "questionText": [
            "ESSE",
            "Quyidagi vaziyat yuzasidan o‘z munosabatingizni yozma bayon qiling.",
            "",
            "Maktabni bitirgach qay yo‘ldan borgan ma’qulroq? Oliy ta’limda o‘qish yoki ishga kirish?",
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
            "DIQQAT! Esse uchun reja tuzilmaydi, epigraf qo‘yilmaydi.",
            "",
            "ESLATMA: ESSE qo‘lda tekshiriladi va yakunda e’lon qilinadi."
        ].join("\n"),
        "points": 0
    }








];
