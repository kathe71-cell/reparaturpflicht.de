import React from 'react';
import { ArrowLeft, Shield, Lock, Server, UserCheck } from 'lucide-react';

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
          <span className="badge-emerald mb-2">DSGVO &amp; TDDDG Datenschutzinformationen</span>
          <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Transparente Angaben über Datenverarbeitung und Hosting auf reparaturpflicht.de
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
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, TDDDG) sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Auf dieser Webseite werden zur technischen Bereitstellung und Reichweitenanalyse Skripte externer Dienstleister (Vercel Inc.) eingebunden.
            </p>
          </section>

          {/* 2. Verantwortliche Stelle */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-600" />
              2. Verantwortliche Stelle
            </h2>
            <div className="text-xs text-slate-700">
              <p>Verantwortlicher im Sinne der DSGVO ist Jens Kathe (Kassel). Vollständige Anschrift und Kontaktmöglichkeiten finden Sie im <a href="/impressum" className="text-emerald-700 font-bold hover:underline">Impressum</a>.</p>
            </div>
          </section>

          {/* 3. Hosting (Vercel Inc.) */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-600" />
              3. Hosting (Vercel Inc.) &amp; Server-Logs
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Diese Webseite wird bei Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf der Seite erfasst Vercel automatische Server-Log-Dateien (u. a. IP-Adresse, IP-Standort, Browsertyp, Zeitpunkt der Anfrage).
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und schnellen Bereitstellung unseres Online-Angebots).
            </p>
          </section>


          {/* 4. Vercel Web Analytics */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              4. Vercel Web Analytics
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wir nutzen Vercel Web Analytics zur anonymisierten statistischen Auswertung der Besucherzahlen. Der Dienst speichert keine dauerhaften Tracking-Cookies auf Ihrem Endgerät und pseudonymisiert IP-Adressen direkt bei der Übertragung.
            </p>
          </section>

          {/* 5. Interaktive Tools */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              5. Clientseitige Ausführung der Prüf-Tools
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Der interaktive Rechte-Prüfer und der Wirtschaftlichkeitsrechner arbeiten lokal in Ihrem Browser. Ihre Eingaben (Gerätealter, Preis, Mangelart) werden nicht auf unseren Servern gespeichert.
            </p>
          </section>

          {/* 6. Betroffenenrechte */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              6. Ihre Betroffenenrechte
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) und Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde (Art. 77 DSGVO). Zur Ausübung Ihrer Rechte wenden Sie sich an jens@kathe.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
