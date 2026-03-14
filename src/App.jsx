import { useState, useEffect } from "react";
import "./index.css";

// ─── VERİ ───────────────────────────────────────────────────────────────────

const TRIP_START = new Date("2026-03-19T23:00:00");

const tripDays = [
  {
    id: 0,
    date: "19 Mart Çarşamba",
    short: "19 Mar",
    badge: "Varış Gecesi",
    emoji: "✈️",
    title: "Esentepe'ye geçiş ve hafif başlangıç",
    time: "23:00 varış",
    drive: "Ercan Havalimanı → Esentepe ≈ 40 dk",
    plan: [
      "Ercan Havalimanı'ndan kiralık aracı teslim al",
      "Esentepe otelinize ~40 dakika sürüş",
      "Check-in, bagajları bırak, odaya yerleş",
      "The Coconut veya Korineum'da geç saatte içki"
    ],
    food: [
      { name: "The Coconut", map: "https://www.google.com/maps/search/?api=1&query=The+Coconut+Bar+Esentepe+Cyprus" },
      { name: "Korineum Golf Bar", map: "https://www.google.com/maps/search/?api=1&query=Korineum+Golf+Club+Esentepe+Cyprus" }
    ],
    notes: "İlk gece hafif tut. Asıl tempo ertesi sabah başlıyor.",
    tip: "Havalimanında TRY bozdur — exchange büfeleri iyi kur veriyor.",
    accent: "#6366f1"
  },
  {
    id: 1,
    date: "20 Mart Perşembe",
    short: "20 Mar",
    badge: "Girne + Casino",
    emoji: "⚓",
    title: "Liman, kale, Bellapais ve gece casino",
    time: "Tam gün",
    drive: "Esentepe → Girne ≈ 20 dk",
    plan: [
      "Korineum Golf Cafe'de deniz manzaralı kahvaltı",
      "Girne Limanı gezintisi ve tarihi kale turu",
      "Girne Kalesi içindeki Batık Gemi Müzesi'ni gez",
      "IQOS Store'a uğra (Girne merkez)",
      "Limanda Grida'da taze balık öğle yemeği",
      "Bellapais Manastırı — dağdan panoramik manzara",
      "Otele dön, dinlen, hazırlan",
      "Akşam Lord's Palace'ta yemek + casino"
    ],
    breakfast: [
      { name: "Korineum Golf Cafe 🌊", map: "https://www.google.com/maps/search/?api=1&query=Korineum+Golf+Club+Esentepe+Cyprus", note: "Deniz manzarası" },
      { name: "Harbour Club ⚓", map: "https://www.google.com/maps/search/?api=1&query=Harbour+Club+Kyrenia+Cyprus", note: "Liman manzarası" },
      { name: "TARO Garden Cafe 🌿", map: "https://www.google.com/maps/search/?api=1&query=TARO+Garden+Cafe+Esentepe+Cyprus", note: "Sahil kenarı" }
    ],
    food: [
      { name: "Grida Balık ⭐ 🌊", map: "https://www.google.com/maps/place/Grida+Restaurant/@35.3399,33.3181,17z", note: "Liman manzarası" },
      { name: "Kybele Restaurant 🌊", map: "https://www.google.com/maps/place/Kybele+Restaurant/@35.3401,33.3178,17z", note: "Liman üstü teras" },
      { name: "Niazi's Restaurant ⭐", map: "https://www.google.com/maps/search/?api=1&query=Niazis+Restaurant+Kyrenia+Cyprus", note: "Klasik Kıbrıs" },
      { name: "Jashan (Hint mutfağı)", map: "https://www.google.com/maps/search/?api=1&query=Jashan+Indian+Restaurant+Kyrenia", note: "Farklı seçenek" }
    ],
    places: [
      { name: "Girne Limanı", map: "https://www.google.com/maps/place/Kyrenia+Harbour/@35.3403,33.3175,17z" },
      { name: "Girne Kalesi + Batık Gemi", map: "https://www.google.com/maps/place/Kyrenia+Castle/@35.3408,33.3185,17z" },
      { name: "Bellapais Manastırı 🏔️", map: "https://www.google.com/maps/place/Bellapais+Abbey/@35.3086,33.3530,17z" }
    ],
    casino: [
      { name: "Lord's Palace ✅ Önerilen", map: "https://www.google.com/maps/search/?api=1&query=Lords+Palace+Hotel+Casino+Kyrenia+Cyprus" },
      { name: "Merit Royal Casino", map: "https://www.google.com/maps/search/?api=1&query=Merit+Royal+Hotel+Casino+Kyrenia" },
      { name: "Les Ambassadeurs", map: "https://www.google.com/maps/search/?api=1&query=Les+Ambassadeurs+Casino+Kyrenia" }
    ],
    shopping: [
      { name: "IQOS Store Girne 🚬", map: "https://www.google.com/maps/search/?api=1&query=IQOS+Store+Kyrenia+Cyprus" },
      { name: "Merit Royal Boutique 💎", map: "https://www.google.com/maps/search/?api=1&query=Merit+Royal+Hotel+Kyrenia+Cyprus", note: "Otel içi lüks mağaza" },
      { name: "Altın & Mücevher Çarşısı ✨", map: "https://www.google.com/maps/search/?api=1&query=Gold+Jewellery+Shop+Kyrenia+Cyprus", note: "KKTC'de altın çok uygun" },
      { name: "Harbour Boutiques 👜", map: "https://www.google.com/maps/search/?api=1&query=Boutique+Kyrenia+Harbour+Cyprus", note: "Liman çevresindeki butikler" },
      { name: "Lord's Palace Shops 🛍️", map: "https://www.google.com/maps/search/?api=1&query=Lords+Palace+Hotel+Casino+Kyrenia+Cyprus", note: "Casino oteli içi alışveriş" }
    ],
    notes: "Casino için kimlik/pasaport zorunlu. Lord's Palace önerilen seçenek — atmosfer iyi.",
    tip: "Bellapais için en güzel ışık 15:00-17:00 arası. Grida ve Kybele'nin her ikisinde de liman manzarası var.",
    accent: "#0ea5e9"
  },
  {
    id: 2,
    date: "21 Mart Cuma",
    short: "21 Mar",
    badge: "Kapalı Maraş",
    emoji: "🏛️",
    title: "Gazimağusa ve hayalet şehir Maraş",
    time: "Tam gün",
    drive: "Esentepe → Gazimağusa ≈ 1s 20dk → Lefkoşa ≈ 45dk → Girne ≈ 50dk",
    plan: [
      "Sabah 08:30 erkenden yola çık",
      "Kapalı Maraş (Varosha) — terk edilmiş şehir yürüyüşü",
      "Sahil tarafını gez, yıkık binaları fotoğrafla",
      "Gazimağusa: Lala Mustafa Paşa Camii + Petek Pastanesi molası (kısa tut)",
      "Lefkoşa'ya geç — ≈ 45 dakika sürüş",
      "Ledra Palace Sınır Kapısı ve tampon bölge parkı",
      "Arasta Çarşısı ve Bandabuliya'da alışveriş gezisi",
      "Eski şehirde akşam yemeği",
      "Girne'ye dönüş ≈ 50 dk"
    ],
    food: [
      { name: "Petek Pastanesi ⭐", map: "https://www.google.com/maps/search/?api=1&query=Petek+Patisserie+Famagusta+Cyprus", note: "Gazimağusa — börek & tatlı" },
      { name: "Sabor Restaurant 🍷", map: "https://www.google.com/maps/search/?api=1&query=Sabor+Restaurant+Nicosia+Cyprus", note: "Lefkoşa — tapas & şarap" },
      { name: "The Brewery 🍺", map: "https://www.google.com/maps/search/?api=1&query=The+Brewery+Nicosia+Cyprus", note: "Lefkoşa — craft bira & meze" },
      { name: "Bandabuliya Food Hall", map: "https://www.google.com/maps/search/?api=1&query=Bandabuliya+Nicosia+Cyprus", note: "Lefkoşa — tarihi pazar içi" },
      { name: "Zanettos Taverna ⭐", map: "https://www.google.com/maps/search/?api=1&query=Zanettos+Taverna+Nicosia+Cyprus", note: "Lefkoşa — efsane meze sofrası" }
    ],
    places: [
      { name: "Kapalı Maraş (Varosha) 🏚️", map: "https://www.google.com/maps/place/Varosha/@35.1203,33.9497,15z" },
      { name: "Lala Mustafa Paşa Camii", map: "https://www.google.com/maps/place/Lala+Mustafa+Pasha+Mosque/@35.1247,33.9395,17z" },
      { name: "Ledra Palace Sınır Kapısı 🛂", map: "https://www.google.com/maps/search/?api=1&query=Ledra+Palace+Crossing+Nicosia+Cyprus" },
      { name: "BM Tampon Bölge Parkı 🌿", map: "https://www.google.com/maps/search/?api=1&query=UN+Buffer+Zone+Nicosia+Cyprus" },
      { name: "Selimiye Camii (Lefkoşa)", map: "https://www.google.com/maps/search/?api=1&query=Selimiye+Mosque+Nicosia+Cyprus" },
      { name: "Ledra Caddesi", map: "https://www.google.com/maps/search/?api=1&query=Ledra+Street+Nicosia+Cyprus" }
    ],
    shopping: [
      { name: "Bedestan Çarşısı 💎", map: "https://www.google.com/maps/search/?api=1&query=Bedestan+Nicosia+Cyprus", note: "Bizans kilisesinden dönüşüm — lüks butikler" },
      { name: "Arasta Çarşısı Kuyumcuları ✨", map: "https://www.google.com/maps/search/?api=1&query=Arasta+Bazaar+Nicosia+Cyprus", note: "Altın & gümüş takı — KKTC'nin en iyisi" },
      { name: "Lefkoşa Kuyumcu Sokağı 💍", map: "https://www.google.com/maps/search/?api=1&query=Jewellery+Street+Nicosia+North+Cyprus", note: "El işi Kıbrıs gümüşü" },
      { name: "Selimiye Çevresi Butikler 👔", map: "https://www.google.com/maps/search/?api=1&query=Boutique+Old+City+Nicosia+Cyprus", note: "Tarihi çarşı çevresindeki tasarım dükkanları" },
      { name: "Bandabuliya Delicatessen 🧀", map: "https://www.google.com/maps/search/?api=1&query=Bandabuliya+Nicosia+Cyprus", note: "Premium Kıbrıs ürünleri: hellim, şarap, zeytinyağı" },
      { name: "Ledra Caddesi Flagship'ler 🏬", map: "https://www.google.com/maps/search/?api=1&query=Ledra+Street+Nicosia+Cyprus", note: "Zara, Mango, yerel tasarımcılar" }
    ],
    notes: "İki şehir bir günde: Maraş'ta fotoğraf, Lefkoşa'da alışveriş ve akşam yemeği. Gazimağusa'yı kısa tut, Lefkoşa'ya öğlen gel.",
    tip: "Ledra Palace sınır kapısında pasaport/kimlik şart — sınırı geçmesen de park alanı ilginç.",
    accent: "#f59e0b"
  },
  {
    id: 3,
    date: "22 Mart Cumartesi",
    short: "22 Mar",
    badge: "Dönüş Günü",
    emoji: "🌅",
    title: "Brunch, kıyı ve uçuş",
    time: "16:30 uçuş",
    drive: "Esentepe → Ercan ≈ 40 dk",
    plan: [
      "TARO Garden Cafe'de sahil brunch'ı",
      "Kısa sahil yürüyüşü, son Esentepe anı",
      "Girne Limanı'nda hediyelik alışveriş",
      "Alagadi Kaplumbağa Plajı — vakit varsa kısa uğrak",
      "Otelden check-out (12:00'den önce)",
      "13:30'da Ercan Havalimanı'na hareket",
      "16:30 uçuş 👋"
    ],
    food: [
      { name: "TARO Garden Cafe ⭐", map: "https://www.google.com/maps/search/?api=1&query=TARO+Garden+Cafe+Esentepe+Cyprus" },
      { name: "Camelot Beach Bar", map: "https://www.google.com/maps/search/?api=1&query=Camelot+Beach+Kyrenia+Cyprus" }
    ],
    places: [
      { name: "Alagadi Kaplumbağa Plajı 🐢", map: "https://www.google.com/maps/place/Alagadi+Beach/@35.3680,33.3940,15z" },
      { name: "Kyrenia Harbour", map: "https://www.google.com/maps/place/Kyrenia+Harbour/@35.3403,33.3175,17z" }
    ],
    shopping: [
      { name: "Girne Liman Dükkanları", map: "https://www.google.com/maps/place/Kyrenia+Harbour/@35.3403,33.3175,17z" },
      { name: "Arasta Çarşısı (Lefkoşa)", map: "https://www.google.com/maps/search/?api=1&query=Arasta+Bazaar+Nicosia+Cyprus" }
    ],
    notes: "Dönüş günü tempo düşür. TARO'da sakin bir brunch, kısa gezinti yeterli.",
    tip: "Havalimanına uluslararası uçuş için en az 2 saat önce git.",
    accent: "#10b981"
  }
];

const mapStops = [
  { name: "Ercan Havalimanı", map: "https://www.google.com/maps/place/Ercan+Airport/@35.1547,33.4952,14z", leg: "Başlangıç" },
  { name: "Esentepe Oteli", map: "https://www.google.com/maps/search/?api=1&query=Esentepe+Cyprus", leg: "≈ 40 dk" },
  { name: "Girne Limanı", map: "https://www.google.com/maps/place/Kyrenia+Harbour/@35.3403,33.3175,17z", leg: "≈ 20 dk" },
  { name: "Bellapais Manastırı", map: "https://www.google.com/maps/place/Bellapais+Abbey/@35.3086,33.3530,17z", leg: "≈ 15 dk" },
  { name: "Lord's Palace Casino", map: "https://www.google.com/maps/search/?api=1&query=Lords+Palace+Hotel+Casino+Kyrenia", leg: "≈ 10 dk" },
  { name: "Gazimağusa / Maraş", map: "https://www.google.com/maps/place/Famagusta/@35.1264,33.9412,14z", leg: "≈ 1s 20 dk" },
  { name: "Alagadi Turtle Beach", map: "https://www.google.com/maps/place/Alagadi+Beach/@35.3680,33.3940,15z", leg: "≈ 1s 10 dk" }
];

const weather = [
  { label: "Gündüz", value: "17–19°C", icon: "☀️" },
  { label: "Gece", value: "11–13°C", icon: "🌙" },
  { label: "Deniz", value: "18°C", icon: "🌊" },
  { label: "Hava", value: "Güneşli, serin", icon: "⛅" }
];

const budget = [
  { item: "Kiralık araç (4 gün)", min: 80, max: 120, icon: "🚗" },
  { item: "Konaklama (3 gece)", min: 150, max: 300, icon: "🏨" },
  { item: "Yemek & içki", min: 120, max: 200, icon: "🍽️" },
  { item: "Casino bütçesi", min: 50, max: 200, icon: "🎰" },
  { item: "Müze & girişler", min: 15, max: 30, icon: "🎟️" },
  { item: "Alışveriş", min: 30, max: 100, icon: "🛍️" }
];

const essentials = [
  { icon: "🪪", text: "Casino için pasaport veya kimlik şart" },
  { icon: "👟", text: "Kapalı Maraş için rahat yürüyüş ayakkabısı" },
  { icon: "🅿️", text: "Girne merkezde park için sabırlı ol" },
  { icon: "⏱️", text: "Havalimanına uluslararası için 2 saat erken git" },
  { icon: "📅", text: "Akşam yemekleri için rezervasyon yap" },
  { icon: "💵", text: "Nakit TRY bulundur — kart her yerde geçmez" },
  { icon: "📶", text: "Türk operatörlerin roaming'i KKTC'de çalışır" },
  { icon: "🧥", text: "Mart ortası ~17°C, ince bir mont al" }
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function Countdown() {
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    function calc() {
      const now = new Date();
      const delta = TRIP_START - now;
      if (delta <= 0) return setDiff({ gone: true });
      const days = Math.floor(delta / 86400000);
      const hours = Math.floor((delta % 86400000) / 3600000);
      const mins = Math.floor((delta % 3600000) / 60000);
      setDiff({ days, hours, mins });
    }
    calc();
    const id = setInterval(calc, 30000);
    return () => clearInterval(id);
  }, []);

  if (!diff) return null;
  if (diff.gone) return <div className="countdown"><span className="cd-label">✈️ Uçuş zamanı!</span></div>;

  return (
    <div className="countdown">
      <span className="cd-label">Uçuşa kalan:</span>
      <span className="cd-unit"><strong>{diff.days}</strong><small>gün</small></span>
      <span className="cd-sep">:</span>
      <span className="cd-unit"><strong>{diff.hours}</strong><small>saat</small></span>
      <span className="cd-sep">:</span>
      <span className="cd-unit"><strong>{diff.mins}</strong><small>dk</small></span>
    </div>
  );
}

function LinkChip({ item, tone = "" }) {
  return (
    <a href={item.map} target="_blank" rel="noreferrer" className={`chip ${tone}`}>
      {item.name} <span className="chip-icon">↗</span>
    </a>
  );
}

function DayCard({ day }) {
  return (
    <div className="day-card card" style={{ "--accent": day.accent }}>
      <div className="day-header">
        <div>
          <span className="badge" style={{ background: day.accent }}>{day.badge}</span>
          <h2>{day.emoji} {day.date}</h2>
          <p className="muted">{day.title}</p>
        </div>
        <div className="day-meta">
          <div className="time-pill">{day.time}</div>
          {day.drive && <div className="drive-pill">🚗 {day.drive}</div>}
        </div>
      </div>

      <div className="day-grid">
        <div className="subcard">
          <h3>📋 Gün Planı</h3>
          <ul className="plan-list">
            {day.plan.map((item, i) => (
              <li key={i}>
                <span className="step" style={{ background: day.accent }}>{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="stack">
          {day.breakfast && (
            <div className="subcard">
              <h3>☀️ Kahvaltı Seçenekleri</h3>
              <div className="chip-wrap">
                {day.breakfast.map((p) => <LinkChip key={p.name} item={p} tone="chip-green" />)}
              </div>
            </div>
          )}

          <div className="subcard">
            <h3>🍽️ Yeme İçme</h3>
            <div className="chip-wrap">
              {day.food?.map((p) => <LinkChip key={p.name} item={p} />)}
            </div>
          </div>

          {day.places && (
            <div className="subcard">
              <h3>📍 Gezi Noktaları</h3>
              <div className="chip-wrap">
                {day.places.map((p) => <LinkChip key={p.name} item={p} tone="chip-blue" />)}
              </div>
            </div>
          )}

          {day.casino && (
            <div className="subcard">
              <h3>🎰 Casino Seçenekleri</h3>
              <div className="chip-wrap">
                {day.casino.map((p) => <LinkChip key={p.name} item={p} tone="chip-gold" />)}
              </div>
            </div>
          )}

          {day.shopping && (
            <div className="subcard">
              <h3>🛍️ Alışveriş</h3>
              <div className="chip-wrap">
                {day.shopping.map((p) => <LinkChip key={p.name} item={p} tone="chip-green" />)}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="day-footer">
        <div className="note-box">
          <strong>Not:</strong> {day.notes}
        </div>
        <div className="tip-box">
          💡 {day.tip}
        </div>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const totalMin = budget.reduce((s, b) => s + b.min, 0);
  const totalMax = budget.reduce((s, b) => s + b.max, 0);

  return (
    <div className="page">
      <div className="container">

        {/* HERO */}
        <section className="hero card">
          <div className="hero-top">
            <div className="hero-text-block">
              <p className="eyebrow">KKTC Gezi Dashboard</p>
              <h1>19–22 Mart KKTC Planı</h1>
              <p className="hero-sub">
                Esentepe merkezli, araçlı, kısa ama dolu rota.
                Tüm konumlar tıklanabilir — Google Maps direkt açılır.
              </p>
            </div>
            <div className="hero-right">
              <div className="flight-box">
                <div className="flight-label">✈️ Uçuş Aralığı</div>
                <div className="flight-time">19 Mart 23:00</div>
                <div className="flight-arrow">↓</div>
                <div className="flight-time">22 Mart 16:30</div>
              </div>
              <Countdown />
            </div>
          </div>

          <div className="highlight-grid">
            <div className="mini-card"><div className="mini-label">📍 Konaklama</div><div className="mini-value">Girne Esentepe, deniz kenarı</div></div>
            <div className="mini-card"><div className="mini-label">🚗 Ulaşım</div><div className="mini-value">Kiralık araç (Ercan'dan)</div></div>
            <div className="mini-card"><div className="mini-label">🎰 Mutlaka</div><div className="mini-value">Casino + Kapalı Maraş</div></div>
            <div className="mini-card"><div className="mini-label">🍽️ Yemek</div><div className="mini-value">Balık, Kıbrıs kebabı, brunch</div></div>
          </div>
        </section>

        {/* GÜN SEKMELERİ */}
        <div className="tab-bar">
          {tripDays.map((day) => (
            <button
              key={day.id}
              className={`tab-btn ${activeDay === day.id ? "tab-active" : ""}`}
              style={activeDay === day.id ? { "--tab-color": day.accent, borderColor: day.accent, color: day.accent } : {}}
              onClick={() => setActiveDay(day.id)}
            >
              <span className="tab-emoji">{day.emoji}</span>
              <span className="tab-date">{day.short}</span>
              <span className="tab-badge">{day.badge}</span>
            </button>
          ))}
        </div>

        {/* İÇERİK */}
        <div className="layout">
          <main className="main-column">
            <DayCard day={tripDays[activeDay]} />
          </main>

          <aside className="side-column">

            {/* ROTA */}
            <section className="card side-card">
              <h2>🗺️ Rota ve Sürüşler</h2>
              <div className="route-list">
                {mapStops.map((stop, i) => (
                  <a key={stop.name} href={stop.map} target="_blank" rel="noreferrer" className="route-item">
                    <div className="route-left">
                      <span className="route-index">{i + 1}</span>
                      <span className="route-name">{stop.name}</span>
                    </div>
                    <span className="route-leg">{stop.leg}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* HAVA DURUMU */}
            <section className="card side-card">
              <h2>🌤️ Mart Hava Durumu</h2>
              <p className="card-sub">KKTC Mart ortası tahmini</p>
              <div className="weather-grid">
                {weather.map((w) => (
                  <div key={w.label} className="weather-item">
                    <span className="weather-icon">{w.icon}</span>
                    <span className="weather-value">{w.value}</span>
                    <span className="weather-label">{w.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* BÜTÇE */}
            <section className="card side-card">
              <h2>💰 Tahmini Bütçe</h2>
              <p className="card-sub">Kişi başı yaklaşık maliyet (€)</p>
              <div className="budget-list">
                {budget.map((b) => (
                  <div key={b.item} className="budget-item">
                    <span className="budget-icon">{b.icon}</span>
                    <span className="budget-name">{b.item}</span>
                    <span className="budget-range">€{b.min}–{b.max}</span>
                  </div>
                ))}
              </div>
              <div className="budget-total">
                <span>Toplam Tahmini</span>
                <span className="budget-total-value">€{totalMin}–{totalMax}</span>
              </div>
            </section>

            {/* PRATİK NOTLAR */}
            <section className="card side-card">
              <h2>📌 Pratik Notlar</h2>
              <ul className="tips-list">
                {essentials.map((e) => (
                  <li key={e.text} className="tip-item">
                    <span className="tip-icon">{e.icon}</span>
                    <span>{e.text}</span>
                  </li>
                ))}
              </ul>
            </section>

          </aside>
        </div>

      </div>
    </div>
  );
}
