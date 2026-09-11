import React, { useEffect } from 'react';
import { pageview } from '@vercel/analytics';

interface VercelAnalyticsProps {
  currentView: string;
}

export const VercelAnalytics: React.FC<VercelAnalyticsProps> = ({ currentView }) => {
  useEffect(() => {
    const route = currentView === 'home' ? '/' : `/${currentView}`;
    try {
      pageview({ route });
    } catch {
      // Fallback if analytics script not yet ready
    }
  }, [currentView]);

  return null;
};
