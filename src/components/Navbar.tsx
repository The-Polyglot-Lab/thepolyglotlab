import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import Logo from '../assets/enlogonobg.png';
import CubeRevealAnimation from './CubeRevealAnimation';

function Navbar({ ourStoryRef, testimonialsRef, productsRef, footerRef, onSectionChange }:  {
  ourStoryRef: React.RefObject<HTMLDivElement>,
  testimonialsRef: React.RefObject<HTMLElement>,
  productsRef: React.RefObject<HTMLDivElement>,
  footerRef: React.RefObject<HTMLDivElement>,
  onSectionChange: (section: 'main' | 'about' | 'services') => void
}){
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [isCubeAnimationComplete, setIsCubeAnimationComplete] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 10);
        // Show logo after scrolling down a bit
        if (window.scrollY > 50) {
          setShowLogo(true);
        } else {
          setShowLogo(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC key listener to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsCubeAnimationComplete(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleScrollTo = (ref: React.RefObject<HTMLElement | HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    setIsCubeAnimationComplete(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsCubeAnimationComplete(false);
    }
  };

  const handleCubeAnimationComplete = () => {
    setIsCubeAnimationComplete(true);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCubeAnimationComplete(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Circuit Animation layered behind logo (left side) */}
        <div className={`circuit-overlay ${showLogo ? 'hidden' : ''}`}>
          <div className="circuit-container">
            <svg className="circuit-svg" viewBox="0 0 230 120" preserveAspectRatio="xMidYMid slice">
              {/* Horizontal tracks inspired by banner */}
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* top track with joints */}
                <path className="circuit-path circuit-path-1" pathLength="100" d="M-40,12 H130 l12,-12 h20 m-20,12 l12,12 H200" />
                {/* second track with node detour */}
                <path className="circuit-path circuit-path-2" pathLength="100" d="M-40,28 H90 l10,-10 h24 l10,10 v6 H200" />
                {/* middle thick track */}
                <path className="circuit-path circuit-path-3" pathLength="100" d="M-40,44 H120 l14,-14 h26 M150,30 l20,20 H200" />
                {/* lower tracks */}
                <path className="circuit-path circuit-path-4" pathLength="100" d="M-40,55 H70 l14,14 h24 l16,-16 H200" />
                <path className="circuit-path circuit-path-5" pathLength="100" d="M-40,70 H110 l12,-12 h26 L170,78 H200" />
              </g>
            </svg>
          </div>
        </div>

        {/* Logo and Brand Text on the left */}
        <a 
          href="#" 
          className="logo-brand"
          onClick={(e) => {
            e.preventDefault();
            onSectionChange('main');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* Logo Image */}
          <img
            src={Logo}
            alt="TPL Logo"
            className={`logo-img ${showLogo ? 'visible' : 'hidden'}`}
          />
        </a>
        {/* Desktop Nav links */}
        {/*<div className="nav-buttons desktop-nav">
          <button className="nav-link-btn" onClick={() => handleScrollTo(ourStoryRef)}>About Us</button>
          <button className="nav-link-btn" onClick={() => handleScrollTo(testimonialsRef)}>Services</button>
          <button className="nav-link-btn" onClick={() => handleScrollTo(productsRef)}>Our Products</button>
          <button className="nav-link-btn blog-btn" onClick={() => window.open('https://blog.thepolyglotlab.com/blog/', '_blank')}>Blog</button>
        </div>*/}

        {/* Mobile Hamburger Menu - Always Visible */}
        <motion.button 
          className="hamburger-menu always-visible" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle mobile menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </motion.button>

        {/* Cube Reveal Animation with Menu */}
        <CubeRevealAnimation
          isOpen={isMobileMenuOpen}
          onAnimationComplete={handleCubeAnimationComplete}
          onClose={handleCloseMenu}
        >
          <motion.button 
            className="cyberpunk-nav-link" 
            onClick={() => {
              onSectionChange('main');
              setIsMobileMenuOpen(false);
              setIsCubeAnimationComplete(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ x: 10 }}
            whileTap={{ x: 5 }}
          >
            Home
          </motion.button>
          <motion.button 
            className="cyberpunk-nav-link" 
            onClick={() => {
              onSectionChange('about');
              setIsMobileMenuOpen(false);
              setIsCubeAnimationComplete(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ x: 10 }}
            whileTap={{ x: 5 }}
          >
            About Us
          </motion.button>
          <motion.button 
            className="cyberpunk-nav-link" 
            onClick={() => {
              onSectionChange('services');
              setIsMobileMenuOpen(false);
              setIsCubeAnimationComplete(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ x: 10 }}
            whileTap={{ x: 5 }}
          >
            Services
          </motion.button>
          <motion.button 
            className="cyberpunk-nav-link" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsCubeAnimationComplete(false);
              window.open('https://blog.thepolyglotlab.com/blog/', '_blank');
            }}
            whileHover={{ x: 10 }}
            whileTap={{ x: 5 }}
          >
            Blog
          </motion.button>
          <motion.button 
            className="cyberpunk-nav-link" 
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsCubeAnimationComplete(false);
              window.open('https://consulting.thepolyglotlab.com', '_blank');
            }}
            whileHover={{ x: 10 }}
            whileTap={{ x: 5 }}
          >
            Consultancy Services
          </motion.button>
        </CubeRevealAnimation>
      </div>
    </nav>
  );
}

export default Navbar;