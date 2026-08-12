/*
  ============================================================
  FREUNDE DES SCHLOSSPARKS PANKOW – ZENTRALE INHALTSDATEI
  ============================================================

  Diese EINE Datei enthält die veränderbaren Inhalte der Website.
  Sie kann gemeinsam gepflegt und anschließend als "content.js"
  im GitHub-Repository ersetzt werden.

  OBEN stehen die Inhalte, die sich häufiger ändern:
  1. NEUIGKEITEN
  2. TERMINE

  WEITER UNTEN stehen die eher statischen Inhalte:
  Grundtexte, Mitmachen, Umfrage, Links und Impressum/Kontakt.

  Wichtig beim Bearbeiten:
  - Texte zwischen Anführungszeichen stehen lassen.
  - Einträge mit Kommas trennen.
  - Die äußeren geschweiften Klammern nicht entfernen.
*/

window.SCHLOSSPARK_CONTENT = {

  // ==========================================================
  // 1. NEUIGKEITEN – NEUE EINTRÄGE IMMER GANZ OBEN EINFÜGEN
  // ==========================================================
  news: [
    {
      date: "2026-09-23",
      text: "Nächster Parkspaziergang: Am 23. September schauen wir gemeinsam auf aktuelle Themen im Schlosspark und kommen ins Gespräch."
    },
    {
      date: "2026-08-12",
      text: "Unsere Umfrage hat inzwischen 556 Rückmeldungen. Besonders deutlich wird der Wunsch nach Nachpflanzungen, besser geschützten Grünflächen und verlässlicher Wegepflege."
    },
    {
      date: "2026-06-14",
      text: "Beim Fest der Gartenarbeitsschule wurden Flyer verteilt und neue Kontakte für die Initiative geknüpft."
    },
    {
      date: "2026-06-05",
      text: "Beim Parkspaziergang gab es Hintergrundinfos zur Entstehung des Parks, Ideensammlung und Mitmachmöglichkeiten."
    }
  ],

  // ==========================================================
  // 2. TERMINE
  // ==========================================================
  nextWalk: {
    date: "2026-09-23",
    dateLong: "23. September 2026",
    dateShort: "23. September",
    description: "Gemeinsam hinschauen, Ideen sammeln und weitere Menschen für den Schlosspark gewinnen."
  },

  // ==========================================================
  // 3. MITMACHEN / LINKS
  // ==========================================================
  surveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdcajez0mMyslaINtt_U32HOMSKjIGqz2ijeOv9b9wt3sQTcw/viewform",
  mailingListUrl: "",

  join: {
    surveyTitle: "An der Umfrage teilnehmen",
    surveyText: "Teile uns mit, wie du den Schlosspark nutzt und was sich verbessern sollte. In der Umfrage kannst du auf Wunsch auch deine E-Mail-Adresse hinterlassen.",
    surveyButton: "Zur Umfrage",
    mailingTitle: "Nur auf den Verteiler",
    mailingText: "Du möchtest keine Umfrage ausfüllen, aber über Spaziergänge, Treffen und Neuigkeiten informiert bleiben? Dann trage dich separat für unseren Verteiler ein.",
    mailingButton: "Verteiler-Link folgt",
    mailingButtonActive: "Zum Verteiler"
  },

  // ==========================================================
  // 4. GRUNDTEXTE
  // ==========================================================
  hero: {
    eyebrow: "Bürgerinitiative in Pankow",
    title: "Freunde des Schlossparks Pankow",
    subtitle: "für einen lebendigen und gepflegten Schlosspark"
  },

  about: {
    title: "Worum es geht",
    paragraphs: [
      "Wir sind eine Bürgerinitiative und setzen uns für den Schlosspark in Pankow ein – als grünen Ort für Erholung, Begegnung und Natur mitten im Kiez.",
      "Viele Menschen nutzen den Park täglich. Gleichzeitig gibt es sichtbare Mängel bei Bäumen, Grünflächen, Wegen und Ausstattung. Wir möchten darauf aufmerksam machen, Menschen zusammenbringen und Verbesserungen anstoßen."
    ]
  },

  focusTopics: [
    {
      emoji: "🌳",
      title: "Naturschutz & Klimaresilienz",
      text: "Mehr Bäume und Blühwiesen sowie Umweltbildungsprojekte mit Kindern und Jugendlichen."
    },
    {
      emoji: "🌿",
      title: "Grünflächen-Pflege",
      text: "Wiesen und denkmalgeschützte Grünanlagen besser schützen und Trampelpfade reduzieren."
    },
    {
      emoji: "🛤️",
      title: "Aufenthaltsqualität & Sicherheit",
      text: "Wege verbessern, Konflikte zwischen Fuß- und Radverkehr entschärfen und den Park für alle sicherer machen."
    },
    {
      emoji: "🤝",
      title: "Transparenz & Mitgestaltung",
      text: "Mehr Menschen für den Park begeistern, Interessengruppen zusammenbringen und gemeinsam mit dem Bezirk an Lösungen arbeiten."
    }
  ],

  // ==========================================================
  // 5. UMFRAGE – STAND 12.08.2026 / 556 RÜCKMELDUNGEN
  // ==========================================================
  survey: {
    title: "Umfrage",
    subtitle: "Wir haben euch gefragt, was euch wichtig ist. Und ihr habt abgestimmt.",
    responseCount: 556,
    standLabel: "Ausgewertete Antworten",

    highlights: [
      {
        value: "86 %",
        label: "halten Nachpflanzungen von Bäumen und Sträuchern für nötig"
      },
      {
        value: "73 %",
        label: "wollen Grünflächen besser schützen und wiederherstellen"
      },
      {
        value: "62 %",
        label: "sehen deutlichen Bedarf bei Wegen und Instandhaltung"
      }
    ],

    prioritiesTitle: "Hier wird besonders Handlungsbedarf gesehen",
    prioritiesNote: "Anteil der Teilnehmenden mit eher oder voller Zustimmung.",
    priorities: [
      { label: "Nachpflanzung von Bäumen und Sträuchern", percent: 86 },
      { label: "Grünflächen besser schützen und wiederherstellen", percent: 73 },
      { label: "Wege sanieren und instand halten", percent: 62 }
    ],

    context: [
      "Fast 89 % nutzen den Park zu Fuß.",
      "Konkrete Verbesserungswünsche: öffentliche Toiletten (56 %), Parkbänke reparieren oder ergänzen (51 %), mehr oder größere Mülleimer (45 %)."
    ]
  },

  // ==========================================================
  // 6. KONTAKT UND IMPRESSUM
  // ==========================================================
  contact: {
    name: "Anika Meenken",
    email: "schlossparkfreunde@gmail.com",
    phone: "030/48825333",
    addressLine1: "Blankenburger Str. 14",
    addressLine2: "13156 Berlin"
  },

  // ==========================================================
  // 7. GRAFIKEN – NORMALERWEISE NICHT ÄNDERN
  // ==========================================================
  visuals: {
    foxLogo: "assets/fuchs-aquarell.jpg",
    parkIllustration: "assets/park-illustration.svg"
  }
};
