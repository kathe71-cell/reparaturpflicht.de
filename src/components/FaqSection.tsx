import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/repairData';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="badge-emerald mb-3">Antworten &amp; Rechtslage</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Fundierte juristische und verbraucherrechtliche Antworten zum Recht auf Reparatur, gesetzlichen Herstellerpflichten und Förderungen.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq: FaqItem) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700 border-emerald-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support hint */}
        <div className="mt-10 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600">
          <p className="font-bold text-slate-900 mb-1">
            Haben Sie eine spezifische Frage zu einem bestimmten Gerät oder Hersteller?
          </p>
          <p>
            Nutzen Sie unseren kostenlosen{' '}
            <a href="#pflichten-check" className="text-emerald-700 font-bold underline hover:text-emerald-800">
              Pflichten-Prüfer
            </a>{' '}
            oder wenden Sie sich an die örtlichen Verbraucherzentralen für eine individuelle Rechtsberatung.
          </p>
        </div>
      </div>
    </section>
  );
};
