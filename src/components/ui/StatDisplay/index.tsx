import React from "react";

interface StatDisplayProps {
  title: string;
  value: string;
  description?: string;
  trend?: "up" | "down" | "neutral";
}

export function StatDisplay({ 
  title, 
  value, 
  description, 
  trend 
}: StatDisplayProps) {
  const trendIcon = {
    up: "↑",
    down: "↓",
    neutral: "→"
  }[trend || "neutral"];
  
  const trendColor = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-gray-500"
  }[trend || "neutral"];
  
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-sm">
      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">{title}</h4>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold">{value}</span>
        {trend && (
          <span className={`${trendColor} text-lg mb-1`}>{trendIcon}</span>
        )}
      </div>
      {description && (
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      )}
    </div>
  );
}