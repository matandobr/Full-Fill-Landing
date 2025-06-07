'use client';

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-gray-600">
          <p>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. Read our{' '}
            <a 
              href="/documents/Cookie Policy.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5E5ADB] hover:underline"
            >
              Cookie Policy
            </a>
            {' '}to learn more.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => setIsVisible(false)}
            className="text-sm px-4 py-2 h-auto"
          >
            <X className="w-4 h-4 mr-2" />
            Dismiss
          </Button>
          <Button
            onClick={acceptCookies}
            className="text-sm px-4 py-2 h-auto bg-[#5E5ADB] hover:bg-[#4A47B0]"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}; 