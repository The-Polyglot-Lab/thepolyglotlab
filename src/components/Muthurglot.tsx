import React, { useEffect, useState } from 'react';
import '../styles/Muthurglot.css';

const TYPED_TEXT = 'Voice Chat';

const Muthurglot = () => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    const interval = setInterval(() => {
      if (i < TYPED_TEXT.length) {
        setDisplayed(TYPED_TEXT.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="muthurglot">
        {/*<span className="balloon-icon">:)</span>*/}
        <div className="orb-glow" />
        <div className="muthurglot-button">
            <h3 className="terminal-typed">
              {displayed}
              {done && <span className="terminal-cursor">?</span>}
            </h3>
        </div>
    </div>
  );
};

export default Muthurglot;