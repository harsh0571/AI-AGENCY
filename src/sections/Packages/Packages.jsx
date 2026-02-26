import React from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './Packages.css';

const Packages = () => {
    const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

    const packages = [
        { title: 'Launch Pack', description: 'Perfect for new product launches or initial creative testing.', features: ['10 Videos', '2-3 Hooks/Product', 'Basic Editing', 'Ad-Ready Exports'] },
        { title: 'Testing Pack', description: 'Data-led approach for brands ready to scale their performance.', features: ['16 Videos', 'Multiple Angles', 'A/B Testing Ready', 'Raw Files Included'], popular: true },
        { title: 'Monthly Retainer', description: 'Scaleable monthly creative assets to never run out of ads.', features: ['Monthly Delivery', 'Continuous Iteration', 'Priority Support', 'Strategy Calls'] },
    ];

    return (
        <section className="section packages">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Creative Packages</h2>
                        <p>Flexible options tailored for brands at every stage of growth.</p>
                    </div>
                </ScrollReveal>

                <div className="packages__grid">
                    {packages.map((pkg, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className={`packages__card ${pkg.popular ? 'packages__card--popular' : ''}`}>
                                {pkg.popular && <div className="packages__popular-tag">Best Value</div>}
                                <h3>{pkg.title}</h3>
                                <p className="packages__description">{pkg.description}</p>
                                <ul className="packages__features">
                                    {pkg.features.map((f, i) => (
                                        <li key={i}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}`} onClick={scrollToContact}>Book a Call</button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal>
                    <p className="packages__note">Pricing available on call. Typical projects range from $600–$1,500+ per month.</p>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Packages;
