import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="flex w-full items-center text-base leading-none px-4 sm:px-8 md:px-[120px] py-6 max-md:max-w-full relative">
      <div className="flex-shrink-0 flex items-center gap-3">
        <img 
          src="/only_logo.svg" 
          alt="Full-Fill - AI-powered RFP response automation platform logo" 
          className="h-10 w-auto"
          width="40"
          height="40"
        />
         {/* <span className="text-[#151357] text-3xl font-bold">Full-Fill</span> */}
        <span className="text-[#151357] text-3xl font-['Helvetica_Neue_Condensed']">Full-Fill</span>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[#222834] font-semibold text-center tracking-[0.28px] absolute left-1/2 transform -translate-x-1/2">
        {/* <button 
          onClick={() => scrollToSection('features')}
          className="hover:text-[#5E5ADB] transition-colors cursor-pointer whitespace-nowrap text-lg"
        >
          Features
        </button> */}
        <button 
          onClick={() => scrollToSection('how-it-works')}
          className="hover:text-[#5E5ADB] transition-colors cursor-pointer whitespace-nowrap text-lg"
        >
          How it works
        </button>
        <button 
          onClick={() => scrollToSection('pricing')}
          className="hover:text-[#5E5ADB] transition-colors cursor-pointer whitespace-nowrap text-lg"
        >
          Pricing
        </button>
        <Link 
          to="/blog"
          className="hover:text-[#5E5ADB] transition-colors cursor-pointer whitespace-nowrap text-lg"
        >
          Blog
        </Link>
        <button 
          onClick={() => scrollToSection('faq')}
          className="hover:text-[#5E5ADB] transition-colors cursor-pointer whitespace-nowrap text-lg"
        >
          FAQ
        </button>
      </nav>
      
      <div className="ml-auto flex items-center gap-4 max-md:hidden">
        <Button 
          variant="outline" 
          className="text-[#5E5ADB] border-[#5E5ADB] hover:bg-[#5E5ADB] hover:text-white"
          onClick={() => window.location.href = 'https://app.full-fill.ai/login'}
        >
          Sign In
        </Button>
        <Button 
          className="bg-[#5E5ADB] hover:bg-[#4A46C7]"
          onClick={() => window.location.href = 'https://app.full-fill.ai/register'}
        >
          Start Free Trial
        </Button>
      </div>
    </header>
  );
};
