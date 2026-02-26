import React, { useState, useEffect } from 'react';
import './StickyCTA.css';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToLeadCapture = () => {
        const element = document.getElementById('lead-capture');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            className={`sticky-cta ${isVisible ? 'visible' : ''}`}
            onClick={scrollToLeadCapture}
        >
            Get 3 Free Concepts
        </button>
    );
};

export default StickyCTA;
