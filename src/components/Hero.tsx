import React from 'react';
import { ShieldCheck, CheckCircle2, Calculator, Sparkles, Scale, Clock, RefreshCw, BookmarkCheck, Calendar, Award } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>EU-Richtlinie 2024/1799 &amp; Deutsches Ökodesign-Recht</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6">
            Das <span className="text-emerald-700 underline decoration-amber-400 decoration-4 underline-offset-4">Recht auf Reparatur</span> &amp; <br className="hidden sm:inline" />
            Herstellerpflichten in Deutschland
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            Ihr unabhängiger Leitfaden zum europäischen <strong>Recht auf Reparatur (EU-Richtlinie 2024/1799)</strong>:
            Gesetzliche Ersatzteilfristen (7–10 Jahre), Ansprüche gegen Hersteller, bis zu 200&nbsp;€ Reparaturbonus
            und fundierter Reparatur-vs.-Neukauf-Rechner.
          </p>

          {/* Position-0 Featured Snippet Definition Box (Google AI Overviews & Rich Snippet) */}
          <div className="mb-8 bg-emerald-50/70 border-l-4 border-emerald-600 rounded-r-2xl p-5 sm:p-6 shadow-sm text-left">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-950 mb-2">
              <BookmarkCheck className="w-4 h-4 text-emerald-600" />
              <span>Auf den Punkt gebracht: Was regelt das Recht auf Reparatur?</span>
            </div>
            <p className="text-slate-950 font-bold text-sm sm:text-base leading-snug">
              Das europäische <strong>Recht auf Reparatur</strong> (Richtlinie (EU) 2024/1799) stärkt Verbraucher und Fachbetriebe: Hersteller müssen Reparaturen zu angemessenen Preisen auch nach Ablauf der Garantie anbieten, Original-Ersatzteile für 7 bis 10 Jahre bereitstellen und Software-Sperren (Part-Pairing) gegen freie Werkstätten unterlassen.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-2 border-t border-emerald-200/60">
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-emerald-700" />
                Rechtsgrundlage: <strong>Richtlinie (EU) 2024/1799</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                Gültigkeit: <strong>Deutschland &amp; EU</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                Verbraucherschutzkonform
              </span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => onScrollTo('pflichten-check')}
              className="btn-primary-amber w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-extrabold shadow-md gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-slate-950" />
              <span>Recht auf Reparatur prüfen</span>
            </button>
            <button
              onClick={() => onScrollTo('rechner')}
              className="btn-outline w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold gap-2 text-slate-900 bg-white"
            >
              <Calculator className="w-5 h-5 text-emerald-700" />
              <span>Ersparnis-Rechner starten</span>
            </button>
          </div>

          {/* Verified Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100 % unabhängig &amp; werbefrei recherchiert
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Aktuelle EU-Ökodesign-Vorgaben
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Keine versteckten Gebühren
            </span>
          </div>
        </div>

        {/* 3 Core Impact Metric Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                <Clock className="w-6 h-6" />
              </div>
              <span className="badge-emerald">Gesetzliche Pflicht</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-950 mb-1">Bis zu 10 Jahre</div>
            <div className="text-sm font-bold text-emerald-800 mb-2">Ersatzteil-Bereithaltung</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hersteller von Haushaltsgeräten müssen Ersatzteile über 7 bis 10 Jahre vorhalten und binnen maximal 15 Werktagen liefern.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500" />
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-800">
                <RefreshCw className="w-6 h-6" />
              </div>
              <span className="badge-amber">+12 Monate</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-950 mb-1">+1 Jahr Schutz</div>
            <div className="text-sm font-bold text-amber-900 mb-2">Gewährleistungs-Verlängerung</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Entscheiden Sie sich innerhalb der gesetzlichen Sachmängelhaftung für eine Reparatur, verlängert die EU-Richtlinie Ihren Schutz um 12 Monate.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-900" />
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                <Scale className="w-6 h-6" />
              </div>
              <span className="badge-slate">Förderzuschuss</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-950 mb-1">Bis zu 200 €</div>
            <div className="text-sm font-bold text-slate-900 mb-2">Staatlicher Reparaturbonus</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bundesländer wie Thüringen, Sachsen und Berlin erstatten 50 % der Rechnungssumme bei Instandsetzung durch qualifizierte Betriebe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
