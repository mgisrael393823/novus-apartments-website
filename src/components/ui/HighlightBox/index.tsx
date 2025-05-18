"use client"

import React from "react";

interface HighlightBoxProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export function HighlightBox({ 
  children, 
  variant = "primary",
  className = ""
}: HighlightBoxProps) {
  const variantStyles = {
    primary: "bg-[#F9F8F4] border-l-4 border-[#333333]",
    secondary: "bg-white border border-[#E5E2D9]",
    accent: "bg-[#F9F8F4] border-l-4 border-[#CAB06B]"
  }[variant];
  
  return (
    <div className={`highlight-box ${variantStyles} ${className}`}>
      {children}
    </div>
  );
}