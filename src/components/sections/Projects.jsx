import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
    <GlassCard
        className="group relative overflow-hidden !p-0 h-full flex flex-col"
        hoverEffect={true}
        transition={{ delay: index * 0.1 }}
    >
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent z-10 opacity-60"></div>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>
        <div className="p-6 flex-1 flex flex-col relative z-20">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 mt-auto">
                <a href={project.links.github} className="flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors">
                    <Github size={16} /> Code
                </a>
                <a href={project.links.live} className="flex items-center gap-2 text-sm hover:text-[var(--accent)] transition-colors">
                    <ExternalLink size={16} /> Live Demo
                </a>
            </div>
        </div>
    </GlassCard>
);

const Projects = () => {
    const projects = [
        {
            title: "Neon Nexus",
            description: "A cyberpunk-inspired e-commerce platform with real-time 3D product previews and AI-driven recommendations.",
            tags: ["React", "Three.js", "Node.js", "Stripe"],
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
            links: { github: "#", live: "#" }
        },
        {
            title: "Aether Chat",
            description: "Decentralized messaging application using WebRTC and blockchain for encryption and storage.",
            tags: ["Next.js", "Socket.io", "Solidity", "Tailwind"],
            image: "https://images.unsplash.com/photo-1614064641938-3e848aba880f?q=80&w=2670&auto=format&fit=crop",
            links: { github: "#", live: "#" }
        },
        {
            title: "Visionary Dash",
            description: "Enterprise analytics dashboard visualizing millions of data points with WebGL powered charts.",
            tags: ["Vue", "D3.js", "Python", "FastAPI"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            links: { github: "#", live: "#" }
        }
    ];

    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
                        Selected <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                        Showcasing the intersection of creativity and logic.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
