import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import VideoDemo from './VideoDemo';
import UseCases from './UseCases';
import '../styles/MainSections.css';

const MainSections: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative z-20 main-sections">
            {/* About Section */}
      <section className={`section about-section ${isVisible ? 'visible' : ''}`}>
          <h2>We Make Software Speak Your Language</h2>
          <p>
            The Polyglot Lab was born from one frustration: tools that don’t talk to each other.  
            We believe software should be invisible, not overwhelming.  
            Our mission is simple: bridge the gap between languages, platforms, and systems, 
            so technology finally works the way you think.  
          </p>
          <p>
            We don’t just build tools. We create fluent systems that adapt to you, 
            so you can focus on what matters <b>growing, building, creating</b>.  
          </p>
      </section>
      <section id="featured" className={`section featured ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          
          <h2>Featured Work</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Escalation Ninja</h3>
              <p>Slack-native automation</p>
              <div className="project-card-button">
                <button type="button" className="btn-primary" onClick={() => setIsModalOpen(true)}>View Videos</button>
                <a
                  href="https://escalation-ninja.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Get it now!
                </a>
              </div>
            </div>
            <div className="project-card"> 
              <h3>EstateIntel</h3>
              <p>Real estate insights made simple - ML price predictions, and more!</p>
              <span className="under-development">Under Development</span>
            </div>
            <div className="project-card"> 
              <h3>CliClo</h3>
              <p>Clock-in/out application for contract cleanings companies - automate your business!</p>
              <span className="under-development">Under Development</span>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className={`section capabilities ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2>What We Do</h2>
            <p>
              We believe software should be invisible. You should use it without thinking about it. Our mission is to make your tools serve you, not the other way around.
            </p>
          <div className="cap-grid">
            <div className="cap-item">
              <h3>Integration & Automation</h3>
              <p>We connect your tools so they actually talk to each other.</p>
            </div>
            <div className="cap-item">
              <h3>Custom Software</h3>
              <p>We build internal tools & products tailored to your needs.</p>
            </div>
            <div className="cap-item">
              <h3>Invisible Systems</h3>
              <p>Software that works silently in the background, until you need it.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className={`section why-us-home ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2>Why The Polyglot Lab?</h2>
          <p>Because we don't build another tool — we give your existing stack a fluent voice. Tools adapt to you, not the other way around.</p>
        </div>
      </section>

      <section id="cta-home" className={`section cta-home ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2>Ready for Software to Speak Your Language?</h2>
          <a
            href="https://calendly.com/yor-thepolyglotlab/15min-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta-button"
          >
            Let's Talk
          </a>
        </div>
      </section>

      {/* Video Demo Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Escalation Ninja Video Center"
      >
        <VideoDemo />
        <UseCases />
      </Modal>
    </div>
  );
};

export default MainSections;
