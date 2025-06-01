// src/components/ContactSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <section id="contact" style={{ background: 'var(--color-background-medium)', color: 'var(--color-text-primary)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Connect with Us: Command Center
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}
                >
                    Have questions? Need support? Reach out to us through our official channels.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-sm)',
                        maxWidth: '500px',
                        margin: '0 auto',
                        background: 'rgba(0,0,0,0.3)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--border-radius-lg)',
                        border: '1px solid rgba(255, 193, 7, 0.2)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                    }}
                >
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>
                        Email: <a href="mailto:info@algonirman.com" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>info@algonirman.com</a>
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>
                        Phone: <a href="tel:+911234567890" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>+91 12345 67890</a>
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-md)' }}>
                        Join our Discord Server for real-time updates and community support:
                        <a href="https://discord.gg/your-discord-invite" target="_blank" rel="noopener noreferrer" style={{
                            display: 'block',
                            marginTop: 'var(--spacing-sm)',
                            padding: 'var(--spacing-sm) var(--spacing-md)',
                            background: 'linear-gradient(to right, #7289DA, #5865F2)', /* Discord blue gradient */
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: 'var(--border-radius-md)',
                            fontWeight: 'bold',
                            transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                        onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)'; }}
                        onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; }}
                        >
                            💬 Join Discord (Click Here)
                        </a>
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>
                        Follow us on:
                        <div style={{ marginTop: 'var(--spacing-sm)', display: 'flex', justifyContent: 'center', gap: 'var(--spacing-md)' }}>
                            <a href="#" style={{ color: 'var(--color-text-primary)', fontSize: '2rem' }}>🔗</a> {/* Placeholder for LinkedIn/Website */}
                            <a href="#" style={{ color: 'var(--color-text-primary)', fontSize: '2rem' }}>🐦</a> {/* Placeholder for Twitter */}
                            <a href="#" style={{ color: 'var(--color-text-primary)', fontSize: '2rem' }}>📸</a> {/* Placeholder for Instagram */}
                        </div>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;