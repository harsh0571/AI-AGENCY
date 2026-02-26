import React from 'react';
import './PortfolioCTA.css';

const PortfolioCTA = () => {
    const scrollToLeadCapture = () => {
        const element = document.getElementById('lead-capture');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="portfolio-cta">
            <div className="container text-center">
                <h2>Ready to see UGC concepts for your products?</h2>
                <button className="btn btn-primary" onClick={scrollToLeadCapture}>
                    Get 3 Free Concepts
                </button>
            </div>
        </section>
    );
};

export default PortfolioCTA;
