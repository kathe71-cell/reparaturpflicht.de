import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DutyChecker } from './components/DutyChecker';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ComplianceMatrix } from './components/ComplianceMatrix';
import { BonusGuide } from './components/BonusGuide';
import { LegalGuide } from './components/LegalGuide';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { VercelAnalytics } from './components/VercelAnalytics';

export function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [embedCopied, setEmbedCopied] = useState(false);

  useEffect(() => {
    // Parse current pathname on mount
    const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
    if (path === 'impressum' || path === 'zimpressum') {
      setCurrentView('impressum');
    } else if (path === 'datenschutz') {
      setCurrentView('datenschutz');
    } else if (path === 'rechner-embed') {
      setCurrentView('rechner-embed');
    }

    const handlePopState = () => {
      const currentPath = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
      if (currentPath === 'impressum' || currentPath === 'zimpressum') {
        setCurrentView('impressum');
      } else if (currentPath === 'datenschutz') {
        setCurrentView('datenschutz');
      } else if (currentPath === 'rechner-embed') {
        setCurrentView('rechner-embed');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    if (view === 'impressum') {
      window.history.pushState({}, '', '/impressum');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'datenschutz') {
      window.history.pushState({}, '', '/datenschutz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'rechner-embed') {
      window.history.pushState({}, '', '/rechner-embed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const copyEmbedCode = () => {
    const code = `<iframe src="https://reparaturpflicht.de/rechner-embed" width="100%" height="750" frameborder="0" style="border:none; border-radius:16px; overflow:hidden; max-width:860px; box-shadow:0 4px 20px rgba(0,0,0,0.08);" title="Reparatur Ersparnisrechner"></iframe>\n<p style="font-size:12px;color:#64748b;margin-top:6px;">Bereitgestellt von <a href="https://reparaturpflicht.de" target="_blank" rel="noopener" style="color:#047857;text-decoration:underline;font-weight:bold;">reparaturpflicht.de</a></p>`;
    navigator.clipboard.writeText(code);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2500);
  };

  // Standalone embed view for iframes
  if (currentView === 'rechner-embed') {
    return (
      <div className="min-h-screen bg-slate-50 p-2 sm:p-4 text-slate-900 flex flex-col justify-between">
        <SavingsCalculator />
        <div className="text-center py-3 text-xs font-semibold text-slate-500 border-t border-slate-200 mt-6 bg-white/80 rounded-xl p-3 shadow-xs">
          Berechnung nach EU-Richtlinie 2024/1799 · Widget bereitgestellt von{' '}
          <a
            href="https://reparaturpflicht.de"
            target="_blank"
            rel="noopener"
            className="text-emerald-700 hover:text-emerald-800 font-extrabold hover:underline"
          >
            reparaturpflicht.de – Recht auf Reparatur
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentView === 'impressum' ? (
          <Impressum onBack={() => navigateTo('home')} />
        ) : currentView === 'datenschutz' ? (
          <Datenschutz onBack={() => navigateTo('home')} />
        ) : (
          <>
            <Hero onScrollTo={scrollToSection} />
            <DutyChecker />
            <SavingsCalculator />

            {/* Embed Widget Box (Backlink Magnet) */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 my-16">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Kostenloses Website-Widget
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mt-1">
                      Reparatur-Ersparnisrechner auf Ihrer Website einbinden
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Ideal für Werkstätten, Elektronik-Blogs, Verbraucherportale und Repair-Cafés.
                    </p>
                  </div>
                  <button
                    onClick={copyEmbedCode}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 shrink-0"
                  >
                    <span>{embedCopied ? '✓ HTML-Code kopiert!' : 'Code kopieren'}</span>
                  </button>
                </div>
                <div className="mt-4 bg-slate-900 text-slate-300 p-3.5 rounded-xl font-mono text-xs overflow-x-auto select-all">
                  <code>{`<iframe src="https://reparaturpflicht.de/rechner-embed" width="100%" height="750" frameborder="0"></iframe>`}</code>
                </div>
              </div>
            </div>

            <ComplianceMatrix />
            <BonusGuide />
            <LegalGuide />

            {/* E-E-A-T Editorial Trust Box */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
                      RP
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-black text-slate-950 text-base">Fachredaktion reparaturpflicht.de</span>
                        <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black rounded-full uppercase tracking-wider border border-emerald-200">
                          Geprüfter Stand: September 2026
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Juristische &amp; ökodesign-rechtliche Analyse nach Richtlinie (EU) 2024/1799 &amp; BGB-Verbraucherrecht
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 self-start sm:self-auto">
                    <span>EU-Konformität geprüft</span>
                  </div>
                </div>
                <div className="pt-5 text-xs text-slate-600 leading-relaxed font-medium">
                  Unsere Fachredaktion analysiert europäische Gesetzgebungsverfahren im Bereich Right-to-Repair und Kreislaufwirtschaft. Alle Angaben zu Ersatzteilfristen und Herstellerpflichten basieren auf amtlichen Veröffentlichungen des Europäischen Parlaments und des Bundesministeriums für Umwelt, Naturschutz und nukleare Sicherheit (BMUV).
                </div>
              </div>
            </div>

            <FaqSection />
            <StickyMobileBar onCheckRights={() => scrollToSection('pflichten-check')} />
          </>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
      <VercelAnalytics currentView={currentView} />
    </div>
  );
}

export default App;
