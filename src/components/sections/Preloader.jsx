import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [textIndex, setTextIndex] = useState(0);
    const name = "Om Nai";
    const title = "Software Developer | AI/ML Engineer";

    useEffect(() => {
        // Timeline management
        const timer1 = setTimeout(() => setTextIndex(1), 2000); // Show Name
        const timer2 = setTimeout(() => setTextIndex(2), 3000); // Show Title
        const timer3 = setTimeout(() => onComplete(), 4500);   // Finish

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    const splitTransition = {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Custom cubic bezier
    };

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f] text-white overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.8 } }} // Fallback exit
        >
            {/* Split Screen Exit Effect - Rendered as siblings that move apart */}
            <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-[#0a0a0f] z-10"
                initial={{ x: 0 }}
                exit={{ x: "-100%", transition: splitTransition }}
            />
            <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-[#0a0a0f] z-10"
                initial={{ x: 0 }}
                exit={{ x: "100%", transition: splitTransition }}
            />

            <div className="relative z-20 flex flex-col items-center">
                {/* Phase 1: Spinner */}
                <AnimatePresence mode="wait">
                    {textIndex === 0 && (
                        <motion.div
                            className="w-24 h-24 rounded-full border-t-2 border-r-2 border-[var(--accent)] relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute inset-0 rounded-full blur-xl bg-[var(--accent)] opacity-20 animate-pulse"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Phase 2: Text Reveal */}
                {textIndex >= 1 && (
                    <motion.div className="text-center mt-8">
                        <motion.h1
                            className="text-6xl md:text-8xl font-clash font-bold tracking-tighter"
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8 }}
                        >
                            {name.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {textIndex >= 2 && (
                            <motion.div
                                className="mt-4 overflow-hidden"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                <p className="text-lg md:text-xl font-satoshi text-gray-400 whitespace-nowrap border-r-2 border-[var(--accent)] pr-2">
                                    {title}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[var(--accent)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
            />
        </motion.div>
    );
};

export default Preloader;
