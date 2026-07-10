# Tätigkeitsnachweis & Besprechungsprotokolle
## Projekt: Lexio – Intelligenter KI-Vokabeltrainer

---

### **Projektteam (Gruppe 1)**
*   **Olexandr Sokaliuk** (Fachinformatiker Anwendungsentwicklung)
*   **Hasan Ates** (Fachinformatiker Systemintegration)
*   **Boris Bulatov** (Fachinformatiker Systemintegration)

**Klasse:** Fachinformatik – 2. Lehrjahr – BWL  
**Unterrichtsfach:** BWL & Programmieren  
**Projektzeitraum:** 08. Juni 2026 bis 10. Juli 2026

---

## 1. Übersicht der Projekttreffen (Meetings)

### **Meeting 1: Kick-Off & Themenfindung**
*   **Datum:** Montag, 08.06.2026 (4 Stunden)
*   **Teilnehmer:** Olexandr Sokaliuk, Hasan Ates, Boris Bulatov
*   **Besprochene Themen & Planung:**
    *   Brainstorming zum Oberthema „Künstliche Intelligenz in Unternehmen & Bildung“.
    *   Definition des Projekts: Entwicklung eines KI-gestützten Vokabeltrainers namens **Lexio**.
    *   Festlegung der funktionalen Mindestanforderungen (Gegenstand der Programmieraufgabe):
        *   Benutzereingabe verarbeiten (Wunschthema, Sprachen).
        *   Logische Datenauswertung über KI-Backend.
        *   Speicherung und strukturierte Ausgabe der Lernsets.
    *   Erste Aufgabenverteilung und Planung der Meilensteine.
*   **Geplante Aufgaben bis zum nächsten Meeting:**
    *   *Olexandr:* Konzeptionierung der Benutzeroberfläche und Wireframe-Entwurf.
    *   *Boris:* Einarbeitung in die OpenAI API-Dokumentation und Kostenstrukturen.
    *   *Hasan:* Analyse der Anforderungen an das relationale Datenbankschema.

---

### **Meeting 2: Konzeptvorstellung & Technologie-Stack**
*   **Datum:** Montag, 15.06.2026 (4 Stunden)
*   **Teilnehmer:** Olexandr Sokaliuk, Hasan Ates, Boris Bulatov
*   **Besprochene Themen & Planung:**
    *   **Review:** Vorstellung der ersten Figma-Demos durch Olexandr.
    *   **Technologie-Entscheidung:**
        *   *Frontend:* React 19 mit TypeScript (für eine modulare und skalierbare Web-Oberfläche).
        *   *Backend:* FastAPI in Python (aufgrund der hohen Ausführungsgeschwindigkeit und der asynchronen Bibliotheken).
        *   *Datenbank:* SQLite (lokal, wartungsarm und einfach zu integrieren).
    *   Besprechung des Datenmodells (ER-Modell) durch Hasan.
    *   Analyse der API-Kosten durch Boris: Entscheidung für das Modell `GPT-4o mini` aufgrund des hervorragenden Preis-Leistungs-Verhältnisses (ca. 0,1 Cent pro Abfrage).
*   **Geplante Aufgaben bis zum nächsten Meeting:**
    *   *Olexandr:* Initialisierung des React-Projekts und Programmierung der ersten UI-Komponenten (Themen-Eingabe, Wortlisten-Ansicht).
    *   *Boris:* Setup des FastAPI-Servers und Implementierung der OpenAI-Schnittstelle.
    *   *Hasan:* Erstellung des ERM-Diagramms und Dokumentation der Tabellenbeziehungen.

---

### **Meeting 3: Integrationsphase & Offline-Mocks**
*   **Datum:** Montag, 22.06.2026 (4 Stunden)
*   **Teilnehmer:** Olexandr Sokaliuk, Hasan Ates, Boris Bulatov
*   **Besprochene Themen & Planung:**
    *   **Review:** Zusammenführung von React-Frontend und FastAPI-Backend.
    *   **Problem:** Für Testzwecke im Unterricht soll die Anwendung auch komplett offline funktionsfähig sein.
    *   **Lösung:** Integration eines *Mock Service Workers (MSW)* im Frontend durch Olexandr. Dieser simuliert die API-Antworten offline im Browser, falls keine Internetverbindung besteht.
    *   Integration der SQLite-Datenbank über SQLAlchemy ORM im Backend.
    *   Erste gemeinsame End-to-End Tests der Anwendung (Vokabelgenerierung und Speicherung).
*   **Geplante Aufgaben bis zum nächsten Meeting:**
    *   *Olexandr:* Fertigstellung des interaktiven Karteikarten-Modus (Flashcards) inklusive CSS-Flip-Animationen.
    *   *Boris:* Fehlerbehandlung und Validierung der JSON-Ausgabe der OpenAI API im Backend.
    *   *Hasan:* Strukturierung der Abschlusspräsentation und Erarbeitung der betriebswirtschaftlichen Nutzenanalyse (Zeitersparnis, Amortisation).

---

### **Meeting 4: Finales Testing & Präsentationsvorbereitung**
*   **Datum:** Montag, 29.06.2026 (4 Stunden)
*   **Teilnehmer:** Olexandr Sokaliuk, Hasan Ates, Boris Bulatov
*   **Besprochene Themen & Planung:**
    *   **Review:** Durchführung von Systemtests. Validierung der offline MSW Mocks und der echten API-Anbindungen.
    *   Erfolgreicher Testlauf des gesamten Benutzer-Lernzyklus (Eingabe Thema ➔ KI-Generierung ➔ Tabellenspeicherung ➔ Karteikarten-Training ➔ Ergebnis-Speicherung).
    *   Erstellung des Präsentationskonzepts. Hasan übernimmt die Erstellung der interaktiven HTML-Slides.
    *   Zusammenstellung aller Arbeitsstunden und Trello-Task-Visualisierungen.
*   **Geplante Aufgaben bis zur Abgabe (10.07.2026):**
    *   *Olexandr & Boris:* Letzte Code-Bereinigungen (Linting, Typsicherheit).
    *   *Hasan:* Fertigstellung der HTML-Präsentation und Erstellung der schriftlichen Projektdokumentation.

---

## 2. Individueller Tätigkeitsnachweis (Arbeitsberichte)

Nachfolgend sind die spezifischen Tätigkeiten der einzelnen Gruppenmitglieder aufgeführt, die dem zeitlichen Aufwand in der Kostenanalyse der Projektdokumentation entsprechen.

### **Tätigkeiten von Olexandr Sokaliuk (Gesamtzeit: 20 h)**
*   **GUI-Konzeption & Wireframes (4 h):** 
    *   Erstellung des Benutzeroberflächen-Designs in Figma.
    *   Entwurf der Benutzerführung vom Dashboard über die Wortliste bis hin zum Karteikarten-Modus.
*   **Frontend-Entwicklung (16 h):**
    *   Setup des React 19 / Vite / TypeScript Projekts.
    *   Implementierung des responsiven CSS-Layouts (Dunkelmodus).
    *   Programmierung des state-managements mit Zustand.
    *   Integration von Mock Service Worker (MSW) für die Offline-Fähigkeit im Browser.
    *   Implementierung der interaktiven Flip-Karteikarten.

### **Tätigkeiten von Boris Bulatov (Gesamtzeit: 16 h)**
*   **AI-Modell Recherche (4 h):**
    *   Analyse von verschiedenen Modellen (OpenAI GPT-4, GPT-4o mini, lokale Modelle).
    *   Durchführung von BWL-Berechnungen bezüglich Token-Kosten und Skalierbarkeit für Schulen.
*   **Backend-Entwicklung (12 h):**
    *   Setup des FastAPI Backends.
    *   Implementierung der OpenAI API-Schnittstelle zur asynchronen Wortgenerierung.
    *   Anbindung der SQLite-Datenbank über SQLAlchemy.
    *   Implementierung von Validierungsprüfungen, um sicherzustellen, dass die KI sauberes JSON ausgibt.

### **Tätigkeiten von Hasan Ates (Gesamtzeit: 14 h)**
*   **Datenbankdesign & Dokumentation (6 h):**
    *   Entwurf des relationalen Datenbankschemas.
    *   Modellierung des Entity-Relationship-Modells (ERM).
    *   Dokumentation der Tabellenbeziehungen und Primär-/Fremdschlüsselstrukturen.
*   **Erstellung der Abschlusspräsentation (8 h):**
    *   Strukturierung der Abschlusspräsentation.
    *   Programmierung des interaktiven HTML-Slide-Decks.
    *   Erstellung der CSS-Effekte (Interactive Tabs für Arbeitsstunden, Lightbox-Overlay für Screenshots).
    *   Formulierung der wirtschaftlichen Nutzenanalyse (Nutzen-Faktoren für Lehrer und Schulen).

---

### **Freigabe und Unterschriften**

Die Gruppenmitglieder bestätigen die Richtigkeit der dokumentierten Projekttreffen und erbrachten Arbeitsleistungen.

___________________________            ___________________________            ___________________________
**Olexandr Sokaliuk**                  **Boris Bulatov**                      **Hasan Ates**
(Entwickler Frontend)                  (Entwickler Backend)                  (Datenbank & Organisation)
