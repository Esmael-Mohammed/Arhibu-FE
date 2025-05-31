import React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ onValueChange, children, ...props }) => (
  <select
    {...props}
    onChange={e => {
      props.onChange?.(e);
      onValueChange?.(e.target.value);
    }}
    className={`block px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${props.className || ""}`}
  >
    {children}
  </select>
);

export const SelectTrigger: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => (
  <option value="" disabled hidden>{placeholder}</option>
);

export const SelectContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => <>{children}</>;

export const SelectItem: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>> = ({ children, ...props }) => (
  <option {...props}>{children}</option>
);