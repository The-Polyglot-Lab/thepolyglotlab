import React from 'react';
import '../styles/Whyus.css';

function Whyus(){
    return(
        <section className="why-polyglot-section">
            <h2 className="section-heading">Why Polyglot Lab?</h2>
            <p className="manifesto">
                We’re not another bloated agency. We’re a small, sharp team building tools we actually use. 
                Human-first. Tech-led. No buzzwords. Just working code that makes your life easier.
            </p>
            <ul className="value-list">
                <li>⚡ Fast</li>
                <li>🛡️ Private</li>
                <li>🚫 No BS</li>
                <li>🛠️ Built for Doers</li>
            </ul>
            <div className="get-in-touch-wrapper">
                <a href="#contact" className="get-in-touch-button">Get in Touch</a>
            </div>
        </section>
    );
}

export default Whyus;