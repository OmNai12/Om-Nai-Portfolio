import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../utils/constants';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="h-full flex flex-col group p-0 overflow-hidden hover:!translate-y-[-10px]">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="sm" className="bg-white/10 text-white hover:bg-white/20">
                                <Github size={20} />
                            </Button>
                        </a>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="sm" className="bg-white/10 text-white hover:bg-white/20">
                                <ExternalLink size={20} />
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                        <span className="text-xs font-semibold tracking-wider text-accent uppercase mb-2 block">
                            {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                            {project.description}
                        </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? 'primary' : 'ghost'}
                                size="sm"
                                onClick={() => setActiveCategory(category)}
                                className="capitalize"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
