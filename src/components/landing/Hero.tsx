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
    <section className="flex w-full flex-col items-stretch justify-center py-[100px] relative overflow-hidden">
      <div className="flex w-full items-center px-[120px] max-md:px-5">
        <div className="flex w-full flex-col justify-center flex-1 max-w-[600px]">
          <div className="w-full text-[#151357]">
            <h1 className="text-[#151357] text-[53px] font-bold leading-[62px] mt-4 max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
              Stop Dreading RFPs.
              <span className="text-[#5E5ADB] block">Start Winning Them.</span>
            </h1>
          </div>
          <p className="text-[#222834] text-xl font-normal leading-7 mt-10 max-md:max-w-full">
            Full-Fill helps sales engineers and presales teams respond to RFPs, RFIs, and technical questionnaires 
            5x faster with AI-powered draft responses based on your existing content.
          </p>
          <div className="flex items-center gap-5 text-sm font-medium tracking-[0.28px] leading-none mt-10">
            <Button 
              className="text-white self-stretch shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_0px_0px_1px_#5E5ADB] min-h-[50px] gap-2 overflow-hidden bg-[#5E5ADB] my-auto px-6 py-[15px] rounded-md text-lg"
              onClick={() => window.location.href = 'https://app.full-fill.ai/register'}
            >
              Start Your Free Trial
            </Button>
            <Button 
              variant="outline"
              className="text-[#464F60] self-stretch shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(70,79,96,0.16)] min-h-[50px] gap-2 overflow-hidden bg-white my-auto px-6 py-[15px] rounded-md text-lg"
              onClick={() => scrollToSection('how-it-works')}
            >
              See How It Works
            </Button>
          </div>
          <div className="flex items-center gap-12 mt-10 text-base text-[#222834]">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-4 text-[#5E5ADB]" />
              <span>Save 80% of RFP response time</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3 h-4 text-[#5E5ADB]" />
              <span>Free trial with no credit card required</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute 
        xl:right-[-240px] 2xl:right-[-100px] 3xl:right-[-1px]
        right-[-102px] top-1/2 -translate-y-1/2">
        <img 
          src="/screenshots/questionnaire.jpeg" 
          alt="Questionnaire interface preview"
          className="w-[800px] h-auto rounded-lg shadow-2xl
            xl:w-[900px]
            2xl:w-[1100px]"
        />
      </div>
    </section>
  );
};
