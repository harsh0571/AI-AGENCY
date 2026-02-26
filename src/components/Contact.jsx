import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <h2>Need Fresh Creatives for Your Next Campaign?</h2>
                <p className="contact-subtext">
                    Tell us about your products and we’ll send back three custom video concepts.
                </p>

                <div className="contact-actions">
                    <button
                        className="btn btn-primary btn-large"
                        onClick={() => document.getElementById('lead-capture').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get 3 Free Concepts
                    </button>
                    <div className="secondary-links">
                        <a href="mailto:hello@xyzagency.com" className="link-text">hello@xyzagency.com</a>
                        <span className="divider">•</span>
                        <a href="#" className="link-text">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
