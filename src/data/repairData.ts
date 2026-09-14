import { DeviceCategory, DefectType, StateBonusProgram, RepairPartner, FaqItem } from '../types';

export const DEVICE_CATEGORIES: DeviceCategory[] = [
  {
    id: 'smartphone',
    name: 'Smartphones & Tablets',
    icon: 'Smartphone',
    badge: 'EU-Verordnung 2023/1670',
    sparePartsYears: 7,
    deliveryDaysMax: 10,
    whoCanRepair: 'allgemein_zugaenglich',
    whoCanRepairText: 'Verbraucher & freie Werkstätten (Displays, Akkus, Rückseiten)',
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2023/1670 & Recht auf Reparatur 2024/1799',
    legalRegulationCode: 'VO (EU) 2023/1670',
    warrantyExtensionMonths: 12,
    typicalParts: ['Displayglas & OLED-Panel', 'Akku / Batteriezelle', 'Ladebuchse (USB-C)', 'Kameramodul', 'Rückseitenabdeckung'],
    description: 'Hersteller sind verpflichtet, mindestens 7 Jahre nach Produktionsende Akkus, Displays, Kameras und Anschlüsse binnen maximal 10 Werktagen bereitzustellen. Software-Updates müssen mindestens 5 Jahre garantiert werden.'
  },
  {
    id: 'waschmaschine',
    name: 'Waschmaschinen & Trockner',
    icon: 'Shirt',
    badge: 'EU-Ökodesign 2019/2023',
    sparePartsYears: 10,
    deliveryDaysMax: 15,
    whoCanRepair: 'laien_und_profis',
    whoCanRepairText: 'Verbraucher (Tür, Dichtung, Filter) / Fachbetriebe (Motor, Heizstab)',
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2023',
    legalRegulationCode: 'VO (EU) 2019/2023 Anhang II',
    warrantyExtensionMonths: 12,
    typicalParts: ['Türscharniere & Bullaugendichtungen', 'Laugenpumpe & Flusensieb', 'Stoßdämpfer & Keilriemen', 'Heizstab & Temperatursensor', 'Elektronische Steuerplatine'],
    description: 'Für Waschmaschinen gilt eine gesetzliche Vorhaltepflicht von 10 Jahren ab dem letzten Vertriebsdatum. Einfache Teile müssen für Endkunden zugänglich sein, sicherheitsrelevante Komponenten für unabhängige Reparaturfachbetriebe.'
  },
  {
    id: 'geschirrspueler',
    name: 'Geschirrspüler',
    icon: 'Utensils',
    badge: 'EU-Ökodesign 2019/2022',
    sparePartsYears: 10,
    deliveryDaysMax: 15,
    whoCanRepair: 'laien_und_profis',
    whoCanRepairText: 'Verbraucher (Körbe, Sprüharme, Filter) / Fachbetriebe (Umwälzpumpe)',
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2022',
    legalRegulationCode: 'VO (EU) 2019/2022 Anhang II',
    warrantyExtensionMonths: 12,
    typicalParts: ['Sprüharme & Siebkombinationen', 'Türdichtungen & Federn', 'Ablaufschlauch & Aquastop', 'Umwälzpumpe mit Heizung', 'Dosierkammer & Schalter'],
    description: 'Hersteller müssen Ersatzteile mindestens 10 Jahre vorhalten. Die Demontage muss mit allgemein handelsüblichem Werkzeug ohne Spezialkleber möglich sein.'
  },
  {
    id: 'kuehlgeraet',
    name: 'Kühlschränke & Gefriergeräte',
    icon: 'Snowflake',
    badge: 'EU-Ökodesign 2019/2019',
    sparePartsYears: 10,
    deliveryDaysMax: 15,
    whoCanRepair: 'laien_und_profis',
    whoCanRepairText: 'Verbraucher (Griffe, Schalen, Dichtungen) / Profis (Thermostat, Kompressor)',
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2019',
    legalRegulationCode: 'VO (EU) 2019/2019 Anhang II',
    warrantyExtensionMonths: 12,
    typicalParts: ['Türdichtungen & Türgriffe', 'Glasplatten, Schubladen & Scharniere', 'Thermostate & Temperatursensoren', 'LED-Innenbeleuchtung', 'Kompressor-Steuerelektronik'],
    description: 'Dichtungen und Griffe müssen für Endnutzer ohne Spezialwerkzeug austauschbar sein. Gesetzliche Ersatzteilpflicht beträgt 7 bis 10 Jahre nach Inverkehrbringen.'
  },
  {
    id: 'tv_monitor',
    name: 'Fernseher & Displays',
    icon: 'Tv',
    badge: 'EU-Ökodesign 2019/2021',
    sparePartsYears: 7,
    deliveryDaysMax: 15,
    whoCanRepair: 'laien_und_profis',
    whoCanRepairText: 'Verbraucher (Kabel, Netzteile, Fernbedienung) / Profis (Mainboard, LED-Backlight)',
    legalFramework: 'EU-Ökodesign-Verordnung (EU) 2019/2021',
    legalRegulationCode: 'VO (EU) 2019/2021 Anhang II',
    warrantyExtensionMonths: 12,
    typicalParts: ['Externe Netzteile & Stromkabel', 'Fernbedienungen & Standfüße', 'Mainboard & Netzteil-Platine', 'LED-Hintergrundbeleuchtung (Backlight)', 'T-Con Board'],
    description: 'Ersatzteile müssen für mindestens 7 Jahre verfügbar gehalten werden. Der Zugang zu Reparaturanleitungen muss für Fachbetriebe diskriminierungsfrei gewährleistet sein.'
  },
  {
    id: 'staubsauger',
    name: 'Staubsauger & Saugroboter',
    icon: 'Wind',
    badge: 'EU-Ökodesign & ESPR',
    sparePartsYears: 7,
    deliveryDaysMax: 10,
    whoCanRepair: 'allgemein_zugaenglich',
    whoCanRepairText: 'Verbraucher & freie Werkstätten (Schläuche, Bürstenwalzen, Akkus)',
    legalFramework: 'EU-Ökodesign-Verordnung & ESPR Rahmenverordnung',
    legalRegulationCode: 'ESPR / Ökodesign',
    warrantyExtensionMonths: 12,
    typicalParts: ['Akku & Ladestation', 'Saugschlauch & Teleskoprohr', 'Bürstenwalzen & Bodendüsen', 'Filterkassetten & Motorschutzfilter', 'Saugmotor & Schalter'],
    description: 'Verschleißteile und Batterien müssen leicht zugänglich und austauschbar sein. Hersteller müssen Ersatzteile mindestens 7 Jahre ab Inverkehrbringen vorhalten.'
  },
  {
    id: 'laptop_it',
    name: 'Notebooks & Desktop-PCs',
    icon: 'Laptop',
    badge: 'EU ESPR / ESP-Regelung',
    sparePartsYears: 7,
    deliveryDaysMax: 10,
    whoCanRepair: 'allgemein_zugaenglich',
    whoCanRepairText: 'Verbraucher & IT-Werkstätten (SSD, RAM, Akku, Tastatur)',
    legalFramework: 'EU-Ökodesign für Computer & EU-Richtlinie 2024/1799',
    legalRegulationCode: 'VO (EU) 617/2013 & RL 2024/1799',
    warrantyExtensionMonths: 12,
    typicalParts: ['Akku / Lithium-Ionen-Batterie', 'SSD-Speicher & RAM-Module', 'Tastatur & Trackpad', 'Ladeanschluss & Display-Scharniere', 'Kühlerlüfter & Wärmeleitpaste'],
    description: 'Module wie Arbeitsspeicher, Massenspeicher und Akkus dürfen herstellerseitig nicht unlösbar verklebt sein, sofern der Standard dies technisch erlaubt.'
  }
];

export const DEFECT_TYPES: DefectType[] = [
  {
    id: 'akku',
    name: 'Akku / Batterieverschleiß',
    description: 'Verringerte Kapazität, schnelles Entladen oder Aufblähen der Zelle.',
    typicalCostRatio: 0.18,
    co2SavingsEstimateKg: 42
  },
  {
    id: 'display',
    name: 'Displaybruch / Glasdefekt / Bildfehler',
    description: 'Risse im Frontglas, Pixelfehler, Streifenbildung oder Berührungsunempfindlichkeit.',
    typicalCostRatio: 0.28,
    co2SavingsEstimateKg: 58
  },
  {
    id: 'elektronik',
    name: 'Elektronik / Steuerplatine / Sensorik',
    description: 'Fehlercodes, Gerät schaltet sich spontan ab, keine Reaktion auf Tastendruck.',
    typicalCostRatio: 0.25,
    co2SavingsEstimateKg: 85
  },
  {
    id: 'mechanik',
    name: 'Mechanik / Motor / Pumpe / Getriebe',
    description: 'Ungewöhnliche Schleif- oder Quietschgeräusche, Wasser wird nicht abgepumpt, Motor dreht nicht.',
    typicalCostRatio: 0.22,
    co2SavingsEstimateKg: 110
  },
  {
    id: 'verschleiss',
    name: 'Dichtung / Schlauch / Scharnier / Verschleiß',
    description: 'Leckagen, poröse Gummilippen, abgebrochene Halterungen oder Scharniere.',
    typicalCostRatio: 0.10,
    co2SavingsEstimateKg: 95
  },
  {
    id: 'software',
    name: 'Software / Firmware / Boot-Schleife',
    description: 'Gerät hängt beim Startvorgang, Update fehlgeschlagen, Verbindungsprobleme.',
    typicalCostRatio: 0.12,
    co2SavingsEstimateKg: 35
  }
];

export const STATE_BONUS_PROGRAMS: StateBonusProgram[] = [
  {
    state: 'Thüringen',
    status: 'aktiv',
    statusBadge: 'Regulär aktiv',
    maxAmountEur: 100,
    costCoveragePct: 50,
    minInvoiceEur: 50,
    officialBody: 'Thüringer Ministerium für Umwelt, Energie und Naturschutz (TMUEN)',
    description: 'Erstattung von 50 % der Reparaturrechnung (max. 100 € pro Person/Jahr; bei Selbstreparatur mit Ersatzteilkauf bis zu 100 € reine Materialkosten).',
    conditions: [
      'Hauptwohnsitz in Thüringen',
      'Mindestalter 18 Jahre',
      'Rechnung einer Fachwerkstatt oder Ersatzteil-Rechnung',
      'Reparatur eines haushaltsüblichen Elektrogeräts'
    ]
  },
  {
    state: 'Sachsen',
    status: 'aktiv',
    statusBadge: 'Regulär aktiv',
    maxAmountEur: 200,
    costCoveragePct: 50,
    minInvoiceEur: 50,
    officialBody: 'Sächsische Aufbaubank (SAB)',
    description: 'Gefördert werden 50 % der zuwendungsfähigen Reparaturkosten bis zu 200 € pro Kalenderjahr. Der Antrag erfolgt digital über das Förderportal der SAB.',
    conditions: [
      'Hauptwohnsitz im Freistaat Sachsen',
      'Mindestrechnungsbetrag 50 Euro brutto',
      'Reparatur durch ein im SAB-Verzeichnis registriertes Fachunternehmen',
      'Maximal 2 Reparaturen pro Person und Kalenderjahr'
    ]
  },
  {
    state: 'Berlin',
    status: 'aktiv',
    statusBadge: 'Aktiv / Tranchenverfahren',
    maxAmountEur: 200,
    costCoveragePct: 50,
    minInvoiceEur: 75,
    officialBody: 'IBB Business Team GmbH (Senatsverwaltung Berlin)',
    description: 'Bis zu 50 % Zuschuss zu Reparaturkosten (max. 200 €). Für Selbstreparaturen in Berliner Repair-Cafés wird der Ersatzteilkauf mit bis zu 200 € gefördert.',
    conditions: [
      'Erstwohnsitz im Land Berlin',
      'Reparatur durch gewerblichen Reparaturbetrieb oder Repair-Café',
      'Rechnungsstellung innerhalb der Förderperiode',
      'Privat genutztes Elektro- und Elektronikgerät'
    ]
  },
  {
    state: 'Bundesweites Förderprogramm (Deutschland)',
    status: 'in_planung',
    statusBadge: 'In gesetzlicher Ausarbeitung',
    maxAmountEur: 200,
    costCoveragePct: 50,
    minInvoiceEur: 50,
    officialBody: 'Bundesumweltministerium (BMUV) / Nationale Kreislaufwirtschaftsstrategie',
    description: 'Im Rahmen des Bundes-Aktionsprogramms für Reparierbarkeit und der nationalen Kreislaufwirtschaftsstrategie (NKWS) ist ein einheitlicher Bundes-Reparaturbonus nach Vorbild Thüringens und Österreichs in Vorbereitung.',
    conditions: [
      'Bundesweit einheitliche Förderrichtlinie geplant',
      'Verknüpfung mit der EU-Reparaturplattform',
      'Geltung für registrierte Betriebe und qualifizierte Selbstreparatur'
    ]
  }
];

export const REPAIR_PARTNERS: RepairPartner[] = [
  {
    id: 'ersatzteile-direkt',
    title: 'Original-Ersatzteile & Zubehör',
    category: 'ersatzteile',
    categoryLabel: 'Ersatzteil-Versand',
    partnerName: 'ErsatzteilDirect Portal',
    headline: 'Über 2 Mio. verifizierte Ersatzteile für Haushaltsgeräte & Elektronik',
    description: 'Spezialisierter Anbieter für originale und kompatible Ersatzteile führender Marken (Bosch, Siemens, Miele, Samsung, AEG, Bauknecht). Schneller Versand direkt aus Zentrallagern in Deutschland.',
    highlights: [
      'Teilesuche nach Gerätenummer (E-Nr. / Typenschild)',
      '14 Tage Rückgaberecht & Passgenauigkeits-Prüfung',
      'Schnellversand innerhalb 24-48 Stunden'
    ],
    ctaText: 'Passendes Ersatzteil finden *',
    partnerUrl: 'https://reparaturpflicht.de/go/ersatzteile',
    verifiedLabel: 'Führender Fachversand'
  },
  {
    id: 'diy-anleitungen',
    title: 'Schritt-für-Schritt Reparaturanleitungen & Werkzeuge',
    category: 'diy_anleitung',
    categoryLabel: 'DIY & Werkzeug',
    partnerName: 'Reparatur-Handbuch & Präzisionswerkzeug',
    headline: 'Kostenlose Demontage-Leitfäden, Video-Tutorials & Spezialbits',
    description: 'Umfassende, redaktionell geprüfte Reparatur-Leitfäden für Smartphones, Laptops und Kleingeräte. Modulare Werkzeug-Sets mit rutschfesten Schraubendrehern und Hebelwerkzeugen für schonendes Öffnen.',
    highlights: [
      'Über 80.000 bebilderte Schritt-für-Schritt-Anleitungen',
      'Praktische Einstufung des Schwierigkeitsgrads & Zeitbedarfs',
      'Magnetische Schraubenmatten gegen Verlust kleiner Bauteile'
    ],
    ctaText: 'Reparaturanleitung abrufen *',
    partnerUrl: 'https://reparaturpflicht.de/go/anleitungen',
    verifiedLabel: 'Open Source Know-how'
  },
  {
    id: 'fachwerkstatt-netzwerk',
    title: 'Zertifizierte Meisterbetriebe & freie Werkstätten',
    category: 'werkstatt',
    categoryLabel: 'Vor-Ort-Service',
    partnerName: 'Deutsches Reparatur-Fachnetzwerk',
    headline: 'Qualifizierte Techniker für Waschmaschinen, Spülmaschinen & Fernseher',
    description: 'Bundesweites Verzeichnis von Handwerksmeistern und autorisierten Reparatur-Dienstleistern. Kostenvoranschlag vor Reparaturbeginn und 12 Monate Garantie auf ausgeführte Reparaturarbeiten.',
    highlights: [
      'Transparente Anfahrts- und Diagnosepauschalen',
      'Fachgerechte Entsorgung von Altteilen nach ElektroG',
      'Erfüllt Bedingungen für den staatlichen Reparaturbonus'
    ],
    ctaText: 'Werkstatt in der Nähe anfragen *',
    partnerUrl: 'https://reparaturpflicht.de/go/werkstatt-finder',
    verifiedLabel: 'Meisterbetrieb-Netzwerk'
  },
  {
    id: 'geraeteschutz-reparatur',
    title: 'Reparaturkosten-Schutz & Langzeit-Garantie',
    category: 'versicherung',
    categoryLabel: 'Reparaturschutz',
    partnerName: 'Geräteschutzbrief Premium',
    headline: 'Schutz vor Reparaturkosten bei Verschleiß, Elektronik- & Sturzschäden',
    description: 'Absicherung von Neu- und Gebrauchtgeräten gegen unvorhergesehene Reparaturkosten. Übernahme von Material- und Arbeitskosten auch nach Ablauf der 2-jährigen Händlergewährleistung.',
    highlights: [
      'Übernahme von 100 % der Reparaturkosten bei versicherten Schäden',
      'Deckung auch bei Akku-Verschleiß und Feuchtigkeitsschäden',
      'Monatlich kündbare Tarife ohne lange Mindestlaufzeiten'
    ],
    ctaText: 'Reparaturschutz vergleichen *',
    partnerUrl: 'https://reparaturpflicht.de/go/reparaturschutz',
    verifiedLabel: 'TÜV-geprüfter Service'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'recht',
    question: 'Was besagt das Recht auf Reparatur (EU-Richtlinie 2024/1799) genau?',
    answer: 'Die EU-Richtlinie 2024/1799 (Recht auf Reparatur) stärkt Verbraucher und Fachbetriebe durch vier zentrale Pfeiler: 1. Hersteller müssen auch nach Ablauf der 2-jährigen Gewährleistung Reparaturen zu angemessenen Preisen und Fristen anbieten. 2. Entscheidet sich ein Verbraucher innerhalb der Gewährleistung für eine Reparatur statt für ein Ersatzgerät, verlängert sich die Sachmängelhaftung um zusätzliche 12 Monate. 3. Software-Sperren ("Part-Pairing") und vertragliche Hürden gegen freie Werkstätten und gebrauchte Ersatzteile werden untersagt. 4. Ein europäisches standardisiertes Reparatur-Informationsformular sorgt für transparente Kostenvoranschläge.'
  },
  {
    id: 'faq-2',
    category: 'recht',
    question: 'Ab wann gilt das europäische Recht auf Reparatur in Deutschland?',
    answer: 'Die EU-Richtlinie 2024/1799 ist Mitte 2024 in Kraft getreten. Die Bundesrepublik Deutschland und alle anderen EU-Staaten setzen die Richtlinie bis spätestens Sommer 2026 verbindlich in nationales Recht (insbesondere deutsches Kaufrecht und BGB) um. Wichtig für Verbraucher: Zahlreiche produktspezifische Ökodesign-Vorgaben für Ersatzteile (z. B. für Smartphones, Tablets, Waschmaschinen und Kühlschränke) gelten bereits jetzt unmittelbar.'
  },
  {
    id: 'faq-3',
    category: 'hersteller',
    question: 'Welche Geräte fallen unter das Recht auf Reparatur?',
    answer: 'Unter das Recht auf Reparatur fallen zunächst alle Produktgruppen mit bestehenden EU-Ökodesign-Reparaturvorgaben: Smartphones, Mobiltelefone, Tablets, Waschmaschinen, Haushalts-Wäschetrockner, Geschirrspüler, Kühlschränke und Gefriergeräte, Fernseher und elektronische Displays, Schweißgeräte sowie Staubsauger. Die EU-Kommission erweitert den Kreis der erfassten Elektrogeräte im Rahmen der Ökodesign-Rahmenverordnung (ESPR) kontinuierlich.'
  },
  {
    id: 'faq-4',
    category: 'recht',
    question: 'Haben Verbraucher in Deutschland eine rechtliche Pflicht zur Reparatur?',
    answer: 'Nein. Für Privatpersonen existiert in Deutschland kein Reparaturzwang. Wenn Ihr Gerät defekt ist, können Sie frei entscheiden, ob Sie es reparieren lassen, als Teilespender abgeben oder fachgerecht über den Wertstoffhof bzw. den Handel nach ElektroG entsorgen. Der Begriff "Reparaturpflicht" bezieht sich im juristischen Sinne auf Pflichten der Hersteller und Händler (z. B. Bevorratung von Ersatzteilen, Bereitstellung von Demontageanleitungen und Vorrang der Nacherfüllung im BGB-Kaufrecht).'
  },
  {
    id: 'faq-5',
    category: 'hersteller',
    question: 'Wie lange müssen Hersteller gesetzlich Ersatzteile vorhalten?',
    answer: 'Die Frist richtet sich nach der Ökodesign-Verordnung des jeweiligen Gerätetyps: Für Haushaltsgroßgeräte (Waschmaschinen, Geschirrspüler, Kühlgeräte) beträgt die Pflicht 7 bis 10 Jahre ab Produktionsstopp des Modells. Für Smartphones und Tablets gilt eine verbindliche Vorhaltefrist von 7 Jahren für Akkus, Displays und Kameras. Zudem dürfen Ersatzteile maximal 10 bis 15 Arbeitstage Lieferzeit in Anspruch nehmen.'
  },
  {
    id: 'faq-6',
    category: 'hersteller',
    question: 'Dürfen Hersteller Reparaturen durch freie Werkstätten oder Selbstreparatur blockieren?',
    answer: 'Nein. Die EU-Gesetzgebung untersagt Herstellern explizit jegliche Behinderung durch Software, Hardware oder Vertragsklauseln. Sogenanntes "Part-Pairing" (Serialisierung von Ersatzteilen), bei dem ein neues Bauteil ohne teure Hersteller-Freischaltung Fehlermeldungen erzeugt oder Funktionen abschaltet, ist nach den neuen Vorgaben unzulässig.'
  },
  {
    id: 'faq-7',
    category: 'bonus',
    question: 'Wie funktioniert der staatliche Reparaturbonus (bis zu 200 €)?',
    answer: 'Der Reparaturbonus erstattet Bürgern in teilnehmenden Bundesländern (z. B. Thüringen, Sachsen, Berlin) in der Regel 50 % der belegten Reparaturkosten bis zu 100 bzw. 200 Euro pro Kalenderjahr. In vielen Programmen werden auch die reinen Materialkosten für Selbstreparaturen (z. B. in Repair-Cafés) gefördert. Die Beantragung erfolgt einfach digital mit Hochladen der Werkstatt- oder Ersatzteilrechnung.'
  },
  {
    id: 'faq-8',
    category: 'kosten',
    question: 'Wann lohnt sich eine Reparatur im Vergleich zum Neukauf wirtschaftlich?',
    answer: 'Als Faustregel gilt: Liegen die Reparaturkosten unter 35 bis 40 % des Neupreises eines gleichwertigen Ersatzgeräts, lohnt sich die Instandsetzung wirtschaftlich fast immer. Zudem sinken die tatsächlichen Kosten pro Nutzungsjahr (TCO): Bei einer 140-€-Reparatur, die das Gerät 3 weitere Jahre sichert, zahlen Sie rechnerisch nur rund 47 € pro weiterem Nutzungsjahr – weit weniger als der Wertverlust eines neuen Geräts.'
  }
];
