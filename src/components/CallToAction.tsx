import React from 'react';
import '../styles/CallToAction.css';

const CallToAction = () => {
    return (
        <div className="cta-section">
            <h2 className="section-heading">Got an idea or a problem?</h2>
            <p className="manifesto">
                Let’s explore it together — no buzzwords, no pressure.  
                Just a 15-minute chat to see if we’re the right fit.
            </p>
            <a
                href="https://calendly.com/yor-thepolyglotlab/30min-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
            >
                Book a Free 15-Min Call
            </a>
        </div>
    )
}

export default CallToAction;