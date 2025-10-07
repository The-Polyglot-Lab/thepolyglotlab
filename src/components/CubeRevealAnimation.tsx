import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import Logo from '../assets/enlogonobg.png';
import '../styles/CubeRevealAnimation.css';

interface CubeRevealAnimationProps {
  isOpen: boolean;
  onAnimationComplete: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

const CubeRevealAnimation: React.FC<CubeRevealAnimationProps> = ({
  isOpen,
  onAnimationComplete,
  onClose,
  children
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [gridSize, setGridSize] = useState({ rows: 15, cols: 15 });
  const [playLaserSound] = useSound('/8bit_laser_1.wav', { volume: 0.2 });

  // Calculate responsive grid size
  useEffect(() => {
    const calculateGridSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Base grid size, adjust based on screen size
      let rows = 15;
      let cols = 15;
      
      if (width < 768) {
        rows = 12;
        cols = 12;
      } else if (width < 1024) {
        rows = 14;
        cols = 14;
      }
      
      setGridSize({ rows, cols });
    };

    calculateGridSize();
    window.addEventListener('resize', calculateGridSize);
    return () => window.removeEventListener('resize', calculateGridSize);
  }, []);

  // Generate grid positions
  const generateGrid = () => {
    const grid = [];
    for (let row = 0; row < gridSize.rows; row++) {
      for (let col = 0; col < gridSize.cols; col++) {
        grid.push({ row, col, id: `${row}-${col}` });
      }
    }
    return grid;
  };

  const grid = generateGrid();

  // Animation variants for cubes
  const cubeVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotateX: 0,
      rotateY: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: [0, 180, 360],
      rotateY: [0, 90, 180, 270, 360],
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        scale: {
          type: "spring" as const,
          stiffness: 200,
          damping: 15
        }
      }
    },
    fuse: {
      scale: 0.1,
      opacity: 0.3,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  };

  // Menu content animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Handle animation sequence
  useEffect(() => {
    if (isOpen) {
      setShowMenu(false);
      // Play laser sound when menu opens
      playLaserSound();
      // Show menu after cubes start fusing
      const timer = setTimeout(() => {
        setShowMenu(true);
        onAnimationComplete();
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setShowMenu(false);
    }
  }, [isOpen, onAnimationComplete, playLaserSound]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cube-reveal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Cube Grid */}
          <div className="cube-grid">
            {grid.map(({ id, row, col }) => (
              <motion.div
                key={id}
                className="cube"
                variants={cubeVariants}
                initial="hidden"
                animate={showMenu ? "fuse" : "visible"}
                exit="hidden"
                style={{
                  gridRow: row + 1,
                  gridColumn: col + 1,
                  animationDelay: `${Math.random() * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Menu Content */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                className="menu-content"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Close Button */}
                <motion.button
                  className="close-button"
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <span className="close-line"></span>
                  <span className="close-line"></span>
                </motion.button>

                {/* Left side - Navigation Links */}
                <motion.div
                  className="menu-left"
                  variants={menuVariants}
                >
                  <div className="menu-navigation">
                    {React.Children.map(children, (child, index) => (
                      <motion.div
                        key={index}
                        variants={menuItemVariants}
                        className="menu-item-wrapper"
                      >
                        {child}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right side - Contact Details */}
                <motion.div
                  className="menu-right"
                  variants={menuVariants}
                >
                  <div className="menu-logo">
                    <img src={Logo} alt="The Polyglot Lab" className="menu-logo-img" />
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-title">Connect With Us</h3>
                    <div className="contact-info">
                      <p className="contact-item">
                        <strong>Email:</strong><br />
                        <a href="mailto:support@thepolyglotlab.com">support@thepolyglotlab.com</a>
                      </p>
                      <p className="contact-item">
                        <strong>Location:</strong><br />
                        Lincoln, United Kingdom
                      </p>
                      <p className="contact-item">
                        <strong>Mission:</strong><br />
                        We make software speak your language
                      </p>
                    </div>
                    <div className="social-links">
                      <a href="https://www.instagram.com/the_polyglot_lab/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon">
                          <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10.25 2.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25ZM12 7.5a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 7.5Z"/>
                        </svg>
                      </a>
                      <a href="https://www.tiktok.com/@the.polyglot.lab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon">
                          <path fill="currentColor" d="M12.9 2h3.1c.2 1.6 1 3 2.2 4 .9.7 2 .9 3.1 1v3.2c-1.6 0-3.1-.5-4.5-1.3v6.9c0 3.8-3.1 6.8-6.9 6.8S3 19.6 3 15.8s3.1-6.8 6.9-6.8c.4 0 .8 0 1.2.1v3.3c-.4-.2-.8-.2-1.2-.2-2 0-3.6 1.6-3.6 3.6S8 19.4 10 19.4s3.6-1.6 3.6-3.6V2Z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/the-polyglot-lab/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon">
                          <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.6 4.8 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V24h-4V8z"/>
                        </svg>
                      </a>
                      <a href="https://github.com/The-Polyglot-Lab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-icon">
                          <path fill="currentColor" d="M12 .5C5.7.5.7 5.6.7 11.9c0 5 3.2 9.3 7.6 10.8.6.1.8-.3.8-.6v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.8.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.2 1.8-.4 2.7-.4.9 0 1.8.1 2.7.4 2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.6 5.4-5.1 5.7.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6 4.4-1.5 7.6-5.8 7.6-10.8C23.3 5.6 18.3.5 12 .5Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CubeRevealAnimation;
