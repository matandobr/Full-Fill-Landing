
import * as React from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <article className="min-w-60 flex-1 shrink basis-[0%]">
      <div className="flex w-full flex-col items-stretch">
        <div
          className="text-[#222834] self-center w-[52px] text-2xl font-bold whitespace-nowrap leading-none h-[52px] bg-[#EDEDFC] px-2.5 rounded-[100px] flex items-center justify-center"
          aria-label={`Step ${number}`}
        >
          {number}
        </div>
        <div className="flex w-full flex-col mt-6">
          <h3 className="text-[#222834] text-2xl font-bold leading-none">
            {title}
          </h3>
          <p className="text-[#222834] text-base font-normal leading-6 mt-6">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
