import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-socials">
                    {/* Social Icon Placeholders */}
                    <a href="#" className="social-icon" aria-label="Instagram">IG</a>
                    <a href="#" className="social-icon" aria-label="TikTok">TT</a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">LI</a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} XYZ Agency – UGC Video for E-commerce Brands
                </p>
            </div>
        </footer>
    );
};

export default Footer;
