import React from 'react';
import { Award, Check, MapPin, ExternalLink, Calendar } from 'lucide-react';
import { STATE_BONUS_PROGRAMS } from '../data/repairData';

export const BonusGuide: React.FC = () => {
  return (
    <section id="bonus" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-amber mb-3">Rechercheergebnis Förderprogramme</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Reparaturbonus in Deutschland: Förderstatus &amp; Bedingungen
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Aktuelle Übersicht der regionalen Förderprogramme in den Bundesländern. Kein bundesweit einheitliches Fördergesetz.
          </p>
          <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Verifizierter Stand: <strong>17. September 2026</strong></span>
          </div>
        </div>

        {/* State Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {STATE_BONUS_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-extrabold text-slate-950">{prog.state}</h3>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                      prog.status === 'aktiv'
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                        : prog.status === 'gestoppt_budget_erschoepft'
                        ? 'bg-amber-50 text-amber-900 border-amber-300'
                        : prog.status === 'beendet'
                        ? 'bg-rose-50 text-rose-900 border-rose-300'
                        : 'bg-slate-100 text-slate-800 border-slate-300'
                    }`}
                  >
                    {prog.statusBadge}
                  </span>
                </div>

                {prog.maxAmountEur > 0 ? (
                  <div className="flex items-baseline gap-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-2xl font-black text-slate-950">bis {prog.maxAmountEur} €</span>
                    <span className="text-xs font-semibold text-slate-600">
                      ({prog.costCoveragePct} % Erstattung, mind. {prog.minInvoiceEur} € Rechnung)
                    </span>
                  </div>
                ) : (
                  <div className="mb-4 bg-slate-100 p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
                    Keine direkte staatliche Erstattung vorhanden
                  </div>
                )}

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {prog.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold text-slate-800">Fördervoraussetzungen &amp; Prüfdaten:</div>
                  {prog.conditions.map((cond, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate pr-2">Träger: {prog.officialBody}</span>
                <a
                  href={prog.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1 shrink-0"
                >
                  <span>Programmseite</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Checklist */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Schritt-für-Schritt: So beantragen Sie aktiv verfügbare Förderungen
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-black flex items-center justify-center mb-2.5">
                1
              </div>
              <div className="font-bold text-slate-900 mb-1">Reparatur durchführen lassen</div>
              <p className="leading-relaxed">
                Beauftragen Sie ein im jeweiligen Förderportal gelistetes Fachunternehmen und achten Sie auf den erforderlichen Mindestrechnungsbetrag (z. B. 115 € brutto in Sachsen).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-black flex items-center justify-center mb-2.5">
                2
              </div>
              <div className="font-bold text-slate-900 mb-1">Rechnung &amp; Zahlungsnachweis sichern</div>
              <p className="leading-relaxed">
                Bewahren Sie die detaillierte Rechnung auf, auf der Gerätename, Arbeitsleistung und Ersatzteile ausgewiesen sind. Ein Kontoauszug dient als Zahlungsnachweis.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-black flex items-center justify-center mb-2.5">
                3
              </div>
              <div className="font-bold text-slate-900 mb-1">Digitalen Antrag stellen</div>
              <p className="leading-relaxed">
                Reichen Sie den Antrag direkt im offiziellen Förderportal der jeweiligen Aufbaubank (z. B. SAB in Sachsen) ein. Nach Prüfung erfolgt die Erstattung auf Ihr Bankkonto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
