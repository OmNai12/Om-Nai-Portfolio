import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../../utils/constants';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const ExperienceItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0"
        >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white dark:border-dark-bg" />

            <Card className="hover:!translate-y-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <Briefcase className="text-secondary" size={24} />
                            {item.role}
                        </h3>
                        <p className="text-lg text-secondary font-medium mt-1">{item.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {item.duration}
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </Card>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-light-surface dark:bg-dark-surface transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {experience.map((item, index) => (
                        <ExperienceItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
