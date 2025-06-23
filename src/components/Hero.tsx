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
        <h1>“We don’t ship features. We ship solutions.”</h1>
        <p><b>Indie-built tools that solve real pain for modern teams.</b></p>
        <p className="statement">Smart tools. No fluff. Real outcomes.</p>
        <div className="hero-buttons">
          <a href="#products" onClick={(e) => handleScrollTo(productsRef, e)}>View Products</a>
          <a href="#ourstory" onClick={(e) => handleScrollTo(ourStoryRef, e)}>Read Our Story</a>
        </div>
      </div>
  );
}