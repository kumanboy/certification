// app/exam/questions.ts
import type {Question} from "@/types";

export const QUESTIONS: Question[] = [
    // 1
    {
        "id": 1,
        "questionText": "Imloviy jihatdan toʻgʻri yozilgan soʻzlar qatorini aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Kamchil, dastmoya, dahanaki",
            "Umirtqa, maʼruza, mashaqqat",
            "rangtasvir, agranom, halvofurush",
            "qayragʻtosh, qayragʻoch, ayyuhannos"
        ],
        "correctAnswer": "A",
        "points": 1.7
    },

// 2
    {
        "id": 2,
        "questionText": "Imloviy jihatdan toʻgʻri yozilgan soʻzlar qatorini aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Oʻzbekiston Respublikansida Xizmat koʻrsatgan Fan Arbobi, \"Oltin Yulduz\" medali",
            "Jahon Tinchlik kengashi, Oʻzbekiston Milliy universiteti",
            "\"Temuriylar tarixi\" davlat muzeyi, \"Lazzat\" oshxonasi",
            "Oʻzbekiston Respublikasi Vazirlar Mahkamasi, \"Turkiston\" saroyi"
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,
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
        "id": 3,
        "questionText": "Soʻzning izohi xato berilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Apteka — dorixona",
            "Dastavka — joʻnatma",
            "Razmer — oʻlcham",
            "Redaktor — muharrir"
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

    // 4
    // 4 (diagram MCQ)
    {
        "id": 4,
        "questionText": "Oʻzaro maʼnodoshlik hosil qila oladigan soʻzlar qatorini aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "tasvir, manzara, shakl",
            "Halovat, tinch, osuda",
            "Bitim, qaror, toʻxtam",
            "bisot, mablagʻ, mulk"
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,


    // 5 (“Ayon”) — plain MCQ with textual diagram labels in the stem
    {
        "id": 5,
        "questionText": "Berilgan gapda qanday turdagi qoʻshimchani almashtirib uslubiy xatolikni toʻgʻrilash mumkin?\n\nTildagi ayrim tanqidshunos olimlarning koʻplab asarlarga nisbatan salbiy munosabati va fikrlari ushbu asarlarning pasayishiga emas, aksincha oʻsishiga olib keladi.",
        "questionType": "multiple_choice",
        "options": [
            "Maʼnodosh kelishik qoʻshimchasi",
            "Shakldosh sintaktik shakl yasovchi qoʻshimcha",
            "Maʼnodosh soʻz yasovchi qoʻshimcha",
            "Shakldosh lugʻaviy shakl yasovchi qoʻshimcha"
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

    // 6
    {
        "id": 6,
        "questionText": "Qaysi qatorda soʻz qoʻllash bilan bogʻliq uslubiy xatolik mavjud.",
        "questionType": "multiple_choice",
        "options": [
            "Ertaklarda real haqiqiy hayot bilan bogʻliq sarguzashtlar yaratiladi.",
            "Biz shiddatli tezlikda harakatlandik.",
            "U nafaqat hukmdordan, balki vazirlardan ham najot kutar edi.",
            "Boʻston qishlogʻiga ogʻir, vazmin qadamlar bilan kuz kirib keldi."
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,


    // 7 (match-table)
    {
        "id": 7,
        "questionText": "Parchada qatnashgan qoʻshimchalar haqida hukmlardan nechtasi toʻgʻri koʻrsatilgan?\n\nIstiqlol yillarida kinematografiyani har tomonlama rivojlantirish, bu borada zarur moddiy va maʼnaviy shart-sharoitlarni yaratish boʻyicha amalga oshirilgan keng koʻlamli chora-tadbirlar tufayli yangi-yangi filmlar suratga olinmoqda.\n\n1) Feʼlga xos lugʻaviy va sintaktik shakl yasovchi qoʻshimcha qoʻllangan;\n2) Oʻzaro shakldosh qoʻshimchalar ishtirok etgan;\n3) Otga xos lugʻaviy shakl yasovchi qoʻshimcha qoʻllangan;\n4) Qoʻshma feʼl tarkibida qatnashgan kelishik qoʻshimchasi mavjud;\n5) Ravishga xos soʻz yasovchi qoʻshimcha qoʻllangan.",
        "questionType": "multiple_choice",
        "options": [
            "uchtasi",
            "toʻrttasi",
            "ikkitasi",
            "beshtasi"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,
    // 8) Har uchala parchada ham ishtirok etgan fe'l shakllari
    {
        "id": 8,
        "questionText": "Parchada ishtirok etgan feʼllar haqidagi hukmlarning nechtasi toʻgʻri koʻrsatilgan?\n\nBilasanmi, uzoq mushohada qildim, oxiri qayerda xato qilganimni tushundim, endi hech qachon odamlarga maqtanib soʻzlamayman, oʻylamasdan nomaʼqul ishlarni qilmayman.\n\n1) Oʻtimli sodda yasama feʼl qatnashgan.\n2) Sodda yasama feʼl harakat nomi shakli.\n3) Majhul nisbatdagi feʼl.\n4) Qoʻshma yasama feʼl.\n5) Yasama oʻzlik nisbatdagi feʼl.",
        "questionType": "multiple_choice",
        "options": [
            "uchtasi",
            "toʻrttasi",
            "ikkitasi",
            "beshtasi"
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,
    // 9) Otlar haqidagi to‘g‘ri ma’lumot
    {
        "id": 9,
        "questionText": "Quyida berilgan gapdagi // belgisi oʻrniga qaysi yordamchi soʻzni qoʻyish mazmunan toʻgʻri hisoblanadi?\n\nTest sinovlarini yuqori saviyada oʻtkazish uchun talabgorlardan test sinovlari boʻlib oʻtadigan hududga shaxsini tasdiqlovchi hujjatlar ( pasport // ID karta) bilan yetib kelishlari soʻraladi.",
        "questionType": "multiple_choice",
        "options": [
            "yaʼni",
            "balki",
            "yoki",
            "hamda"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 10) Hollar haqida to‘g‘ri ma’lumot
    {
        "id": 10,
        "questionText": "Quyidagi gapda alohida ajratib ko'rsatilgan so'z haqida xato hukm berilgan javobni aniqlang.\n\nO'sha yilgi voqea sabab bo'ladi-yu, ularning ikkalasi ikkita korxonaga ishga o'tib ketishadi, ammo men bu haqda keyinroq xabar topdim.",
        "questionType": "multiple_choice",
        "options": [
            "Tobe qismi son bilan ifodalangan so'z birikmasi tarkibida qatnashgan.",
            "Hokim qismi fe'l bilan ifodalangan so'z birikmasi tarkibida qatnashgan.",
            "Tobe qismi ot bilan ifodalangan so'z birikmasi tarkibida qatnashgan.",
            "Hokim qismi to'ldiruvchi bilan ifodalangan so'z birikmasi tarkibida qatnashgan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 11) Mazmun va grammatik bog‘lanish
    // 11
    {
        "id": 11,
        "questionText": "Gapdagi so'zlarning mazmun va grammatik jihatdan bog'lanishi to'g'ri ko'rsatilgan javobni aniqlang.\n\nTojixon safardan ikki kun kechikib qaytibdi, shuning uchun brigadasidan hech ko'ngli tinchimayotgan ekan.",
        "questionType": "multiple_choice",
        "options": [
            "ko'ngli tinchimayotgan ekan, safardan qaytibdi.",
            "shuning uchun tinchimayotgan ekan, Tojixon qaytibdi.",
            "ikki kun kechikib, kechikib qaytibdi",
            "safardan qaytibdi, brigadasidan tinchimayotgan ekan."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

// 12
    {
        "id": 12,
        "questionText": "Berilgan gapda notoʻgʻri qoʻllangan tinish belgisini aniqlang.\n\nUstoz javob beribdi;\n-- Demak, zarar kattalashmasin: birinchi zarar -- obroʻning ketishi; ikkinchi zarar -- hasadgoʻyning quvonishi...",
        "questionType": "multiple_choice",
        "options": [
            "Qoʻshma gaplar oʻrtasidagi ikki nuqta xato qoʻllangan.",
            "egadan keyingi tire xato qoʻllangan.",
            "Gap oxiridagi uch nuqta xato qoʻllangan.",
            "Birinchi gapdan keyingi nuqtali vergul xato qoʻllangan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 13
    {
        "id": 13,
        "questionText": "Abdulla Qodiriyning \"O'tkan kunlar\" romanida qaysi tarixiy voqea qalamga olinmagan?",
        "questionType": "multiple_choice",
        "options": [
            "Qo'qon xonligi va Buxoro amirligi o'rtasidagi siyosiy ziddiyatlar.",
            "Otabek va Kumush taqdiri bilan bog'liq ijtimoiy hayot manzaralari.",
            "Savdo-sotiq va karvon yoʻllari bilan bogʻliq voqealar.",
            "Rossiya va Turkiya oʻrtasidagi urushlar shiddatli janglar."
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 14
    {
        "id": 14,
        "questionText": "Asar qahramonlariga to'g'ri ta'rif berilgan javobni aniqlang.\n\n1) Snovboll — cho'chqa; fermadan haydalganidan so'ng odamlar bilan ochiq ittifoq tuzib, qurolli qo'shin bilan qaytib kelishga uringan obraz.\n2) Skviler — cho'chqa; raqam-u \"hisobotlar\" va so'z o'yinlari orqali Napoleon qarorlarini \"mantiqan to'g'ri\" qilib ko'rsatadigan targ'ibotchi.\n3) Boksyor — eshak; \"Napoleon doimo haq\" shiorini asosan u aytib yuradi va boshqalarga ham o'rgatadi.\n4) Mozes — qarg'a; hayvonlarni \"Shakarqamish tog'i\" haqidagi afsona bilan ovutib, ularni hozirgi og'ir mehnatga chidashga undaydigan obraz.",
        "questionType": "multiple_choice",
        "options": [
            "2,4",
            "faqat 2",
            "1,3,4",
            "faqat 4"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 15
    {
        "id": 15,
        "questionText": "Abdulhamid Cho'lponning \"Kecha va kunduz\" romanida voqealar to'g'ri bayon etilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Zebi taqdiri orqali ayolning huquqsizligi va jamiyat bosimi yoritiladi; Miryoqub mingboshi atrofida yurib, uning ishlarida vositachilik qiladi, Zebi esa majburan mingboshi xonadoniga kelin bo'lib tushadi.",
            "Zebi o'z xohishi bilan boy xonadonga kelin boʻlib boradi, keyin esa o'qish uchun shahar tashqarisiga jo'nab ketadi; Miryoqub buning uchun hammani ishontirib, uni himoya qiladi.",
            "Asarda barcha voqealar faqat \"kunduz\" qismida berilib, qahramonlarning “kecha”dagi ruhiy kechinmalari umuman tasvirlanmaydi.",
            "Zebi va Miryoqub birgalikda chet elga ketib, roman oxirida yangi hayotni boshlaydi; mingboshi esa pushaymon boʻlib, ularni qaytaradi."
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 16
    {
        "id": 16,
        "questionText": "Abdulla Qahhorning \"Ming bir jon\" hikoyasida Mirrahimov avval tutaqib, hamshiraga dag'allashib gapiradi, lekin Mastura Alievaning palatasidan chiqqach, kechgacha indamay qoladi. Mirrahimovdagi bu o'zgarishning eng asosli sababi nima?",
        "questionType": "multiple_choice",
        "options": [
            "Bahorning yoqimli havosi uni o'z-o'zidan tinchlantirib, kasallikdan shikoyat qilishni uyat deb bildirdi.",
            "Hamshiraning \"dardni bardosh yengadi\" degan nasihati Mirrahimovga kuchli ta'sir qilib, u o'zini tiyishga majbur bo'ldi.",
            "Masturaning o'limga taslim bo'lmaydigan umidi va hazil-mutoyibasi, shuningdek Akramjonning vafodorligi Mirrahimovda ichki larzani uyg'otib, uni o'ziga qaytardi.",
            "Hoji akaning Masturani ko'rib qo'rqib chiqib ketgani Mirrahimovga kulgili tuyulib, u shundan keyin jilmayibgina yuradigan bo'ldi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

// 17
    {
        "id": 17,
        "questionText": "Chingiz Aytmatovning \"Asrga tatigulik kun\" asari haqida to'g'ri hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Edigey Kazangapni Ona-Bayit qabristoniga dafn etish uchun yo'lga chiqadi, biroq qabriston tomoni kosmodrom hududi deb yopilgani sababli ularni yoʼldan qaytarishadi.",
            "Asarda manqurt afsonasida Nayman ona o'g'lini eslatib uyg'otadi va oʻgʻil onasini tanib, qochib ketadi.",
            "Edigey va Kazangap yoshligidan birga o'sgan aka-uka boʻlib, asar voqealari ularning bolalik xotiralari atrofida quriladi.",
            "Asarda kosmosga uchgan ekipaj Yer bilan aloqa o'rnatgach, darhol xalq oldida e'lon qilinadi va ular tantanali ravishda qaytarib olinadi."
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,
    // app/exam/questions.ts (append right after the object with id: 17)

    {
        id: 100,
        questionType: "passage",
        questionText: [
            "",
            "ZAYTUN\n" +
            "I\n" +
            "\n" +
            "Zaytun (Olea) — zaytundoshlar oilasiga mansub doimiy yashil daraxt va butalardan iborat oʻsimliklar turkumidir. Bu turkumga 600 ga yaqin tur kiradi, ammo ulardan faqat Yevropa zaytuni (Olea europaea) madaniy holda keng yetishtiriladi. Zaytun qadim zamonlardan beri Oʻrta dengiz havzasi hududlarida ekilib kelinib, bugungi kunda Yevropa, Osiyo, Afrika va Amerika qitʼalarida tarqalgan. Zaytun yetishtirishda Ispaniya, Italiya, Gretsiya va Portugaliya yetakchi oʻrinni egallaydi. Zaytun uzoq umr koʻruvchi oʻsimlik boʻlib, qulay sharoitda bir necha yuz yil, ayrim hollarda ming yilgacha yashashi mumkin. U asosan issiq va quruq iqlim sharoitlariga moslashgan boʻlib, yuqori haroratga bardosh berish xususiyatiga ega.\n" +
            "\n" +
            "II\n" +
            "\n" +
            "Zaytun daraxtining boʻyi odatda 4 metrdan 12 metrgacha yetadi, shoxlari keng tarqalgan va zich barglar bilan qoplangan boʻladi. Barglari mayda, choʻzinchoq shaklda, ustki qismi toʻq yashil va yaltiroq, pastki qismi esa och rangda boʻlib, namlikning ortiqcha bugʻlanishini kamaytirishga xizmat qiladi. Gullari ikki jinsli, mayda va oqish rangda boʻlib, shingilsimon toʻpgullarda joylashadi hamda yoqimli hid taratadi. Mevasi danakli rezavor boʻlib, dastlab yashil rangda boʻlsa, pishib yetilgach binafsha yoki qora tusga kiradi. Meva tarkibida yuqori miqdorda oʻsimlik moyi, oqsil moddalar, vitaminlar hamda karotin mavjud.\n" +
            "\n" +
            "III\n" +
            "\n" +
            "Zaytun daraxti qurgʻoqchilikka chidamli boʻlib, qumoq va ohakli tuproqlarda yaxshi rivojlanadi. Sovuqqa nisbatan o‘rtacha bardoshlilikka ega boʻlsa-da, keskin sovuqlar hosildorlikka salbiy taʼsir koʻrsatishi mumkin. Zaytun asosan qalamcha, ildiz bachkisi va payvandlash yoʻli bilan koʻpaytiriladi. Qalamchadan o‘stirilgan koʻchatlar 4—5 yilda hosil bera boshlaydi, urugʻdan yetishtirilganlari esa 10—12 yildan keyin meva tugadi. Har bir yetuk daraxtdan oʻrtacha 20—40 kilogrammgacha hosil olinadi. Agrotexnik parvarish ishlari sugʻorish, shoxlarni kesish va tuproqni yumshatishni oʻz ichiga oladi.\n" +
            "\n" +
            "IV\n" +
            "\n" +
            "Zaytunning asosiy xoʻjalik ahamiyati uning moyi bilan belgilanadi. Meva etida 25 foizdan 80 foizgacha sifatli moy boʻlib, u oziq-ovqat mahsulotlari ishlab chiqarishda, tibbiyot va kosmetika sohalarida keng qoʻllaniladi. Sovuqlayin presslab olingan moy eng sifatli hisoblanib, inson salomatligi uchun foydali moddalarga boy bo‘ladi. Qizdirib presslangan ikkinchi fraksiya esa texnik ehtiyojlar, jumladan sovun ishlab chiqarishda ishlatiladi. Zaytun mevasi konservalanib yoki marinad holida ham isteʼmol qilinadi. Uning kunjarasi chorva uchun yem, yogʻochi esa mustahkamligi sababli bezak buyumlar tayyorlashda foydalaniladi. Shu bois zaytun iqtisodiy va ekologik jihatdan muhim oʻsimlik hisoblanadi."
        ].join("\n"),
    },

    // 18) VIRUSLAR – mos bo‘lmagan ma'lumot
    // 18
        {
            "id": 18,
            "questionText": "Matn mazmuniga mos to‘g‘ri shakllantirilgan gapni aniqlang.",
            "questionType": "multiple_choice",
            "options": [
                "Zaytun turkumiga 600 ga yaqin tur kiradi, biroq xo‘jalik jihatdan asosan Yevropa zaytuni yetishtiriladi.",
                "Zaytun faqat sovuq iqlimli hududlarda o‘sib, issiqda hosil bermaydi.",
                "Zaytun mevasida moy faqat danak qismida bo‘ladi, etida esa umuman uchramaydi.",
                "Zaytun daraxti qisqa umr ko‘ruvchi bo‘lib, 20–30 yil yashaydi."
            ],
            "correctAnswer": "A",
            "points": 1.7
        },
        {
            "id": 19,
            "questionText": "Matnning qaysi qismida berilgan ma’lumotlar asosan zaytunning tashqi tuzilishi (barg, gul, meva) haqida bayon qilingan?",
            "questionType": "multiple_choice",
            "options": [
                "I",
                "II",
                "III",
                "IV"
            ],
            "correctAnswer": "B",
            "points": 1.7
        },
        {
            "id": 20,
            "questionText": "Matn mazmunida aks etmagan ma’lumotni aniqlang.",
            "questionType": "multiple_choice",
            "options": [
                "Zaytun qalamcha orqali ko‘paytirilsa 4–5 yilda hosilga kirishi aytiladi.",
                "Zaytunning mevasida moy, oqsil, vitamin va karotin borligi keltiriladi.",
                "Zaytun plantatsiyalarida zararkunandalarga qarshi biologik kurash eng asosiy usul ekani alohida ta’kidlanadi.",
                "Zaytun mevasidan oziq-ovqat va texnik maqsadlarda moy olinishi bayon etiladi."
            ],
            "correctAnswer": "C",
            "points": 1.7
        },
        {
            "id": 21,
            "questionText": "Matn mazmuniga mos to‘g‘ri ifodalangan ma’lumotni aniqlang.",
            "questionType": "multiple_choice",
            "options": [
                "Sovuqlayin presslangan zaytun moyi asosan texnikada va sovun pishirishda ishlatiladi.",
                "Zaytun daraxti faqat urug‘dan ko‘paytiriladi, qalamcha va payvandlash qo‘llanmaydi.",
                "Zaytun mevasi marinad yoki konserva holida iste’mol qilinishi mumkin.",
                "Zaytun daraxti ohakli va qumoq tuproqlarda yomon o‘sadi, faqat botqoq tuproqda yaxshi rivojlanadi."
            ],
            "correctAnswer": "C",
            "points": 1.7
        },
        {
            "id": 22,
            "questionText": "Matn mazmunida aks etgan ma’lumotni aniqlang.",
            "questionType": "multiple_choice",
            "options": [
                "Zaytun mevasidan olingan birinchi fraksiya moyi sovuqlayin presslash orqali olinadi va iste’mol uchun mo‘ljallanadi.",
                "Zaytun moyining ikkinchi fraksiyasi faqat dorivor maqsadda ishlatiladi, texnikada qo‘llanmaydi.",
                "Zaytun mevasi pishganda doimo och sariq rangda qoladi va qoraymaydi.",
                "Zaytun daraxti ildiz bachkisi bilan ko‘paytirilmaydi, bu usul mutlaqo qo‘llanmaydi."
            ],
            "correctAnswer": "A",
            "points": 1.7
        }
    ,
    /* =========  MATN (Kattalar oqshomi) + Savollar 23–27  ========= */

// M) Reading passage (shows as “M” in the navigator)
    {
        id: 2301, // Navigator “M” sifatida ko‘rsatiladi (questionType: "passage")
        questionType: "passage",
        questionText: `
Odam qanday aqldan ozadi? 

-Janoblar,- dedi ko‘zoynakli kishi tantanavor ohangda,- biz bir to‘xtamga kelishdan oldin hammasini obdon o‘ylab, pishitib olishimiz kerak.Bunaqa ishda щoщma-shosharlik ketmaydi.
-To‘ppa-to‘g‘ri,- deya qo‘llab gapirdi davradagilarning eng yoshi,- juda jiddiy o‘ylab ko‘rish kerak.Aks holda boshmizga balo bo‘ladi.
-Avvalo biz undan rozimizmi - shuni aniqlab olishimiz lozim,- dedi sepkilli janob.
-Norozimiz!- yig‘ilganlar jo‘rovoz bo‘lib javob qilishdi.
-Nima uchun? – yana so‘roqladi sepkilli.
-Axir u jinni-ku!- ko‘zoynakli janob xitob qildi.
-Ha, ha, jinni!
-Jinni!- har tomondan qichqirishdi.
-Tushunarli,- bosh irg‘adi sepkilli,- hamma gap shunda.Bizning vazifamiz – g‘aflatda qolmaslik va yana jinnini saylamaslik.
-Oldingisi ham tentakroq edi,- qo‘shimcha qildi semiz kishi.
-Men bilganlarning hammasi tentak edi.
-Xo‘sh, shunday ekan, kelinglar obdon o‘ylab ko‘raylik va nihoyat aqli rasoroq bir kimsani saylaylik,-dedi yosh yigit donolik bilan.
-Ajabo, biz ularni saylaganimizda hammasining aqli xushi joyida edi,- dedi ko‘zoynakli janob xayron bo‘lib.- Ha, ular aqlli, oliyjanob odamlar edi.Ammo eng aqllisi ham oxir oqibat tentak bo‘lib chiqdi.
-E olloh,- dedi davradagi keksa kishi tamshanib, yo‘talarkan,- yozug‘imiz ne edi?Hammasi mana shu la’nati amalga minganda aqlini yo‘qotadi-ya.
- Ayni biz shu mansabga saylagan kimsalar!- qo‘shimcha qildi semiz kishi.
-Gap lavozimda ham emas!- dedi yosh yigit.- Hoynahoy, nomzodlarimizning avvaldanoq sal... tomi ketgan, ammo ulardagi tentaklik alomatlari saylovgacha bilinmasdi.Lavozimga o‘tirishlari hamon ularning dardi qo‘zib, kuchayib ketadi.
- Eskisimi yoki yangisimi,xotiram pand bermasa, hammasi oxir oqibat aqlini yo‘qotardi. Bironta es-xushi joyida bo‘lganini ko‘rmadim,- dedi chol yo‘talini arang bosib.
-Nimalar deb valdirayapsizlar! Biz u bilan mana o‘ttiz yildan buyon do‘stmiz.Hokimlikka saylanguncha unda hech qanday kasallik alomatlari sezilmagan!- dedi sepkilli janob achchig‘lanib.
-Hmm...Onadan tug‘ma tentak bo‘lib dunyoga keladigan odam kamdan kam uchraydi.Demak, aqldan ozish uchun oldin hokim bo‘lish kerak ekan.
-Janoblar, ortiqcha tortishishdan foyda yo‘q,- hamsuhbatlarning gapini bo‘ldi ko‘zoynakli odam.Oldimizda bundan ham muhim vazifa turibdi :bu gal kimni shahar hokimi etib saylaymiz?
Yig‘ilganlarning har biri qandaydir nomzodni tilga olishar, ammo shu zahotiyoq har bir nomzodga e’tirozlar yog‘ilardi.Axir bo‘lajak hokim saylovgacha ham, undan keyin ham jinni bo‘lmasligi lozim edi-da.Yuzlab nomzodlar tilga olindi.
 - To‘xtanglar! – kutilmaganda ko‘zoynakli janob hitob qildi.- Men topdim! Rasimbey haqida nima deysizlar?
 - Xudoga shukur, imonli odam.
- Halol.Tarbiya ko‘rgan.Kamtarin.
- Hasadgo‘y emas.Hammaga yaxshilik tilaydi.
- Uddaburon, beg‘araz,xushmuomala.
- Ishchan.
 Rasimbey shaniga maqtovlar yog‘ilib ketdi.
- Ammo, menimcha, Rasimbey hokim bo‘lishni istamaydi,- e’tiroz bildirdi semiz kishi.
 - Siz haqsiz, men uni bolaligidan bilaman.Rozi bo‘lishiga ko‘zim yetmaydi,- kovshanib qo‘shimcha qildi chol.
 - O‘la qolsayam hokim bo‘lmaydi u!- tasdiqladi sepkilli.
  - Nima qilish kerak?- ko‘zoynakli odam kallasini changalladi.- Men ham shunday fikrdaman, ammo nima qilsak ekan? Endi munosib nomzodni topganimizda...hammasi chappasiga ketsa!
  Agar bu odamlar tavsiya qilgan nomzod saylovda o‘tmay qolganda ham boshqa gap edi.Xalq ularga ishonadi va ko‘rsatilgan nomzodni saylaydi.
  Yig‘ilganlar o‘rnidan turib, Rasimbeyning uyiga ravona bo‘ldilar.Unga o‘z takliflarini aytdilar.Gap orasida hamma hokimlar ertami kechmi aqldan ozishini ham pisanda qilib qo‘yishdi.
  - Demak, sizlar mening ham jinni bo‘lishimni istaysizlarmi? Menda qasdinglar bormi o‘zi?- Rasimbeyning fig‘oni falakka chiqdi.
  - Xudo haqqi, o‘zingni bos.Sen aqlli odamsan.Iltimosimizga yo‘q dema.
  - Yo‘q, ilojim yo‘q.
  - Bu sening Vatan oldidagi burching, Rasimbey.
- Millatning bor-yo‘q umidi sendan.
- Bu axir davlat ahamiyatiga molik masala.
- Hay mayli,men roziman, faqat bir shartim bor...
- Marhamat! Bir og‘iz so‘zing...
- Mening shartim shunday.Keyin meni so‘kib yurmasligingiz uchun gapning po‘stkallasini aytmoqchiman.Menga xushomadgo‘ylar kerak emas...Ziyofatu tantanalar bekor qilinadi,tilyog‘lamalik va maddohlik unutiladi.Xo‘sh, qalay, yoqadimi? Talabimni uddalash qo‘linglardan keladimi?Men ham xuddi sizlar kabi oddiy bir xomsut emgan bandaman.Xudo haqqi, meni tentakka chiqarmanglar.Rozimisizlar endi?
- Rozimiz!- hamma suyunib xitob qildi.
...Rasimbey ko‘pchilik ovoz bilan hokim bo‘ldi.O‘sha kunning o‘zidayoq ellikdan ortiq telegramma keldi.U bulardan birini olib,muqaddimasini o‘qib ko‘rdi: « Muhtaram afandi, o‘z xalqining asl farzandi, janob Rasimbey...»
Rasimbey boshqa telegrammalarni ochib o‘tirmadi.
- Yo ollohim, o‘zing qo‘llagaysan!- deya tavallo qildi.
Oradan ko‘p o‘tmay eshik taqillab qoldi.
Ko‘zoynakli janob kattakon guldasta ko‘tarib kirdi.Chuqur ta’zim ila Rasimbeyni tabrikladi.
Oradan yana bir muddat vaqt o‘tgach,qandaydir bir qo‘ltiqtayoqli, qotma chol ham guldasta ko‘tarib keldi.Shu asnoda u Rasimbeyning qo‘lini ham o‘pib qoldi. «Behuda ovora bo‘lyapsizlar!» dedi u sovuqqonlik bilan, keskin ohangda.Ammo bular hali holvo edi: tabriklash uchun sepkilli yosh yigit bilan semiz kishi ham tashrif buyurishdi. «Yaratganning o‘zi aqlimdan mosuvo qilmasin!»- dedi Rasimbey xit bo‘lib.
Ayni chog‘da unga «Sizning sharafingizga ziyofat uyushtirilmoqda!» degan xabar yetkazildi.Rasimbey ziyofatga borsammi yo‘qmi deya hali bir to‘xtamga kelib ulgurmay eshigi yonida mashina to‘xtadi.
Ziyofatxona shoh saroyiga o‘xshardi.Qirq nafar kishiga mo‘ljallab dasturxon tuzalgan.Qandillar, gullar, shamdonlar ko‘zni qamashtiradi.
Ko‘zoynakli kishi qo‘liga qadah olib o‘rnidan turdi.Rasimbey shaniga qutlov so‘zi aytib, uni yuqori lavozim - shahar hokimi etib saylangani bilan tabriklarkan, shunday dedi:
- Janoblar, huzurimizda noyob aqlu zakovot sohibi turibdi!Bu - ulug‘ shaxs. Bu – kamyob inson! Uning beqiyos iste’dodi tufayli bizning shahrimiz qisqa bir fursatda...
Rasimbey darg‘azab bo‘ldi, namoyishkorona ziyofatni tark etdi.
- Ehtimol bu ularga saboq bo‘lar!- deb o‘yladi u.
Ertasi kuni u ishga ketayotib ko‘chadagi bayramona tantanani ko‘rib qoldi.Uning uyidan to shahar hokimligigacha gilamdan poyondoz to‘shalgandi.Karnay, surnay va do‘mbiralar jo‘rligida o‘yin-kulgi qilishardi.Chor atrof dafna yaproqlari bilan bezatilgan.Yo‘laklarda o‘quvchilar saf tortgan.Rasimbey ko‘rinishi hamon qarsaklar chalinadi va «Yashasin hokimimiz!» degan xitoblar yangraydi
Yoshgina bir yigit do‘mbirachining qulog‘iga qichqiradi:
- Dadilroq, dadilroq chal!
Bolalarni ham shig‘ab qo‘yadi:
- Qattiqroq , qattiqroq qichqiringlar!
Rasimbeyning oyoqlari ostida qo‘ylar qurbonlikka so‘yildi.Shahar hokimligi binosi peshtoqida dafna yaproqlari bilan bezatilgan shunday shior osilgandi: «Yangi hokimning umri boqiy bo‘lsin!»
Minbarni bor soxt-sumbati bilan egallab olgan semiz kishi shunday qichqirardi:
- Yangi hokimimiz hamshaharlarimiz qalbini o‘zining ishchanligi, adolatparvarligi, oliyjanobligi bilan zabt etdi.
Darg‘azab Rasimbey oldinga tashlanadi, semizning qo‘lidan ma’ruza matnini tortib olib, yirtib tashlaydi.
- Menga bunaqa paxta qo‘yishlar kerak emas!- deb na’ra tortadi.
-Vatandoshlar!- dedi bunga javoban sepkilli yigit.- Siz umringizda shunaqa kamtarin insonni ko‘rganmisiz? Yashasin yangi hokimimiz!
-Yashasin! Yasha- sin!
Gulduros qarsaklar yangradi.Boyoqish Rasimbey xuddi do‘ldan qochgandek ma’muriyat binosiga o‘zini urib yashirindi.Qabulxona hokimni tabriklash uchun kelganlar bilan gavjum edi.
- Buyursinlar!- yoshgina yigit qo‘l qovushtirib, buyruqqa mahtal turardi.
- Hech kim Sizchalik o‘z ishiga bu qadar yuksak mas’uliyat bilan yondoshmagan!- dedi qotma chol.
- Xudo haqqi qasam ichib aytamanki, men iste’foga chiqib ketaman!- achchig‘landi Rasimbey.- Ko‘zimdan yo‘qolinglar!
Tashrif buyurganlar qo‘rqa-pisa tashqariga chog‘lanishdi:
- Bir og‘iz so‘zingiz!
- Xizmatingizga muntazirmiz! Har qanday buyrug‘ingizni bajargaymiz.
Rasimbey chor-nochor ux tortdi: «Yo olloh!»
- Damingizni oling, afandim!- g‘amxo‘rlik bilan maslahat berdi sepkilli kishi.
- Ketinglar!- qichqirdi hokim.
Ishlashga imkon yo‘q edi.Rasimbey ko‘chaga chiqdi.
- Chetlaninglar! Hokim kelmoqda!- qandaydir bir yosh yigit yo‘lovchilarni tarqata boshladi.
Rasimbey ming mashaqqat bilan uyiga yetib oldi. Shu kuni u hech qayoqqa bormadi.Ertasi kuni u shaharda chiqadigan ikkita gazetadan keltirishni so‘radi.Bu gazetalar birinchi sahifalarida uning yirik fotosuratini bosib chiqargandi.Ulardan birida shunday tagso‘z bitilgandi: «Hamyurtlar faxrlanadigan buyuk zakovot egasi», boshqasida esa « Jahondagi eng ishchan hokim» deb yozilgandi.
Oqshomda uyiga kelishdi:
- Janoblariga qay biri ma’qul – raqqosalar uyingizga kelishsinmi yoki kazinoga o‘zlari tashrif buyuradilarmi?
-O‘zim boraman,- dedi Rasimbey.
- Biz hokimimiz bilan bir havodan nafas olayotganimizdan benihoya faxrlanamiz,- dedi kazinodagi yosh notiq yigit. U yarim soat nutq irod qildi. Rasimbey uning so‘zini bo‘lmadi.
Notiqdan keyin ko‘zoynakli odam so‘z oldi.
- Bizning hokimimiz oliyjanoblikning yorqin timsoli ekanligidan mamnunmiz!
... Oradan bir yil o‘tdi.Ko‘zoynakli odam, semiz kishi va qotma chol o‘zaro gurunglashishardi.
-Biz u bilan hech narsaga erisholmaymiz! Axir jinni bilan bir ish qilib bo‘ladimi?!
- Ha, ha, u - g‘irt jinni!
- U oldingilardan ham battar ekan.Hokim emas, boshimizga bitgan bir balo bo‘ldi.
- Xuddi tog‘ni talqon qigandek maqtanishini aytsangchi.
- Go‘yo o‘zidan boshqa bu dunyoda hech kim yo‘qdek.
- Buyuklik kasalining o‘zginasi!
- Tutqanog‘i ham bor.Ular asli shunaqa bo‘ladi, men aniq bilaman.
- Endi uni nima qilsak ekan? Nahotki yangi saylovgacha chidab yursak?
- Qanaqasiga chidashimiz kerak ekan?Uning joyi – jinnixona.O‘z uyida muzey ochganiga o‘lasanmi? Maydonda haykalini o‘rnatishga qaror qilganichi!
-Kecha qabuliga iltimos bilan kelgan bir odamning yuziga tufladi.
-O‘tgan tuni stolda qip-yalong‘och raqsga tushibdi.
-Nima qilsak ekan?
-Do‘xtirdan jinniligi haqida ma’lumotnoma olib, jinnixonaga tiqib qo‘yish kerak.
-Vaqtni boy bermaylik,- dedi ko‘zoynakli xursand bo‘lib.- Xudo ko‘rsatmasin yana birontasiga tashlanib qolsa...
-To‘ppa-to‘g‘ri!
-Ertalab, tong saharda qo‘l-oyog‘ini bog‘lab, jinnixonaga eltamiz.Shundan keyin yangi saylovni belgilaymiz.
-Juda soz! Darvoqe, endi kimni hokim qilamiz*
-O-o, endi ehtiyot bo‘lamiz! Bu gal aqli hushi joyida bo‘lgan odamni saylashimiz kerak.
-Ha, ha... biz bunaqa jinnilardan rosa to‘ydik!..


  `.trim(),
    },

// 23) Bola o‘zini “katta” deb his qilishi nimada aks etgan?
    // 23
    {
        "id": 23,
        "questionText": "Asar nomi orqali qanday badiiy maqsad ifoda etilgan?",
        "questionType": "multiple_choice",
        "options": [
            "Jamiyatdagi mansab uchun kurash jarayonini oddiy hayotiy voqea sifatida ko‘rsatish uchun shunday nomlangan.",
            "Hokimlik lavozimi odamni asta-sekin maqtov, xushomad va yolg‘on ulug‘lashlar orqali aqlan izdan chiqarishini kinoya va hajv yo‘li bilan ochib berish uchun shunday nomlangan.",
            "Asarda faqat ruhiy kasalliklar tibbiy jihatdan yoritilgani sababli shu nom tanlangan.",
            "Asar nomi voqealarga bevosita aloqasi bo‘lmagan holda berilgan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 24,
        "questionText": "Rasimbey obraziga mos ta’rif berilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Mansabni qo‘lga kiritish uchun har qanday hiylaga tayyor, xushomadni yoqtiradigan shaxs.",
            "Hokim bo‘lishni istamagan, soddadil va halollikni talab qilgan, biroq atrofdagilarning yolg‘on ulug‘lashlari ta’sirida asta-sekin izdan chiqqan inson.",
            "Hokimlikni boshidan maqsad qilib qo‘ygan, o‘zini buyuk shaxs deb bilgan kishi.",
            "Jamiyatdan uzilgan, odamlar bilan muomala qilmaydigan sovuqqon shaxs."
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 25,
        "questionText": "Asarda odamlarning Rasimbeyni haddan tashqari maqtashi qanday badiiy vazifani bajaradi?",
        "questionType": "multiple_choice",
        "options": [
            "Hokimning chinakam buyukligini tasdiqlash uchun xizmat qiladi.",
            "Jamiyatdagi samimiy hurmatning ifodasi sifatida beriladi.",
            "Mansab atrofida xushomad va yolg‘on ulug‘lash insonni ruhiy buzilish sari yetaklashini ochib beruvchi hajviy vosita bo‘lib xizmat qiladi.",
            "Voqealarga bayramona ruh bag‘ishlash uchun qo‘llanadi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 26,
        "questionText": "Rasimbeyning ziyofat va tantanalardan g‘azablanib chiqib ketishi nimani anglatadi?",
        "questionType": "multiple_choice",
        "options": [
            "Uning hokimlikdan darhol voz kechishga qaror qilganini bildiradi.",
            "Xalqni mensimaslik kayfiyatining kuchayganini ko‘rsatadi.",
            "Ichki norozilik va halollik bilan mansab atrofidagi soxtalik o‘rtasidagi ziddiyatni ifodalaydi.",
            "U atrofdagilarni sinash uchun ataylab shunday qilganini bildiradi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 27,
        "questionText": "Asarning yakunida Rasimbeyni “jinni” deb baholashlarining asosiy badiiy mazmuni nima?",
        "questionType": "multiple_choice",
        "options": [
            "Qahramonning tug‘ma ruhiy kasalligi borligini ko‘rsatish.",
            "Hokim bo‘lish bilan odam tabiatan yomonlashishini ilmiy isbotlash.",
            "Xushomad va yolg‘on ulug‘lashlar orqali o‘zlari yaratgan muhit oqibatida buzilgan odamni yana jamiyatning o‘zi ayblashini fosh etish.",
            "Hikoyani keskin yakun bilan tugatish uchun ishlatilgan vosita."
        ],
        "correctAnswer": "C",
        "points": 1.7
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

1. Qatiq dardim zuloli ashk etar fosh, 
Suzuk¹ su ichra qolmas yashurun tosh.

2. Halokim vasl aro mingdin bir etting Ki, bergay
Tengri bir yoshinggʻa ming yosh.

3. Demakka fitna ta'limin boʻlub xam², 
Qulog'ing sari bosh eltiptur ul qosh.

4. Magar sochingni tiyding fitnadinkim,
Parishonhol ayogʻingg'a qoʻyar bosh.

5. Yasar chog'da labing rangini go'yo 
Eziptur obi hayvon³ birla naqqosh.

6.Qadah, ey mug'kis, jon aylay nisoring, 
Necha bo'lsam xarobot ichra qallosh7.

7.Navoiy joni sensiz dardisardur, Borurda ani ham olg'ay eding kosh.\n\

LUG‘AT:
 Tamanno qilih – orzu qilish, bayt ul-hazan – g’am uyi
  `.trim(),
    }
    ,

    // 28–32: savollar (g‘azal bo‘yicha)
    // 28
    {
        "id": 28,
        "questionText": "G'azal matla'si haqidagi NOTO'G'RI hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Oshiq dardlarini oshkor qiluvchi koʻzyoshlarini zilol suvga qiyoslagan.",
            "Oshiq zilol suvdagi qattiq toshlarni ko'rib dardmand bo'lishi aks etgan.",
            "Oshiqning qattiq kasalmand ekanligi tasvirlangan.",
            "Oshiqning dardlari tiniq suvda ko'rinadigan toshga qiyos etilgan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 29,
        "questionText": "2-bayt mazmunida AKS ETMAGAN fikrni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Agar oshiq yor visoliga yetsa, Tangri uning bir yoshiga ming yosh qo'shib berishi tasvirlangan.",
            "Oshiq yor vasliga yetishish qiyinligini bilsa-da, undan norozi emasligi aks etgan.",
            "Oshiq yor vasliga yetishi qiyin bo'lsa-da, Tangridan yori yoshiga yana yosh qo'shishini so'ragan.",
            "Oshiqning yor visoliga yetishi juda ham qiyinlashganligi aks etgan."
        ],
        "correctAnswer": "A",
        "points": 1.7
    },
    {
        "id": 30,
        "questionText": "Quyida berilgan she'riy san'atlardan qaysi biri g'azalda aks etmagan?",
        "questionType": "multiple_choice",
        "options": [
            "3 va 4-baytlarda husni ta'lil she'riy san'ati qo'llangan.",
            "5-baytda istiora she'riy san'ati qo'llangan.",
            "1 va 2-baytlarda tazod she'riy san'ati qo'llangan.",
            "6-baytda talmeh she'riy san'ati qo'llangan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 31,
        "questionText": "6-bayt mazmuni TO'G'RI izohlangan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Xarobot ichra qolgan oshiqning may quyuvchi joniga zidlanganligi tasvirlangan.",
            "Oshiq xarobot ahli ichida e'tiborsiz qolsa, o'z joniga qasd qilishga ham tayyorligini may quyuvchiga bayon qilgan.",
            "Mayxonada boʻlgan oshiqlar arzimagan, keraksiz narsalar uchun ham o'z jonlarini berishga tayyor ekanliklari aks etgan.",
            "Mayxona ichra faqir bo'lib yurgan oshiqning qadahda may tutgan may quyuvchi uchun jonini nisor qilishga tayyorligi bayon etilgan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 32,
        "questionText": "G'azal mazmunida aks etmagan XATO hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Navoiy (oshiq)ning joni yorsiz bir dardisarligi yor ketar chog'ida uning bu jonini ham olib ketishini istashi aks etgan.",
            "Yaratguvchi naqqosh yor labining rangini yaratadigan chog'ida go'yoki tiriklik suvi bilan ishlov berganga o'xshatilgan.",
            "Yorning qoshi va qulog'i oʻzaro til biriktirib, fitna qilish uchun bir-biri tomon yaqinlashganligi aks etgan.",
            "Yorning sochi fitnadan tiyilganligi uchun u parishonhol bir tarzda oyog'iga bosh qo'yganligi tasvirlangan."
        ],
        "correctAnswer": "C",
        "points": 1.7
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
        "questionText": "Gaplar (33, 34, 35) va sintaktik tahlilga oid izohlar (A–F)ni o‘zaro to‘g‘ri moslashtiring.",
        "questionType": "match_table",
        "match": {
            "left": [
                {
                    "key": "33",
                    "text": "\"Polvon ishlaydigan joyni ko'rsatib qo'ymaysanmi?\" dedi Ummatali."
                },
                {
                    "key": "34",
                    "text": "- Menga shu yer yoqadi. Maqtanyapti demang.\n- Haqiqatdan ham. U yoqimli edi."
                },
                {
                    "key": "35",
                    "text": "\"Olim bo'lsang, olam seniki\", - deb ko'p marta aytishadi."
                }
            ],
            "right": [
                { "key": "A", "text": "ritorik so'roq gap" },
                { "key": "B", "text": "to'liqsiz gap" },
                { "key": "C", "text": "so'z-gap" },
                { "key": "D", "text": "kiritmali gap" },
                { "key": "E", "text": "undalmali gap" },
                { "key": "F", "text": "shaxsi (egasi) umumlashgan gap" }
            ]
        },
        "options": [
            "33–A, 34–C, 35–F",
            "33–B, 34–C, 35–A",
            "33–A, 34–D, 35–F",
            "33–E, 34–C, 35–F"
        ],
        "correctAnswer": "A",
        "points": 2.5
    }
    ,

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
        "questionText": "Ajratib koʻrsatilgan soʻzlarning barchasiga sinonim boʻladigan soʻzni yozing.",
        "imageUrl": "/images/q36-diagram.png",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLAR BILAN YOZISHINGIZ SHART",
                "multiline": false,
                "correct": "QIYIN"
            }
        ],
        "points": 1.1
    },
        {
            "id": 37,
            "questionType": "structured",
            "questionText": "Berilgan gapdagi tinish belgisi bilan bogʻliq xatolikni aniqlang va toʻgʻrilang.\n\n“Ma'naviyatni tushunish, anglash uchun, avvalo, insonni tushunish, anglash kerak\", deyiladi \"Yuksak ma'naviyat, yengilmas kuch\" asarida.\n\n",
            "parts": [
                {
                    "key": "a",
                    "label": "Xato qoʻllangan tinish belgisi va uning oʻrniga qoʻllanadigan toʻgʻri tinish belgisini quyidagi tartibda yozing: [Xato tinish belgisi| ---> | Toʻgʻri tinish belgisi]:",
                    "placeholder": "masalan: . ---> ?",
                    "multiline": false,
                    "correct": ", ---> --"
                }
            ],
            "points": 1.1
        },
        {
            "id": 38,
            "questionType": "structured",
            "questionText": "Berilgan parchadagi uslubiy xatolikni yuzaga keltirgan qoʻshimchani aniqlang.\n\nMasturaning oʻlimiga taslim boʻlmaydigan umidi va hazil-mutoyibasi, shuningdek Akramjonning vafodorliligi Mirrahimovda ichki larzani uygʻotib, uni oʻziga qaytardi.\n\n",
            "parts": [
                {
                    "key": "a",
                    "label": "Javob:",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "VAFODORLIGI"
                }
            ],
            "points": 1.1
        },
        {
            "id": 39,
            "questionType": "structured",
            "questionText": "Berilgan parchada tinish belgisi bilan ajratilishi kerak boʻlgan ajratilgan boʻlakni aniqlang.\n\nVatan deb yonar yurak,\nKoʻnglimda bir tuygʻu bor sadoqat\nShu tuygʻu bilan inson\nTogʻlarni ham oshar, elga xizmat.\n\n",
            "parts": [
                {
                    "key": "a",
                    "label": "Ajratilgan boʻlak vazifasida kelib, tinish belgilari tushirib qoldirilgan soʻzni javoblar varaqasiga koʻchiring.",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "SADOQAT"
                }
            ],
            "points": 1.1
        },
        {
            "id": 40,
            "questionType": "structured",
            "questionText": "Gapdagi soʻzlarning mazmun va grammatik jihatdan bogʻlanishini tahlil qiling.\n\nShahar chetida yashab, el ogʻrigʻini yuragida koʻtargan Miryoqub koʻnglida umidni va iztirobni birday asrab yurardi.",
            "parts": [
                {
                    "key": "a",
                    "label": "Gapda ajratib koʻrsatilgan soʻz tobelanib bogʻlangan soʻzni yozing.",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "ASRAB YURARDI"
                },
                {
                    "key": "b",
                    "label": " Gapda ajratib koʻrsatilgan soʻz bilan teng munosabatda bogʻlangan soʻz yozing.",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "IZTIROBNI"
                }
            ],
            "points": 1.1
        },
        {
            "id": 41,
            "questionType": "structured",
            "questionText": "Berilgan sodda gaplarni grammatik jihatdan bogʻlang.\n\nShirin soʻz insonlar yuragidan oson joy oladi\nAchchiq soʻz quloqdan osongina oʻtib ketadi.",
            "parts": [
                {
                    "key": "a",
                    "label": " Sodda gaplarni bogʻlovchi grammatik vositani yozing.",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "ESA"
                },
                {
                    "key": "b",
                    "label": "Ushbu grammatik vosita qanday mazmun ifodalagan?",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "QIYOSLASH"
                }
            ],
            "points": 1.1
        },
        {
            "id": 42,
            "questionType": "structured",
            "questionText": "Sheʼriy parchada ishtirok etgan badiiy sanʼatlar haqidagi topshiriqlarni bajaring.\n\nXayolinggʼa koʻngulda jon berurmen,\nAziz tuhfa erur mehmongʻa loyiq.",
            "parts": [
                {
                    "key": "a",
                    "label": "Birinchi baytda alohida ajratib koʻrsatilgan misra yordamida hosil qilingan badiiy sanʼatni aniqlang.",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "TAMSIL"
                },
                {
                    "key": "b",
                    "label": "Mazkur badiiy sanʼatning tarifini yozing.",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "HAYOTIY MISOL KELTIRISH"
                }
            ],
            "points": 1.1
        },
        {
            "id": 43,
            "questionType": "structured",
            "questionText": "Sheʼriy parchaning qofiyasini tahlil qiling va yozing.\n\nNecha yil ilm-hunar payida bo'ldik,\nNecha yil zar-zevar payida bo'ldik,\nOlam sirlaridan bo'lganda ogoh—\nBori ishni tashlab Qalandar bo'ldik.",
            "parts": [
                {
                    "key": "a",
                    "label": "Parchada qofiyadosh so‘zlardagi raviyni yozing.",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "R"
                },
                {
                    "key": "b",
                    "label": "Parchada raviyning o‘rniga ko‘ra qofiyaning qaysi turi hosil bo‘lgan?",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "MUQAYYAD"
                }
            ],
            "points": 1.1
        },
        {
            "id": 44,
            "questionType": "structured",
            "questionText": "Quyidagi parcha mazmunini tahlil qiling va savollarga javob yozing.\n\nEyki, dafin ganj uza sen ajdaho,\nAnglaki, bu ganjing erur xunbaho.\nQatlinga Bahromi falak nogihon,\nTig‘ chekib olg‘usi ganji nihon.\nZulm ila qoning oqizib ranj aro,\nLa’li ravon qo‘yg‘usi ul ganj aro.",
            "parts": [
                {
                    "key": "a",
                    "label": " Ajdaho timsoli orqali qanday kishilar tasvirlangan?",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "OCHKO'Z"
                },
                {
                    "key": "b",
                    "label": "Bahromi falak deganda nima nazarda tutilgan?",
                    "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                    "multiline": false,
                    "correct": "O'LIM"
                }
            ],
            "points": 1.1
        },


    // 45) ESSE — long-form writing (textarea is rendered by QuestionRenderer)
    {
        "id": 45,
        "questionType": "essay",
        "questionText": [
            "ESSE"
        ].join("\n"),
        "points": 0
    }
];
