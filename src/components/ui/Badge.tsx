import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge: React.FC<BadgeProps> = ({ className = "", ...props }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold ${className}`}
    {...props}
  />
);