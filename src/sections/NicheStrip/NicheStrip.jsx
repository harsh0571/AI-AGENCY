import React from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './NicheStrip.css';

const NicheStrip = () => {
    return (
        <section className="niche-strip">
            <ScrollReveal>
                <div className="container">
                    <p className="niche-strip__headline">
                        Specialized in <strong>D2C clothing, beauty and home goods brands.</strong>
                    </p>
                    <div className="niche-strip__badges">
                        <div className="niche-strip__badge"><span className="niche-strip__icon">👥</span><span>20k+ followers grown on Instagram</span></div>
                        <div className="niche-strip__divider" />
                        <div className="niche-strip__badge"><span className="niche-strip__icon">✨</span><span>UGC + AI-powered video editing</span></div>
                        <div className="niche-strip__divider" />
                        <div className="niche-strip__badge"><span className="niche-strip__icon">🎯</span><span>Ad-ready creatives for Meta & TikTok</span></div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default NicheStrip;
