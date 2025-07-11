import React from 'react';
import '../styles/Whatwedo.css';

const Whatwedo = () => {
    return (
        <div className="what-we-do-section">
            <h2 className="section-heading">What We Do</h2>
            <p className="section-subheading">
                We build tools that solve real problems — fast, lean, and tailored to your workflow.
            </p>
            <div className="service-cards">
                <div className="service-card">
                <h3>🚀 MVPs That Ship</h3>
                <p>
                    Got an idea? We help you scope, build, and deploy your MVP in weeks — not months. From SaaS to internal tools, we cut through noise and get your product live.
                </p>
                </div>
                <div className="service-card">
                <h3>🔧 Automation & Internal Tools</h3>
                <p>
                    We turn messy processes into smooth flows. Dashboards, Slack bots, admin panels — whatever saves time and keeps your team focused, we’ll build it.
                </p>
                </div>
                <div className="service-card">
                <h3>🌐 High-Impact Websites</h3>
                <p>
                    We design and build fast, secure, SEO-friendly websites that don’t just look good — they convert. Ideal for product launches, portfolios, and early traction.
                </p>
                </div>
                <div className="service-card">
                <h3>💡 AI & Automation Playbooks</h3>
                <p>
                    We help you figure out where AI actually fits. From Slack bots to internal copilots, we map out what to automate — and how — without drowning in hype.
                </p>
                </div>
            </div>
        </div>
    );
}

export default Whatwedo;