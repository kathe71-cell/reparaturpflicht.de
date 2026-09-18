import { DeviceCategory, DefectType, StateBonusProgram, FaqItem } from '../types';

export const DEVICE_CATEGORIES: DeviceCategory[] = [
  {
    id: 'waschmaschine',
    name: 'Waschmaschinen & Waschtrockner',
    subCategoryText: 'Haushaltswaschmaschinen nach VO (EU) 2019/2023',
    icon: 'Shirt',
    badge: 'VO (EU) 2019/2023',
    hasEcodesignObligation: true,
    sparePartsYears: 10,
    sparePartsYearsText: '10 Jahre',
    deliveryDaysMax: 15,
    deliveryDaysText: 'max. 15 Werktage',
    whoCanRepair: 'getrennt_nach_bauteil',
    whoCanRepairText: 'Verbraucher (Tür, Dichtung, Filter, Scharniere) / Fachbetriebe (Motor, Trommel, Platine)',
    consumerParts: [
      'Türen, Türscharniere und Türdichtungen',
      'Andere Dichtungen und Türverriegelungsbaugruppen',
      'Kunststoffzubehör wie Waschmittelbehälter'
    ],
    proParts: [
      'Motor und Motorbürsten',
      'Übertragung zwischen Motor und Trommel',
      'Laugenpumpen, Stoßdämpfer und Federn',
      'Waschtrommel, Trommellager und Heizaggregate',
      'Steuerelektronik und Anzeige-Leiterplatten'
    ],
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2023 Anhang II',
    legalRegulationCode: 'VO (EU) 2019/2023',
    primarySourceUrl: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32019R2023',
    applicationDate: '01.03.2021',
    startOfTimelineText: 'Ab Inverkehrbringen des letzten Exemplars des Modells',
    description: '10 Jahre Ersatzteilbereitstellung ab Inverkehrbringen des letzten Exemplars des Modells. Einfache Komponenten für Endnutzer ohne Spezialwerkzeug, sicherheitsrelevante Bauteile für professionelle Reparateure.'
  },
  {
    id: 'geschirrspueler',
    name: 'Haushaltsgeschirrspüler',
    subCategoryText: 'Geschirrspüler nach VO (EU) 2019/2022',
    icon: 'Utensils',
    badge: 'VO (EU) 2019/2022',
    hasEcodesignObligation: true,
    sparePartsYears: 10,
    sparePartsYearsText: '10 Jahre',
    deliveryDaysMax: 15,
    deliveryDaysText: 'max. 15 Werktage',
    whoCanRepair: 'getrennt_nach_bauteil',
    whoCanRepairText: 'Verbraucher (Türscharniere, Dichtungen, Sprüharme, Filter) / Fachbetriebe (Pumpe, Heizung, Platine)',
    consumerParts: [
      'Türscharniere und Türdichtungen',
      'Sprüharme, Ablauf- und Innenfilter',
      'Geschirr- und Besteckkörbe sowie Zubehör'
    ],
    proParts: [
      'Umwälzpumpe, Ablaufpumpe und Heizungselemente',
      'Schläuche und Dichtungselemente',
      'Schaltbretter, Displays und Steuerelektronik'
    ],
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2022 Anhang II',
    legalRegulationCode: 'VO (EU) 2019/2022',
    primarySourceUrl: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32019R2022',
    applicationDate: '01.03.2021',
    startOfTimelineText: 'Ab Inverkehrbringen des letzten Exemplars des Modells',
    description: 'Ersatzteilbereitstellung über 10 Jahre ab Inverkehrbringen des letzten Exemplars des Modells. Demontierbarkeit mit marktüblichem Werkzeug vorgeschrieben.'
  },
  {
    id: 'kuehlgeraet',
    name: 'Kühl- & Gefriergeräte',
    subCategoryText: 'Kühlgeräte nach VO (EU) 2019/2019',
    icon: 'Snowflake',
    badge: 'VO (EU) 2019/2019',
    hasEcodesignObligation: true,
    sparePartsYears: 10,
    sparePartsYearsText: 'Türdichtungen: min. 10 J. / Sonstige Teile (Thermostate, Platinen, Griffe, Scharniere, Ablagen): min. 7 J.',
    deliveryDaysMax: 15,
    deliveryDaysText: 'max. 15 Werktage',
    whoCanRepair: 'getrennt_nach_bauteil',
    whoCanRepairText: 'Türdichtungen (min. 10 Jahre, Verbraucher) / Türgriffe, Scharniere, Schalen (min. 7 Jahre, Verbraucher) / Thermostate, Sensoren, Platinen (min. 7 Jahre, Fachbetriebe)',
    consumerParts: [
      'Türdichtungen (mindestens 10 Jahre verfügbar)',
      'Türgriffe, Türscharniere, Schalen, Körbe und Einschübe (mindestens 7 Jahre verfügbar)'
    ],
    proParts: [
      'Thermostate, Temperatursensoren und Leiterplatten (mindestens 7 Jahre verfügbar)',
      'Lichtquellen, Kompressoren und Kältekreislauf-Komponenten (mindestens 7 Jahre verfügbar)'
    ],
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2019 Anhang II',
    legalRegulationCode: 'VO (EU) 2019/2019',
    primarySourceUrl: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32019R2019',
    applicationDate: '01.03.2021',
    startOfTimelineText: 'Ab Inverkehrbringen des letzten Exemplars des Modells',
    description: 'VO (EU) 2019/2019 Anhang II: Türdichtungen mindestens 10 Jahre verfügbar; Thermostate, Temperatursensoren, Platinen, Lichtquellen, Türgriffe, Scharniere und Ablagen mindestens 7 Jahre ab Inverkehrbringen des letzten Exemplars des Modells.'
  },
  {
    id: 'trockner',
    name: 'Haushalts-Wäschetrockner',
    subCategoryText: 'Wäschetrockner nach VO (EU) 2023/2533',
    icon: 'Wind',
    badge: 'VO (EU) 2023/2533',
    hasEcodesignObligation: true,
    sparePartsYears: 10,
    sparePartsYearsText: '10 Jahre (ab 01.07.2025)',
    deliveryDaysMax: 15,
    deliveryDaysText: 'max. 15 Werktage',
    whoCanRepair: 'getrennt_nach_bauteil',
    whoCanRepairText: 'Verbraucher (Tür, Filter, Scharniere) / Fachbetriebe (Wärmepumpe, Motor, Trommel)',
    consumerParts: [
      'Türen, Türdichtungen und Türscharniere',
      'Flusensiebe, Kondensatbehälter und Abdeckungen'
    ],
    proParts: [
      'Wärmepumpenaggregate, Gebläsemotoren',
      'Trommel und Trommellagerung',
      'Steuerelektronik und Sensoren'
    ],
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2023/2533',
    legalRegulationCode: 'VO (EU) 2023/2533',
    primarySourceUrl: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32023R2533',
    applicationDate: '01.07.2025',
    startOfTimelineText: 'Gilt ab 1. Juli 2025 für neu in Verkehr gebrachte Wäschetrockner',
    description: 'Spezifische Ökodesign-Verordnung gilt ab 1. Juli 2025 mit 10-jähriger Ersatzteilpflicht ab Inverkehrbringen des letzten Exemplars des Modells.'
  },
  {
    id: 'tv_monitor',
    name: 'Fernseher & elektronische Displays',
    subCategoryText: 'Displays & TVs nach VO (EU) 2019/2021',
    icon: 'Tv',
    badge: 'VO (EU) 2019/2021',
    hasEcodesignObligation: true,
    sparePartsYears: 7,
    sparePartsYearsText: '7 Jahre',
    deliveryDaysMax: 15,
    deliveryDaysText: 'max. 15 Werktage',
    whoCanRepair: 'getrennt_nach_bauteil',
    whoCanRepairText: 'Verbraucher (Externe Netzteile, Fernbedienung, Standfuß) / Fachbetriebe (Mainboard, Backlight)',
    consumerParts: [
      'Externe Netzteile und externe Kabel',
      'Fernbedienungen, Standfüße und Halterungen'
    ],
    proParts: [
      'Interne Netzteile und Stromversorgungsplatinen',
      'Mainboards, T-Con-Boards und Signalprozessoren',
      'LED-Hintergrundbeleuchtung (Backlight-Stripes)'
    ],
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2021 Anhang II',
    legalRegulationCode: 'VO (EU) 2019/2021',
    primarySourceUrl: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32019R2021',
    applicationDate: '01.03.2021',
    startOfTimelineText: 'Ab Inverkehrbringen des letzten Exemplars des Modells',
    description: '7 Jahre Ersatzteilvorhaltung ab Inverkehrbringen des letzten Exemplars des Modells.'
  },
  {
    id: 'smartphone',
    name: 'Smartphones & Tablets',
    subCategoryText: 'Smartphones & Tablets nach VO (EU) 2023/1670',
    icon: 'Smartphone',
    badge: 'Gilt ab 20.06.2025',
    hasEcodesignObligation: true,
    sparePartsYears: 7,
    sparePartsYearsText: '7 Jahre (ab 20.06.2025)',
    deliveryDaysMax: 10,
    deliveryDaysText: '5 Werktage (Jahre 1–5) / 10 Werktage (Jahre 6–7)',
    whoCanRepair: 'laien_und_profis',
    whoCanRepairText: 'Endnutzer & freie Werkstätten (Lieferfrist: 5 Werktage in den ersten 5 Jahren, 10 Werktage in den Jahren 6–7 der Verfügbarkeitsperiode)',
    consumerParts: [
      'Batterien / Akkus (7 Jahre verfügbar)',
      'Display-Baugruppen (7 Jahre verfügbar)',
      'Kameramodule (Front & Rückseite, 7 Jahre verfügbar)',
      'Ladebuchsen USB-C (7 Jahre verfügbar)',
      'Mechanische Tasten, Mikrofone & Lautsprecher (7 Jahre verfügbar)'
    ],
    proParts: [
      'Hauptplatinen / SoCs (modellabhängig)'
    ],
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2023/1670 Anhang II',
    legalRegulationCode: 'VO (EU) 2023/1670',
    primarySourceUrl: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32023R1670',
    applicationDate: '20.06.2025',
    startOfTimelineText: 'Gilt ab 20. Juni 2025 für neu in Verkehr gebrachte Smartphones/Tablets',
    description: 'VO (EU) 2023/1670 Anhang II: 7 Jahre Ersatzteilverfügbarkeit ab Inverkehrbringen des letzten Exemplars des Modells. Lieferfrist: 5 Werktage in den ersten 5 Jahren nach Ende des Inverkehrbringens, 10 Werktage in den verbleibenden 2 Jahren (Jahre 6–7).'
  },
  {
    id: 'laptop_it',
    name: 'Laptops & Desktop-PCs',
    subCategoryText: 'Computer nach VO (EU) 617/2013 (Nur Energieeffizienz)',
    icon: 'Laptop',
    badge: 'Keine Ökodesign-Ersatzteilpflicht',
    hasEcodesignObligation: false,
    sparePartsYears: 0,
    sparePartsYearsText: 'Keine gesetzliche Pflicht',
    deliveryDaysMax: 0,
    deliveryDaysText: '—',
    whoCanRepair: 'keine_spezifische_pflicht',
    whoCanRepairText: 'Keine gesetzliche Vorhaltepflicht für Ersatzteile bei Computern nach Ökodesign-Recht',
    consumerParts: [
      'Freiwillige Angebote der Hersteller oder Dritthersteller (z. B. RAM, SSD, Akku)'
    ],
    proParts: [
      'Herstellerspezifische Platinen & Grafikchips'
    ],
    legalFramework: 'VO (EU) 617/2013 (Energieeffizienz) – Keine Ökodesign-Ersatzteilpflicht',
    legalRegulationCode: 'VO (EU) 617/2013',
    primarySourceUrl: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32013R0617',
    applicationDate: 'Geltendes Recht (Keine Ersatzteilauflage)',
    startOfTimelineText: 'Kein gesetzlicher Stichtag für Ersatzteilbevorratung',
    description: 'Für Notebooks und PCs gelten EU-Energieeffizienzregeln, aber derzeit KEINE gesetzliche Ökodesign-Ersatzteilpflicht wie bei Haushaltsgroßgeräten. Verfügbarkeit hängt vom Hersteller ab.'
  }
];

export const DEFECT_TYPES: DefectType[] = [
  {
    id: 'displaybreak',
    name: 'Sturzschaden / Displaybruch (Eigenverschulden)',
    description: 'Äußere Krafteinwirkung, Risse im Glas oder OLED durch Unfall/Sturz.',
    isUsuallySelfInflicted: true
  },
  {
    id: 'akku',
    name: 'Akku-Verschleiß / Kapazitätsverlust',
    description: 'Verringerte Laufzeit nach längerer Nutzung (normaler Altersverschleiß).',
    isUsuallySelfInflicted: false
  },
  {
    id: 'elektronik',
    name: 'Elektronik- / Platinendefekt ohne Äußere Einwirkung',
    description: 'Gerät schaltet spontan ab oder zeigt Fehlercode (Mangelursache unklar).',
    isUsuallySelfInflicted: false
  },
  {
    id: 'mechanik',
    name: 'Pumpe / Motor / Mechanischer Defekt',
    description: 'Blockade oder Defekt mechanischer Bauteile ohne äußeres Verschulden.',
    isUsuallySelfInflicted: false
  }
];

export const STATE_BONUS_PROGRAMS: StateBonusProgram[] = [
  {
    id: 'sachsen',
    state: 'Sachsen',
    status: 'aktiv',
    statusBadge: 'Aktiv (SAB Förderportal)',
    maxAmountEur: 200,
    costCoveragePct: 50,
    minInvoiceEur: 115,
    maxRepairsPerYear: 2,
    officialBody: 'Sächsische Aufbaubank (SAB)',
    officialUrl: 'https://www.sab.sachsen.de/reparaturbonus',
    auditDate: '17. September 2026',
    description: 'Gefördert werden 50 % der förderfähigen Reparaturkosten bis max. 200 € pro Reparatur. Mindestrechnungsbetrag 115 € brutto bei einem im SAB-Portal registrierten Fachunternehmen. Max. 2 Reparaturen pro Person und Kalenderjahr.',
    conditions: [
      'Hauptwohnsitz im Freistaat Sachsen',
      'Mindestrechnungsbetrag 115 Euro brutto',
      'Reparatur durch ein im SAB-Förderportal gelistetes Fachunternehmen',
      'Maximal 2 Anträge pro Person und Kalenderjahr'
    ]
  },
  {
    id: 'berlin',
    state: 'Berlin',
    status: 'gestoppt_budget_erschoepft',
    statusBadge: 'Antragsstopp / Budget erschöpft',
    maxAmountEur: 200,
    costCoveragePct: 50,
    minInvoiceEur: 75,
    officialBody: 'IBB Business Team GmbH (Senatsverwaltung Berlin)',
    officialUrl: 'https://www.ibb-businessteam.de/reparaturbonus/',
    auditDate: '17. September 2026',
    description: 'Aktuell Antragsstopp: Das Budget der aktuellen Tranche ist aufgebraucht. Neue Anträge können derzeit nicht eingereicht werden.',
    conditions: [
      'Erstwohnsitz im Land Berlin',
      'Aktuell Antragsstopp wegen vorübergehender Budgeterschöpfung',
      'Prüfdatum: September 2026'
    ]
  },
  {
    id: 'thueringen',
    state: 'Thüringen',
    status: 'beendet',
    statusBadge: 'Programm beendet',
    maxAmountEur: 100,
    costCoveragePct: 50,
    minInvoiceEur: 50,
    officialBody: 'Thüringer Ministerium für Umwelt, Energie und Naturschutz (TMUEN)',
    officialUrl: 'https://umwelt.thueringen.de/',
    auditDate: '17. September 2026',
    description: 'Das Thüringer Förderprogramm ist nach Auslauf der Haushaltsmittel beendet. Es können keine neuen Anträge gestellt werden.',
    conditions: [
      'Förderprogramm aktuell eingestellt',
      'Keine Antragstellung mehr möglich (Stand September 2026)'
    ]
  },
  {
    id: 'bundesweit',
    state: 'Bundesweit (Deutschland)',
    status: 'kein_programm',
    statusBadge: 'Kein bundesweites Gesetz',
    maxAmountEur: 0,
    costCoveragePct: 0,
    minInvoiceEur: 0,
    officialBody: 'Bundesministerium für Umwelt / Verbraucherschutz (BMUV)',
    officialUrl: 'https://www.bmuv.de/',
    auditDate: '17. September 2026',
    description: 'Ein bundesweiter Reparaturbonus existiert in Deutschland derzeit nicht. Zuschüsse beschränken sich auf Bundesländer mit eigenen Förderrichtlinien.',
    conditions: [
      'Keine bundesweit einheitliche Förderprämie',
      'Gewährung abhängig vom jeweiligen Wohnsitz-Bundesland'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'recht',
    question: 'Welche juristische Unterscheidung besteht zwischen Gewährleistung und Ersatzteilpflicht?',
    answer: 'Die gesetzliche Gewährleistung (Sachmängelhaftung nach § 437 BGB) richtet sich ausschließlich gegen den Verkäufer (Händler) und gilt 2 Jahre ab Übergabe der Ware. Sie greift nur bei Mängeln, die bereits bei Gefahrübergang vorlagen (nicht bei Unfall oder Sturz). Die herstellerseitige Ersatzteilbereitstellung (EU-Ökodesign) verpflichtet hingegen den Hersteller/Importeur, Ersatzteile über 7 bis 10 Jahre vorzuhalten – unabhängig davon, wer die Reparatur auf eigene Kosten durchführt.',
    citation: 'BGB § 437, § 438, § 477 vs. EU-Ökodesign-Verordnungen'
  },
  {
    id: 'faq-2',
    category: 'recht',
    question: 'Sind Sturzschäden oder selbst verursachte Displaybrüche über die Gewährleistung abgedeckt?',
    answer: 'Nein. Mängel, die durch unsachgemäße Behandlung, Sturz, Feuchtigkeit oder Unfälle nach dem Kauf entstehen, stellen keinen Sachmangel im Sinne des § 434 BGB dar. Der Verkäufer haftet hierfür nicht. Verbraucher können solche Schäden nur auf eigene Kosten reparieren lassen oder über eine freiwillige Garantie/Versicherung abwickeln.',
    citation: 'BGB § 434 Abs. 1'
  },
  {
    id: 'faq-3',
    category: 'hersteller',
    question: 'Gilt das EU-Recht auf Reparatur (RL 2024/1799) für Verträge vor dem 31.07.2026?',
    answer: 'Die EU-Richtlinie 2024/1799 gewährt den Mitgliedstaaten eine Übergangsfrist zur nationalen Umsetzung bis zum 31. Juli 2026. Neue Ansprüche (wie der Anspruch auf herstellerseitige Reparatur nach Garantieablauf oder die 12-monatige Gewährleistungsverlängerung nach Reparatur) finden primär auf Kaufverträge und Reparaturverlangen nach dem nationalen Inkrafttreten Anwendung.',
    citation: 'Richtlinie (EU) 2024/1799 Art. 18 & 19'
  },
  {
    id: 'faq-4',
    category: 'hersteller',
    question: 'Gibt es für Laptops, Desktop-PCs oder Saugroboter eine gesetzliche Ersatzteilpflicht?',
    answer: 'Für Laptops und Desktop-PCs gelten derzeit EU-Energieeffizienzregeln (VO 617/2013), aber bisher KEINE verbindliche Ökodesign-Ersatzteilvorhaltepflicht wie bei Haushaltsgroßgeräten. Ebenso sind Saugroboter noch nicht von einer spezifischen 7- bis 10-jährigen Ersatzteil-Lieferpflicht abgedeckt.',
    citation: 'VO (EU) 617/2013 & EU-Ökodesign-Arbeitsprogramm'
  },
  {
    id: 'faq-5',
    category: 'bonus',
    question: 'Wo ist der Reparaturbonus aktuell in Deutschland aktiv?',
    answer: 'Aktuell ist ein Reparaturbonus nur im Freistaat Sachsen über die Sächsische Aufbaubank (SAB) aktiv (Mindestrechnung 115 € brutto bei einem registrierten Fachunternehmen, 50 % Erstattung bis max. 200 €). In Thüringen ist das Programm beendet; in Berlin gilt wegen Budgeterschöpfung ein Antragsstopp. Ein bundesweiter Bonus existiert nicht.',
    citation: 'SAB Förderrichtlinie Reparaturbonus Sachsen 2026'
  }
];
