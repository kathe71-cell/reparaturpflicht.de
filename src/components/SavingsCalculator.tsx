import React, { useState } from 'react';
import {
  PiggyBank,
  Leaf,
  Trash2,
  ArrowRight,
  Info,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Smartphone,
  Shirt,
  Utensils,
  Laptop,
  Tv,
  Coffee,
  Sliders,
  Scale
} from 'lucide-react';

interface DevicePreset {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  defaultPrice: number;
  defaultRepairCost: number;
  defaultExtendedYears: number;
  typicalLifespanNew: number; // typical lifespan of a brand new device in years
  weightKg: number; // typical real physical weight in kg
  co2ProductionKg: number; // typical embedded manufacturing carbon in kg CO2e
  tip: string;
}

const DEVICE_PRESETS: DevicePreset[] = [
  {
    id: 'smartphone',
    name: 'Smartphones & Tablets',
    shortName: 'Smartphone',
    icon: Smartphone,
    defaultPrice: 650,
    defaultRepairCost: 110,
    defaultExtendedYears: 2,
    typicalLifespanNew: 4,
    weightKg: 0.2,
    co2ProductionKg: 65,
    tip: 'Akku- & Displaytausch amortisieren sich bei Smartphones fast immer.'
  },
  {
    id: 'waschmaschine',
    name: 'Waschmaschinen & Trockner',
    shortName: 'Waschmaschine',
    icon: Shirt,
    defaultPrice: 680,
    defaultRepairCost: 150,
    defaultExtendedYears: 4,
    typicalLifespanNew: 10,
    weightKg: 70,
    co2ProductionKg: 260,
    tip: 'Laugenpumpe oder Kohlebürsten kosten wenig und sichern viele weitere Betriebsjahre.'
  },
  {
    id: 'geschirrspueler',
    name: 'Geschirrspüler',
    shortName: 'Geschirrspüler',
    icon: Utensils,
    defaultPrice: 620,
    defaultRepairCost: 140,
    defaultExtendedYears: 3,
    typicalLifespanNew: 9,
    weightKg: 46,
    co2ProductionKg: 215,
    tip: 'Heizpumpe oder Dichtungen lassen sich meist unkompliziert erneuern.'
  },
  {
    id: 'laptop',
    name: 'Laptops & Desktop-PCs',
    shortName: 'Laptop / PC',
    icon: Laptop,
    defaultPrice: 850,
    defaultRepairCost: 130,
    defaultExtendedYears: 3,
    typicalLifespanNew: 5,
    weightKg: 2.2,
    co2ProductionKg: 220,
    tip: 'SSD-Upgrade oder Akkutausch machen Notebooks oft spürbar schneller.'
  },
  {
    id: 'tv',
    name: 'Fernseher & Displays',
    shortName: 'TV / Monitor',
    icon: Tv,
    defaultPrice: 550,
    defaultRepairCost: 140,
    defaultExtendedYears: 3,
    typicalLifespanNew: 7,
    weightKg: 14,
    co2ProductionKg: 180,
    tip: 'Oft ist nur eine Platine oder das Netzteil defekt, das Panel selbst ist intakt.'
  },
  {
    id: 'kaffee',
    name: 'Kaffeevollautomaten',
    shortName: 'Kaffeemaschine',
    icon: Coffee,
    defaultPrice: 480,
    defaultRepairCost: 95,
    defaultExtendedYears: 3,
    typicalLifespanNew: 6,
    weightKg: 9.5,
    co2ProductionKg: 85,
    tip: 'Wartungssätze für Brühgruppe und Dichtungen stellen volle Funktion wieder her.'
  },
  {
    id: 'custom',
    name: 'Sonstige Elektrogeräte',
    shortName: 'Individuell',
    icon: Sliders,
    defaultPrice: 400,
    defaultRepairCost: 120,
    defaultExtendedYears: 3,
    typicalLifespanNew: 6,
    weightKg: 8.0,
    co2ProductionKg: 110,
    tip: 'Passen Sie die Schieberegler exakt auf Ihre persönlichen Gerätedaten an.'
  }
];

interface SavingsCalculatorProps {
  isEmbed?: boolean;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ isEmbed = false }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('waschmaschine');
  const activePreset = DEVICE_PRESETS.find((p) => p.id === selectedPresetId) || DEVICE_PRESETS[0];

  // Dynamic parameters controllable via sliders
  const [devicePrice, setDevicePrice] = useState<number>(activePreset.defaultPrice);
  const [repairCost, setRepairCost] = useState<number>(activePreset.defaultRepairCost);
  const [extendedYears, setExtendedYears] = useState<number>(activePreset.defaultExtendedYears);
  
  // Reparaturbonus toggle disabled by default (0 €) per prompt instructions
  const [includeBonus, setIncludeBonus] = useState<boolean>(false);

  // Switch preset handler
  const handlePresetSelect = (preset: DevicePreset) => {
    setSelectedPresetId(preset.id);
    setDevicePrice(preset.defaultPrice);
    setRepairCost(preset.defaultRepairCost);
    setExtendedYears(preset.defaultExtendedYears);
  };

  // Bonus calculation with legal compliance:
  // Mindestrechnung für Sachsen 115 € (Meisterbetrieb) / 50 € (Selbstreparatur)
  const bonusThresholdMet = repairCost >= 50;
  const calculatedBonus = includeBonus && bonusThresholdMet ? Math.min(Math.round(repairCost * 0.5), 200) : 0;
  const effectiveRepairCost = Math.max(0, repairCost - calculatedBonus);

  // Immediate capital savings
  const immediateSavingsEur = devicePrice - effectiveRepairCost;
  const isLoss = immediateSavingsEur < 0;

  // Lifecycle Cost Analysis (TCO - Kosten pro Nutzungsjahr)
  const newLifespan = activePreset.typicalLifespanNew;
  const costPerYearNew = Math.round(devicePrice / newLifespan);
  const costPerYearRepair = Math.round(effectiveRepairCost / extendedYears);
  const annualSavingsEur = costPerYearNew - costPerYearRepair;
  const totalLifecycleSavingsEur = Math.round(annualSavingsEur * extendedYears);

  // Economic ratio & decision traffic light
  const repairRatio = effectiveRepairCost / devicePrice;

  let recommendationStatus: 'excellent' | 'moderate' | 'critical';
  if (repairRatio <= 0.35 && annualSavingsEur > 0) {
    recommendationStatus = 'excellent';
  } else if (repairRatio <= 0.60 && annualSavingsEur >= 0) {
    recommendationStatus = 'moderate';
  } else {
    recommendationStatus = 'critical';
  }

  // Ecological estimates (disclosed as simplified approximations)
  const ewasteAvoidedKg = activePreset.weightKg < 1 
    ? activePreset.weightKg.toFixed(1) 
    : Math.round(activePreset.weightKg).toString();

  const co2SavingsKg = Math.round(activePreset.co2ProductionKg * Math.min(1, 0.6 + (extendedYears * 0.1)));
  const carKmEquivalent = Math.round(co2SavingsKg * 4.8);

  const bonusCtaUrl = 'https://reparaturpflicht.de/#bonus';

  return (
    <section id="rechner" className={`${isEmbed ? 'py-4 bg-white' : 'py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!isEmbed && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="badge-amber mb-3">Vereinfachte Modellrechnung</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
              Reparatur- vs. Neukauf-Rechner (TCO-Vergleich)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Vergleichen Sie Anschaffungskosten, verbleibende jährliche Nutzungskosten und Umweltaspekte in einer transparenten Modellrechnung.
            </p>
          </div>
        )}

        {/* Device Category Pills */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider text-center mb-2.5">
            Gerätekategorie wählen für Orientierungswerte
          </label>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-4xl mx-auto">
            {DEVICE_PRESETS.map((preset) => {
              const Icon = preset.icon;
              const isSelected = preset.id === selectedPresetId;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handlePresetSelect(preset)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-sm ring-2 ring-emerald-500 scale-[1.01]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span>{preset.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls / Inputs Card (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    {activePreset.name}
                  </h3>
                  <p className="text-xs text-slate-500">{activePreset.tip}</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                  Ø {activePreset.typicalLifespanNew} J. Neugerät
                </span>
              </div>

              {/* Slider 1: New Device Price */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="devicePrice" className="text-xs font-bold text-slate-900">
                    Neupreis eines vergleichbaren Ersatzgeräts
                  </label>
                  <span className="text-sm font-extrabold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                    {devicePrice} €
                  </span>
                </div>
                <input
                  id="devicePrice"
                  type="range"
                  min="100"
                  max="2500"
                  step="25"
                  value={devicePrice}
                  onChange={(e) => setDevicePrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Slider 2: Estimated Repair Cost */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="repairCost" className="text-xs font-bold text-slate-900">
                    Geschätzte Reparaturkosten (Teile &amp; Arbeit)
                  </label>
                  <span className="text-sm font-extrabold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                    {repairCost} €
                  </span>
                </div>
                <input
                  id="repairCost"
                  type="range"
                  min="20"
                  max="900"
                  step="10"
                  value={repairCost}
                  onChange={(e) => setRepairCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Slider 3: Extended lifespan */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="extendedYears" className="text-xs font-bold text-slate-900">
                    Erwartete Weiternutzung durch Reparatur
                  </label>
                  <span className="text-sm font-extrabold text-emerald-950 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-300">
                    +{extendedYears} {extendedYears === 1 ? 'Jahr' : 'Jahre'}
                  </span>
                </div>
                <input
                  id="extendedYears"
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={extendedYears}
                  onChange={(e) => setExtendedYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Verteilt die Reparaturkosten auf <strong className="text-slate-800">{costPerYearRepair} € / Jahr</strong>.
                </p>
              </div>

              {/* Toggle: Reparaturbonus */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Staatlichen Reparaturbonus einrechnen
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Modellannahme (Standard: 0 € / Deaktiviert)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIncludeBonus(!includeBonus)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                      includeBonus ? 'bg-emerald-600' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        includeBonus ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                {includeBonus && (
                  <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-950 flex items-center justify-between">
                    <span>
                      {bonusThresholdMet ? (
                        <>Modellannahme (sofern Förderung z. B. in Sachsen aktiv):</>
                      ) : (
                        <span>Mindestrechnung erforderlich:</span>
                      )}
                    </span>
                    <span className="font-extrabold text-amber-900">
                      {bonusThresholdMet ? `-${calculatedBonus} €` : '0 €'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Formular-Offenlegung Hinweis */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>
                Formeln: TCO-Reparatur = Effektive Reparaturkosten / Nutzungsjahre. Umweltwerte basieren auf vereinfachten Modellannahmen.
              </span>
            </div>
          </div>

          {/* Results Visual Box (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 text-white rounded-2xl p-5 sm:p-7 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              {/* Recommendation Traffic Light */}
              <div className="border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Modell-Voreinschätzung *
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    Reparaturanteil: {Math.round(repairRatio * 100)} %
                  </span>
                </div>

                {recommendationStatus === 'excellent' && (
                  <div className="flex items-start gap-2.5 p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-emerald-300 block">Reparatur lohnenswert</strong>
                      <span className="text-emerald-200/90 text-[11px]">Die Reparaturkosten liegen unter 35 % des Neupreises.</span>
                    </div>
                  </div>
                )}

                {recommendationStatus === 'moderate' && (
                  <div className="flex items-start gap-2.5 p-3 bg-amber-950/80 border border-amber-500/50 rounded-xl">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-amber-300 block">Einzelfallprüfung ratsam</strong>
                      <span className="text-amber-200/90 text-[11px]">Reparaturkosten machen {Math.round(repairRatio * 100)} % des Neupreises aus.</span>
                    </div>
                  </div>
                )}

                {recommendationStatus === 'critical' && (
                  <div className="flex items-start gap-2.5 p-3 bg-rose-950/80 border border-rose-500/50 rounded-xl">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-rose-300 block">Unrentabel / Neukauf erwägen</strong>
                      <span className="text-rose-200/90 text-[11px]">Hohe Reparaturkosten im Verhältnis zum Neupreis ({Math.round(repairRatio * 100)} %).</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Primary Savings Metric */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <PiggyBank className="w-3.5 h-3.5 text-emerald-400" />
                    Einmalige Investitionsdifferenz heute:
                  </span>
                </div>

                {!isLoss ? (
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      +{immediateSavingsEur} €
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Einmalaufwand heute: <strong className="text-emerald-400">{effectiveRepairCost} €</strong> statt <strong className="text-slate-200">{devicePrice} €</strong> Neukauf.
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-rose-400">
                      Keine Ersparnis ({immediateSavingsEur} €)
                    </div>
                    <div className="text-[11px] text-rose-200 mt-1">
                      Die Reparatur ist teurer als das Ersatzgerät.
                    </div>
                  </div>
                )}
              </div>

              {/* Lifecycle Cost Comparison */}
              <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 mb-2">
                  <Scale className="w-3.5 h-3.5 text-amber-400" />
                  Jahreskostenvergleich (TCO pro Nutzungsjahr)
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Reparatur</span>
                    <span className="text-base font-extrabold text-emerald-400">
                      {costPerYearRepair} € <span className="text-[10px] font-normal text-slate-400">/ J.</span>
                    </span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Neukauf</span>
                    <span className="text-base font-extrabold text-slate-300">
                      {costPerYearNew} € <span className="text-[10px] font-normal text-slate-400">/ J.</span>
                    </span>
                  </div>
                </div>
                {annualSavingsEur > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-slate-800 text-[11px] text-slate-300 text-center">
                    TCO-Vorteil über +{extendedYears} {extendedYears === 1 ? 'Jahr' : 'Jahre'}: <strong className="text-emerald-400">+{totalLifecycleSavingsEur} €</strong>
                  </div>
                )}
              </div>

              {/* Ecological Impact Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold mb-0.5">
                    <Leaf className="w-3.5 h-3.5" />
                    CO₂-Einsparung (ca.)
                  </div>
                  <div className="text-lg font-black text-white">
                    ~{co2SavingsKg} kg
                  </div>
                  <div className="text-[9px] text-slate-400">
                    ca. {carKmEquivalent} km Pkw-Fahrt
                  </div>
                </div>

                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold mb-0.5">
                    <Trash2 className="w-3.5 h-3.5" />
                    E-Schrott (Gewicht)
                  </div>
                  <div className="text-lg font-black text-white">
                    ~{ewasteAvoidedKg} kg
                  </div>
                  <div className="text-[9px] text-slate-400">
                    Gerätegewicht vor Deponie
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with CTA and Disclaimer */}
            <div className="pt-3 border-t border-slate-800">
              <a
                href={bonusCtaUrl}
                target={isEmbed ? '_blank' : '_self'}
                rel={isEmbed ? 'noopener noreferrer' : undefined}
                className="btn-primary-amber w-full py-2.5 rounded-xl text-xs font-extrabold gap-2 flex items-center justify-center"
              >
                <span>Reparaturbonus-Status prüfen</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </a>
              <p className="text-[9px] text-slate-400 text-center leading-normal mt-2">
                * Unverbindliche Modellrechnung. Die tatsächlichen Kosten hängen von Werkstattpreisen, Gerätewert und Ersatzteilverfügbarkeit ab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
