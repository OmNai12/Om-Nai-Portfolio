import React from 'react';

const variants = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
    outline: 'border-white/20 text-gray-600 dark:text-gray-300',
};

const Badge = ({ children, variant = 'primary', className = '' }) => {
    return (
        <span
            className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
};

export default Badge;
