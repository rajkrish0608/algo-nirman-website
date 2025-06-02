// src/components/LoadingScreen.jsx - FUTURISTIC MILITARY/APOCALYPTIC
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoaded }) => {
    const mountRef = useRef(null);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        let scene, camera, renderer;
        let centralModule, conduits, debrisParticles;
        let time = 0;

        const initThree = () => {
            scene = new THREE.Scene();
            scene.background = null; // Transparent to show CSS background

            camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 100);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            currentMount.appendChild(renderer.domElement);

            // Lights: Harsh, industrial feel
            const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
            scene.add(ambientLight);

            const spotLight1 = new THREE.SpotLight(0x64FFDA, 3, 50, Math.PI * 0.2, 0.5, 2); // Teal
            spotLight1.position.set(5, 5, 5);
            scene.add(spotLight1);

            const spotLight2 = new THREE.SpotLight(0xFF4081, 2.5, 50, Math.PI * 0.2, 0.5, 2); // Electric Pink
            spotLight2.position.set(-5, -5, -5);
            scene.add(spotLight2);

            // --- APOCALYPTIC FUTURISTIC ELEMENTS ---

            // 1. Central Module (Damaged but functional core)
            const moduleGeometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
            const moduleMaterial = new THREE.MeshStandardMaterial({
                color: 0x37474F, // Darker grey-blue (worn metal)
                roughness: 0.7,
                metalness: 0.9,
                emissive: 0x1E1E1E, // Subtle internal glow
                emissiveIntensity: 0.2,
            });
            centralModule = new THREE.Mesh(moduleGeometry, moduleMaterial);
            scene.add(centralModule);

            // Add glowing lines on the module surface (like power traces)
            const lineCount = 10;
            for(let i=0; i<lineCount; i++) {
                const points = [];
                points.push(new THREE.Vector3(-0.9 + Math.random()*1.8, -0.9 + Math.random()*1.8, 0.9));
                points.push(new THREE.Vector3(-0.9 + Math.random()*1.8, -0.9 + Math.random()*1.8, 0.9));
                const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({
                    color: Math.random() > 0.5 ? 0x64FFDA : 0xFF4081, // Teal or Pink
                    linewidth: 2,
                    blending: THREE.AdditiveBlending,
                    transparent: true,
                    opacity: 0.8
                }));
                centralModule.add(line); // Attached to module
            }

            // 2. Conduits / Power Lines
            conduits = new THREE.Group();
            const conduitMaterial = new THREE.LineBasicMaterial({
                color: 0x64FFDA, // Teal
                linewidth: 3,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.7
            });

            for (let i = 0; i < 8; i++) {
                const start = new THREE.Vector3(
                    Math.random() * 8 - 4,
                    Math.random() * 8 - 4,
                    Math.random() * 8 - 4
                );
                const end = new THREE.Vector3(
                    (Math.random() * 2 - 1) * 1.5,
                    (Math.random() * 2 - 1) * 1.5,
                    (Math.random() * 2 - 1) * 1.5
                ); // Pointing towards core

                const curve = new THREE.CubicBezierCurve3(
                    start,
                    new THREE.Vector3(start.x * 0.5, end.y * 1.5, start.z * 0.5),
                    new THREE.Vector3(end.x * 1.5, start.y * 0.5, end.z * 1.5),
                    end
                );
                const points = curve.getPoints(50);
                const conduit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), conduitMaterial);
                conduits.add(conduit);
            }
            scene.add(conduits);

            // 3. Debris Particles (Subtle, gritty environment)
            const debrisCount = 1500;
            const debrisGeometry = new THREE.BufferGeometry();
            const debrisPositions = new Float32Array(debrisCount * 3);
            for (let i = 0; i < debrisCount; i++) {
                debrisPositions[i * 3 + 0] = (Math.random() * 2 - 1) * 20;
                debrisPositions[i * 3 + 1] = (Math.random() * 2 - 1) * 20;
                debrisPositions[i * 3 + 2] = (Math.random() * 2 - 1) * 20;
            }
            debrisGeometry.setAttribute('position', new THREE.BufferAttribute(debrisPositions, 3));
            const debrisMaterial = new THREE.PointsMaterial({
                color: 0xB0BEC5, // Light grey-blue for dust/debris
                size: 0.02,
                transparent: true,
                opacity: 0.3,
            });
            debrisParticles = new THREE.Points(debrisGeometry, debrisMaterial);
            scene.add(debrisParticles);

            // Animation Loop
            const animate = () => {
                animationFrameId.current = requestAnimationFrame(animate);
                time += 0.01;

                // Central module rotation
                centralModule.rotation.x += 0.005;
                centralModule.rotation.y += 0.007;

                // Conduits subtle pulse (color/opacity)
                conduits.children.forEach((line, index) => {
                    line.material.opacity = 0.5 + Math.sin(time * 3 + index * 0.5) * 0.3;
                });
                conduits.rotation.y += 0.001; // Gentle overall rotation

                // Debris particles drift
                debrisParticles.rotation.x += 0.0001;
                debrisParticles.rotation.y += 0.0002;

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

            // Simulate loading time for immersive feel
            const timer = setTimeout(() => {
                onLoaded();
            }, 4500); // Extended loading time

            return () => {
                cancelAnimationFrame(animationFrameId.current);
                clearTimeout(timer);
                window.removeEventListener('resize', handleResize);
                if (currentMount && renderer.domElement) {
                    currentMount.removeChild(renderer.domElement);
                }
                // Dispose Three.js assets to prevent memory leaks
                centralModule.geometry.dispose();
                centralModule.material.dispose();
                conduits.children.forEach(c => { c.geometry.dispose(); c.material.dispose(); });
                debrisParticles.geometry.dispose();
                debrisParticles.material.dispose();
                renderer.dispose();
            };
        };

        initThree();
    }, [onLoaded]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 3.7 }} // Fade out after animation
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--color-background)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 'var(--z-index-loading)',
                flexDirection: 'column',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-mono)', /* Monospace for digital feel */
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textShadow: `0 0 5px var(--color-accent-2), 0 0 10px var(--color-accent-1)`,
            }}
        >
            <div ref={mountRef} style={{ width: 'clamp(200px, 70vw, 400px)', height: 'clamp(200px, 70vw, 400px)', marginBottom: '40px' }}></div>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--color-accent-2)' }}
            >
                System Initiating...
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)', color: 'var(--color-text-secondary)', marginTop: '10px' }}
            >
                Loading Core Protocols...
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)', color: 'var(--color-warning)', marginTop: '5px' }}
            >
                (Warning: Environment Unstable)
            </motion.p>
        </motion.div>
    );
};

export default LoadingScreen;