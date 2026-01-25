// app/exam/questions.ts
import type {Question, DiagramOption} from "@/types";

export const QUESTIONS: Question[] = [
    // 1
    {
        id: 1,
        questionText: "Imloviy jihatdan to‘g‘ri yozilgan so‘zlar qatorini aniqlang.",
        questionType: "multiple_choice",
        options: [
            "mas’uliyat, murojat, tashabbus",
            "e’tibor, ma’lumot, qoidabuzarlik",
            "deklaratsiya, dekoratsiya, delegetsiya",
            "tavsilot, tavsif, tavsiyanoma",
        ],
        correctAnswer: "B",
        points: 1.7,
    },

// 2
    {
        "id": 2,
        "questionText": "Quyidagi gapda qanday turdagi imloviy xatolik(lar) yuz berganini aniqlang.\n\nYangi yil arafasida Zebo uch marta pulini sanabdi: “Bir millionu sakson yetti ming so‘m…” U sovg‘a olish uchun harxil do‘konlarni aylanibdi. Shu payt ikki qo‘shni tortishib qolibdi. Biri: “Zebo, sen qimat sovg‘a olmoqchisanmi, puling yetmaydi-ku”, – desa, ikkinchisi: “Yo‘q, u yillik jamg‘arma qilib yuripti, o‘zi biladi”, – debdi. Zebo esa: “Mayli, bir biringizni gapga solmang, avval aniq bilib olay”, – debdi.\n\n1) Unli tovush bilan bog‘liq xatolik;\n2) Chiziqcha bilan bog‘liq xatolik.\n3) Qo‘shib yozish bilan bog‘liq xatolik;\n4) Undosh tovush bilan bog‘liq xatolik;\n5) Asos va qo‘shimchalar bilan bog‘liq xatolik;\n6) Tutuq belgisi bilan bog‘liq xatolik;",
        "questionType": "multiple_choice",
        "options": ["2,3,4", "1,3,5", "2,4,6", "3,4,5"],
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
        id: 3,
        questionText: "Quyida berilgan so‘zning mazmuni xato\n" +
            "izohlangan javobni aniqlang.",
        questionType: "multiple_choice",
        options: ["A", "B", "C", "D"],
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
            {top: "g‘ayrat", left: "shijoat", right: "jo‘shqin"},
            {top: "sahih", left: "ishonchli", right: "aniq"},
            {top: "barqaror", left: "turg‘un", right: "mustahkam"},
            {top: "e’tiborli", left: "nufuzli", right: "ehtiyotkor"},
        ] as DiagramOption[],
        correctAnswer: "B",
        points: 1.7,
    },


    // 5 (“Ayon”) — plain MCQ with textual diagram labels in the stem
    {
        "id": 5,
        "questionText": "Qaysi gapda qo‘shimcha qo‘llash bilan bog‘liq uslubiy xatolik mavjud?\n\nA) Ustozning maslahatlari o‘quvchilarni yangi maqsadlarga ruhlantirdi.\nB) Tadbirga kelgan mehmonlar tashkilotchilarga minnatdorlik bildirishdi.\nC) Bu masalada u kishining fikrlari biznikiga mos kelishmaydi.\nD) Yig‘ilishdan so‘ng rahbar barcha xodimlarni tabrikladi.",
        "questionType": "multiple_choice",
        "options": [
            "Ustozning maslahatlari o‘quvchilarni yangi maqsadlarga ruhlantirdi.",
            "Tadbirga kelgan mehmonlar tashkilotchilarga minnatdorlik bildirishdi.",
            "Bu masalada u kishining fikrlari biznikiga mos kelishmaydi.",
            "Yig‘ilishdan so‘ng rahbar barcha xodimlarni tabrikladi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },

    // 6
    {
        "id": 6,
        "questionText": "So‘zning izohi xato berilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "TAQRIZ – asar, maqola yoki ilmiy ish haqida beriladigan baholovchi-analitik yozma fikr.",
            "TAHLIL – hodisa, matn yoki jarayonni qismlarga ajratib, mazmunan tekshirib o‘rganish jarayoni.",
            "TADQIQOT – ma’lum masalani ilmiy asosda o‘rganish, izlanish va natijaga kelish jarayoni.",
            "TARJIMA – muayyan mavzu bo‘yicha tinglovchilar oldida og‘zaki bayon qilinadigan ilmiy nutq."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },


    // 7 (match-table)
    {
        "id": 7,
        "questionText": "Quyidagi gapda ishtirok etgan so‘zlarning morfem tarkibi haqidagi xato hukmni aniqlang.\n\nQorong‘ilikdan bezib, umidsizlangan yigit kichik yozuvchini izlab topdi. U yaxshilanib borayotgan holatiga qaramay, ichidagi bezovtalikni yenga olmadi. Shu sababli u yana sukutga cho‘mib, bo‘layotgan voqealarni kuzatib turdi.",
        "questionType": "multiple_choice",
        "options": [
            "Sifat va ot asoslarga fe’l yasovchi qo‘shimchalar qo‘shilgan.",
            "So‘z yasovchi qo‘shimchalardan ayrimlari turli asoslarga qo‘shilgan.",
            "Ravish yasovchi qo‘shimchalar gapda fe’l asoslarga qo‘shilgan.",
            "Ot yasovchi qo‘shimchalar sifat va fe’l asoslarga qo‘shilgan."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,
    // 8) Har uchala parchada ham ishtirok etgan fe'l shakllari
    {
        "id": 8,
        "questionText": "Quyidagi parchada ishtirok etgan fe’llar haqidagi hukmlardan nechtasi to‘g‘ri?\n\nCho‘lponning tongi kabi ko‘nglimga nur keldi, Kitobni ochdim, satrlarni jim o‘qidim.\nSen ham bir lahza to‘xta, yel, shovqin qilma, Dardimni aytib qo‘yma, yurakda qoladi.\nMen izlab topgan haqiqatni yozib qo‘ydim, Ko‘ngilni asrash uchun kurashish kerak. Ketayotgan umidga qarab kulib,\nYashash, sevish — insonning yo‘li ekan.\n\n1) Fe’lning uch xil vazifa shakli qatnashgan.\n2) Sof fe’llar ikki xil maylda qo‘llangan.\n3) Faqat o‘timsiz fe’llar ishtirok etgan.\n4) Fe’lning ikki xil tuzilish shakli qatnashgan.\n5) Ko‘makchi fe’l ishtirok etgan.\n6) Sof fe’llar ikki xil shaxs-sonda qo‘llangan.",
        "questionType": "multiple_choice",
        "options": ["ikkitasi", "uchtasi", "to‘rttasi", "beshtasi"],
        "correctAnswer": "B",
        "points": 2.5
    }
    ,
    // 9) Otlar haqidagi to‘g‘ri ma’lumot
    {
        "id": 9,
        "questionText": "Quyidagi parchada qatnashgan otlar haqida xato hukmni aniqlang.\n\nBir kuni ustoz kutubxonada eski qo‘lyozmani varaqlab o‘tirar ekan, shu payt javonda chang bosgan daftar ko‘ziga tashlandi. U daftarni qo‘liga olib, sahifalaridagi yozuvlarga tikildi. Bir ozdan keyin ustoz bu topilmani ilmiy tadqiqotga kiritishni rejalashtirdi, chunki bunday qo‘lyozmalar xalqning tarixini eslatib turardi.",
        "questionType": "multiple_choice",
        "options": [
            "Parchada narsa oti va faoliyat-jarayon oti ishtirok etgan.",
            "Ikki bosh bo‘lakli gaplarning ayrimlarida otlar ega vazifasida qo‘llangan.",
            "“Daftar” so‘zi bir o‘rinda narsa oti, boshqa o‘rinda faoliyat-jarayon otini ifodalagan.",
            "Sodda yasama otlar ikki xil turkumdan hosil qilingan."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },

// 10) Hollar haqida to‘g‘ri ma’lumot
    {
        "id": 10,
        "questionText": "Quyidagi gapda alohida ajratib ko‘rsatilgan so‘zga tobelanib bog‘langan so‘z haqidagi to‘g‘ri hukmni aniqlang.\n\nTong saharda yo‘l chetida yotgan g‘ishtlarni **terish** bilan ovora bo‘lgan yigit uzoqdan kelayotgan mashinani sezmay qoldi.",
        "questionType": "multiple_choice",
        "options": [
            "Ushbu so‘z yasovchi qo‘shimcha bilan shakllangan.",
            "Ushbu so‘z ko‘makchi yordamida to‘ldiruvchini shakllantirgan.",
            "Ushbu so‘z bosh bo‘lakni shakllantirishga xizmat qilgan.",
            "Ushbu so‘z qo‘shma fe’l bilan ifodalangan sifatdoshni shakllantirgan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 11) Mazmun va grammatik bog‘lanish
    // 11
    {
        "id": 11,
        "questionText": "Quyidagi parcha haqida to‘g‘ri hukm berilgan javobni aniqlang.\n\nUstoz sinfga kirishi bilan o‘quvchilar darhol o‘rinlaridan turdi, shundan so‘ng daftarlar ochildi va dars boshlandi. Tashqarida esa yomg‘ir tinmay yog‘ardi, shamol biroz kuchaydi.",
        "questionType": "multiple_choice",
        "options": [
            "Holning ikki ma’no turi ishtirok etgan.",
            "Egalar turli turkum bilan ifodalangan.",
            "Faqat sodda yasama kesimlar ishtirok etgan.",
            "Payt holi fe’l kesimga tobelangan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 12
    {
        "id": 12,
        "questionText": "Quyidagi gapda qatnashgan tinish belgilari haqidagi to‘g‘ri hukmni aniqlang.\n\n— Doktor! — dedi hamshira shoshilib.\n— Ha, eshitaman.\n— Bemorning ahvoli og‘irlashdi.\n— Darhol palataga kiring! — dedingiz (tezkorlik bilan daftarga qayd qilib).\n— Aziza, — deb chaqirdingiz.\n— Ha, doktor!\n— Rentgen natijasini olib keling.\n— Xo‘p, — dedi Aziza.",
        "questionType": "multiple_choice",
        "options": [
            "Vergul tinish belgisidan bir xil maqsadda foydalanilgan.",
            "Tire tinish belgisidan bir xil maqsadda foydalanilgan.",
            "Qavs tinish belgisi ajratilgan bo‘lakni shakllantirish uchun qo‘llangan.",
            "Undov belgisidan bir xil sintaksis birliklarni ajratish maqsad qilingan."
        ],
        "correctAnswer": "D",
        "points": 2.5
    }
    ,

// 13
    {
        "id": 13,
        "questionText": "Abdulla Qodiriyning “O‘tkan kunlar” romanida qaysi tarixiy voqea qalamga olinmagan?",
        "questionType": "multiple_choice",
        "options": [
            "Qo‘qon xonligi va Buxoro amirligi o‘rtasidagi siyosiy ziddiyatlar.",
            "Otabek va Kumush taqdiri bilan bog‘liq ijtimoiy hayot manzaralari.",
            "Savdo-sotiq va karvon yo‘llari bilan bog‘liq voqealar.",
            "Rossiya va Turkiya o‘rtasidagi urushlar, shiddatli janglar."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 14
    {
        "id": 14,
        "questionText": "Asar qahramonlariga to‘g‘ri ta’rif berilgan javobni aniqlang.\n\n1) Snovboll – cho‘chqa; fermadan haydalganidan so‘ng odamlar bilan ochiq ittifoq tuzib, qurolli qo‘shin bilan qaytib kelishga uringan obraz.\n2) Skviler – cho‘chqa; raqam-u “hisobotlar” va so‘z o‘yinlari orqali Napoleon qarorlarini “mantiqan to‘g‘ri” qilib ko‘rsatadigan targ‘ibotchi.\n3) Boksyor – eshak; “Napoleon doimo haq” shiorini asosan u aytib yuradi va boshqalarga ham o‘rgatadi.\n4) Mozes – qarg‘a; hayvonlarni “Shakarqamish tog‘i” haqidagi afsona bilan ovutib, ularni hozirgi og‘ir mehnatga chidashga undaydigan obraz.",
        "questionType": "multiple_choice",
        "options": [
            "2, 4",
            "faqat 2",
            "1, 3, 4",
            "faqat 4"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 15
    {
        "id": 15,
        "questionText": "Abdulhamid Cho‘lponning “Kecha va kunduz” romanida voqealar to‘g‘ri bayon etilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Zebi taqdiri orqali ayolning huquqsizligi va jamiyat bosimi yoritiladi; Miryoqub mingboshi atrofida yurib, uning ishlarida vositachilik qiladi, Zebi esa majburan mingboshi xonadoniga kelin bo‘lib tushadi.",
            "Zebi o‘z xohishi bilan boy xonadonga kelin bo‘lib boradi, keyin esa o‘qish uchun shahar tashqarisiga jo‘nab ketadi; Miryoqub buning uchun hammani ishontirib, uni himoya qiladi.",
            "Asarda barcha voqealar faqat “kunduz” qismida berilib, qahramonlarning “kecha”dagi ruhiy kechinmalari umuman tasvirlanmaydi.",
            "Zebi va Miryoqub birgalikda chet elga ketib, roman oxirida yangi hayotni boshlaydi; mingboshi esa pushaymon bo‘lib, ularni qaytaradi."
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 16
    {
        "id": 16,
        "questionText": "Abdulla Qahhorning “Ming bir jon” hikoyasida Mirrahimov avval tutaqib, hamshiraga dag‘allashib gapiradi, lekin Mastura Alievaning palatasidan chiqqach, kechgacha indamay qoladi. Mirrahimovdagi bu o‘zgarishning eng asosli sababi nima?",
        "questionType": "multiple_choice",
        "options": [
            "Bahorning yoqimli havosi uni o‘z-o‘zidan tinchlantirib, kasallikdan shikoyat qilishni uyat deb bildirdi.",
            "Hamshiraning “dardni bardosh yengadi” degan nasihati Mirrahimovga kuchli ta’sir qilib, u o‘zini tiyishga majbur bo‘ldi.",
            "Masturaning o‘limga taslim bo‘lmaydigan umidi va hazil-mutoyibasi, shuningdek Akramjonning vafodorligi Mirrahimovda ichki larzani uyg‘otib, uni o‘ziga qaytardi.",
            "Hoji akaning Masturani ko‘rib qo‘rqib chiqib ketgani Mirrahimovga kulgili tuyulib, u shundan keyin jilmayibgina yuradigan bo‘ldi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

// 17
    {
        "id": 17,
        "questionText": "Chingiz Aytmatovning “Asrga tatigulik kun” asari haqida to‘g‘ri hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Edigey Kazangapni Ona-Bayit qabristoniga dafn etish uchun yo‘lga chiqadi, biroq qabriston tomoni kosmodrom hududi deb yopilgani sababli ularni yo‘ldan qaytarishadi.",
            "Asarda manqurt afsonasida Nayman ona o‘g‘lini eslatib uyg‘otadi va o‘g‘il onasini tanib, qochib ketadi.",
            "Edigey va Kazangap yoshligidan birga o‘sgan aka-uka bo‘lib, asar voqealari ularning bolalik xotiralari atrofida quriladi.",
            "Asarda kosmosga uchgan ekipaj Yer bilan aloqa o‘rnatgach, darhol xalq oldida e’lon qilinadi va ular tantanali ravishda qaytarib olinadi."
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
            "HUJAYRA",
            "",
            "I",
            "Hujayra nazariyasi - barcha organizmlarning tuzilishi, rivojlanishi va kelib chiqishidagi umumiylikni koʻrsatuvchi yirik biologik nazariyalardan biri boʻlib, unga binoan hujayra bakteriyalar, zamburugʻlar, oʻsimliklar va hayvonlarning eng kichik tuzilish birligi. Hujayra nazariyasi tiriklik olamining birligi va uning tarixiy rivojlanishi haqidagi evolyutsion tasavvurni tasdiqlaydi. Hujayra nazariyasi Ch.Darvinning evolyutsion taʼlimoti va energiyaning oʻzgarishi qonuni bilan bir qatorda 19-asrda tabiatshunoslik sohasida qilingan 3 buyuk kashfiyotdan biridir. Hujayralarning kashf etilishi va hujayra nazariyasining yaratilishi tarixan bir davrga toʻgʻri kelmaydi. Oʻsimlik hujayrasi tuzilishini dastlab tirik oʻsimlik poyasi va poʻkaklardan tayyorlangan kesmada ingliz olimi Robert Guk oʻzi yasagan mikroskop orqali kuzatgan va tadqiqot xulosalarini “Mikrografiya” nomli asarida bayon etgan (1665). Ingliz botanigi N.Gryu hujayra qobigʻi xuddi mato (gazlama)ga oʻxshash tolalardan\ttashkil\ttopganligini\ttaxmin\tqilgan.",
            "",
            "II",
            "18-asrda falsafiy gʻoyalar taʼsirida fanda tirik tabiatning birligi haqidagi fikrlar paydo boʻla boshladi. K.Volf oʻsimlik va hayvonlarning tuzilishidagi qandaydir umumiylikni aniqlashga harakat qildi. Uning “hujayra”, “donachalar” va “pufakchalar” kabi tushunchalari, shuningdek, nemis olimi L.Okenning organizmlar “pufakchalar” yoki “infuzoriyalar”dan tashkil topgan, degan fikrlari fanda hujayra nazariyasi toʻgʻrisidagi dastlabki tushunchalar boʻlgan. 19 asr boshlarida oʻsimliklarni mikroskop yordamida oʻrganish borasida erishilgan yutuqlar tufayli hujayra — oʻsimlik moddalari umumiy massasining boʻshliq qismi emas, balki oʻz qobigʻiga ega boʻlgan va bir-biridan ajralib turadigan strukturaviy tuzilma ekanligi aniqlandi. 19-asrning 30 yillari oxirida oʻsimliklarning deyarli barcha organlari hujayraviy tuzilishga ega ekanligi aniqlandi va nemis olimi F.Meyenning “Botanika” (1830) kitobida hujayra oʻsimlik toʻqimalarining umumiy tuzilish birligi sifatida eʼtirof etildi. Lekin shundan keyin ham hujayra bu bir boʻshliq, asosiy qismini qobiq tashkil qiladi; uning ichidagi narsalar esa ikkinchi darajali ahamiyatga ega ekanligi toʻgʻrisidagi tushuncha uzoq vaqt saqlanib qoldi.",
            "",
            "III",
            "Oʻsimlik hujayrasi yadrosi ingliz olimi R.Braun tomonidan kashf etilgan (1831), ammo nemis olimi M.Shleyden yadroni hujayrani hosil qiluvchi, yaʼni sitoblast deb hisoblagan. Shleyden taʼbiricha donador substansiyadan yadrocha hosil boʻlib, uning atrofida esa hujayra vujudga keladi; keyinchalik hujayraning hosil boʻlishi jarayonida yadro yoʻq boʻlib ketadi. 19-asrning 2-choragi boshlarida chex olimi\n" +
            "\n" +
            "Ya.Purkine maktabining tadqiqotlari hayvon organizmi toʻqimalarining mikroskopik tuzilishi boʻyicha juda koʻp maʼlumotlar berdi. Lekin Ya.Purkine oʻzining “donachalar nazariyasi”da “donachalar” (u hujayrani shunday deb atagan edi), yadro va boshqa qismlardan tashkil topganligini yozadi. Hujayra nazariyasini rasmiylashtirishda T.Shvann (1839) xizmatlari juda katta. U oʻzi olgan maʼlumotlar, Shleyden va Ya.Purkine maktabi va boshqa olimlarning tadqiqotlariga asoslanib, hujayra nazariyasini yaratdi; oʻsimlik va hayvon toʻqimalari tuzilishini taqqoslab ular uchun umumiy hisoblangan hujayraviy tuzilish tamoyillarini koʻrsatib berdi. Ammo Shvann ham xuddi Shleyden singari hujayraning asosiy qismi uning poʻsti va hujayra strukturasiz shiradan hosil boʻladi, deb hisoblagan.",
            "",
            "IV",
            "Hujayra nazariyasining bundan keyingi rivojlanishi protoplazma va hujayra boʻlinishining kashf etilishi bilan bogʻliq. Hujayra ichidagi viruslar mustaqil hayot kechirishga moslashmagan bo’ladi.Nemis olimi R.Virxov (1958) “Hujayra patologiyasi” asarida hujayra nazariyasini patologik hodisalarga tatbiq etib, yadro hujayrada yetakchi ahamiyatga ega ekanligiga eʼtibor qaratdi va hujayraning boʻlinish yoʻli bilan koʻpayish tamoyilini (har bir hujayra hujayradan hosil boʻladi) asoslab berdi. 19-asrning 70—80 yillarida barcha hujayraviy tuzilishga ega boʻlgan organlar uchun universal hisoblangan hujayraning boʻlinish usuli, yaʼni mitoz, asr oxirida esa hujayra organoidlari kashf etiladi; hujayra protoplazmaning oddiy yigʻindisi emasligi tan olinadi. Organizm qancha murakkab tuzilgan boʻlsa, uning bir butunligi shuncha aniq namoyon boʻladi. Hujayraning asosiy strukturaviy elementlari shakllangan yadroga ega boʻlgan eukariot organizmlar hamda yadrosiz prokariotlar uchun ham tegishli. Mustaqil hayot kechirishga moslashmagan hujayra parazitlari hisoblangan viruslarning mavjudligi tirik organizmlarning hujayraviy tuzilishi universal ekanligini koʻrsatadi. Tirik organizmlar hujayraviy tuzilishining mushtarakligi hujayralarning kimyoviy tarkibi va metabolitik jarayonlarning oʻxshashligi bilan ham tasdiqlanadi. Nuklein kislotalar va oqsillar kabi muhim hayotiy komponentlar, ularning hosil boʻlishi va almashinib turishi barcha tirik organizmlar hujayralari uchun universal xarakterga ega."
        ].join("\n"),
    },

    // 18) VIRUSLAR – mos bo‘lmagan ma'lumot
    // 18
    {
        "id": 18,
        "questionText": "Matn mazmuniga mos to‘g‘ri shakllantirilgan gapni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Hujayra nazariyasi hujayrani bakteriyalar, zamburug‘lar, o‘simliklar va hayvonlar uchun eng kichik tuzilish birligi deb e’tirof etadi.",
            "Hujayra nazariyasi hujayraning asosiy qismi faqat qobiqdan iboratligini isbotlaydi.",
            "Hujayra nazariyasi faqat o‘simlik to‘qimalari uchun ishlab chiqilgan nazariyadir.",
            "Hujayra nazariyasi viruslarning ham to‘liq hujayraviy tuzilishga ega ekanini ko‘rsatadi."
        ],
        "correctAnswer": "A",
        "points": 1.7
    },
    {
        "id": 19,
        "questionText": "Matnning qaysi qismida ishtirok etgan gap matn mazmuni tuzilishida uslubiy xatolikni yuzaga keltirgan?",
        "questionType": "multiple_choice",
        "options": ["I", "II", "III", "IV"],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 20,
        "questionText": "Matn mazmunida aks etmagan ma’lumotni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "70–80-yillarda hujayraning bo‘linish usuli — mitoz universal usul sifatida e’tirof etilgani aytiladi.",
            "Viruslar mustaqil hayotga moslashmagan hujayra parazitlari sifatida tilga olinadi.",
            "“Mikrografiya” asarida mikroskop orqali kuzatuv natijalari bayon qilingani keltiriladi.",
            "Hujayra organoidlari topilgach, hujayra faqat “bo‘shliq” ekanligi yana tasdiqlangani aytiladi."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 21,
        "questionText": "Matn mazmuniga mos to‘g‘ri ifodalangan ma’lumotni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Hujayra nazariyasi faqat 18-asrda to‘liq shakllangan va keyin o‘zgarmagan.",
            "Nuklein kislotalar va oqsillar faqat eukariot hujayralar uchun universal komponent hisoblanadi.",
            "Tirik organizmlarda hujayralarning kimyoviy tarkibi va metabolitik jarayonlar o‘xshashligi mushtaraklikni tasdiqlaydi.",
            "Prokariot hujayralarda yadro mavjud bo‘lgani uchun ular eukariotlarga kiradi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 22,
        "questionText": "Matn mazmunida aks etgan ma’lumotni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Robert Guk hujayralarni mikroskop orqali kuzatib, xulosalarini “Mikrografiya” asarida bayon etgan (1665).",
            "R. Braun hujayra nazariyasini yaratib, 1839-yilda uni rasmiylashtirgan.",
            "F. Meyen hujayra bo‘linishi — mitozni kashf etgan olim sifatida keltiriladi.",
            "Ya. Purkine “sitoblast” atamasini kiritib, yadro keyin yo‘q bo‘lib ketishini isbotlagan."
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
«ALIFBENING BIRINCHI HARFI»

Qutbiddinovga ovchi oshnasi ikkita tustovuq in’om qildi. Tustovuqlar tozalanib, tuzlanayotganda Qutbiddinovning fe’li aynidi, ya’ni bironta shinavanda ulfat bilan birpas dilkashlik qilg‘usi keldi. Unint qo‘shnisi Zargarov yaqin bir oy bo‘ladi, chorakam bir litr xushbo‘y vinoni dumba-jigar bilan ichgani asrab yurar edi, semiz tustovuqning daragini eshitib: «Xayr, qo‘y so‘ysak, yana vino topilar», dedi. Bu ikki ulfat ahyonda mana shunday dilkashlik qilgan-larida suhbat boshdan-oyoq ikki mavzudan chetga chiqmas edi: biri — shu ketishda shaharimiz yana ellik yildan keyin qanday bo‘lar ekan; ikkinchisi— so‘nggi vaqtlarda fan ki-shilarni yoshartirish to‘g‘risida nega indamay qo‘ydi?
Qutbiddinovning o‘g‘li Suyar ovqatdan keyin pionerlar saroyiga ketgan edi, soat oltidan o‘tib borayotir
—daragi bo‘lmadi. Shu vajdan Qutbiddinov suhbatning boshlanishida jinday tashvishmand bo‘lganidanmi, bu safar mavzu shaharning kelajagi, fanning jimib ketgani emas, bola tarbiyasi bo‘lib qoldi. Zargarovning ham o‘g‘li bor. Ikki ota hozirgi tarbiyani xo‘p maqtashdi. Zargarov uzun so‘zdan xulosa chi-qarib, «men yoshligimda shunday tarbiya ko‘rgan bo‘lsam, hozir yerda turib oyda chorvachilik qilar edim», dedi.
—Men ham, — dedi Qutbiddinov,— men ham ko‘p hikmatlar ko‘rsatar edim. Lekin birodar... Qani, ichaylik! Auf... Lekin, birodar, har yomonning bir «ammo»si bo‘lishi kerak, har yaxshinint bir «lekin»i. Hozirgi tarbiya yaxshi. Hech shubhasiz yaxshi! Lekin kamchiligi yo‘qmi? Bor, albatta, bor! Masalan, bolalarga shaxmat o‘ynatishni olaylik. Bolaning miyasi shunday miyaki, chunonchi... bizning moliya tili bilan aytganda, alohida paragraf!
—Oh-oh-oh! Otangizga rahmat! Kamol toping, do‘stim! Men ham xuddi mana shuni aytaman, deb turgan edim. Shundoq, do‘stim, bola deganingizning miyasi... Ie, siz nega oqichmadingiz? Fikrlar bir joydan chiqib, ikki tanqidchi ko‘p mamnun bo‘lishdi. Suhbat yana ham jonlanib ketdi. Hozirgi tarbiyani olib shaxmatga urildi, shaxmatni olib tarbiyaga; ikkovining ham dabdalasi chiqarildi. Qutbiddinov ryumkalarni yana to‘ldirdi, vilka bilan iyagini qashlab davom etdi:
—Shaxmatning yana bir zarari shuki, agar g‘irrom odam bilan o‘ynasangiz, asabingiz buziladi. O’ttiz to‘rtinchi yilda Bobojonov bilan o‘ynagan edim, g‘irromlik qilib shohimni olib qo‘ydi. Shohimni ber, men senga bo‘lak narsa beray, desam ko‘nmadi, cho‘ntagiga solib qo‘ydi. Jahlim chiqib qolgan ekan, shohsiz o‘ynay berdim, baribir qoldirdim. Shundan beri o‘ynamaydigan bo‘lib ketdim. Nima keragi bor? Xo‘sh, ana qoldirdim, nima bo‘pti?
—Shuni ayting, poezddan qoliptimi?
Soat sakkizda o‘tganda Suyar keldi. U, eshikdan juda hovliqib kirgan edi, bularni ko‘rib shashti qaytdi; sekin ichkarigi uyga kirib ketayotganida Zargarov ko‘rib qoldi.
—E, e, yigitcha! Qani, bu yoqqa keling-chi! Ho‘, barakalla, mulla Suyar! Otasini suyarmi, onasini suyarmi, a? Yo ikkalalarini ham suyarmi?
Qutbiddinovning otalik mehri jo‘sh urib ketdi. Suyarning boshidan, yuzidan o‘pdi,
quchoqladi.
—Albatta, otasini suyar-da, a, o‘glim? Bizning o‘g‘il ko‘p yaxshi-da: birov bilan urishmaydi, papiros chekmaydi, onasidan otasini yaxshi ko‘radi,shaxmat o‘ynamaydi...
Suyar o‘zining quvonchini tantana bilan e’lon qildi:
—Bugun instruktorimizni qoldirdim, dada!
—E, ana endi! Ko‘p bema’ni ish qilibsiz-da, o‘g‘lim! Shaxmat o‘ynamagin, demabmidim? Qara, burningdan suv oqyapti, miyang suyulibdi!
Suyar bo‘shashib ketdi.
—Shaxmat o‘ynagandan emas,— dedi burnini artib, — kecha o‘zingiz ariqdan ko‘zoynag‘ingizni izlatdingiz...
Qutbiddinov labini burdi.


—Ko‘zoynak izlasa burundan suv oqar emishmi? Ming la’nat! Bor, uyga kir, darsingga qara! Suyar ta’bi xira bo‘lib, kirib ketdi. Qutbiddinov o‘g‘lining noqobilligidan, andishasizligidan qattiqxafa bo‘ldi; nahot otasi shaxmat o‘ynamagin degan bo‘lsa-yu, o‘ynasa; o‘ynaganini yana, ayniqsa mehmonning oldida, bu qadar tantana bilan e’lon qilsa. Zargarov ko‘p bolalar shunaqa ekanligi va Suyar eslik bola bo‘lgani uchun bu xildagi qusurlarini yo‘qotish qiyin emasligini aytib, ranjigan otaning ko‘nglini ko‘targan bo‘ldi.
—Mening o‘g‘lim-chi, bundan ham battar. Men unga tog‘ injeneri bo‘lgin desam, «yo‘q, dada, bilmaysiz, men uchuvchi bo‘laman» deydi. Xa-xa-xa... voy, itvachcha-ey, men bilmas emishman! Ikki tanqidchi bolalarning otalarga gap qaytarishla-rini, otacharning so‘zlarini ba’zan yerda qoldirishlarini hozirgi tarbiyada bo‘lgan eng katta kamchilikning natijasi hisoblashdi va buni har kuni, har soatda ko‘rib turganlari holda bunga qarshi jamoat fikrini qo‘zg‘aguday bir ish qilolmaganlari uchun o‘zlarini ham ayblashdi.
—Men shu to‘g‘rida gazetaga bir maqola yozsammi deb ham o‘ylagan edim,— dedi Zargarov, — lekin kelishtirolmasman deb qunt qilmadim. Chala-chulpa yozib birovning oldiga «shu to‘g‘rimi?» deb borgani nomus qilaman. Rostini aytsam, ellik oltiga kirib ham birovdan aql o‘rganishni o‘zimga ep ko‘rmayman. Endi, men sizga aytsam, biz birovga aql o‘rgatsak tuzuk. Nima dedingiz?
—Albatta. Lekin men ham maqola yozishga yo‘qman, birodar. Endi biz-ku, o‘tdik, bolalarimiz ham bizday bo‘lmasin deng. Buning uchun bolalarga har xil adabiyotlardan o‘qitish kerak. Bu to‘g‘rida ham hozirgi tarbiya o‘choqlarimizning beparvoligi bor. Chunonchi, men u kuni o‘glingizni imtihon qilib ko‘rdim. Mazasi yo‘q! Hatto Saltikov bilan Shchedrin, degan mashhur yozuvchilarni bir-biridan farq qilolmaydi, ikkovi bitta odam deydi. Kula-kula o‘libman. Sizga aytaman deb esimdan chiqibdi. Zargarov «o‘g‘lim a’lochi» deb hech kimga so‘z bermas edi, Qutbiddinovning bu kulgisi uni tamom o‘ldirdi.
—Rosti bilan shunday dedimi? Adabiyotdan ham a’lo baho olgan edi-ku.
—Adabiyot muallimi oshnangizdir.
—Be, Saltikov bilan kim dedingiz hali, Shchedrinmi? Shuni bilmasa men qulog‘ini tagi bilan sug‘urib olaman. Qutbiddinov hamon kular edi.
—Bilmaydi, bahazur sug‘urib ola bering, azbaroyi xudo, ikkovi bir odam deydi. Kugbiddinovning me’yordan ortiq kulgisi Zargarovning g‘ashini keltirdi. Nima bo‘lib uning og‘zidan
«meningo‘g‘lim bilmasa, sening o‘g‘ling ham bilmaydi» degan mazmunda so‘z chiqib ketdi. Qutbiddinov ham o‘zining o‘g‘liga ishontanliti uchun, Zargarovning bu bo‘htoniga darrov, issig‘ida zarba bergisi keldi.
—Hozir, hozir,- dedi,- Suyar! Ho, Suyar! Bu yoqqa chiq, o‘g‘lim! E, yotganmiding? Mayli, bu yoqqa o‘tir. Bizga bir narsani hal qilib ber: Saltikov katta yozuvchimi, Shchedrin katta yozuvchimi? Suyar goh otasiga, goh Zargarovga qarar va hayron edi.
—[1]Yo‘q, siz savolni noto‘g‘ri qo‘ydingiz,— dedi Zargarov. — Bunday: Saltikov ilgari o‘lganmi, Shchedrin?
—Ikkovi bitta odam-ku!— dedi Suyar, nima gap ekanini bilolmay.
Zargarov qiyqirib kuldi, chapak chaldi va bunga ham qanoat qilmay o‘rnidan turib o‘yinga tushdi. Qutbiddinov do‘q urdi:
—Saltikov bilan Shchedrin-a? Kim aytdi senga?
—[2]O’zim bilaman, kitobda bor.
—Kitobda bor? Shaxmatni ko‘proq o‘yna, itvachcha!
Qutbiddinov bola bechorani xo‘p urishdi. Zargarov Qutbiddinovni o‘larday kalaka qilib toza alamini oldi, buning ham og‘irligi Suyarga tushdi. Suyar yig‘lab yubordi.


—Undoq demagin, o‘g‘lim,— dedi Zargarov birpas jimlikdan keyin,— dadang bir narsa degandan keyin darrov «xo‘p, bilmabman» deyishga o‘rgan. Yaxshi emas.
—Noto‘g‘ri  aytsalar-chi?
Ikki tanqidchi yalt etib bir-biriga qaradi va bu qarashda ikkovining ham ko‘nglidan bir gap o‘tdi: «Bola ham shunday o‘jar bo‘ladimi?» Suyar ichkariga kirib ketdi. Qutbiddinov ertagayoq Suyarning maktabiga borib katta g‘alva ko‘tarmoqchi bo‘ldi. Zargarov maktabdan ham ko‘ra pionerlar saroyiga borishni ma’qul ko‘rdi. Anchadan keyin Suyar kattakon bir kitob ko‘tarib chiqdi:
—Mana,— dedi portretni ko‘rsatib,— mana, Saltikov-Shchedrin!
Qutbiddinov «bu o‘jar bola hamon o‘zinikini ma’qul qilmoqchi» deb juda g‘azablandi, ammo mehmonning oldida o‘zini tiydi. Zargarov portretning ostidagi yozuvni o‘qib, xuddi qanotli tuya ko‘rganday ajablandi va kitobni sekin Qutbiddinovning oldiga surdi. Qutbiddinov portret va uning ostidagi yozuvga uzoq tikildi, so‘ngra ko‘zoynagini sekin qulog‘idan bo‘shatar ekan:
—Him...—dedi,— Saltikov-Shchedrin! Ko‘rdingizmi, o‘sha vaqtdagi yozuvchilar ham soqol qo‘ygan ekan...
Jimlik cho‘kdi. Suyar indamay ichkariga kirib ketdi. Shu yerda hikoya ham tamom, chunki uning mantiqiy davomi g‘alaba qozongan Suyarning bu ikki tanqidchidan o‘ch olishi bo‘lar edi. Suyar buni lozim topmadi.
  `.trim(),
    },

// 23) Bola o‘zini “katta” deb his qilishi nimada aks etgan?
    // 23
    {
        "id": 23,
        "questionText": "Asar nomi orqali qanday badiiy maqsad ifoda etilgan?",
        "questionType": "multiple_choice",
        "options": [
            "Qahramonlarning shaxmatga qiziqishini ko‘rsatish uchun shunday nomlangan.",
            "Bolaning haqiqatni dalil bilan aytishini “o‘jarlik” deb baholagan kattalarning holatini kinoya bilan ochish uchun shunday nomlangan.",
            "Asarda faqat bolalarning tarbiyasi yomonlashgani ko‘rsatilgani uchun shunday nomlangan.",
            "Asar nomi tasodifan tanlangan, badiiy yuklama yo‘q."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 24
    {
        "id": 24,
        "questionText": "Qutbiddinov obraziga mos ta’rif berilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Har bir masalani dalil bilan tekshiradigan, xato qilsa ham tan oladigan sokin ota.",
            "O‘zini bilimdon ko‘rsatishga urinadigan, gapni ko‘paytiradigan, ammo adabiy bilimda yuzaki; “ota obro‘si”ni haqiqatdan ustun qo‘yadigan kishi.",
            "Bolasini erkin fikrlashga undaydigan, tanqidni yoqtiradigan zamonaviy ota.",
            "Mehmon oldida ham bolani himoya qiladigan, vazmin va bag‘rikeng inson."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 25
    {
        "id": 25,
        "questionText": "[1] raqami bilan ajratib ko‘rsatilgan gapni Zargarov nima maqsadda aytdi?",
        "questionType": "multiple_choice",
        "options": [
            "Qutbiddinovning savolini ilmiy uslubda “to‘g‘rilash” va mavzuni chuqurlashtirish uchun.",
            "Qutbiddinovning o‘g‘lini noqulay holatga solib, o‘zini ustun ko‘rsatish va bahsda g‘olib chiqish uchun.",
            "Suyarni himoya qilib, uni uyaltirmaslik uchun.",
            "Suhbatni shaxmatdan adabiyotga burish uchun."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 26
    {
        "id": 26,
        "questionText": "“Him... Saltikov–Shchedrin! Ko‘rdingizmi, o‘sha vaqtdagi yozuvchilar ham soqol qo‘ygan ekan...” jumlasida Qutbiddinovning qanday ruhiy holati aks etgan?",
        "questionType": "multiple_choice",
        "options": [
            "G‘alabadan mamnun bo‘lib, o‘g‘lini ochiq maqtash holati.",
            "Adabiy haqiqatni anglab, chin dildan tan olgan holati.",
            "Noqulay vaziyatdan qutulish uchun mavzuni chetga burib, “yuzni saqlash”ga urinayotgan andishali-uyalish aralash holat.",
            "Zargarovdan qasos olish niyatini yashirmay turgan holat."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

// 27
    {
        "id": 27,
        "questionText": "[2] raqami bilan ajratib ko‘rsatilgan gapni Suyar nima maqsadda aytdi?",
        "questionType": "multiple_choice",
        "options": [
            "Otasini ataylab ranjitish va mehmon oldida obro‘sini tushirish uchun.",
            "Kattalar fikrini so‘zsiz qabul qilish shart emasligini bildirib, noto‘g‘ri gapga e’tiroz qilish (haqiqatni himoya qilish) uchun.",
            "O‘zini aybdor deb tan olib, uzr so‘rash uchun.",
            "Suhbatni butunlay to‘xtatish uchun."
        ],
        "correctAnswer": "B",
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

1.Furqat ichra sharbati la'ling visoli kam bo’lur,
Garchi derlar: “Talx daryoda chuchuk su ham bo’lur”.

2.Zulfu ruxsoring g’ami ne tong buzug’ ko’nglum aro:
“Ajdaho gar bo’lsa vayron ichra, maxzan ham bo’lur”.

3.Ko’ksuma otsang bir o’q, ot yona bir yonindakim,
Ul dag’i ko’nglumni shod aylar, bu ham muhkam bo’lur.

4.Ul pariy ishqin maloyikdin yoshursam ne ajab, 
Dardi yo’qlar dard ahlig’a qachon mahram bo’lur.

5.Ohu ashkimdin shikoyat ko’p qilur hamsoyakim:
“Dud ravzandin kirar uyning binosi nam bo’lur”.

6.Gar egilsa qomatim ishqing yukidin, qilma ayb,
Kim, sipehr uzra bu og’ir yukni qo’ysang xam bo’lur.

7.Olam ahlidinkim, ul oyni Navoiy tanladi,
 Bilmadikim ishqidin ovorayi olam bo’lur. \n\

LUG‘AT:
Talx – achchiq; Zulf – soch;  Maxzan – xazna; Maloyik – farishtalar; Sipehr - osmon,falak.
  `.trim(),
    }
    ,

    // 28–32: savollar (g‘azal bo‘yicha)
    // 28
    {
        "id": 28,
        "questionText": "G‘azal matla’si haqidagi NOTO‘G‘RI hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Oshiqning ko‘ngli azim daryoga zidlangan.",
            "Achchiq daryoda ham shirin suv bo‘lishi aks etgan.",
            "Oshiq ayriliqda ham yorning visolidan umid qilayotgani aks etgan.",
            "Yor la’lining sharbati shirin suvga o‘xshatilgan."
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 29
    {
        "id": 29,
        "questionText": "2-bayt mazmunida AKS ETMAGAN fikrni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Ushbu baytda ajdarho bor joyda xazina ham bo‘lishi bayon etilgan.",
            "Yorning uzun sochi ajdahoga o‘xshatilgan.",
            "Oshiqning ko‘nglida yorning go‘zal yuzi va uzun sochlariga yetish qayg‘usi borligi aks etgan.",
            "Oshiqning g‘amgin ko‘ngli xazinaga o‘xshatilgan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 30
    {
        "id": 30,
        "questionText": "Gʻazalda qaysi oʻxshatishdan FOYDALANILMAGAN?",
        "questionType": "multiple_choice",
        "options": [
            "Yor olamni yorituvchi oyga o‘xshatilgan.",
            "Oshiqning ohi qora tutunga o‘xshatilgan.",
            "Yorning qomati kamon oʻqiga oʻxshatilgan.",
            "Yorning kipriklari o‘qqa o‘xshatilgan."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }

    ,

// 31
    {
        "id": 31,
        "questionText": "Qaysi baytda IRSOL-U MASALDAN foydalanilmagan?",
        "questionType": "multiple_choice",
        "options": [
            "2-bayt",
            "1-bayt",
            "4-bayt",
            "5-bayt"
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,

// 32
    {
        "id": 32,
        "questionText": "6-bayt haqida berilgan to‘g‘ri hukmni toping.",
        "questionType": "multiple_choice",
        "options": [
            "Osmon egik holda bo‘lganligi uchun oshiqning ham qaddi egik ekanligi aks etgan.",
            "Oshiqning ishqi egik gavdani ham tik qila olishi tasvirlangan.",
            "Ishqning osmonni ham egallashi aks etgan.",
            "Qomatning egikligi osmondan kelayotgan yuk bilan bog‘liqligi aks etgan."
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
        "questionText": "Quyidagi gaplar va sintaktik tahlilga oid izohlar (A–F)ni o‘zaro to‘g‘ri moslashtiring.",
        "questionType": "match_table",
        "match": {
            "left": [
                {
                    "key": "33",
                    "text": "Ustoz shogirdiga: — Shoshma! — dedi. — Bu gapni hech kimga aytib qo‘yma!"
                },
                {
                    "key": "34",
                    "text": "Shogird: — Mayli. Men aytmayman, ammo siz nega buni yashiryapsiz, ayting, — dedi."
                },
                {
                    "key": "35",
                    "text": "Ustoz javob beribdi: — Demak, zarar kattalashmasin: birinchi zarar — obro‘ning ketishi; ikkinchi zarar — hasadgo‘yning quvonishi…"
                }
            ],
            "right": [
                {"key": "A", "text": "Uyushiq bo‘lakli gap ishtirok etgan."},
                {"key": "B", "text": "So‘z-gap ishtirok etgan."},
                {"key": "C", "text": "Ajratilgan bo‘lakli gap ishtirok etgan."},
                {"key": "D", "text": "To‘liqsiz gap ishtirok etgan."},
                {"key": "E", "text": "Bir bosh bo‘lakli gap ishtirok etgan."},
                {"key": "F", "text": "Kiritmali gap ishtirok etgan."}
            ]
        },
        "options": ["33–D; 34–F; 35–B", "33–E; 34–B; 35–F", "33–D; 34–C; 35–E", "33–E; 34–A; 35–B"],
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
        "questionText": "Berilgan mazmunlarni ifodalaydigan shakldosh so‘zni yozing",
        "imageUrl": "/images/q36-diagram.png",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLAR BILAN YOZISHINGIZ SHART",
                "multiline": false,
                "correct": "TUGUN"
            }
        ],
        "points": 1.1
    },
    {
        "id": 37,
        "questionType": "structured",
        "questionText": "Berilgan gapda noto‘g‘ri qo‘llangan tinish belgisini aniqlang.\n\nOtabek shu gapni aytishi bilan Hasanali bobo uning yoniga kelib sekin dedi: “Bolam, odamning so‘zi bir bo‘lsa, – el ichida yuzi yorug‘ bo‘lur!”",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "masalan: , . ; : \" ... \"",
                "multiline": false,
                "correct": "-"
            }
        ],
        "points": 1.1
    },
    {
        "id": 38,
        "questionType": "structured",
        "questionText": "Berilgan parchada qo‘llangan so‘z yasovchi qo‘shimcha bilan almashtirib qo‘llash mumkin bo‘lgan ma’nodosh qo‘shimchani yozing.\n\nU ko‘p gapirmadi. Ammo aytgan har bir jumlasi ichida yashirin fikr bor edi — qisqa, lo‘nda, lekin ma’nodor edi.",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "-LI"
            }
        ],
        "points": 1.1
    },
    {
        "id": 39,
        "questionType": "structured",
        "questionText": "Berilgan parchada qaysi gap bo‘lagi ajratilganini aniqlang.\n\nVatan deb yonar yurak,\nKo‘nglimda bir tuyg‘u bor — sadoqat,\nShu tuyg‘u bilan inson\nTog‘larni ham oshar, elga xizmat.",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "masalan: Hol, to‘ldiruvchi, aniqlovchi ...",
                "multiline": false,
                "correct": "EGA"
            }
        ],
        "points": 1.1
    },
    {
        "id": 40,
        "questionType": "structured",
        "questionText": "Gapdagi so‘zlarning mazmun va grammatik jihatdan bog‘lanishini tahlil qiling.\n\nShahar chetida yashab, el og‘rig‘ini yuragida ko‘targan Miryoqub ko‘nglida umidni va iztirobni birday asrab yurardi.",
        "parts": [
            {
                "key": "a",
                "label": "Gapda ajratib ko‘rsatilgan so‘z tobelanib bog‘langan so‘zni yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "ASRAB YURARDI"
            },
            {
                "key": "b",
                "label": "Gapda ajratib ko‘rsatilgan so‘z bilan teng munosabatda bog‘langan so‘z yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "IZTIROBNI"
            }
        ],
        "points": 1.1
    }
    ,
    {
        "id": 41,
        "questionType": "structured",
        "questionText": "Berilgan parchada yordamchi so‘zlarning grammatik vazifasini tahlil qiling.\n\nYoshlar jamiyatda dinlararo totuvlikni mustahkamlash uchun ma’rifiy uchrashuv va targ‘ibot tadbirlarida faol qatnashmoqdalar, turli murakkabliklar va nizolarni keltirib chiqarishi mumkin bo‘lgan g‘oyalar tarqalishining oldini olishga hissa qo‘shmoqdalar.",
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
        "questionText": "She’riy parchada ishtirok etgan badiiy san’atlar haqidagi topshiriqlarni bajaring.\n\nXayolingg‘a ko‘ngulda jon berurmen,\nAziz tuhfa erur mehmongʻa loyiq.",
        "parts": [
            {
                "key": "a",
                "label": "Birinchi baytda alohida ajratib ko‘rsatilgan misra yordamida hosil qilingan badiiy san’atni aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "TAMSIL"
            },
            {
                "key": "b",
                "label": "Mazkur badiiy san’atning ta’rifini yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "HAYOTIY MISOL KELTIRISH"
            }
        ],
        "points": 1.1
    }
    ,
    {
        "id": 43,
        "questionType": "structured",
        "questionText": "She’riy parchaning qofiyasini tahlil qiling va yozing.\n\nDo‘stlar, mahram deb elga roz ifsho qilmangiz,\nBoshingizg‘a yuz balo kuch birla paydo qilmangiz.",
        "parts": [
            {
                "key": "a",
                "label": "Parchada qofiyadosh so‘zlardagi raviyni yozing.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "O"
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
        "questionText": "Quyidagi qit’a mazmunini tahlil qiling va savollarga javob yozing.\n\nIlmdin kasb qilki, sud emas,\nCharx mushkillarini hal qilmoq.\nLekin ul ilm dog'i naf etmas,\nBilibon bo‘lmasa amal qilmoq.",
        "parts": [
            {
                "key": "a",
                "label": "Ushbu she’riy parchada ulug‘langan fazilatni aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "ILMGA AMAL QILISH"
            },
            {
                "key": "b",
                "label": "Ushbu she’riy parchada qaysi illat qoralanganini aniqlang.",
                "placeholder": "O'Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "ILMGA AMAL QILMASLIK"
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
            "Ba'zilar ta'lim olish jarayonida mehnat faoliyati bilan ham shug'ullansa tajriba oshib boradi deyishadi, ayrimlari esa ta'lim jarayonida chalg'imasidan faqat bilim olish muhimligini ta'kidlashadi",
            "",
            "• Fikr-mulohazalaringizni publitsistik uslubda bayon qiling.",
            "• Fikrlaringizni mantiqiy izchillikda, adabiy til me’yorlariga amal qilgan holda ifodalang.",
            "• Bayon qilinayotgan barcha fikr-mulohazalar faqat mavzu doirasida bo‘lishi lozim.",
            "",
            "DIQQAT! Esse uchun reja tuzilmaydi, epigraf qo‘yilmaydi.",
            "",
            "ESLATMA: ESSE qo‘lda tekshiriladi va yakunda e’lon qilinadi."
        ].join("\n"),
        "points": 0
    }


];
