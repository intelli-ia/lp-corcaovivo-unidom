import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "font-medium transition-colors duration-300 rounded flex items-center gap-3 justify-center",
                // Variants
                variant === 'primary' && "bg-background border border-white/10 hover:bg-white hover:text-black text-white",
                variant === 'secondary' && "bg-primary/20 border border-primary hover:bg-primary text-white",
                variant === 'outline' && "bg-transparent border border-white/30 hover:border-white text-white",
                variant === 'ghost' && "bg-transparent hover:bg-white/5 text-white",
                // Sizes
                size === 'sm' && "px-4 py-2 text-sm",
                size === 'md' && "px-8 py-4 text-base",
                size === 'lg' && "px-10 py-5 text-lg",
                // Disabled
                props.disabled && "opacity-50 cursor-not-allowed hover:bg-background hover:text-white",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
