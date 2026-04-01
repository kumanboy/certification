// app/exam/questions.ts
import type {Question} from "@/types";

export const QUESTIONS: Question[] = [
    // 1
    {
        "id": 1,
        "questionText": "Quyidagi qatorlardan qaysisida barcha so‘zlar imlo jihatdan to‘g‘ri yozilgan?",
        "questionType": "multiple_choice",
        "options": [
            "tamosha, muvaffaqiyat, xokisor",
            "munosib, mutolaa, xayrixoh",
            "murojat, taaluqli, mayus",
            "taxlit, shavqat, xolos"
        ],
        "correctAnswer": "B",
        "points": 1.7
    },

// 2
    {
        "id": 2,
        "questionText": "Quyidagi gapda qanday turdagi imloviy xatolik(lar) mavjudligini aniqlang.\n\nIlmiy tadqiqot markazi tomonidan tayorlangan qo‘llanmada o‘quvchilar uchun mo‘ljallangan yo‘l-yo‘riqlar batafsil bayon etilgan bo‘lib, ayrim bo‘limlarda hamma vaqt uchraydigan muommolar ham alohida ko‘rsatib o‘tilgan.\n\n1. unli yoki undosh tovushlar imlosiga oid;\n2. chiziqcha bilan yozish imlosiga oid;\n3. qo‘shib yoki ajratib yozish imlosiga oid;\n4. asos va qo‘shimchalar imlosiga oid.",
        "questionType": "multiple_choice",
        "options": [
            "1, 3",
            "faqat 2",
            "2, 4",
            "1, 2, 3"
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
        "questionText": "Raqam bilan ko‘rsatilgan qaysi so‘zlar nutqda og‘ir so‘zi bilan ma’nodoshlik hosil qila oladi?",
        "questionType": "multiple_choice",
        "imageUrl": "/images/q3-diagram.png",
        "options": [
            " 1, 2, 5",
            " 2, 3, 6",
            "1, 4, 5",
            "3, 4, 6"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

    // 4
    // 4 (diagram MCQ)
    {
        "id": 4,
        "questionText": "So‘zning leksik mazmuni noto‘g‘ri izohlangan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Tafakkur — insonning borliqni ongida tahlil etish, umumlashtirish va xulosa chiqarish jarayoni.",
            "Tadrij — voqea-hodisaning bosqichma-bosqich, izchil rivojlanib borishi.",
            "Talqin — matn, hodisa yoki fikrning mazmunini sharhlash va izohlash.",
            "Tazyiq — biror shaxsni e’zozlash, unga yuksak hurmat va ehtirom ko‘rsatish."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,


    // 5 (“Ayon”) — plain MCQ with textual diagram labels in the stem
    {
        "id": 5,
        "questionText": "Qaysi gapda qo‘shimcha qo‘llash bilan bog‘liq uslubiy xatolik mavjud?",
        "questionType": "multiple_choice",
        "options": [
            "Murabbiyning har bir ko‘rsatmasini ortiqcha tortishuvsiz bajaradigan o‘yinchilar jamoaga ancha naf keltirdi.",
            "Kotibning yig‘ilishda aytilgan fikrlarni daftarga batafsil qayd etganini rahbar alohida e’tirof etdi.",
            "Ukasiga mensimaslik bilan muomalada bo‘ladigan kishilar orasida mehr-oqibat bo‘lishi qiyin.",
            "Savdogar xaridorga buyumning sifatliligini maqtayverib, oxiri uni sotib olishga ko‘ndirdi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,

    // 6
    {
        "id": 6,
        "questionText": "Quyidagi gapda raqam bilan ko‘rsatilgan o‘rinlarga mazmunan mos tushadigan so‘zlarni aniqlang.\n\nInsonning [1] teranlashgan sari voqelikni idrok etish doirasi kengayadi, [2] esa shu idrokni ichki poklanish va ruhiy yuksalish bilan uyg‘unlashtirib, komillikka yetaklaydi. Turmushda ne’matlarni oqilona [3] etish kishiga nafaqat mol-dunyoni, balki vaqt va imkoniyatni ham qadrlashni o‘rgatadi.",
        "questionType": "multiple_choice",
        "options": [
            "1-tasavvur; 2-tasavvuf; 3-tasarruf",
            "1-tafakkur; 2-tadabbur; 3-tasavvur",
            "1-taradud; 2-tavakkal; 3-tasaddiq",
            "1-takalluf; 2-tahayyul; 3-taraqqiy"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,


    // 7 (match-table)
    {
        "id": 7,
        "questionText": "Berilgan gapda qatnashgan so‘zlarning morfem tarkibi haqidagi hukmlardan nechtasi to‘g‘ri ekanini aniqlang.\n\nMehr ulashish, bemorlarga dalda berib turish, mushkul kunlarda ko‘maklashish xalqimizning qadimiy qadriyatlaridan sanaladi.\n\n1. Gapda yordamchi fe’l bilan tuzilgan fe’l shakli qatnashgan.\n2. Gap tarkibida so‘z yasovchi qo‘shimcha yordamida yasalgan ot mavjud.\n3. Kelishik qo‘shimchasi olgan so‘zlar qo‘llangan.\n4. Faqat sifat asosidan yasalgan otlar ishtirok etgan.\n5. Yasama fe’l qatnashgan.",
        "questionType": "multiple_choice",
        "options": [
            "ikkitasi",
            "uchtasi",
            "to‘rttasi",
            "bittasi"
        ],
        "correctAnswer": "C",
        "points": 1.7
    }
    ,
    // 8) Har uchala parchada ham ishtirok etgan fe'l shakllari
    {
        "id": 8,
        "questionText": "Berilgan gapda qatnashgan fe’llar haqidagi xato hukmni aniqlang.\n\nBahor kirib kelgach, bog‘lar yashnab, qushlar sayray boshladi, odamlar esa dalalarda mehnat qilib, ko‘ngli yorishgan holda uylariga qaytishardi.",
        "questionType": "multiple_choice",
        "options": [
            "Gapda fe’lning vazifa shakllaridan bir nechtasi ishtirok etgan.",
            "Yasama fe’llar turli sintaktik vazifada qo‘llangan.",
            "Sof fe’llar bir xil zamon shaklida kelmagan.",
            "Barcha fe’llar faqat o‘zlik nisbatida qo‘llangan."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,
    // 9) Otlar haqidagi to‘g‘ri ma’lumot
    {
        "id": 9,
        "questionText": "Berilgan gaplarda qatnashgan \"orqali\" ko‘makchisi qanday munosabat ifodalaganini muvofiqlashtiring.\n\n1. Ustozning pand-nasihatlari orqali ko‘plab yoshlar hayotda o‘z yo‘lini topadi.\n2. Murojaat orqali emas, samimiy suhbat orqali masala tezroq hal bo‘ldi.\n3. Ilm orqali inson nafaqat kasb egallaydi, balki tafakkurini ham charxlaydi.\n\na) vosita;  b) usul;  c) sabab;  d) yo‘l",
        "questionType": "multiple_choice",
        "options": [
            "1-d  2-b  3-a",
            "1-a  2-c  3-d",
            "1-b  2-d  3-c",
            "1-c  2-a  3-b"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 10) Hollar haqida to‘g‘ri ma’lumot
    {
        "id": 10,
        "questionText": "Berilgan gapda alohida ajratib ko‘rsatilgan so‘z haqidagi to‘g‘ri hukmni aniqlang.\n\nVijdon insonni eng murakkab vaziyatlarda ham to‘g‘ri yo‘lga boshlovchi mezon sanaladi.",
        "questionType": "multiple_choice",
        "options": [
            "Ot bilan ifodalangan sodda kesim tarkibida qatnashgan.",
            "Hokim qismi sifatdosh bilan ifodalangan so‘z birikmasining tobe qismi bo‘lib kelgan.",
            "Kelishik qo‘shimchasi vositasida bog‘langan so‘z birikmasining hokim qismi bo‘lgan.",
            "Yasama ravish bilan ifodalangan hol tarkibida qo‘llangan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 11) Mazmun va grammatik bog‘lanish
    // 11
    {
        "id": 11,
        "questionText": "Berilgan she’riy parcha haqidagi hukmlardan nechtasi to‘g‘ri ekanini aniqlang.\n\nTun bag‘rida xayollarim jim oqarkan,\nKo‘nglim sensiz huvillagan bog‘ni esladi.\nMen seni unutdim, deb ko‘p bor aldandim,\nAmmo yurak har safar nomingni boshlabdi.\nKetgan izlaringni shamollar yopsa-da,\nUmid ko‘zim yana yo‘lingga termuldi.\n\n1. Parchada ham ot kesim, ham fe’l kesim qatnashgan.\n2. Ega faqat kishilik olmoshi bilan ifodalangan.\n3. Holning kamida uch xil ma’no turi uchraydi.\n4. Shaxsi noma’lum gap mavjud.\n5. Vositasiz to‘ldiruvchi faqat fe’l kesimga tobelangan.",
        "questionType": "multiple_choice",
        "options": [
            "ikkitasi",
            "uchtasi",
            "to‘rttasi",
            "bittasi"
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 12
    {
        "id": 12,
        "questionText": "Berilgan gapda qo‘llangan tinish belgilariga doir to‘g‘ri hukmni aniqlang.\n\nMuallifning “Hikmatlar xazinasi” asarida shunday satr bor: “Yaxshi do‘st — yelka, yomon do‘st — kulfat”. Adib bu fikr orqali inson hayotida sadoqatli hamroh beqiyos tayanch ekanini uqtiradi. Ba’zan “samimiy” ko‘ringan kishilar (bunday holatlar turmushda tez-tez uchraydi) odamni adashtirishi ham mumkin.",
        "questionType": "multiple_choice",
        "options": [
            "Tire bog‘lovchisiz qo‘shma gap qismlari orasida qo‘llangan.",
            "Qo‘shtirnoq belgisi ikki xil vazifada ishlatilgan.",
            "Qavs va tire ajratilgan bo‘lakni hosil qilishda birgalikda qo‘llangan.",
            "Tire to‘liqsiz gapni ifodalash uchun qo‘llangan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 13
    {
        "id": 13,
        "questionText": "Mixail Lermontovning “Zamonamiz qahramoni” romanida Pechorin obrazi orqali ilgari surilgan yetakchi badiiy-falsafiy mazmunni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Muallif kuchli iroda va qat’iyat egasi bo‘lgan shaxs har qanday ijtimoiy muhitda ham baxtga erishishini ko‘rsatgan.",
            "Asarda o‘z zamonasi bilan murosaga kira olmagan, ichki ziddiyatlar girdobida yashagan va ma’naviy tayanchini yo‘qotgan “ortiqcha odam” timsoli ochib berilgan.",
            "Roman markazida urush va sarguzashtlar fonida chin muhabbatning insonni poklovchi kuchi tasvirlangan.",
            "Muallif Kavkaz manzaralari va mahalliy xalq turmushini tasvirlash orqali etnografik kuzatuvlarni birlamchi maqsad qilgan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 14
    {
        "id": 14,
        "questionText": "Yuy Xuaning “Yashamoq” asaridagi Jiyashen obrazi haqida to‘g‘ri hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "U boy xonadonda ulg‘aygan bo‘lsa-da, turmush sinovlari qarshisida matonatini yo‘qotmay, oilasini saqlab qolishga urinadigan sabrli va bardoshli ayol sifatida tasvirlangan.",
            "U erining boylikka ruju qo‘yishini qo‘llab-quvvatlagan, shu sabab oiladagi tanazzulning asosiy sababchisiga aylangan qahramondir.",
            "Jiyashen asarda faqat farzandlari taqdiriga befarq, o‘z manfaatini ko‘zlaydigan shaxs sifatida namoyon bo‘ladi.",
            "U hayotdagi qiyinchiliklarga dosh berolmay, oilasini tashlab ketgan va keyinchalik pushaymon bo‘lgan obrazdir."
        ],
        "correctAnswer": "A",
        "points": 1.7
    }
    ,

// 15
    {
        "id": 15,
        "questionText": "Nazar Eshonqulning “Maymun yetaklagan odam” hikoyasi mazmun-mohiyatiga mos keladigan to‘g‘ri hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Asarda qatag‘on davrida jismonan ezilgan, ammo e’tiqodi va irodasi bilan boshqalarga namuna bo‘lgan qahramon ulug‘lanadi.",
            "Hikoyada insonning tubanlashuvi, erksizlik va ma’naviy qulga aylanishi ramziy-obrazli yo‘sinda badiiy talqin etilgan.",
            "Muallif jamiyatdagi adolatsizliklarni kulgi va hajv vositasida fosh etib, ijtimoiy optimizmni ilgari suradi.",
            "Asarda bosh qahramonning san’atga sadoqati tufayli ruhiy yuksalishga erishgani va fojiadan qutulgani ko‘rsatiladi."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 16
    {
        "id": 16,
        "questionText": "Abdulla Qahhorning “Asror bobo” hikoyasidan olingan parcha mazmuniga mos keladigan hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Jang maydonida dushmanga nisbatan murosasizlik eng oliy fazilat ekani, rahm-shafqat esa zaiflik belgisi sifatida talqin etilgan.",
            "Asarda urushning shafqatsiz manzarasi fonida ham inson qalbidagi muruvvat va o‘zga dardini his etish tuyg‘usi so‘nmasligi ta’sirchan ifodalangan.",
            "Parchada harbiy topshiriqni bajarishda ikkilanmaslik va buyruqqa ko‘r-ko‘rona bo‘ysunish asosiy g‘oya sifatida ilgari surilgan.",
            "Muallif jangda omon qolish faqat hushyorlik va jismoniy ustunlikka bog‘liq ekanini ko‘rsatishga intilgan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    }
    ,

// 17
    {
        "id": 17,
        "questionText": "Erkin Vohidov she’ri mazmunidan kelib chiqib, unda ilgari surilgan asosiy fikrni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Jaholatga berilgan kimsa boshqalarga zarar yetkazish bilan birga, oxir-oqibat o‘zini ham halokatga mahkum etishi ta’kidlangan.",
            "Inson hayotda muvaffaqiyatga erishishi uchun har qanday vositani qo‘llashi mumkinligi uqtirilgan.",
            "She’rda yovuzlikka qarshi yovuzlik bilan javob berish eng to‘g‘ri yo‘l ekani ilgari surilgan.",
            "Shoir johil kishilarni jamiyatning eng foydali va hushyor qatlami sifatida tasvirlagan."
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
            "INSON ORGANIZMIDAGI BIOLOGIK SOATLAR\n" +
            "I\n" +
            "\n" +
            "Inson tanasi tashqi muhitdagi kunduz va tun almashinuviga moslashib yashaydi. Bu moslashuvni boshqaruvchi ichki mexanizm biologik soat deb ataladi. U uyqu va uyg‘oqlik holati, tana harorati, gormonlar ajralishi, ishtaha, diqqat va ish unumdorligi kabi jarayonlarni muayyan tartibda boshqaradi. Olimlarning aniqlashicha, biologik soat ayniqsa bosh miyaning ayrim markazlari bilan chambarchas bog‘liq bo‘lib, yorug‘lik signaliga juda sezgir hisoblanadi. Ertalab quyosh nuri ko‘zga tushganda organizm uyg‘oqlikka tayyorlana boshlaydi, kechqurun yorug‘lik kamayganda esa tana asta-sekin dam olish rejimiga o‘tadi. Shuning uchun ham kechasi uzoq vaqt sun’iy yorug‘lik ostida qolish ichki ritmning buzilishiga sabab bo‘lishi mumkin.\n" +
            "\n" +
            "II\n" +
            "\n" +
            "Biologik ritmning muhim belgilaridan biri — melatonin gormonining ajralishidir. Bu gormon asosan qorong‘ilik kuchayganda ko‘proq ishlab chiqariladi va organizmga dam olish vaqti kelganini bildiradi. Aksincha, ertalab yorug‘lik ta’sirida uning miqdori kamayadi. Shu bois tun yarmigacha telefon, planshet yoki kompyuter ekraniga tikilib o‘tirish uyqu sifatini pasaytiradi. Chunki ekranlardan tarqaladigan kuchli nur miyaga “hali kun tugamadi” degan signal yuboradi. Natijada odam uxlashga yotsa ham, tez uxlab qololmaydi, uyqusi yuzaki bo‘ladi yoki tongda lohas uyg‘onadi. Bunday holat uzoq davom etsa, diqqatning susayishi, asabiylik va ish faoliyatining pasayishi kuzatilishi mumkin.\n" +
            "\n" +
            "III\n" +
            "\n" +
            "Biologik soat faqat uyqu bilan bog‘liq emas. U ovqat hazm qilish, jismoniy faollik va aqliy mehnat samaradorligiga ham ta’sir ko‘rsatadi. Masalan, ayrim odamlarda ertalab diqqat kuchliroq bo‘lsa, boshqalarida tushdan keyin fikrlash faollashadi. Biroq bu farqlarga qaramay, organizm muntazam tartibni yoqtiradi. Har kuni turli vaqtda ovqatlanish, ba’zan juda kech uxlash, ba’zan esa tonggacha bedor yurish ichki muvozanatga salbiy ta’sir qiladi. Ayniqsa, tungi smenada ishlaydiganlar yoki tez-tez uzoq safarga chiqib, vaqt mintaqasini o‘zgartiradiganlar biologik ritm buzilishidan ko‘proq aziyat chekadilar. Bunday vaziyatda tananing yangi rejimga moslashishi uchun ma’lum vaqt talab etiladi.\n" +
            "\n" +
            "IV\n" +
            "\n" +
            "Biologik soatni me’yorda saqlash uchun bir necha oddiy qoidalarga amal qilish tavsiya etiladi. Avvalo, har kuni deyarli bir xil vaqtda uxlash va uyg‘onish foydali. Ikkinchidan, kechki payt kuchli ekran nurlarini kamaytirish, xonani salqin va sokin saqlash uyqu sifatini yaxshilaydi. Uchinchidan, ertalab tabiiy yorug‘likda ko‘proq bo‘lish organizmga kun boshlanganini aniqroq bildiradi. Jismoniy mashqlar ham biologik ritmni tartibga solishda muhim o‘rin tutadi, biroq ularni yotishdan oldin emas, kunning faol qismida bajarish ma’qul. Demak, biologik soat inson salomatligining ko‘zga ko‘rinmas, ammo nihoyatda muhim boshqaruv tizimlaridan biri bo‘lib, unga e’tibor berish sog‘lom turmushning asosiy shartlaridan sanaladi.\n"
        ].join("\n"),
    },

    // 18) VIRUSLAR – mos bo‘lmagan ma'lumot
    // 18
    {
        "id": 18,
        "questionText": "Matn mazmuniga mos to‘g‘ri ifodalangan ma’lumotni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Biologik soat faqat uyqu vaqtini boshqaradi, boshqa jarayonlarga ta’sir ko‘rsatmaydi.",
            "Melatonin asosan yorug‘lik kuchayganda ko‘proq ishlab chiqariladi.",
            "Kechasi sun’iy yorug‘lik ta’sirida uzoq qolish ichki ritmning buzilishiga olib kelishi mumkin.",
            "Biologik ritm buzilishi organizmning yangi sharoitga tezroq moslashishiga yordam beradi."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 19,
        "questionText": "Matn mazmunida aks etmagan ma’lumotni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Biologik soat yorug‘lik signaliga sezgir tizim hisoblanadi.",
            "Tungi smenada ishlaydiganlar biologik ritm buzilishidan ko‘proq aziyat chekishi mumkin.",
            "Ekran nurining ta’siri melatonin ajralishiga aloqador bo‘lishi mumkin.",
            "Biologik soatning irsiy xususiyatlari mutlaqo o‘zgarmas bo‘lib, uni tartibga solib bo‘lmaydi."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 20,
        "questionText": "Matn mazmunida aks etgan ma’lumotni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Har xil vaqtda ovqatlanish organizmga foydali mashq vazifasini bajaradi.",
            "Ertalab tabiiy yorug‘likda bo‘lish organizmga kun boshlanganini bildiradi.",
            "Jismoniy mashqlarni faqat yotishdan oldin bajarish biologik ritmni yaxshilaydi.",
            "Biologik soat faqat bolalar va qariyalarda muhim hisoblanadi."
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 21,
        "questionText": "Matn mazmuniga oid bo‘lgan to‘g‘ri ma’lumotni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Organizm muntazam tartibni yoqtirgani uchun har kuni bir xil rejimga yaqin yashash foydali sanaladi.",
            "Tabiiy yorug‘lik biologik soat faoliyatiga deyarli ta’sir ko‘rsatmaydi.",
            "Uyqu sifatining pasayishi faqat jismoniy charchoq bilan bog‘liq bo‘ladi.",
            "Biologik ritm buzilishi inson diqqatiga ta’sir qilmaydi."
        ],
        "correctAnswer": "A",
        "points": 1.7
    },
    {
        "id": 22,
        "questionText": "Matn mazmuniga oid xato shakllantirilgan gapni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Biologik soat uyqu va uyg‘oqlik holatidan tashqari tana harorati hamda ish unumdorligiga ham ta’sir ko‘rsatadi.",
            "Kechqurun kuchli ekran nurlarini kamaytirish uyqu sifatini yaxshilashga yordam beradi.",
            "Vaqt mintaqasi o‘zgarganda organizmning yangi rejimga moslashishi uchun vaqt kerak bo‘lishi mumkin.",
            "Biologik ritmni me’yorda saqlash uchun odam har kuni butunlay turli vaqtda uxlashi tavsiya etiladi."
        ],
        "correctAnswer": "D",
        "points": 1.7
    }
    ,
    /* =========  MATN (Kattalar oqshomi) + Savollar 23–27  ========= */

// M) Reading passage (shows as “M” in the navigator)
    {
        id: 2301, // Navigator “M” sifatida ko‘rsatiladi (questionType: "passage")
        questionType: "passage",
        questionText: `
Anton Chexov. Semiz va oriq (hikoya)

Nikolaev temir yo‘lining vokzalida ikki oshna uchrashib qoldi. Biri semiz, biri oriq. Semiz hozirgina vokzalda ovqat yegan — yog‘liq labi pishgan olchaday yaltirab turibdi. Undan xeres vinosi va flerd oranje degan atirning hidi kelar edi. Oriq esa vagondan hozirgina tushgan va chemodan, tugun, kartonlar ko‘tarib olgan edi. Undan vetchina va qahva hidi kelar edi. Uning orqasida oriq, cho‘ziq yuzli xotini, qisiq ko‘zli novcha gimnazist o‘g‘li turibdi.
— Porfiriy! — dedi semiz, oriqni ko‘rib. — Senmisan! Bo‘talog‘im! Necha-necha yoz, necha-necha qishlar o‘tib ketdi!
— E! — dedi oriq hayron qolib. — Misha! Birodarim! Qadrdonim. Xo‘p eson-omon bormisan?
Oshnalar qayta-qayta, uch marta, og‘iz-burun o‘pishgandan keyin ko‘zlariga yosh olib tikilishdi. Ikkovi ham o‘zida yo‘q xursand bo‘lib dovdirab qoldi.
— Azizim! — dedi oriq og‘iz-burun o‘pishgandan keyin. — Buni qara-ya! Xo‘p uchrashib qoldik-da! Qani menga tuzukroq qarachi! Hali ham o‘sha ilgarigidek, chiroyliksan-a! Hamon o‘shanday jonon, olifta! Obbo sen-ey! Xo‘sh qalaysan? Boyidingmi? Xotin oldingmi? Men uylandim, mana... Bu xotinim, Luiza Vantsenbax... Lyuteran mazhabida... Bu esa o‘g‘lim Nafanail, uchinchi klassda o‘qiydi... Nafanail, bu kishi mening qadrdon do‘stim! Gimnaziyada birga o‘qiganmiz.
Nafanail biroz o‘ylab turib, shapkasini boshidan oldi.
— Gimnaziyada birga o‘qiganmiz,— dedi oriq davom etib. — Esingda bormi, seni nima deb kalaka qilishardi? Hukumat kitobini papiros bilan kuydirganing uchun seni Gerostrat* deb kalaka qilishar edi. Men chaqimchi bulganim uchun Efialt* deb kalaka qilishardi. Ha-ha... Bola edik! Tortinma, Nafanya! Yaqinroq kel... Bu mening xotinim Vantsenbax... O‘zi lyuteran...
Nafanail biroz o‘ylab turib, o‘zini otasining orqasiga oldi.
— Xo‘sh, ishlar qalay, do‘stim? — dedi semiz, do‘stiga nazar tashlab. — Biron joyda xizmat qilasanmi? Kattaroq amalga mindingmi?
— Xizmat qilaman, do‘stim! Ikki yildan beri kollejskiy asessorman, Stanislav* oldim. Maoshning mazasi yo‘q... Sadqaiysar-kuya! Xotinim muzika darsi beradi, men uyda yog‘ochdan portsigar qilib sotaman. Juda g‘alati portsigarlar yasayman. Bittasi bir so‘m. Ulgurji oladigan odamga arzonroq qilib beraman. Sababi tirikchilik-da. Departamentda xizmat qilar edim, shu mahkama bo‘yicha bu yoqqa ishlar mudiri bo‘lib keldim... Shu yerda xizmat qilaman. Xo‘sh, senchi? Statskiy sovetnik bo‘lgandirsan, deyman? A?
— Yo‘q, azizim, yuqoriroqdan kelaver, — dedi semiz. — Men tayniy sovetnik bo‘lib qoldim... Ikkita Yulduzim* bor.
Birdaniga oriqning rangi oqarib ketdi, toshday qotib qoldi, lekin sal o‘tmay yuzi tarvayib, kuydirgan kalladay irjaydi; xuddi yuz-ko‘zidan uchqunlar yog‘ilayotganga o‘xshar edi. O‘zi qo‘nishdi, bukchaydi... chamadoni, tuguni va kartonlari ham burishib qolganday bo‘ldi... Xotinining cho‘ziq yuzi yana ham cho‘zildi; Nafanail g‘oz turib, mundirining hamma tugmalarini soldi...
— Men janobi oliylari... Ko‘p yaxshi!.. Bolaligingdan beri do‘st bo‘lib yurgan kishing shugday martabaga yetsa! Hi-hi!
— Qo‘ysangchi! — dedi semiz aftini burishtirib. — Bu gaplarning nima keragi bor? Birga, ko‘rpa tepishib katta bo‘lgan odamlarmiz, muncha ehtirom-u qo‘l qovushtirishning nima keragi bor!
— Qo‘l qovushtirmasdan bo‘lar ekanmi... Nainki... — dedi oriq yana ham qo‘nishib, janoblarining nazari marhamatlari!.. Go‘yoki obihayot... Bu janobi oliylari, o‘g‘lim Nafanail... xotinim Luiza, lyuteran, bir daraja...
Semiz unga qarshi nimadir demoqchi edi, uning yuzidagi ortiq darajada bo‘lgan mutelik, xoksorlik alomatlari ensasini qotirib yubordi. U o‘girilib, xayrlashgani qo‘l uzatdi.
Oriq butun vujudi bilan ta’zim qilib xayrlashdi va xitoydan hi-hiladi. Xotin iljaydi. Nafanail tovoni bilan qadam tashlayman deb shapkasini qo‘lidan tushirib yubordi. Uchchovi ham o‘zida yo‘q xursand edi.



  `.trim(),
    },

// 23) Bola o‘zini “katta” deb his qilishi nimada aks etgan?
    // 23
    {
        "id": 23,
        "questionText": "Anton Chexovning “Semiz va ozg‘in” hikoyasi mazmuniga oid xato hukm berilgan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Asarda mansab oldida insoniy tenglik tuyg‘usining yemirilishi tasvirlangan.",
            "Hikoyada eski do‘stlikning samimiy ruhi oxirigacha saqlanib qoladi.",
            "Odamlarning lavozimga qarab munosabat o‘zgartirishi tanqid qilingan.",
            "Muallif kulgi orqali jamiyatdagi ma’naviy qullikni fosh etgan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 24,
        "questionText": "Anton Chexovning “Semiz va ozg‘in” hikoyasi mazmuniga oid to‘g‘ri hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Hikoyada ijtimoiy martaba kishilar o‘rtasidagi tabiiy va samimiy munosabatni buzib yuborishi ko‘rsatilgan.",
            "Asarda mansabdor shaxslarning xalq uchun qilgan fidokorona xizmatlari tasvirlangan.",
            "Muallif do‘stlikning har qanday holatda ham o‘zgarmasligini isbotlashga intilgan.",
            "Hikoyada kambag‘allikning asosiy sababi ilm-fanning rivojlanmaganida ekani ko‘rsatilgan."
        ],
        "correctAnswer": "A",
        "points": 1.7
    },
    {
        "id": 25,
        "questionText": "Anton Chexovning “Semiz va ozg‘in” hikoyasi qahramonlariga oid xato hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Ozg‘in obrazida mansab oldida o‘z qadrini yo‘qotib qo‘yadigan kimsa gavdalanadi.",
            "Semiz qahramon eski tanishini ko‘rib, dastlab samimiy munosabat bildiradi.",
            "Ozg‘inning xotini va o‘g‘li vaziyatdagi sun’iylikni yanada kuchaytiruvchi vosita bo‘lib xizmat qiladi.",
            "Semiz qahramon do‘stining laganbardorona muomalasidan mamnun bo‘lib, uni qo‘llab-quvvatlaydi."
        ],
        "correctAnswer": "D",
        "points": 1.7
    },
    {
        "id": 26,
        "questionText": "Anton Chexovning “Semiz va ozg‘in” hikoyasidan olingan quyidagi vaziyatda qanday mazmun ifodalanganini aniqlang.\n\nOzg‘in do‘sti yuqori martabali amaldor ekanini bilgach, birdan qaddini bukib, ovozini o‘zgartiradi, yuzidagi samimiy tabassum esa sun’iy iljayishga aylanadi.",
        "questionType": "multiple_choice",
        "options": [
            "Insonning kutilmagan quvonchdan hayajonga tushgani ifodalangan.",
            "Moddiy yetishmovchilik kishini ruhan sindirishi tasvirlangan.",
            "Mansab oldida ichki erkinlik va tabiiylikning yo‘qolishi ifodalangan.",
            "Eski do‘stlar o‘rtasidagi hurmat yanada mustahkamlangani ko‘rsatilgan."
        ],
        "correctAnswer": "C",
        "points": 1.7
    },
    {
        "id": 27,
        "questionText": "Anton Chexovning “Semiz va ozg‘in” hikoyasidan anglashiladigan asosiy g‘oyani aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Jamiyatda martaba qanchalik baland bo‘lsa, inson shunchalik hurmatga loyiq bo‘ladi.",
            "Kambag‘al odam boy yoki mansabdor kishiga doimo bo‘ysunishi kerak.",
            "Tashqi mavqe oldida o‘zligini yo‘qotish insonni kulgili va ayanchli holga soladi.",
            "Chin do‘stlik rasmiy martaba va ijtimoiy tabaqadan ustun turmaydi."
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

 1. 

Orazingni bog‘ aro chun ko‘rdi hayron bo‘ldi gul,
Bargsiz qoldi, nedinkim, bas parishon bo‘ldi gul.
 2. 

Bodadin gul-gul ko‘rub ul yuzni oning hayridin,
Chok-chok o‘lgan ko‘nguldek tah-batah qon bo‘ldi gul.
 3. 

Guluzorim kishvari husn ichra bo‘ldi podshoh,
Rost andoqkim, chaman mulkida sulton bo‘ldi gul.
 4. 

Sayri bog‘ aylar da’vo chashmi zaxmi da’fig‘a,
Har taraf tin chobukum davrida qalqon bo‘ldi gul.
 5. 

La’li komimdur, qoshimda kelsa ul gul xirmani,
May tilor ko‘nglum, chu bazmimda farovon bo‘ldi gul.
 6. 

Kecha-kunduz qilma gulbongingni bas, ey andalib,
Kim senga besh kun bu gulshan ichra mehmon bo‘ldi gul.
 7. 

Gul chog‘i yori safar aylab, Navoiy jonig‘a
Har biri bir toza qonlig‘ dog‘i hijron bo‘ldi gul.  

Lug‘at
 1. boda — sharob, may
 2. kishvar — mamlakat, o‘lka
 3. kom —I) maqsad, tilak II) og‘iz
 4. gul xirmani — gul to‘plami; bu yerda yor nazarda tutiladi
 5. gulbong — nola, fig‘on
 6. andalib — bulbul
  `.trim(),
    }
    ,

    // 28–32: savollar (g‘azal bo‘yicha)
    // 28
    {
        "id": 28,
        "questionText": "G‘azal baytlarida ishtirok etgan she’riy san’atlar haqidagi to‘g‘ri hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "1-baytda gulning hayron bo‘lib, bargsiz va parishon holga tushishi orqali jonlantirish san’ati qo‘llangan.",
            "3-baytda yor bilan gul o‘rtasidagi munosabat faqat tashbeh asosida berilgan, boshqa san’at kuzatilmaydi.",
            "5-baytda “kom” so‘zi faqat bir ma’noda qo‘llanib, hech qanday badiiy ma’no hosil qilmagan.",
            "6-baytda andalibga murojaat qilinmagan, bayt xolis tasvir asosida qurilgan."
        ],
        "correctAnswer": "A",
        "points": 1.7
    },
    {
        "id": 29,
        "questionText": "G‘azal baytlarining mazmuni to‘g‘ri izohlangan javobni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "Shoir gulni yorning husniga tenglashtirib, ularni mutlaqo bir xil deb ko‘rsatadi.",
            "Yorning jamoli oldida gul ham lol qolib, o‘z husnini yo‘qotganday tasvirlanadi.",
            "G‘azalda bulbul guldan ustun qo‘yilib, yorning husni inkor etiladi.",
            "Shoir gulni hijron timsoli emas, faqat quvonch ramzi sifatida talqin qiladi."
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 30,
        "questionText": "G‘azal baytlarida aks etgan hukmni aniqlang.",
        "questionType": "multiple_choice",
        "options": [
            "2-baytda gul sharob ta’sirida quvnoq bo‘lib, yor husnidan bexabar qoladi.",
            "3-baytda gulning chaman ichidagi saltanati yorning husn mamlakatidagi podshohligiga qiyoslangan.",
            "6-baytda bulbulning nolasiz yashashi gulning abadiy mehmon ekaniga bog‘lanadi.",
            "7-baytda gul hijron emas, visol va’dasi sifatida talqin etilgan."
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 31,
        "questionText": "G‘azal baytlarida qo‘llangan she’riy san’at(lar)ni aniqlang.\n\n1. Tashxis — jonsiz narsalarni jonli sifatida tasvirlash\n2. Apostrofa — jonli yoki jonsiz narsaga murojaat qilish\n3. Iyhom — bir so‘zning ikki ma’noda kelishi",
        "questionType": "multiple_choice",
        "options": [
            "faqat 1",
            "1, 2, 3",
            "faqat 2, 3",
            "faqat 1, 3"
        ],
        "correctAnswer": "B",
        "points": 1.7
    },
    {
        "id": 32,
        "questionText": "G‘azalda qaysi o‘xshatish mavjud?",
        "questionType": "multiple_choice",
        "options": [
            "Gul yarador ko‘ngilga o‘xshatilgan.",
            "Yorning sochi bulbulga o‘xshatilgan.",
            "Oshiqning ko‘ngli chaman ichidagi sultonga o‘xshatilgan.",
            "Yorning labi quyoshga o‘xshatilgan."
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
        "questionText": "Gaplar (33, 34, 35) va sintaktik tahlilga oid izohlar (A—F)ni o‘zaro to‘g‘ri moslashtiring.\n\n33. Ustozlar: “Avval tingla, keyin xulosa qil”, — deb bejiz aytishmaydi.\n34. Kitob insonni sukutda o‘ylashga, fikrni tartib bilan bayon etishga, hayotni teranroq anglashga o‘rgatadi.\n35. To‘g‘ri so‘zlash — odob, ortiqcha so‘zlamaslik esa donolikdir.\n\nA) Uyushgan bo‘lakli gap ishtirok etgan.\nB) Ajratilgan bo‘lakli gap ishtirok etgan.\nC) Shaxsi ma’lum gap ishtirok etgan.\nD) To‘liqsiz gap ishtirok etgan.\nE) Shaxsi umumlashgan gap ishtirok etgan.\nF) Kiritmali gap ishtirok etgan.",
        "questionType": "multiple_choice",
        "options": [
            "33-E, 34-A, 35-C",
            "33-C, 34-F, 35-D",
            "33-E, 34-B, 35-A",
            "33-F, 34-A, 35-E"
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
                "correct": "MARD"
            }
        ],
        "points": 1.1
    },
    {
        "id": 37,
        "questionType": "structured",
        "questionText": "Berilgan gapda qaysi tinish belgisi bilan bog‘liq xatolik kuzatilganini yozing.\n\n“Ustozim menga shunday dedi, “Ilmning qadri yoshligingda bilinmasa, keyin armon bo‘ladi”.”",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "JAVOB yozish uchun tinish belgisini ko'rsatish orqali yozing! Masalan  , . ! \"\"",
                "multiline": false,
                "correct": "\"\""
            }
        ],
        "points": 1.1
    },
    {
        "id": 38,
        "questionType": "structured",
        "questionText": "Berilgan har bir ko‘makchi shakli bilan ma’nodoshlik hosil qiluvchi kelishik qo‘shimchasini yozing.\n\n• tomon\n• qarab\n• sari",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "-GA"
            }
        ],
        "points": 1.1
    },
    {
        "id": 39,
        "questionType": "structured",
        "questionText": "Berilgan she’riy parchada qaysi gap bo‘lagi ajratilgan bo‘lak vazifasida qo‘llanganini aniqlang.\n\nKo‘nglim, ey do‘st, sening bir og‘iz so‘zingni kutib,\nTunlarimni hijron bilan, sukut bilan o‘tkazdi.",
        "parts": [
            {
                "key": "a",
                "label": "Javob:",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "UNDALMA"
            }
        ],
        "points": 1.1
    },
    {
        "id": 40,
        "questionType": "structured",
        "questionText": "Gapdagi so‘zlarning mazmun va grammatik jihatdan bog‘lanishini tahlil qiling.\n\nTadqiqotchilar zamonaviy kutubxonalarning [1]jamiyat hayotida ma’naviy yuksalishga xizmat qiluvchi maskan ekanini ta’kidlaydilar, chunki mutolaa odati [2]yoshlarda mustaqil fikrlash ko‘nikmasini shakllantiradi.",
        "parts": [
            {
                "key": "a",
                "label": "[1] raqami bilan ajratib ko‘rsatilgan so‘z tobelanib bog‘langan so‘zni yozing.",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "HAYOTIDA"
            },
            {
                "key": "b",
                "label": "[2] raqami bilan ajratib ko‘rsatilgan so‘z tobelanib bog‘langan so‘zni yozing.",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "SHAKLLANTIRADI"
            }
        ],
        "points": 1.1
    },
    {
        "id": 41,
        "questionType": "structured",
        "questionText": "Berilgan gaplarni grammatik jihatdan to‘g‘ri bog‘lang.\n\nBu qadimiy va salobatli madrasa shu qadar jimjit edi-ki, uning ichida […] faqat shamolning mayin shiviri sezilar, […] uzoq hovlidan kelayotgan qushlar sayrashi eshitilardi.",
        "parts": [
            {
                "key": "a",
                "label": "Nuqtalar o‘rniga qanday bog‘lovchi vositani qo‘yish mumkinligini yozing.",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "NA…, NA…"
            },
            {
                "key": "b",
                "label": "Nuqtalar o‘rniga qo‘yilgan bog‘lovchi vosita qo‘shma gapning qismlari o‘rtasida qanday munosabatni yuzaga keltirganini yozing.",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "INKOR MUNOSABATI"
            }
        ],
        "points": 1.1
    },
    {
        "id": 42,
        "questionType": "structured",
        "questionText": "She’riy parchada ifodalangan she’riy san’atlarni aniqlang va yozing.\n\nHijron o‘tida yondim, ko‘nglimda tuganmas alam,\nEy mehrsiz falak, sensan buncha sitamga sabab.",
        "parts": [
            {
                "key": "a",
                "label": "Baytda hijron va mehrsiz so‘zlari orqali qanday she’riy san’at yuzaga kelgan?",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "ISHTIQOQ"
            },
            {
                "key": "b",
                "label": "Baytda tazod she’riy san’atini qaysi so‘z hosil qilgan?",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "MEHRSIZ"
            }
        ],
        "points": 1.1
    },
    {
        "id": 43,
        "questionType": "structured",
        "questionText": "She’riy parchaning qofiyasini tahlil qiling va yozing.\n\nKo‘nglim aro yongan ishqimning nolasi,\nTunlar aro tinmas dardimning nolasi.",
        "parts": [
            {
                "key": "a",
                "label": "Baytda qofiyadosh so‘zlardagi raviyni yozing.",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "S"
            },
            {
                "key": "b",
                "label": "Baytda raviyning o‘rniga ko‘ra qofiyaning qaysi turi hosil bo‘lgan?",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "MUTLAQ QOFIYA"
            }
        ],
        "points": 1.1
    },
    {
        "id": 44,
        "questionType": "structured",
        "questionText": "Quyidagi parcha mazmunini tahlil qiling va savollarga javob yozing.\n\nQora zulfdin chiqib yuzing, ey mohliqo dilbar,\nTun ichra charaqlab ko‘ringan tong yulduzidek.",
        "parts": [
            {
                "key": "a",
                "label": "Parchada qora zulf nimaga o‘xshatilgan?",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "TUNGA"
            },
            {
                "key": "b",
                "label": "Parchada yorning yuzi nimaga o‘xshatilgan?",
                "placeholder": "O‘Z JAVOBINGIZNI KATTA BOSMA HARFLARDA YOZING",
                "multiline": false,
                "correct": "TONG YULDUZIGA"
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
