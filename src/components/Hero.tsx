import React from 'react';
import '../styles/Hero.css';

interface HeroProps {
  productsRef: React.RefObject<HTMLDivElement>;
  ourStoryRef: React.RefObject<HTMLDivElement>;
}

export default function Hero({ productsRef, ourStoryRef }: HeroProps) {
  const handleScrollTo = (ref: React.RefObject<HTMLElement | HTMLDivElement>, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="hero-card">
        <h1>“Time is precious. We build tools that help you save it.”</h1>
        <p><b>Clean. Fast. Thoughtful. Built so you and your users stop wasting hours and start gaining momentum.</b></p>
        <p className="statement">Smart tools. No fluff. Real outcomes.</p>
        <div className="hero-buttons">
          <a href="#products" onClick={(e) => handleScrollTo(productsRef, e)}>View Products</a>
          <a href="#ourstory" onClick={(e) => handleScrollTo(ourStoryRef, e)}>Read Our Story</a>
        </div>
      </div>
  );
}