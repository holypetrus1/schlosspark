/*
  ZENTRALE PFLEGEDATEI
  -------------------
  Die wichtigsten wechselnden Angaben der Website stehen hier.
  Text zwischen Anführungszeichen darf einfach geändert werden.
  Danach Datei speichern und bei GitHub committen.
*/
window.SCHLOSSPARK = {
  surveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdcajez0mMyslaINtt_U32HOMSKjIGqz2ijeOv9b9wt3sQTcw/viewform",

  // Sobald die zweite Google-Umfrage existiert, URL hier eintragen.
  // Bis dahin bleibt der Button sichtbar, aber deaktiviert.
  mailingListUrl: "",

  nextWalk: {
    dateLong: "23. September 2026",
    dateShort: "23. September",
    description: "Gemeinsam hinschauen, Ideen sammeln und Verbesserungen anstoßen."
  },

  contact: {
    name: "Anika",
    email: "schlossparkfreunde@gmail.com",
    phone: "030/48825333",
    addressLine1: "Blankenburger Str. 14",
    addressLine2: "13156 Berlin"
  },

  // Flyer/Fuchs später aktivieren:
  // 1. flyer-vorne.jpg, flyer-hinten.jpg und fuchs-logo.png in /assets ablegen
  // 2. enabled und useFoxLogo auf true setzen
  flyer: {
    enabled: false,
    useFoxLogo: false,
    front: "assets/flyer-vorne.jpg",
    back: "assets/flyer-hinten.jpg",
    foxLogo: "assets/fuchs-logo.png"
  }
};
