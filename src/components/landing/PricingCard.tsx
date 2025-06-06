
import React from 'react';
import { FeatureList } from './FeatureList';
import { PricingButton } from './PricingButton';
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: Array<{ icon: string; text: string; }>;
  variant?: 'default' | 'featured';
  className?: string;
  billingPeriod?: 'monthly' | 'annually';
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  variant = 'default',
  className,
  billingPeriod = 'monthly'
}) => {
  const isFeatured = variant === 'featured';
  
  return (
    <article
      className={cn(
        "flex flex-col bg-white border border-[#EDEDFC] shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] rounded-xl",
        isFeatured 
          ? "bg-[#5E5ADB] border-[#5E5ADB] w-[320px] min-h-[520px]" 
          : "w-[300px] min-h-[500px]",
        className
      )}
    >
      <div className="flex-1 px-6 py-8">
        <header className="mb-6">
          <h2 
            className={cn(
              "text-xl font-bold mb-2",
              isFeatured ? "text-white" : "text-[#151357]"
            )}
          >
            {title}
          </h2>
          <p 
            className={cn(
              "text-sm font-medium leading-relaxed",
              isFeatured ? "text-white/90" : "text-[#222834]"
            )}
          >
            {description}
          </p>
        </header>

        <div className="mb-6">
          <img
            src={isFeatured ? "https://cdn.builder.io/api/v1/image/assets/61e7709b1abc4478b5f5acc4cce8ef36/0588e34392ab5ec752c6f9f43bd39b36caac09bd?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/61e7709b1abc4478b5f5acc4cce8ef36/9a8fcc57e6109280360d419d6b20b375aee241b9?placeholderIfAbsent=true"}
            className="w-full h-px object-contain stroke-[#EDEDFC]"
            alt=""
          />
          
          <div className="flex items-end gap-1 mt-6 mb-6">
            <div className={cn(
              "font-bold leading-none text-4xl",
              isFeatured ? "text-white" : "text-[#151357]"
            )}>
              {price}
            </div>
            <div className={cn(
              "font-medium text-base pb-1",
              isFeatured ? "text-white/90" : "text-[#222834]"
            )}>
              / {billingPeriod}
            </div>
          </div>

          <img
            src={isFeatured ? "https://cdn.builder.io/api/v1/image/assets/61e7709b1abc4478b5f5acc4cce8ef36/3259bcc0892d64a9b339ae2cde348371239c9b68?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/61e7709b1abc4478b5f5acc4cce8ef36/9a8fcc57e6109280360d419d6b20b375aee241b9?placeholderIfAbsent=true"}
            className="w-full h-px object-contain stroke-[#EDEDFC]"
            alt=""
          />
        </div>

        <div className="mb-8">
          <h3 className={cn(
            "font-bold text-base mb-4",
            isFeatured ? "text-white" : "text-[#151357]"
          )}>
            What's included
          </h3>
          
          <FeatureList 
            features={features} 
            variant={variant}
          />
        </div>

        <PricingButton variant={variant}>
          Get Started
        </PricingButton>
      </div>
    </article>
  );
};
