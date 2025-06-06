// Select.tsx
import React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  onValueChange,
  children,
  placeholder,
  ...props
}) => (
  <select
    {...props}
    onChange={(e) => {
      props.onChange?.(e);
      onValueChange?.(e.target.value);
    }}
    className={`block px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${props.className || ""}`}
  >
    {placeholder && (
      <option value="" disabled hidden>
        {placeholder}
      </option>
    )}
    {children}
  </select>
);


