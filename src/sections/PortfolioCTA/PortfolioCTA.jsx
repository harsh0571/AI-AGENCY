import React from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './PortfolioCTA.css';

const PortfolioCTA = () => {
    const scrollTo = () => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="portfolio-cta">
            <ScrollReveal>
                <div className="container portfolio-cta__inner">
                    <h2>Ready to see UGC concepts for your products?</h2>
                    <p>Scale your performance creative with videos that don't look like ads. Start today with zero commitment.</p>
                    <button className="btn btn-primary btn-large" onClick={scrollTo}>Get 3 Free Concepts</button>
                    <span className="portfolio-cta__note">No credit card required • Strategy call included</span>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default PortfolioCTA;
