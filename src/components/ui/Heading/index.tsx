"use client"

import React from "react";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  uppercase?: boolean;
}

export function Heading({ 
  level = 1, 
  children, 
  className = "",
  uppercase = false 
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = "text-[#333333] leading-tight";
  const uppercaseStyle = uppercase ? "uppercase tracking-wide" : "";
  
  // Use the predefined heading classes with reduced margins
  const headingClass = {
    1: "heading-1 mb-6",
    2: "heading-2 mb-5",
    3: "heading-3 mb-4",
    4: "heading-4 mb-3",
    5: "text-base font-medium mb-2",
    6: "text-sm font-medium mb-2",
  }[level];
  
  return (
    <Tag className={`${headingFont.className} ${baseStyles} ${headingClass} ${uppercaseStyle} ${className}`}>
      {children}
    </Tag>
  );
}