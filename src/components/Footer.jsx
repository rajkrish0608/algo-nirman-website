import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-background-dark)',
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
            padding: 'var(--spacing-md)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255, 193, 7, 0.1)'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Algo Nirman Hackathon. All rights reserved.</p>
                <p style={{ marginTop: 'var(--spacing-xs)' }}>Organized by Vectorix Community</p>
                {/* Social media icons can be added here */}
            </div>
        </footer>
    );
};

export default Footer;