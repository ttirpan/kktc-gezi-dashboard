import "./index.css";

const tripDays = [
  {
    date: "19 Mart Çarşamba",
    badge: "Varış Gecesi",
    title: "Esentepe'ye geçiş ve hafif başlangıç",
    time: "23:00 varış sonrası",
    plan: [
      "Havalimanından kiralık aracı alıp Esentepe'deki otele geç",
      "Check-in sonrası kısa sahil yürüyüşü veya otelde dinlenme",
      "Geç saate kalmadan hafif bir atıştırmalık / içki"
    ],
    food: [
      { name: "The Coconut", map: "https://www.google.com/maps/search/?api=1&query=The+Coconut+Esentepe+Cyprus" },
      { name: "Korineum Golf Club Restaurant", map: "https://www.google.com/maps/search/?api=1&query=Korineum+Golf+Club+Restaurant+Esentepe+Cyprus" }
    ],
    notes: "İlk gece boş tutuldu. Asıl tempo ertesi gün başlıyor."
  },
  {
    date: "20 Mart Perşembe",
    badge: "Girne + Casino",
    title: "Liman, tarih, manzara ve akşam casino",
    time: "Tam gün",
    plan: [
      "Sabah Girne Limanı'na geç",
      "Girne Kalesi ve Batık Gemi Müzesi gez",
      "Öğlen liman çevresinde yemek",
      "Öğleden sonra Bellapais Manastırı'na çık",
      "Akşam şık bir yemek sonrası casino"
    ],
    food: [
      { name: "Grida Balık", map: "https://www.google.com/maps/search/?api=1&query=Grida+Balik+Kyrenia" },
      { name: "Niazi's Restaurant", map: "https://www.google.com/maps/search/?api=1&query=Niazi%27s+Restaurant+Kyrenia" },
      { name: "Kybele Restaurant", map: "https://www.google.com/maps/search/?api=1&query=Kybele+Restaurant+Kyrenia+Harbour" }
    ],
    casino: [
      { name: "Lord's Palace", map: "https://www.google.com/maps/search/?api=1&query=Lord%27s+Palace+Hotel+Spa+Casino+Kyrenia" },
      { name: "Merit Royal", map: "https://www.google.com/maps/search/?api=1&query=Merit+Royal+Hotel+Casino+Spa+Kyrenia" },
      { name: "Les Ambassadeurs", map: "https://www.google.com/maps/search/?api=1&query=Les+Ambassadeurs+Hotel+Casino+Marina+Kyrenia" }
    ],
    notes: "Casino tercihi: Lord's Palace. İlk deneyim için mantıklı seçenek."
  },
  {
    date: "21 Mart Cuma",
    badge: "Kapalı Maraş",
    title: "Gazimağusa ve Kapalı Maraş günü",
    time: "Tam gün",
    plan: [
      "Sabah erken Esentepe/Girne tarafından Gazimağusa'ya hareket",
      "Kapalı Maraş yürüyüşü ve sahil tarafı",
      "Lala Mustafa Paşa Camii ve sur içi gezisi",
      "Vakit kalırsa Othello Kalesi",
      "Akşam üstü Girne tarafına dönüş"
    ],
    food: [
      { name: "Petek Pastanesi", map: "https://www.google.com/maps/search/?api=1&query=Petek+Pastanesi+Famagusta" },
      { name: "Ginkgo Restaurant", map: "https://www.google.com/maps/search/?api=1&query=Ginkgo+Restaurant+Famagusta" }
    ],
    places: [
      { name: "Kapalı Maraş", map: "https://www.google.com/maps/search/?api=1&query=Varosha+Famagusta" },
      { name: "Lala Mustafa Paşa Camii", map: "https://www.google.com/maps/search/?api=1&query=Lala+Mustafa+Pasha+Mosque+Famagusta" },
      { name: "Othello Kalesi", map: "https://www.google.com/maps/search/?api=1&query=Othello+Castle+Famagusta" }
    ],
    notes: "Bu günün yıldızı Kapalı Maraş. Fotoğraf için en güçlü gün."
  },
  {
    date: "22 Mart Cumartesi",
    badge: "Dönüş Günü",
    title: "Sakin sabah, kahvaltı ve alışveriş",
    time: "16:30 dönüş öncesi",
    plan: [
      "Sabah deniz kenarında yavaş kahvaltı",
      "Girne tarafında son kısa gezinti",
      "Hediyelik ve lokal ürün alışverişi",
      "Havalimanına zamanlı geçiş"
    ],
    food: [
      { name: "TARO Garden Cafe", map: "https://www.google.com/maps/search/?api=1&query=TARO+Garden+Cafe+Esentepe+Cyprus" }
    ],
    shopping: [
      { name: "Kyrenia Harbour shops", map: "https://www.google.com/maps/search/?api=1&query=Kyrenia+Harbour+Cyprus" },
      { name: "Arasta Çarşısı (vakit kalırsa Lefkoşa)", map: "https://www.google.com/maps/search/?api=1&query=Arasta+Carsisi+Nicosia" }
    ],
    notes: "Dönüş günü fazla sıkıştırma yapma."
  }
];

const highlights = [
  { label: "Konaklama", value: "Girne Esentepe, deniz kenarı" },
  { label: "Ulaşım", value: "Kiralık araç hazır" },
  { label: "Mutlaka", value: "1 casino + Kapalı Maraş" },
  { label: "Yemek Odağı", value: "Balık, Kıbrıs kebabı, brunch" }
];

const essentials = [
  "Casino için pasaport/kimlik yanında olsun",
  "Kapalı Maraş günü rahat ayakkabı giy",
  "Girne merkezde park için biraz pay bırak",
  "Dönüş günü havalimanı sürüş süresine tampon ekle",
  "Akşam yemekleri için rezervasyon iyi fikir"
];

const mapStops = [
  { name: "Esentepe", map: "https://www.google.com/maps/search/?api=1&query=Esentepe+Cyprus" },
  { name: "Girne Limanı", map: "https://www.google.com/maps/search/?api=1&query=Kyrenia+Harbour+Cyprus" },
  { name: "Bellapais", map: "https://www.google.com/maps/search/?api=1&query=Bellapais+Abbey+Cyprus" },
  { name: "Lord's Palace Casino", map: "https://www.google.com/maps/search/?api=1&query=Lord%27s+Palace+Hotel+Spa+Casino+Kyrenia" },
  { name: "Kapalı Maraş", map: "https://www.google.com/maps/search/?api=1&query=Varosha+Famagusta" },
  { name: "Gazimağusa", map: "https://www.google.com/maps/search/?api=1&query=Famagusta+Cyprus" },
  { name: "Lefkoşa Arasta (opsiyonel)", map: "https://www.google.com/maps/search/?api=1&query=Arasta+Carsisi+Nicosia" }
];

function LinkChip({ item, tone = "" }) {
  return (
    <a href={item.map} target="_blank" rel="noreferrer" className={`chip ${tone}`}>
      {item.name}
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero card">
          <div className="hero-top">
            <div>
              <p className="eyebrow">KKTC Gezi Dashboard</p>
              <h1>19–22 Mart KKTC Planı</h1>
              <p className="hero-text">
                Esentepe merkezli, araçlı, kısa ama dolu bir rota. Konumlar tıklanabilir;
                Google Maps direkt açılır. Ufak dijital pusula numarası.
              </p>
            </div>
            <div className="flight-box">
              <div className="flight-label">Uçuş Aralığı</div>
              <div className="flight-time">19 Mart 23:00 → 22 Mart 16:30</div>
            </div>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <div key={item.label} className="mini-card">
                <div className="mini-label">{item.label}</div>
                <div className="mini-value">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="layout">
          <main className="main-column">
            {tripDays.map((day) => (
              <section key={day.date} className="card day-card">
                <div className="day-header">
                  <div>
                    <span className="badge">{day.badge}</span>
                    <h2>{day.date}</h2>
                    <p className="muted">{day.title}</p>
                  </div>
                  <div className="time-pill">{day.time}</div>
                </div>

                <div className="day-grid">
                  <div className="subcard">
                    <h3>Gün Planı</h3>
                    <ul className="plan-list">
                      {day.plan.map((item, i) => (
                        <li key={i}>
                          <span className="step">{i + 1}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="stack">
                    <div className="subcard">
                      <h3>Yeme İçme</h3>
                      <div className="chip-wrap">
                        {day.food?.map((place) => (
                          <LinkChip key={place.name} item={place} />
                        ))}
                      </div>
                    </div>

                    {day.casino && (
                      <div className="subcard">
                        <h3>Casino Seçenekleri</h3>
                        <div className="chip-wrap">
                          {day.casino.map((place) => (
                            <LinkChip key={place.name} item={place} tone="chip-gold" />
                          ))}
                        </div>
                      </div>
                    )}

                    {day.places && (
                      <div className="subcard">
                        <h3>Gezi Noktaları</h3>
                        <div className="chip-wrap">
                          {day.places.map((place) => (
                            <LinkChip key={place.name} item={place} tone="chip-blue" />
                          ))}
                        </div>
                      </div>
                    )}

                    {day.shopping && (
                      <div className="subcard">
                        <h3>Alışveriş</h3>
                        <div className="chip-wrap">
                          {day.shopping.map((place) => (
                            <LinkChip key={place.name} item={place} tone="chip-green" />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="note-box">
                  <strong>Not:</strong> {day.notes}
                </div>
              </section>
            ))}
          </main>

          <aside className="side-column">
            <section className="card">
              <h2>Rota Özeti</h2>
              <div className="route-list">
                {mapStops.map((stop, index) => (
                  <a
                    key={stop.name}
                    href={stop.map}
                    target="_blank"
                    rel="noreferrer"
                    className="route-item route-link"
                  >
                    <span className="route-index">{index + 1}</span>
                    <span>{stop.name}</span>
                  </a>
                ))}
              </div>
            </section>

            <section className="card">
              <h2>Bu Gezinin En İyi 5 Vuruşu</h2>
              <div className="best-list">
                <div className="best-item"><strong>1.</strong> Lord's Palace'ta casino gecesi</div>
                <div className="best-item"><strong>2.</strong> Kapalı Maraş yürüyüşü</div>
                <div className="best-item"><strong>3.</strong> Bellapais manzarası</div>
                <div className="best-item"><strong>4.</strong> Girne Limanı + kale kombosu</div>
                <div className="best-item"><strong>5.</strong> Grida / Niazi's yemek hattı</div>
              </div>
            </section>

            <section className="card">
              <h2>Pratik Notlar</h2>
              <ul className="tips-list">
                {essentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
