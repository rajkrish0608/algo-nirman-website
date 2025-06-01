import React from 'react';
import { motion } from 'framer-motion';

const DetailsSection = () => {
    const details = [
        { label: 'Timeline', value: 'September 6-7, 2025', icon: '🗓️' },
        { label: 'Duration', value: '30 Hours', icon: '⏱️' },
        { label: 'Prize Pool', value: '₹2,50,000+', icon: '🏆' },
        { label: 'Opportunities', value: 'Internships & Mentorship', icon: '🤝' },
    ];

    return (
        <section id="details" style={{ background: 'linear-gradient(to right, var(--color-background-medium), var(--color-background-dark))' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Key Intel
                </motion.h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-md)',
                    justifyContent: 'center'
                }}>
                    {details.map((detail, index) => (
                        <motion.div
                            key={detail.label}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--spacing-md)',
                                borderRadius: 'var(--border-radius-lg)',
                                border: '1px solid rgba(255, 193, 7, 0.2)',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <span style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>{detail.icon}</span>
                            <h3 style={{ marginBottom: 'var(--spacing-xs)', color: 'var(--color-text-primary)' }}>{detail.label}</h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>{detail.value}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{ marginTop: 'var(--spacing-lg)', fontSize: '1.1rem', maxWidth: '700px', margin: 'var(--spacing-lg) auto 0 auto', color: 'var(--color-text-secondary)' }}
                >
                    Our mission is to define the focus on real-world challenges and industry-relevant problems, pushing the boundaries of innovation.
                </motion.p>
            </div>
        </section>
    );
};

export default DetailsSection;