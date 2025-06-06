
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

interface PricingButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured';
  className?: string;
}

export const PricingButton: React.FC<PricingButtonProps> = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  const isFeatured = variant === 'featured';

  return (
    <Button
      className={cn(
        "w-full font-semibold text-sm py-3 rounded-lg transition-colors",
        isFeatured 
          ? "bg-white text-[#5E5ADB] hover:bg-gray-100" 
          : "bg-[#5E5ADB] text-white hover:bg-[#4A46C7]",
        className
      )}
    >
      {children}
    </Button>
  );
};
