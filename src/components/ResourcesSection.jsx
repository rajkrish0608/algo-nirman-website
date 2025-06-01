// src/components/ResourcesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ResourcesSection = () => {
    const resources = [
        { name: 'API Documentation', description: 'Access detailed documentation for all available APIs.', link: '#' },
        { name: 'Dataset Downloads', description: 'Download relevant datasets for your hackathon projects.', link: '#' },
        { name: 'Recommended Tools', description: 'A list of recommended development tools and platforms.', link: '#' },
        { name: 'Starter Kits', description: 'Jumpstart your project with pre-configured starter templates.', link: '#' },
        { name: 'Workshops Materials', description: 'Review materials from pre-hackathon workshops and tutorials.', link: '#' },
    ];

    return (
        <section id="resources" style={{ background: 'linear-gradient(to bottom, var(--color-indian-navy-blue), var(--color-strategic-dark))', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Intel Briefings: Resources
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-secondary)' }}
                >
                    Everything you need to successfully complete your mission.
                </motion.p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)',
                    justifyContent: 'center',
                }}>
                    {resources.map((resource, index) => (
                        <motion.a
                            key={resource.name}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid rgba(255, 193, 7, 0.2)',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                                textDecoration: 'none',
                                color: 'inherit',
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
                                borderColor: 'var(--color-saffron-accent)',
                            }}
                        >
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>{resource.name}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{resource.description}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;