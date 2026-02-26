import React, { useState } from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './LeadMagnet.css';

const LeadMagnet = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target;
        // For Formspree, we need to send the email directly, not a FormData object
        // The input field has name="email" so it will be included in formData
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const url = import.meta.env.VITE_FORMSPREE_URL;

        if (!url) {
            console.warn("Formspree URL not set. Simulating success.");
            setTimeout(() => { setSubmitted(true); setEmail(''); setIsSubmitting(false); }, 800);
            return;
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
                setEmail('');
            } else {
                throw new Error("Form submission error");
            }
        } catch (error) {
            console.error('Submission failed', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="lead-magnet">
            <ScrollReveal>
                <div className="container lead-magnet__inner">
                    {submitted ? (
                        <div className="lead-magnet__success">
                            <span className="lead-magnet__success-icon">✓</span>
                            <p>Check your inbox for your UGC hook templates!</p>
                        </div>
                    ) : (
                        <div className="lead-magnet__content">
                            <div className="lead-magnet__text">
                                <h3>Free Download: 10 UGC Hook Templates for E-com Ads</h3>
                                <p>Copy-paste video scripts and hooks that brands use to boost Meta/TikTok performance.</p>
                            </div>
                            <form className="lead-magnet__form" onSubmit={handleSubmit}>
                                <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <button type="submit" className="btn btn-primary">Send Me the Templates</button>
                            </form>
                        </div>
                    )}
                </div>
            </ScrollReveal>
        </section>
    );
};

export default LeadMagnet;
