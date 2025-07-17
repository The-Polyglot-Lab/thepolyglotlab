import React, { useEffect, useState } from 'react';

const FLOATING_WIDGET_URL = 'https://games.thepolyglotlab.com';
const POPUP_SOUND_PATH = '/src/assets/popup-8.wav';

const FloatingWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);

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

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          marginBottom: '0.5rem',
          background: 'white',
          color: '#333',
          padding: '0.75rem 1.25rem',
          borderRadius: '18px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          fontSize: '1.1rem',
          fontWeight: 500,
          position: 'relative',
          maxWidth: '220px',
        }}
      >
        Do you wanna play?
        <span
          style={{
            content: "' '",
            position: 'absolute',
            bottom: '-16px',
            right: '24px',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '16px solid white',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.10))',
          }}
        />
      </div>
      <a
        href={FLOATING_WIDGET_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '3rem',
          textDecoration: 'none',
          cursor: 'pointer',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
          transition: 'transform 0.2s',
        }}
        aria-label="Play games at The Polyglot Lab"
      >
        <span role="img" aria-label="Alien Monster">👾</span>
      </a>
    </div>
  );
};

export default FloatingWidget; 