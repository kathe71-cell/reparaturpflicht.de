import React, { useState } from 'react';
import { Wrench, ShieldCheck, Menu, X, BookOpen, Calculator, Award } from 'lucide-react';

interface NavbarProps {
  currentView?: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView: _currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string, hash?: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1 shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 shadow-sm border border-slate-800 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
                reparatur<span className="text-emerald-600">pflicht</span><span className="text-amber-600">.de</span>
              </span>
              <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                Recht auf Reparatur • Verbraucher-Kompass
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-7 text-xs xl:text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNavClick('home', 'pflichten-check')}
              className="hover:text-emerald-600 transition-colors py-2 flex items-center gap-1.5 whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pflichten-Check</span>
            </button>
            <button
              onClick={() => handleNavClick('home', 'rechner')}
              className="hover:text-emerald-600 transition-colors py-2 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ersparnis-Rechner</span>
            </button>
            <button
              onClick={() => handleNavClick('home', 'matrix')}
              className="hover:text-emerald-600 transition-colors py-2 whitespace-nowrap"
            >
              Geräte-Matrix
            </button>
            <button
              onClick={() => handleNavClick('home', 'bonus')}
              className="hover:text-emerald-600 transition-colors py-2 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Reparaturbonus</span>
            </button>
            <button
              onClick={() => handleNavClick('home', 'ratgeber')}
              className="hover:text-emerald-600 transition-colors py-2 flex items-center gap-1.5 whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Ratgeber</span>
            </button>
            <button
              onClick={() => handleNavClick('home', 'faq')}
              className="hover:text-emerald-600 transition-colors py-2 whitespace-nowrap"
            >
              FAQ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => handleNavClick('home', 'pflichten-check')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Pflichten-Check für Ihr Gerät
            </button>
            <button
              onClick={() => handleNavClick('home', 'rechner')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              Kosten- &amp; Ersparnisrechner
            </button>
            <button
              onClick={() => handleNavClick('home', 'matrix')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600"
            >
              Geräte- &amp; Pflichtenmatrix
            </button>
            <button
              onClick={() => handleNavClick('home', 'bonus')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-600" />
              Reparaturbonus nach Bundesland
            </button>
            <button
              onClick={() => handleNavClick('home', 'ratgeber')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              Juristischer Ratgeber
            </button>
            <button
              onClick={() => handleNavClick('home', 'faq')}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600"
            >
              Häufige Fragen (FAQ)
            </button>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <button onClick={() => handleNavClick('impressum')} className="hover:underline py-1">
                Impressum (§ 5 DDG)
              </button>
              <button onClick={() => handleNavClick('datenschutz')} className="hover:underline py-1">
                Datenschutz
              </button>
            </div>
            <button
              onClick={() => handleNavClick('home', 'pflichten-check')}
              className="btn-primary-amber w-full py-3 rounded-lg text-sm mt-2"
            >
              Rechte jetzt prüfen
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
