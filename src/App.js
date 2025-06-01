// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import TracksSection from './components/TracksSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import AccessibilityMenu from './components/AccessibilityMenu';

// --- ALL NEW IMPORTS ---
import GuestsSection from './components/GuestsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import RulesSection from './components/RulesSection';
import SponsorsSection from './components/SponsorsSection';
import RegistrationSection from './components/RegistrationSection';
import TeamFinderSection from './components/TeamFinderSection';
import ResourcesSection from './components/ResourcesSection';
import ShowcaseSection from './components/ShowcaseSection';
// -----------------------

// Import Global Styles
import './styles/global.css';

// Register GSAP plugins (important to do once)
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

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
        body.classList.toggle('text-xlarge', fontSize === 'xlarge'); // Corrected typo here
        body.classList.toggle('animations-disabled', isAnimationsDisabled);
    }, [isHighContrast, isGrayscale, fontSize, isAnimationsDisabled]);

    const toggleHighContrast = useCallback(() => setIsHighContrast(prev => !prev), []);
    const toggleGrayscale = useCallback(() => setIsGrayscale(prev => !prev), []);
    const toggleAnimations = useCallback(() => setIsAnimationsDisabled(prev => !prev), []);

    // Function to call when loading is complete
    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className="App">
            {isLoading && <LoadingScreen onLoaded={handleLoadingComplete} />}

            {/* Only render content when not loading */}
            {!isLoading && (
                <>
                    <Navbar />
                    <HeroSection />
                    <AboutSection />
                    <TimelineSection />
                    <TracksSection />
                    <TeamSection />
                    <GuestsSection />
                    <RulesSection /> {/* NEW */}
                    <SponsorsSection /> {/* NEW */}
                    <FAQSection />
                    <TeamFinderSection /> {/* NEW */}
                    <ResourcesSection /> {/* NEW */}
                    <ShowcaseSection /> {/* NEW */}
                    <ContactSection />
                    <RegistrationSection /> {/* NEW */}
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
                </>
            )}
        </div>
    );
};

export default App;