import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Load the Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-GWCWMKB5CZ';
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-GWCWMKB5CZ');

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
    };
  }, []);

  return null;
}; 