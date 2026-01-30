// app/exam/questions.ts
import type {Question} from "@/types";

export const QUESTIONS: Question[] = [
    // 1
    {
        id: 1,
        questionText: "Imlo jihatdan to‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
        questionType: "multiple_choice",
        options: [
            "yengil-yelpi, saranjom-sarishta, har-xil",
            "qop-qora, ko‘p-marta, yengil-yelpi",
            "yengil-yelpi, saranjom-sarishta, qop-qora",
            "saranjom-sarishta, bir-necha, qop-qora"
        ],
        correctAnswer: "C",
        points: 1.7
    },

// 2
    {
        "id": 2,
        "questionText": "Quyida berilgan matnda IMLOVIY XATOLIKNING qaysi turlari kuzatilgan?\n\nBugungi kunda sog‘lom turmush tarzini targ‘ib qilish masalasi dolzarb bo‘lib bormoqda. Shifokorlar ta’kidlashicha, muntazam jismoniy faollik yurakqon tomir tizimini mustahkamlaydi, stressni kamaytiradi va uyqu sifatini yaxshilaydi. Shu bois ko‘pchilik ertalabki badantarbiyani odat qilishga urinadi, ammo ba’zan noto‘g‘ri ovqatlanish hamda vaqtni rejalashtirmaslik bu niyatni sustlashtiradi. Shuningdek, toshkent shahar bo‘ylab o‘tkaziladigan ommaviy yugurish tadbirlariga qiziqish ortib borayotgani quvonarli, chunki bunday tadbirlar insonlarni birlashtiradi va motivatsiya beradi. Mutaxassislar esa kun davomida har qanday qulay fursatda kamida 20–30 daqiqa piyoda yurishni tavsiya etadilar.\n\n1. Unli va undosh bilan yozish imlosiga oid\n2. Asos va qo‘shimchalar imlosiga oid\n3. Bosh harf bilan yozish imlosiga oid\n4. Qo‘shib yoki ajratib yozish imlosiga oid",
        "questionType": "multiple_choice",
        "options": [
            "3 va 4",
            "1 va 3",
            "2 va 3",
            "2 va 4"
        ],
        "correctAnswer": "A",
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
        "questionText": "Nutqda o‘zaro sinonimlik hosil qila oluvchi so‘zlar qatorini aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "mashaqqat — azob — uqubat",
            "mard — qo‘rqoq — jasur",
            "sahifa — daftar — varaq",
            "sharq — mashriq — farang"
        ],
        "correctAnswer": "A",
        "points": 1.7,
    }
    ,

    // 4
    // 4 (diagram MCQ)
    {
        "id": 4,
        "questionText": "Berilgan so‘zlar va ularning ma’nolari xato izohlangan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Yulduz — osmon jismlaridan biri; tunda yorug‘ ko‘rinadigan katta gaz sharidir.",
            "Yelkan — kema yoki qayiqni shamol kuchi bilan harakatlantiruvchi mato qismi.",
            "Yog‘du — yorug‘lik, shu’la, nur.",
            "Yomg‘ir — atmosferadagi muz bo‘laklarining yerga qattiq holda tushishi."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },


    // 5 (“Ayon”) — plain MCQ with textual diagram labels in the stem
    {
        "id": 5,
        "questionText": "“Kalit” so‘zining ma’nolari to‘g‘ri izohlangan javobni aniqlang.\n\n 1)kalit (ot)\n\n 2)Shakldoshining sinonimi: yechim\n\n 3)Sinonimi: qulf ochqich\n\n 4)Antonimi: qulf\n\n 5)Ko‘chma ma’nosi: muammoning kaliti (yechim, yo‘l)",
        "questionType": "multiple_choice",
        "options": [
            "faqat 1",
            "2, 4",
            "faqat 2",
            "1, 3"
        ],
        "correctAnswer": "B",
        "points": 1.7
    },

    // 6
    {
        "id": 6,
        "questionText": "Qaysi javobda qo‘shimcha qo‘llash bilan bog‘liq uslubiy xatolik mavjud?",
        "questionType": "multiple_choice",
        "options": [
            "Qat’iyatli inson sinovdan cho‘chimaydi, chunki u natijaga mehnat bilan erishadi.",
            "Majlis yakunida kotib bayonnomani rasmiylashtirdi va ishtirokchilarga nusxa tarqatdi.",
            "Ustoz shogirdining xatosini ko‘rsatdi, so‘ng uni qanday tuzatishni batafsil tushuntirdi.",
            "Jamoa a’zolari rahbar topshirig‘ini do‘stlarning iltimos qilishlarigacha cho‘zib yubormaslikka kelishdi."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,


    // 7 (match-table)
    {
        "id": 7,
        "questionText": "–gacha qo‘shimchasi haqidagi to‘g‘ri ma’lumotlarni topib moslashtiring.\n\nA) Vaqt\nB) Masofa/makon\nC) Miqdor\nD) Daraja/holat\n\n1. Dars soat beshgacha davom etadi.\n2. Biz metro bekatigacha piyoda bordik.\n3. Bu aksiya faqat yuz ming so‘mgacha amal qiladi.\n4. U kulib yuborgancha, hech kim gapning tagiga yetmadi.\n5. Bugun kechgacha shu yerda bo‘laman.",
        "questionType": "multiple_choice",
        "options": [
            "a–1,5; b–2; c–3; d–4",
            "a–1; b–2,5; c–3; d–4",
            "a–5; b–1,2; c–3; d–4",
            "a–1,2; b–5; c–3; d–4"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,
    // 8) Har uchala parchada ham ishtirok etgan fe'l shakllari
    {
        "id": 8,
        "questionText": "Har uchala parchada ham ishtirok etgan fe’l shakllarini aniqlang.\n\nI. U eshikni sekin ochib, ichkariga kirar ekan, hech kimga bildirmay chetga o‘tib oldi.\nII. Ko‘ngli to‘lmay qolsa, u jim turib, bir muddat hammani kuzatib o‘tirar edi.\nIII. U yo‘lga chiqishdan oldin bir zum to‘xtab, atrofga qarab, keyin yana tez yurib ketdi.\n\nFe’l shakllari:\n\n1) sodda yasama fe’l\n2) ravishdosh\n3) shart mayli shaklidagi fe’l\n4) qo‘shma fe’l\n5) o‘zlik nisbatdagi fe’l\n6) o‘timli va o‘timsiz fe’llar",
        "questionType": "multiple_choice",
        "options": [
            "4 va 6",
            "2 va 6",
            "1 va 5",
            "3 va 4"
        ],
        "correctAnswer": "B",
        "points": 2.5
    }
    ,
    // 9) Otlar haqidagi to‘g‘ri ma’lumot
    {
        "id": 9,
        "questionText": "“Mehnatkash odamlarni qadrlang: ular shovqin solmaydilar, maqtanmaydilar, ammo ularning tinmay qilgan sa’y-harakatlari tufayli, afsuski, ishlar baribir izga tushadi.”\n\nUshbu gapda qatnashgan mustaqil so‘zlar haqidagi qaysi ma’lumot to‘g‘ri emas?",
        "questionType": "multiple_choice",
        "options": [
            "Kesim vazifasida kelgan so'zlar faqat bir xil so'z turkumiga oid so'zlar.",
            "Sifatlovchi aniqlovchi vazifasida kelgan qo‘shma sifat qatnashgan.",
            "Kesim vazifasida kelgan sodda yasama fe’l qatnashgan.",
            "Juft so'z sabab holi vazifasida qo'llangan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 10) Hollar haqida to‘g‘ri ma’lumot
    {
        "id": 10,
        "questionText": "Quyidagi gap haqida berilgan to‘g‘ri hukmni toping.\n\nBugungi kunda eng katta boyligimiz — tinchlik va osoyishtalikdir, bunday ne’matni qadrlaydigan insonlar esa hamisha ko‘p bo‘lavermaydi.",
        "questionType": "multiple_choice",
        "options": [
            "Ega, aniqlovchi va holning kesimga to‘g‘ridan to‘g‘ri tobelanishi kuzatilgan.",
            "To‘ldiruvchining ikki xil ma’no turi ishtirok etgan.",
            "Ot kesim ham, fe’l kesim ham ishtirok etgan.",
            "Egalar ikki xil so‘z turkumi bilan ifodalangan."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

// 11) Mazmun va grammatik bog‘lanish
    // 11
    {
        "id": 11,
        "questionText": "Gapdagi so‘zlarning mazmun va grammatik jihatdan bog‘lanishi to‘g‘ri ko‘rsatilgan javobni aniqlang.\n\nYoshlarning bilimini mustahkamlash uchun ustozlarning tajribasi va shu tajribani amalda qo‘llash uchun samarali ta’lim muhiti zarur hisoblanadi.",
        "questionType": "multiple_choice",
        "options": [
            "zarur hisoblanadi, mustahkamlash uchun",
            "amalda qo‘llash, tajribasi va muhiti",
            "yoshlarning bilimini, ustozlarning muhit",
            "ta’lim muhiti, bilimini mustahkamlash"
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 12
    {
        "id": 12,
        "questionText": "Quyidagi qaysi gaplarda qatnashgan TIRE tinish belgisi punktuatsion qoidalarga ko‘ra bir xil vazifada qo‘llangan?\n\n1. Pulni inson beradi, barakani - Alloh.\n2. Sadoqat — insonning bezagi.\n3. “Mehnat — deydi donolar, — baxt kaliti.”\n4. Kitob — bilim manbai, ustoz — yo‘l ko‘rsatkich.\n5. Yurting tinch - sen tinch.",
        "questionType": "multiple_choice",
        "options": [
            "1 va 3",
            "2 va 4",
            "2 va 5",
            "1 va 4"
        ],
        "correctAnswer": "B",
        "points": 2.5
    }
    ,

// 13
    {
        "id": 13,
        "questionText": "“O'zbekning o'zini tanitishi uchun xizmat qiladurgan bir asar yozmoqqa niyat qildim. Zero, dunyo xalqlari orasida bizning ham tariximiz, madaniyatimiz borligini ko'rsatmoq lozimdir. Toki avlodlar o'tmishda kimlar o'tganini bilsinlar.”\n\nUshbu fikrlar muallif tomonidan o'zining qaysi shoh asari haqida aytilgan?",
        "questionType": "multiple_choice",
        "options": [
            "Abdulla Qodiriy \"Mehrobdan chayon\"",
            "Abdulla Qodiriy \"O'tkan kunlar\"",
            "Cho'lpon \"Kecha va kunduz\"",
            "Oybek \"Navoiy\""
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 14
    {
        "id": 14,
        "questionText": "Pirimqul Qodirovning \"Yulduzli tunlar\" romaniga oid to'g'ri shakllantirilgan mazmun berilgan qatorni toping.",
        "questionType": "multiple_choice",
        "options": [
            "Bobur Andijon taxtini tashlab chiqishga majbur bo'lganida, unga sadoqat ko'rsatgan yagona inson Qosimbek edi; qolgan barcha beklar uni tark etib, Shayboniyxon tomoniga o'tib ketgan edilar.",
            "Samarkand qamalida qolgan Bobur shahar xalqi ochlikdan qiynalayotganini ko'rib, o'zining sevimli oti \"Gulyori\"ni so'yib, go'shtini beva-bechoralarga tarqatishni buyuradi.",
            "Shayboniyxon shartiga ko'ra, Bobur o'z singlisi Xonzodabegimni unga qoldirib Samarqandni tark etadi; bu voqea Boburning butun umri davomidagi eng og'ir va bitmas yurak yarasiga aylanadi.",
            "Hindiston safari oldidan Bobur o'zining \"Baburnoma\" asarini yakunlaydi va uni o'g'li Humoyunga topshirib, saltanatni adolat bilan boshqarishni vasiyat qiladi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

// 15
    {
        "id": 15,
        "questionText": "“Sarvqomat dilbarim” qissasidagi voqealar rivojiga oid to'g'ri hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Ilyos o'zining \"Dovon\"ni zabt etish haqidagi o'ylamasdan qilgan harakati va xiyonati tufayli nafaqat sevgilisidan, balki o'zining qadrdon do'sti Alibekdan ham butunlay yuz o'giradi.",
            "Asel Ilyosning xiyonatini bilganidan so'ng, uni kechiradi va o'g'li Samatning kelajagi uchun u bilan birga qolishga qaror qiladi, biroq Ilyos o'z aybi bilan oilani tark etadi.",
            "Qissa qahramoni Ilyos uzoq ayriliqdan so'ng Asel bilan uchrashganida, Aselning boshqa insonga (Boytemirga) turmushga chiqqanini va o'g'li Samat uni \"ota\" deb chaqirayotganini ko'rib, o'z baxtini qo'ldan boy berganini anglaydi.",
            "Boytemir Ilyosni ko'rgan zahoti uni tanib oladi va Aselni qaytarib berishini aytadi, chunki u Asel hamon Ilyosni sevishini yaxshi bilar edi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

// 16
    {
        "id": 16,
        "questionText": "“Chinor” romani qahramonlari haqida to'g'ri ko'rsatilgan javoblarni aniqlang:\n\n1) Erkin — Ochil buvaning nabirasi, u bobosining o'gitlariga qarshi chiqadi va shaharga ketib, o'z ildizlaridan butunlay uzilib ketadi.\n\n2) Bektemir — Tog'-kon ishchisi, og'ir mehnat sharoitida ham o'z insoniy g'ururini saqlab qolgan, \"Chinor\"ning baquvvat shoxlaridan birini ifodalovchi qahramon.\n\n3) Saodat — Ishq-muhabbatda sadoqatli, hayotning qiyinchiliklariga qaramay o'z pokligini saqlab qolgan, ayol matonati timsoli.",
        "questionType": "multiple_choice",
        "options": [
            "1, 2",
            "2, 3",
            "1, 3",
            "barchasi to'g'ri"
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 17
    {
        "id": 17,
        "questionText": "Mirmuhsinning \"Me'mor\" romaniga oid to'g'ri shakllantirilgan mazmun berilgan qatorni toping.",
        "questionType": "multiple_choice",
        "options": [
            "Najmiddin Buxoriy o'zining shogirdi va o'g'li bo'lmish Musoni Samarqanddagi Bibixonim masjidi qurilishiga yuborar ekan, unga faqat mahoratni emas, balki binoga jon bag'ishlaydigan \"ishq\"ni ham o'rganishni vasiyat qiladi.",
            "Romanda tasvirlanishicha, me'mor Najmiddin Buxoriy kofirlar hujumi paytida o'zining so'nggi asari — \"Kalon\" minorasini dushmanlardan himoya qilib, minora poyida mardona halok bo'ladi.",
            "Muso o'zining ustozi va otasining chizmalarini o'g'irlab, begona yurtda shuhrat qozonishni ko'zlaydi, biroq vijdon azobi uni vataniga qaytishga va tavba qilishga majbur qiladi.",
            "Xon tomonidan ko'zlari ko'r qilingan Najmiddin Buxoriy baribir tushkunlikka tushmaydi va qorong'ulikda bo'lsa-da, faqat barmoqlari yordamida loydan muhtasham saroy maketini yasashda davom etadi."
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
            "O'rgimchaklar",
            "",
            "O’rgimchaklar ko’p odamlarda qo’rquv va fobiyani keltirib chiqarsa-da, ularning aksariyati odamlar uchun zararsizdir. Shunga qaramay, ba’zi o’rgimchaklar bilan noto’g’ri “muloqot qilish” inson salomatligi uchun tahdid solishi mumkin. Yer yuzida ma’lum bo’lgan 43 000 xil o’rgimchak 6urning deyarli hammasida zaharli bezlar mavjud. Ular bu bezlardan o’ljasini harakatsizlantirish va hazm qilish uchun foydalanadi. Zahar boshning old qismida joylashgan xelitser - kichik ilgakka o’xshash tuzilmalar yordamida yuboriladi. Zahar tarkibida ovqat hazm qilish fermentlari, neyrotoksin yoki antikoagulyant kabi turli xil moddalar bo’lishi mumkin. Ular o’rgimchakka o’ljani boshqarish va osonroq so’rishga yordam beradi.O’rgimchak turlarining aksariyati odamga tajovuz qilmaydi. O’rgimchakning ayrim turlarigina o’ta xavfli hisoblanadi Bularga Atrax, Latrodestus. Phoneutria, Loxosseles deb ataluvchi o’rgimchak turlari kiradi. Mazkur ro’yxatdagi eng xavfli o’rgimchak voronkasimon Atrax o’rgimchaklari bo’lib, ular Agelenidae oilasiga mansub. Atrax o’rgimchaklari hayot uchun xavf tug’diruvchi ta’sirlarni keltirib chiqarishi mumkin. Avstraliyada yashovchi dahshatli Sidney o’rgimchagi, ya’ni Atrax robustus bunga misol bo’la oladi Uning o’ta kuchli zahari tarkibidagi neyrotoksin hayot uchun xavfli bo’lgan alomatlarni paydo qiladi. Agar zudlik bilan tibbiy yordam ko’rsatilmasa, bunday o’rgimchak kichkina bolani atigi besh daqiqada, besh yoshli bolani esa ikki soat ichida o’ldirishi mumkin. Biroq Sidney o’rgimchagi chaqishi natijasida yuzaga kelgan o’lim holatlari juda kam kuzatiladi. Masalan, Avstraliyada 1980-yillardan beri hech qanday o’lim holati qayd etilmagan.Yevropa va AQSHda yashovchi Tegenaria turiga mansub o’ rgimchaklar ham zaharining toksikligi tufayli potensial xavfli tur hisoblanadi. Ularning zahari odatda Sidney o’rgimchaklari kabi kuchli bo’lmasa- da, ba’zi o’ta sezuvchan odamlarda nojo’ya mahalliy reaksiya va boshqa tizimli alomatlarga olib kelishi mumkin. Latrodestus deb ataluvchi o’rgimchak zahari bo’g‘ma ilon zaharidan o’n besh baravar kuchliroqdir. Ammo faktlar shuni ko’rsatmoqdaki, 1980-yillarning boshidan beri bu o’rgimchaklar chaqishi natijasida hech qanday o’lim holati qayd etilmagan. O’rgimchak turlarining aksariyati odamga tajovuz qilmaydi.Braziliyadagi Phoneutria o’rgimchaklari barcha o’rgimchak turlari ichida nevrologik jihatdan o’ta faol zaharga egaligi bilan ajralib turadi. Ammo uning zahari tanaga juda sekin tarqalgani uchun tibbiy yordam xodimlari jarohatlangan insonga yordam ko’rsatish uchun yetarlicha vaqtga ega. Eng xavfli Loxosceles reslusa deb ataluvchi o’rgimchak turini, asosan, AQSHda uchratish mumkin. Uning zahari ogriq va isitmani keltirib chiqarish ehtimoli mavjud. Zahar hatto arteriya va tomirlarga ham ta’sir ko`rsatib, zararlangan to’qimalar nekrozi va turli infeksion kasalliklarga olib kelishi mumkin. Biroq bu o’gimchak chaqishi juda kam hollardagina o’limga sabab bo’ladi"
        ].join("\n"),
    },

    // 18) VIRUSLAR – mos bo‘lmagan ma'lumot
    // 18
    {
        "id": 18,
        "questionText": "Quyidagi qaysi ma’lumot matnda aks etgan?",
        "questionType": "multiple_choice",
        "options": [
            "hazm qilish fermentlari tarkidagi zahar bezlari o’ljani yaxshi hazm qilishga yordam beradi.",
            "XIX asrning oxirgi choragidan buyon o’rgimchak zaharida zaharlanib o’lish holatlari deyarli kuzatilmagan",
            "Latrodestus o’rgimchaklarining zahari zaharli ilonlar zaharidan ham kuchli hiosblanadi.",
            "nevrologik jihatdan kuchli zaharga ega bo’lgan o’rgamchakning zahar inson tanasiga sekinlik bilan tarqaladi."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 19,
        "questionText": "Atrax turiga mansub o’rgimchaklar haqida TO’G’RI ma’lumotni toping?",
        "questionType": "multiple_choice",
        "options": [
            "bu o’rgimchakni AQSHda uchratamiz.",
            "mahalliy reaksiyalarni vujudga keltiradi.",
            "bu turga kiruvchi o’rgimchak zahari tarkibidagi modda inson hayoti uchun xavli bo’lgan belgilarni paydo qiladi.",
            "bu turga kiruvch o’rgimchaklar tarkibidagi zahar moddasi to’qimlarning nekroz holatini keltirib chiqaradi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 20,
        "questionText": "Quyidagi qaysi ma’lumot matnda TO’G’RI?",
        "questionType": "multiple_choice",
        "options": [
            "zaharining toksikligi tufayli Sindney o’rgimchagi chaqishi natijasida insonlarda o’lim holati kuzatilgan.",
            "43 000 ta o’rgimchakning barchasida zahar bezlari mavjudligi aniqlangan.",
            "Yevropa davlatlaridagi o’rgimchaklar zahari insonlar uchun xavli hisoblanadi.",
            "Atrax turiga kiruvchi o’rgimchaklardagi zahar moddasi boshqa turdagi ayrim o’rgamchaklardagidan yuqori."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 21,
        "questionText": "Quyidagi qaysi ma’lumot matnda NOTO’G’RI?",
        "questionType": "multiple_choice",
        "options": [
            "o’rgimchak tanasidagi zahar ning vazifasi o’ljasini harkatsizlantirishdan iborat.",
            "Sidney o’rgamchagi Tegenaria o’rgimchagidan zahrining kuchliligi bilan ustundir.",
            "Sidney o’rgimchagi zahari inson organizimiga sekin tarqalganligi inson hayotini asrab qolish imkoniyati yana-da oshiradi.",
            "o’rgimchakka o’ljani boshqarish va uni so’rishga zahar tarkibidagi moddalar yordam beradi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 22,
        "questionText": "Quyidagi qaysi ma’lumot barcha o’rgamchaklarga xos bo’lgan xususiyat?",
        "questionType": "multiple_choice",
        "options": [
            "o’rgimchak insonga zarar berganda darhol davolamaslik o’limga olib kelishi;",
            "o’rgimchaklarning zahri yosh bolalarga tez ta’sirini o’tkazishi;",
            "zahar bezlari o’rgimchaklar organizimida bo’lishi;",
            "o’rgimchakdan zaharlangan insonlarda infeksion kasalliklarning vujudga kelishi"
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,
    /* =========  MATN (Kattalar oqshomi) + Savollar 23–27  ========= */

// M) Reading passage (shows as “M” in the navigator)
    {
        id: 2301, // Navigator “M” sifatida ko‘rsatiladi (questionType: "passage")
        questionType: "passage",
        questionText: `
MEHROBDAN CHAYON
Qo‘rqinch bir jasorat

Shunda o‘rda arbobi bukun peshindan biroz ilgariroq mujassam bir vijdon, tog‘yurak bir yigit va o‘lim sari kulib keluvchi bir arslonni o‘z tarixida birinchi martaba ko‘rdi va tong ajabda qoldi. Bu ulug‘ jasorat bir necha daqiqalargacha zulm itlarini sukutga soldi, ularni ishdan to‘xtatdi. O‘rda arboblarining mahkamada o‘tirganlari eshik yoniga chiqib, yo‘lda borganlari harakatsiz qolib, parvosiz, har kim yonidan salomlashib o‘tguvchi arslonni tomosha qildilar.
Anvar devonxona qarshisiga yetganda, nima maqsad bilandir darichalar va eshik yonida mo‘ralashuvchi mirzolarga umumiy bir ta’zim ifoda qildi va zinalarga sobitqadam oyoq qo‘yib, yuqoriga, xon huzuriga chiqib ketdi. Poytaxt bo‘sag‘asidagi doimiy yasovullardan o‘tib, dahlizda to‘xtadi. Chunki bundan o‘tish uchun hudaychi vositasida xondan ruxsat oldirish lozimdir. Birinchi eshik yonida qo‘l qovushtirib turuvchi Darvesh hudaychi taajjub va hayrat ichida Anvarni qarshilab, ikkinchi xonadagi «janob» huzuriga ketdi.
Taxtiga takya qilgan Xudoyor ikki ko‘zi to‘g‘risida ikki jallodni qo‘yib, yonidagi domla shig‘ovul, Tursun otaliq va g‘ayri bir necha a’yonlar bilan suhbatlashar edi.
–Pushti panoho! – dedi hudaychi. – Xiyonatkor o‘z ixtiyori bilan kelib, domi adolatingizga taslim bo‘lmoqchi.
–Xiyonatkoring kim?
–Mirzo Anvar!
[1]Xon seskanib ketdi, hamnishinlari ham alang-jalang bo‘ldilar.
–Keltir!
Hudaychi qulluq qilib, orqasiga qaytdi. Dahlizdagi Anvar birinchi xonadagi a’yonni hayratga solib, ikkinchi tanobiyning bo‘sag‘asida, jallodlar o‘rtasida to‘xtadi va xonga ta’zim ado qildi. Raqibni bu qadar jasoratda ko‘rgan Xudoyorning kiprik ostlari uchib, soqol tuklari silkindi va biroz so‘z topolmagandek tamshanib turdi.
–Sen bizga xiyonat qilding, it uvli! Anvar bosh irg‘atdi.
–Iqrorman.
–Tuzumni unutding!
–Tonmayman!
–Iqrorsan, tonmaysan, o‘bdan ish, – dedi zaharxanda qilib xon, – o‘luvdan ham qaytmaysan!
–Men sizdan marhamat so‘rab kelgan emasman! – dedi iljayib Anvar. – O‘zimni o‘limga berib, bir gunohsizni qutqarish uchun kelganman!
Hamnishinlar lablarini tishladilar. Xudoyor istehzoli kuldi.
–Pusulmonchilik qilg‘onsan-da!
–Albatta! – dedi Anvar.
–Boshqalar kishi gunohi uchun gunohsizni tutib, pusulmonchilikdan chiqqach, men pusulmonlik bilan o‘lishni o‘bdan bildim!
Bu javob Xudoyorni qip-qizil tusga qo‘yib, manglayida terlar ko‘rindi, g‘azab o‘ti alanga oldi.
–Sening qilg‘on ishing pusulmonchilikda bormi, it uvli?!
–Musulmonchilikda yuzlab xotin ustiga bir kambag‘al uylanmoqchi bo‘lgan qizga ham zo‘rlik qilish bormi, qiblayi оlam!
–Chiqar buni, jallod!!! Jallodlar harakatlandilar:
–Xanjarimiz qonsirag‘an! Anvar bosh chayqab kuldi.
–Gunohsiz mening ko‘z oldimda banddan ozod qilinmas ekan, Anvarni bu yerdan chiqara olmaslar, qiblayi olam, – dedi va o‘zini tashqariga torta boshlagan jallodlarni arslonlarcha siltab yubordi.
–Sizda adolat bormi, janob!
Qo‘rqinch bu hayqiriq Xudoyorni insofga keltirdi. Jallodlarni to‘xtatishga va hudaychini Sultonalini hozirlashga buyurdi. Ko‘zi qonlangan Anvar ikki qo‘lini yoniga tashlab Xudoyor qarshisida turib qoldi. Hamma sukutda. Shunday fursatlarda gunohkorni odobsiz so‘zlar bilan so‘kib turuvchi Xudoyor ham jim. Chunki a’yon nazarida har bir odobsizligiga Anvar tarafidan kuchli haqorat olish ehtimoli bor. [2]Shayx Sa’diy aytgancha, dunyoda hayotidan qo‘l yuvguvchidek tili uzun kishi bo‘lmas. Darhaqiqat, insonni razolatga solguvchi uning manfaati taqozosi, qola bersa o‘limdir. Bu ikkisidan
kechguvchiga esa podshohning qahri va jahannamning qa’ri farqsizdir.
Ko‘p fursat o‘tmay hudaychining orqasidan Sultonali kirdi, xonga qarshi turuvchini tanib, titradi... Titrar ekan, Anvardan biroz keyinda turib xonga ta’zim qildi.
–Siz ozod bo‘ldingiz! – dedi xon. – Devong‘a chiqib o‘z ishingizg‘a qarang! Sultonali ixtiyorsizcha xon tomon bukilib oldi... Anvar «istehzoli» vaziyatda
Sultonaliga yon qaradi:
–Menim qarshimga ishlab, janobga neqadar sodiq qolsangiz ham, sadoqatingiz sizni najotga chiqara olmadi, bil’aks, siz o‘ylagancha men – insofsiz sizni qutqardim... Siz shuni unutmasangiz bo‘ldi, Sultonali aka, – dedi Anvar va xonga ishorat qildi, – qo‘limni
bog‘lasinlar, chiqarib o‘ldirsinlar!
Sultonali orqasiga qaytdi, qaytar ekan, ko‘zidan bir necha tomchi yosh oqib tushdi.
Jallodlardan biri Anvarning qo‘lini orqasiga bog‘ladi. Anvarning qo‘li bog‘lanar ekan, Muhammad Niyoz domla o‘rnidan turib, xonga qulluq qildi.
—Saltikov bilan Shchedrin-a? Kim aytdi senga?
–Shu odobsizning gunohini mening uchun kechirsinlar. Xon yuzini chetga o‘girdi:
Rastag‘a chiqaring! Anvar, xonni va hamnishinlami masxaralagandek, ta’zim ado qildi.



Izohli so'zlar:
1 Takya qilgan – suyangan
2 Shig‘оvul – sarоy marоsimlarini bоshqarib turadigan amaldоr
3 G‘ayri – bоshqa, o‘zga
4 Hamnishin – birga o‘tirganlar

  `.trim(),
    },

// 23) Bola o‘zini “katta” deb his qilishi nimada aks etgan?
    // 23
    {
        "id": 23,
        "questionText": "Matndan olingan ushbu parchani o‘qing, aslida kim kimga adolat qilganini asarning umumiy mazmunidan kelib chiqib aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Anvar Xudoyorxonga",
            "Xudoyorxon Sultonaliga",
            "Anvar Sultonaliga",
            "Xudoyorxon Anvarga"
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 24,
        "questionText": "Romandan olingan ushbu parchada Anvar nutqida “Men sizdan marhamat so‘rab kelgan emasman!” degan jumlalar tilga olinadi. Ushbu nutqiy ifoda muallifning qanday badiiy maqsadini amalga oshirishga xizmat qilgan?",
        "questionType": "multiple_choice",
        "options": [
            "Xudoyorxonning iltifot qilishidan butkul umidi uzilgan Anvarning ruhiy holatini ifodalash uchun bu nutq uning tilidan bayon etilgan.",
            "Xon o‘sha davrda hech qanday siyosiy mavqega ega bo‘lmaganini ifodalash uchun ishlatilgan.",
            "Olomon ichida Anvarning akasi va o‘rtoqlari uni qutqarish uchun shaylanib turganini, xondan marhamat so‘rashga muhtoj emasligini bildirib qo‘yish uchun ishlatilgan.",
            "Anvarning nomusi, g‘ururi naqadar yuqoriligini yanada kuchli ifodalash uchun bu nutq muallif tomonidan kiritilgan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 25,
        "questionText": "[1] raqami orqali ajratib ko‘rsatilgan qismda tasvirlangan qahramonlar nima sababdan bunday holatga tushishadi?",
        "questionType": "multiple_choice",
        "options": [
            "Anvarning kutilmagan jasorati sabab",
            "Anvardan qo‘rqqanlari uchun",
            "Xursandligi uchun",
            "O‘zlarining aybi borligi uchun"
        ],
        "correctAnswer": "A",
        "points": 1.7
    },
    {
        "id": 26,
        "questionText": "Muallif nutqida [2] raqami bilan ajratib ko‘rsatilgan gap qo‘llanishiga oid noo‘rin fikrni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Xudoyorxonning jim bo‘lishiga sababni chiroyli ifodalash uchun muallif ushbu jumlalarni ishlatgan.",
            "Anvarning ko‘zi qonga to‘lganini, xonning asl basharasini ochish, haqiqatni bayon qilish uchun hech narsadan qaytmasligini ifodalash maqsadida qo‘llangan.",
            "Ushbu gap inson o‘limi muqarrar bo‘lgan paytda dilidagi har qanday gapni tiliga chiqarishga qodirligini dalillash uchun qo‘llangan.",
            "Masala adolat masalasi bo‘lgan paytda, insonning tili faqat haqiqatni so‘zlashi kerakligini barchaga uqtirish maqsadida ishlatilgan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 27,
        "questionText": "Parchadagi Sultonali obraziga mos ta’rif berilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Xonning sodiq odami",
            "Anvardan najot kutgan obraz",
            "Anvarni qo‘lga olish uchun xon va uning odamlari tomonidan garovga olingan obraz",
            "O‘z xiyonatidan afsuslangan inson obrazi"
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

1.Jamoling vasfni qildim chamanda, 
Qizordi gul uyottin anjumanda.

2.Tamanno qilg‘ali la’lingni ko‘nglum, 
Kishi bilmas oni kim qoldi qanda.

3.Chu jonimdin aziz jonona sensan, 
Kerakmas jon manga sensiz badanda.

4.Manga ul dunyoda jannat ne hojat, 
Eshiging tuprog‘i basdur kafanda.

5.Solib borma meni, ey Yusuf husn, 
Bukun Ya’qubtek bayt ul-hazanda.

6.Uzun sochingdin uzmasmen ko‘ngulni, 
Ayog‘ing qanda bo‘lsa boshim anda.

7.Tilar el mansabi oliy, va lekin 
Atoyi [sarvi ozodingg‘a] banda.\n\

LUG‘AT:
 Tamanno qilih – orzu qilish, bayt ul-hazan – g’am uyi
  `.trim(),
    }
    ,

    // 28–32: savollar (g‘azal bo‘yicha)
    // 28
    {
        "id": 28,
        "questionText": "Ushbu g‘azal haqidagi NOTOʻG‘RI ma‘lumotni belgilang.",
        "questionType": "multiple_choice",
        "options": [
            "G‘azalning barcha baytida tazod san’atidan mahorat bilan foydalanilgan.",
            "G‘azalda Ya’qub payg‘ambarning o‘g‘lidan ayrilib iztirob chekkaniga ishora keltirilgan.",
            "G‘azalda oshiq ma’shuqaning tashqi ko‘rinishini tasvirlashda istiora san’atidan foydalangan.",
            "G‘azalda shoir o‘z yorini chiroyda Yusuf payg‘ambarga qiyoslagan."
        ],
        "correctAnswer": "A",
        "points": 1.7
    },
    {
        "id": 29,
        "questionText": "Qaysi javobda g‘azal matla’siga oid to‘g‘ri fikr berilgan.",
        "questionType": "multiple_choice",
        "options": [
            "Ushbu baytda shoir yorning sarv daraxtidek tik qomatiga o‘zining banda (qul) ekanligini, bog‘lanib qolganini aytmoqda.",
            "Ushbu baytda yorning jamoli shu darajada go‘zalligidan bog‘dagi gullar ham hijolat chekib, ma’shuqaga hasad qilishi tasvirlangan.",
            "Ushbu baytda ma’shuqa najlisga kelganda majlisdagi boshqa go‘zallarning hijolatdan qizarishi gulning qizarishiga qiyoslanmoqda.",
            "Ushbu baytda tashxis va husni ta’lil san’atlari orqali yorning go‘zalligi tasvirlangan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 30,
        "questionText": "G‘azalning 4-baytiga oid mazmun qaysi qatorda to‘g‘ri izohlangan?",
        "questionType": "multiple_choice",
        "options": [
            "Oshiqning jannatga kirish uchun yorning eshigi oldida tufroqqa aylanishga ham tayyorligi aytilmoqda.",
            "Oshiq ma’shuqasining visoliga yetishish uchun tufroqdan o‘ziga kafan qilmoqchiligi aytilmoqda.",
            "Oshiq dunyodagi jannatdan yor eshigining tufrog‘ini afzal bilmoqda.",
            "Oshiq uchun yorning kafani Jannat ekanligi aytilmoqda."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 31,
        "questionText": "G‘azalda quyidagi tasvirlarning qaysi biri BERILMAGAN?",
        "questionType": "multiple_choice",
        "options": [
            "G‘azalda yorning labi shu darajada kichikligidan uni topib bo‘lmasligi tasviri keltirilgan.",
            "G‘azalda oshiq suyuklisi tashlagan qadamga bosh urishiga tayyorligi tasviri keltirilgan.",
            "G‘azalda ma’shuqaning uzun sochi oshiqning ko‘nglini olgani tasviri ham bor.",
            "G‘azalda oshiq yoridan ayrilib qolish xavotirini Yusuf payg‘ambar o‘z o‘g‘li Ya’qub payg‘ambardan ayrilib qolgani orqali tasvirlamoqda."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 32,
        "questionText": "7-baytdagi sarvi ozodingg‘a jumlasi g‘azalda qanday ma’no anglatib kelmoqda?",
        "questionType": "multiple_choice",
        "options": [
            "xushqomat go‘zal",
            "ozod inson",
            "oshiqning qulligi",
            "qora soch"
        ],
        "correctAnswer": "A",
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
        "questionText": "Quyidagi gaplar va sintaktik tahlilga oid izohlar (A–F)ni o‘zaro to‘g‘ri moslashtiring.",
        "questionType": "match_table",
        "match": {
            "left": [
                {
                    "key": "33",
                    "text": "Uni ko‘rib, hayajondan tili kalimaga kelmay qoldi — dovdiradi."
                },
                {
                    "key": "34",
                    "text": "Erta turganga baraka beriladi, kech qolganga — malomat."
                },
                {
                    "key": "35",
                    "text": "Oh, mening so‘lim bog‘larim!"
                }
            ],
            "right": [
                { "key": "A", "text": "Atov gap." },
                { "key": "B", "text": "So‘z-gap ishtirok etgan." },
                { "key": "C", "text": "To‘liqsiz gap." },
                { "key": "D", "text": "Undalmali gap." },
                { "key": "E", "text": "Shaxsi noma’lum (shaxsi umumlashgan) gap." },
                { "key": "F", "text": "Ajratilgan bo‘lakli gap." }
            ]
        },
        "options": [
            "33–F, 34–C, 35–A",
            "33–F, 34–E, 35–D",
            "33–B, 34–C, 35–D",
            "33–E, 34–F, 35–A"
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
        "questionText": "Berilgan mazmunlarni ifodalaydigan shakldosh so‘zni yozing",
        "imageUrl": "/images/q36-diagram.png",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLAR BILAN YOZISHINGIZ SHART",
                "multiline": false,
                "correct": "YUZ"
            }
        ],
        "points": 1.1
    },
    {
        "id": 37,
        "questionType": "structured",
        "questionText": "Berilgan gapda qo‘llanishi lozim bo‘lgan tinish belgilarining to‘g‘ri ketma-ketligini yozing.\n\nBeruniy aytganidek Ona suti kabi aziz hisoblangan ona tili millatning ruhi g'ururi va ma'naviyat sarchashmasidir",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "masalan: , . ; : \ ... \ qo'shtirnoqni << >> shaklda yozing, tinish belgilari orasida bo'shliq bo'lsin",
                "multiline": false,
                "correct": ": <<  -  ,  >> ."
            }
        ],
        "points": 1.1
    },
    {
        "id": 38,
        "questionType": "structured",
        "questionText": "Har ikki kelishik shakli bilan ham ma’nodoshlik hosil qila oluvchi ko‘makchini yozing.",
        "imageUrl": "/images/q38-diagram.png",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "KO'RA"
            }
        ],
        "points": 1.1
    },
    {
        "id": 39,
        "questionType": "structured",
        "questionText": "Berilgan gapni sintaktik tahlil qiling va qaysi gap bo‘lagi uyushganini yozing.\n\nU konferensiyada ilmiy maqolani, seminarda loyiha hisobotini, yakunda esa tajriba natijalarini batafsil taqdim etdi va savollarga aniq javob berdi.",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "TO'LDIRUVCHI"
            }
        ],
        "points": 1.1
    },
    {
        "id": 40,
        "questionType": "structured",
        "questionText": "Gapdagi so‘zlarning mazmun va grammatik jihatdan bog‘lanishini tahlil qiling.\n\nYurtimizning go'zal tabiatini sevish, uni ko'z qorachig'idek «asrash» har birimizning muqaddas burchimizdir.",
        "parts": [
            {
                "key": "a",
                "label": "Gapda ajratib ko‘rsatilgan so‘z tobelanib bog‘langan so‘zni yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "BURCHIMIZDIR"
            },
            {
                "key": "b",
                "label": "Gapda ajratib ko‘rsatilgan so‘z bilan teng munosabatda bog‘langan so‘z yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "SEVISH"
            }
        ],
        "points": 1.1
    }
    ,
    {
        "id": 41,
        "questionType": "structured",
        "questionText": "Berilgan parchada yordamchi so‘zlarning grammatik vazifasini tahlil qiling.\n\nInson o‘z maqsadiga erishish uchun tinmay mehnat qilishi kerak va qiyinchiliklarga qaramasdan olg‘a intilishi lozim.",
        "parts": [
            {
                "key": "a",
                "label": "Parchadagi qaysi yordamchi so‘z bir gap bo‘lagini boshqasiga tobelantirib bog‘lash uchun xizmat qilgan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "UCHUN"
            },
            {
                "key": "b",
                "label": "Parchadagi qaysi yordamchi so‘z bir sodda gapni boshqasiga bog‘lash uchun xizmat qilgan?",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "VA"
            }
        ],
        "points": 1.1
    }
    ,
    {
        "id": 42,
        "questionType": "structured",
        "questionText": "She’riy parchada ishtirok etgan badiiy san’atlar haqidagi topshiriqlarni bajaring.\n\nAshraqat min aksi shamsil-ka'si anvorul -hudo\n\"Yor aksin mayda ko'r \" deb jomdin chiqti sado",
        "parts": [
            {
                "key": "a",
                "label": "Ikkinchi  misrada ta'sirchanlikni oshirgan  badiiy san’atni aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "INTOQ"
            },
            {
                "key": "b",
                "label": "Mazkur badiiy san’atning ta’rifini yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "GAPIRTIRISH"
            }
        ],
        "points": 1.1
    }
    ,
    {
        "id": 43,
        "questionType": "structured",
        "questionText": "She’riy parchaning qofiyasini tahlil qiling va yozing.\n\nKo‘nglumga har ne g‘am kelsa, sabr aylaymen,\nKo‘nglumni har ne dard olsa, shukr aylaymen.",
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
    }
    ,
    {
        "id": 44,
        "questionType": "structured",
        "questionText": "Quyidagi qit’a mazmunini tahlil qiling va savollarga javob yozing.\n\nTilni tiyib so‘zlasang — donolik belgisi,\nO‘ylamay aytilgan so‘z — ko‘ngilning kulgisi.\nHar so‘zing o‘lchov bilan chiqsa, el sevadi\nBekor gapga berilsa — obro‘ying so‘nadi.",
        "parts": [
            {
                "key": "a",
                "label": "Ushbu she’riy parchada ulug‘langan fazilatni aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "TILNI TIYISH"
            },
            {
                "key": "b",
                "label": "Ushbu she’riy parchada qaysi illat qoralanganini aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "O'YLAMAY SO'ZLASH"
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
            "Ayrimlar turli shoular va yutuqli oʻyinlar odamlarning bir-biriga bo'lgan ishonchini soʻndiradi degan fikrda, ba'zilar esa bunday ko'ngilochar oʻyinlarning afzalliklari haqida gapirishadi",
            "",
            "• Fikr-mulohazalaringizni publitsistik uslubda bayon qiling.",
            "• Fikrlaringizni mantiqiy izchillikda, adabiy til me’yorlariga amal qilgan holda ifodalang.",
            "• Bayon qilinayotgan barcha fikr-mulohazalar faqat mavzu doirasida bo‘lishi lozim.",
            "",
            "DIQQAT! Esse uchun reja tuzilmaydi, epigraf qo‘yilmaydi.",
            "",
            "ESLATMA: ESSE qo‘lda tekshiriladi va yakunda e’lon qilinadi.",
            "ESSENI TELEFONDA YOKI KLAVIATURADA ADMINGA YOZIB TASHLANG!"
        ].join("\n"),
        "points": 0
    }


];
