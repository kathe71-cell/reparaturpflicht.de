import React, { useState } from 'react';
import {
  Smartphone,
  Shirt,
  Utensils,
  Snowflake,
  Tv,
  Wind,
  Laptop,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Wrench,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { DEVICE_CATEGORIES, DEFECT_TYPES } from '../data/repairData';
import { DeviceCategory, DefectType } from '../types';

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
  const [deviceAge, setDeviceAge] = useState<'under_2_years' | 'between_2_5' | 'over_5'>('under_2_years');
  const [selectedDefect, setSelectedDefect] = useState<DefectType>(DEFECT_TYPES[0]);

  const IconComponent = ICON_MAP[selectedCategory.icon] || Wrench;

  // Determine warranty and legal status
  const isUnderWarranty = deviceAge === 'under_2_years';
  const isWithinSparePartsPeriod =
    deviceAge === 'under_2_years' ||
    deviceAge === 'between_2_5' ||
    (deviceAge === 'over_5' && selectedCategory.sparePartsYears >= 7);

  return (
    <section id="pflichten-check" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-emerald mb-3">Interaktives Prüf-Tool</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Recht auf Reparatur: Pflichten- &amp; Rechte-Prüfer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Wählen Sie Ihre Gerätekategorie, das Gerätealter und den Defekt aus. Unser Kompass ermittelt Ihre gesetzlichen Ansprüche nach dem neuen <strong>Recht auf Reparatur (EU 2024/1799)</strong>, Ersatzteilfristen und Pflichten der Hersteller.
          </p>
        </div>

        {/* 3 Step Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (Left / 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Device Category Selection */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">1</span>
                  Gerätekategorie wählen
                </label>
                <span className="text-xs font-semibold text-slate-500">
                  {DEVICE_CATEGORIES.length} Kategorien
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
            </div>

            {/* Step 2: Device Age & Warranty Window */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">2</span>
                Gerätealter &amp; Kaufzeitpunkt
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setDeviceAge('under_2_years')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    deviceAge === 'under_2_years'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60 font-medium'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Unter 2 Jahre alt</div>
                  <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">Innerhalb BGB-Gewährleistung</div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeviceAge('between_2_5')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    deviceAge === 'between_2_5'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60 font-medium'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">2 bis 5 Jahre alt</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">EU-Reparaturrecht greift voll</div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeviceAge('over_5')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    deviceAge === 'over_5'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60 font-medium'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Über 5 Jahre alt</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Ersatzteilpflicht bis 7–10 J.</div>
                </button>
              </div>
            </div>

            {/* Step 3: Defect Type */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
              <label className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">3</span>
                Art des Mangels / Defekts
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DEFECT_TYPES.map((defect) => {
                  const isSelected = selectedDefect.id === defect.id;
                  return (
                    <button
                      key={defect.id}
                      type="button"
                      onClick={() => setSelectedDefect(defect)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-sm font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/60 font-medium'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{defect.name}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{defect.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Box (Right / 5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-6">
            {/* Header of Results */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    Prüfergebnis: {selectedCategory.name}
                  </h3>
                  <span className="text-xs text-emerald-400 font-semibold">
                    {selectedCategory.legalRegulationCode}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                {selectedCategory.description}
              </p>
            </div>

            {/* Core Legal Facts Matrix */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Ersatzteil-Pflichtdauer:
                </span>
                <span className="font-extrabold text-white text-sm">
                  {selectedCategory.sparePartsYears} Jahre ab Marktstart
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Max. Lieferfrist Ersatzteile:
                </span>
                <span className="font-bold text-white">
                  max. {selectedCategory.deliveryDaysMax} Werktage
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-amber-400" />
                  Zugang zu Reparaturanleitung:
                </span>
                <span className="font-bold text-emerald-300">
                  Gesetzlich verpflichtend
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  Softwaresperren (Part-Pairing):
                </span>
                <span className="font-bold text-amber-300">
                  EU-weit untersagt
                </span>
              </div>
            </div>

            {/* Individual Action Recommendation */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
              <div className="flex items-start gap-2.5">
                {isUnderWarranty ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-xs font-bold text-white">
                    {isUnderWarranty
                      ? 'Kostenfreie Nacherfüllung durch den Händler'
                      : isWithinSparePartsPeriod
                      ? 'Ersatzteile müssen vom Hersteller bereitgestellt werden'
                      : 'Reparatur über freie Werkstätten & Gebrauchtteile'}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed mt-1">
                    {isUnderWarranty
                      ? 'Da der Kauf weniger als 2 Jahre zurückliegt, haben Sie Anspruch auf kostenlose Reparatur oder Austausch nach § 437 BGB. Bei Reparatur verlängert sich Ihre Gewährleistung um +12 Monate.'
                      : 'Die gesetzliche 2-Jahres-Gewährleistung ist zwar abgelaufen, aber der Hersteller muss für dieses Gerät noch Ersatzteile zu angemessenen Preisen liefern. Zudem haben Sie eventuell Anspruch auf bis zu 200 € Reparaturbonus.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Typical spare parts list */}
            <div>
              <div className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                Verpflichtend vorzuhaltende Bauteile:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCategory.typicalParts.map((part, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-700"
                  >
                    {part}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2">
              <a
                href="#rechner"
                className="btn-primary-amber w-full py-3 rounded-xl text-xs gap-2 font-extrabold"
              >
                <span>Kosten &amp; Ersparnis im Rechner prüfen</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>
              <div className="text-[10px] text-slate-400 text-center">
                Unverbindliche Verbraucherinformation gemäß EU-Ökodesign &amp; BGB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
