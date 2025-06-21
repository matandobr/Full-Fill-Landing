import * as React from "react";
import { UploadCloud, Lightbulb, FileOutput } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { 
      icon: UploadCloud, 
      title: "1. Teach Your AI", 
      description: "Upload your technical documentation and previously filled Questionnaires, RFPs and RFIs. This creates your AI's knowledge foundation for generating accurate responses." 
    },
    { 
      icon: Lightbulb, 
      title: "2. Let AI Work", 
      description: "Upload any new questionnaire in any format. Our AI instantly generates answers by matching questions with your existing knowledge base." 
    },
    { 
      icon: FileOutput, 
      title: "3. Review & Submit", 
      description: "Review the AI-generated responses, make edits where needed, and regenerate specific answers. Export in your preferred format when ready." 
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F7F9FC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Use Full-Fill for Questionnaire Responses",
            "description": "Get winning Questionnaire responses in 3 simple steps with AI-powered automation",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Teach Your AI",
                "text": "Upload your technical documentation and previously completed Questionnaires, RFPs and RFIs. This creates your AI's knowledge foundation for generating accurate responses."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Let AI Work",
                "text": "Upload any new questionnaire in any format. Our AI instantly generates answers by matching questions with your existing knowledge base."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Review & Submit",
                "text": "Review the AI-generated responses, make edits where needed, and regenerate specific answers. Export in your preferred format when ready."
              }
            ]
          })
        }}
      />
      <div className="max-w-[1400px] mx-auto px-[120px] max-md:px-5">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Winning Responses in 3 Simple Steps</h2>
          <p className="text-lg text-gray-600">Transform your manual process with AI-powered responses based on your existing knowledge.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <step.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
