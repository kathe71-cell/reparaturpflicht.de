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
  Scale,
  TrendingDown
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
    tip: 'Neuer Akku oder SSD-Upgrade machen Notebooks oft so schnell wie am ersten Tag.'
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

export const SavingsCalculator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('waschmaschine');
  const activePreset = DEVICE_PRESETS.find((p) => p.id === selectedPresetId) || DEVICE_PRESETS[0];

  // Dynamic parameters controllable via sliders
  const [devicePrice, setDevicePrice] = useState<number>(activePreset.defaultPrice);
  const [repairCost, setRepairCost] = useState<number>(activePreset.defaultRepairCost);
  const [extendedYears, setExtendedYears] = useState<number>(activePreset.defaultExtendedYears);
  const [includeBonus, setIncludeBonus] = useState<boolean>(true);

  // Switch preset handler
  const handlePresetSelect = (preset: DevicePreset) => {
    setSelectedPresetId(preset.id);
    setDevicePrice(preset.defaultPrice);
    setRepairCost(preset.defaultRepairCost);
    setExtendedYears(preset.defaultExtendedYears);
  };

  // Bonus calculation with legal compliance:
  // Most German state programs (e.g., Sachsen min 50 €, Berlin min 75 €) require minimum invoice >= 50 €
  const bonusThresholdMet = repairCost >= 50;
  const calculatedBonus = includeBonus && bonusThresholdMet ? Math.min(Math.round(repairCost * 0.5), 200) : 0;
  const effectiveRepairCost = Math.max(0, repairCost - calculatedBonus);

  // Immediate capital savings (Cash saved today vs. buying replacement)
  const immediateSavingsEur = devicePrice - effectiveRepairCost;
  const isLoss = immediateSavingsEur < 0;

  // Lifecycle Cost Analysis (TCO - Kosten pro Nutzungsjahr)
  // Standard depreciation period for new replacement unit
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

  // Ecological impact calculation based on actual physical device data & extension
  // Avoided e-waste = actual physical device weight
  const ewasteAvoidedKg = activePreset.weightKg < 1 
    ? activePreset.weightKg.toFixed(1) 
    : Math.round(activePreset.weightKg).toString();

  // Avoided manufacturing carbon (approx. 85% of device production footprint avoided by prolonging life)
  const co2SavingsKg = Math.round(activePreset.co2ProductionKg * Math.min(1, 0.6 + (extendedYears * 0.1)));
  const carKmEquivalent = Math.round(co2SavingsKg * 4.8); // 1 kg CO2 ~ 4.8 km average car emission

  return (
    <section id="rechner" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-amber mb-3">Verbraucherzentrale-orientierte Modellrechnung</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Reparatur- vs. Neukauf-Rechner
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ermitteln Sie die tatsächliche Wirtschaftlichkeit einer Reparatur: Vergleichen Sie einmalige Investitionskosten, jährliche Nutzungskosten (TCO) und die reale Ökobilanz.
          </p>
        </div>

        {/* Device Category Pills */}
        <div className="mb-8">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider text-center mb-3">
            Schritt 1: Gerätekategorie wählen für realistische Basisdaten
          </label>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {DEVICE_PRESETS.map((preset) => {
              const Icon = preset.icon;
              const isSelected = preset.id === selectedPresetId;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handlePresetSelect(preset)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md ring-2 ring-emerald-500 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span>{preset.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls / Inputs Card (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
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
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="devicePrice" className="text-sm font-bold text-slate-900">
                    Neupreis eines vergleichbaren Ersatzgeräts
                  </label>
                  <span className="text-base font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
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
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>100 €</span>
                  <span>1.000 €</span>
                  <span>2.500 €</span>
                </div>
              </div>

              {/* Slider 2: Estimated Repair Cost */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="repairCost" className="text-sm font-bold text-slate-900">
                    Geschätzte Reparaturkosten (Werkstatt / Teile)
                  </label>
                  <span className="text-base font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
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
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>20 € (DIY Ersatzteil)</span>
                  <span>350 €</span>
                  <span>900 € (Hauptkomponente)</span>
                </div>
              </div>

              {/* Slider 3: Extended lifespan */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="extendedYears" className="text-sm font-bold text-slate-900">
                    Erwartete Weiternutzung durch Reparatur
                  </label>
                  <span className="text-base font-extrabold text-slate-900 bg-emerald-50 text-emerald-950 px-3 py-1 rounded-lg border border-emerald-300">
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
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>+1 Jahr (kurze Verlängerung)</span>
                  <span>+3 Jahre</span>
                  <span>+6 Jahre (wie neu)</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  Verteilt die Reparaturkosten auf <strong className="text-slate-800">{costPerYearRepair} € / Jahr</strong>.
                </p>
              </div>

              {/* Toggle: Staatlicher Reparaturbonus */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Staatlichen Reparaturbonus anrechnen
                    </div>
                    <div className="text-xs text-slate-500">
                      50 % Zuschuss bis max. 200 € (in Thüringen, Sachsen, Berlin)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIncludeBonus(!includeBonus)}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
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
                  <div className="mt-2.5 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
                    <span>
                      {bonusThresholdMet ? (
                        <>Angerechneter Förderzuschuss:</>
                      ) : (
                        <span className="text-amber-800">Mindestrechnung von 50 € erforderlich:</span>
                      )}
                    </span>
                    <span className="font-extrabold text-emerald-800">
                      {bonusThresholdMet ? `-${calculatedBonus} €` : '0 €'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Hint below slider */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Verbraucherzentralen-Faustformel: Liegen die Reparaturkosten unter 40 % des Neupreises, rechnet sich die Instandsetzung in den meisten Fällen.
              </span>
            </div>
          </div>

          {/* Results Visual Box (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              {/* Traffic Light Recommendation Header */}
              <div className="border-b border-slate-800 pb-5 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Wirtschaftlichkeits-Urteil *
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    Reparaturanteil: {Math.round(repairRatio * 100)} %
                  </span>
                </div>

                {recommendationStatus === 'excellent' && (
                  <div className="flex items-start gap-3 p-3.5 bg-emerald-950/80 border border-emerald-500/50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-emerald-300">
                        Reparatur klar lohnenswert
                      </h4>
                      <p className="text-xs text-emerald-200/90 mt-0.5 leading-relaxed">
                        Die Reparaturkosten liegen mit {Math.round(repairRatio * 100)} % weit unter dem Neupreis. Sie sparen erhebliche Anschaffungskosten und entlasten die Umwelt maximal.
                      </p>
                    </div>
                  </div>
                )}

                {recommendationStatus === 'moderate' && (
                  <div className="flex items-start gap-3 p-3.5 bg-amber-950/80 border border-amber-500/50 rounded-xl">
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-amber-300">
                        Wirtschaftlich im Grenzbereich (Einzelfallprüfung)
                      </h4>
                      <p className="text-xs text-amber-200/90 mt-0.5 leading-relaxed">
                        Reparaturkosten machen {Math.round(repairRatio * 100)} % des Neupreises aus. Empfehlenswert bei hochwertigen Markengeräten mit hohem Restwert oder bei Selbstreparatur (DIY).
                      </p>
                    </div>
                  </div>
                )}

                {recommendationStatus === 'critical' && (
                  <div className="flex items-start gap-3 p-3.5 bg-rose-950/80 border border-rose-500/50 rounded-xl">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-rose-300">
                        Wirtschaftlicher Totalschaden / Neukauf ratsam
                      </h4>
                      <p className="text-xs text-rose-200/90 mt-0.5 leading-relaxed">
                        Achtung: Die Reparatur ist im Verhältnis zum Neugerät unrentabel ({Math.round(repairRatio * 100)} % des Neupreises). Ein Neukauf bietet neue 2 Jahre Garantie und meist bessere Energieeffizienz.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Primary Savings Metric */}
              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-6">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <PiggyBank className="w-4 h-4 text-emerald-400" />
                    Sofortiger Investitionsvorteil heute:
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {includeBonus && bonusThresholdMet ? 'inkl. Reparaturbonus' : 'ohne Förderbonus'}
                  </span>
                </div>

                {!isLoss ? (
                  <>
                    <div className="text-3xl sm:text-4xl font-black text-white">
                      +{immediateSavingsEur} €
                    </div>
                    <div className="text-xs text-slate-300 mt-2">
                      Heute fällige Reparatur: <strong className="text-emerald-400">{effectiveRepairCost} €</strong> statt <strong className="text-slate-200">{devicePrice} €</strong> Neukauf.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl sm:text-3xl font-black text-rose-400">
                      Keine Ersparnis ({immediateSavingsEur} €)
                    </div>
                    <div className="text-xs text-rose-200 mt-2">
                      Die Reparatur ({effectiveRepairCost} €) übersteigt den Anschaffungspreis eines Neugeräts ({devicePrice} €).
                    </div>
                  </>
                )}
              </div>

              {/* TCO / Annual Cost Comparison */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 mb-6">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 mb-3">
                  <Scale className="w-4 h-4 text-amber-400" />
                  Lebenszyklus-Vergleich (Kosten pro Nutzungsjahr)
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Reparatur</span>
                    <span className="text-lg font-extrabold text-emerald-400">
                      {costPerYearRepair} € <span className="text-xs font-normal text-slate-400">/ Jahr</span>
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      für +{extendedYears} {extendedYears === 1 ? 'Jahr' : 'Jahre'}
                    </span>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Neukauf</span>
                    <span className="text-lg font-extrabold text-slate-300">
                      {costPerYearNew} € <span className="text-xs font-normal text-slate-400">/ Jahr</span>
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      bei ca. {newLifespan} J. Lebensdauer
                    </span>
                  </div>
                </div>
                {annualSavingsEur > 0 ? (
                  <div className="mt-3 flex items-center justify-between text-xs text-emerald-300 bg-emerald-950/50 p-2 rounded-lg border border-emerald-800/40">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      Ersparnis über {extendedYears} {extendedYears === 1 ? 'Jahr' : 'Jahre'}:
                    </span>
                    <span className="font-extrabold">+{totalLifecycleSavingsEur} €</span>
                  </div>
                ) : (
                  <div className="mt-3 text-xs text-rose-300 bg-rose-950/50 p-2 rounded-lg border border-rose-800/40 text-center">
                    Neukauf pro Nutzungsjahr rechnerisch günstiger als diese Reparatur.
                  </div>
                )}
              </div>

              {/* Scientific Ecological Impact Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold mb-1">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    CO₂-Einsparung
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    ~{co2SavingsKg} kg
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Entspricht ca. {carKmEquivalent} km Pkw-Fahrt
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
                    <Trash2 className="w-4 h-4 text-amber-400" />
                    E-Schrott vermieden
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    ~{ewasteAvoidedKg} kg
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Reales Gerätegewicht vor Deponie bewahrt
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with CTA and Legal Disclaimer */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href="#bonus"
                className="btn-primary-amber w-full py-3.5 rounded-xl text-xs font-extrabold gap-2"
              >
                <span>Reparaturbonus nach Bundesland prüfen</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
              <p className="text-[10px] text-slate-400 text-center leading-normal mt-3">
                * Modellrechnung nach TCO-Methode. Die tatsächliche Wirtschaftlichkeit hängt vom Erhaltungszustand, den Teilekosten sowie regionalen Fördersätzen ab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
