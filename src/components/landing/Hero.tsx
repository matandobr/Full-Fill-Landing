import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";

export const Hero = () => {
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
    <section 
      className="flex w-full flex-col items-center justify-center py-[50px] max-md:py-[10px] relative overflow-hidden px-5 md:px-[120px]"
    >
      <div className="flex w-full max-w-[1400px] items-center gap-10 md:gap-20 max-md:flex-col">
        <div className="w-full lg:w-2/5 flex flex-col justify-center min-w-0 max-md:max-w-full">
          <div className="w-full text-[#151357]">
            <h1 className="text-[#151357] text-[52px] font-bold leading-[62px] mt-4 max-md:max-w-full max-md:text-[34px] max-md:leading-[40px]">
              Stop Dreading RFPs.
              <span className="text-[#5E5ADB] block">Start Winning Them.</span>
            </h1>
          </div>
          <p className="text-[#222834] text-xl font-normal leading-7 mt-10 max-md:max-w-full max-md:text-lg">
            Full-Fill helps sales engineers and presales teams respond to RFPs, RFIs, and technical questionnaires 
            5x faster with AI-powered draft responses based on your existing content.
          </p>
          <div className="flex items-center gap-5 text-sm font-medium tracking-[0.28px] leading-none mt-10 max-md:flex-wrap max-md:gap-3">
            <Button 
              className="text-white self-stretch shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_0px_0px_1px_#5E5ADB] min-h-[50px] gap-2 overflow-hidden bg-[#5E5ADB] my-auto px-6 py-[15px] rounded-md text-lg max-md:text-base max-md:px-4 flex-1 max-md:flex-none"
              onClick={() => window.location.href = 'https://app.full-fill.ai/register'}
            >
              Start Your Free Trial
            </Button>
            <Button 
              variant="outline"
              className="text-[#464F60] self-stretch shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(70,79,96,0.16)] min-h-[50px] gap-2 overflow-hidden bg-white my-auto px-6 py-[15px] rounded-md text-lg max-md:text-base max-md:px-4 flex-1 max-md:flex-none"
              onClick={() => scrollToSection('how-it-works')}
            >
              See How It Works
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-6 text-base text-[#222834] max-md:flex-col max-md:items-start max-md:gap-4 max-md:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-4 text-[#5E5ADB]" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 max-md:mt-8">
          <img 
            src="/screenshots/questionnaire.jpeg" 
            alt="Full-Fill AI questionnaire interface showing RFP response automation and document analysis capabilities for sales engineers and presales teams"
            className="w-full h-auto rounded-lg shadow-2xl"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};
