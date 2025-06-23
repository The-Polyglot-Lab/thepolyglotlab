import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/ThePolyglotLabLogo_compressed.jpg';

function Navbar({ ourStoryRef, testimonialsRef, productsRef, footerRef }: {
  ourStoryRef: React.RefObject<HTMLDivElement>,
  testimonialsRef: React.RefObject<HTMLElement>,
  productsRef: React.RefObject<HTMLDivElement>,
  footerRef: React.RefObject<HTMLDivElement>
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
        <a href="#top" className="logo-brand">
          <img src={Logo} alt="TPL Logo" className="logo-img" />
          <span className="logo-text">The Polyglot Lab</span>
        </a>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button className="nav-link-btn" onClick={() => handleScrollTo(ourStoryRef)}>About Us</button>
          <button className="nav-link-btn" onClick={() => handleScrollTo(testimonialsRef)}>Success Stories</button>
          <button className="nav-link-btn" onClick={() => handleScrollTo(productsRef)}>Our Products</button>
          <button className="nav-link-btn" onClick={() => handleScrollTo(footerRef)}>Contact Us</button>
        </div>
      </div>
     </nav>
    );
}

export default Navbar;