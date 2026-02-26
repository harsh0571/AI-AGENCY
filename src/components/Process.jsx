import React from 'react';
import './Process.css';

const Process = () => {
    const steps = [
        { num: '01', title: 'Discover', desc: 'We learn about your brand, products, and goals on a quick call.' },
        { num: '02', title: 'Plan Hooks & Angles', desc: 'We map out video ideas, hooks, and scripts tailored to your audience.' },
        { num: '03', title: 'Shoot & Edit', desc: 'We capture UGC and lifestyle footage, then edit with AI-assisted tools for speed and quality.' },
        { num: '04', title: 'Deliver & Iterate', desc: 'You get ad-ready files and we refine based on performance.' }
    ];

    return (
        <section id="process" className="section process-section">
            <div className="container">
                <div className="section-header text-center mb-4">
                    <h2>Simple Process, Fast Turnaround</h2>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-num">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
