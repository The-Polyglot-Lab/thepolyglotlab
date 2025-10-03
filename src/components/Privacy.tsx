import React from "react";
import Modal from "./Modal";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="privacy-content">
        <p className="privacy-intro">
          At The Polyglot Lab, we respect your privacy. We only collect the minimum 
          amount of data necessary to provide our services. We never sell your data.
        </p>
        
        <section className="privacy-section">
          <h3 className="privacy-heading">What We Collect</h3>
          <ul className="privacy-list">
            <li>Basic contact details when you reach out to us</li>
            <li>Analytics data (anonymous) to improve our site</li>
            <li>Billing info if you purchase services</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-heading">How We Use Your Data</h3>
          <ul className="privacy-list">
            <li>To provide and improve our services</li>
            <li>To communicate with you about your projects</li>
            <li>To process payments and maintain records</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-heading">Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect 
            your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-heading">Your Rights</h3>
          <p>
            Under the Data Protection Act 2018 and UK GDPR, you have the right to:
          </p>
          <ul className="privacy-list">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>
          <p>
            You can exercise these rights by contacting us at{" "}
            <a href="mailto:support@thepolyglotlab.com" className="privacy-link">
              support@thepolyglotlab.com
            </a>
          </p>
        </section>

        <section className="privacy-section">
          <h3 className="privacy-heading">ICO Registration</h3>
          <p>
            The Polyglot Lab Ltd is registered with the Information Commissioner's Office (ICO) 
            under the Data Protection Act 2018. Our registration ensures we meet the highest 
            standards of data protection and privacy compliance.
          </p>
        </section>

        <div className="privacy-footer">
          <p className="privacy-updated">
            Last updated: {new Date().toLocaleDateString('en-GB', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default PrivacyModal;