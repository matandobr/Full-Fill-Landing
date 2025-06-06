import React from 'react';
import { CheckCircle, FileText, Brain, Download, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: FileText,
      title: "AI-Powered Response Generation",
      description: "Instantly generate high-quality, accurate answers based on past documents and smart AI recommendations.",
      benefit: "Save 70% of your response writing time"
    },
    {
      icon: Brain,
      title: "Customizable Editing & Refinement",
      description: "Easily review, edit, and fine-tune AI-generated responses to match your unique needs and tone.",
      benefit: "Maintain your brand voice and expertise"
    },
    {
      icon: Download,
      title: "Seamless Export & Integration",
      description: "Download your completed responses in XLSX format and integrate smoothly into your existing workflow.",
      benefit: "Perfect formatting every time"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team to review and improve responses before submission.",
      benefit: "Streamlined team workflows"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-[120px] max-md:px-5">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Transform Your RFP Workflow</h2>
          <p className="text-lg text-gray-600">Full-Fill is packed with powerful features designed to save you time and boost your win rates.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-full">
                <feature.icon className="w-7 h-7 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-2">{feature.description}</p>
                <p className="text-indigo-600 font-medium flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  {feature.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
