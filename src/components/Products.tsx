import React from 'react';
import '../styles/Products.css';
import escalation_ninja_demo from '../assets/escalation_ninja_demo.gif';

const products = [
  {
    name: "Escalation-Ninja-Pro",
    tagline: "Slack escalations, handled before you even notice them",
    bullets: [
      "Creates dedicated Slack channels from a simple /ninjaescal command",
      "Parses Jira tickets & auto-invites the right team members",
      "Sends smart summaries, links, and keeps everyone in sync (Soon)",
    ],
    gif: escalation_ninja_demo,
    cta: {
      label: "Join Beta",
      link: "https://escalation-ninja.com/"
    }
  },
  // Add more products here
];

function Products() {
    return(
        <div>
            <h1>Our Products</h1>
            {
                products.map((product, index) =>
                <div key={index} className="product-card" >
                    <h2>{product.name}</h2>
                    <p className="tagline">{product.tagline}</p>
                    <ul className="bullet-list">
                        {product.bullets.map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                        ))}
                    </ul>
                    {product.gif && (
                        <img src={product.gif} alt={`${product.name} demo`} className="product-gif" />
                    )}
                    {product.cta && (
                        <div className="product-button-wrapper">
                            <a href={product.cta.link} className="product-button" target="_blank" rel="noopener noreferrer" >
                                {product.cta.label}
                            </a>
                        </div>
                    )}
                </div>
            )
            }
        </div>
    );
}

export default Products;