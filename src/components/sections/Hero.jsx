import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Button from '../ui/Button';
import DotMatrix from '../ui/DotMatrix';
import { socialLinks } from '../../utils/constants';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl font-medium text-accent mb-4 tracking-wide"
                    >
                        Hello, I'm
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-gray-900 dark:text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                    >
                        Om Nai
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12"
                    >
                        Software Developer <span className="text-secondary">|</span> AI/ML Engineer
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Passionate about building scalable applications and intelligent systems.
                        Transforming complex problems into elegant, efficient solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
                    >
                        <Link to="projects" smooth={true} offset={-70} duration={500}>
                            <Button size="lg" className="w-full sm:w-auto min-w-[160px]">
                                View Projects
                            </Button>
                        </Link>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px]">
                                Download Resume
                            </Button>
                        </a>
                    </motion.div>

                    {/* Social Icons with Dot Matrix Effect */}
                    <div className="relative inline-block">
                        <DotMatrix
                            width={30}
                            height={6}
                            className="absolute -inset-8 opacity-20 -z-10 text-primary"
                            color="bg-primary"
                        />

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: 1.2,
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                            className="flex items-center justify-center space-x-8"
                        >
                            {socialLinks.map(({ Icon, href }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={{
                                        hidden: { opacity: 0, y: 20, scale: 0.5 },
                                        visible: { opacity: 1, y: 0, scale: 1 }
                                    }}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors p-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                                >
                                    <Icon size={28} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            >
                <Link to="skills" smooth={true} offset={-70} duration={500}>
                    <ChevronDown className="text-gray-400 hover:text-primary transition-colors" size={32} />
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
