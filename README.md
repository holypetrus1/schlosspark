# Freunde des Schlossparks Pankow

Statische Website ohne Build-Prozess. Sie besteht aus HTML, CSS, JavaScript und zwei kleinen JSON-Dateien. Sie läuft auf GitHub Pages und praktisch jedem klassischen Webspace.

## Pflegeprinzip

Die Seite trennt **Darstellung** und **Inhalte** so weit wie sinnvoll:

- `index.html` – Seitenstruktur und längere, selten geänderte Texte
- `style.css` – Design
- `script.js` – lädt die Pflegedaten und Neuigkeiten
- `content/site.json` – Links, nächster Spaziergang, Kontakt, Flyer/Logo
- `content/news.json` – Neuigkeiten, jeweils nur Datum + Text
- `admin/` – Decap-CMS-Redaktionsoberfläche
- `assets/` – Bilder und Logos

Damit bleibt die Website auch ohne CMS vollständig als normale statische Website nutzbar. Das CMS ändert lediglich Dateien im GitHub-Repository.

## Redaktionsoberfläche mit Decap CMS

Nach fertiger Authentifizierung ist das CMS unter

`https://<domain>/admin/`

zu erreichen.

Im CMS gibt es bewusst nur zwei Bereiche:

1. **Allgemeine Angaben** – Umfrage-Link, Verteiler-Link, nächster Parkspaziergang, Kontakt/Impressum sowie später Flyer und Fuchs-Logo.
2. **Neuigkeiten** – eine einfache Liste. Jede Neuigkeit besteht ausschließlich aus Datum und Text. Neue Einträge werden oben angelegt; die Website sortiert zusätzlich automatisch nach Datum und zeigt maximal sechs Einträge.

Es gibt keine Autorenschaft, Kommentarfunktion, Kategorien oder sonstige Blog-Funktionen.

## Einmalige Einrichtung des CMS-Logins

Die CMS-Dateien sind bereits eingebaut. Für den produktiven Login braucht der GitHub-Backend von Decap jedoch einmalig einen OAuth-Dienst. Wir verwenden absichtlich **nicht Netlify Git Gateway**, weil dieses inzwischen als deprecated markiert ist.

Die einfache Variante, ohne das spätere Hosting an Netlify zu binden:

1. Ein kostenloses Netlify-Projekt für dieses GitHub-Repository anlegen. Es kann ausschließlich für OAuth dienen; die eigentliche Website darf weiter auf GitHub Pages, netcup, IONOS, STRATO usw. liegen.
2. In GitHub unter **Settings → Developer settings → OAuth Apps** eine OAuth App anlegen.
3. Als Callback-URL `https://api.netlify.com/auth/done` verwenden.
4. Client ID und Client Secret in Netlify unter **Project configuration → Access & security → OAuth** als GitHub-Provider hinterlegen.
5. In `admin/config.yml` die Zeile

   `site_domain: REPLACE-ME.netlify.app`

   durch die Domain dieses Netlify-Projekts ersetzen.
6. Jede Person, die im CMS direkt veröffentlichen darf, braucht einen GitHub-Account und Schreibzugriff auf `holypetrus1/schlosspark`. Im Alltag muss sie GitHub selbst anschließend nicht bedienen; Login und Pflege erfolgen über `/admin/`.

Alternativ kann später ein eigener kleiner OAuth-Proxy genutzt werden. Dann wird nur die Backend-Konfiguration in `admin/config.yml` geändert; Inhalte und Website bleiben unverändert.

## Lokal testen

Weil die Website JSON-Dateien nachlädt, sollte sie lokal über einen kleinen Webserver statt per Doppelklick auf `index.html` getestet werden:

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` aufrufen.

Für das CMS kann zusätzlich Decaps lokaler Proxy gestartet werden:

```bash
npx decap-server
```

Dann `http://localhost:8000/admin/` öffnen. `local_backend: true` ist bereits in `admin/config.yml` gesetzt.

## Pflege ohne CMS

Alle Inhalte bleiben auch direkt auf GitHub editierbar:

- Termin, Links, Kontakt und Flyer: `content/site.json`
- Neuigkeiten: `content/news.json`
- längere Grundtexte: `index.html`

Nach einer Änderung auf `main` wird GitHub Pages automatisch aktualisiert, sofern Pages für den Branch eingerichtet ist.

## Verteiler-Link ergänzen

Sobald das zweite Google-Formular existiert, entweder im CMS unter **Allgemeine Angaben → Verteiler-Link** eintragen oder in `content/site.json`:

```json
"mailingListUrl": "https://docs.google.com/forms/..."
```

Der bisher deaktivierte Button wird automatisch aktiv.

## Flyer und Fuchs-Logo ergänzen

Im CMS unter **Allgemeine Angaben → Flyer und Fuchs-Logo**:

1. Vorderseite hochladen.
2. Rückseite hochladen.
3. Fuchs-Logo hochladen.
4. „Flyer auf Website anzeigen“ aktivieren.
5. Optional „Fuchs als Logo verwenden“ aktivieren.

Uploads landen in `assets/uploads/` und werden zusammen mit den übrigen Website-Dateien versioniert.

## Hosting

Die Seite benötigt weder PHP noch eine Datenbank noch Node.js auf dem Webserver. Deshalb kann sie sehr leicht umziehen:

- GitHub Pages
- klassischer Webspace bei netcup, IONOS oder STRATO
- Netlify / Cloudflare Pages
- jeder andere Server, der statische Dateien ausliefern kann

Das CMS ist ebenfalls nicht an den Website-Host gebunden. Entscheidend ist nur, dass `/admin/` erreichbar ist und die OAuth-Konfiguration zum GitHub-Repository passt.

## Noch zu klären

- endgültiger Verteiler-Link
- Flyer/Fuchs-Logo
- endgültige Domain und Hosting
- produktiven OAuth-Login einmalig einrichten
- vor öffentlichem Dauerbetrieb Vollständigkeit von Impressum und Datenschutzhinweisen prüfen
