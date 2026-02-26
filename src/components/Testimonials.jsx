import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const socialStats = [
        { label: 'IG Followers Grown', value: '20k+', sub: 'with viral shorts' },
        { label: 'Best Reel Views', value: '150k+', sub: 'organic reach' }
    ];

    const reviews = [
        {
            text: "XYZ Agency delivered UGC creatives that outperformed our studio shoots.",
            author: "[Brand Name]",
            role: "E-commerce Brand"
        },
        {
            text: "Fast turnaround, ad-ready files for Meta campaigns.",
            author: "[Brand Name]",
            role: "DTC Founder"
        }
    ];

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2>Results That Speak for Themselves</h2>
                </div>

                <div className="social-proof-grid">
                    {/* Stats & Video Column */}
                    <div className="proof-column stats-column">
                        <div className="stats-badges">
                            {socialStats.map((stat, index) => (
                                <div key={index} className="stat-badge">
                                    <h3>{stat.value}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                    <p className="stat-sub">{stat.sub}</p>
                                </div>
                            ))}
                        </div>

                        <div className="viral-reel-card">
                            <div className="reel-thumbnail">
                                <div className="play-button">▶</div>
                                <span className="view-count">150k+ Views</span>
                            </div>
                            <p className="reel-caption">Best performing organic reel</p>
                        </div>
                    </div>

                    {/* Testimonials Column */}
                    <div className="proof-column reviews-column">
                        {reviews.map((review, index) => (
                            <div key={index} className="testimonial-card horizontal">
                                <div className="review-content">
                                    <p className="review-text">"{review.text}"</p>
                                    <div className="reviewer-meta">
                                        <h4>{review.author}</h4>
                                        <span>{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
