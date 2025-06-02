// src/components/AccessibilityMenu.jsx - UPDATED FOR MORE OPTIONS & NEW ICON
import React, { useState } from 'react';

const AccessibilityMenu = ({
    isHighContrast, toggleHighContrast,
    isGrayscale, toggleGrayscale,
    fontSize, setFontSize,
    isAnimationsDisabled, toggleAnimations,
    // --- NEW PROPS ---
    colorblindMode, setColorblindMode,
    isDyslexicFont, toggleDyslexicFont,
    codeTheme, setCodeTheme
    // -----------------
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFontSizeChange = (size) => {
        setFontSize(size);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 'var(--spacing-md)',
            right: 'var(--spacing-md)',
            zIndex: 'var(--z-index-accessibility-menu, 9980)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            border: isOpen ? '1px solid var(--color-accent-2)' : 'none',
            borderRadius: 'var(--border-radius-md)',
            padding: isOpen ? 'var(--spacing-xs)' : '0',
            transition: 'all var(--transition-fast)',
        }}>
            {/* The main toggle button - now a gear icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor: 'var(--color-accent-1)', /* Electric pink */
                    color: 'var(--color-primary-dark)',     /* Very dark grey text */
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '1.8rem', // Adjusted for gear icon
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    transition: 'transform var(--transition-fast), background-color var(--transition-fast)',
                    position: 'relative',
                    zIndex: 'calc(var(--z-index-accessibility-menu, 9980) + 1)', // Ensure button is always above menu content
                }}
                title="Accessibility & System Settings"
            >
                {/* Gear Icon (Unicode) for settings/accessibility */}
                <span style={{
                    textShadow: '0 0 5px var(--color-accent-2), 0 0 10px var(--color-accent-1)', // Glow effect
                    fontFamily: 'sans-serif', // Use a standard sans-serif for emoji compatibility
                    fontWeight: 'bold',
                    fontSize: '1.5em', // Adjust size of the gear icon
                    lineHeight: '1' // Prevent extra space around icon
                }}>
                    ⚙️
                </span>
            </button>

            {/* Accessibility Options Menu */}
            {isOpen && (
                <div style={{
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    border: '1px solid var(--color-accent-2)',
                    borderRadius: 'var(--border-radius-md)',
                    padding: 'var(--spacing-sm)',
                    marginTop: 'var(--spacing-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-xs)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.7)',
                    textShadow: '0 0 3px rgba(100, 255, 218, 0.5)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-mono)',
                    width: '220px', // Fixed width for better layout of new options
                }}>
                    {/* Basic Accessibility Options */}
                    <button
                        onClick={toggleHighContrast}
                        style={{
                            padding: 'var(--spacing-xs) var(--spacing-sm)',
                            backgroundColor: isHighContrast ? 'var(--color-accent-2)' : 'rgba(100,255,218,0.1)',
                            color: isHighContrast ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                            border: 'none',
                            borderRadius: 'var(--border-radius-sm)',
                            cursor: 'pointer',
                            transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.02em',
                        }}
                    >
                        High Contrast {isHighContrast ? '✅' : '❌'}
                    </button>
                    <button
                        onClick={toggleGrayscale}
                        style={{
                            padding: 'var(--spacing-xs) var(--spacing-sm)',
                            backgroundColor: isGrayscale ? 'var(--color-accent-2)' : 'rgba(100,255,218,0.1)',
                            color: isGrayscale ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                            border: 'none',
                            borderRadius: 'var(--border-radius-sm)',
                            cursor: 'pointer',
                            transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.02em',
                        }}
                    >
                        Grayscale {isGrayscale ? '✅' : '❌'}
                    </button>

                    <div style={{ display: 'flex', gap: 'var(--spacing-xs)', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em', flexShrink: 0 }}>Font Size:</span>
                        <button
                            onClick={() => handleFontSizeChange('normal')}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: fontSize === 'normal' ? 'var(--color-accent-1)' : 'rgba(255,64,129,0.1)',
                                color: fontSize === 'normal' ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                                border: 'none',
                                borderRadius: 'var(--border-radius-sm)',
                                cursor: 'pointer',
                                transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                                flexGrow: 1,
                            }}
                        >
                            A
                        </button>
                        <button
                            onClick={() => handleFontSizeChange('large')}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: fontSize === 'large' ? 'var(--color-accent-1)' : 'rgba(255,64,129,0.1)',
                                color: fontSize === 'large' ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                                border: 'none',
                                borderRadius: 'var(--border-radius-sm)',
                                cursor: 'pointer',
                                transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                                flexGrow: 1,
                            }}
                        >
                            A+
                        </button>
                        <button
                            onClick={() => handleFontSizeChange('xlarge')}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: fontSize === 'xlarge' ? 'var(--color-accent-1)' : 'rgba(255,64,129,0.1)',
                                color: fontSize === 'xlarge' ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                                border: 'none',
                                borderRadius: 'var(--border-radius-sm)',
                                cursor: 'pointer',
                                transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                                flexGrow: 1,
                            }}
                        >
                            A++
                        </button>
                    </div>

                    {/* NEW: Dyslexia-Friendly Font */}
                    <button
                        onClick={toggleDyslexicFont}
                        style={{
                            padding: 'var(--spacing-xs) var(--spacing-sm)',
                            backgroundColor: isDyslexicFont ? 'var(--color-accent-2)' : 'rgba(100,255,218,0.1)',
                            color: isDyslexicFont ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                            border: 'none',
                            borderRadius: 'var(--border-radius-sm)',
                            cursor: 'pointer',
                            transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.02em',
                        }}
                    >
                        Dyslexia Font {isDyslexicFont ? '✅' : '❌'}
                    </button>

                    {/* NEW: Colorblindness Simulation */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', marginTop: 'var(--spacing-xs)' }}>
                        <span style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Colorblind Filter:</span>
                        <select
                            value={colorblindMode}
                            onChange={(e) => setColorblindMode(e.target.value)}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                color: 'var(--color-text-primary)',
                                border: '1px solid var(--color-accent-2)',
                                borderRadius: 'var(--border-radius-sm)',
                                fontFamily: 'var(--font-mono)',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                            }}
                        >
                            <option value="none">None</option>
                            <option value="protanopia">Protanopia (Red-Green)</option>
                            <option value="deuteranopia">Deuteranopia (Red-Green)</option>
                            <option value="tritanopia">Tritanopia (Blue-Yellow)</option>
                        </select>
                    </div>

                    {/* NEW: Code Syntax Theme */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', marginTop: 'var(--spacing-xs)' }}>
                        <span style={{ color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Code Theme:</span>
                        <select
                            value={codeTheme}
                            onChange={(e) => setCodeTheme(e.target.value)}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                color: 'var(--color-text-primary)',
                                border: '1px solid var(--color-accent-2)',
                                borderRadius: 'var(--border-radius-sm)',
                                fontFamily: 'var(--font-mono)',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                            }}
                        >
                            <option value="default">Default</option>
                            <option value="high-contrast-light">Light High-Contrast</option>
                            <option value="futuristic-dark">Futuristic Dark</option>
                        </select>
                    </div>

                    {/* Animations Toggle */}
                    <button
                        onClick={toggleAnimations}
                        style={{
                            padding: 'var(--spacing-xs) var(--spacing-sm)',
                            backgroundColor: isAnimationsDisabled ? 'var(--color-warning)' : 'rgba(255,193,7,0.1)',
                            color: isAnimationsDisabled ? 'var(--color-primary-dark)' : 'var(--color-text-primary)',
                            border: 'none',
                            borderRadius: 'var(--border-radius-sm)',
                            cursor: 'pointer',
                            transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.02em',
                            marginTop: 'var(--spacing-xs)', // Add some space
                        }}
                    >
                        Animations {isAnimationsDisabled ? 'Off 🚫' : 'On ✅'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AccessibilityMenu;