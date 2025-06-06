import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI generate responses?",
    answer: "Our AI analyzes your uploaded documents and past responses to draft accurate, context-aware answers tailored to your needs."
  },
  {
    question: "Can I edit the AI-generated responses?",
    answer: "Yes, you can easily edit and customize all AI-generated responses to match your specific requirements and tone."
  },
  {
    question: "What file formats are supported?",
    answer: "We support various formats including PDF, Word, Excel, and plain text files for document processing."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a free trial period to test our platform's capabilities and features."
  }
];

export const FAQ = () => {
  return (
    <section className="flex w-full flex-col items-stretch px-[120px] pt-[60px] pb-8 max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-center text-[#151357] max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <h2 className="text-[#151357] text-center text-[40px] font-bold leading-[1.2] mt-4 max-md:max-w-full">
            Frequently Asked Questions
          </h2>
        </div>
      </div>
      <div className="self-center w-[860px] max-w-full mt-[65px] max-md:mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4">
              <AccordionTrigger className="text-xl font-bold bg-[#F7F9FC] px-8 py-[21px] rounded-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#222834] px-8 py-4 bg-[#F7F9FC] rounded-b-xl text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
