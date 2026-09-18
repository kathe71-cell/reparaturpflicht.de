import React from 'react';
import { Scale, CheckCircle2, ShieldCheck, ReceiptText, AlertTriangle, FileText } from 'lucide-react';

export const LegalGuide: React.FC = () => {
  return (
    <section id="ratgeber" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-slate mb-3">Juristischer Orientierungsrahmen</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Recht auf Reparatur: Was gilt juristisch wirklich?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Saubere Trennung zwischen Verkäufer-Gewährleistung, Ökodesign-Ersatzteilpflichten der Hersteller und der EU-Richtlinie 2024/1799.
          </p>
        </div>

        {/* 3 Core Legal Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: Verkäufer Gewährleistung */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-950">1. Händler-Gewährleistung</h3>
                  <span className="badge-emerald text-[10px]">§ 437 &amp; § 477 BGB</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Vertragspartner ist der <strong>Verkäufer (Händler)</strong>. Gilt 2 Jahre ab Kauf bei Mängeln, die bereits bei Gefahrübergang vorlagen.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Beweislastumkehr zugunsten des Käufers in den ersten 12 Monaten.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Sturzschäden / Eigenverschulden sind <strong>nicht</strong> abgedeckt.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Ansprechpartner: Ihr Verkäufer / Händler
            </div>
          </div>

          {/* Pillar 2: Ökodesign Ersatzteilpflicht */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-800 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-950">2. Ökodesign-Teilepflicht</h3>
                  <span className="badge-amber text-[10px]">EU-Ökodesign-Recht</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Verpflichtet <strong>Hersteller &amp; Importeure</strong>, Ersatzteile für erfasste Geräte 7 bis 10 Jahre ab Inverkehrbringen des letzten Exemplars des Modells vorzuhalten.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gilt u. a. für Waschmaschinen, Geschirrspüler, Kühlschränke, ab 20.06.2025 auch Smartphones.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Keine</strong> Teilepflicht für Laptops / PCs nach aktuellem Recht.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Ansprechpartner: Gerätehersteller / Importeur
            </div>
          </div>

          {/* Pillar 3: EU Richtlinie 2024/1799 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-800 font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-950">3. EU RL 2024/1799</h3>
                  <span className="badge-slate text-[10px]">Stichtag 31.07.2026</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                EU-Richtlinie über gemeinsame Vorschriften zur Reparatur. Verpflichtet Hersteller zur Reparatur zu angemessenen Preisen nach Garantieablauf.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Verbot von Part-Pairing / Software-Sperren gegen freie Werkstätten.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mitgliedstaaten haben Zeit zur nationalen BGB-Umsetzung bis <strong>31.07.2026</strong>.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Gilt für erfasste Gerätegruppen
            </div>
          </div>
        </div>

        {/* Steuertipp: Handwerkerleistung § 35a EStG */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <ReceiptText className="w-5 h-5" />
              </div>
              <div>
                <span className="badge-amber text-[10px] mb-1">Steuerrecht nach § 35a EStG</span>
                <h3 className="text-base font-extrabold text-slate-950">
                  Reparaturen im Haushalt steuerlich geltend machen (20 % Abzug)
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              Bis zu 1.200 € Steuerabzug / Jahr möglich
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Wird ein fest eingebautes Haushaltsgerät (z. B. Einbau-Geschirrspüler, Herd, Waschmaschine) von einem Handwerksbetrieb in Ihrem Haushalt repariert, können Sie die reinen Arbeits- und Anfahrtskosten nach § 35a EStG zu 20 % direkt von Ihrer Einkommensteuerschuld abziehen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-1">Voraussetzung 1: Banküberweisung</strong>
              <span className="text-slate-600">Rechnungsbetrag muss unbar auf das Konto des Betriebes überwiesen werden (keine Barzahlung).</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-1">Voraussetzung 2: Nachweis im Haushalt</strong>
              <span className="text-slate-600">Arbeitsleistung muss in der selbst genutzten Wohnung oder dem eigenen Grundstück erbracht werden.</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-1">Voraussetzung 3: Getrennter Ausweis</strong>
              <span className="text-slate-600">Arbeitskosten und Materialkosten müssen auf der Handwerkerrechnung separat aufgeführt sein.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
