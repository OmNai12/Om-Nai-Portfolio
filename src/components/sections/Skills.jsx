import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import { FaReact, FaPython, FaNodeJs, FaJava, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs, SiKubernetes } from 'react-icons/si';

const SkillBadge = ({ icon: Icon, name, color }) => (
    <div className="flex flex-col items-center gap-2 p-2 transition-transform hover:scale-110">
        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-3xl" style={{ color }}>
            <Icon />
        </div>
        <span className="text-xs font-medium opacity-80">{name}</span>
    </div>
);

const Skills = () => {
    return (
        <section className="py-20 relative px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building scalable, intelligent applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Frontend - Large Card */}
                    <GlassCard className="md:col-span-2 min-h-[300px] flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                            Frontend Engineering
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-4">
                            <SkillBadge icon={FaReact} name="React" color="#61DAFB" />
                            <SkillBadge icon={SiNextdotjs} name="Next.js" color="#000000" /> // Invert for dark? Handle with CSS currentcolor if needed
                            <SkillBadge icon={SiTypescript} name="TypeScript" color="#3178C6" />
                            <SkillBadge icon={SiTailwindcss} name="Tailwind" color="#38B2AC" />
                        </div>
                    </GlassCard>

                    {/* AI/ML - Tall Card */}
                    <GlassCard className="md:row-span-2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                            AI & ML
                        </h3>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                            <SkillBadge icon={SiTensorflow} name="TensorFlow" color="#FF6F00" />
                            <SkillBadge icon={SiPytorch} name="PyTorch" color="#EE4C2C" />
                            <SkillBadge icon={FaPython} name="Python" color="#3776AB" />
                        </div>
                    </GlassCard>

                    {/* Backend */}
                    <GlassCard className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                            Backend
                        </h3>
                        <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                            <SkillBadge icon={FaNodeJs} name="Node.js" color="#339933" />
                            <SkillBadge icon={FaJava} name="Java" color="#007396" />
                            <SkillBadge icon={SiPostgresql} name="PostgreSQL" color="#336791" />
                            <SkillBadge icon={SiMongodb} name="MongoDB" color="#47A248" />
                        </div>
                    </GlassCard>

                    {/* DevOps */}
                    <GlassCard className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                            DevOps
                        </h3>
                        <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                            <SkillBadge icon={FaDocker} name="Docker" color="#2496ED" />
                            <SkillBadge icon={SiKubernetes} name="K8s" color="#326CE5" />
                            <SkillBadge icon={FaAws} name="AWS" color="#FF9900" />
                            <SkillBadge icon={FaGitAlt} name="Git" color="#F05032" />
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Skills;
