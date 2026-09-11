# reparaturpflicht.de — Recht auf Reparatur & Herstellerpflichten-Portal

Verkaufsfertiges, rechtssicheres, SEO-optimiertes und conversion-starkes Webportal für die Domain **`reparaturpflicht.de`**, entwickelt für den direkten **Vercel-Export**.

---

## 1. Domain-Steckbrief & Projekt-Profil

| Parameter | Spezifikation |
| :--- | :--- |
| **Domain** | `reparaturpflicht.de` |
| **Nische / Branche** | Verbraucherrecht, Umwelt-/Klimaschutz, Recht auf Reparatur (EU-Richtlinie 2024/1799, Ökodesign-Verordnung ESPR) & Reparaturservice |
| **Suchintention** | Informational & Transaktional / Beratend (Gesetzliche Pflichten prüfen, Ersparnis berechnen, Reparaturbonus sichern, Ersatzteile/Werkstätten finden) |
| **Projekt-Modus** | **Multi-Provider & Nischen-Portal** (Fokussierter Ratgeber mit Geräte-Finder, Rechner, Förderungs-Check und Partnerlinks) |
| **Technologie-Stack** | React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons |
| **Datenschutz & CDN** | **100 % DSGVO-konform (Zero-CDN Policy)**, nativer System-Schriftarten-Stack, keine externen Google-Fonts |
| **Rechtliche Konformität** | Impressum gemäß § 5 DDG & § 18 MStV (Jens Kathe, Kassel), strikter Verzicht auf unlautere Superlative/Testsiegel, UWG-sichere Partnerlink-Kennzeichnung (`* Partnerlink`), Modellrechnungshinweis (`* Modellrechnung`) |
| **Barrierefreiheit** | **WCAG AAA** konforme Schrift- und Button-Kontraste (min. 12:1 bei Amber-Buttons mit Deep Slate Text) |

---

## 2. Enthaltene Features & Architektur

1. **Hero-Sektion mit Nutzenversprechen & Schnell-Fakten**:
   - Bis zu 10 Jahre gesetzliche Ersatzteilpflicht
   - +12 Monate Gewährleistungsverlängerung bei Reparatur
   - Bis zu 200 € staatlicher Reparaturbonus
2. **Interaktiver Pflichten- & Rechte-Prüfer**:
   - Geräteauswahl (Smartphones, Waschmaschinen, Geschirrspüler, Kühlschränke, TV, Staubsauger, Laptops)
   - Altersabfrage (Gewährleistung vs. Nachgarantie)
   - Defektart (Akku, Display, Elektronik, Motor, Verschleiß, Software)
   - Ausgabe: Geltende EU-Verordnung, Vorhaltefristen, max. Lieferfristen, Softwaresperren-Verbot, Handlungsempfehlung
3. **Kosten- & Ökobilanz-Modellrechner**:
   - Dynamischer Schieberegler für Geräteneupreis, Reparaturkosten und Verlängerungsjahre
   - Automatische Einberechnung des staatlichen Reparaturbonus (50 % bis 200 €)
   - Ausgabe von Nettoersparnis (€), CO₂-Einsparung (kg) und vermiedenem Elektroschrott (kg)
   - Rechtssicherer Modellrechnungshinweis mit Asterisk
4. **Geräte- & Herstellerpflichten-Matrix**:
   - Strukturierte Tabelle aller Produktgruppen mit gesetzlichen Fristen und Zugangsregeln
   - Live-Suchfeld nach Bauteilen und Kategorien
5. **Staatlicher Reparaturbonus-Kompass**:
   - Detaillierte Übersicht der Förderprogramme (Thüringen, Sachsen, Berlin, Bundesinitiative)
   - Voraussetzungen, Höchstbeträge und 3-Schritte-Antragsleitfaden
6. **Geprüfte Service- & Lösungs-Partner**:
   - Kategorisierte Optionen: Ersatzteilversand, DIY-Anleitungen, autorisierte/freie Meisterbetriebe, Reparaturschutzbrief
   - Transparente Werbekennzeichnung (`* Partnerlink`)
7. **Juristischer Ratgeber**:
   - Do's and Don'ts bei Gerätedefekten
   - Klarstellung: Haben Verbraucher eine Pflicht zur Reparatur? (Nein, reines Hersteller- und Händlerrecht)
   - Steuervorteil nach § 35a EStG (bis zu 20 % der Handwerker-Arbeitskosten absetzbar)
8. **Umfassendes FAQ (Akkordeon)**:
   - 8 fundierte Fragen und Antworten zur EU-Richtlinie 2024/1799, BGB-Sachmängelhaftung und Ökodesign
9. **Rechtssichere Seiten**:
   - Vollständiges Impressum nach § 5 DDG & § 18 MStV
   - Datenschutzerklärung
10. **Mobile Sticky Bar**:
    - Erscheint auf Smartphones ab 400px Scroll-Tiefe mit Direkt-CTA zum Pflichten-Check

---

## 3. SEO & Structured Data (Schema.org)

In `index.html` sind vollständige JSON-LD Schemas integriert:
- `WebSite`
- `Organization`
- `Service` ("Reparaturpflicht- & Rechte-Prüfer")
- `BreadcrumbList`
- `FAQPage`

Zudem:
- Canonical URL: `https://reparaturpflicht.de/`
- robots.txt & sitemap.xml
- Optimierte OpenGraph Meta Tags & Twitter Cards
- Skalierbares SVG-Favicon

---

## 4. Vercel Deployment

Das Projekt ist 100 % bereit für das Vercel-Deployment.

### Lokaler Build-Test:
```bash
npm install
npm run build
```

### Vercel CLI Deployment:
```bash
# Temporäres Preview-Deployment erstellen:
vercel deploy --temporary

# Produktions-Deployment (nach Domain-Aufschaltung):
vercel --prod
```

Die `vercel.json` gewährleistet, dass alle SPA-Routen (inklusive `/impressum` und `/datenschutz`) ohne 404-Fehler direkt ausgeliefert werden.
