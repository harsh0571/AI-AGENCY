import React from 'react';
import VideoSlot from '../../components/common/VideoSlot';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToShowreel = () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero__video-bg">
                <VideoSlot slotId="hero-bg" fullCover placeholderLabel="Hero Showreel" />
                <div className="hero__gradient-overlay" />
            </div>

            <div className="container hero__content">
                <span className="hero__label">UGC VIDEO AGENCY FOR E-COMMERCE BRANDS</span>
                <h1 className="hero__title">
                    Stop wasting ad spend on creatives that <span className="hero__accent">don't convert.</span>
                </h1>
                <p className="hero__subtitle">
                    We bridge the gap between high-level production and authentic storytelling. Driving massive sales for D2C brands through data-led performance content.
                </p>

                <ul className="hero__bullets">
                    <li>15–30s UGC product demos</li>
                    <li>Lifestyle & unboxing reels</li>
                    <li>Talking-head explainer shorts</li>
                </ul>

                <div className="hero__cta">
                    <button className="btn btn-primary btn-large" onClick={scrollToContact}>Get 3 Free UGC Concepts</button>
                    <button className="btn btn-outline-light btn-large" onClick={scrollToShowreel}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        Watch Our Showreel
                    </button>
                </div>

                <p className="hero__trust">Specialized in D2C clothing, beauty and home goods brands. Trusted by 50+ scaling startups.</p>
            </div>
        </section>
    );
};

export default Hero;
