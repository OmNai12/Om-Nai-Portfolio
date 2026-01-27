import React from 'react';
import { socialLinks } from '../../utils/constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light-surface dark:bg-dark-surface py-8 mt-20 border-t border-light-border dark:border-dark-border transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map(({ Icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {currentYear} Om Nai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
