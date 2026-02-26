import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <div className="navbar__logo">
                    <svg className="navbar__logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="var(--accent-primary)">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>XYZ AGENCY</span>
                </div>

                <button className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                    <span /><span /><span />
                </button>

                <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    <a href="#work" onClick={() => scrollTo('work')}>Work</a>
                    <a href="#services" onClick={() => scrollTo('services')}>Services</a>
                    <a href="#process" onClick={() => scrollTo('process')}>Process</a>
                    <button className="btn btn-primary navbar__cta" onClick={() => scrollTo('contact')}>Book a Call</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
