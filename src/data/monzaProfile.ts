export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  focus: string;
  highlights: string[];
}

export interface RacingRecord {
  year: string;
  series: string;
  role: string;
  achievements: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  description: string;
}

export const MONZA_PROFILE = {
  name: "Monza",
  chineseName: "蒙札",
  title: "Supercar Dynamics Curator & Gentleman Racing Mentor",
  subtitle: "前法拉利挑戰賽車手 ｜ 米蘭理工車輛工程碩士 ｜ 終極躍馬藏家私洽顧問",
  heroQuote: "在時速 300 公里之下，機械不會說謊。最好的法拉利，只留給懂得駕馭它心跳的人。",
  bioSummary: "十五年穿梭於米蘭理工風洞、蒙札賽道與馬拉內羅原廠。不賣泛泛之輩的代步工具，專為全球層峰車主獵尋、調校並交付具備賽道靈魂的極限躍馬。",
  
  // 創辦人真人肖像照（50歲義大利血統前業餘賽車手，身穿碳灰色調賽車夾克與專業形象，背景為蒙札賽道風格）
  portraitImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85",
  localPortraitPath: "/founder-monza.jpg",
  portraitTheme: "約 50 歲、具備義大利血統的前業餘賽車手，身穿碳灰色賽車夾克，眼神剛毅敏銳，背景為蒙札賽道風格",
  age: "50 歲 (Age 50)",
  heritage: "義大利波隆那 × 台灣 (Italian-Taiwanese Bloodline)",
  
  stats: [
    { label: "Ferrari Challenge 頒獎台", value: "12+" },
    { label: "Monza 賽道單圈最速紀錄", value: "1'47.8" },
    { label: "全球經手極限躍馬總值", value: "€85M+" },
    { label: "賽道級一對一交車培訓", value: "100% 滿意度" }
  ],

  education: [
    {
      institution: "Politecnico di Milano (義大利米蘭理工大學)",
      degree: "車輛工程碩士 (M.Sc. in Automotive Engineering)",
      period: "2011 - 2013",
      focus: "極限動態空氣動力學 (Aerodynamics) 與主動式底盤懸吊控制",
      highlights: [
        "論文題目：地面效應 (Ground Effect) 在高速封閉賽道彎道極限時的下壓力變量分析",
        "義大利 Motor Valley (馬拉內羅與博洛尼亞) 頂級車廠研發中心實習研究"
      ]
    },
    {
      institution: "Cranfield University (英國克蘭菲爾德大學賽車工程學院)",
      degree: "高階賽車工程與遙測數據專題研習",
      period: "2014",
      focus: "GT3 賽車動態遙測 (MoTeC) 與輪胎抓地極限建模",
      highlights: [
        "專注於即時遙測傳感器數據解讀、差速器鎖定比率最佳化",
        "模擬極限環境下碳纖維陶瓷煞車熱衰竭臨界點分析"
      ]
    }
  ] as EducationItem[],

  racingRecords: [
    {
      year: "2014 - 2016",
      series: "Formula Renault 2.0 & 義大利本地 GT 錦標賽",
      role: "青年方程式與 GT 賽車手",
      achievements: [
        "於義大利國寶級「蒙札賽道 (Autodromo Nazionale Monza)」創下私人組最速單圈",
        "圈內與車隊工程師自此尊稱其為「Monza (蒙札)」"
      ]
    },
    {
      year: "2017 - 2020",
      series: "Ferrari Challenge Trofeo Pirelli (法拉利挑戰賽)",
      role: "註冊競技車手 (駕馭 458 Challenge EVO / 488 Challenge)",
      achievements: [
        "亞太與歐洲巡迴賽事累計 4 次分站冠軍、7 次桿位 (Pole Position)",
        "年度總排名前三，多次於斯帕 (Spa) 與蒙札賽道登上榮譽頒獎台"
      ]
    },
    {
      year: "2021 - 至今",
      series: "Nürburgring 24h & XX Programme 私人教練顧問",
      role: "綠色地獄客座車手 & 層峰車主專屬領航教練",
      achievements: [
        "紐柏林 24 小時耐力賽 SP9 級別車隊策略分析與調校測試",
        "受邀擔任 Ferrari 頂級藏家 XX 系列賽道日私人副駕教練"
      ]
    }
  ] as RacingRecord[],

  certifications: [
    {
      title: "FIA International Competition Driver License",
      issuer: "國際汽車聯盟 (FIA)",
      badge: "國際 C 級賽車執照",
      description: "具備征戰全球各項頂級 GT 與耐久系列賽事之正式國際車手資格。"
    },
    {
      title: "Corso Pilota Evoluzione & Sfida Master",
      issuer: "Ferrari S.p.A. (Maranello)",
      badge: "法拉利原廠極限駕控大師指導員",
      description: "完成義大利馬拉內羅原廠所有階段極限動態駕訓評鑑，擁有官方認可之動態測試與教學資格。"
    },
    {
      title: "Ferrari Classiche Verification Specialist",
      issuer: "Ferrari Classiche Department",
      badge: "原廠古董車動態認證評估",
      description: "精通躍馬歷史底盤、自然進氣引擎及傳動系統之匹配號碼 (Matching Numbers) 溯源鑑定。"
    }
  ] as Certification[],

  manifestoParagraphs: [
    "我叫 Monza。這個名字不是我的本名，而是多年前在義大利那條被譽為「速度神殿」的蒙札賽道上，我的工程師團隊與對手送給我的代號。在那個彎角動輒承受 3G 側向重力、轉速逼近九千轉的紅線區裡，我學會了用指尖感知輪胎與柏油路面最後一毫米的摩擦力。",
    "從米蘭理工大學的風洞實驗室，到 Ferrari Challenge 賽道上的領獎台，我花了整整十五年與這些義大利機械猛獸朝夕相處。對我而言，法拉利不是名片上的財富印章，而是人類工程美學的極限產物。它體內流著 1947 年以來從未熄滅的競技汽油。",
    "傳統超跑市場充斥著數字遊戲、炒作與不透明的資訊。當多數人只在乎這台車能否停在五星級飯店門口時，我在乎的是：它的差速器是否調校到位？它的碳纖維單體座艙是否有瑕疵？當你深踩油門進入降檔補油的那一瞬間，那具 V8 雙渦輪或 V12 自然進氣引擎，能不能帶給你靈魂出竅般的震顫？",
    "我創立 MONZA ATELIER，只做一件事：為真正懂得躍馬靈魂的藏家，尋找那些一生值得擁有一次的傳奇。每一輛經過我手交付的車，都具備賽道級的嚴苛健康檢驗，甚至擁有我親自調校的動態遙測履歷。如果你只是想要一輛代步的代名詞，市面上有無數車商可以為你服務；但如果你想要尋找一輛能燃燒你血性、能代代傳承的極限藝術品——歡迎來到我的車庫。我在這裡等你。"
  ]
};
