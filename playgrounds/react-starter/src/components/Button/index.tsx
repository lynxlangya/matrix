// src/components/Button.tsx
import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  size = 'sm',
  type = 'button',
  styleType = 'primary',
  className = '',
}) => {
  const buttonSizeClass = {
    sm: 'px-3 py-1 text-sm rounded-md',
    md: 'px-4 py-2 rounded-md',
    lg: 'px-5 py-3 text-lg rounded-lg',
  };

  const buttonStyleClass = {
    primary:
      'bg-blue-500 hover:bg-blue-600 text-white focus:ring-2 focus:ring-blue-400',
    secondary:
      'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-2 focus:ring-gray-400',
    success:
      'bg-green-500 hover:bg-green-600 text-white focus:ring-2 focus:ring-green-400',
    danger:
      'bg-red-500 hover:bg-red-600 text-white focus:ring-2 focus:ring-red-400',
    warning:
      'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-2 focus:ring-yellow-400',
  };

  const disabledClass = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'focus:outline-none focus:shadow-outline';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonStyleClass[styleType]} ${buttonSizeClass[size]} ${disabledClass} ${className} font-medium transition duration-200 ease-in-out `}
    >
      {children}
    </button>
  );
};

export default Button;
