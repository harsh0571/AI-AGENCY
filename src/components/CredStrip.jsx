import React from 'react';
import './CredStrip.css';

const CredStrip = () => {
    return (
        <div className="cred-strip">
            <div className="container">
                <p className="cred-label">Trusted by leading brands</p>
                <div className="logo-grid">
                    {/* Logo Placeholders */}
                    <div className="brand-logo">BRAND 1</div>
                    <div className="brand-logo">BRAND 2</div>
                    <div className="brand-logo">BRAND 3</div>
                    <div className="brand-logo">BRAND 4</div>
                    <div className="brand-logo">BRAND 5</div>
                </div>
            </div>
        </div>
    );
};

export default CredStrip;
