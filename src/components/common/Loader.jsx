import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoaded }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onLoaded, 500); // Delay before unmount
                    return 100;
                }
                return prev + 2; // Adjust speed here
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onLoaded]);

    // Create grid dots
    const dots = Array.from({ length: 64 }, (_, i) => i);

    return (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-bg text-primary">
            {/* Dot Matrix Grid */}
            <div className="grid grid-cols-8 gap-2 mb-8 p-4">
                {dots.map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0.1 }}
                        animate={{
                            opacity: [0.1, 1, 0.1],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            repeatType: "reverse"
                        }}
                        className="w-3 h-3 rounded-full bg-primary"
                        style={{
                            boxShadow: '0 0 10px currentColor'
                        }}
                    />
                ))}
            </div>

            {/* Loading Text */}
            <div className="font-mono text-xl tracking-wider">
                CORE_SYSTEM_INIT... {progress}%
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-2 mt-4 bg-primary/20 rounded-full overflow-hidden border border-primary/30">
                <motion.div
                    className="h-full bg-primary shadow-[0_0_15px_rgba(0,212,255,0.7)]"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default Loader;
