import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../common/GlassCard';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg">
                        Have a project in mind? Let's build something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <GlassCard className="flex items-center gap-4 hover:shadow-[0_0_20px_var(--glow)] transition-shadow cursor-pointer">
                            <div className="p-3 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm opacity-60">Email Me</p>
                                <p className="font-medium">hello@omnai.dev</p>
                            </div>
                        </GlassCard>

                        <div className="flex gap-4 justify-center md:justify-start mt-8">
                            {[Github, Linkedin, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: "var(--accent)" }}
                                    className="p-4 glass rounded-full text-[var(--text-secondary)] hover:bg-white/10 transition-colors"
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <GlassCard className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 opacity-80">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button className="w-full py-4 bg-[var(--accent)] rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_var(--glow)] transition-all">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Contact;
