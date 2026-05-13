interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Biography",
    paragraphs: [
      "Dora (real name — Darya Sergeyevna Shikhanova) is a Russian singer and songwriter performing teenage pop-rock and cute rock. She was born on November 30, 1999 in Saratov. Music filled her home from childhood: her parents gave her a karaoke console and then a guitar. Despite her passion for singing, she was never sent to music school and had to master guitar and vocals entirely on her own.",
      "Dora took her first steps in music at 15, recording covers of The Retuses. At that time she used the stage name Mental Affection. Realizing it was too hard to remember, she switched to the simple and catchy Dora — the nickname her mother had called her since childhood.",
      "The turning point came after she met rapper Vladimir Galat (the group «Friendzone»). Together they recorded the song «Doradurа», which went viral and brought Dora nationwide fame in Russia.",
      "In March 2020, Dora performed «Doradurа» on the Evening Urgant show on Channel One, which cemented her star status once and for all.",
      "In 2021, Dora was nominated for Forbes Russia's «30 Most Promising Russians Under 30» list in the Music category. That same year, according to Spotify, Dora surpassed Grammy-winning American artist Billie Eilish in the number of streams in Russia.",
    ],
  },
  de: {
    heading: "Biografie",
    paragraphs: [
      "Dora (bürgerlicher Name — Darja Sergejewna Schichanowa) ist eine russische Sängerin und Songwriterin, die Teenager-Pop-Rock und Cute Rock performt. Sie wurde am 30. November 1999 in Saratow geboren. Seit ihrer Kindheit war Musik ein fester Bestandteil ihres Lebens: Ihre Eltern schenkten ihr zunächst eine Karaoke-Anlage und später eine Gitarre. Obwohl sie eine Leidenschaft für Gesang hatte, besuchte sie keine Musikschule und brachte sich Gitarre und Gesang selbst bei.",
      "Ihre ersten Schritte in der Musik machte Dora mit 15 Jahren, als sie Coverversionen von The Retuses aufnahm. Damals nutzte sie den Künstlernamen Mental Affection. Da dieser Name schwer zu merken war, wechselte sie zu dem einfachen und prägnanten Dora — dem Spitznamen, den ihre Mutter ihr seit Kindheit gegeben hatte.",
      "Den Wendepunkt brachte die Begegnung mit dem Rapper Wladimir Galat (Gruppe «Friendzone»). Gemeinsam nahmen sie den Song «Doradura» auf, der viral ging und Dora russlandweite Bekanntheit brachte.",
      "Im März 2020 trat Dora mit «Doradura» in der Sendung Evening Urgant auf Kanal Eins auf — das festigte ihren Ruhm endgültig.",
      "2021 wurde Dora für Forbes Russlands Liste «30 vielversprechendste Russen unter 30» in der Kategorie Musik nominiert. Im selben Jahr übertraf Dora laut Spotify die Grammy-Preisträgerin Billie Eilish bei der Anzahl der Streams in Russland.",
    ],
  },
  ru: {
    heading: "Биография",
    paragraphs: [
      "Дора (настоящее имя — Дарья Сергеевна Шиханова) — российская певица и автор песен, исполняющая подростковый поп-рок и кьют-рок. Родилась 30 ноября 1999 года в Саратове. С детства в её доме звучала музыка: родители подарили ей караоке-приставку, а затем и гитару. Несмотря на интерес к пению, в музыкальную школу Дарью не отдали, и осваивать гитару и вокал ей пришлось самостоятельно.",
      "Первые шаги в музыке Дора начала в 15 лет с записи каверов на песни группы The Retuses. В то время она использовала псевдоним Mental Affection. Осознав, что псевдоним слишком сложен для запоминания, Дарья решила сменить его на простое и лаконичное Дора — так её с детства называла мама.",
      "Переломный момент наступил после знакомства с рэпером Владимиром Галатом (группа «Френдзона»). Вместе они записали песню «Дорадура», которая стала вирусным хитом и принесла Доре всероссийскую известность.",
      "В марте 2020 года Дора исполнила «Дорадуру» в программе «Вечерний Ургант» на Первом канале, что окончательно закрепило её статус звезды.",
      "В 2021 году Дора была номинантом в рейтинг «30 самых перспективных россиян до 30 лет» по версии Forbes в категории «Музыка». По версии Spotify, в том же году Дора обошла обладательницу премии «Грэмми» Билли Айлиш по количеству прослушиваний в России.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}