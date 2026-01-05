import React, { useState, useEffect } from "react";
import "../styles/Services.css";

const services = [
    {
      title: "Slack-Native Automations",
      desc: "Custom workflows built directly into your Slack workspace — automate support, reporting, and escalations without leaving chat.",
    },
    {
      title: "Custom AI Workflows",
      desc: "AI-driven processes that remove bottlenecks, from customer interactions to backend intelligence.",
    },
    {
      title: "Data & API Integrations",
      desc: "We connect your systems so they finally talk to each other, eliminating silos and manual work.",
    },
    {
      title: "CRM & DAM Platforms",
      desc: "Custom-built CRM and digital asset management systems designed around your workflows — not the other way around.",
    },
    {
      title: "App Creation (Web & Mobile)",
      desc: "From internal tools like CliClo to client-facing apps, we build lean web & mobile apps tailored to your business needs.",
    },
    {
      title: "Rapid Prototyping & MVP Builds",
      desc: "Launch working prototypes in weeks, not months — validate fast and scale with confidence.",
    },
    {
      title: "ML & Neural Model Training",
      desc: "Leverage your data with custom-trained machine learning models to unlock insights and automation.",
    },
  ];

const pricing = [
    { service: "Website Revamps", price: "from £2,500" },
    { service: "Custom CRM Setup", price: "from £4,000" },
    { service: "Digital Asset Management (DAM)", price: "from £3,500" },
    { service: "Slack-Native Automations", price: "from £499" },
    { service: "AI Workflow Development", price: "from £1,500" },
    { service: "API & Data Integrations", price: "from £1,200" },
    { service: "App Creation (Web & Mobile)", price: "from £3,000" },
    { service: "Rapid Prototyping / MVP Build", price: "from £2,000" },
    { service: "Neural Model Training", price: "custom" },
  ];

const Services: React.FC = () => {
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
    <div className="services-wrapper relative z-20">
      
      {/* Our Services */}
      <section className={`section services ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((s, idx) => (
              <div key={idx} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Matrix */}
      <section className={`section pricing ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            {pricing.map((item, idx) => (
              <div key={idx} className="pricing-card">
                <h3>{item.service}</h3>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section cta ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <h2>Let's Build Together</h2>
          <p>
            Whether you're looking to automate workflows, integrate platforms, or launch AI-driven tools, 
            we'll help you build fast and scale smart.
          </p>
          <a
            href="https://calendly.com/yor-thepolyglotlab/30min-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary cta-button"
          >
            Let's Start your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;