"use client"

import React from "react";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface StatBoxProps {
  label: string;
  value: string | number;
  description?: string;
}

export function StatBox({
  label,
  value,
  description
}: StatBoxProps) {
  return (
    <div className="bg-[#F5F5E6] rounded-sm flex-1 text-center p-6 border-r border-[#E8E3D9] last:border-r-0 transition-all hover:bg-[#F2F2E0]">
      <p className="text-xs uppercase tracking-wider text-[#333333] mb-4 font-medium">{label}</p>
      <p className="text-3xl md:text-4xl font-bold text-[#D84A38] mb-4">{value}</p>
      {description && (
        <p className="text-xs text-[#666666]">{description}</p>
      )}
    </div>
  );
}