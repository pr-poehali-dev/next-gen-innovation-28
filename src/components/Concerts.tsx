interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Upcoming Concerts",
    learnMore: "Learn More",
  },
  de: {
    heading: "Kommende Konzerte",
    learnMore: "Mehr erfahren",
  },
  ru: {
    heading: "Предстоящие концерты",
    learnMore: "Подробнее",
  },
}

const concerts = {
  en: [
    {
      date: "17 April 2026",
      time: "",
      title: "Dora — Concert",
      venue: "Signal",
      location: "Samara",
    },
    {
      date: "25 April 2026",
      time: "",
      title: "Dora — Concert",
      venue: "Circus Concert Hall",
      location: "Krasnoyarsk",
    },
    {
      date: "26 April 2026",
      time: "",
      title: "Dora — Concert",
      venue: "Concert Hall (ex. Dikaya Loshad)",
      location: "Irkutsk",
    },
  ],
  de: [
    {
      date: "17. April 2026",
      time: "",
      title: "Dora — Konzert",
      venue: "Signal",
      location: "Samara",
    },
    {
      date: "25. April 2026",
      time: "",
      title: "Dora — Konzert",
      venue: "Circus Concert Hall",
      location: "Krasnojarsk",
    },
    {
      date: "26. April 2026",
      time: "",
      title: "Dora — Konzert",
      venue: "Konzerthalle (ex. Dikaya Loshad)",
      location: "Irkutsk",
    },
  ],
  ru: [
    {
      date: "17 апреля 2026",
      time: "",
      title: "Дора — Концерт",
      venue: "«Сигнал»",
      location: "Самара",
    },
    {
      date: "25 апреля 2026",
      time: "",
      title: "Дора — Концерт",
      venue: "Circus Concert Hall",
      location: "Красноярск",
    },
    {
      date: "26 апреля 2026",
      time: "",
      title: "Дора — Концерт",
      venue: "Концерт-холл (ex. «Дикая лошадь»)",
      location: "Иркутск",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}