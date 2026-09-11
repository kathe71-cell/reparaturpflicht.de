import React from 'react';
import { Scale, CheckCircle2, XCircle, FileCheck, ReceiptText, ShieldCheck } from 'lucide-react';

export const LegalGuide: React.FC = () => {
  return (
    <section id="ratgeber" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-slate mb-3">Juristischer Verbraucher-Ratgeber</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Recht auf Reparatur: Was gilt wirklich?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Begriffsklarheit, Gewährleistungsfristen und Steuervorteile: So navigieren Sie sicher durch die neuen deutschen und europäischen Reparaturbestimmungen.
          </p>
        </div>

        {/* 2-Column Core Distinction: Verbraucher vs. Hersteller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Box 1: Verbraucher */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-950">
                  Gilt eine „Reparaturpflicht“ für Verbraucher?
                </h3>
                <span className="badge-emerald text-[10px]">Freiwillig &amp; geschützt</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              <strong className="text-slate-900">Nein, es existiert kein Zwang zur Reparatur.</strong> Verbraucher können jederzeit frei entscheiden, ob ein defektes Gerät repariert, verschenkt, als Teilespender genutzt oder nach dem Elektro- und Elektronikgerätegesetz (ElektroG) kostenfrei im Handel oder beim Wertstoffhof entsorgt wird.
            </p>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Freie Wahl des Reparaturdienstleisters (autorisiert oder unabhängig).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Recht auf Selbstreparatur mit legal erworbenen Ersatzteilen.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Kein Verlust von Gewährleistungsansprüchen bei fachgerechtem Öffnen.</span>
              </div>
            </div>
          </div>

          {/* Box 2: Hersteller & Händler */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-950">
                  Welche Pflichten haben Hersteller gesetzlich?
                </h3>
                <span className="badge-amber text-[10px]">Gesetzlich bindend</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              <strong className="text-slate-900">Hersteller tragen verbindliche Bereitstellungspflichten.</strong> Gemäß EU-Richtlinie 2024/1799 und Ökodesign-Verordnung sind Produzenten und Importeure verpflichtet, Produkte reparierbar zu konstruieren und die Infrastruktur dafür zu garantieren.
            </p>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>7 bis 10 Jahre Ersatzteilverfügbarkeit ab Ende der Baureihe.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Lieferung binnen maximal 10 bis 15 Werktagen.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Verbot von Software-Restriktionen („Part-Pairing“ / Serialisierung).</span>
              </div>
            </div>
          </div>
        </div>

        {/* Steuertipp: Handwerkerleistung § 35a EStG */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <ReceiptText className="w-5 h-5" />
              </div>
              <div>
                <span className="badge-amber text-[10px] mb-1">Steuer-Tipp nach § 35a EStG</span>
                <h3 className="text-base font-extrabold text-slate-950">
                  Reparaturen zu Hause steuerlich absetzen (20 % Ersparnis)
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              Bis zu 1.200 € Steuerabzug / Jahr
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Wird ein Haushaltsgroßgerät (z. B. Waschmaschine, Geschirrspüler, Backofen oder Kühlschrank) von einem Handwerker bei Ihnen zu Hause repariert, können Sie die <strong className="text-slate-900">Arbeits- und Fahrtkosten zu 20 % direkt von Ihrer tariflichen Einkommensteuer abziehen</strong> (gemäß § 35a Abs. 3 EStG).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="block text-slate-900 mb-1">Voraussetzung 1:</strong>
              Reparatur findet in Ihrem Haushalt statt (Vor-Ort-Service).
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="block text-slate-900 mb-1">Voraussetzung 2:</strong>
              Arbeits- und Anfahrtskosten sind auf der Rechnung getrennt vom Material ausgewiesen.
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="block text-slate-900 mb-1">Voraussetzung 3:</strong>
              Zahlung erfolgt unbar (Überweisung oder Kartenzahlung, keine Barzahlung).
            </div>
          </div>
        </div>

        {/* Do's and Don'ts Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-base font-extrabold text-slate-950 mb-6 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            Praxis-Check: Do's and Don'ts bei einem Gerätedefekt
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <div className="font-bold text-emerald-800 text-sm flex items-center gap-1.5 pb-2 border-b border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Empfohlene Schritte (Do's)
              </div>
              <div className="flex items-start gap-2.5 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                <span><strong>Typenschild fotografieren:</strong> Modellbezeichnung und genaue Serien- bzw. E-Nummer notieren, um passgenaue Ersatzteile zu identifizieren.</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                <span><strong>Kaufdatum prüfen:</strong> Liegt der Kauf unter 2 Jahre zurück, immer zuerst den Händler zur kostenlosen Nachbesserung auffordern.</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                <span><strong>Reparaturbonus prüfen:</strong> Vor Auftragsvergabe prüfen, ob Ihr Bundesland die Kosten mit bis zu 200 € bezuschusst.</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="font-bold text-rose-800 text-sm flex items-center gap-1.5 pb-2 border-b border-slate-100">
                <XCircle className="w-4 h-4 text-rose-600" />
                Vermeidbare Fehler (Don'ts)
              </div>
              <div className="flex items-start gap-2.5 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-800 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                <span><strong>Nicht vorschnell wegwerfen:</strong> Oft ist nur ein Cent-Artikel (Sicherung, Dichtung, Kondensator) defekt und lässt sich günstig tauschen.</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-800 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                <span><strong>Keine Barzahlung ohne Beleg:</strong> Ohne ordentliche Rechnung entfallen sowohl der staatliche Reparaturbonus als auch der Steuerabzug nach § 35a EStG.</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-700">
                <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-800 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                <span><strong>Keine unsachgemäße Gewaltanwendung:</strong> Verwenden Sie bei Elektronik passendes Präzisionswerkzeug und hebeln Sie nicht mit ungeeigneten Messern.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
