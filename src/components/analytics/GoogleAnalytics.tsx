import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Only load Google Analytics in production
    if (import.meta.env.MODE !== 'production') {
      console.log('Google Analytics: Skipped in development mode');
      return;
    }

    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-GWCWMKB5CZ';
    
    // Skip if no measurement ID is provided
    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics: No measurement ID provided');
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    // Initialize gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    
    // Attach gtag to window for global access
    window.gtag = gtag;
    
    script.onload = () => {
      // Configure Google Analytics
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        // Enhanced measurement for better tracking
        send_page_view: true,
        // Anonymize IP addresses for privacy
        anonymize_ip: true,
      });

      // Track initial page view
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });

      console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
    };

    script.onerror = () => {
      console.error('Failed to load Google Analytics script');
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      try {
        document.head.removeChild(script);
      } catch (error) {
        console.warn('Failed to cleanup Google Analytics script:', error);
      }
    };
  }, []);

  return null;
}; 