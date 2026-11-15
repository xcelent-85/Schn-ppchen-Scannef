# Schnäppchen-Scanner – erste Version

## Was diese Version kann
- Kleinanzeigen-Anzeigen über die Android-Teilen-Funktion entgegennehmen (wenn als installierte PWA bereitgestellt).
- Angebote manuell erfassen und lokal speichern.
- eBay-Verkaufspreis (Median) eintragen.
- Geschätzten Gewinn nach Kaufpreis, eingetragenen Zusatzkosten und Gebühren berechnen.
- Angebote bearbeiten, löschen und Daten exportieren.

## Was diese Version noch NICHT kann
- Sie durchsucht Kleinanzeigen nicht selbstständig.
- Sie ruft keine eBay-Verkaufsdaten automatisch ab.
- Sie verschickt noch keine eigenen Push-Mitteilungen.
- Die App bewertet keine Fotos oder Zustände automatisch.

Das ist bewusst ein kostenloser, transparenter MVP ohne Scraping und ohne externe Konten.

## Installation auf Android
Die Dateien müssen über eine HTTPS-Adresse bereitgestellt werden, damit Chrome die PWA installieren und die Teilen-Funktion nutzen kann.

Kostenlose Hosting-Optionen sind z. B. GitHub Pages oder Cloudflare Pages:
1. Ein Repository/Projekt anlegen und alle Dateien aus diesem Ordner hochladen.
2. Statische Veröffentlichung aktivieren.
3. Die HTTPS-Adresse in Chrome auf Android öffnen.
4. Chrome-Menü (⋮) → „App installieren“ oder „Zum Startbildschirm hinzufügen“.
5. In Kleinanzeigen eine Anzeige öffnen → „Teilen“ → „Schnäppchen-Scanner“ auswählen.

Wichtig: Die Web Share Target-Funktion wird von Chromium-basierten Browsern unterstützt und muss im installierten PWA-Kontext getestet werden. Falls sie nicht in der Android-Teilen-Liste erscheint, kann der Anzeigenlink direkt in der App eingefügt werden.

## Bedienung
1. Anzeige teilen oder Link einfügen.
2. Angebotspreis eintragen.
3. Auf eBay nach exakt vergleichbaren Artikeln unter „Verkauft“ suchen.
4. Einen realistischen Median der vergleichbaren Verkäufe eintragen.
5. Versandkosten und Gebühren ergänzen.
6. Die App zeigt den geschätzten Überschuss.

## Formel
Gewinnschätzung = eBay-Verkaufspreis − (eBay-Verkaufspreis × Gebührenquote) − Kleinanzeigen-Kaufpreis − Zusatzkosten.

Die Berechnung ist nur eine Orientierung. Fahrtkosten, Reparaturen, Verpackung, Rückgaben, Steuern und weitere Kosten müssen zusätzlich berücksichtigt werden.

## Datenschutz
Alle Einträge bleiben in `localStorage` des verwendeten Browsers/Geräts. Es gibt in dieser Version keine Datenbank und keine Übertragung an einen Server. Browserdaten löschen kann auch die gespeicherten Angebote löschen; daher gelegentlich JSON exportieren.
