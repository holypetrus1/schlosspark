/*
  ============================================================
  FREUNDE DES SCHLOSSPARKS PANKOW – ZENTRALE INHALTSDATEI
  ============================================================

  Diese EINE Datei enthält alles, was regelmäßig gepflegt wird.
  Für eine Aktualisierung einfach diese Datei bearbeiten und im
  Repository wieder als "content.js" hochladen/ersetzen.

  Am häufigsten ändern sich die Bereiche ganz oben:
  1. NEUIGKEITEN
  2. TERMINE
  3. MITMACHEN / LINKS

  Weiter unten stehen die eher statischen Inhalte:
  Leitbild, Schwerpunkte, Umfrageergebnisse, Kontakt/Impressum.

  Wichtig beim Bearbeiten:
  - Texte immer zwischen Anführungszeichen stehen lassen.
  - Einträge werden mit Kommas getrennt.
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
      text: "Unsere Umfrage hat inzwischen 556 Rückmeldungen. Die Ergebnisse zeigen sehr deutlich, welche Verbesserungen den Menschen im Schlosspark besonders wichtig sind."
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

  // Sobald das separate Formular für den Verteiler existiert,
  // einfach den Link zwischen die Anführungszeichen eintragen.
  mailingListUrl: "",

  // ==========================================================
  // 4. LEITBILD UND GRUNDTEXTE
  // ==========================================================
  hero: {
    eyebrow: "Bürgerinitiative in Pankow",
    title: "Für einen lebendigen, gepflegten und zukunftsfähigen Schlosspark.",
    lead: "Wir engagieren uns für den Erhalt und die zukunftsfähige Entwicklung des Schlossparks als grünes Herz von Pankow.",
    mission: "Unser Ziel ist ein lebendiger, vielfältig nutzbarer und naturnaher Park für alle – generationsübergreifend, inklusiv und ökologisch nachhaltig."
  },

  about: {
    title: "Ein grünes Herz für Pankow – mit mehr Pflege, Schutz und Fürsprache.",
    paragraphs: [
      "Der Schlosspark ist für viele Menschen Alltagsweg, Treffpunkt, Aufenthaltsort und Naturraum zugleich. Er wird zu Fuß, mit dem Rad, mit Kindern und zum Sport genutzt – und soll als lebendiger, vielfältig nutzbarer und naturnaher Park erhalten bleiben.",
      "Gleichzeitig gibt es sichtbare Mängel: Wege, Grünflächen, Bänke, Mülleimer und Spielplätze brauchen mehr Aufmerksamkeit. Wir machen diese Themen öffentlich sichtbar und bringen Nachbarschaft, Politik und Verwaltung zusammen."
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
    responseCount: 556,
    standLabel: "Aktueller Stand der ausgewerteten Antworten",
    intro: "Die Umfrage zeichnet ein klares Bild: Viele Menschen nutzen den Schlosspark regelmäßig – und benennen sehr konkrete Verbesserungen.",

    highlights: [
      {
        value: "88,6 %",
        label: "nennen die Nutzung zu Fuß"
      },
      {
        value: "85,6 %",
        label: "halten Nachpflanzungen von Bäumen und Sträuchern für nötig"
      },
      {
        value: "61,7 %",
        label: "sehen Sanierungs- und Instandhaltungsbedarf bei den Wegen"
      }
    ],

    prioritiesTitle: "Was am häufigsten gewünscht wird",
    prioritiesNote: "Mehrfachauswahl – bis zu drei Antworten waren möglich.",
    priorities: [
      { label: "Öffentliche Toiletten", percent: 56.3 },
      { label: "Parkbänke reparieren oder aufstellen", percent: 50.7 },
      { label: "Fuß- und Radverkehr besser ordnen", percent: 45.9 },
      { label: "Mehr oder größere Mülleimer", percent: 45.3 },
      { label: "Spielplätze verbessern", percent: 33.5 }
    ],

    context: [
      "52,2 % stimmen eher oder voll zu, dass sich die Gesamterscheinung des Parks in den letzten Jahren verschlechtert hat.",
      "73,0 % stimmen eher oder voll zu, dass Grünflächen besser geschützt und wiederhergestellt werden sollten."
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
  flyer: {
    front: "assets/flyer-vorne.jpg",
    back: "assets/flyer-hinten.jpg",
    foxLogo: "assets/fuchs.jpg"
  }
};
