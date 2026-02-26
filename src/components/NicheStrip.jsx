import React from 'react';
import './NicheStrip.css';

const NicheStrip = () => {
    return (
        <section className="niche-strip">
            <div className="container">
                <p className="niche-headline">
                    Specialized in <strong>D2C clothing, beauty and home goods brands.</strong>
                </p>
                <div className="badges-container">
                    <div className="niche-badge">
                        <span className="badge-icon">👥</span>
                        <span>20k+ followers grown on Instagram</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="niche-badge">
                        <span className="badge-icon">✨</span>
                        <span>UGC + AI-powered video editing</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="niche-badge">
                        <span className="badge-icon">🎯</span>
                        <span>Ad-ready creatives for Meta & TikTok</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NicheStrip;
