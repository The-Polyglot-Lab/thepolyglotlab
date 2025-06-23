import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/ThePolyglotLabLogo_compressed.jpg';

function Navbar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#top" className="logo-brand">
          <img src={Logo} alt="TPL Logo" className="logo-img" />
          <span className="logo-text">The Polyglot Lab</span>
        </a>
        {/* Other nav buttons go here */}
      </div>
     </nav>
    );
}

export default Navbar;