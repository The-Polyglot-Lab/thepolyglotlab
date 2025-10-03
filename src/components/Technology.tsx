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
        <h2 className="section-heading">Our Stack</h2>
        <p className="tech-description">
            We use tools that scale — fast, secure, and battle-tested across real-world use cases.
        </p>
        <div className="tech-grid">
            {stack.map((item, index) => (
            <div key={index} className="tech-item-icons">
                <img src={item.icon} alt={item.name} className="tech-icon" />
                <span>{item.name}</span>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}