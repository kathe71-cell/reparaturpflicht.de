import React from 'react';
import { Wrench } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleAnchorClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

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
              Unabhängiges Informationsportal zum europäischen Recht auf Reparatur (EU-Richtlinie 2024/1799) und deutschen Ökodesign-Vorgaben. Für längere Gerätenutzung und nachvollziehbare Verbraucherrechte.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p>Redaktioneller Leitfaden</p>
              <p>Vollständige Betreiberangaben siehe Impressum</p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Themen &amp; Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a
                  href="/#pflichten-check"
                  onClick={(e) => handleAnchorClick(e, 'pflichten-check')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Rechte- &amp; Pflichten-Prüfer
                </a>
              </li>
              <li>
                <a
                  href="/#rechner"
                  onClick={(e) => handleAnchorClick(e, 'rechner')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  TCO-Kostenrechner
                </a>
              </li>
              <li>
                <a
                  href="/#matrix"
                  onClick={(e) => handleAnchorClick(e, 'matrix')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Geräte-Matrix
                </a>
              </li>
              <li>
                <a
                  href="/#bonus"
                  onClick={(e) => handleAnchorClick(e, 'bonus')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Reparaturbonus-Status
                </a>
              </li>
              <li>
                <a
                  href="/#ratgeber"
                  onClick={(e) => handleAnchorClick(e, 'ratgeber')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Juristischer Ratgeber
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => handleAnchorClick(e, 'faq')}
                  className="hover:text-emerald-400 transition-colors"
                >
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
                <span className="text-slate-400">EU-Ökodesign (ESPR)</span>
              </li>
              <li>
                <span className="text-slate-400">BGB §§ 437 ff.</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Disclaimer */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Transparenz
            </h4>
            <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200">Unabhängigkeit:</strong> Dieses Portal steht in keinem gesellschaftsrechtlichen Verhältnis zu den genannten Herstellern.
              </p>
              <p>
                <strong className="text-slate-200">Infoseite:</strong> Sämtliche Inhalte dienen der sachlichen Verbraucheraufklärung und Rechtsorientierung.
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
              Datenschutzerklärung
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
