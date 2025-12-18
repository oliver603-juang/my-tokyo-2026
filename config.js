// ==========================================
// config.js - 2026 寒假東京外郊親子行
// ==========================================

// 1. APP 基本設定
window.APP_LOGO = "logo.jpg";

window.CURRENCY_OPTIONS = [
  { code: "TWD", symbol: "NT$", label: "台幣" },
  { code: "JPY", symbol: "¥", label: "日幣" },
  { code: "USD", symbol: "$", label: "美金" },
];

window.STAY_OPTIONS = [
  "30 min",
  "1 hr",
  "1.5 hr",
  "2 hr",
  "2.5 hr",
  "3 hr",
  "4 hr",
  "5 hr",
  "Overnight",
  "-",
];

// 2. 行程詳細資料 (由 KML 轉換)
window.RAW_KML_DATA = [
  {
    dayId: "day1",
    date: "1/30 (五)",
    title: "成田抵達與千葉探索",
    themeColor: "bg-[#FFCF56]",
    spots: [
      {
        name: "成田國際機場",
        lat: 35.770178,
        lon: 140.3843215,
        desc: "Mapcode: 137 676 015*32",
        mapCode: "137 676 015*32",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "取車櫃台",
        lat: 35.773998,
        lon: 140.3872634,
        desc: "機場2號航廈一樓北出口2號附近的租車櫃檯領取車輛。請直接從櫃檯致電門市，屆時將有接駁車前來接",
        mapCode: "GPS",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "航空科學博物館",
        lat: 35.7403564,
        lon: 140.3977966,
        desc: "Mapcode: 137 558 393*14",
        mapCode: "137 558 393*14",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard Off Kamagaya Michinobe",
        lat: 35.7504,
        lon: 140.001089,
        desc: "Mapcode: 6 585 585*37",
        mapCode: "6 585 585*37",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard off Kashiwa Toyoshiki",
        lat: 35.864165,
        lon: 139.947972,
        desc: "Mapcode: 18 099 274*62",
        mapCode: "18 099 274*62",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hotel Torifito Kashiwanoha Campus",
        lat: 35.8917166,
        lon: 139.9497834,
        desc: "Mapcode: 18 189 550*14",
        mapCode: "18 189 550*14",
        ticket: { adult: 0, child: 0 },
      },
    ],
  },
  {
    dayId: "day2",
    date: "1/31 (六)",
    title: "埼玉親子遊與鐵道博物館",
    themeColor: "bg-[#90BE6D]",
    spots: [
      {
        name: "足立區生物園",
        lat: 35.792449,
        lon: 139.807227,
        desc: "停車場  3 142 789*01",
        mapCode: "3 142 789*01",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard Off Soka Sezaki",
        lat: 35.8155163,
        lon: 139.8122316,
        desc: "Mapcode: 3 232 445*72",
        mapCode: "3 232 445*72",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard Off .. Off House Omiya Higashi",
        lat: 35.9056813,
        lon: 139.6569344,
        desc: "Mapcode: 3 544 246*31",
        mapCode: "3 544 246*31",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "鐵道博物館",
        lat: 35.9214247,
        lon: 139.6179197,
        desc: "停車場 14 029 014*48",
        mapCode: "14 029 014*48",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Parking in 鉄道博物館駅前",
        lat: 35.9201184,
        lon: 139.6175137,
        desc: "備用停車場",
        mapCode: "GPS",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard Off / Off House Omiya Miyahara",
        lat: 35.9365868,
        lon: 139.6232865,
        desc: "Mapcode: 3 630 875*33",
        mapCode: "3 630 875*33",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "NPC 24 H Omiyanakacho 2 Chomedai 2 Parking Lot",
        lat: 35.9055587,
        lon: 139.627141,
        desc: "Mapcode: 3 540 259*05",
        mapCode: "3 540 259*05",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "REF大宮 by Vessel Hotels",
        lat: 35.9062461,
        lon: 139.6270131,
        desc: "Mapcode: 3 540 318*44",
        mapCode: "3 540 318*44",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "BOOKOFF PLUS Omiya RAKUUN Store",
        lat: 35.9077882,
        lon: 139.6258563,
        desc: "Mapcode: 3 540 494*80",
        mapCode: "3 540 494*80",
        ticket: { adult: 0, child: 0 },
      },
    ],
  },
  {
    dayId: "day3",
    date: "2/1 (日)",
    title: "多摩科學與橫濱移動",
    themeColor: "bg-[#4D908E]",
    spots: [
      {
        name: "多摩六都科學館",
        lat: 35.7348225,
        lon: 139.5228711,
        desc: "停車場 5 228 607*17",
        mapCode: "5 228 607*17",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard Off Hanakoganei",
        lat: 35.7337604,
        lon: 139.5124924,
        desc: "Mapcode: 5 226 596*34",
        mapCode: "5 226 596*34",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "鄉土之森博物館",
        lat: 35.6567725,
        lon: 139.4731485,
        desc: "停車場  2 852 191*55",
        mapCode: "2 852 191*55",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard off Hobby off Off House",
        lat: 35.6434866,
        lon: 139.4294002,
        desc: "府中店",
        mapCode: "GPS",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "BOOKOFF SUPER BAZAAR Tama Nagayama Store",
        lat: 35.6135953,
        lon: 139.4433218,
        desc: "Mapcode: 2 698 227*63",
        mapCode: "2 698 227*63",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "BOOKOFF SUPER BAZAAR Machida Central St. Main Store",
        lat: 35.5421243,
        lon: 139.4484443,
        desc: "Mapcode: 2 429 575*44",
        mapCode: "2 429 575*44",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "HOTEL COMENTO YOKOHAMA KANNAI",
        lat: 35.4411763,
        lon: 139.6359113,
        desc: "Mapcode: 8 676 500*10",
        mapCode: "8 676 500*10",
        ticket: { adult: 0, child: 0 },
      },
    ],
  },
  {
    dayId: "day4",
    date: "2/2 (一)",
    title: "橫濱未來港與東京灣",
    themeColor: "bg-[#FF9B85]",
    spots: [
      {
        name: "合味道紀念館 橫濱",
        lat: 35.4554755,
        lon: 139.6388669,
        desc: "Mapcode: 8 737 211*33",
        mapCode: "8 737 211*33",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "三菱港未來技術館",
        lat: 35.4559216,
        lon: 139.6299412,
        desc: "Mapcode: 8 735 299*02",
        mapCode: "8 735 299*02",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "BOOKOFF SUPER BAZAAR 409gou Kawasaki Minatocho Store",
        lat: 35.5333877,
        lon: 139.7179369,
        desc: "Mapcode: 101 556*80",
        mapCode: "101 556*80",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "品川水族館",
        lat: 35.588759,
        lon: 139.7371158,
        desc: "Mapcode: 313 235*21",
        mapCode: "313 235*21",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "BOOKOFF SUPER BAZAAR SEIYU Omori Store",
        lat: 35.5883262,
        lon: 139.7303162,
        desc: "Mapcode: 313 180*72",
        mapCode: "313 180*72",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "日和飯店舞濱",
        lat: 35.6462354,
        lon: 139.8970995,
        desc: "Mapcode: 6 213 121*27",
        mapCode: "6 213 121*27",
        ticket: { adult: 0, child: 0 },
      },
    ],
  },
  {
    dayId: "day5",
    date: "2/3 (二)",
    title: "船橋安徒生與返程",
    themeColor: "bg-[#2A9D8F]",
    spots: [
      {
        name: "船橋安徒生公園",
        lat: 35.760458,
        lon: 140.0615382,
        desc: "停車場 6 652 238*73",
        mapCode: "6 652 238*73",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "Hard Off / Off House / Hobby Off Tomisato Inter",
        lat: 35.7489725,
        lon: 140.3108172,
        desc: "Mapcode: 27 892 440*12",
        mapCode: "27 892 440*12",
        ticket: { adult: 0, child: 0 },
      },
      {
        name: "ORIX還車",
        lat: 35.7741437,
        lon: 140.360417,
        desc: "Mapcode: 137 673 469*68",
        mapCode: "137 673 469*68",
        ticket: { adult: 0, child: 0 },
      },
    ],
  },
];

// 3. 航班與交通資訊 (已更新為 KML 中對應日期)
window.FLIGHT_INFO = {
  outbound: {
    flight: "JX802",
    airline: "星宇航空",
    from: "TPE",
    to: "NRT",
    dep: "10:10",
    arr: "14:20",
    date: "1/30 (五)",
    duration: "3h 10m",
  },
  inbound: {
    flight: "JX801",
    airline: "星宇航空",
    from: "NRT",
    to: "TPE",
    dep: "15:30",
    arr: "18:45",
    date: "2/3 (二)",
    duration: "4h 15m",
  },
};

// 4. 住宿資訊 (從行程中提取)
window.HOTEL_INFO = [
  {
    day: "1/30",
    name: "Hotel Torifito Kashiwanoha Campus",
    location: "千葉柏市",
    desc: "Mapcode: 18 189 550*14",
    lat: 35.8917166,
    lon: 139.9497834,
  },
  {
    day: "1/31",
    name: "REF大宮 by Vessel Hotels",
    location: "埼玉大宮",
    desc: "Mapcode: 3 540 318*44",
    lat: 35.9062461,
    lon: 139.6270131,
  },
  {
    day: "2/1",
    name: "HOTEL COMENTO YOKOHAMA KANNAI",
    location: "橫濱關內",
    desc: "Mapcode: 8 676 500*10",
    lat: 35.4411763,
    lon: 139.6359113,
  },
  {
    day: "2/2",
    name: "日和飯店舞濱",
    location: "千葉浦安",
    desc: "Mapcode: 6 213 121*27",
    lat: 35.6462354,
    lon: 139.8970995,
  },
];

// 5. 圖標庫 (Icons)
const e = React.createElement;
window.Icons = {
  Plane: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M2 12h5" }),
      e("path", { d: "M13 12h3" }),
      e("path", {
        d: "M19.74 7.33a2.3 2.3 0 0 1 2.93 2.93l-3.33 3.33a2.3 2.3 0 0 1-3.25 0l-7.34-7.34a2.3 2.3 0 0 1 0-3.25l3.33-3.33z",
      }),
      e("path", { d: "M14.66 14.66 9 22H2l2.5-9" }),
      e("path", { d: "M7 17l-5 5" })
    ),
  Smile: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 12, cy: 12, r: 10 }),
      e("path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }),
      e("line", { x1: 9, x2: 9.01, y1: 9, y2: 9 }),
      e("line", { x1: 15, x2: 15.01, y1: 9, y2: 9 })
    ),
  List: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("line", { x1: 8, x2: 21, y1: 6, y2: 6 }),
      e("line", { x1: 8, x2: 21, y1: 12, y2: 12 }),
      e("line", { x1: 8, x2: 21, y1: 18, y2: 18 }),
      e("line", { x1: 3, x2: 3.01, y1: 6, y2: 6 }),
      e("line", { x1: 3, x2: 3.01, y1: 12, y2: 12 }),
      e("line", { x1: 3, x2: 3.01, y1: 18, y2: 18 })
    ),
  LayoutGrid: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 7, height: 7, x: 3, y: 3, rx: 1 }),
      e("rect", { width: 7, height: 7, x: 14, y: 3, rx: 1 }),
      e("rect", { width: 7, height: 7, x: 14, y: 14, rx: 1 }),
      e("rect", { width: 7, height: 7, x: 3, y: 14, rx: 1 })
    ),
  Calculator: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 16, height: 20, x: 4, y: 2, rx: 2 }),
      e("line", { x1: 8, x2: 16, y1: 6, y2: 6 }),
      e("line", { x1: 16, x2: 16, y1: 14, y2: 18 }),
      e("path", { d: "M16 10h.01" }),
      e("path", { d: "M12 10h.01" }),
      e("path", { d: "M8 10h.01" }),
      e("path", { d: "M12 14h.01" }),
      e("path", { d: "M8 14h.01" }),
      e("path", { d: "M12 18h.01" }),
      e("path", { d: "M8 18h.01" })
    ),
  Clock: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 12, cy: 12, r: 10 }),
      e("polyline", { points: "12 6 12 12 16 14" })
    ),
  Wallet: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4" }),
      e("path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5" }),
      e("path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z" })
    ),
  MapPin: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
      e("circle", { cx: 12, cy: 10, r: 3 })
    ),
  Ticket: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      }),
      e("path", { d: "M13 5v2" }),
      e("path", { d: "M13 17v2" }),
      e("path", { d: "M13 11v2" })
    ),
  Navigation2: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", { points: "12 2 19 21 12 17 5 21 12 2" })
    ),
  Settings: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      }),
      e("circle", { cx: 12, cy: 12, r: 3 })
    ),
  Sparkles: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      }),
      e("path", { d: "M5 3v4" }),
      e("path", { d: "M9 3v4" }),
      e("path", { d: "M3 5h4" }),
      e("path", { d: "M3 9h4" })
    ),
  Check: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 3,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polyline", { points: "20 6 9 17 4 12" })
    ),
  X: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M18 6 6 18" }),
      e("path", { d: "m6 6 12 12" })
    ),
  Sun: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 12, cy: 12, r: 4 }),
      e("path", { d: "M12 2v2" }),
      e("path", { d: "M12 20v2" }),
      e("path", { d: "m4.93 4.93 1.41 1.41" }),
      e("path", { d: "m17.66 17.66 1.41 1.41" }),
      e("path", { d: "M2 12h2" }),
      e("path", { d: "M20 12h2" }),
      e("path", { d: "m6.34 17.66-1.41 1.41" }),
      e("path", { d: "m19.07 4.93-1.41 1.41" })
    ),
  CloudSnow: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
      }),
      e("path", { d: "M8 15h.01" }),
      e("path", { d: "M8 19h.01" }),
      e("path", { d: "M12 17h.01" }),
      e("path", { d: "M12 21h.01" }),
      e("path", { d: "M16 15h.01" }),
      e("path", { d: "M16 19h.01" })
    ),
  Cloud: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3.1-6-6.5-6-3.7 0-6.6 2.8-6.9 6.4h-.1C2.1 16.4 0 18.5 0 21c0 2.2 1.8 4 4 4h13.5c2.2 0 4-1.8 4-4",
      })
    ),
  Car: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7.7c-.7 0-1.3.3-1.8.7-.9.9-2.2 2.3-2.2 2.3S1 10.6 1 11.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2",
      }),
      e("path", { d: "M2.5 17a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" }),
      e("path", { d: "M16.5 17a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" }),
      e("path", { d: "M12 9V6" })
    ),
  Footprints: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 8c0 1.25-.38 2-1.28 2.55-.4.25-.72.82-.72 1.25V16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 2 13 3.8 13 8c0 1.25.38 2 1.28 2.55.4.25.72.82.72 1.25V16a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z",
      })
    ),
  Navigation: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", { points: "3 11 22 2 13 21 11 13 3 11" })
    ),
  ExternalLink: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      }),
      e("polyline", { points: "15 3 21 3 21 9" }),
      e("line", { x1: 10, x2: 21, y1: 14, y2: 3 })
    ),
  Mail: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 20, height: 16, x: 2, y: 4, rx: 2 }),
      e("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
    ),
  ArrowDown: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M12 5v14" }),
      e("path", { d: "m19 12-7 7-7-7" })
    ),
  ArrowRightLeft: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "m16 3 4 4-4 4" }),
      e("path", { d: "M20 7H4" }),
      e("path", { d: "m8 21-4-4 4-4" }),
      e("path", { d: "M4 17h16" })
    ),
  Search: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("circle", { cx: 11, cy: 11, r: 8 }),
      e("path", { d: "m21 21-4.3-4.3" })
    ),
  Hotel: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
      }),
      e("path", { d: "M7 2v18" }),
      e("path", { d: "M17 2v18" }),
      e("path", { d: "M2 12h20" }),
      e("path", { d: "M2 17h20" })
    ),
  Fuel: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("line", { x1: 3, x2: 15, y1: 22, y2: 22 }),
      e("line", { x1: 4, x2: 14, y1: 9, y2: 9 }),
      e("path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }),
      e("path", {
        d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
      })
    ),
  Store: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
      }),
      e("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
      e("path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }),
      e("path", { d: "M2 7h20" }),
      e("path", {
        d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      })
    ),
  Bot: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M12 8V4H8" }),
      e("rect", { width: 16, height: 12, x: 4, y: 8, rx: 2 }),
      e("path", { d: "M2 14h2" }),
      e("path", { d: "M20 14h2" }),
      e("path", { d: "M15 13v2" }),
      e("path", { d: "M9 13v2" })
    ),
  Camera: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      }),
      e("circle", { cx: 12, cy: 13, r: 3 })
    ),
  Image: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }),
      e("circle", { cx: 9, cy: 9, r: 2 }),
      e("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ),
  Utensils: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }),
      e("path", { d: "M7 2v20" }),
      e("path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })
    ),
  LocateFixed: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("line", { x1: 2, x2: 5, y1: 12, y2: 12 }),
      e("line", { x1: 19, x2: 22, y1: 12, y2: 12 }),
      e("line", { x1: 12, x2: 12, y1: 2, y2: 5 }),
      e("line", { x1: 12, x2: 12, y1: 19, y2: 22 }),
      e("circle", { cx: 12, cy: 12, r: 7 }),
      e("circle", { cx: 12, cy: 12, r: 3 })
    ),
  Shield: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
    ),
  ShoppingBasket: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "m5 11 4-7" }),
      e("path", { d: "m19 11-4-7" }),
      e("path", { d: "M2 11h20" }),
      e("path", {
        d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",
      }),
      e("path", { d: "m9 11 1 9" }),
      e("path", { d: "m4.5 11 .1 8.1" }),
      e("path", { d: "m19.5 11-.1 8.1" }),
      e("path", { d: "m15 11-1 9" })
    ),
  Star: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      })
    ),
  ShoppingBag: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
      e("path", { d: "M3 6h18" }),
      e("path", { d: "M16 10a4 4 0 0 1-8 0" })
    ),
  Coffee: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M10 2v2" }),
      e("path", { d: "M14 2v2" }),
      e("path", { d: "M6 2v2" }),
      e("path", {
        d: "M18 8a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2.95a1 1 0 0 0-.768.369l-.254.332a4 4 0 0 1-3.26 1.623 4 4 0 0 1-3.296-1.402l-.125-.153A1 1 0 0 0 4.35 14H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h14z",
      }),
      e("path", { d: "M18 14v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1" })
    ),
  Gift: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("rect", { x: 3, y: 8, width: 18, height: 4, rx: 1 }),
      e("path", { d: "M12 8v13" }),
      e("path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }),
      e("path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.9 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      })
    ),
  Loader2: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
    ),
  Map: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" }),
      e("line", { x1: 9, x2: 9, y1: 3, y2: 18 }),
      e("line", { x1: 15, x2: 15, y1: 6, y2: 21 })
    ),
  AlertTriangle: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      }),
      e("path", { d: "M12 9v4" }),
      e("path", { d: "M12 17h.01" })
    ),
  Edit: (p) =>
    e(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...p,
      },
      e("path", {
        d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
      })
    ),
};
