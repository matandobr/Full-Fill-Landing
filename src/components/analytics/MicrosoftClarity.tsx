import { useEffect } from 'react';

declare global {
  interface Window {
    clarity: (...args: unknown[]) => void;
  }
}

export const MicrosoftClarity = () => {
  useEffect(() => {
    // Only load Clarity in production
    if (process.env.NODE_ENV === 'production') {
      // Load the Microsoft Clarity script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.clarity.ms/tag/rzuwbk9ika';
      document.head.appendChild(script);

      // Initialize Clarity
      window.clarity = window.clarity || function() {
        (window.clarity as any).q.push(arguments);
      };
      (window.clarity as any).q = [];

      // Cleanup function
      return () => {
        document.head.removeChild(script);
      };
    }
  }, []);

  return null;
}; 