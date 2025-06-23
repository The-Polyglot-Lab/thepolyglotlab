import React from 'react';
import '../styles/Testimonials.css';

function Testimonials(){
    return(
        <section className="testimonials-section">
            <h2 className="testimonials-heading">What Early Users Are Saying</h2>
            <div className="testimonials-grid">
                <blockquote>
                <p>“Escalation-Ninja saved us hours per week. Our Slack is clean, our team is focused.”</p>
                <footer>— Alex R., Customer Ops Lead</footer>
                </blockquote>
                <blockquote>
                <p>“We didn’t even realize how much friction we had until we automated it.”</p>
                <footer>— Jamie K., Incident Manager</footer>
                </blockquote>
            </div>
        </section>
    );
}

export default Testimonials;