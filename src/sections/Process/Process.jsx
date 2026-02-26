import React from 'react';
import ScrollReveal from '../../components/common/ScrollReveal';
import './Process.css';

const Process = () => {
    const steps = [
        { num: '01', title: 'Discover', desc: 'Initial strategy call to align on goals, brand voice, and target audience personas.' },
        { num: '02', title: 'Plan Hooks & Angles', desc: 'Scriptwriting and creative brief development based on proven performance frameworks.' },
        { num: '03', title: 'Shoot & Edit', desc: 'Production handled by our vetted creators and polished by our in-house editing team.' },
        { num: '04', title: 'Deliver & Iterate', desc: 'Final files delivered via private dashboard with quick revisions if needed.' },
    ];

    return (
        <section id="process" className="section process">
            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Simple Process, Fast Turnaround</h2>
                        <p>We've streamlined our production to get your high-quality content ready in under 10 business days.</p>
                    </div>
                </ScrollReveal>

                <div className="process__timeline">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 120}>
                            <div className="process__step">
                                <div className="process__num">{step.num}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
