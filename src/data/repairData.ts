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
    question: 'Haben Verbraucher in Deutschland eine rechtliche Pflicht zur Reparatur?',
    answer: 'Nein. Für Privatpersonen existiert in Deutschland kein Reparaturzwang. Wenn Ihr Gerät defekt ist, können Sie frei entscheiden, ob Sie es reparieren lassen, als Ersatzteilspender abgeben oder fachgerecht über den Wertstoffhof bzw. den Handel nach ElektroG entsorgen. Der Begriff "Reparaturpflicht" bezieht sich im juristischen Sinne auf Pflichten der Hersteller und Händler (z. B. Bevorratung von Ersatzteilen, Bereitstellung von Demontageanleitungen und Vorrang der Nacherfüllung im BGB-Kaufrecht).'
  },
  {
    id: 'faq-2',
    category: 'recht',
    question: 'Was regelt die EU-Richtlinie zum Recht auf Reparatur (EU 2024/1799)?',
    answer: 'Die im Jahr 2024 verabschiedete EU-Richtlinie 2024/1799 stärkt Verbraucherrechte grundlegend: 1. Hersteller müssen für bestimmte Produktgruppen (u. a. Haushaltsgeräte, Smartphones) Reparaturen auch nach Ablauf der gesetzlichen Gewährleistung zu angemessenen Preisen anbieten. 2. Wenn sich ein Verbraucher innerhalb der gesetzlichen 2-jährigen Gewährleistung für eine Reparatur statt eines Neugeräte-Austauschs entscheidet, verlängert sich die Sachmängelhaftung um weitere 12 Monate. 3. Software-Barrieren ("Part-Pairing"), die den Einbau von gebrauchten oder Dritthersteller-Ersatzteilen blockieren, werden untersagt.'
  },
  {
    id: 'faq-3',
    category: 'hersteller',
    question: 'Wie lange müssen Hersteller gesetzlich Ersatzteile vorhalten?',
    answer: 'Die genaue Frist richtet sich nach der europäischen Ökodesign-Verordnung für die jeweilige Geräteart: Für Waschmaschinen, Haushaltsgeschirrspüler und Kühlgeräte beträgt die Frist 7 bis 10 Jahre nach dem Inverkehrbringen des letzten Geräts der Baureihe. Für Smartphones und Tablets gilt ab Sommer 2025 eine verbindliche Bereithaltung von 7 Jahren für sicherheits- und funktionsrelevante Komponenten. Zudem dürfen Ersatzteile maximal 10 bis 15 Arbeitstage Lieferzeit in Anspruch nehmen.'
  },
  {
    id: 'faq-4',
    category: 'hersteller',
    question: 'Dürfen Hersteller Reparaturen durch freie Werkstätten oder Laien blockieren?',
    answer: 'Nein. Die EU-Gesetzgebung verbietet es Herstellern explizit, Reparaturen durch vertragliche Klauseln, Hard- oder Software-Mechanismen zu behindern. Sogenannte Serialisierungen ("Part-Pairing"), bei denen ein ausgetauschtes Display oder ein neuer Akku ohne herstellereigene Kalibrier-Software Fehlermeldungen wirft oder den Dienst verweigert, verstoßen gegen die neuen EU-Vorgaben.'
  },
  {
    id: 'faq-5',
    category: 'bonus',
    question: 'Wie funktioniert der Reparaturbonus und wer hat Anspruch darauf?',
    answer: 'Der Reparaturbonus ist ein Zuschuss der Bundesländer (z. B. Thüringen, Sachsen, Berlin) für Bürger mit Hauptwohnsitz im jeweiligen Bundesland. Gefördert werden in der Regel 50 % der belegten Reparaturrechnung bis zu maximal 100 bis 200 Euro pro Person und Jahr. Häufig werden auch Materialkosten für Selbstreparaturen gefördert, sofern die Ersatzteilrechnung vorgelegt wird. Die Einreichung erfolgt digital über das zuständige Förderportal.'
  },
  {
    id: 'faq-6',
    category: 'kosten',
    question: 'Wann lohnt sich eine Reparatur im Vergleich zum Neukauf wirtschaftlich?',
    answer: 'Als bewährte Faustformel gilt: Liegen die Reparaturkosten unter 30 bis 40 Prozent des aktuellen Wiederbeschaffungswertes eines vergleichbaren Neugeräts, ist die Reparatur in den allermeisten Fällen wirtschaftlich vorteilhaft. Bei hochwertigen Haushaltsgeräten (z. B. von Miele oder Bosch) lohnt sich eine Reparatur oft selbst bei höheren Kosten, da die robuste Mechanik für eine Lebensdauer von 15 bis 20 Jahren ausgelegt ist.'
  },
  {
    id: 'faq-7',
    category: 'kosten',
    question: 'Welchen ökologischen Nutzen bringt das Reparieren tatsächlich?',
    answer: 'Die Herstellung von elektronischen Geräten verursacht zwischen 70 und 85 Prozent des gesamten Lebenszyklus-CO₂-Fußabdrucks (insbesondere durch Halbleiterproduktion, Metallabbau und globale Lieferketten). Durch die Verlängerung der Nutzungsdauer eines Smartphones um nur zwei Jahre können im Schnitt rund 50 kg CO₂e eingespart werden; bei einer Waschmaschine sind es über 100 kg CO₂e und bis zu 70 kg vermiedener Elektroschrott.'
  },
  {
    id: 'faq-8',
    category: 'recht',
    question: 'Welche Rechte habe ich innerhalb der ersten 2 Jahre nach dem Kauf?',
    answer: 'Innerhalb der ersten 2 Jahre greift die gesetzliche Sachmängelhaftung (Gewährleistung) gegenüber dem Verkäufer (§ 437 BGB). In den ersten 12 Monaten gilt die Beweislastumkehr zugunsten des Käufers: Es wird vermutet, dass der Mangel bereits beim Kauf vorlag. Sie haben als Käufer das Recht, zwischen Nachbesserung (Reparatur) oder Nachlieferung (Ersatzgerät) zu wählen, sofern die gewählte Variante für den Verkäufer nicht unverhältnismäßig teuer ist.'
  }
];
