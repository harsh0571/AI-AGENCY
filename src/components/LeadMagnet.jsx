import React, { useState } from 'react';
import './LeadMagnet.css';

const LeadMagnet = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setEmail('');
        }, 800);
    };

    return (
        <section className="lead-magnet-section">
            <div className="container magnet-container">
                {submitted ? (
                    <div className="magnet-success">
                        <p>Check your inbox for your UGC hook templates!</p>
                    </div>
                ) : (
                    <div className="magnet-content">
                        <div className="magnet-text">
                            <h3>Free Download: 10 UGC Hook Templates for E-com Ads</h3>
                            <p>Copy-paste video scripts and hooks that brands use to boost Meta/TikTok performance.</p>
                        </div>
                        <form className="magnet-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary">Send Me the Templates</button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LeadMagnet;
