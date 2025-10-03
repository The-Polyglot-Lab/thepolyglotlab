import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TechStackShowcase from './Technology';
import '../styles/AboutUs.css';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative z-20 about-wrapper">
      
      {/* Our Story */}
      <section id="story" className={`section story ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2>Our Story</h2>
          <p>
            The Polyglot Lab was born from decades of combined experience in the corporate world. 
            After 20+ years navigating global enterprises, we’ve seen firsthand how technology often 
            slows teams down instead of helping them thrive. Endless tools, disconnected systems, 
            and workflows patched together with duct tape create frustration, waste, and lost opportunities.
          </p>
          <p>
            We built The Polyglot Lab to flip that script. Our philosophy is simple: 
            <strong> small, agile teams, laser-focused execution, and zero bureaucracy. </strong>
            We believe software should be invisible, not overwhelming — quietly doing its job 
            so you can focus on growing, building, and creating. 
          </p>
          <p>
            Today, we help small and medium businesses achieve what corporate giants spend 
            millions to accomplish: <span className="highlight">seamless integrations, 
            lean automations, and tools that simply work.</span>
          </p>
        </div>
      </section>

      <section id="values" className={`section values ${isVisible ? 'visible' : ''}`}>
        <div className="values-container">
          <h2>Our Values</h2>
            <ol className="values-list">
                <li className="value-item">
                  <div className="value-number">01</div>
                  <div className="value-content">
                    <h3>Human First</h3>
                    <p>Technology should serve people, not the other way around. We design with empathy, clarity, and simplicity at the core.</p>
                  </div>
                </li>
                <li className="value-item">
                  <div className="value-number">02</div>
                  <div className="value-content">
                    <h3>Freedom Through Systems</h3>
                    <p>Well-built systems create freedom — time to grow, space to breathe, and energy to focus on what matters.</p>
                  </div>
                </li>
                <li className="value-item">
                  <div className="value-number">03</div>
                  <div className="value-content">
                    <h3>Lean, Not Bloated</h3>
                    <p>We don't reinvent the wheel. We connect, streamline, and optimise what you already use. Efficiency is our obsession.</p>
                  </div>
                </li>
                <li className="value-item">
                  <div className="value-number">04</div>
                  <div className="value-content">
                    <h3>Radical Transparency</h3>
                    <p>No jargon, no smoke and mirrors. We tell it straight and build with honesty, so trust grows with every step.</p>
                  </div>
                </li>
                <li className="value-item">
                  <div className="value-number">05</div>
                  <div className="value-content">
                    <h3>Continuous Curiosity</h3>
                    <p>We never stop learning, experimenting, and pushing boundaries — because better systems mean better lives.</p>
                  </div>
                </li>
            </ol>
        </div>
      </section>

      {/* Technology (reuse TechStackShowcase) */}
      <section id="technology" className={`section technology ${isVisible ? 'visible' : ''}`}>
        <div className="tech-container">
          <h2>Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h3>Slack-Native Automations</h3>
              <p>Removing friction with AI-powered workflows inside your team’s daily tools.</p>
            </div>
            <div className="tech-item">
              <h3>CRM & DAM Platforms</h3>
              <p>Custom digital asset management and client systems built for your workflow.</p>
            </div>
            <div className="tech-item">
              <h3>AI Workflows & Neural Models</h3>
              <p>Harnessing AI to augment human decision-making — not replace it.</p>
            </div>
          </div>
          <TechStackShowcase />
        </div>
      </section>

      

      {/* Testimonials */}
      <section id="testimonials" className={`section testimonials ${isVisible ? 'visible' : ''}`}>
        <div className="testimonials-container">
          <h2>What People Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                "The Polyglot Lab helped us connect our entire stack. 
                What used to take hours each week now happens in seconds."
              </p>
              <span>- CTO, SaaS Company</span>
            </div>
            <div className="testimonial-card">
              <p>
                "Finally, a partner that actually delivers lean software 
                without the endless meetings and delays."
              </p>
              <span>- Head of Ops, Startup</span>
            </div>
            <div className="testimonial-card">
              <p>
                "They bring the best of both worlds: corporate-grade experience, 
                startup-grade speed."
              </p>
              <span>- Product Manager, SME</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;