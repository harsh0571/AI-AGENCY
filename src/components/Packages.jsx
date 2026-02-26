import React from 'react';
import './Packages.css';

const Packages = () => {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const packages = [
        {
            title: 'Launch Pack',
            description: '10 UGC videos (15–30s) with 2–3 different hooks per product.',
            features: ['10 Videos', '2-3 Hooks/Product', 'Basic Editing', 'Ad-Ready Exports']
        },
        {
            title: 'Testing Pack',
            description: '16 UGC & lifestyle videos, multiple angles for A/B testing across Meta and TikTok.',
            features: ['16 Videos', 'Multiple Angles', 'A/B Testing Ready', 'Raw Files Included'],
            popular: true
        },
        {
            title: 'Monthly Retainer',
            description: 'Fresh creatives every month for continuous testing and scaling.',
            features: ['Monthly Delivery', 'Continuous Iteration', 'Priority Support', 'Strategy Calls']
        }
    ];

    return (
        <section className="section packages-section">
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2>Creative Packages</h2>
                    <p>Pick the level of content you need. Custom packages available on request.</p>
                </div>

                <div className="packages-grid">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                            {pkg.popular && <div className="popular-tag">Best Value</div>}
                            <h3>{pkg.title}</h3>
                            <p className="package-description">{pkg.description}</p>
                            <ul className="features-list">
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`} onClick={scrollToContact}>
                                Book a Call
                            </button>
                        </div>
                    ))}
                </div>

                <div className="pricing-note text-center">
                    <p>Pricing available on call. Typical projects range from $600–$1,500+ per month.</p>
                </div>
            </div>
        </section>
    );
};

export default Packages;
