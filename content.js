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
      text: "Unsere Umfrage hat inzwischen 556 Rückmeldungen. Die Ergebnisse zeigen deutlich, welche Verbesserungen den Menschen im Schlosspark besonders wichtig sind."
    },
    {
      date: "2026-06-14",
      text: "Beim Fest der Gartenarbeitsschule haben wir Flyer verteilt und neue Kontakte für die Initiative geknüpft."
    },
    {
      date: "2026-06-05",
      text: "Beim Parkspaziergang haben wir uns zur Geschichte des Parks, zu aktuellen Problemen und zu Ideen für Verbesserungen ausgetauscht."
    }
  ],

  // ==========================================================
  // 2. TERMINE
  // ==========================================================
  nextWalk: {
    date: "2026-09-23",
    dateLong: "23. September 2026",
    description: "Parkspaziergang der Freunde des Schlossparks Pankow"
  },

  // ==========================================================
  // 3. TITEL UND GRUNDTEXTE
  // ==========================================================
  hero: {
    eyebrow: "Bürgerinitiative in Pankow",
    title: "Freunde des Schlossparks Pankow",
    subtitle: "für einen lebendigen und gepflegten Schlosspark"
  },

  about: {
    title: "Worum es geht",
    paragraphs: [
      "Der Schlosspark ist für viele Menschen Alltagsweg, Treffpunkt, Spielort und Naturraum. Damit das so bleibt, braucht er mehr Aufmerksamkeit und eine verlässliche Pflege.",
      "Wir setzen uns für den Schutz und die Pflege der Grünflächen, bessere Wege, mehr Aufenthaltsqualität und ein gutes Miteinander im Park ein. Dafür bringen wir Menschen aus der Nachbarschaft zusammen und suchen den Austausch mit Bezirk und Politik."
    ]
  },

  focusTopics: [
    {
      emoji: "🌳",
      title: "Natur & Grünflächen",
      text: "Bäume und Sträucher nachpflanzen, Grünflächen besser schützen und den Park klimaresilient weiterentwickeln."
    },
    {
      emoji: "🛤️",
      title: "Wege & Sicherheit",
      text: "Wege instand halten und Konflikte zwischen Fuß- und Radverkehr entschärfen."
    },
    {
      emoji: "🪑",
      title: "Aufenthaltsqualität",
      text: "Bänke, öffentliche Toiletten, Mülleimer und attraktive Spielplätze gehören zu einem gut nutzbaren Park."
    },
    {
      emoji: "🤝",
      title: "Mitgestaltung",
      text: "Interessen zusammenbringen, Themen sichtbar machen und gemeinsam mit dem Bezirk an Lösungen arbeiten."
    }
  ],

  // ==========================================================
  // 4. MITMACHEN
  // ==========================================================
  participate: {
    survey: {
      title: "An der Umfrage teilnehmen",
      text: "Sag uns, wie du den Schlosspark nutzt und was sich verbessern sollte. In der Umfrage kannst du auf Wunsch auch deine E-Mail-Adresse hinterlassen.",
      button: "Zur Umfrage"
    },
    mailingList: {
      title: "Nur auf den Verteiler",
      text: "Du möchtest über Spaziergänge, Treffen und Neuigkeiten informiert bleiben? Dann kannst du dich separat für unseren Verteiler eintragen.",
      buttonActive: "Zum Verteiler",
      buttonInactive: "Verteiler-Link folgt"
    }
  },

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
        value: "88,6 %",
        label: "nutzen den Park zu Fuß"
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
  // 6. LINKS
  // ==========================================================
  links: {
    surveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdcajez0mMyslaINtt_U32HOMSKjIGqz2ijeOv9b9wt3sQTcw/viewform",

    // Sobald das separate Formular für den Verteiler existiert,
    // den Link einfach zwischen die Anführungszeichen eintragen.
    mailingListUrl: ""
  },

  // ==========================================================
  // 7. IMPRESSUM UND KONTAKT
  // ==========================================================
  contact: {
    name: "Anika Meenken",
    email: "schlossparkfreunde@gmail.com",
    phone: "030/48825333",
    addressLine1: "Blankenburger Str. 14",
    addressLine2: "13156 Berlin"
  }
};
