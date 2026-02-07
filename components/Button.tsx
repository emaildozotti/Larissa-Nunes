import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-block font-sans font-semibold tracking-wider uppercase transition-all duration-300 py-4 px-8 text-sm md:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-light hover:shadow-lg border border-gold hover:border-gold-light",
    secondary: "bg-royal text-white hover:bg-opacity-90 border border-royal",
    outline: "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white"
  };

  const widthStyle = fullWidth ? "w-full text-center" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};