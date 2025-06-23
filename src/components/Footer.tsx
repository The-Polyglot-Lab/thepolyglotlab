import React, { forwardRef } from "react";
import tplLogo from "../assets/ThePolyglotLabLogo_compressed.jpg"; 
import '../styles/Footer.css';

const Footer = forwardRef<HTMLDivElement>((props, ref) => (
  <div className="footer-wrapper" ref={ref}>
    <div className="footer-inner">
      <div className="footer-content">
        {/* Left section: logo + description */}
        <div className="footer-column logo-column">
          <img src={tplLogo} alt="The Polyglot Lab" className="footer-logo" />
          <p className="footer-description">
            We build tools that solve real problems with no BS.
            Small team, focused execution, real results.
          </p>
        </div>

        {/* Middle/right section: links 
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#stack">Tech Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        */}

        <div className="footer-column">
          <h4>What We Do</h4>
          <ul>
            <li>Slack Automation</li>
            <li>Data Integrations</li>
            <li>Technical Prototyping</li>
            <li>AI Workflows</li>
            <li>AI Integrations</li>
            <li>ML/Neural Net Model Training</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:support@thepolyglotlab.com">support@thepolyglotlab.com</a></li>
            <li>Lincoln, United Kingdom</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} The Polyglot Lab LTD. All rights reserved.</span>
      </div>
    </div>
  </div>
));

export default Footer;