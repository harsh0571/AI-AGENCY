import React from 'react';
import VideoSlot from '../../components/common/VideoSlot';
import ScrollReveal from '../../components/common/ScrollReveal';
import './Testimonials.css';

const Testimonials = () => {
    const stats = [
        { value: '20k+', label: 'IG Followers Grown', sub: 'with viral shorts' },
        { value: '150k+', label: 'Best Reel Views', sub: 'organic reach' },
    ];

    const reviews = [
        { text: "The UGC content provided transformed our social presence and drove significant sales. Their creative approach is exactly what we needed for our launch.", author: 'Marketing Director', brand: 'Premium Skincare Brand' },
        { text: "Incredible quality and fast turnaround. These concepts are exactly what our product needed. Our ROAS increased by 40% in the first month.", author: 'Founder & CEO', brand: 'Eco-Friendly Home Goods' },
    ];

    return (
        <section className="section testimonials">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Results That Speak for Themselves</h2>
                    </div>
                </ScrollReveal>

                <div className="testimonials__grid">
                    <ScrollReveal delay={100}>
                        <div className="testimonials__proof">
                            <div className="testimonials__stats">
                                {stats.map((stat, i) => (
                                    <div key={i} className="testimonials__stat">
                                        <h3>{stat.value}</h3>
                                        <p className="testimonials__stat-label">{stat.label}</p>
                                        <p className="testimonials__stat-sub">{stat.sub}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="testimonials__reel">
                                <VideoSlot slotId="viral-reel" aspectRatio="16/9" placeholderLabel="Best performing organic reel" />
                                <p className="testimonials__reel-caption">Best performing organic reel</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="testimonials__reviews">
                            {reviews.map((review, i) => (
                                <div key={i} className="testimonials__review-card">
                                    <p className="testimonials__review-text">"{review.text}"</p>
                                    <div className="testimonials__reviewer">
                                        <h4>{review.author}</h4>
                                        <span>{review.brand}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
