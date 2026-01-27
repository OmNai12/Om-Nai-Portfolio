import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DotMatrix = ({
    width = 20,
    height = 4,
    color = 'bg-primary',
    className = ''
}) => {
    // Create a grid of dots
    const dots = Array.from({ length: width * height }, (_, i) => i);

    return (
        <div
            className={`grid gap-2 ${className}`}
            style={{
                gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`
            }}
        >
            {dots.map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.1, 0.5, 0.1],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        repeatType: 'reverse'
                    }}
                    className={`w-1.5 h-1.5 rounded-full ${color}`}
                />
            ))}
        </div>
    );
};

export default DotMatrix;
