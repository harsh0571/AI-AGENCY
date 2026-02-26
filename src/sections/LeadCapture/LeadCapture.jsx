import React, { useState } from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './LeadCapture.css';

const LeadCapture = () => {
    const [formData, setFormData] = useState({ name: '', email: '', category: '', brandInfo: '' });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Added isSubmitting state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target;
        const formEntries = new FormData(form);
        const data = Object.fromEntries(formEntries);
        const url = import.meta.env.VITE_FORMSPREE_URL;

        if (!url) {
            console.warn("Formspree URL not set. Simulating success.");
            console.log('Form Data:', formData);
            setTimeout(() => { setSubmitted(true); setFormData({ name: '', email: '', category: '', brandInfo: '' }); setIsSubmitting(false); }, 1000);
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
                setFormData({ name: '', email: '', category: '', brandInfo: '' });
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
        <section id="lead-capture" className="section lead-capture">
            <div className="container">
                <ScrollReveal>
                    <div className="lead-capture__card">
                        {submitted ? (
                            <div className="lead-capture__success">
                                <div className="lead-capture__success-icon">✓</div>
                                <h3>Thanks!</h3>
                                <p>Check your email for 3 custom video ideas within 24 hours.</p>
                                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Submit another</button>
                            </div>
                        ) : (
                            <>
                                <div className="lead-capture__header">
                                    <h2>Get 3 Free UGC Concepts for Your Products</h2>
                                    <p>Tell us about your brand and our creative team will draft three custom hooks for your ads.</p>
                                </div>
                                <form className="lead-capture__form" onSubmit={handleSubmit}>
                                    <div className="lead-capture__row">
                                        <div className="lead-capture__field">
                                            <label>Name</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
                                        </div>
                                        <div className="lead-capture__field">
                                            <label>Email</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                                        </div>
                                    </div>
                                    <div className="lead-capture__field">
                                        <label>Product Category</label>
                                        <select name="category" value={formData.category} onChange={handleChange} required>
                                            <option value="" disabled>Select a category</option>
                                            <option value="Clothing">Clothing</option>
                                            <option value="Beauty/Skincare">Beauty/Skincare</option>
                                            <option value="Home Goods">Home Goods</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="lead-capture__field">
                                        <label>Tell us about your brand (Optional)</label>
                                        <input type="text" name="brandInfo" value={formData.brandInfo} onChange={handleChange} placeholder="e.g. We sell organic skincare for sensitive skin." />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-large lead-capture__submit">Send My Concepts</button>
                                </form>
                            </>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default LeadCapture;
