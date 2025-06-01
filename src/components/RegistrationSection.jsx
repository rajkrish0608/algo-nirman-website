// src/components/RegistrationSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const RegistrationSection = () => {
    return (
        <section id="register" style={{ background: 'linear-gradient(to top, var(--color-strategic-dark), var(--color-indian-navy-blue))', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Initiate Enlistment
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}
                >
                    Ready to join the mission? Complete your registration below.
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
                        maxWidth: '700px',
                        margin: '0 auto',
                        textAlign: 'left',
                    }}
                >
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
                        This section will contain the full registration form. For now, it's a placeholder.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>
                        Expected fields: Name, Email, Team Name, Team Members, University, etc.
                        A multi-step form with clear progress indicators would be ideal here.
                    </p>
                    <button className="button" style={{ marginTop: 'var(--spacing-md)' }}>
                        Proceed to Form (Placeholder)
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationSection;