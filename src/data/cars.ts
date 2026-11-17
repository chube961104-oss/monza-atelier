export interface CarModel {
  id: string;
  name: string;
  subtitle: string;
  category: 'icona' | 'track' | 'hybrid' | 'classic';
  categoryLabel: string;
  year: number;
  engine: string;
  power: string;
  acceleration: string;
  topSpeed: string;
  transmission: string;
  mileage: string;
  exteriorColor: string;
  interiorColor: string;
  price: string;
  status: 'In Stock' | 'Reserved' | 'Off-Market Allocation';
  image: string; // 視角 01：高解析真實外貌全貌照 (Exterior Silhouette)
  gallery?: string[]; // 可選圖庫 (預設包含外貌全貌)
  chassisCode: string;
  monzaVerdict: string;
  features: string[];
  telemetryData: {
    lateralG: string;
    downforceAt200: string;
    powerToWeight: string;
    fioranoLapTime: string;
  };
}

export const CARS_DATA: CarModel[] = [
  {
    id: "ferrari-daytona-sp3",
    name: "Ferrari Daytona SP3",
    subtitle: "Icona 系列限量傳奇 ｜ 6.5L V12 自然進氣顛峰",
    category: "icona",
    categoryLabel: "Icona 限量系列",
    year: 2023,
    engine: "6.5L 65° 自然進氣 V12 (F140HC)",
    power: "840 cv @ 9,250 rpm",
    acceleration: "0-100 km/h: 2.85s",
    topSpeed: "> 340 km/h",
    transmission: "7 速 F1 雙離合器變速箱",
    mileage: "420 km (收藏新車狀態)",
    exteriorColor: "Rosso Magma 特殊三層漆",
    interiorColor: "Blu Medio 賽車級麂皮座艙",
    price: "POA (私洽索取配額定價)",
    status: "Off-Market Allocation",
    // 視角 01（外貌全貌）：Rosso Magma 經典流線外觀與前車頭 3/4 視角，低趴賽道 Barchetta 輪廓
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=85"
    ],
    chassisCode: "ZFF93NHA*00289192",
    monzaVerdict: "這是當代機械藝術的最後榮光。9,500轉斷油時的 V12 高頻音浪，宛如 1967 年戴通納 24 小時耐力賽三車衝線的歷史重現。全碳纖維一體式底盤回饋極其純粹，是一台能讓收藏家在車庫凝視一整晚的藝術品。",
    features: [
      "全球限量 599 輛絕版編號",
      "源自 F1 與 Sports Prototype 的純碳纖維座艙",
      "固定式座椅結構搭配可調踏板系統",
      "原廠 Ferrari Classiche 收藏證書整備"
    ],
    telemetryData: {
      lateralG: "1.42 G",
      downforceAt200: "500 kg",
      powerToWeight: "1.77 kg/cv",
      fioranoLapTime: "1'21.0"
    }
  },
  {
    id: "ferrari-sf90-xx-stradale",
    name: "Ferrari SF90 XX Stradale",
    subtitle: "躍馬首款合法上路 XX 賽道猛獸 ｜ 1,030 cv 狂暴油電",
    category: "track",
    categoryLabel: "XX 賽道系列",
    year: 2024,
    engine: "4.0L V8 雙渦輪 + 三電動馬達",
    power: "1,030 cv (綜效馬力)",
    acceleration: "0-100 km/h: 2.3s",
    topSpeed: "320 km/h",
    transmission: "8 速 F1 雙離合器",
    mileage: "85 km (原廠全新交付)",
    exteriorColor: "Bianco Cervino + 亮面碳纖維 + Rosso Corsa 塗裝拉線",
    interiorColor: "Nero 賽車輕量化碳纖維桶椅",
    price: "POA (現車在庫)",
    status: "In Stock",
    // 視角 01（外貌全貌）：Bianco Cervino 白色車漆搭配 XX 賽道專屬寬體車身與競技前下導流
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85"
    ],
    chassisCode: "ZFF97NPA*00302481",
    monzaVerdict: "固定式碳纖維巨型尾翼帶來的下壓力是前所未有的。在賽道入彎處，你能在時速 220 公里下毫不猶豫地狠踩煞車，電子側滑控制（eSSC）與四輪扭矩分配讓極限寬容度高得驚人。這不是一台跑車，這是一架貼地飛行的戰鬥機。",
    features: [
      "自 F50 以來首款原廠固定式大型尾翼街道車",
      "時速 250 km/h 時產生高達 530 kg 極致下壓力",
      "Extra Boost 超增壓模式 (賽道單圈秘密武器)",
      "交車包含 Monza 本人親自賽道遙測動態教學"
    ],
    telemetryData: {
      lateralG: "1.58 G",
      downforceAt200: "395 kg",
      powerToWeight: "1.51 kg/cv",
      fioranoLapTime: "1'17.3 (創紀錄)"
    }
  },
  {
    id: "ferrari-488-pista-piloti",
    name: "Ferrari 488 Pista Piloti Ferrari",
    subtitle: "Tailor-Made 紳士車手專屬 ｜ WEC 世界耐力錦標賽冠軍致敬",
    category: "track",
    categoryLabel: "賽道特規系列",
    year: 2020,
    engine: "3.9L 90° 雙渦輪增壓 V8 (國際年度引擎四連冠)",
    power: "720 cv @ 8,000 rpm",
    acceleration: "0-100 km/h: 2.85s",
    topSpeed: "340 km/h",
    transmission: "7 速 F1 雙離合器 (換檔僅需 30ms)",
    mileage: "1,850 km (台灣一手車主，全原廠保養紀錄)",
    exteriorColor: "Blu Tour de France 義大利國旗賽車條紋",
    interiorColor: "Alcantara Nero 搭配專屬 Piloti 刺繡與碳纖維套件",
    price: "NT$ 28,800,000",
    status: "In Stock",
    // 視角 01（外貌全貌）：經典賽車紅與義大利三色國旗條紋，WEC 耐力賽桂冠冠軍專屬塗裝
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=85"
    ],
    chassisCode: "ZFF85RHA*00251147",
    monzaVerdict: "只有參與 Ferrari 賽事計劃的車手才有資格購買的夢幻版本。S-Duct 前蓋空氣力學通道讓前軸貼地性達到鬼神級別。雙渦輪幾乎零延遲，在排氣門全開的怒吼中，你能感受到如同 GT 賽車一般的機械緊繃感。",
    features: [
      "Tailor-Made 專屬限定，極致稀有車主配額身分認證",
      "全車選配全碳纖維輪圈 (單顆減重 40%)",
      "鈦合金排氣尾段與滿配碳纖維引擎室",
      "經 Monza 團隊實測底盤幾何，無任何賽道碰撞歷史"
    ],
    telemetryData: {
      lateralG: "1.45 G",
      downforceAt200: "240 kg",
      powerToWeight: "1.78 kg/cv",
      fioranoLapTime: "1'21.5"
    }
  },
  {
    id: "ferrari-296-gtb-assetto-fiorano",
    name: "Ferrari 296 GTB Assetto Fiorano",
    subtitle: "當代短軸距操駕教父 ｜ 120° V6 雙渦輪混動 830 cv",
    category: "hybrid",
    categoryLabel: "油電混動新旗艦",
    year: 2023,
    engine: "3.0L 120° V6 雙渦輪 + 插電式油電",
    power: "830 cv @ 8,000 rpm",
    acceleration: "0-100 km/h: 2.9s",
    topSpeed: "> 330 km/h",
    transmission: "8 速 F1 雙離合器",
    mileage: "3,100 km (單一車主，未操駕過度)",
    exteriorColor: "Rosso Corsa + Giallo Modena 賽道雙色拉花",
    interiorColor: "Cuoio 經典馬鞍棕真皮搭配碳纖維賽車椅",
    price: "NT$ 19,500,000",
    status: "Reserved",
    // 視角 01（外貌全貌）：Rosso Corsa 搭配 Giallo Modena 經典賽道賽車條紋，短軸距 120° 緊湊動感前車頭
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ],
    chassisCode: "ZFF98NHA*00294821",
    monzaVerdict: "被外媒稱為『小拉法 (piccola LaFerrari)』。因為短軸距和 120 度夾角極低重心，進彎反應是我開過所有現代跑車中最俐落敏捷的一輛。Assetto Fiorano 專屬的 Multimatic 賽道阻尼更是精華所在。",
    features: [
      "Assetto Fiorano 賽車級減重套件 (減輕 15 公斤)",
      "GT 賽車衍生 Multimatic 固定阻尼賽道避震器",
      "Lexan 輕量化後擋風玻璃",
      "純電零排放靜音行駛可達 25 公里"
    ],
    telemetryData: {
      lateralG: "1.48 G",
      downforceAt200: "360 kg",
      powerToWeight: "1.77 kg/cv",
      fioranoLapTime: "1'21.0"
    }
  },
  {
    id: "ferrari-458-speciale",
    name: "Ferrari 458 Speciale",
    subtitle: "最後的自然進氣純粹神話 ｜ 9,000 轉交響樂章",
    category: "classic",
    categoryLabel: "經典自然進氣收藏",
    year: 2015,
    engine: "4.5L 90° 自然進氣 V8 (每公升輸出 135 cv 神級紀錄)",
    power: "605 cv @ 9,000 rpm",
    acceleration: "0-100 km/h: 3.0s",
    topSpeed: "325 km/h",
    transmission: "7 速 F1 雙離合器",
    mileage: "7,800 km (頂級藏家恆溫車庫封存，全車原漆)",
    exteriorColor: "Bianco Avus 珍珠白搭配藍白 NART 賽道拉線",
    interiorColor: "Alcantara 賽車黑色面料搭配黃色車縫線",
    price: "NT$ 25,500,000",
    status: "In Stock",
    // 視角 01（外貌全貌）：Bianco Avus 珍珠白車身搭配藍白 NART 北美賽車隊賽道拉線，經典中置後驅完美身段
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ],
    chassisCode: "ZFF72NHA*00204789",
    monzaVerdict: "在渦輪和油電時代，這部車是所有內燃機信徒的聖杯。沒有增壓器的遲滯，九千轉時後腦杓受到的聲浪轟鳴就像神經被直接點燃。市場價格在過去五年穩健上揚，具備不可替代的世代傳承意義。",
    features: [
      "首款搭載 SSC 側滑角控制系統的躍馬傳奇",
      "主動式前後空氣力學導流翼片",
      "全車原廠保養履歷齊全，經 Ferrari Classiche 預先檢驗",
      "抗通膨硬資產首選，保值升值潛力極高"
    ],
    telemetryData: {
      lateralG: "1.33 G",
      downforceAt200: "210 kg",
      powerToWeight: "2.13 kg/cv",
      fioranoLapTime: "1'23.5"
    }
  },
  {
    id: "ferrari-monza-sp2",
    name: "Ferrari Monza SP2",
    subtitle: "Barchetta 雙座開放式無風擋超跑 ｜ 810 cv 純粹機械雕塑",
    category: "icona",
    categoryLabel: "Icona 限量系列",
    year: 2021,
    engine: "6.5L 65° 自然進氣 V12",
    power: "810 cv @ 8,500 rpm",
    acceleration: "0-100 km/h: 2.9s",
    topSpeed: "> 300 km/h",
    transmission: "7 速 F1 雙離合器",
    mileage: "310 km (私人博物館展車)",
    exteriorColor: "Nero Daytona 搭配深銀賽車塗裝",
    interiorColor: "Bordeaux 深紅奢華真皮雙座",
    price: "POA (跨國私洽專案引渡)",
    status: "Off-Market Allocation",
    // 視角 01（外貌全貌）：Nero Daytona 黑色塗裝搭配賽車銀線條，全碳纖維一體式無前擋開放雙座 Barchetta 雕塑線條
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ],
    chassisCode: "ZFF90NHA*00278119",
    monzaVerdict: "當虛擬風擋（Virtual Wind Shield）將氣流引導過駕駛頭頂，你戴上原廠聯名安全帽在賽道呼嘯而過時，那是純粹人車一體的最高境界。全車碳纖維車體只有 1,500 公斤，開著它，你就是行走的文藝復興傳奇。",
    features: [
      "全球僅限量生產 499 輛 (SP1 與 SP2 合計)",
      "極少釋出之歐規一手藏家轉讓配額",
      "隨車附贈 Berluti 原廠量身訂製賽車服、頭盔與護目鏡",
      "Monza 團隊提供全流程保密引渡與台灣海關專屬通關諮詢"
    ],
    telemetryData: {
      lateralG: "1.39 G",
      downforceAt200: "280 kg",
      powerToWeight: "1.85 kg/cv",
      fioranoLapTime: "1'22.1"
    }
  }
];
