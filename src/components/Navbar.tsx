import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/ThePolyglotLabLogo_compressed.jpg';

function Navbar({ ourStoryRef, testimonialsRef, productsRef, footerRef, onOpenContact }:  {
  ourStoryRef: React.RefObject<HTMLDivElement>,
  testimonialsRef: React.RefObject<HTMLElement>,
  productsRef: React.RefObject<HTMLDivElement>,
  footerRef: React.RefObject<HTMLDivElement>,
  onOpenContact: () => void
}){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (ref: React.RefObject<HTMLElement | HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo and Brand Text on the left */}
        <a href="#top" className="logo-brand">
          <img src={Logo} alt="TPL Logo" className="logo-img" />
          <span className="logo-text">The Polyglot Lab</span>
        </a>
        {/* Nav links and Contact Us on the right */}
        <div className="nav-buttons">
          <button className="nav-link-btn" onClick={() => handleScrollTo(ourStoryRef)}>About Us</button>
          <button className="nav-link-btn" onClick={() => handleScrollTo(testimonialsRef)}>Success Stories</button>
          <button className="nav-link-btn" onClick={() => handleScrollTo(productsRef)}>Our Products</button>
          <button className="nav-link-cont-btn" onClick={onOpenContact}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;