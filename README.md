# ⛵ Logbuch – Privates & Offline-Fähiges Haushaltsbuch (PWA)

> Ein minimalistisches, blitzschnelles mobiles Haushaltsbuch für Paare und Familien. Entwickelt mit Fokus auf sofortige Kassenerfassung (< 3 Sekunden), vollständigen Datenschutz und Offline-Fähigkeit.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-sky.svg)](https://robolf.github.io/Logbuch/)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Local%20%26%20Private-emerald.svg)](#datenschutz)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ✨ Features

* **⚡ Fokus auf die Kasse:** Beim Öffnen der Web-App ist das Betragsfeld sofort im Fokus mit Ziffernblock. 1-Tap Schnell-Chips für Kategorien und Händler.
* **🔒 100 % Privat & Autark:** Keine Drittanbieter-Server, keine Registrierung, keine Tracker. Alle Buchungen liegen verschlüsselt auf dem Gerät (`localStorage`) und optional in deiner eigenen privaten Google Drive Tabelle.
* **📶 Offline-First mit Outbox:** Funktioniert auch bei absolutem Funkloch im Supermarkt oder Keller. Buchungen werden in unter 0,1 ms lokal gesichert und automatisch im Hintergrund synchronisiert, sobald wieder Netz vorhanden ist.
* **⛵ Wasserlinien-Budget:** Visuelle Anzeige deines monatlichen Soll-Budgets mit Puffer-Berechnung und Seegang-Metapher (*Ruhige See*, *Frische Brise*, etc.).
* **👥 2-Geräte-Erkennung:** Jedes Smartphone merkt sich seinen Standard-Erfasser. Keine versehentlichen Verwechslungen an der Kasse.
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

Du kannst die App für dein Gerät über Parameter im URL-Hash vorkonfigurieren (ohne dass diese Parameter an einen Server übertragen werden):

```text
https://robolf.github.io/Logbuch/#setup?p1=Alex&p2=Sam&owner=Alex&budget=1500
```

* `p1`: Name von Person 1
* `p2`: Name von Person 2
* `owner`: Besitzer dieses Geräts (`Alex` oder `Sam`)
* `budget`: Monatliches Soll-Budget in Euro
* `hook`: (Optional) Deine Google Apps Script Webhook-URL

---

## ☁️ Optional: Privates Google Sheets Backend einrichten

Wenn beide Partner Buchungen automatisch in einer gemeinsamen Google Drive Tabelle zusammenführen möchten:

1. Öffne [Google Apps Script](https://script.google.com/) und erstelle ein neues Projekt.
2. Erstelle ein Skript mit `doGet()` und `doPost()` zur Synchronisation mit Google Sheets.
3. Klicke auf **Bereitstellen** > **Neue Bereitstellung** > Typ: **Web-App** (Zugriff: *Jeder*).
4. Kopiere die Web-App-URL und füge sie in den App-Einstellungen unter **Google Sheet Webhook** ein.

---

## 🛡️ Datenschutz

* Sämtliche Eingaben verbleiben lokal auf deinem Smartphone.
* Bei Verwendung des Google Sheet Webhooks kommuniziert die App ausschließlich direkt zwischen deinem Browser und deinem persönlichen Google-Account.
* Es werden keinerlei Analysedaten, Telemetrie oder Werbe-Tracker eingesetzt.
