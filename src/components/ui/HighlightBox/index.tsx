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
    primary: "bg-[#FCFAF5] border-l-4 border-[#333333]",
    secondary: "bg-white border border-[#E8E3D9]",
    accent: "bg-[#F8F0EA] border-l-4 border-[#E57161]"
  }[variant];
  
  return (
    <div className={`highlight-box ${variantStyles} ${className}`}>
      {children}
    </div>
  );
}