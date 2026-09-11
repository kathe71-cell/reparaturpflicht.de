import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Server, UserCheck } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
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
          <span className="badge-emerald mb-2">100 % DSGVO-Konform &amp; Zero-CDN</span>
          <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Informationen über die Verarbeitung Ihrer personenbezogenen Daten beim Besuch von reparaturpflicht.de
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          {/* 1. Datenschutz auf einen Blick */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              1. Datenschutz auf einen Blick
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Der Schutz Ihrer persönlichen Daten ist uns ein zentrales Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, TDDDG) sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diese Seite verwendet <strong className="text-slate-900">keine externen Webfonts (Zero-Google-Fonts)</strong>, keine Tracking-Cookies von Drittanbietern und überträgt beim reinen Aufrufen der Webseite keine IP-Adressen in Drittstaaten außerhalb der Europäischen Union.
            </p>
          </section>

          {/* 2. Verantwortliche Stelle */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-600" />
              2. Verantwortliche Stelle
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <p className="font-bold text-slate-900 text-sm">Jens Kathe</p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel, Deutschland</p>
              <p>E-Mail: <a href="mailto:jens@kathe.org" className="text-emerald-700 font-bold hover:underline">jens@kathe.org</a></p>
              <p>Telefon: +49 178 6652623</p>
            </div>
          </section>

          {/* 3. Server-Log-Dateien & Hosting */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-600" />
              3. Hosting &amp; Server-Log-Dateien
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Unser Hostinganbieter erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 mb-3">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (in der Regel anonymisiert)</li>
            </ul>
            <p className="text-xs text-slate-600 leading-relaxed">
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien Bereitstellung und IT-Sicherheit der Website).
            </p>
          </section>

          {/* 4. Lokale Rechner & Keine Speicherung */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              4. Interaktive Tools &amp; Rechner (Clientseitige Ausführung)
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sämtliche auf reparaturpflicht.de angebotenen Tools (wie der Pflichten-Check und der Kostenrechner) arbeiten rein clientseitig in Ihrem Webbrowser. Die von Ihnen ausgewählten Parameter (Gerätetyp, Reparaturkosten etc.) werden zu keinem Zeitpunkt an unsere Server übertragen oder in Profilen gespeichert.
            </p>
          </section>

          {/* 5. Keine Affiliate- oder Werbenetzwerke */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-600" />
              5. Keine Affiliate-Links oder Werbenetzwerke
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Auf dieser Webseite werden keine Affiliate-Links, Werbenetzwerke oder Tracking-Cookies von Partnershops eingebunden. Die Nutzung sämtlicher Informationsangebote und Modellrechner erfolgt ohne kommerzielles Tracking.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Es findet keine Weitergabe von Nutzungsdaten an werbetreibende Dritte statt.
            </p>
          </section>

          {/* 6. Ihre Rechte */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              6. Ihre Betroffenenrechte nach DSGVO
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO), deren Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO) oder Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie das Recht auf Datenübertragbarkeit (Art. 20 DSGVO) und ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO).
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
