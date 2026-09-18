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

export default function App({ initialPath }: { initialPath?: string } = {}) {
  const getInitialView = () => {
    const rawPath = initialPath !== undefined ? initialPath : (typeof window !== 'undefined' ? window.location.pathname : '/');
    const path = rawPath.toLowerCase().replace(/^\/|\/$/g, '');
    if (path === 'impressum' || path === 'zimpressum') return 'impressum';
    if (path === 'datenschutz') return 'datenschutz';
    if (path === 'rechner-embed') return 'rechner-embed';
    return 'home';
  };
  const [currentView, setCurrentView] = useState<string>(getInitialView);
  const [embedCopied, setEmbedCopied] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
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

  // Update Route-specific SEO Metadata & Canonicals dynamically
  useEffect(() => {
    let title = 'Recht auf Reparatur 2026 | Gesetz, Pflichten & Check';
    let canonical = 'https://reparaturpflicht.de/';
    let metaDescription = 'Recht auf Reparatur in Deutschland (EU-Richtlinie 2024/1799): Gesetzliche Pflichten der Hersteller, 7–10 Jahre Ersatzteile, Reparaturbonus & Kosten-Modellrechner.';

    if (currentView === 'impressum') {
      title = 'Impressum | reparaturpflicht.de';
      canonical = 'https://reparaturpflicht.de/impressum';
      metaDescription = 'Rechtliche Anbieterkennzeichnung und Kontaktdaten von reparaturpflicht.de (Jens Kathe, Kassel) gemäß § 5 DDG.';
    } else if (currentView === 'datenschutz') {
      title = 'Datenschutzerklärung | reparaturpflicht.de';
      canonical = 'https://reparaturpflicht.de/datenschutz';
      metaDescription = 'Datenschutzinformationen zur Verarbeitung personenbezogener Daten, Vercel Hosting und AdSense auf reparaturpflicht.de.';
    } else if (currentView === 'rechner-embed') {
      title = 'Reparatur Ersparnisrechner Widget | reparaturpflicht.de';
      canonical = 'https://reparaturpflicht.de/rechner-embed';
      metaDescription = 'Interaktiver Reparatur vs. Neukauf Ersparnisrechner zum Einbinden auf externen Webseiten.';
    }

    document.title = title;

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.href = canonical;
    }

    let metaDescEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDescEl) {
      metaDescEl.content = metaDescription;
    }
  }, [currentView]);

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
    const code = `<iframe src="https://reparaturpflicht.de/rechner-embed" width="100%" height="680" frameborder="0" style="border:none; border-radius:16px; overflow:hidden; max-width:860px; min-height:680px;" title="Reparatur Ersparnisrechner"></iframe>\n<p style="font-size:12px;color:#64748b;margin-top:6px;">Bereitgestellt von <a href="https://reparaturpflicht.de" target="_blank" rel="noopener" style="color:#047857;text-decoration:underline;font-weight:bold;">reparaturpflicht.de</a></p>`;
    navigator.clipboard.writeText(code);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2500);
  };

  // Standalone embed view for iframes
  if (currentView === 'rechner-embed') {
    return (
      <div className="min-h-screen bg-slate-50 p-2 sm:p-4 text-slate-900 flex flex-col justify-between">
        <SavingsCalculator isEmbed={true} />
        <div className="text-center py-2.5 text-xs font-semibold text-slate-500 border-t border-slate-200 mt-4 bg-white/90 rounded-xl p-2.5 shadow-xs">
          Modellrechnung TCO · Widget bereitgestellt von{' '}
          <a
            href="https://reparaturpflicht.de"
            target="_blank"
            rel="noopener noreferrer"
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
            <ComplianceMatrix />
            <BonusGuide />
            <LegalGuide />
            <FaqSection />

            {/* Embed Widget Box */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 my-16">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      Website-Widget
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mt-1">
                      Reparatur-Ersparnisrechner auf Ihrer Website einbinden
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Ideal für Werkstätten, Blogs, Verbraucherportale und Repair-Cafés (Empfohlene Mindesthöhe: 680 px).
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
                  <code>{`<iframe src="https://reparaturpflicht.de/rechner-embed" width="100%" height="680" frameborder="0" style="border:none; border-radius:16px; min-height:680px;"></iframe>`}</code>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      {currentView === 'home' && <StickyMobileBar onCheckRights={() => scrollToSection('pflichten-check')} />}
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
