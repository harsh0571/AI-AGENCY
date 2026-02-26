import React from 'react';
import VideoSlot from '../../components/common/VideoSlot';
import ScrollReveal from '../../components/common/ScrollReveal';
import './FeaturedWork.css';

const FeaturedWork = () => {
    const works = [
        { id: 1, slotId: 'work-1', category: 'Skincare brand', title: 'Product demo reel', result: 'Used in Meta ads • High ROAS', color: '#2a1f0a' },
        { id: 2, slotId: 'work-2', category: 'Clothing brand', title: 'Outfit try-on UGC', result: '0 to 150k views • TikTok Viral', color: '#1a0a1a' },
        { id: 3, slotId: 'work-3', category: 'Home decor brand', title: 'Lifestyle reel', result: 'Boosted engagement • Aesthetic', color: '#0a1a0a' },
    ];

    return (
        <section id="work" className="section featured-work">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Featured UGC & Lifestyle Reels</h2>
                        <p>High-impact video content designed to convert and scale your brand across social platforms.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="featured-work__showreel">
                        <VideoSlot slotId="showreel" aspectRatio="16/9" placeholderLabel="Showreel – 1:30 highlight of our best work" />
                    </div>
                </ScrollReveal>

                <div className="featured-work__grid">
                    {works.map((work, index) => (
                        <ScrollReveal key={work.id} delay={index * 120}>
                            <div className="featured-work__card">
                                <div className="featured-work__visual" style={{ backgroundColor: work.color }}>
                                    <VideoSlot slotId={work.slotId} aspectRatio="9/16" placeholderLabel={work.title} />
                                </div>
                                <div className="featured-work__info">
                                    <span className="featured-work__category">{work.category}</span>
                                    <h3>{work.title}</h3>
                                    <p className="featured-work__result">{work.result}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
