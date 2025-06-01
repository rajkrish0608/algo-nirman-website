import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Components
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import DetailsSection from './components/DetailsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import AccessibilityMenu from './components/AccessibilityMenu';

// Import Global Styles
import './styles/global.css';

// Register GSAP plugins (important to do once)
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    // Accessibility States
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [isGrayscale, setIsGrayscale] = useState(false);
    const [fontSize, setFontSize] = useState('normal'); // 'normal', 'large', 'xlarge'
    const [isAnimationsDisabled, setIsAnimationsDisabled] = useState(false);

    // Apply accessibility classes to body
    useEffect(() => {
        const body = document.body;
        body.classList.toggle('high-contrast', isHighContrast);
        body.classList.toggle('grayscale', isGrayscale);
        body.classList.toggle('text-large', fontSize === 'large');
        body.classList.toggle('text-xlarge', fontSize === 'xlarge');
        body.classList.toggle('animations-disabled', isAnimationsDisabled);
    }, [isHighContrast, isGrayscale, fontSize, isAnimationsDisabled]);

    const toggleHighContrast = useCallback(() => setIsHighContrast(prev => !prev), []);
    const toggleGrayscale = useCallback(() => setIsGrayscale(prev => !prev), []);
    const toggleAnimations = useCallback(() => setIsAnimationsDisabled(prev => !prev), []);

    return (
        <div className="App">
            {/* No need for <style>{globalStyles}</style> here anymore, as it's imported */}
            <HeroSection />
            <AboutSection />
            <TracksSection />
            <DetailsSection />
            <TeamSection />
            <Footer />
            <AccessibilityMenu
                isHighContrast={isHighContrast}
                toggleHighContrast={toggleHighContrast}
                isGrayscale={isGrayscale}
                toggleGrayscale={toggleGrayscale}
                fontSize={fontSize}
                setFontSize={setFontSize}
                isAnimationsDisabled={isAnimationsDisabled}
                toggleAnimations={toggleAnimations}
            />
        </div>
    );
};

export default App;