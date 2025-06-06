import React from 'react';

const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
  <input type="checkbox" {...props} />
);

export default Checkbox;