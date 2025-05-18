import React from 'react'

interface ButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
}

export default function ButtonReusable({
    title,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
    variant = 'primary'
}: ButtonProps) {
    const baseStyle = 'px-4 py-2 font-medium transition-all duration-300';

    const variantStyles = {
        primary: 'rounded-full bg-blue-600 hover:bg-blue-700',
        secondary: 'rounded-full bg-gray-600 hover:bg-gray-700',
        outline: 'rounded-full cursor-pointer border px-6 py-3 text-sm hover:bg-gray-200 hover:text-green-700 transition'
    };

    const textStyles = {
        primary: 'text-white',
        secondary: 'text-white',
        outline: 'text-green-100'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${variantStyles[variant]} ${textStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {title}
        </button>
    )
}
