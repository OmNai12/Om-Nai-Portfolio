import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 relative border-t border-[var(--glass-border)] bg-[var(--bg-secondary)]/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[var(--text-secondary)] text-sm">
                    © {new Date().getFullYear()} Om Nai. All rights reserved.
                </p>
                <p className="text-[var(--text-secondary)] text-sm flex items-center gap-2">
                    Built with <span className="text-red-500">♥</span> and <span className="font-medium text-[var(--accent)]">React</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
