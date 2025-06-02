// src/components/HeroSection.jsx - FUTURISTIC MILITARY/APOCALYPTIC
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const mountRef = useRef(null);
    const animationFrameId = useRef(null);
    const coreObjectRef = useRef(null); // Ref for the main 3D object
    const gridLinesRef = useRef(null); // Ref for the background grid

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        let scene, camera, renderer, coreObject, gridLines;

        const initThree = () => {
            scene = new THREE.Scene();
            scene.background = null; // Transparent

            camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            currentMount.appendChild(renderer.domElement);

            // Lights: Focus on the central object
            const ambientLight = new THREE.AmbientLight(0x404040, 1.2);
            scene.add(ambientLight);

            const directionalLight1 = new THREE.DirectionalLight(0x64FFDA, 2.5); // Teal light from one side
            directionalLight1.position.set(5, 5, 5).normalize();
            scene.add(directionalLight1);

            const directionalLight2 = new THREE.DirectionalLight(0xFF4081, 1.8); // Pink light from another side
            directionalLight2.position.set(-5, -5, -5).normalize();
            scene.add(directionalLight2);

            // --- APOCALYPTIC CORE/BEACON ---
            // Central, robust, perhaps slightly damaged core
            const coreGeometry = new THREE.CylinderGeometry(1.2, 1.2, 2.5, 8); // Cylinder
            const coreMaterial = new THREE.MeshStandardMaterial({
                color: 0x37474F, // Worn metal
                roughness: 0.6,
                metalness: 0.9,
                emissive: 0x1A1A1A, // Subtle self-illumination
                emissiveIntensity: 0.1,
            });
            coreObject = new THREE.Mesh(coreGeometry, coreMaterial);
            scene.add(coreObject);
            coreObjectRef.current = coreObject;

            // Add glowing internal components (like a power core)
            const innerSphere = new THREE.Mesh(
                new THREE.IcosahedronGeometry(0.5, 0),
                new THREE.MeshBasicMaterial({
                    color: 0x64FFDA, // Teal glowing core
                    transparent: true,
                    opacity: 0.7,
                    blending: THREE.AdditiveBlending
                })
            );
            coreObject.add(innerSphere); // Attach to core object

            // Add a subtle particle field around the core
            const particleCount = 1000;
            const particleGeometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            for (let i = 0; i < particleCount; i++) {
                positions[i * 3 + 0] = (Math.random() * 2 - 1) * 8;
                positions[i * 3 + 1] = (Math.random() * 2 - 1) * 8;
                positions[i * 3 + 2] = (Math.random() * 2 - 1) * 8;
            }
            particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const particleMaterial = new THREE.PointsMaterial({
                color: 0xFF4081, // Pink dust/energy
                size: 0.03,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.4
            });
            const particles = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particles);

            // --- Background Grid Lines (Abstract Data/Control Field) ---
            const gridMaterial = new THREE.LineBasicMaterial({
                color: 0x64FFDA, // Teal
                transparent: true,
                opacity: 0.15
            });
            gridLines = new THREE.Group();
            gridLinesRef.current = gridLines; // Store reference

            const gridSize = 15;
            const gridDivisions = 20;
            const step = gridSize / gridDivisions;

            for (let i = -gridSize / 2; i <= gridSize / 2; i += step) {
                // Vertical lines
                const vLinePoints = [];
                vLinePoints.push(new THREE.Vector3(i, -gridSize / 2, 0));
                vLinePoints.push(new THREE.Vector3(i, gridSize / 2, 0));
                gridLines.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(vLinePoints), gridMaterial));

                // Horizontal lines
                const hLinePoints = [];
                hLinePoints.push(new THREE.Vector3(-gridSize / 2, i, 0));
                hLinePoints.push(new THREE.Vector3(gridSize / 2, i, 0));
                gridLines.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hLinePoints), gridMaterial));
            }
            gridLines.position.z = -5; // Place behind the core
            scene.add(gridLines);


            // Animation Loop
            const animate = () => {
                animationFrameId.current = requestAnimationFrame(animate);

                if (coreObjectRef.current) {
                    coreObjectRef.current.rotation.x += 0.002;
                    coreObjectRef.current.rotation.y += 0.003;
                    // Inner sphere pulse
                    coreObjectRef.current.children[0].scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.1);
                }
                if (gridLinesRef.current) {
                    gridLinesRef.current.rotation.x += 0.0005;
                    gridLinesRef.current.rotation.y += 0.0003;
                }
                particles.rotation.y += 0.0008;

                renderer.render(scene, camera);
            };
            animate();

            // Handle window resize
            const handleResize = () => {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                cancelAnimationFrame(animationFrameId.current);
                window.removeEventListener('resize', handleResize);
                if (currentMount && renderer.domElement) {
                    currentMount.removeChild(renderer.domElement);
                }
                // Dispose Three.js assets
                coreObject.geometry.dispose();
                coreObject.material.dispose();
                innerSphere.geometry.dispose();
                innerSphere.material.dispose();
                particleGeometry.dispose();
                particleMaterial.dispose();
                gridLines.children.forEach(line => { line.geometry.dispose(); line.material.dispose(); });
                renderer.dispose();
            };
        };

        initThree();
    }, []);

    return (
        <section id="home" style={{
            background: 'linear-gradient(to bottom, var(--color-background) 0%, var(--color-surface) 100%)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
            borderBottom: '1px solid rgba(255, 64, 129, 0.2)'
        }}>
            <div ref={mountRef} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 'var(--z-index-background)',
            }}></div>

            {/* Content Overlay */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 'var(--z-index-content)',
                textAlign: 'center',
                padding: 'var(--spacing-xl)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', /* Semi-transparent dark overlay */
                backdropFilter: 'blur(3px)', /* Slight blur for depth */
                border: '1px solid rgba(255, 64, 129, 0.1)', /* Subtle border glow */
                borderRadius: 'var(--border-radius-md)',
                boxShadow: '0 0 20px rgba(0,0,0,0.8), inset 0 0 10px rgba(255, 64, 129, 0.1)', /* Inner shadow for depth */
                maxWidth: '900px',
                margin: '0 auto',
                textTransform: 'uppercase',
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        fontSize: 'clamp(3rem, 7vw, 4.5rem)',
                        color: 'var(--color-text-primary)',
                        textShadow: `0 0 8px var(--color-accent-2), 0 0 15px var(--color-accent-1)`,
                        marginBottom: 'var(--spacing-md)',
                        letterSpacing: '0.1em',
                    }}
                >
                    Algo Nirman
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                        color: 'var(--color-accent-2)',
                        maxWidth: '90%',
                        margin: '0 auto var(--spacing-lg) auto',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.05em',
                    }}
                >
                    Rebuilding the Future, Line by Line.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{
                        fontSize: 'var(--font-size-md)',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '80%',
                        margin: '0 auto var(--spacing-xl) auto',
                    }}
                >
                    Join the last stand of innovation. Your code is the ultimate weapon.
                </motion.p>
                <motion.a
                    href="#register"
                    className="button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        borderColor: 'var(--color-accent-2)', /* Use cyan for button border */
                        background: 'var(--color-accent-1)'
                    }}
                >
                    Deploy Protocol
                </motion.a>
            </div>
        </section>
    );
};

export default HeroSection;