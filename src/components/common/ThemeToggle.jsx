import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-light-surface dark:bg-dark-surface text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'dark' ? 0 : 1,
                    opacity: theme === 'dark' ? 0 : 1,
                    rotate: theme === 'dark' ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun size={20} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === 'light' ? 0 : 1,
                    opacity: theme === 'light' ? 0 : 1,
                    rotate: theme === 'light' ? -90 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-full h-full"
            >
                <Moon size={20} />
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
