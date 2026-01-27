import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5 } : {}}
            className={`
        bg-white/5 dark:bg-white/5 
        backdrop-blur-lg 
        border border-white/10 dark:border-white/10
        rounded-xl 
        shadow-xl
        p-6
        ${className}
      `}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
