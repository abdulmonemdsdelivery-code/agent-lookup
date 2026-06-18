// ============================================================
// ملف البيانات — عدّل هنا أو استبدل المصفوفة بالكامل
// الحقول: id, name, iqama, date, area, grade (A-F)
// ============================================================

const AGENTS = [
  {
    "id": "1713495",
    "name": "ليتون محمود اميد علي",
    "iqama": "2521824868",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2126049",
    "name": "مد اشرف ال",
    "iqama": "2574704132",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "D"
  },
  {
    "id": "324774",
    "name": "وليد محمد علي حسا ن",
    "iqama": "2258850524",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "1642364",
    "name": "موسى قايد عبدالله قاسم سلام",
    "iqama": "2530801543",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "A"
  },
  {
    "id": "1053941",
    "name": "محمد ابولغيث اسماعيل حمزي",
    "iqama": "2462221363",
    "date": "Jun-26",
    "area": "Arar",
    "grade": "A"
  },
  {
    "id": "2112724",
    "name": "عبدالسلام ناجي مصلح احمد الجلال",
    "iqama": "2565725260",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "A"
  },
  {
    "id": "2260065",
    "name": "قمر زامان علي شير",
    "iqama": "2579923315",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "A"
  },
  {
    "id": "2155630",
    "name": "نسيم عبده خادم تاج",
    "iqama": "2572749089",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "A"
  },
  {
    "id": "2187798",
    "name": "كريم احمد جابر احمد تغيير البنك",
    "iqama": "2576785246",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2134485",
    "name": "معاذ احمد علي احمد",
    "iqama": "2287874321",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "A"
  },
  {
    "id": "330947",
    "name": "فارس حمزي",
    "iqama": "2361487461",
    "date": "Jun-26",
    "area": "Arar",
    "grade": "B"
  },
  {
    "id": "2074413",
    "name": "عبدالله محمد علي رضوان",
    "iqama": "2564143119",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "B"
  },
  {
    "id": "1872925",
    "name": "عبدالدائم اليوسفي",
    "iqama": "2258360540",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "1498511",
    "name": "يعقوب علي نعمان فارع",
    "iqama": "2515103915",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2073525",
    "name": "وليد محمد ليله",
    "iqama": "2526318528",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "407320",
    "name": "عبدالرحمن الحوفلي",
    "iqama": "2470620762",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2086163",
    "name": "بدر محمد الغباري",
    "iqama": "2567171109",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "2489346",
    "name": "نافيد رو ريمان وزير رو ريمان",
    "iqama": "2579922135",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "1066068",
    "name": "محمد امين محمد مجاهد",
    "iqama": "2497305439",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1981129",
    "name": "خليل رشاد حمود العاطفي",
    "iqama": "2488254984",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2121554",
    "name": "محمد احمد قايد البناء",
    "iqama": "2543583047",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "351115",
    "name": "احمد عبدالله ناصر علي",
    "iqama": "2230940856",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "B"
  },
  {
    "id": "963657",
    "name": "محمد احمد حسن قاسم",
    "iqama": "2285217093",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "B"
  },
  {
    "id": "2101087",
    "name": "علي عبدالله مضوني",
    "iqama": "2517342768",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "B"
  },
  {
    "id": "586819",
    "name": "علي دارس احمد",
    "iqama": "2143270219",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2185247",
    "name": "احمد إبراهيم بلح تغيير البنك",
    "iqama": "2576785238",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "1779514",
    "name": "عمار العطري",
    "iqama": "2339970820",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2074650",
    "name": "صالح جمال حامد",
    "iqama": "2513625828",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "2143126",
    "name": "علي علي حسن بدر",
    "iqama": "2546503810",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "1708555",
    "name": "صادق ناصر",
    "iqama": "2322227378",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "1962296",
    "name": "عدي عبدالملك حميد حسن علي",
    "iqama": "2553762879",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "B"
  },
  {
    "id": "1964030",
    "name": "سلمان حمود عبده سيف",
    "iqama": "2505291845",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "B"
  },
  {
    "id": "2101230",
    "name": "احمد عبدالله الجيشي",
    "iqama": "2525220840",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "B"
  },
  {
    "id": "2105567",
    "name": "محمد علي قاسم عجمي",
    "iqama": "2542528258",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "B"
  },
  {
    "id": "102514",
    "name": "ماجد الجبرتي",
    "iqama": "2271126217",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "1983114",
    "name": "عنان محمد العماري",
    "iqama": "2502554161",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "C"
  },
  {
    "id": "1998943",
    "name": "محمد هلال النشيري",
    "iqama": "2559809823",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "B"
  },
  {
    "id": "2169733",
    "name": "محمد زاهد رازا محمد",
    "iqama": "2574808016",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2073291",
    "name": "احمد فيصل السنيدي",
    "iqama": "2560603397",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "601906",
    "name": "محمد غالب عبد الخالق",
    "iqama": "2340372131",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1966436",
    "name": "عبد العزيز داود",
    "iqama": "2498365291",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "594065",
    "name": "وليد حامد الهادي محمد",
    "iqama": "2462958592",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "526666",
    "name": "محمد اويس ساروار",
    "iqama": "2468889585",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1151689",
    "name": "محمد بدر",
    "iqama": "2445497726",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "85344",
    "name": "محمود سالم",
    "iqama": "2134569561",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1629269",
    "name": "رسام محمد رسام",
    "iqama": "2359668122",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "2427053",
    "name": "هيثم احمد محمد المعزبه",
    "iqama": "2515111686",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "C"
  },
  {
    "id": "598251",
    "name": "سيف مهياس",
    "iqama": "2345649053",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "1493204",
    "name": "منير سفيان علي احمد",
    "iqama": "2149783587",
    "date": "Jun-26",
    "area": "Mahayel asir",
    "grade": "C"
  },
  {
    "id": "422878",
    "name": "سامي عبدالرحمن ثابت عبدالجليل",
    "iqama": "2228436719",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1910589",
    "name": "",
    "iqama": "",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1706661",
    "name": "نادر قواس",
    "iqama": "2501629113",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "1880879",
    "name": "محمد بلال يوناش كبير",
    "iqama": "2544180835",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "C"
  },
  {
    "id": "791256",
    "name": "رائد اسماعيل",
    "iqama": "2476998287",
    "date": "Jun-26",
    "area": "Baha",
    "grade": "B"
  },
  {
    "id": "558814",
    "name": "عبدالمطلب احمد يحي مراد",
    "iqama": "2447803004",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1550417",
    "name": "علاء المرشدي",
    "iqama": "2525582330",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1758317",
    "name": "ريفات فاروق",
    "iqama": "2538816527",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2039332",
    "name": "عزيز قاسم",
    "iqama": "2562844668",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1287501",
    "name": "محمد منتصر",
    "iqama": "2500325614",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1971751",
    "name": "عبد القادر الشعيبي",
    "iqama": "2504004470",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "1999026",
    "name": "علاء صلاح رزق عبد الخالق",
    "iqama": "2261439877",
    "date": "Jun-26",
    "area": "Mahayel asir",
    "grade": "C"
  },
  {
    "id": "2105548",
    "name": "رضوان عبدالله عثمان نصر",
    "iqama": "2533186314",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2027977",
    "name": "محبوب سالم تاج",
    "iqama": "2562494001",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "2143239",
    "name": "جمال حسن محمود",
    "iqama": "2526431339",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2024474",
    "name": "عمار مبخوت",
    "iqama": "2457092134",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1687120",
    "name": "وضاح حسن السلامي",
    "iqama": "2513725750",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1537042",
    "name": "جلال سكات",
    "iqama": "2313347383",
    "date": "Jun-26",
    "area": "Sakaka",
    "grade": "C"
  },
  {
    "id": "558913",
    "name": "علي الحزمي",
    "iqama": "2229038175",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1951821",
    "name": "عصام الحدا",
    "iqama": "2380724340",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "2045824",
    "name": "صديق احمد الخليفه",
    "iqama": "2531601934",
    "date": "Jun-26",
    "area": "Buqayq",
    "grade": "C"
  },
  {
    "id": "2184484",
    "name": "مالك علي قاسم عجمي",
    "iqama": "2450927153",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "809989",
    "name": "شوهاغ علي",
    "iqama": "2482531353",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1883584",
    "name": "نوريز احمد عرفان احمد",
    "iqama": "2544180744",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2075802",
    "name": "احمد ممدوح احمد",
    "iqama": "2485962563",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2250956",
    "name": "احمد حسن صغير عفيف",
    "iqama": "2581272610",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "2114813",
    "name": "إبراهيم إبراهيم البازهاني",
    "iqama": "2572362966",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2023888",
    "name": "محمد اكرم عبد الخالق علاء",
    "iqama": "2561178241",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2155644",
    "name": "محمد عبدالله حميد الحرازي",
    "iqama": "2505896783",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "2033362",
    "name": "جاهدول الإسلام",
    "iqama": "2563408638",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "C"
  },
  {
    "id": "1988329",
    "name": "اويس محمد راتب",
    "iqama": "2544180900",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "103461",
    "name": "جمال الخولاني",
    "iqama": "2293810871",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "664958",
    "name": "احمد شوعي احمد الحجوري",
    "iqama": "2250127475",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "2146979",
    "name": "احمد يحي محمد العنسي",
    "iqama": "2572042865",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "583072",
    "name": "صدام النجار",
    "iqama": "2296097450",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2188449",
    "name": "احمد محمد يحي علي البحري تغيير البنك",
    "iqama": "2550831545",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "663036",
    "name": "صالح علي محمد العزيبي",
    "iqama": "2475024853",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "C"
  },
  {
    "id": "2115576",
    "name": "رامي عبدالله عمر الكثيري",
    "iqama": "2549746788",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1860093",
    "name": "صلاح عبده محمد الولي",
    "iqama": "2510003581",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "C"
  },
  {
    "id": "1991086",
    "name": "محمد عبدالعزيز",
    "iqama": "2552797611",
    "date": "Jun-26",
    "area": "Mahayel asir",
    "grade": "C"
  },
  {
    "id": "375004",
    "name": "سالم المشجري",
    "iqama": "2469750349",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2156810",
    "name": "حمزه خالد علي مثنى الحذيفي",
    "iqama": "2554500179",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2149953",
    "name": "راجح علي راجح علي الدهمي",
    "iqama": "2574099723",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1080679",
    "name": "عبدالرحمن العديني",
    "iqama": "2308642574",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "C"
  },
  {
    "id": "1118934",
    "name": "الفياض فضل النور بخيت",
    "iqama": "2496635703",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2183558",
    "name": "سيلان احمد طاهر سيلان",
    "iqama": "2281711404",
    "date": "Jun-26",
    "area": "Al ahsa",
    "grade": "C"
  },
  {
    "id": "2155636",
    "name": "حسين محمد احمد اليريمي",
    "iqama": "2575637539",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "827248",
    "name": "غانم الشفلي",
    "iqama": "2321362614",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1453250",
    "name": "بسام محمد احمد",
    "iqama": "2504123940",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2073856",
    "name": "لالي محمدين",
    "iqama": "2411788991",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2192700",
    "name": "حسام عبده علي محمد الزبيدي",
    "iqama": "2574805699",
    "date": "Jun-26",
    "area": "Najran",
    "grade": "C"
  },
  {
    "id": "1609811",
    "name": "عصام محمد احمد صالح",
    "iqama": "2512673811",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2478070",
    "name": "احمد عباد النويرة",
    "iqama": "2575062548",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2072513",
    "name": "صلاح باعامر",
    "iqama": "2500399767",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2012408",
    "name": "إبراهيم الخاوي",
    "iqama": "2562250544",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "F"
  },
  {
    "id": "202115",
    "name": "اكرامي سالم",
    "iqama": "2215091881",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "2095976",
    "name": "عبدالرحمن محمد حمود العديني",
    "iqama": "2536347434",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "2074732",
    "name": "يحي علي الخظاف",
    "iqama": "2565617715",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "1718068",
    "name": "عبدالقوي قائد مرشد المحمدي",
    "iqama": "2242834949",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "2121387",
    "name": "مصطفى المنتصر طلبات",
    "iqama": "2567071028",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2116381",
    "name": "ماجد حمدي عبدالرحمن سويد",
    "iqama": "2569462431",
    "date": "Jun-26",
    "area": "Sakaka",
    "grade": "C"
  },
  {
    "id": "220572",
    "name": "هشام عبدالله حميد صعفان",
    "iqama": "2195800335",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "614855",
    "name": "خالد علي عبده محمد البناء",
    "iqama": "2052655061",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "F"
  },
  {
    "id": "2033306",
    "name": "خالد السعيدي",
    "iqama": "2503122265",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1332796",
    "name": "خلدون",
    "iqama": "2499294011",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "617112",
    "name": "مراد فازع",
    "iqama": "2341967566",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "C"
  },
  {
    "id": "1604576",
    "name": "حبيبو رن الرحيم",
    "iqama": "2523845697",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2372379",
    "name": "خالد احمد عبدالله احمد",
    "iqama": "2581015910",
    "date": "Jun-26",
    "area": "Mahayel asir",
    "grade": "C"
  },
  {
    "id": "1869367",
    "name": "اسامه ابراهيم سلمان زيد بويهل",
    "iqama": "2530722053",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1161756",
    "name": "فائز قاسم الليث",
    "iqama": "2441737281",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1985713",
    "name": "محمد عبده محمد",
    "iqama": "2558553687",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2077454",
    "name": "عمر عبدالله ردمان",
    "iqama": "2559147539",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1364017",
    "name": "إبراهيم يونس مياه",
    "iqama": "2232261087",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2218391",
    "name": "عبدالرزاق سالم فتيني تاج",
    "iqama": "2579923448",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "2147374",
    "name": "عبدالنور حسن علي طه",
    "iqama": "2528881788",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "454994",
    "name": "محمد عبده ثابت علي الحجواني",
    "iqama": "2320344696",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1909196",
    "name": "نسيم عبده سعد محمد",
    "iqama": "2525753402",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2075735",
    "name": "علي عبد القوي البدوي",
    "iqama": "2566542797",
    "date": "Jun-26",
    "area": "Mahayel asir",
    "grade": "F"
  },
  {
    "id": "1062300",
    "name": "محمد هادي",
    "iqama": "2204249532",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1957157",
    "name": "اكرم مثني الغرام",
    "iqama": "2538215456",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2091702",
    "name": "بلال رافت عبدالفتاح",
    "iqama": "2569162635",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2043686",
    "name": "مساعد علي عايض",
    "iqama": "2504490927",
    "date": "Jun-26",
    "area": "Mahayel asir",
    "grade": "F"
  },
  {
    "id": "1440621",
    "name": "عبد الله الباز",
    "iqama": "2503662849",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "829743",
    "name": "محمد بله علي احمد",
    "iqama": "2480503933",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "580603",
    "name": "سيد أرسلان",
    "iqama": "2390058747",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "297456",
    "name": "تركي عمر محمد الصقير",
    "iqama": "2369595463",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2156927",
    "name": "محمد عبده محمد احمد الحيقي",
    "iqama": "2558550816",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "2159849",
    "name": "عبدارحمن علي محمد يحي الحشيبري",
    "iqama": "2516928567",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "906887",
    "name": "زيد شيخ حسين",
    "iqama": "2219217375",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "279751",
    "name": "محمد المرشدي",
    "iqama": "2525582546",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1895222",
    "name": "معتز علي قاسم الوادعي",
    "iqama": "2551530609",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1021377",
    "name": "محمد عبدالرؤوف محمد سنان",
    "iqama": "2496664026",
    "date": "Jun-26",
    "area": "Al ahsa",
    "grade": "C"
  },
  {
    "id": "2072284",
    "name": "صالح الصايدي",
    "iqama": "2487298412",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "F"
  },
  {
    "id": "2166130",
    "name": "بدر حميد الشرعبي",
    "iqama": "2374079065",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "C"
  },
  {
    "id": "697781",
    "name": "عبد الخالق محمد ثابت السمحي",
    "iqama": "2269549107",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "C"
  },
  {
    "id": "2097247",
    "name": "محمد حسين الاحول",
    "iqama": "2560651099",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1519986",
    "name": "عمرو حميد",
    "iqama": "2252143447",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "589126",
    "name": "راجيش",
    "iqama": "2394563692",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1651584",
    "name": "سامي الحبيشي",
    "iqama": "2527980656",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "1797326",
    "name": "علي الصقر",
    "iqama": "2445284199",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1557368",
    "name": "امين قرماني",
    "iqama": "2452798693",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "C"
  },
  {
    "id": "1417038",
    "name": "غازي رزق حزام الشامي",
    "iqama": "2501225458",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2145279",
    "name": "أبوبكر عبده محمد ثابت النمي",
    "iqama": "2561955333",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2137794",
    "name": "عشال نبيل مارش شريان",
    "iqama": "2504679164",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "C"
  },
  {
    "id": "1592010",
    "name": "شاجع الاعذل",
    "iqama": "2453376572",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2110096",
    "name": "الحسن عادل ابو العز الجمل",
    "iqama": "2488897717",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2010634",
    "name": "عبد الرحمن المرشدي",
    "iqama": "2561178407",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "224813",
    "name": "سامي العريقي",
    "iqama": "2177855489",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2097193",
    "name": "مصطفى السيد محمد اسماعيل",
    "iqama": "2567210378",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "601016",
    "name": "ايمن سالم محمد الصقير",
    "iqama": "2107816304",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "434668",
    "name": "بدر محمد علي ذياب",
    "iqama": "2455415261",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "1944164",
    "name": "نجم الدين ناصر قاسم المالكي",
    "iqama": "2480820980",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2119303",
    "name": "عدنان محمد سعيد العموري",
    "iqama": "2569214246",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2138846",
    "name": "عبدالله محمد البحري",
    "iqama": "2472408208",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2023970",
    "name": "صدام محمد علوي الرياشي",
    "iqama": "2505242079",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2192895",
    "name": "هاشم محمد يحي الأعور",
    "iqama": "2540371602",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "1366908",
    "name": "محمد عبدالله حمود البحري",
    "iqama": "2498195508",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1913322",
    "name": "محمد عبدالعظيم",
    "iqama": "2546304193",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2017994",
    "name": "عمر علي حسين بدر",
    "iqama": "2473169403",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "602550",
    "name": "فتح الرحمن الشفيع",
    "iqama": "2476336082",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2103990",
    "name": "محمد حسن صغير عفيف",
    "iqama": "2507451629",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1903250",
    "name": "هيثم النهمي",
    "iqama": "2504519535",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "2146401",
    "name": "محمد الكحلاوي محمد الكفافي",
    "iqama": "2575830308",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "877838",
    "name": "مراد محمد عبود علي",
    "iqama": "2446879708",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "C"
  },
  {
    "id": "1266243",
    "name": "عتيق الرحمن",
    "iqama": "2415856083",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "F"
  },
  {
    "id": "1481075",
    "name": "عبدالرحمن الفقيه",
    "iqama": "2466212251",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1863308",
    "name": "فتحى قاسم على الزموح",
    "iqama": "2539710018",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "422582",
    "name": "ابراهيم محمد",
    "iqama": "2304784057",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "627883",
    "name": "النذير عبدالله محمد عوض",
    "iqama": "2385491531",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2069461",
    "name": "عمار عبدالله الحرازي",
    "iqama": "2558148843",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "319171",
    "name": "شرف علي علي السكني",
    "iqama": "2284117880",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1149351",
    "name": "معاذ حمود هزاع مثني",
    "iqama": "2324011044",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1750857",
    "name": "عارف حسن عبده",
    "iqama": "2521884326",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1091674",
    "name": "زكريا أبو شهاب",
    "iqama": "2000470373",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "1624747",
    "name": "سامي عبدالرحمن امين",
    "iqama": "2503945681",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "641250",
    "name": "صالح احمد محمد الصقير",
    "iqama": "2368488579",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2024467",
    "name": "عبدالملك حسين علي المطري",
    "iqama": "2561790268",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "1759706",
    "name": "اياد عبدالغفور شمس الدين",
    "iqama": "2174411658",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2039113",
    "name": "محمد زناتي بسيوني",
    "iqama": "2350571770",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2067456",
    "name": "ياسين ناجي المنيفي",
    "iqama": "2320246834",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2266027",
    "name": "علي علي قايد حسين",
    "iqama": "2570826756",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1888290",
    "name": "حسن عمر عبدالله حسن",
    "iqama": "2544700749",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2189186",
    "name": "عبدالسلام يسلم عمر عوض",
    "iqama": "2575041666",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "226524",
    "name": "صامد حسن",
    "iqama": "2377986175",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2101141",
    "name": "ركبال حسن ركبال حست",
    "iqama": "2567873274",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "1738896",
    "name": "عارف الخولاني",
    "iqama": "2536381060",
    "date": "Jun-26",
    "area": "Qp",
    "grade": "C"
  },
  {
    "id": "2426195",
    "name": "اكرم محمد اكرام",
    "iqama": "2330653060",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "C"
  },
  {
    "id": "2106658",
    "name": "ماجد عمر عبدالله حسن عمر",
    "iqama": "2563946017",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2054672",
    "name": "مالك غالب",
    "iqama": "2505010526",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "C"
  },
  {
    "id": "457600",
    "name": "طاهر يوسف",
    "iqama": "2375995368",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1991957",
    "name": "محمد صالح منصور",
    "iqama": "2553316247",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2108686",
    "name": "عبد الكريم محمد محمد البحرى",
    "iqama": "2531444780",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "F"
  },
  {
    "id": "1731500",
    "name": "احمد تاج الدين",
    "iqama": "2535259267",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "C"
  },
  {
    "id": "1315320",
    "name": "محمد الأسد",
    "iqama": "2353968403",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "C"
  },
  {
    "id": "991553",
    "name": "محمد قاسم دبون سعيد",
    "iqama": "2454910726",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "C"
  },
  {
    "id": "1961485",
    "name": "عمر الدين الغليبي",
    "iqama": "2534375031",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2181158",
    "name": "محمد محمد احمد العفاره",
    "iqama": "2568896142",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2103840",
    "name": "مسعد مجدي محمد البيار",
    "iqama": "2569112648",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "601295",
    "name": "صابر عمر حسن",
    "iqama": "2333366660",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1472945",
    "name": "حسن عبدالله حسين بابكر",
    "iqama": "2501261388",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2465214",
    "name": "خالد وليد حسين صائل",
    "iqama": "2579920816",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1632251",
    "name": "هاشم عيدروس حسين العيدروس",
    "iqama": "2453972057",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2038884",
    "name": "احمد عبده قايد حسن معافا",
    "iqama": "2555047121",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2070896",
    "name": "اكرم عبدالله عر جاش",
    "iqama": "2471064002",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "C"
  },
  {
    "id": "1714752",
    "name": "عماد حسين عبد القوى الاحول",
    "iqama": "2516797244",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2068624",
    "name": "اسامه محمد الزهري",
    "iqama": "2562931887",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1139935",
    "name": "محمد حسن القدمي",
    "iqama": "2457034326",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "296629",
    "name": "عبدالله الاخرم",
    "iqama": "2201756273",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "D"
  },
  {
    "id": "2185282",
    "name": "محمد عبدالكريم عثمان علي",
    "iqama": "2570686119",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1605913",
    "name": "هايل سعيد قايد المعاف",
    "iqama": "2245674821",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "C"
  },
  {
    "id": "2121536",
    "name": "مطر ناجي مطر الجماعي",
    "iqama": "2572370266",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "1819562",
    "name": "احمد عطا دفع الله الشفيع",
    "iqama": "2539862140",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1959187",
    "name": "بلال عبده المصباح",
    "iqama": "2552830735",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "272572",
    "name": "فؤاد منصر",
    "iqama": "2185238801",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1643284",
    "name": "ياسين عبدالقوى محمد غالب",
    "iqama": "2527213629",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2183225",
    "name": "حسين حسن مصطفى حسن",
    "iqama": "2576879791",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2075203",
    "name": "عبدالله محمد حمير",
    "iqama": "2563723333",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "800673",
    "name": "فهد هزاع",
    "iqama": "2266869607",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2033277",
    "name": "مالك محمود أبو الدهب علاء",
    "iqama": "2562900742",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1238901",
    "name": "هيثم سنان",
    "iqama": "2342413206",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2038578",
    "name": "سالم إيهاب الصري",
    "iqama": "2546886959",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "C"
  },
  {
    "id": "1955434",
    "name": "سامر",
    "iqama": "2513453080",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "303306",
    "name": "عبدالرحمن مصلح",
    "iqama": "2344458894",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1448307",
    "name": "فارس عبده احمد اليوسفي",
    "iqama": "2239172378",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2166992",
    "name": "هارون احمد قايد احمد الحالي",
    "iqama": "2554499539",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "252846",
    "name": "خالد محمد عبدالله الصقير",
    "iqama": "2463124673",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1243992",
    "name": "مروان علي محمد يحيى الحربي",
    "iqama": "2456160627",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1659492",
    "name": "شكري عبدالله",
    "iqama": "2478334374",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "D"
  },
  {
    "id": "1673062",
    "name": "موسى خالد سعيد سلمان الحبيشي",
    "iqama": "2479275402",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "D"
  },
  {
    "id": "2073866",
    "name": "ابراهيم محمد حلمى فرج",
    "iqama": "2551019553",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "616344",
    "name": "مهدي الامين المهدي الشفيع",
    "iqama": "2478488477",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "C"
  },
  {
    "id": "2171916",
    "name": "إبراهيم محمد علي محمد البحري",
    "iqama": "2537085611",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2164437",
    "name": "محمد احمد علي مسعد الراعي",
    "iqama": "2502802131",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "1384261",
    "name": "سعيد غسان سعيد حسين المحرمى",
    "iqama": "2503377943",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1453534",
    "name": "وليد محمد ناصر رسام",
    "iqama": "2487172989",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "D"
  },
  {
    "id": "1981465",
    "name": "عدنان محمد حنش احمد",
    "iqama": "2555923461",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2153908",
    "name": "سامي احمد حمود نعمان",
    "iqama": "2283320634",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "D"
  },
  {
    "id": "1745743",
    "name": "ايمن سليمان",
    "iqama": "2260584921",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "D"
  },
  {
    "id": "2415297",
    "name": "غيلان علي محمد الكندي",
    "iqama": "2582289266",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2516770",
    "name": "مازن محمد حسن الجلة",
    "iqama": "2582763138",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "D"
  },
  {
    "id": "590974",
    "name": "امين حسن عبدالله غالب",
    "iqama": "2474415672",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "F"
  },
  {
    "id": "2087027",
    "name": "عبدالملك قايد محمد صالح الشاطبي",
    "iqama": "2485449744",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "F"
  },
  {
    "id": "1301543",
    "name": "غسان صالح منصور",
    "iqama": "2503592152",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "658457",
    "name": "ابراهيم عبدالرحيم علي المحاقري",
    "iqama": "2335166662",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "359299",
    "name": "عبده حمود",
    "iqama": "2180695245",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "308946",
    "name": "بلال الحاج",
    "iqama": "2371938016",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2427491",
    "name": "جميل عبده صالح مسعود",
    "iqama": "2573567472",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "831297",
    "name": "هيثم الصبري",
    "iqama": "2319018061",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "243396",
    "name": "عبدالله الصقير",
    "iqama": "2446806644",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "2179090",
    "name": "محمد عبدالحكيم محمد تغيير البنك",
    "iqama": "2575252222",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2105959",
    "name": "عاطف بشير علي محمد",
    "iqama": "2541060808",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2105539",
    "name": "السيد صبره صبره حسن",
    "iqama": "2566702953",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "665165",
    "name": "عبد الكريم هزاع عبده",
    "iqama": "2470932571",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2167231",
    "name": "خالد صابر علي محمد",
    "iqama": "2570688107",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "1889567",
    "name": "غسان القدسي",
    "iqama": "2532132368",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "1199342",
    "name": "يونس احمد عبدالله المشرقي",
    "iqama": "2338550805",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "D"
  },
  {
    "id": "2074425",
    "name": "عبد ال باسط محمد اظهر",
    "iqama": "2567509688",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "D"
  },
  {
    "id": "1855818",
    "name": "سليمان عبده علي الخياط",
    "iqama": "2504747532",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "D"
  },
  {
    "id": "638195",
    "name": "اسماعيل صالح تاج الدين",
    "iqama": "2468929324",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "D"
  },
  {
    "id": "690736",
    "name": "عبدالله عبده",
    "iqama": "2465791644",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "D"
  },
  {
    "id": "1558760",
    "name": "احمد حسين حمير",
    "iqama": "2361679364",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1365479",
    "name": "عبدالكريم بيرق",
    "iqama": "2341554612",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2447656",
    "name": "زهيب حسن لياس خان",
    "iqama": "2579921889",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2077857",
    "name": "حازم طارق المرسي",
    "iqama": "2511862696",
    "date": "Jun-26",
    "area": "Nariyah",
    "grade": "E"
  },
  {
    "id": "654590",
    "name": "مهيب شكري سعيد الاثوري",
    "iqama": "2349225058",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "D"
  },
  {
    "id": "2091211",
    "name": "يسلم ايهاب سالم عوض الصري",
    "iqama": "2565393069",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "C"
  },
  {
    "id": "1887194",
    "name": "هيثم سعد عبدالله عبدالرحيم",
    "iqama": "2504343282",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "C"
  },
  {
    "id": "1955691",
    "name": "وضاح حسن قاسم محمد",
    "iqama": "2368592537",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "F"
  },
  {
    "id": "647442",
    "name": "ذياب علي احمد النمراني",
    "iqama": "2471319141",
    "date": "Jun-26",
    "area": "Tabuk",
    "grade": "D"
  },
  {
    "id": "534895",
    "name": "جمال احمد قايد النويرة",
    "iqama": "2260601881",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "2157100",
    "name": "معاذ جميل حسن محمد الجماعي",
    "iqama": "2573032444",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1094106",
    "name": "نبيل عبدالله احمد ناصر الشجني",
    "iqama": "2477877852",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "F"
  },
  {
    "id": "2068743",
    "name": "جلال بن شحبل",
    "iqama": "2544566868",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2172624",
    "name": "يزن عادل محمد علي الحذيفي",
    "iqama": "2564189476",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2179221",
    "name": "محمد عبدالرزاق محمد الصبري",
    "iqama": "2452127752",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "D"
  },
  {
    "id": "280230",
    "name": "وضاح محسن",
    "iqama": "2192408603",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "D"
  },
  {
    "id": "105100",
    "name": "محسن عمرو سعد الجريري",
    "iqama": "2187442070",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1880874",
    "name": "يوسف محمد علي صالح رفيق",
    "iqama": "2548779053",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "F"
  },
  {
    "id": "1813355",
    "name": "عباس رجب ذكى عبدالدايم",
    "iqama": "2513780482",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "2092811",
    "name": "احمد يسري عبدالسلام",
    "iqama": "2568613588",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2215271",
    "name": "حلمي ثابت عبدالله غالب الزكري",
    "iqama": "2540310642",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "F"
  },
  {
    "id": "1955322",
    "name": "وليد العموري",
    "iqama": "2550474593",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2073744",
    "name": "عبدالرحمن احمد الولي",
    "iqama": "2567509563",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "D"
  },
  {
    "id": "1988104",
    "name": "عباس محمد عباس السوداني",
    "iqama": "2526253469",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "2168553",
    "name": "ميزان ال رحمن",
    "iqama": "2523899801",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "1498471",
    "name": "مرشد احمد ثابت السنيدي",
    "iqama": "2513036307",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1932824",
    "name": "عبدالرحمن عبدالقوي شرف عبدالله",
    "iqama": "2218722805",
    "date": "Jun-26",
    "area": "Al ahsa",
    "grade": "D"
  },
  {
    "id": "1954457",
    "name": "احمد العثربي",
    "iqama": "2260880832",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "D"
  },
  {
    "id": "607041",
    "name": "الطيب جاه الرسول",
    "iqama": "2445011089",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "1594420",
    "name": "حسن يحي احمد راصع",
    "iqama": "2276062961",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "D"
  },
  {
    "id": "2434541",
    "name": "إبراهيم يحي زايد عجمي",
    "iqama": "2581233240",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "D"
  },
  {
    "id": "1635738",
    "name": "عبدالله محمد علي قايد الخولاني",
    "iqama": "2513865077",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "D"
  },
  {
    "id": "1055108",
    "name": "نصر ناجي احمد الجوني",
    "iqama": "2366802102",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "E"
  },
  {
    "id": "446622",
    "name": "محمد علي عباس سعيد زوبل",
    "iqama": "2459800815",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "D"
  },
  {
    "id": "1988914",
    "name": "اسماعيل الجمالي",
    "iqama": "2477357129",
    "date": "Jun-26",
    "area": "Al ahsa",
    "grade": "F"
  },
  {
    "id": "2375134",
    "name": "محمد منير عبدربه غامس",
    "iqama": "2582289381",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "1942919",
    "name": "فلاح الشيبة",
    "iqama": "2544180231",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "647107",
    "name": "محمد عز الدين سعيد",
    "iqama": "2457336036",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "D"
  },
  {
    "id": "929718",
    "name": "مشعل محمد",
    "iqama": "2456324330",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "D"
  },
  {
    "id": "2165646",
    "name": "لطف محسن محمد محسن الحبيشي",
    "iqama": "2471268306",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "2168004",
    "name": "حمزه مهيوب احمد الخولاني",
    "iqama": "2572370316",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1983759",
    "name": "اسماعيل الجعيدي",
    "iqama": "2515559652",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "105695",
    "name": "عبدالواحد علي احمد يحي",
    "iqama": "2253696237",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "1951519",
    "name": "عيسى عقيل",
    "iqama": "2474134828",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "D"
  },
  {
    "id": "2018910",
    "name": "محسن حسين السنيدي",
    "iqama": "2520853256",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2071082",
    "name": "عبدالله جمال داود عزيز",
    "iqama": "2566479222",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "D"
  },
  {
    "id": "2142522",
    "name": "مروان عبدالغني عبدالله التاج",
    "iqama": "2559933896",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "E"
  },
  {
    "id": "2157061",
    "name": "عبدالله حسين صالح رياش",
    "iqama": "2533297624",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1151793",
    "name": "عبده سالم محمد",
    "iqama": "2183601398",
    "date": "Jun-26",
    "area": "Hail",
    "grade": "D"
  },
  {
    "id": "488974",
    "name": "محمد عبدالحليم",
    "iqama": "2286273699",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "D"
  },
  {
    "id": "2189544",
    "name": "إبراهيم انوار منصور صالح",
    "iqama": "2575041492",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "192419",
    "name": "عمار العضلات",
    "iqama": "2303843268",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "287326",
    "name": "يوسف حسن قائد معافا",
    "iqama": "2230929115",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2085850",
    "name": "احمد إبراهيم الوكيل",
    "iqama": "2567518168",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "2216590",
    "name": "إبراهيم محمد علي السنباني",
    "iqama": "2579921020",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "E"
  },
  {
    "id": "102707",
    "name": "رشيق اليوسفي",
    "iqama": "2443915463",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "105011",
    "name": "نبيل بشر",
    "iqama": "2451089409",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2035156",
    "name": "عمر مختار دبوان",
    "iqama": "2563116033",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "422528",
    "name": "عبدالله محمد احمد قاسم",
    "iqama": "2204683979",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "869835",
    "name": "دفع الله التوم",
    "iqama": "2488303468",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "967212",
    "name": "صبري احمد صالح محمد الهزمي",
    "iqama": "2491736944",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "127584",
    "name": "أنور طالب علي عسل",
    "iqama": "2474469018",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "E"
  },
  {
    "id": "1953183",
    "name": "عبد الغني صلاح",
    "iqama": "2501437822",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "E"
  },
  {
    "id": "1796596",
    "name": "محمد صالح هيثم عبد الله",
    "iqama": "2542674243",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "523868",
    "name": "احمد قائد احمد محمد",
    "iqama": "2198524965",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2076428",
    "name": "عدنان محمد علي",
    "iqama": "2564285191",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2109819",
    "name": "محمد عيسى إسماعيل هادي عجمي",
    "iqama": "2523692693",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "2186281",
    "name": "مسعود رنا",
    "iqama": "2578407799",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "E"
  },
  {
    "id": "2075772",
    "name": "بكري عزت عبدالكريم",
    "iqama": "2565626286",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2121447",
    "name": "احمد عبد الله عبد الحميد",
    "iqama": "2439436011",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "250642",
    "name": "صبري خالد محمد الصقير",
    "iqama": "2452880368",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "626296",
    "name": "محمد سعيد الشفيع",
    "iqama": "2473650485",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "555213",
    "name": "نبيل حاشد",
    "iqama": "2254282011",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1396519",
    "name": "مطيع حسن الزكيري",
    "iqama": "2504432291",
    "date": "Jun-26",
    "area": "Taif",
    "grade": "F"
  },
  {
    "id": "1202922",
    "name": "والي عبدالوهاب محمد الجعمي",
    "iqama": "2478891829",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1880356",
    "name": "صبحى محمد عبدالمجيد الشناوى",
    "iqama": "2545456507",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1819640",
    "name": "طارق رزق حزام الشامي",
    "iqama": "2535138776",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2018428",
    "name": "نواف احمد مرشد المرحبي",
    "iqama": "2501801134",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "2186874",
    "name": "امين ال اسلام",
    "iqama": "2578408201",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1957307",
    "name": "محمد عبد الحميد سعيد",
    "iqama": "2536976638",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1659404",
    "name": "ايهم فهد حسن رجب",
    "iqama": "2518264094",
    "date": "Jun-26",
    "area": "Sakaka",
    "grade": "F"
  },
  {
    "id": "95151",
    "name": "عزام نبيل عبد الغني",
    "iqama": "2340531801",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "1839685",
    "name": "احمد محمد حسين احمد",
    "iqama": "2266681051",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "2506973",
    "name": "عمار عويس فخري عويس",
    "iqama": "2587859055",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "951691",
    "name": "محمد السيد الصيرفي",
    "iqama": "2486166560",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "F"
  },
  {
    "id": "1777700",
    "name": "إبراهيم عمر الحوفلي",
    "iqama": "2524105778",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2138853",
    "name": "سعيد فرج علي البحسني",
    "iqama": "2568129882",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "1903916",
    "name": "شعيب محمد عمر بابراهيم",
    "iqama": "2501318303",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "638150",
    "name": "عادل مثنى علي الزريقي",
    "iqama": "2322846896",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1189664",
    "name": "نعمان عبدالملك نعمان العبيدي",
    "iqama": "2471147096",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "886074",
    "name": "خطاب عبد العظيم دفع الله عبد المقيت",
    "iqama": "2431905138",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "1075016",
    "name": "محسن احمد محمد محمد طنطاوى",
    "iqama": "2499009450",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "83966",
    "name": "احمد عبدالمعز",
    "iqama": "2148382480",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "448302",
    "name": "محمد عبده المزاحم",
    "iqama": "2197191097",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "812660",
    "name": "ياسين موسى ليقيسي",
    "iqama": "2319410185",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "E"
  },
  {
    "id": "1799714",
    "name": "مجدي علي علي البرلسي",
    "iqama": "2536919596",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "199907",
    "name": "امين احمد عبده منصر",
    "iqama": "2228903395",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "F"
  },
  {
    "id": "2093793",
    "name": "احمد حاتم سعيد احمد",
    "iqama": "2519651745",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "613639",
    "name": "نزار عبدالقادر علي شمبل",
    "iqama": "2445632736",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1953241",
    "name": "محمد اويس خان",
    "iqama": "2494305317",
    "date": "Jun-26",
    "area": "Riyadh",
    "grade": "E"
  },
  {
    "id": "1872035",
    "name": "ريدان وليد علوان سعيد العزعزي",
    "iqama": "2507514186",
    "date": "Jun-26",
    "area": "Eastern province",
    "grade": "E"
  },
  {
    "id": "2099179",
    "name": "عبد الرحمن السيد إبراهيم السيد",
    "iqama": "2519910760",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "528124",
    "name": "معيد جامل احمد علي",
    "iqama": "2455852760",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1044433",
    "name": "احمد شحاته",
    "iqama": "2405290483",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "1245400",
    "name": "خالد جمع",
    "iqama": "2496421989",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "417317",
    "name": "فوزي حمود - محمد",
    "iqama": "2182310629",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "890782",
    "name": "فتح الرحمن الطيب حسن",
    "iqama": "2465961411",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "E"
  },
  {
    "id": "1876238",
    "name": "احمد نعمان",
    "iqama": "2505200283",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "E"
  },
  {
    "id": "2453503",
    "name": "احمد محمد علي صالح الحصمه",
    "iqama": "2578044899",
    "date": "Jun-26",
    "area": "Medina",
    "grade": "F"
  },
  {
    "id": "400657",
    "name": "يسلم خالد سالم الحوفلي",
    "iqama": "2341660062",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "2137802",
    "name": "حسن محمد عبدالله المقدشي",
    "iqama": "2572042709",
    "date": "Jun-26",
    "area": "Abha province",
    "grade": "E"
  },
  {
    "id": "2272526",
    "name": "بسام احمد علي علي حطرم",
    "iqama": "2582289159",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "413802",
    "name": "ايمن الاحول",
    "iqama": "2291165146",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  },
  {
    "id": "1928773",
    "name": "غسان مهيوب طاهر عاطف",
    "iqama": "2516426075",
    "date": "Jun-26",
    "area": "Jubail",
    "grade": "F"
  }
];
