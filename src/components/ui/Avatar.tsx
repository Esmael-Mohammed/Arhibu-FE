import React from 'react';

export const Avatar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div
    className={`inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className ?? ''}`}
    {...props}
  >
    {children}
  </div>
);

type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, ...props }) =>
  src ? <img src={src} alt={alt} className="w-full h-full object-cover" {...props} /> : null;

export const AvatarFallback: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => (
  <span className={`text-gray-500 font-medium ${className ?? ''}`} {...props}>
    {children}
  </span>
);