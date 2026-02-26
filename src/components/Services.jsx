import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'UGC Product Demos',
            description: '15–30s videos showing your product in real use, with clear hooks and calls to action.',
            icon: '🎥'
        },
        {
            title: 'Lifestyle & Unboxing Reels',
            description: 'Aesthetic lifestyle content and unboxings for organic posts and ad creatives.',
            icon: '✨'
        },
        {
            title: 'Talking-Head Explainer Shorts',
            description: 'Founders or creators explaining the product story, benefits, and offer.',
            icon: '🗣️'
        }
    ];

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2>What We Do for E-commerce Brands</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
