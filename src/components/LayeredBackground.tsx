import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import enlogonobg from '../assets/enlogonobg.png';
import '../styles/LayeredBackground.css';

gsap.registerPlugin(ScrollTrigger);

type ActiveSection = 'main' | 'about' | 'services';

interface LayeredBackgroundProps {
  activeSection?: ActiveSection;
}

const LayeredBackground: React.FC<LayeredBackgroundProps> = ({ activeSection = 'main' }) => {
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const logoTextRef = useRef<HTMLDivElement | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);
  const logoRef = useRef<HTMLHeadingElement | null>(null);
  const statementRef = useRef<HTMLParagraphElement | null>(null);
  
  // State management
  const [isEngraving, setIsEngraving] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState<string>('THE\nPOLYGLOT\nLAB');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isWatermark, setIsWatermark] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [showTitle, setShowTitle] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<ActiveSection>('main');
  const isFirstRenderRef = useRef(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Get base title based on active section
  const getBaseTitle = (section: ActiveSection): string => {
    switch (section) {
      case 'main':
        return 'THE\nPOLYGLOT\nLAB';
      case 'about':
        return 'ABOUT\nUS';
      case 'services':
        return 'OUR\nSERVICES';
      default:
        return 'THE\nPOLYGLOT\nLAB';
    }
  };

  // Get title based on current section and active route
  const getCurrentTitle = (): string => {
    const baseTitle = getBaseTitle(currentRoute);
    
    if (currentRoute === 'main') {
      if (currentSection === 'featured' || currentSection === 'capabilities') {
        return 'OUR\nWORK';
      }
      return baseTitle;
    } else if (currentRoute === 'about') {
      if (currentSection === 'technology') {
        return 'OUR\nTECH';
      }
      return baseTitle;
    }
    
    return baseTitle;
  };

  // Animate title change with proper exit/enter animations
  const animateTitleChange = (newTitle: string, isRouteChange: boolean = false) => {
    if (isAnimating || displayedTitle === newTitle) return;
    
    setIsAnimating(true);
    
    // Phase 1: Exit animation (laser-erase)
    if (logoRef.current) {
      logoRef.current.classList.add('laser-erase');
      
      setTimeout(() => {
        // Phase 2: Change title
        setDisplayedTitle(newTitle);
        setAnimationKey(prev => prev + 1);
        
        // Phase 3: Enter animation based on route
        setTimeout(() => {
          if (logoRef.current) {
            logoRef.current.classList.remove('laser-erase');
            
            if (isRouteChange) {
              // Route change animations
              if (currentRoute === 'main') {
                // Neon lighting up animation for Home
                logoRef.current.classList.add('laser-engrave');
                setIsEngraving(true);
              } else {
                // Metal sweep animation for About and Services
                const randomSweep = Math.random() > 0.5 ? 'metal-sweep-left' : 'metal-sweep-right';
                logoRef.current.classList.add(randomSweep);
                
                setTimeout(() => {
                  if (logoRef.current) {
                    logoRef.current.classList.remove('metal-sweep-left', 'metal-sweep-right');
                    logoRef.current.classList.add('laser-engrave');
                  }
                }, 1000);
              }
            } else {
              // Section change animation
              logoRef.current.classList.add('laser-engrave');
            }
            
            setTimeout(() => {
              if (logoRef.current) {
                logoRef.current.classList.remove('laser-engrave');
              }
              setIsEngraving(false);
              setIsAnimating(false);
            }, 700);
          }
        }, 50);
      }, 300);
    }
  };

  // Handle route changes
  useEffect(() => {
    if (activeSection !== currentRoute) {
      setCurrentRoute(activeSection);
      const newTitle = getBaseTitle(activeSection);
      setDisplayedTitle(newTitle);
      setAnimationKey(prev => prev + 1);
      
      // Trigger route change animation after a short delay
      setTimeout(() => {
        animateTitleChange(newTitle, true);
      }, 100);
    }
  }, [activeSection]);

  // Update title when section changes within the same route
  useEffect(() => {
    const newTitle = getCurrentTitle();
    if (newTitle !== displayedTitle && activeSection === currentRoute) {
      animateTitleChange(newTitle, false);
    }
  }, [currentSection, displayedTitle, activeSection, currentRoute]);

  // Set up intersection observer for section detection
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Only observe sections relevant to the current route
    let sectionsToObserve: string[] = [];
    if (currentRoute === 'main') {
      sectionsToObserve = ['featured', 'capabilities', 'why'];
    } else if (currentRoute === 'about') {
      sectionsToObserve = ['technology'];
    }
    // Services route doesn't need section observation as title stays consistent

    const elements = sectionsToObserve.map(id => document.getElementById(id)).filter(Boolean);
    
    if (elements.length === 0) {
      setCurrentSection('');
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting && entry.intersectionRatio > 0.15)
          .map(entry => entry.target.id);
        
        if (visibleSections.length > 0) {
          setCurrentSection(visibleSections[0]);
        } else {
          setCurrentSection('');
        }
      },
      { root: null, threshold: [0, 0.15, 0.5, 1] }
    );

    elements.forEach(el => {
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentRoute]);

  // Initial mount animation
  useEffect(() => {
    if (isFirstRenderRef.current) {
      setTimeout(() => {
        if (logoRef.current) {
          if (currentRoute === 'main') {
            // Neon lighting up animation for Home
            logoRef.current.classList.add('laser-engrave');
            setIsEngraving(true);
            
            setTimeout(() => {
              if (logoRef.current) {
                logoRef.current.classList.remove('laser-engrave');
              }
              setIsEngraving(false);
              isFirstRenderRef.current = false;
            }, 700);
          } else {
            // Metal sweep animation for About and Services
            const randomSweep = Math.random() > 0.5 ? 'metal-sweep-left' : 'metal-sweep-right';
            logoRef.current.classList.add(randomSweep);
            
            setTimeout(() => {
              if (logoRef.current) {
                logoRef.current.classList.remove('metal-sweep-left', 'metal-sweep-right');
              }
              isFirstRenderRef.current = false;
            }, 2000);
          }
        }
      }, 100);
    }
  }, [currentRoute]);

  // GSAP scroll effects for watermark and scaling
  useEffect(() => {
    if (!logoContainerRef.current || !logoTextRef.current || !logoImageRef.current || !logoRef.current || !statementRef.current) return;

    const ctx = gsap.context(() => {
      const logoContainerEl = logoContainerRef.current!;
      const logoTextEl = logoTextRef.current!;
      const logoImageEl = logoImageRef.current!;
      const logoEl = logoRef.current!;
      const statementEl = statementRef.current!;

      // Page load animations
      const pageLoadTl = gsap.timeline();
      pageLoadTl.fromTo(logoImageEl, 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );

      // Scroll-triggered watermark effect
      if (!document.body) return;
      
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "600px top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          setIsScrolling(true);
          setIsAtTop(false);
          
          // Scale from 1 to 0.8
          const targetScale = 1 - (progress * 0.2);
          gsap.set(logoTextEl, { scale: targetScale });
          gsap.set(logoEl, { scale: targetScale });
          
          // Hide logo image when scrolling
          if (progress > 0.1) {
            logoImageEl.classList.add('perma-hidden');
            gsap.set(logoImageEl, { opacity: 0, scale: 0 });
          } else {
            logoImageEl.classList.remove('perma-hidden');
            gsap.set(logoImageEl, { opacity: 1, scale: 1 });
          }
          
          // Add watermark effect
          if (progress > 0.3) {
            setIsWatermark(true);
            logoEl.classList.add('watermark');
            statementEl.classList.add('watermark');
          } else {
            setIsWatermark(false);
            logoEl.classList.remove('watermark');
            statementEl.classList.remove('watermark');
          }
        },
        onLeaveBack: () => {
          setIsScrolling(false);
          setIsWatermark(false);
          setIsAtTop(true);
          logoEl.classList.remove('watermark');
          statementEl.classList.remove('watermark');
          
          if (window.scrollY < 50) {
            logoImageEl.classList.remove('perma-hidden');
            gsap.set(logoImageEl, { opacity: 1, scale: 1 });
            
            // Show correct title with neon effect when back at top
            const baseTitle = getBaseTitle(currentRoute);
            if (displayedTitle !== baseTitle) {
              setDisplayedTitle(baseTitle);
              setAnimationKey(prev => prev + 1);
              
              // Trigger neon animation for top position
              setTimeout(() => {
                if (logoRef.current) {
                  logoRef.current.classList.add('laser-engrave');
                  setIsEngraving(true);
                  
                  setTimeout(() => {
                    if (logoRef.current) {
                      logoRef.current.classList.remove('laser-engrave');
                    }
                    setIsEngraving(false);
                  }, 700);
                }
              }, 100);
            }
          }
          
          gsap.set(logoTextEl, { scale: 1 });
          gsap.set(logoEl, { scale: 1 });
        }
      });

      // Hero to background transition
      if (!document.body) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=100vh",
          scrub: 2,
          pin: true,
          pinSpacing: false,
        }
      });

      tl.eventCallback('onComplete', () => {
        gsap.set(logoContainerEl, {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        });
      });

    }, [logoContainerRef, logoTextRef, logoImageRef, logoRef, statementRef]);

    return () => ctx.revert();
  }, [currentRoute, displayedTitle]);

  // Additional scroll listener for manual scroll to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50 && isAtTop === false) {
        setIsAtTop(true);
        setIsWatermark(false);
        
        // Show correct title with neon effect when back at top
        const baseTitle = getBaseTitle(currentRoute);
        if (displayedTitle !== baseTitle) {
          setDisplayedTitle(baseTitle);
          setAnimationKey(prev => prev + 1);
          
          // Trigger neon animation for top position
          setTimeout(() => {
            if (logoRef.current) {
              logoRef.current.classList.add('laser-engrave');
              setIsEngraving(true);
              
              setTimeout(() => {
                if (logoRef.current) {
                  logoRef.current.classList.remove('laser-engrave');
                }
                setIsEngraving(false);
              }, 700);
            }
          }, 100);
        }
      } else if (window.scrollY >= 50 && isAtTop === true) {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute, displayedTitle, isAtTop]);

  // Title component with animations
  const TitleComponent = ({ title }: { title: string }) => {
    return (
      <h1
        ref={logoRef}
        className={`hero-title ${isWatermark ? 'watermark' : ''} ${isEngraving ? 'char-engraving' : ''}`}
      >
        {title}
      </h1>
    );
  };

  return (
    <div 
      ref={logoContainerRef}
      className="logo-container"
    >
      <div className="logo-content">
        {/* Logo Image - Small, disappears on scroll */}
        <motion.div
          ref={logoImageRef}
          className="logo-image-wrapper"
          initial={{ opacity: 1, scale: 1 }}
        >
          <img 
            src={enlogonobg} 
            alt="The Polyglot Lab Logo" 
            className="main-logo"
          />
        </motion.div>
        
        {/* Logo Text - MASSIVE, becomes background watermark */}
        <motion.div
          ref={logoTextRef}
          className="logo-text-wrapper"
          initial={{ opacity: 1, scale: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={animationKey}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TitleComponent key={animationKey} title={displayedTitle} />
            </motion.div>
          </AnimatePresence>
          <p 
            ref={statementRef}
            className={`hero-statement ${isWatermark ? 'watermark' : ''}`}
          >
            We make software speak the same language: <strong>YOURS</strong>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LayeredBackground;
