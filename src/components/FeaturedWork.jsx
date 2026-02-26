import React from 'react';
import './FeaturedWork.css';

const FeaturedWork = () => {
    const works = [
        {
            id: 1,
            category: 'Skincare brand',
            title: 'Product demo reel',
            result: 'Used in Meta ads',
            color: '#FFD700'
        },
        {
            id: 2,
            category: 'Clothing brand',
            title: 'Outfit try-on UGC',
            result: '0 to 150k views',
            color: '#FFB6C1'
        },
        {
            id: 3,
            category: 'Home decor brand',
            title: 'Lifestyle reel',
            result: 'Boosted engagement for launch',
            color: '#98FB98'
        },
    ];

    return (
        <section id="work" className="section work-section">
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2>Featured UGC & Lifestyle Reels</h2>
                    <p>Short, authentic videos optimized for scroll-stopping hooks and product clarity.</p>
                </div>

                {/* Main Showreel */}
                <div className="showreel-container">
                    <div className="showreel-placeholder">
                        <div className="play-button large">▶</div>
                        <span className="showreel-label">Showreel – 1:30 highlight of our best work</span>
                    </div>
                </div>

                {/* Work Grid */}
                <div className="work-grid">
                    {works.map((work) => (
                        <div key={work.id} className="work-card">
                            <div className="work-visual" style={{ backgroundColor: work.color }}>
                                {/* Visual placeholder - ready for <video> embed */}
                                <div className="play-button">▶</div>
                            </div>
                            <div className="work-info">
                                <p className="work-category">{work.category}</p>
                                <h3>{work.title}</h3>
                                <p className="work-result">{work.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
