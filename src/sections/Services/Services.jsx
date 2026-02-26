import React from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './Services.css';

const Services = () => {
    const services = [
        { title: 'UGC Product Demos', description: 'High-converting video demonstrations showing your products in real-world scenarios to build trust and eliminate friction.', icon: '🎥' },
        { title: 'Organic Content', description: 'Engaging social-first content designed for TikTok and Reels to build a community and boost brand awareness natively.', icon: '✨' },
        { title: 'Paid Ad Creative', description: 'Data-driven hooks and strategic angles optimized for Meta and Google ads to maximize your ROAS and scale spend.', icon: '🗣️' },
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>What We Do for E-commerce Brands</h2>
                        <p>High-impact, conversion-focused user generated content that turns viewers into loyal customers.</p>
                    </div>
                </ScrollReveal>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="services__card">
                                <div className="services__icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
