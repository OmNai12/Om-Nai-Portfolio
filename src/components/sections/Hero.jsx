import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import { ChevronDown, Code, Cpu, Zap } from 'lucide-react';

const Hero = () => {
    const sectionRef = useRef(null);
    const { scrollY } = useScroll();

    // Scroll Parallax
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const yBlobs = useTransform(scrollY, [0, 500], [0, 100]);

    // Mouse Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 40; // Movement range
        const y = (clientY / innerHeight - 0.5) * 40;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20"
        >
            {/* Floating Glass Elements (Decorative) */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute inset-0 pointer-events-none hidden md:block"
            >
                <GlassCard className="absolute top-[20%] left-[10%] w-16 h-16 flex items-center justify-center !rounded-full !p-0">
                    <Code className="text-[var(--accent)]" />
                </GlassCard>
                <GlassCard className="absolute top-[30%] right-[15%] w-12 h-12 flex items-center justify-center !rounded-full !p-0" transition={{ delay: 0.2 }}>
                    <Cpu className="text-purple-500" />
                </GlassCard>
                <GlassCard className="absolute bottom-[20%] left-[20%] w-14 h-14 flex items-center justify-center !rounded-full !p-0" transition={{ delay: 0.1 }}>
                    <Zap className="text-yellow-400" />
                </GlassCard>
            </motion.div>

            {/* Main Content */}
            <motion.div
                style={{ y: yText }}
                className="text-center z-10 max-w-5xl mx-auto"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 0.8 }} // Delayed to sync with preloader roughly
                    className="inline-block px-4 py-2 rounded-full glass text-sm font-medium mb-6 text-[var(--accent)]"
                >
                    Available for Work
                </motion.span>

                <h1 className="text-5xl md:text-8xl lg:text-9xl font-clash font-bold leading-tight tracking-tight mb-8">
                    <motion.span
                        className="block"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.6, duration: 0.8 }}
                    >
                        I BUILD
                    </motion.span>
                    <motion.span
                        className="block text-gradient"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.7, duration: 0.8 }}
                    >
                        DIGITAL EXPERIENCES
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.8, duration: 0.8 }}
                    className="text-lg md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12"
                >
                    A futuristic approach to web development combining <span className="text-[var(--text-primary)] font-medium">Glassmorphism</span>, <span className="text-[var(--text-primary)] font-medium">AI Integration</span>, and <span className="text-[var(--text-primary)] font-medium">Interactive Design</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.9, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <button className="px-8 py-4 bg-[var(--accent)] text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_var(--glow)] transition-all transform hover:scale-105">
                        View Projects
                    </button>
                    <button className="px-8 py-4 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                        Contact Me
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 4.5, duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
