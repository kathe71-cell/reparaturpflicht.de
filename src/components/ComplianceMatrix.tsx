import React, { useState } from 'react';
import { Search, CheckCircle, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { DEVICE_CATEGORIES } from '../data/repairData';

export const ComplianceMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = DEVICE_CATEGORIES.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.legalFramework.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.typicalParts.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="matrix" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-emerald mb-3">Rechtliche Spezifikations-Matrix</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Herstellerpflichten nach Produktkategorie
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detaillierte Übersicht der gesetzlichen Pflichten gemäß EU-Ökodesign-Verordnung und der Richtlinie (EU) 2024/1799 über gemeinsame Vorschriften zur Reparatur von Waren.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              aria-label="Nach Gerät oder Bauteil suchen"
              placeholder="Nach Gerät oder Bauteil suchen (z.B. Display, Akku, Pumpe)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Table View for Tablets/Desktop */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-900 text-white text-xs uppercase font-extrabold tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-4">Gerätekategorie</th>
                <th scope="col" className="px-6 py-4">Rechtsrahmen (EU)</th>
                <th scope="col" className="px-6 py-4">Ersatzteilpflicht</th>
                <th scope="col" className="px-6 py-4">Lieferfrist max.</th>
                <th scope="col" className="px-6 py-4">Zugang zu Anleitungen</th>
                <th scope="col" className="px-6 py-4">Software &amp; Sperren</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 text-sm">
              {filteredCategories.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-slate-950">{item.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.typicalParts.slice(0, 2).join(', ')}...</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="badge-slate text-[11px]">{item.legalRegulationCode}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-extrabold text-emerald-800 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      {item.sparePartsYears} Jahre
                    </div>
                    <span className="text-[11px] text-slate-500">ab Produktionsende</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-700 font-semibold">
                    max. {item.deliveryDaysMax} Werktage
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-semibold text-slate-800">{item.whoCanRepairText}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Part-Pairing verboten
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600">Keine Gerätekategorie für Ihre Suchanfrage gefunden.</p>
          </div>
        )}

        {/* Informational Callout Box */}
        <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">
                Wichtiges Verbraucherrecht: Verlängerung der Sachmängelhaftung
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Wählen Sie bei einem Gewährleistungsfall (§ 437 BGB) innerhalb der ersten 2 Jahre die Reparatur statt eines Neugeräteaustauschs, verlängert sich Ihre Gewährleistungsfrist gemäß EU-Richtlinie um 12 zusätzliche Monate.
              </p>
            </div>
          </div>
          <a
            href="#rechner"
            className="btn-dark px-4 py-2 rounded-xl text-xs whitespace-nowrap shrink-0"
          >
            Zur Modellrechnung
          </a>
        </div>
      </div>
    </section>
  );
};
