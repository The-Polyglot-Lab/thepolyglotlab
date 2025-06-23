import React from "react";
import aws from "../assets/icons/aws.png";
import slack from "../assets/icons/slack.png";
import postgres from "../assets/icons/postgres.png";
import react from "../assets/icons/react.png";
import typescript from "../assets/icons/typescript.png";
import openai from "../assets/icons/openai.png";
import tailwind from "../assets/icons/tailwindcss.png";
import stripe from "../assets/icons/stripe.png";
import marketing from "../assets/icons/megaphone.png"; 
import git from '../assets/icons/git.png';
import go from '../assets/icons/go.png';
import python from '../assets/icons/python.png';
import '../styles/Technology.css';

const stack = [
  { name: "AWS", icon: aws },
  { name: "Slack API", icon: slack },
  { name: "PostgreSQL", icon: postgres },
  { name: "React", icon: react },
  { name: "TypeScript", icon: typescript },
  { name: "OpenAI API", icon: openai },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Stripe", icon: stripe },
  { name: "Git", icon: git },
  { name: "Go", icon: go },
  { name: "Python", icon: python },
  { name: "Marketing Automation", icon: marketing },
];

export default function TechStackShowcase() {
  return (
    <section className="tech-stack-section">
      <div className="tech-card">
        <h2 className="section-heading">Built With Purpose</h2>
        <p className="tech-description">
            Every tool and service we use is selected for performance, privacy, and scalability — not buzzwords.
            From secure cloud infra to clean UI, and yes, killer marketing integrations too.
        </p>
        <div className="tech-grid">
            {stack.map((item, index) => (
            <div key={index} className="tech-item">
                <img src={item.icon} alt={item.name} className="tech-icon" />
                <span>{item.name}</span>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}