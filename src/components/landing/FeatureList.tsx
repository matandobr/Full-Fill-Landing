import React from 'react';
import { cn } from "@/lib/utils";
import { FileText, Brain, Download, Users } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  text: string;
}

interface FeatureListProps {
  features: Feature[];
  variant?: 'default' | 'featured';
}

export const FeatureList: React.FC<FeatureListProps> = ({ features, variant = 'default' }) => {
  const isFeatured = variant === 'featured';

  return (
    <ul className="space-y-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <li key={index} className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-[#5E5ADB] flex-shrink-0" />
            <span
              className={cn(
                "text-sm font-medium",
                isFeatured ? "text-white/90" : "text-[#222834]"
              )}
            >
              {feature.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
