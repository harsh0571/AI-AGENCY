import React, { useState, useEffect } from 'react';
import './StickyCTA.css';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            className={`sticky-cta ${isVisible ? 'sticky-cta--visible' : ''}`}
            onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
        >
            Get 3 Free Concepts
        </button>
    );
};

export default StickyCTA;
