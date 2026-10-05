# ⛵ Logbuch – Privates & Offline-Fähiges Haushaltsbuch (PWA)

> Ein minimalistisches, blitzschnelles mobiles Haushaltsbuch für Paare und Familien. Entwickelt mit Fokus auf sofortige Kassenerfassung (< 3 Sekunden), vollständigen Datenschutz und Offline-Fähigkeit.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-sky.svg)](https://robolf.github.io/Logbuch/)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Local%20%26%20Private-emerald.svg)](#datenschutz)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ✨ Features

* **🌍 Mehrsprachig & Multi-Währung:** Unterstützt Englisch, Deutsch und Französisch (automatische Geräteerkennung & manueller Switcher) sowie EUR (€), USD ($), GBP (£) und CHF mit lokalisierter Währungsformatierung.
* **⚡ Fokus auf die Kasse:** Beim Öffnen der Web-App ist das Betragsfeld sofort im Fokus mit Ziffernblock. 1-Tap Schnell-Chips für Kategorien und Händler.
* **🔒 100 % Privat & Autark:** Offline-first auf dem Smartphone (`localStorage`). Synchronisation über eine moderne, DSGVO-konforme PostgreSQL Cloud-Datenbank (Supabase) in Frankfurt (`eu-central-1`).
* **📶 Offline-First mit Outbox:** Funktioniert auch bei absolutem Funkloch im Supermarkt oder Keller. Buchungen werden in unter 0,1 ms lokal gesichert und automatisch im Hintergrund synchronisiert, sobald wieder Netz vorhanden ist.
* **⛵ Wasserlinien-Budget:** Visuelle Anzeige deines monatlichen Soll-Budgets mit Puffer-Berechnung und Seegang-Metapher (*Ruhige See*, *Frische Brise*, etc.).
* **👥 Multi-User & Echtzeit-Sync:** Beliebig viele Personen im Haushalt anlegbar. Änderungen eines Partners werden über WebSocket-Push in Millisekunden auf allen Partner-Geräten aktualisiert.
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
https://robolf.github.io/Logbuch/#setup?hid=DEINE_HAUSHALTS_ID&h=Unser%20Haushalt&b=1500&users=Alex,Sam&owner=Alex&lang=de&curr=€
```

* `hid`: Deine Haushalts-ID (Cloud-Schlüssel für die Echtzeit-Synchronisation)
* `h`: Name des Haushalts (z. B. `Unser Haushalt`)
* `b`: Monatliches Soll-Budget (z. B. `1500`)
* `users`: Kommagetrennte Liste aller Personen (z. B. `Alex,Sam`)
* `owner`: Besitzer dieses Geräts (z. B. `Alex`)
* `lang`: (Optional) Sprache (`de`, `en`, `fr`)
* `curr`: (Optional) Währungssymbol (`€`, `$`, `£`, `CHF`)

In der App gibt es in den Einstellungen außerdem den Button **"Einrichtungs-Link für Partner kopieren"**, der automatisch den passenden Link für das Smartphone des Partners erzeugt.

---

## 🛡️ Datenschutz & Sicherheit

* Sämtliche Eingaben werden sofort lokal auf deinem Smartphone gesichert.
* Die Cloud-Synchronisation erfolgt über eine dedizierte Datenbank im Rechenzentrum Frankfurt am Main (Deutschland) nach europäischen Datenschutzstandards (DSGVO).
* Es werden keinerlei Analysedaten, Telemetrie oder Werbe-Tracker eingesetzt.
