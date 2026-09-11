import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface StickyMobileBarProps {
  onCheckRights: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onCheckRights }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-300 p-3 shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div className="text-left">
          <div className="text-xs font-black text-slate-950 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Reparatur-Rechte prüfen
          </div>
          <div className="text-[10px] text-slate-500 line-clamp-1">
            Herstellerpflichten &amp; Reparaturbonus
          </div>
        </div>

        <button
          onClick={onCheckRights}
          className="btn-primary-amber py-2 px-4 rounded-lg text-xs font-extrabold shadow-sm gap-1.5 shrink-0"
        >
          <span>Jetzt prüfen</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
        </button>
      </div>
      <div className="text-[9px] text-slate-400 text-center mt-1">
        * Unabhängiger Informationsservice • Modellrechnung
      </div>
    </div>
  );
};
