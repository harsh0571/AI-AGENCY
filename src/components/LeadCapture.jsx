import React, { useState } from 'react';
import './LeadCapture.css';

const LeadCapture = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: '',
        brandInfo: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would connect to Google Sheets or Email API (e.g. Formspree, EmailJS)
        console.log('Form Submitted:', formData);

        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setFormData({ name: '', email: '', category: '', brandInfo: '' });
        }, 1000);
    };

    return (
        <section id="lead-capture" className="section lead-capture-section">
            <div className="container capture-container">
                <div className="capture-content">
                    {submitted ? (
                        <div className="success-message">
                            <h3>Thanks!</h3>
                            <p>Check your email for 3 custom video ideas within 24 hours.</p>
                            <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Submit another</button>
                        </div>
                    ) : (
                        <>
                            <div className="capture-header">
                                <h2>Get 3 Free UGC Concepts for Your Products</h2>
                                <p>Enter your details and we'll brainstorm ideas specifically for your brand.</p>
                            </div>
                            <form className="capture-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Product Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select a category</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Beauty/Skincare">Beauty/Skincare</option>
                                        <option value="Home Goods">Home Goods</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Tell us about your brand (Optional)</label>
                                    <input
                                        type="text"
                                        name="brandInfo"
                                        value={formData.brandInfo}
                                        onChange={handleChange}
                                        placeholder="e.g. We sell organic skincare for sensitive skin."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">Send My Concepts</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadCapture;
