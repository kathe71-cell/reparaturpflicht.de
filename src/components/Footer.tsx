import React from 'react';
import { Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1 & 2: Brand & Portal mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                reparatur<span className="text-emerald-400">pflicht</span><span className="text-amber-400">.de</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Unabhängiger Verbraucher-Leitfaden zum europäischen Recht auf Reparatur (EU-Richtlinie 2024/1799) und deutschen Ökodesign-Vorgaben. Für längere Gerätenutzung, weniger Elektroschrott und echte Kostenersparnis.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p>Jens Kathe • Hansastraße 6 • 34119 Kassel</p>
              <p>E-Mail: jens@kathe.org • Tel: +49 178 6652623</p>
              <p>Kleinunternehmer nach § 19 UStG</p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Themen &amp; Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a href="#pflichten-check" className="hover:text-emerald-400 transition-colors">
                  Pflichten-Prüfer
                </a>
              </li>
              <li>
                <a href="#rechner" className="hover:text-emerald-400 transition-colors">
                  Kosten- &amp; CO₂-Rechner
                </a>
              </li>
              <li>
                <a href="#matrix" className="hover:text-emerald-400 transition-colors">
                  Geräte-Matrix
                </a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-emerald-400 transition-colors">
                  Reparaturbonus-Kompass
                </a>
              </li>
              <li>
                <a href="#ratgeber" className="hover:text-emerald-400 transition-colors">
                  Juristischer Ratgeber
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Häufige Fragen (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Rechtliches & Verband */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Recht &amp; Standards
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => onNavigate('impressum')} className="hover:text-emerald-400 text-left transition-colors">
                  Impressum (§ 5 DDG)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('datenschutz')} className="hover:text-emerald-400 text-left transition-colors">
                  Datenschutzerklärung
                </button>
              </li>
              <li>
                <span className="text-slate-400">Richtlinie (EU) 2024/1799</span>
              </li>
              <li>
                <span className="text-slate-400">EU-Ökodesign ESPR</span>
              </li>
              <li>
                <span className="text-slate-400">BGB §§ 437 ff.</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Disclaimer & Trust */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Transparenz
            </h4>
            <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200">Unabhängigkeit:</strong> Dieses Portal ist ein unabhängiges, nicht-kommerzielles Informationsangebot und steht in keinem gesellschaftsrechtlichen Verhältnis zu den genannten Herstellern.
              </p>
              <p>
                <strong className="text-slate-200">Reine Infoseite:</strong> Sämtliche Inhalte dienen der sachlichen Verbraucheraufklärung. Es werden keine Affiliate-Links oder Werbeprovisionen eingesetzt.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} reparaturpflicht.de • Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <button onClick={() => onNavigate('impressum')} className="hover:text-slate-200">
              Impressum (§ 5 DDG)
            </button>
            <button onClick={() => onNavigate('datenschutz')} className="hover:text-slate-200">
              Datenschutz
            </button>
            <span className="text-slate-400">Zero-CDN • WCAG AAA Konform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
