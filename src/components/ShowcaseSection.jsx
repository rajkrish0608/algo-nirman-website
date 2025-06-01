// src/components/ShowcaseSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ShowcaseSection = () => {
    const projects = [
        {
            title: "Sentinel Drone AI",
            team: "Team Guardians",
            description: "An autonomous drone system utilizing AI for perimeter defense and threat detection.",
            image: "https://via.placeholder.com/400x250/0C1E3C/FF9933?text=Project+1",
            link: "#" // Link to project details page or demo
        },
        {
            title: "Secure CommNet",
            team: "Cipher Squad",
            description: "A blockchain-based secure communication network for military operations, ensuring data integrity.",
            image: "https://via.placeholder.com/400x250/3A5741/FFFFFF?text=Project+2",
            link: "#"
        },
        {
            title: "Tactical AR Overlay",
            team: "Visionaries",
            description: "Augmented Reality application providing real-time tactical information to ground troops.",
            image: "https://via.placeholder.com/400x250/4A4E5C/FF9933?text=Project+3",
            link: "#"
        },
        {
            title: "Predictive Logistics AI",
            team: "Supply Chain Masters",
            description: "AI-powered system for optimizing military supply chain and predicting resource needs.",
            image: "https://via.placeholder.com/400x250/071324/FFFFFF?text=Project+4",
            link: "#"
        }
    ];

    return (
        <section id="showcase" style={{ background: 'linear-gradient(to top, var(--color-indian-airforce-grey), var(--color-indian-navy-blue))', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Mission Successes: Project Showcase
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-secondary)' }}
                >
                    Explore the innovative solutions developed by our participants.
                </motion.p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    justifyContent: 'center',
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid rgba(255, 193, 7, 0.2)',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                                textAlign: 'left',
                                overflow: 'hidden',
                                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
                                borderColor: 'var(--color-saffron-accent)',
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-sm)' }}
                            />
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-accent)', marginBottom: 'var(--spacing-sm)' }}>Team: {project.team}</p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)' }}>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="button" style={{ fontSize: '0.9rem' }}>
                                View Project
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;