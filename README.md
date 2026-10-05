# ⛵ Logbuch – Privates & Offline-Fähiges Haushaltsbuch (PWA)

> Ein minimalistisches, blitzschnelles mobiles Haushaltsbuch für Paare und Familien. Entwickelt mit Fokus auf sofortige Kassenerfassung (< 3 Sekunden), vollständigen Datenschutz und Offline-Fähigkeit.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-sky.svg)](https://robolf.github.io/Logbuch/)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Local%20%26%20Private-emerald.svg)](#datenschutz)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ✨ Features

* **⚡ Fokus auf die Kasse:** Beim Öffnen der Web-App ist das Betragsfeld sofort im Fokus mit Ziffernblock. 1-Tap Schnell-Chips für Kategorien und Händler.
* **🔒 100 % Privat & Autark:** Keine Drittanbieter-Server, keine Registrierung, keine Tracker. Alle Buchungen liegen lokal auf dem Gerät (`localStorage`) und optional in deiner eigenen privaten Google Drive Tabelle.
* **📶 Offline-First mit Outbox:** Funktioniert auch bei absolutem Funkloch im Supermarkt oder Keller. Buchungen werden in unter 0,1 ms lokal gesichert und automatisch im Hintergrund synchronisiert, sobald wieder Netz vorhanden ist.
* **⛵ Wasserlinien-Budget:** Visuelle Anzeige deines monatlichen Soll-Budgets mit Puffer-Berechnung und Seegang-Metapher (*Ruhige See*, *Frische Brise*, etc.).
* **👥 Multi-User & Farbcodierung:** Beliebig viele Personen im Haushalt anlegbar, jeweils mit individueller Akzentfarbe und Standard-Erfasser je Gerät.
* **📊 Direkter Google Sheet & Drive Link:** 1-Klick-Zugriff auf die Google-Tabelle zur direkten Ansicht aller historischen Buchungen und Auswertungen.
* **📲 Nahtlose PWA-Integration:** Kann auf iOS (Safari) und Android direkt als vollwertige App auf den Home-Bildschirm gelegt werden.

---

## 🚀 Live Demo

Die Web-App kann direkt im Browser getestet werden:  
👉 **[https://robolf.github.io/Logbuch/](https://robolf.github.io/Logbuch/)**

---

## 📱 Auf dem iPhone als App installieren

1. Öffne die URL in **Safari** auf dem iPhone.
2. Tippe unten auf das **Teilen-Symbol** (Viereck mit Pfeil nach oben).
3. Wähle **"Zum Home-Bildschirm"**.
4. Name bestätigen: **Logbuch**.

---

## ⚙️ Schnelleinrichtung via Setup-Link

Du kannst die App für beliebige Geräte über Parameter im URL-Hash vorkonfigurieren (ohne dass diese Parameter an einen Server übertragen werden):

```text
https://robolf.github.io/Logbuch/#setup?h=Unser%20Haushalt&b=1500&users=Alex,Sam&owner=Alex&hook=...&sheet=...
```

* `h`: Name des Haushalts (z. B. `Unser Haushalt`)
* `b`: Monatliches Soll-Budget in Euro (z. B. `1500`)
* `users`: Kommagetrennte Liste aller Personen (z. B. `Alex,Sam`)
* `owner`: Besitzer dieses Geräts (z. B. `Alex`)
* `hook`: (Optional) Deine Google Apps Script Webhook-URL
* `sheet`: (Optional) Direkter Link zu eurer Google-Tabelle für den 1-Klick-Zugriff

In der App gibt es in den Einstellungen außerdem den Button **"Einrichtungs-Link für Partner kopieren"**, der automatisch den passenden Link für das Smartphone des Partners erzeugt.

---

## ☁️ Optional: Privates Google Sheets Backend einrichten

Wenn ihr Buchungen automatisch in einer gemeinsamen Google Drive Tabelle zusammenführen möchtet:

1. Öffne [Google Apps Script](https://script.google.com/) und erstelle ein neues Projekt.
2. Kopiere den Code aus der Datei [`google_apps_script.js`](google_apps_script.js) in dein Skript.
3. Klicke auf **Bereitstellen** > **Neue Bereitstellung** > Typ: **Web-App** (Ausführen als: *Ich*, Wer hat Zugriff: *Jeder*).
4. Kopiere die Web-App-URL und trage sie in Logbuch unter **Einstellungen** > **Google Sheet Webhook** ein.

---

## 🛡️ Datenschutz

* Sämtliche Eingaben verbleiben lokal auf deinem Smartphone.
* Bei Verwendung des Google Sheet Webhooks kommuniziert die App ausschließlich direkt zwischen deinem Browser und deinem persönlichen Google-Account.
* Es werden keinerlei Analysedaten, Telemetrie oder Werbe-Tracker eingesetzt.
