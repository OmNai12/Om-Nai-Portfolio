import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../../utils/constants';
import ThemeToggle from './ThemeToggle';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const completion = useScrollProgress();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                    }`}
            >
                {/* Scroll Progress Bar */}
                <span
                    style={{ transform: `translateX(${completion - 100}%)` }}
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-primary transition-transform duration-150 ease-out"
                />

                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="text-2xl font-bold font-display text-primary cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        OmNai<span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="text-primary font-medium"
                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer text-sm font-medium tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex flex-col px-6 py-4 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-gray-600 dark:text-gray-300 hover:text-primary block py-2 text-base font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navigation;
