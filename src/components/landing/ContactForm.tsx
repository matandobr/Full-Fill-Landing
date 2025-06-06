import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase, MessageSquare } from "lucide-react";

export const ContactForm = () => {
  return (
    <section className="py-16 md:py-24 bg-[#151357]">
      <div className="max-w-[1400px] mx-auto px-[120px] max-md:px-5 text-center">
        <Briefcase className="w-16 h-16 text-[#5E5ADB] mx-auto mb-6"/>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Transform Your RFP Process?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          Stop wasting time on manual RFP work. Start winning more deals with Full-Fill's intelligent automation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            size="lg" 
            className="bg-[#5E5ADB] hover:bg-[#4A46C7] text-white text-lg px-8 py-3 w-full sm:w-auto"
            onClick={() => window.location.href = 'https://app.full-fill.ai/register'}
          >
            Start Your Free Trial
          </Button>
          <Button 
            size="lg" 
            className="bg-[#5E5ADB] hover:bg-[#4A46C7] text-white text-lg px-8 py-3 w-full sm:w-auto"
            onClick={() => window.location.href = 'mailto:info@full-fill.ai'}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
