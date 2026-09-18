import React, { useState } from 'react';
import {
  Smartphone,
  Shirt,
  Utensils,
  Snowflake,
  Tv,
  Wind,
  Laptop,
  AlertCircle,
  Wrench,
  HelpCircle,
  ExternalLink,
  UserCheck,
  Building2,
  Calendar,
  Info
} from 'lucide-react';
import { DEVICE_CATEGORIES, DEFECT_TYPES } from '../data/repairData';
import { DeviceCategory, DefectType, SellerType, DefectCause, DutyCheckResult, ModelReleasePeriod } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Smartphone,
  Shirt,
  Utensils,
  Snowflake,
  Tv,
  Wind,
  Laptop,
};

export const DutyChecker: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DeviceCategory>(DEVICE_CATEGORIES[0]);
  const [purchaseDate, setPurchaseDate] = useState<string>('2025-03-15');
  const [sellerType, setSellerType] = useState<SellerType>('gewerblich');
  const [selectedDefect, setSelectedDefect] = useState<DefectType>(DEFECT_TYPES[0]);
  const [defectCause, setDefectCause] = useState<DefectCause>('materialfehler_ohne_einwirkung');
  const [modelReleasePeriod, setModelReleasePeriod] = useState<ModelReleasePeriod>('unbekannt');

  const IconComponent = ICON_MAP[selectedCategory.icon] || Wrench;

  const getEcodesignNoteForCategory = (cat: DeviceCategory, modelRelease: ModelReleasePeriod): string => {
    if (!cat.hasEcodesignObligation) {
      return 'Keine gesetzliche Ökodesign-Ersatzteilpflicht für diese Produktklasse nach EU-Recht.';
    }
    if (cat.id === 'smartphone') {
      if (modelRelease === 'vor_20_06_2025') {
        return 'Keine gesetzliche Ökodesign-Ersatzteilpflicht nach VO (EU) 2023/1670 für Geräte mit Inverkehrbringen vor dem 20.06.2025. Ersatzteilbezug ist vom freiwilligen Angebot des Herstellers abhängig.';
      }
      if (modelRelease === 'unbekannt') {
        return 'Gesetzlicher Ersatzteilanspruch zeitlich nicht abschließend bestimmbar. VO (EU) 2023/1670 verpflichtet Hersteller erst für Geräte, die ab dem 20.06.2025 erstmals in der EU in Verkehr gebracht werden.';
      }
      return 'Verbindliche Ökodesign-Pflicht (VO EU 2023/1670): Der Hersteller muss 7 Jahre Ersatzteile ab Inverkehrbringen des letzten Exemplars des Modells bereitstellen (Lieferfrist 5 Werktage in den ersten 5 Jahren, 10 Werktage in den Jahren 6–7).';
    }
    return `Ergänzend Ökodesign-Pflicht (${cat.legalRegulationCode}): Ersatzteile ${cat.sparePartsYearsText} verfügbar (${cat.deliveryDaysText}).`;
  };

  // Evaluate exact legal cut-off dates
  const evaluateLegalStatus = (): DutyCheckResult => {
    // Parse exact purchase date
    const pDate = new Date(purchaseDate);
    const purchaseYear = pDate.getFullYear() || 2025;
    const purchaseMonth = pDate.getMonth() + 1 || 3;

    // Stichtag BGB RL 2024/1799 Umsetzung: Exakt am 31.07.2026
    const transpositionDate = new Date('2026-07-31T00:00:00');
    const userDate = new Date(`${purchaseDate}T00:00:00`);
    const isContractAfterTransposition = !isNaN(userDate.getTime()) && userDate.getTime() >= transpositionDate.getTime();

    // Estimate age in months relative to September 2026
    const monthsElapsed = (2026 - purchaseYear) * 12 + (9 - purchaseMonth);

    const conditionalNotes: string[] = [];

    // Cut-off note 1: BGB Transposition
    if (!isContractAfterTransposition) {
      conditionalNotes.push('Kaufvertrag vor dem Stichtag 31.07.2026: Nacherfüllung und Gewährleistung richten sich nach BGB in der bisherigen Fassung (keine automatische 12-monatige Sachmängelhaftungsverlängerung nach Art. 10 RL 2024/1799).');
    }

    // Cut-off note 2: Smartphone Ecodesign VO 2023/1670 Stichtag
    if (selectedCategory.id === 'smartphone') {
      if (modelReleasePeriod === 'vor_20_06_2025') {
        conditionalNotes.push('Gerät vor dem 20.06.2025 in Verkehr gebracht: Die Ökodesign-Ersatzteilpflicht nach VO (EU) 2023/1670 gilt nicht für vor diesem Stichtag in Verkehr gebrachte Geräte. Ersatzteilbezug ist vom freiwilligen Angebot abhängig.');
      } else if (modelReleasePeriod === 'unbekannt') {
        conditionalNotes.push('Inverkehrbringen des Geräts unbekannt: VO (EU) 2023/1670 gilt erst für Geräte, die ab dem 20.06.2025 in Verkehr gebracht werden. Der gesetzliche Ersatzteilanspruch ist zeitlich nicht abschließend bestimmbar.');
      }
    }

    // 1. Self-inflicted damage / accident
    if (defectCause === 'unfall_eigenverschulden' || selectedDefect.isUsuallySelfInflicted) {
      return {
        status: 'kein_gewaehrleistungsanspruch',
        statusBadge: 'Kein Gewährleistungsanspruch (Sturz / Eigenverschulden)',
        statusColor: 'rose',
        headline: 'Kein Sachmängelanspruch bei Unfall oder Sturzschaden',
        summary: 'Mängel oder Beschädigungen durch Sturz, Erschütterung, Feuchtigkeit oder unsachgemäße Handhabung nach Gefahrübergang stellen keinen Sachmangel (§ 434 BGB) dar.',
        sellerWarrantyNote: 'Der Verkäufer haftet nicht für Sturz- oder Unfallschäden.',
        manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
        rightToRepairNote: 'Das EU-Recht auf Reparatur gewährt keine kostenfreie Reparatur bei selbst verursachten Schäden.',
        conditionalNotes,
        disclaimer: 'Basiert auf der Angabe eines äußeren Sturz-/Unfallschadens. Rechtliche Einzelfallbeurteilung vorbehalten.'
      };
    }

    // 2. Private seller (§ 444 BGB)
    if (sellerType === 'privat') {
      return {
        status: 'kein_gewaehrleistungsanspruch',
        statusBadge: 'Gewährleistung meist ausgeschlossen (Privatkauf)',
        statusColor: 'amber',
        headline: 'Gesetzliche Gewährleistung bei Privatkauf in der Regel ausgeschlossen',
        summary: 'Beim Kauf von Privatpersonen wird die Sachmängelhaftung im Vertrag üblicherweise wirksam ausgeschlossen (§ 444 BGB).',
        sellerWarrantyNote: 'Der private Verkäufer haftet nur bei arglistig verschwiegenen Mängeln.',
        manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
        rightToRepairNote: 'Die Richtlinie RL 2024/1799 hebt den vertraglichen Gewährleistungsausschluss beim Privatkauf nicht auf.',
        conditionalNotes,
        disclaimer: 'Prüfen Sie den Kaufvertrag auf individuelle Gewährleistungsklauseln.'
      };
    }

    // 3. Unknown / Incomplete
    if (sellerType === 'unbekannt' || defectCause === 'unbekannt') {
      return {
        status: 'nicht_abschliessend_bestimmbar',
        statusBadge: 'Nicht abschließend bestimmbar',
        statusColor: 'slate',
        headline: 'Rechtlicher Status mangels vollständiger Angaben unklar',
        summary: 'Ohne genaue Kenntnis über den Verkäufertyp, den Nachweis des Mangels bei Gefahrübergang und die Mangelursache lässt sich kein eindeutiger rechtlicher Anspruch feststellen.',
        sellerWarrantyNote: 'Zur Prüfung der Gewährleistung (§ 437 BGB) wird der Nachweis benötigt, dass der Mangel nicht durch Abnutzung oder Einwirkung entstanden ist.',
        manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
        rightToRepairNote: 'Kein Anspruch auf kostenlose Abwicklung ohne Nachweis eines Sachmangels.',
        conditionalNotes,
        disclaimer: 'Vollständige Angaben zu Verkäufer und Mangelursache erforderlich.'
      };
    }

    // 4. Laptops & PCs (No Ecodesign Spare Part Duty)
    if (!selectedCategory.hasEcodesignObligation) {
      if (monthsElapsed <= 12) {
        return {
          status: 'gewaehrleistung_moeglich',
          statusBadge: 'Gewährleistung wahrscheinlich (Beweislastumkehr)',
          statusColor: 'emerald',
          headline: 'Händler-Gewährleistung greift voraussichtlich (§ 437 BGB)',
          summary: 'In den ersten 12 Monaten vermutet das Gesetz (§ 477 BGB), dass ein technischer Mangel bereits bei Übergabe vorlag.',
          sellerWarrantyNote: 'Der gewerbliche Verkäufer ist zur kostenlosen Nacherfüllung verpflichtet.',
          manufacturerEcodesignNote: 'Keine gesetzliche Ökodesign-Ersatzteilpflicht für Computer/Desktop-PCs nach EU-Recht.',
          rightToRepairNote: 'Hersteller sind nicht zu einer 7-jährigen Ersatzteilvorhaltung für PCs verpflichtet.',
          conditionalNotes,
          disclaimer: 'Voraussetzung ist ein technischer Mangel ohne äußere Einwirkung.'
        };
      } else {
        return {
          status: 'nicht_abschliessend_bestimmbar',
          statusBadge: 'Gewährleistung abgelaufen / Nachweis erforderlich',
          statusColor: 'amber',
          headline: 'Nach 12 bzw. 24 Monaten liegt die Beweislast beim Käufer',
          summary: 'Nach 12 Monaten muss der Käufer den Ursprungsmangel beweisen. Nach 24 Monaten ist die Händlergewährleistung abgelaufen.',
          sellerWarrantyNote: 'Nacherfüllungsanspruch erfordert den Nachweis des Ursprungsmangels durch den Verbraucher.',
          manufacturerEcodesignNote: 'Keine gesetzliche Ersatzteilpflicht für PCs/Notebooks nach Ökodesign-Verordnung.',
          rightToRepairNote: 'Reparatur durch Hersteller oder freie Werkstätten auf eigene Kosten möglich.',
          conditionalNotes,
          disclaimer: 'Prüfen Sie freiwillige Garantiebedingungen des Herstellers.'
        };
      }
    }

    // 5. Commercial seller & Ecodesign category
    if (monthsElapsed <= 12 && defectCause === 'materialfehler_ohne_einwirkung') {
      return {
        status: 'gewaehrleistung_moeglich',
        statusBadge: 'Gewährleistung sehr wahrscheinlich (Nacherfüllung)',
        statusColor: 'emerald',
        headline: 'Verkäufer zur kostenlosen Nacherfüllung verpflichtet (§ 437 BGB)',
        summary: 'Innerhalb der ersten 12 Monate gilt die Beweislastumkehr (§ 477 BGB). Der Händler haftet für den Nacherfüllungsaufwand.',
        sellerWarrantyNote: 'Recht auf kostenlose Reparatur oder Ersatzlieferung durch den Verkäufer.',
        manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
        rightToRepairNote: isContractAfterTransposition
          ? 'Bei Kaufvertrag ab 31.07.2026 verlängert eine Reparatur im Gewährleistungsfall die Sachmängelhaftung um 12 Monate.'
          : 'Kaufvertrag vor 31.07.2026: Gewährleistung richtet sich nach BGB in bisheriger Fassung.',
        conditionalNotes,
        disclaimer: 'Gilt bei Kauf bei einem gewerblichen Händler in der EU.'
      };
    }

    if (monthsElapsed <= 24) {
      return {
        status: 'nicht_abschliessend_bestimmbar',
        statusBadge: 'Gewährleistung aktiv (Beweislast beim Käufer)',
        statusColor: 'amber',
        headline: 'Gewährleistung läuft noch, Beweislast liegt beim Verbraucher',
        summary: 'Im 2. Gewährleistungsjahr (§ 438 BGB) kann der Händler einen Nachweis verlangen, dass der Mangel nicht durch Verschleiß entstanden ist.',
        sellerWarrantyNote: 'Nacherfüllungsanspruch besteht bei Mangel bei Gefahrübergang.',
        manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
        rightToRepairNote: 'Hersteller müssen Reparaturanleitungen und Software-Updates anbieten.',
        conditionalNotes,
        disclaimer: 'Nachweis des Ursprungsmangels erforderlich.'
      };
    }

    // Default: > 24 months
    if (selectedCategory.id === 'smartphone') {
      if (modelReleasePeriod === 'vor_20_06_2025') {
        return {
          status: 'nicht_abschliessend_bestimmbar',
          statusBadge: 'Gewährleistung abgelaufen – Keine Ökodesign-Pflicht (vor Stichtag)',
          statusColor: 'slate',
          headline: 'Händlergewährleistung abgelaufen – Keine gesetzliche Ökodesign-Teilepflicht',
          summary: 'Für Smartphones, deren Inverkehrbringen vor dem 20.06.2025 lag, gilt VO (EU) 2023/1670 nicht. Eine gesetzliche 7-jährige Ersatzteilpflicht besteht für vor diesem Stichtag in Verkehr gebrachte Geräte nicht.',
          sellerWarrantyNote: 'Kein gesetzlicher Nacherfüllungsanspruch mehr gegenüber dem Verkäufer.',
          manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
          rightToRepairNote: 'Reparatur durch freie Werkstätten oder den Hersteller auf eigene Kosten möglich.',
          conditionalNotes,
          disclaimer: 'Basiert auf der Angabe, dass das konkrete Gerät vor dem 20.06.2025 in Verkehr gebracht wurde.'
        };
      }
      if (modelReleasePeriod === 'unbekannt') {
        return {
          status: 'nicht_abschliessend_bestimmbar',
          statusBadge: 'Ersatzteilanspruch nicht abschließend bestimmbar',
          statusColor: 'slate',
          headline: 'Händlergewährleistung abgelaufen – Ökodesign-Status unklar',
          summary: 'Da das Inverkehrbringungsdatum des konkreten Smartphones unbekannt ist, lässt sich nicht feststellen, ob das Gerät unter die gesetzliche Ökodesign-Ersatzteilpflicht (ab 20.06.2025) fällt.',
          sellerWarrantyNote: 'Kein gesetzlicher Nacherfüllungsanspruch mehr gegenüber dem Verkäufer.',
          manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
          rightToRepairNote: 'Prüfen Sie das Erstinverkehrbringungsdatum des konkreten Geräts zur genauen Feststellung der Ersatzteilpflicht.',
          conditionalNotes,
          disclaimer: 'Datum des Inverkehrbringens des konkreten Geräts zur eindeutigen juristischen Einordnung erforderlich.'
        };
      }
    }

    return {
      status: 'ersatzteilpflicht_besteht',
      statusBadge: 'Gewährleistung abgelaufen – Ökodesign-Ersatzteilpflicht aktiv',
      statusColor: 'emerald',
      headline: 'Händlergewährleistung abgelaufen, Ökodesign-Ersatzteilpflicht besteht',
      summary: 'Nach 2 Jahren ist die Händlergewährleistung abgelaufen. Die gesetzliche Ersatzteilpflicht des Herstellers (ab Inverkehrbringen des letzten Exemplars des Modells) besteht fort.',
      sellerWarrantyNote: 'Kein gesetzlicher Nacherfüllungsanspruch mehr gegenüber dem Verkäufer.',
      manufacturerEcodesignNote: getEcodesignNoteForCategory(selectedCategory, modelReleasePeriod),
      rightToRepairNote: 'Nach RL (EU) 2024/1799 muss der Hersteller Reparaturen zu angemessenen Preisen auf Kosten des Verbrauchers anbieten.',
      conditionalNotes,
      disclaimer: 'Reparaturkosten sind vom Verbraucher zu tragen.'
    };
  };

  const result = evaluateLegalStatus();

  return (
    <section id="pflichten-check" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-emerald mb-3">Interaktiver Kompass</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Recht auf Reparatur: Differenzierter Rechte-Prüfer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ermitteln Sie Ihre Rechte unter Berücksichtigung von exaktem Kaufdatum, Modell-Stichtagen (20.06.2025 &amp; 31.07.2026), Verkäufertyp und Mangelursache.
          </p>
        </div>

        {/* 5-Step Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Device Category Selection */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                  Gerätekategorie wählen
                </label>
                <span className="text-xs font-semibold text-slate-500">
                  {DEVICE_CATEGORIES.length} Produktgruppen
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {DEVICE_CATEGORIES.map((cat) => {
                  const CatIcon = ICON_MAP[cat.icon] || Wrench;
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-150 ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-sm font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/60 font-medium'
                      }`}
                    >
                      <CatIcon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-emerald-700' : 'text-slate-500'}`} />
                      <span className="text-xs line-clamp-1">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500 mt-2.5">
                Regelwerk: <strong className="text-slate-800">{selectedCategory.subCategoryText}</strong>
              </p>
            </div>

            {/* Step 2: Exact Purchase Date */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                <label htmlFor="purchaseDateInput" className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                  Kaufdatum (Exakter Tag des Erwerbs)
                </label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <input
                    id="purchaseDateInput"
                    type="date"
                    value={purchaseDate}
                    min="2018-01-01"
                    max="2028-12-31"
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    className="text-xs font-extrabold text-slate-900 bg-white border border-slate-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                Wichtig für Gewährleistung (§ 437 BGB, 12-Monate Beweislastumkehr § 477 BGB) und tagesgenaue Stichtagsprüfung am 31.07.2026 (BGB-Umsetzungsfrist RL 2024/1799).
              </p>
            </div>

            {/* Conditional Step 2b: Smartphone Cut-Off (Concrete Device Placing on the Market) */}
            {selectedCategory.id === 'smartphone' && (
              <div className="bg-amber-50/80 p-5 sm:p-6 rounded-2xl border border-amber-200">
                <label className="text-sm font-extrabold text-amber-950 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-amber-600" />
                  Stichtag Ökodesign: Wann wurde das konkrete Smartphone in der EU in Verkehr gebracht?
                </label>
                <p className="text-xs text-amber-900 leading-relaxed mb-3">
                  Die EU-Verordnung (EU) 2023/1670 gilt verbindlich für Geräte, die <strong>ab dem 20. Juni 2025</strong> erstmals in der EU in Verkehr gebracht werden (unabhängig vom ursprünglichen Erscheinungsdatum der Modellreihe).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setModelReleasePeriod('ab_20_06_2025')}
                    className={`p-2.5 rounded-xl border text-left font-bold transition-all ${
                      modelReleasePeriod === 'ab_20_06_2025'
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                        : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    Inverkehrbringen ab 20.06.2025
                  </button>

                  <button
                    type="button"
                    onClick={() => setModelReleasePeriod('vor_20_06_2025')}
                    className={`p-2.5 rounded-xl border text-left font-bold transition-all ${
                      modelReleasePeriod === 'vor_20_06_2025'
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                        : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    Inverkehrbringen vor 20.06.2025
                  </button>

                  <button
                    type="button"
                    onClick={() => setModelReleasePeriod('unbekannt')}
                    className={`p-2.5 rounded-xl border text-left font-bold transition-all ${
                      modelReleasePeriod === 'unbekannt'
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    Unbekannt / Unklar
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Seller Type */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">3</span>
                Bei wem wurde das Gerät erworben?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSellerType('gewerblich')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all flex items-start gap-2 ${
                    sellerType === 'gewerblich'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Gewerblicher Händler</div>
                    <div className="text-[10px] opacity-80">Verbraucherkauf (§ 474 BGB)</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSellerType('privat')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all flex items-start gap-2 ${
                    sellerType === 'privat'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <UserCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Privatkauf</div>
                    <div className="text-[10px] opacity-80">Gewährleistung meist ausgeschlossen</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSellerType('unbekannt')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all flex items-start gap-2 ${
                    sellerType === 'unbekannt'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Unbekannt</div>
                    <div className="text-[10px] opacity-80">Keine Angaben</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 4: Defect Cause */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">4</span>
                Schadensursache &amp; Defektart
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setDefectCause('materialfehler_ohne_einwirkung');
                    setSelectedDefect(DEFECT_TYPES[2]);
                  }}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    defectCause === 'materialfehler_ohne_einwirkung'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-slate-900">Technischer Defekt / Mangel</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Ohne äußere Krafteinwirkung / Materialfehler</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDefectCause('unfall_eigenverschulden');
                    setSelectedDefect(DEFECT_TYPES[0]);
                  }}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    defectCause === 'unfall_eigenverschulden'
                      ? 'bg-rose-50 border-rose-400 text-rose-950 font-bold ring-2 ring-rose-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-rose-900">Sturzschaden / Unfall</div>
                  <div className="text-[11px] text-rose-700/80 mt-0.5">Displaybruch, Wasserschaden, Stoß</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDefectCause('normaler_verschleiss');
                    setSelectedDefect(DEFECT_TYPES[1]);
                  }}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    defectCause === 'normaler_verschleiss'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-slate-900">Normaler Altersverschleiß</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">z. B. nachlassende Akkulaufzeit</div>
                </button>

                <button
                  type="button"
                  onClick={() => setDefectCause('unbekannt')}
                  className={`p-3 rounded-xl border text-xs text-left transition-all ${
                    defectCause === 'unbekannt'
                      ? 'bg-slate-200 border-slate-400 text-slate-900 font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-slate-900">Unbekannt / Nicht geklärt</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Ursache unklar</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Output Box (Right / 5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Ergebnis der rechtlichen Voreinschätzung
                </span>
                <span
                  className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${
                    result.statusColor === 'emerald'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : result.statusColor === 'amber'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : result.statusColor === 'rose'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {result.statusBadge}
                </span>
              </div>
              <IconComponent className="w-8 h-8 text-emerald-400 shrink-0" />
            </div>

            <h3 className="text-lg font-extrabold text-white mb-2 leading-snug">
              {result.headline}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              {result.summary}
            </p>

            {/* Detailed Legal Columns */}
            <div className="space-y-4 text-xs border-t border-slate-800 pt-4 mb-6">
              <div>
                <span className="font-bold text-emerald-400 block mb-1">1. Händler-Gewährleistung (§ 437 BGB):</span>
                <p className="text-slate-300 leading-relaxed">{result.sellerWarrantyNote}</p>
              </div>

              <div>
                <span className="font-bold text-amber-400 block mb-1">2. Ökodesign-Ersatzteilpflicht ({selectedCategory.badge}):</span>
                <p className="text-slate-300 leading-relaxed">{result.manufacturerEcodesignNote}</p>
              </div>

              <div>
                <span className="font-bold text-sky-400 block mb-1">3. EU-Recht auf Reparatur (RL 2024/1799):</span>
                <p className="text-slate-300 leading-relaxed">{result.rightToRepairNote}</p>
              </div>
            </div>

            {/* Conditional Stichtag Cut-Off Notes Box */}
            {result.conditionalNotes && result.conditionalNotes.length > 0 && (
              <div className="mb-6 p-3 bg-slate-900 border border-amber-500/40 rounded-xl space-y-2 text-[11px] text-amber-200/90">
                <span className="font-bold text-amber-400 block">Stichtags- &amp; Anwendungsbedingungen:</span>
                {result.conditionalNotes.map((note, idx) => (
                  <p key={idx} className="leading-relaxed">
                    • {note}
                  </p>
                ))}
              </div>
            )}

            {/* Primary Source Link */}
            {selectedCategory.primarySourceUrl && (
              <div className="mb-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Verifizierte Verordnung:</span>
                <a
                  href={selectedCategory.primarySourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1"
                >
                  <span>{selectedCategory.legalRegulationCode} (EUR-Lex)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            {/* Disclaimer Note */}
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{result.disclaimer}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
