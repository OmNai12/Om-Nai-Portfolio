import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';

const ExperienceItem = ({ exp, index }) => (
    <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        {/* Timeline Node */}
        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[var(--accent)] rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_var(--glow)]"></div>

        {/* Date (Desktop) */}
        <div className={`hidden md:block w-1/2 px-10 pt-4 text-[var(--text-secondary)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
            {exp.date}
        </div>

        {/* Content Card */}
        <div className="md:w-1/2 pl-8 md:px-10">
            <GlassCard
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="md:hidden text-sm text-[var(--text-accent)] mb-2">{exp.date}</div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-[var(--accent)] font-medium mb-2">{exp.company}</p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {exp.description}
                </p>
            </GlassCard>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Senior Frontend Engineer",
            company: "TechNova Solutions",
            date: "2023 - Present",
            description: "Leading the migration of legacy monoliths to micro-frontends using React and Module Federation. Improved build times by 60% and established a new design system."
        },
        {
            role: "Full Stack Developer",
            company: "Creative Pulse Studio",
            date: "2021 - 2023",
            description: "Developed immersive web experiences for high-profile clients using WebGL and GSAP. Integrated AI-powered content generation tools into the internal CMS."
        },
        {
            role: "Junior Web Developer",
            company: "StartUp Inc.",
            date: "2020 - 2021",
            description: "Collaborated on the launch of a fintech dashboard. Optimized application performance and ensured WCAG 2.1 AA compliance."
        }
    ];

    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
                        Career <span className="text-gradient">Timeline</span>
                    </h2>
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-0.5 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent -translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
