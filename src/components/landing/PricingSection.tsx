import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free Trial",
      price: "0",
      description: "Perfect for trying out Full-Fill",
      features: [
        "Fully free 30-day trial",
        "No credit card required!",
        "2 Questionnaires",
        "10 Knowledgebase files",
        "20 Answers limit",
        "Email + Support tickets"
      ],
      buttonText: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      price: isYearly ? "620" : "69",
      description: "Get the most out of Full-Fill",
      features: [
        "2 Questionnaires per month",
        "25 Knowledgebase files",
        "Unlimited answers",
        "Email + Support tickets",
        "1 feature request per month"
      ],
      buttonText: "Start Free Trial",
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      price: isYearly ? "2700" : "300",
      description: "For demanding organizations",
      features: [
        "5 Questionnaires per month",
        "100 Knowledgebase files",
        "Premium support",
        "Dedicated Customer Success Manager",
        "SSO"
      ],
      buttonText: "Start Free Trial",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Full-Fill AI Questionnaire Response Platform",
            "description": "AI-powered platform for responding to customer Questionnaires, RFPs and RFIs",
            "brand": {
              "@type": "Brand",
              "name": "Full-Fill"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Free Trial",
                "price": "0",
                "priceCurrency": "USD",
                "description": "30-day free trial with no credit card required",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "2",
                  "unitText": "questionnaires"
                }
              },
              {
                "@type": "Offer",
                "name": "Pro Plan",
                "price": isYearly ? "620" : "69",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": isYearly ? "620" : "69",
                  "priceCurrency": "USD",
                  "billingIncrement": isYearly ? "P1Y" : "P1M"
                }
              },
              {
                "@type": "Offer",
                "name": "Enterprise Plan",
                "price": isYearly ? "2700" : "300",
                "priceCurrency": "USD",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": isYearly ? "2700" : "300",
                  "priceCurrency": "USD",
                  "billingIncrement": isYearly ? "P1Y" : "P1M"
                }
              }
            ]
          })
        }}
      />
      <div className="max-w-[1400px] mx-auto px-[120px] max-md:px-5">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-8">Choose the plan that's right for your team</p>
          
          <div className="flex items-center justify-center gap-3">
            <Label htmlFor="billing-toggle" className="text-gray-600">Monthly</Label>
            <Switch
              id="billing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <Label htmlFor="billing-toggle" className="text-gray-600">Yearly (Save 25%)</Label>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative ${
                plan.highlighted ? 'ring-2 ring-[#5E5ADB]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#5E5ADB] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  {plan.name !== "Free Trial" && (
                    <span className="text-gray-600">/{isYearly ? 'year' : 'month'}</span>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5E5ADB] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-[#5E5ADB] hover:bg-[#4A46C7] text-white' 
                    : 'bg-white text-[#5E5ADB] border-[#5E5ADB] hover:bg-[#5E5ADB] hover:text-white'
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => window.location.href = 'https://app.full-fill.ai/register'}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
