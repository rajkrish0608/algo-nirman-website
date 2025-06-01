import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP plugins (only once in App.js or a central place, but safe to include here for component independence)
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const backgroundRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current && backgroundRef.current && textRef.current) {
            // Parallax for background
            gsap.to(backgroundRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            // Parallax for text (subtle)
            gsap.fromTo(textRef.current, {
                y: -50,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center+=100",
                    toggleActions: "play none none reverse",
                }
            });
        }
    }, []);

    return (
        <section id="about" ref={sectionRef} style={{ background: 'linear-gradient(to bottom, var(--color-slate-gray), var(--color-dark-green))', overflow: 'hidden' }}>
            <div ref={backgroundRef} style={{
                position: 'absolute',
                top: '-10%', left: '-10%', width: '120%', height: '120%',
                backgroundImage: 'url(https://placehold.co/1200x800/1F304B/A0A0A0?text=ABSTRACT+PATTERN)', // Placeholder for abstract pattern
                backgroundSize: 'cover',
                opacity: 0.1,
                filter: 'blur(2px)',
                zIndex: 0,
            }}></div>
            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.h2
                    // ref={textRef} // Framer Motion handles this better with whileInView
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-accent)' }}
                >
                    Mission Brief: Algo Nirman
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto var(--spacing-lg) auto', fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}
                >
                    Algo Nirman is more than just a competition; it's a launchpad for future innovators, a crucible for collaboration, and a national platform where the brightest minds converge to engineer solutions for real-world challenges in the realm of defense and technology.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-text-primary)' }}
                >
                    Organized by Vectorix Community | A National-Level Initiative
                </motion.p>
            </div>
        </section>
    );
};

export default AboutSection;