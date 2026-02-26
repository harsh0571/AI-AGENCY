import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('lead-capture').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToShowreel = () => {
        // Assuming the video placeholder itself is the "showreel" or scrolling to featured work
        // For now, let's scroll to Featured Work
        document.getElementById('featured-work').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="video-background">
                <div className="video-placeholder">
                    <span className="video-label">Showreel: Our Best UGC Work (1:30)</span>
                    <div className="play-icon">▶</div>
                </div>
            </div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-label">UGC VIDEO AGENCY FOR E-COMMERCE BRANDS</div>

                <h1 className="hero-title">Stop wasting ad spend on creatives that don’t convert.</h1>

                <p className="hero-subtitle">
                    We create scroll-stopping UGC and lifestyle videos that drive sales for D2C clothing, beauty, and home goods brands.
                </p>

                <ul className="hero-bullets">
                    <li>15–30s UGC product demos ready for Meta & TikTok</li>
                    <li>Lifestyle & unboxing reels for launches</li>
                    <li>Talking-head explainer shorts for offers</li>
                </ul>

                <div className="hero-cta">
                    <button className="btn btn-primary" onClick={scrollToContact}>Get 3 Free UGC Concepts</button>
                    <button className="btn btn-outline-light" onClick={scrollToShowreel}>Watch Our Showreel</button>
                </div>

                <p className="hero-trust-line">Specialized in D2C clothing, beauty and home goods brands.</p>
            </div>
        </section>
    );
};

export default Hero;
