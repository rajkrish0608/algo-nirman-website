// src/App.js - UPDATED FOR MORE ACCESSIBILITY OPTIONS
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

// --- ALL NEW IMPORTS (from previous step) ---
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

    // --- NEW ACCESSIBILITY STATES ---
    const [colorblindMode, setColorblindMode] = useState('none'); // 'none', 'protanopia', 'deuteranopia', 'tritanopia'
    const [isDyslexicFont, setIsDyslexicFont] = useState(false);
    const [codeTheme, setCodeTheme] = useState('default'); // 'default', 'high-contrast-light', 'futuristic-dark'
    // --------------------------------

    // Apply accessibility classes to body
    useEffect(() => {
        const body = document.body;
        body.classList.toggle('high-contrast', isHighContrast);
        body.classList.toggle('grayscale', isGrayscale);
        body.classList.remove('text-large', 'text-xlarge'); // Clear previous font size classes
        if (fontSize === 'large') body.classList.add('text-large');
        if (fontSize === 'xlarge') body.classList.add('text-xlarge');
        body.classList.toggle('animations-disabled', isAnimationsDisabled);

        // --- APPLY NEW ACCESSIBILITY CLASSES ---
        body.classList.remove('colorblind-protanopia', 'colorblind-deuteranopia', 'colorblind-tritanopia');
        if (colorblindMode !== 'none') {
            body.classList.add(`colorblind-${colorblindMode}`);
        }

        body.classList.toggle('font-dyslexic', isDyslexicFont);

        body.classList.remove('code-high-contrast-light', 'code-futuristic-dark');
        if (codeTheme === 'high-contrast-light') body.classList.add('code-high-contrast-light');
        if (codeTheme === 'futuristic-dark') body.classList.add('code-futuristic-dark');
        // ---------------------------------------

    }, [isHighContrast, isGrayscale, fontSize, isAnimationsDisabled, colorblindMode, isDyslexicFont, codeTheme]);

    const toggleHighContrast = useCallback(() => setIsHighContrast(prev => !prev), []);
    const toggleGrayscale = useCallback(() => setIsGrayscale(prev => !prev), []);
    const toggleAnimations = useCallback(() => setIsAnimationsDisabled(prev => !prev), []);

    // --- NEW ACCESSIBILITY TOGGLES/SETTERS ---
    const toggleDyslexicFont = useCallback(() => setIsDyslexicFont(prev => !prev), []);
    // ---------------------------------------

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
                    <RulesSection />
                    <SponsorsSection />
                    <FAQSection />
                    <TeamFinderSection />
                    <ResourcesSection />
                    <ShowcaseSection />
                    <ContactSection />
                    <RegistrationSection />
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
                        // --- NEW PROPS FOR ACCESSIBILITY MENU ---
                        colorblindMode={colorblindMode}
                        setColorblindMode={setColorblindMode}
                        isDyslexicFont={isDyslexicFont}
                        toggleDyslexicFont={toggleDyslexicFont}
                        codeTheme={codeTheme}
                        setCodeTheme={setCodeTheme}
                        // ---------------------------------------
                    />
                </>
            )}
        </div>
    );
};

export default App;