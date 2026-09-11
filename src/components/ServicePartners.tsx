import React, { useState } from 'react';
import { ExternalLink, CheckCircle, Package, Wrench, Shield, BookOpen, Sparkles } from 'lucide-react';
import { REPAIR_PARTNERS } from '../data/repairData';
import { RepairPartner } from '../types';

export const ServicePartners: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('alle');

  const filteredPartners = activeCategory === 'alle'
    ? REPAIR_PARTNERS
    : REPAIR_PARTNERS.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'ersatzteile':
        return <Package className="w-5 h-5 text-emerald-600" />;
      case 'diy_anleitung':
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
      case 'werkstatt':
        return <Wrench className="w-5 h-5 text-emerald-600" />;
      case 'versicherung':
        return <Shield className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="partner-angebote" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="badge-emerald mb-3">Service- &amp; Lösungs-Finder</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Geprüfte Reparatur- &amp; Ersatzteil-Quellen
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ob Selbstreparatur mit Originalteilen, Reparaturauftrag an einen Meisterbetrieb oder Absicherung gegen Reparaturkosten: Finden Sie den passenden Weg für Ihr Gerät.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('alle')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'alle'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Alle Optionen ({REPAIR_PARTNERS.length})
          </button>
          <button
            onClick={() => setActiveCategory('ersatzteile')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'ersatzteile'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Ersatzteil-Versand
          </button>
          <button
            onClick={() => setActiveCategory('diy_anleitung')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'diy_anleitung'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            DIY-Anleitungen &amp; Werkzeuge
          </button>
          <button
            onClick={() => setActiveCategory('werkstatt')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'werkstatt'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Vor-Ort-Fachwerkstätten
          </button>
          <button
            onClick={() => setActiveCategory('versicherung')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === 'versicherung'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Reparaturkostenschutz
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPartners.map((partner: RepairPartner) => (
            <div
              key={partner.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                      {getCategoryIcon(partner.category)}
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block">
                        {partner.categoryLabel}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-950">
                        {partner.title}
                      </h3>
                    </div>
                  </div>
                  <span className="badge-emerald text-[10px]">
                    {partner.verifiedLabel}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-900 mb-2">
                  {partner.headline}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {partner.description}
                </p>

                <div className="space-y-2 mb-6">
                  {partner.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href={partner.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-amber w-full py-3 rounded-xl text-xs font-extrabold gap-2"
                >
                  <span>{partner.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                </a>
                <div className="text-[10px] text-slate-500 text-center mt-2">
                  * Partnerlink / Weiterleitung zum Anbieter
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Disclosure Notice */}
        <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-500 leading-relaxed">
          <span className="font-bold text-slate-700">* Transparenzhinweis zu Werbe- und Partnerlinks:</span>{' '}
          reparaturpflicht.de ist ein unabhängiges Verbraucher- und Informationsportal. Wenn Sie über einen mit einem Sternchen (*) gekennzeichneten Partnerlink ein Ersatzteil bestellen oder eine Dienstleistung anfragen, erhalten wir unter Umständen eine Provision. Für Sie entstehen dabei keinerlei Mehrkosten.
        </div>
      </div>
    </section>
  );
};
