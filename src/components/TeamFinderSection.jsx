// src/components/TeamFinderSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TeamFinderSection = () => {
    return (
        <section id="team-finder" style={{ background: 'linear-gradient(to right, var(--color-indian-army-green), var(--color-indian-airforce-grey))', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Squad Up: Find Your Team
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}
                >
                    Looking for teammates or need to complete your squad? Use our team finder to connect!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        background: 'rgba(0,0,0,0.3)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--border-radius-lg)',
                        border: '1px solid rgba(255, 193, 7, 0.2)',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'left',
                    }}
                >
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
                        This section would feature:
                        <ul style={{ listStyle: 'disc inside', paddingLeft: 'var(--spacing-md)', marginTop: 'var(--spacing-sm)', color: 'var(--color-text-secondary)' }}>
                            <li>A form for individuals to post their skills/needs.</li>
                            <li>A searchable list of individuals/teams looking for members.</li>
                            <li>Direct messaging or contact options.</li>
                        </ul>
                    </p>
                    <button className="button" style={{ marginTop: 'var(--spacing-md)' }}>
                        Browse Teammates (Coming Soon)
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamFinderSection;