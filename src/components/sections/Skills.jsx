import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../utils/constants';
import Card from '../ui/Card';

const SkillCategory = ({ title, items, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="mb-12"
        >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-l-4 border-primary pl-4">
                {title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((skill, index) => (
                    <Card
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-6 hover:bg-white/10 dark:hover:bg-white/10 transition-colors group"
                    >
                        <div className="w-16 h-16 mb-4 relative flex items-center justify-center bg-white rounded-full p-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
                            {skill.name}
                        </span>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-light-surface dark:bg-dark-surface transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <SkillCategory title="Programming Languages" items={skills.languages} delay={0.2} />
                    <SkillCategory title="Frameworks & Libraries" items={skills.frameworks} delay={0.4} />
                    <SkillCategory title="Cloud & Databases" items={skills.databases} delay={0.6} />
                    <SkillCategory title="Artificial Intelligence" items={skills.ml} delay={0.8} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
