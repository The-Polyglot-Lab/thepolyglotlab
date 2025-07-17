import React, { useEffect, useState } from 'react';

const FLOATING_WIDGET_URL = 'https://games.thepolyglotlab.com';
const POPUP_SOUND_PATH = '/src/assets/popup-8.wav';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 600px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};

const FloatingWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const audio = new Audio(POPUP_SOUND_PATH);
      audio.play();
    }
  }, [visible]);

  if (!visible) return null;

  // Responsive styles
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: isMobile ? '16px' : '32px',
    right: isMobile ? '16px' : '32px',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    pointerEvents: 'none', // Only the link is clickable
  };

  const bubbleStyle: React.CSSProperties = {
    marginBottom: isMobile ? '0.25rem' : '0.5rem',
    background: 'white',
    color: '#333',
    padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1.25rem',
    borderRadius: '18px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
    fontSize: isMobile ? '0.95rem' : '1.1rem',
    fontWeight: 500,
    position: 'relative',
    maxWidth: isMobile ? '140px' : '220px',
    pointerEvents: 'auto',
    overflow: 'hidden',
  };

  const tailStyle: React.CSSProperties = {
    content: "' '",
    position: 'absolute',
    bottom: '-12px',
    right: isMobile ? '16px' : '24px',
    width: 0,
    height: 0,
    borderLeft: isMobile ? '7px solid transparent' : '10px solid transparent',
    borderRight: isMobile ? '7px solid transparent' : '10px solid transparent',
    borderTop: isMobile ? '12px solid white' : '16px solid white',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.10))',
  };

  const emojiLinkStyle: React.CSSProperties = {
    fontSize: isMobile ? '2.1rem' : '3rem',
    textDecoration: 'none',
    cursor: 'pointer',
    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
    transition: 'transform 0.2s',
    pointerEvents: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={bubbleStyle}>
        Do you wanna play?
        <span style={tailStyle} />
      </div>
      <a
        href={FLOATING_WIDGET_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={emojiLinkStyle}
        aria-label="Play games at The Polyglot Lab"
      >
        <span role="img" aria-label="Alien Monster">👾</span>
      </a>
    </div>
  );
};

export default FloatingWidget; 