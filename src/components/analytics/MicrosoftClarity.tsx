import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: {
      (...args: unknown[]): void;
      q: unknown[];
    };
  }
}

export const MicrosoftClarity = () => {
  useEffect(() => {
    // Only load Microsoft Clarity in production
    if (import.meta.env.MODE !== 'production') {
      console.log('Microsoft Clarity: Skipped in development mode');
      return;
    }

    const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || 'rzuwbk9ika';
    
    // Skip if no Clarity ID is provided
    if (!CLARITY_ID) {
      console.warn('Microsoft Clarity: No tracking ID provided');
      return;
    }

    // Initialize Clarity function first
    if (!window.clarity) {
      const clarityFn = (...args: unknown[]) => {
        clarityFn.q.push(args);
      };
      clarityFn.q = [];
      window.clarity = clarityFn;
    }

    // Load the Microsoft Clarity script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    
    script.onload = () => {
      console.log('Microsoft Clarity initialized with ID:', CLARITY_ID);
    };

    script.onerror = () => {
      console.error('Failed to load Microsoft Clarity script');
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      try {
        document.head.removeChild(script);
      } catch (error) {
        console.warn('Failed to cleanup Microsoft Clarity script:', error);
      }
    };
  }, []);

  return null;
}; 