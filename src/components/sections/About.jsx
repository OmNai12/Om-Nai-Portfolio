import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';

const About = () => {
    const stats = [
        { label: "Years Experience", value: "3+" },
        { label: "Projects Completed", value: "20+" },
        { label: "Tech Stack", value: "15+" },
        { label: "Clients Happy", value: "100%" },
    ];

    return (
        <section className="py-20 relative px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Visual Side (Avatar/Image) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 md:order-1"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        {/* Decorative background elements behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)] to-purple-500 rounded-3xl rotate-6 opacity-20 blur-lg animate-pulse"></div>

                        <GlassCard className="w-full h-full relative overflow-hidden !p-0 !rounded-3xl border-2 border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1544256335-6b12668511a3?q=80&w=2788&auto=format&fit=crop"
                                alt="Om Nai"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-clash font-bold text-xl">Om Nai</p>
                                <p className="text-sm opacity-80">Full Stack Developer</p>
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    className="order-1 md:order-2 space-y-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
                            Coding the <span className="text-gradient">Future</span>
                        </h2>
                        <div className="h-1 w-20 bg-[var(--accent)] rounded-full mb-6"></div>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">
                            I am a passionate developer with a knack for building immersive digital experiences. My work bridges the gap between functional engineering and cinematic design.
                        </p>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                            Specializing in React, AI integration, and modern UI/UX patterns, I create applications that look as good as they perform.
                        </p>
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <GlassCard
                                key={index}
                                className="text-center !p-4"
                                hoverEffect={true}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-2xl font-bold text-[var(--accent)]">{stat.value}</h3>
                                <p className="text-sm opacity-70">{stat.label}</p>
                            </GlassCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
