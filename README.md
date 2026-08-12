# Freunde des Schlossparks Pankow

Statische Website ohne Build-Prozess. Sie besteht nur aus HTML, CSS und JavaScript und läuft praktisch auf jedem Webspace sowie auf GitHub Pages.

## Die wichtigsten Dateien

- `index.html` – Seitenstruktur und längere Texte
- `content.js` – **zentrale Pflegedatei** für wechselnde Angaben (Links, Termin, Kontakt, Flyer)
- `style.css` – Design
- `script.js` – mobiles Menü und Einsetzen der Angaben aus `content.js`
- `assets/` – Bilder und Logos

## Häufige Änderungen – ohne Technikkenntnisse

Für Termine, Links, Telefonnummer, E-Mail und Flyer reicht in der Regel **nur `content.js`**.

Auf GitHub:
1. `content.js` öffnen.
2. Stift-Symbol „Edit this file“ anklicken.
3. Gewünschten Text zwischen den Anführungszeichen ändern.
4. „Commit changes“ anklicken.

Wenn GitHub Pages genutzt wird, ist die Änderung danach automatisch online.

## Zweiten Verteiler-Link eintragen

In `content.js` diese Zeile ändern:

```js
mailingListUrl: "",
```

zum Beispiel in:

```js
mailingListUrl: "https://docs.google.com/forms/...",
```

Der bisher deaktivierte Button wird dadurch automatisch aktiv und heißt dann „Zum Verteiler“.

## Flyer und Fuchs-Logo ergänzen

Wenn die Dateien vorliegen:

1. Vorderseite als `assets/flyer-vorne.jpg` hochladen.
2. Rückseite als `assets/flyer-hinten.jpg` hochladen.
3. Fuchs-Logo als `assets/fuchs-logo.png` hochladen.
4. In `content.js` ändern:

```js
flyer: {
  enabled: true,
  useFoxLogo: true,
```

Dann erscheinen beide Flyer-Seiten automatisch auf der Website und das Fuchs-Logo ersetzt das vorläufige Blatt-Logo im Kopfbereich.

## Lokal testen

`index.html` kann direkt im Browser geöffnet werden. Alternativ:

```bash
python3 -m http.server 8000
```

und danach `http://localhost:8000` aufrufen.

## Späteres CMS

Die jetzige Struktur ist bewusst so gebaut, dass es zwei Wege gibt:

**Einfach weiter statisch:** Änderungen direkt in `content.js` bzw. `index.html` über die GitHub-Weboberfläche. Wenig Wartung, keine Datenbank, sehr robust.

**Später CMS ergänzen:** Wenn mehrere Nicht-Techniker regelmäßig Inhalte pflegen sollen, kann die Seite auf ein Git-basiertes CMS (z. B. Decap CMS) oder auf WordPress umgestellt werden. Für einzelne Termine, Links und kurze Texte ist das zunächst meist unnötig schwergewichtig.

## Noch zu klären

- endgültiger Verteiler-Link
- Flyer/Fuchs-Logo
- endgültige Domain und Hosting
- vor öffentlichem Dauerbetrieb die Vollständigkeit der rechtlichen Angaben/Datenschutzhinweise prüfen
