# Freunde des Schlossparks Pankow

Kleine statische Website ohne Build-Prozess. Sie läuft auf GitHub Pages und praktisch jedem einfachen Webspace.

## Die wichtigste Regel: nur `content.js` pflegen

**Alle veränderbaren Inhalte liegen in genau einer Datei: `content.js`.**

Die Datei ist bewusst so aufgebaut, dass oben die häufig wechselnden Inhalte stehen und unten die eher statischen:

1. Neuigkeiten
2. Termine
3. Titel und Grundtexte
4. Mitmachen
5. Umfrageergebnisse
6. Links
7. Impressum und Kontakt

Damit kann `content.js` z. B. gemeinsam in Google Drive gepflegt werden. Wenn eine neue Version fertig ist, muss im Repository lediglich die alte `content.js` ersetzt werden. Die restliche Website bleibt unverändert.

### Typischer Ablauf

1. Gemeinsame Kopie von `content.js` in Google Drive bearbeiten.
2. Datei wieder als `content.js` herunterladen.
3. In GitHub im Repository `schlosspark` die bestehende `content.js` ersetzen.
4. Änderung committen.
5. GitHub Pages veröffentlicht die neue Fassung automatisch.

## Technische Dateien

- `index.html` – Struktur der Website
- `style.css` – Gestaltung
- `script.js` – stellt die Inhalte aus `content.js` auf der Seite dar
- `content.js` – **einzige Pflegedatei**
- `assets/` – statische Grafiken und Logo

## Logo und Gestaltung

Das Logo wird stabil aus `assets/logo.svg` geladen. Der Flyer selbst wird auf der Website nicht eingebunden. Farbwelt, Schwerpunkte und Tonfall orientieren sich aber an den Inhalten des Flyers.

## Umfrage

Die in `content.js` eingetragenen Umfragewerte entsprechen dem ausgewerteten Stand vom 12.08.2026 mit 556 Rückmeldungen. Wenn später eine neue Auswertung vorliegt, müssen nur die Werte im Abschnitt `UMFRAGE` angepasst werden.

## Verteiler

Sobald ein separates Formular für den Verteiler existiert, in `content.js` im Abschnitt `LINKS` bei `mailingListUrl` den Link eintragen. Der bislang deaktivierte Button wird dann automatisch aktiv.
