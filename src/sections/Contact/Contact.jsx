import React from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <ScrollReveal>
                <div className="container contact__inner">
                    <h2>Need Fresh Creatives for Your Next Campaign?</h2>
                    <p className="contact__sub">Tell us about your products and we'll send back three custom video concepts.</p>
                    <button className="btn btn-primary btn-large" onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book a Strategy Call
                    </button>
                    <div className="contact__links">
                        <a href="mailto:hello@xyzagency.com" className="contact__link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            hello@xyzagency.com
                        </a>
                        <span className="contact__divider">•</span>
                        <a href="#" className="contact__link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            @xyzugc_creative
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Contact;
