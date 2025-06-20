import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
      <div className="hero-card">
        <h1>“We don’t ship features. We ship solutions.”</h1>
        <p><b>Indie-built tools that solve real pain for modern teams.</b></p>
        <p className="statement">Smart tools. No fluff. Real outcomes.</p>
        <div className="hero-buttons">
          <a href="/products">View Products</a>
          <a href="/story">Read Our Story</a>
        </div>
      </div>
  );
}