# Projektarbeit zu BWL und Programmieren
## Thema: Künstliche Intelligenz in Unternehmen & Bildung – wirtschaftliche Auswirkungen & praktische Anwendung (Lexio Vokabeltrainer)

---

### **Projektteam (Gruppe 1)**
*   **Olexandr Sokaliuk** (Fachinformatiker Anwendungsentwicklung)
*   **Hasan Ates** (Fachinformatiker Systemintegration)
*   **Boris Bulatov** (Fachinformatiker Systemintegration)

**Klasse:** Fachinformatik – 2. Lehrjahr – BWL  
**Ausbildungsbetrieb / Schule:** gdsa (Gewerbliche Schule Ansbach)  
**Datum:** 10. Juli 2026

---

## Inhaltsverzeichnis
1. [Einleitung & Problemstellung](#1-einleitung--problemstellung)
2. [Recherche: Künstliche Intelligenz im Bildungswesen](#2-recherche-künstliche-intelligenz-im-bildungswesen)
   * [2.1 Themenbereich und konkreter Einsatz](#21-themenbereich-und-konkreter-einsatz)
   * [2.2 Marktanalyse und bestehende Lösungen](#22-marktanalyse-und-bestehende-lösungen)
   * [2.3 Funktionsweise von LLMs (vereinfacht)](#23-funktionsweise-von-llms-vereinfacht)
   * [2.4 Chancen und Risiken](#24-chancen-und-risiken)
3. [BWL-Analyse](#3-bwl-analyse)
   * [3.1 Kostenanalyse (CapEx & OpEx)](#31-kostenanalyse-capex--opex)
   * [3.2 Nutzenanalyse](#32-nutzenanalyse)
4. [Technische Umsetzung (Der Prototyp Lexio)](#4-technische-umsetzung-der-prototyp-lexio)
   * [4.1 Systemarchitektur](#41-systemarchitektur)
   * [4.2 Datenmodell & ERM-Diagramm](#42-datenmodell--erm-diagramm)
5. [Fazit & Ausblick](#5-fazit--ausblick)

---

## 1. Einleitung & Problemstellung

Das Erlernen von Fremdsprachen ist im Zeitalter der Globalisierung eine Kernkompetenz. Traditionelle Bildungsmethoden stoßen in Schulen jedoch zunehmend an Grenzen:
*   **Statische Lernmaterialien:** Vokabellisten in Schulbüchern sind oft veraltet und wecken wenig Interesse bei Schülern.
*   **Fehlender Kontext:** Vokabeln werden isoliert auswendig gelernt, anstatt sie in praxisnahen Sätzen anzuwenden.
*   **Hoher Aufwand für Lehrkräfte:** Das Erstellen individueller Übungen und Vokabeltests kostet Lehrer wöchentlich mehrere Stunden Vorbereitungszeit.
*   **Mangelnde Differenzierung:** In heterogenen Klassen lernen Schüler in unterschiedlichem Tempo; traditionelle Medien können sich nicht an das individuelle Lerntempo anpassen.

Das Ziel dieser Projektarbeit war die Konzeptionierung und Entwicklung eines funktionsfähigen Prototyps namens **Lexio**. Lexio ist ein KI-gestützter Vokabeltrainer, der Vokabellisten on-demand zu beliebigen Themengebieten generiert, diese in einer Datenbank speichert und den Schülern über interaktive Karteikarten (Flashcards) ein adaptives Lernen ermöglicht.

---

## 2. Recherche: Künstliche Intelligenz im Bildungswesen

### 2.1 Themenbereich und konkreter Einsatz
Unser Projekt befasst sich mit dem Einsatz von künstlicher Intelligenz (KI) im Bildungssektor, speziell im Bereich der Sprachdidaktik. KI wird hier in folgenden Kernbereichen eingesetzt:
*   **Content-Generierung:** Automatische Erstellung von Lerntexten, Vokabellisten und Grammatikübungen, die auf das Niveau des Lernenden zugeschnitten sind.
*   **Intelligente Tutorensysteme (ITS):** Chatbots, die Lernenden grammatikalische Fehler in Echtzeit erklären und sokratische Fragen stellen, um das Verständnis zu fördern.
*   **Lernstandsanalysen:** Algorithmen (z. B. Spaced Repetition), die ermitteln, wann ein Wort wiederholt werden muss, um langfristig im Gedächtnis zu bleiben.

### 2.2 Marktanalyse und bestehende Lösungen
Einige Marktführer im Bildungsbereich nutzen diese Technologien bereits sehr erfolgreich:
1.  **Duolingo Max:** Nutzt GPT-4 von OpenAI für zwei neue Features:
    *   *Explain my Answer:* Erklärt dem Nutzer detailliert, warum eine Antwort richtig oder falsch war.
    *   *Roleplay:* Simuliert reale Konversationsszenarien (z. B. Bestellung im Café).
2.  **Quizlet (Q-Chat):** Ein KI-Lerncoach, der auf der OpenAI-API basiert. Er führt interaktive Quizze durch, stellt vertiefende Fragen und passt sich dem Lernfortschritt an.
3.  **Babbel:** Setzt KI-gestützte Spracherkennung ein, um die Aussprache des Nutzers zu analysieren und direktes Feedback zu geben.

### 2.3 Funktionsweise von LLMs (vereinfacht)
Große Sprachmodelle (Large Language Models - LLMs) wie GPT-4o mini basieren auf künstlichen neuronalen Netzen (Transformer-Architektur). Vereinfacht erklärt funktionieren sie wie folgt:
1.  **Statistische Wortvorhersage:** Das Modell berechnet basierend auf Milliarden von gelesenen Texten (Trainingsdaten), welches Wort mit der höchsten Wahrscheinlichkeit als nächstes auf eine Eingabe (Prompt) folgt.
2.  **Prompting & Systemanweisungen:** Im Programmiercode des Backends (FastAPI) wird der Prompt so strukturiert, dass das Modell keine Fließtexte ausgibt, sondern strukturierte Daten.
3.  **JSON-Strukturierung:** Die KI wird angewiesen, die generierten Vokabeln im standardisierten JSON-Format auszugeben, damit sie direkt von unserer App verarbeitet und in die Datenbank geschrieben werden können:
    ```json
    {
      "source_text": "airport",
      "target_text": "Flughafen",
      "source_language": "en",
      "target_language": "de"
    }
    ```

### 2.4 Chancen und Risisen
Beim Einsatz dieser Technologie im schulischen Umfeld ergeben sich folgende Aspekte:

#### Chancen:
*   **Maximale Personalisierung:** Schüler können Vokabeln zu ihren Hobbys generieren lassen (z. B. "Gaming", "Fußball", "Kochen"), was die Motivation drastisch erhöht.
*   **Direktes Feedback:** Keine Wartezeiten auf die Korrektur durch den Lehrer; die KI korrigiert Fehler in Echtzeit.
*   **Enorme Entlastung der Lehrkräfte:** Automatische Erstellung von maßgeschneiderten Vokabeltests per Mausklick.

#### Risiken:
*   **Halluzinationen (Fehlinformationen):** KI-Modelle können fehlerhafte Übersetzungen oder grammatikalisch falsche Sätze erzeugen. Eine Validierungslogik im Backend ist daher zwingend erforderlich.
*   **Datenschutz (DSGVO):** Da Schülerdaten und Anfragen an amerikanische Cloud-Anbieter (OpenAI) übertragen werden könnten, müssen Datenschutzbestimmungen streng beachtet werden (z. B. Anonymisierung von User-IDs vor der API-Anfrage).

---

## 3. BWL-Analyse

Da dieses Projekt im Rahmen unserer Ausbildung durchgeführt wurde, unterscheidet sich die wirtschaftliche Bilanz stark von einem kommerziellen Software-Startup. Nachfolgend sind die Kosten und der Nutzen detailliert analysiert.

### 3.1 Kostenanalyse (CapEx & OpEx)

#### 1. Anschaffungs- & Entwicklungskosten (CapEx)
Da das Projekt vollständig intern als Azubi-Projekt im Rahmen der Ausbildung realisiert wurde, fallen **0 € externe Entwicklungskosten** an. Der gesamte Aufwand bemisst sich in den geleisteten Arbeitsstunden des Teams:

| Mitglied | Aufgabe / Phase | Geleistete Stunden |
| :--- | :--- | :---: |
| **Olexandr Sokaliuk** | GUI Design (Figma Wireframes) | 4 h |
| **Olexandr Sokaliuk** | Product Programming (React Frontend) | 16 h |
| **Boris Bulatov** | Research AI (OpenAI API & Model-Research) | 4 h |
| **Boris Bulatov** | Backend Endpoints (FastAPI & Server Setup) | 12 h |
| **Hasan Ates** | Datenbank & ERM-Diagramm Dokumentation | 6 h |
| **Hasan Ates** | Abschlusspräsentation & Slide-Design | 8 h |
| **Gesamtstunden** | **Projekt-Eigenentwicklung** | **50 h** |

*Hardware & Software:* Es wurde vorhandene Hardware des Ausbildungsbetriebs/der Schule genutzt. Es kamen ausschließlich kostenlose Open-Source-Tools (VS Code, Python, Git) zum Einsatz.

#### 2. Betriebskosten (OpEx)
Die laufenden Betriebskosten für das Hosten und Betreiben des Systems sind minimal:
*   **Frontend Hosting (Vercel):** Deployment auf dem Vercel Hobby Plan für **0 € / Monat**.
*   **Backend Hosting & Datenbank (Render / Railway):** Hosten des FastAPI Backends + SQLite Datenbank auf einer Hobby-Instanz für **~5 € / Monat**.
*   **Domain & DNS:** Nutzung einer Subdomain der Schule/des Betriebs für **0 €**.

#### 3. API-Gebühren (OpenAI GPT-4o mini)
Wir nutzen das extrem kosteneffiziente Modell **GPT-4o mini**:
*   *Preise:* $0.15 pro 1M Input-Tokens / $0.60 pro 1M Output-Tokens.
*   *Berechnung pro Vokabel-Generierung (20 Wörter):*
    *   Input (Prompt & System-Anweisung): ~500 Tokens ➔ $0.000075
    *   Output (JSON-Wortliste): ~1.500 Tokens ➔ $0.000900
    *   **Gesamtkosten pro Abfrage: $0.000975 (ca. 0,1 Cent!)**
*   *Skalierungsschätzung für eine Schule:*
    *   1 Schüler (30 Abfragen/Monat): **$0.029 (ca. 3 Cent) / Monat**
    *   1.000 Schüler / Jahr (360.000 Abfragen): **$351.00 / Jahr**

---

### 3.2 Nutzenanalyse

#### 1. Zeitersparnis
Lehrkräfte benötigen für das manuelle Erstellen eines Vokabeltests (Recherche, Tippen, Übersetzen, Formatieren) im Schnitt 30–45 Minuten. Mit Lexio schrumpft dieser Aufwand auf **unter 1 Minute**. Das entspricht einer **Zeitersparnis von ca. 90%**, wodurch Lehrer mehr Zeit für die direkte pädagogische Betreuung gewinnen.

#### 2. Skalierbarkeit & Effizienz
Ein einmal entwickeltes System kann ohne nennenswerte Hardware-Upgrades von einer unbegrenzten Anzahl an Klassen verwendet werden. Die Grenzkosten für einen zusätzlichen Nutzer gehen gegen Null, da lediglich minimale API-Token-Kosten anfallen.

#### 3. Fehlerreduktion
Die automatische Generierung über strukturierte JSON-Schnittstellen und die Validierung im Python-Backend eliminiert manuelle Tippfehler, die Lehrkräften bei der schnellen Erstellung von Arbeitsblättern unterlaufen können.

---

## 4. Technische Umsetzung (Der Prototyp Lexio)

### 4.1 Systemarchitektur
Lexio basiert auf einer modernen, entkoppelten Client-Server-Architektur:
*   **Client (Frontend):** Entwickelt mit **React 19**, **TypeScript** und **Vite**. Die Struktur folgt dem modernen *Feature-Sliced Design (FSD)*. Für das lokale Testen ohne Server wurde ein *Mock Service Worker (MSW)* integriert, der API-Anfragen im Browser abfängt.
*   **Server (Backend):** Entwickelt mit **FastAPI** (Python). FastAPI zeichnet sich durch extrem hohe Geschwindigkeit (Uvicorn ASGI-Server) und automatische OpenAPI-Dokumentation (Swagger) aus.
*   **Künstliche Intelligenz:** Das Backend kommuniziert asynchron über die offizielle Python-Bibliothek von OpenAI mit dem GPT-4o-mini Modell.
*   **Datenbank:** Zur lokalen Speicherung der Vokabelsets, Benutzer und Lernsitzungen wird **SQLite** verwendet, was eine einfache Portabilität des Prototyps ermöglicht.

### 4.2 Datenmodell & ERM-Diagramm
Die Strukturierung der Datenbank wurde relational entworfen, um die Datenintegrität zu gewährleisten:

*   **Users:** Speichert Benutzerdaten (`user_id`, `username`, `password_hash`).
*   **Topics:** Speichert die übergeordneten Lern-Kategorien (`topic_id`, `topic_name`).
*   **Vocabulary:** Enthält die generierten Vokabelpaare mit Fremd- und Ausgangssprache (`word_id`, `topic_id`, `word_eng`, `word_ger`).
*   **Sessions:** Dokumentiert Lernsitzungen der Schüler (`session_id`, `topic_id`, `user_id`, `date_played`, `count_learned`, `count_repeat`).

```
  [Users] 1 ------- * [Sessions] * ------- 1 [Topics]
                                                1
                                                |
                                                | *
                                          [Vocabulary]
```

---

## 5. Fazit & Ausblick

Die Projektarbeit demonstriert eindrucksvoll, dass der Einsatz von künstlicher Intelligenz im Bildungswesen keine Zukunftsvision mehr ist, sondern bereits heute mit minimalen Kosten realisiert werden kann. Durch die Wahl des Modells **GPT-4o mini** belaufen sich die Betriebskosten für ein ganzes Schuljahr bei 1.000 aktiven Schülern auf gerade einmal ca. 350 Dollar. Dank der Eigenleistung des Azubi-Teams entfielen CapEx-Entwicklungskosten komplett, was das Projekt extrem wirtschaftlich macht.

### Zukünftige Ausbaustufen (Ausblick):
1.  **Aussprache-Training (Speech-to-Text):** Einbindung von KI-Sprachmodellen (z. B. OpenAI Whisper), damit Schüler Vokabeln einsprechen können und die KI die Aussprache bewertet.
2.  **Lokale Offline-KI (On-Premises):** Hosten von schlanken Open-Source LLMs (z. B. Llama 3 oder Phi-3) direkt auf Schulservern, um die Abhängigkeit von OpenAI zu eliminieren und den Datenschutz auf 100% zu steigern.
3.  **Gamification-Elemente:** Einführung von Erfahrungspunkten, täglichen Herausforderungen (Daily Streaks) und Bestenlisten zur Erhöhung der langfristigen Motivation der Schüler.
