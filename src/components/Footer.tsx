import React, { forwardRef, useEffect, useRef } from "react";
import tplLogo from "../assets/enlogonobg.png"; 
import "../styles/Footer.css";

interface FooterProps {
  onContactClick: () => void;
  onPrivacyClick: () => void;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(({ onContactClick, onPrivacyClick }, ref) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const setRefs = (node: HTMLDivElement | null) => {
    localRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    let triggered = false;
    const handleAnimEnd = () => {
      el.classList.remove('glare-active');
      el.removeEventListener('animationend', handleAnimEnd);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!triggered && entry.isIntersecting) {
          triggered = true;
          el.classList.add('glare-active');
          el.addEventListener('animationend', handleAnimEnd);
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => {
      obs.disconnect();
      el.removeEventListener('animationend', handleAnimEnd);
    };
  }, []);

  return (
  <footer className="footer-wrapper" ref={setRefs}>
    <div className="footer-inner">
      <div className="footer-content">

        {/* Left column: Logo + Manifesto */}
        <div className="footer-column logo-column">
          <img src={tplLogo} alt="The Polyglot Lab" className="footer-logo" />
          <p className="footer-description">
            <strong>We make software speak your language</strong> <br/><br/>Bridging gaps between tools, 
            automating the boring, and letting humans focus on what matters.
          </p>
        </div>

        {/* Middle column: Capabilities */}
        <div className="footer-column">
          <h4 className="footer-heading">Services</h4>
          <ul>
            <li>Slack-Native Automations</li>
            <li>Custom AI Workflows</li>
            <li>Data & API Integrations</li>
            <li>CRM & DAM Platforms</li>
            <li>ML/Neural Model Training</li>
            <li>App Creation (Web & Mobile)</li>
            <li>Prototyping & Rapid Builds</li>
          </ul>
        </div>

        {/* Right column: Contact */}
        <div className="footer-column">
          <h4 className="footer-heading">Connect With Us</h4>
          <ul>
            <li><a href="mailto:support@thepolyglotlab.com">support@thepolyglotlab.com</a></li>
            <li>Lincoln, United Kingdom</li>
          </ul>
          <button className="foot-link-cont-btn" onClick={onContactClick}>
            Let’s Build Together
          </button>
          <div className="social-links">
            <a href="https://www.instagram.com/the_polyglot_lab/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10.25 2.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25ZM12 7.5a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 7.5Z"/></svg></a>
            <a href="https://www.tiktok.com/@the.polyglot.lab" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon"><path fill="currentColor" d="M12.9 2h3.1c.2 1.6 1 3 2.2 4 .9.7 2 .9 3.1 1v3.2c-1.6 0-3.1-.5-4.5-1.3v6.9c0 3.8-3.1 6.8-6.9 6.8S3 19.6 3 15.8s3.1-6.8 6.9-6.8c.4 0 .8 0 1.2.1v3.3c-.4-.2-.8-.2-1.2-.2-2 0-3.6 1.6-3.6 3.6S8 19.4 10 19.4s3.6-1.6 3.6-3.6V2Z"/></svg></a>
            <a href="https://www.linkedin.com/company/the-polyglot-lab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.6 4.8 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V24h-4V8z"/></svg></a>
            <a href="https://github.com/The-Polyglot-Lab" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon"><path fill="currentColor" d="M12 .5C5.7.5.7 5.6.7 11.9c0 5 3.2 9.3 7.6 10.8.6.1.8-.3.8-.6v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.8.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.2 1.8-.4 2.7-.4.9 0 1.8.1 2.7.4 2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.6 5.4-5.1 5.7.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6 4.4-1.5 7.6-5.8 7.6-10.8C23.3 5.6 18.3.5 12 .5Z"/></svg></a>
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      <div className="footer-legal-links">
          <button className="privacy-link-btn" onClick={onPrivacyClick}>
            Privacy Policy
          </button>
        </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} The Polyglot Lab LTD · All Rights Reserved · Human first. Coffee powered. AI assisted.
        </span>
        <p className="ico-registration">
          <strong>ICO Registered</strong> – The Polyglot Lab Ltd is registered with the Information Commissioner's Office (ICO) under the Data Protection Act 2018.
        </p>
      </div>
    </div>
  </footer>
  );
});

export default Footer;