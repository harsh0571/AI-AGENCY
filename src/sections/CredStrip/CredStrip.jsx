import React from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './CredStrip.css';

const CredStrip = () => {
    const brands = ['BRAND 1', 'BRAND 2', 'BRAND 3', 'BRAND 4', 'BRAND 5'];
    return (
        <div className="cred-strip">
            <ScrollReveal>
                <div className="container">
                    <p className="cred-strip__label">Trusted by leading brands</p>
                    <div className="cred-strip__logos">
                        {brands.map((brand, i) => (
                            <div key={i} className="cred-strip__logo">{brand}</div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default CredStrip;
