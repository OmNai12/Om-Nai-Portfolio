import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const BackgroundBlobs = () => {
    const { theme } = useContext(ThemeContext);

    // Colors based on theme
    const blobColors = theme === 'dark'
        ? ['#4F46E5', '#06B6D4', '#8B5CF6'] // Dark mode: Indigo, Cyan, Purple
        : ['#4338CA', '#0891B2', '#7C3AED']; // Light mode: Deeper/Softer versions

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Blob 1 */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-30 mix-blend-multiply filter blur-[80px]"
                style={{ backgroundColor: blobColors[0] }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            {/* Blob 2 */}
            <motion.div
                className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-30 mix-blend-multiply filter blur-[80px]"
                style={{ backgroundColor: blobColors[1] }}
                animate={{
                    x: [0, -70, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            {/* Blob 3 */}
            <motion.div
                className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full opacity-30 mix-blend-multiply filter blur-[80px]"
                style={{ backgroundColor: blobColors[2] }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};

export default BackgroundBlobs;
