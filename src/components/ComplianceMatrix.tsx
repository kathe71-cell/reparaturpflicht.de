import React, { useState } from 'react';
import { Search, Clock, ShieldCheck, AlertCircle, ExternalLink, Info } from 'lucide-react';
import { DEVICE_CATEGORIES } from '../data/repairData';

export const ComplianceMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = DEVICE_CATEGORIES.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.legalFramework.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.consumerParts.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase())) ||
    cat.proParts.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="matrix" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-emerald mb-3">Rechtliche Spezifikations-Matrix</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Herstellerpflichten nach EU-Produktkategorie
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Gegenüberstellung der verifizierten EU-Ökodesign-Verordnungen: Anwendungsdaten, Vorhaltefristen, berechtigte Nutzergruppen und Primärquellen.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              aria-label="Nach Gerät, Verordnung oder Bauteil suchen"
              placeholder="Nach Gerät oder Bauteil suchen (z. B. Display, Türdichtung, Pumpe)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left">
            <thead className="bg-slate-900 text-white text-xs uppercase font-extrabold tracking-wider">
              <tr>
                <th scope="col" className="px-5 py-4">Gerätekategorie &amp; Verordnung</th>
                <th scope="col" className="px-5 py-4">Ersatzteilpflicht</th>
                <th scope="col" className="px-5 py-4">Lieferfrist max.</th>
                <th scope="col" className="px-5 py-4">Freigabe Endnutzer vs. Profi</th>
                <th scope="col" className="px-5 py-4">Anwendungsbeginn / Stichtag</th>
                <th scope="col" className="px-5 py-4">Primärquelle (EU)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100 text-sm">
              {filteredCategories.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-bold text-slate-950">{item.name}</div>
                    <span className="badge-slate text-[10px] mt-1 inline-block">{item.legalRegulationCode}</span>
                    <p className="text-[11px] text-slate-500 mt-1">{item.subCategoryText}</p>
                  </td>
                  <td className="px-5 py-4">
                    {item.hasEcodesignObligation ? (
                      <div>
                        <div className="font-extrabold text-emerald-800 flex items-center gap-1.5 text-xs">
                          <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{item.sparePartsYearsText}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 block mt-1">{item.startOfTimelineText}</span>
                      </div>
                    ) : (
                      <div>
                        <div className="font-bold text-slate-500 flex items-center gap-1.5">
                          <Info className="w-4 h-4 text-slate-400" />
                          Keine Pflicht
                        </div>
                        <span className="text-[10px] text-slate-400">Nur Energieeffizienz</span>
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-4 text-xs font-semibold text-slate-700">
                    {item.deliveryDaysText || (item.deliveryDaysMax > 0 ? `max. ${item.deliveryDaysMax} Werktage` : '—')}
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-xs font-medium text-slate-800 leading-snug">{item.whoCanRepairText}</div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-xs font-semibold text-slate-700">
                    {item.applicationDate}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    {item.primarySourceUrl ? (
                      <a
                        href={item.primarySourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                      >
                        <span>EUR-Lex</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400">—</span>
                    )}
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
            <div className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-0.5">Strikte Trennung nach Berechtigungen:</strong>
              Teile für Endnutzer müssen ohne Spezialwerkzeug austauschbar sein. Sicherheitsrelevante Komponenten (z. B. Kompressoren, Platinen) bleiben qualifizierten Fachbetrieben vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
