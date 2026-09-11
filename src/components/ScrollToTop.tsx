import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 w-11 h-11 rounded-full bg-slate-900 text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center border border-slate-700 hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:-translate-y-0.5"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
