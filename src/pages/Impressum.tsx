import React from 'react';
import { ArrowLeft, Shield, Mail, MapPin } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

export const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
  return (
    <div className="py-12 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 mb-8 p-2 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </button>

        <div className="border-b border-slate-200 pb-6 mb-8">
          <span className="badge-slate mb-2">Rechtliche Anbieterkennzeichnung</span>
          <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Impressum
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Gesetzliche Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          {/* Angaben nach § 5 DDG */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              Angaben gemäß § 5 DDG
            </h2>
            <div className="space-y-1 font-medium text-slate-900">
              <p className="font-bold text-base">Jens Kathe</p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-600" />
              Schnelle elektronische Kontaktaufnahme
            </h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-slate-500 w-24">E-Mail:</span>
                <a href="mailto:jens@kathe.org" className="font-bold text-emerald-700 hover:underline">
                  jens@kathe.org
                </a>
              </p>
            </div>
          </section>

          {/* Redaktionell Verantwortlicher */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV
            </h2>
            <p className="font-medium text-slate-900">
              Jens Kathe<br />
              Hansastraße 6<br />
              34119 Kassel<br />
              Deutschland
            </p>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              Verbraucherstreitbeilegung
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die frühere Online-Streitbeilegungsplattform der Europäischen Kommission (OS-Plattform) wurde eingestellt.
            </p>
          </section>

          {/* Transparenzhinweis Unabhängiges Informationsportal */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              Unabhängigkeit &amp; Anzeigenschaltung
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Dieses Portal (reparaturpflicht.de) ist ein redaktionelles Informationsangebot. Es steht in keinem gesellschaftsrechtlichen Verhältnis zu den auf dieser Webseite genannten Herstellern, Marken oder Reparaturbetrieben. Alle genannten Markennamen und Warenzeichen sind Eigentum der jeweiligen Rechteinhaber.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
