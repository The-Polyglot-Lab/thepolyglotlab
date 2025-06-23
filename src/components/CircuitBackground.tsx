import React from 'react';
import '../styles/CircuitBackground.css';

const beginTimes = [
  '2.1s', '3.7s', '2.8s', '4.2s', '2.5s', '3.3s', '4.7s', '2.9s', '3.5s', '4.1s', '2.3s', '3.9s', '4.5s', '2.7s'
];

const CircuitBackground = () => (
  <svg className="circuit-bg" width="100%" height="100%" viewBox="0 0 1440 900" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
  }}>
    {/* Main animated circuits with more green and casual patterns */}
    <path>
      <animate attributeName="d" dur="6s" repeatCount="indefinite" begin={beginTimes[0]}
        values="M 100 50 H 400 V 150 H 700 V 50 H 1340;M 120 60 H 420 V 140 H 690 V 60 H 1320;M 100 50 H 400 V 150 H 700 V 50 H 1340" />
    </path>
    <path>
      <animate attributeName="d" dur="7.2s" repeatCount="indefinite" begin={beginTimes[1]}
        values="M 300 80 V 200 H 600 V 80;M 320 100 V 220 H 620 V 100;M 300 80 V 200 H 600 V 80" />
    </path>
    <path>
      <animate attributeName="d" dur="8.1s" repeatCount="indefinite" begin={beginTimes[2]}
        values="M 200 850 H 600 V 700 H 1200 V 850 H 1340;M 210 860 H 610 V 710 H 1210 V 860 H 1330;M 200 850 H 600 V 700 H 1200 V 850 H 1340" />
    </path>
    <path>
      <animate attributeName="d" dur="6.7s" repeatCount="indefinite" begin={beginTimes[3]}
        values="M 400 820 V 650 H 900 V 820;M 410 830 V 660 H 910 V 830;M 400 820 V 650 H 900 V 820" />
    </path>
    <path>
      <animate attributeName="d" dur="7.8s" repeatCount="indefinite" begin={beginTimes[4]}
        values="M 50 200 V 400 H 200;M 70 220 V 420 H 220;M 50 200 V 400 H 200" />
    </path>
    <path>
      <animate attributeName="d" dur="8.6s" repeatCount="indefinite" begin={beginTimes[5]}
        values="M 80 600 H 250 V 800;M 100 620 H 270 V 820;M 80 600 H 250 V 800" />
    </path>
    <path>
      <animate attributeName="d" dur="7.1s" repeatCount="indefinite" begin={beginTimes[6]}
        values="M 1390 300 V 600 H 1200;M 1370 320 V 620 H 1220;M 1390 300 V 600 H 1200" />
    </path>
    <path>
      <animate attributeName="d" dur="6.9s" repeatCount="indefinite" begin={beginTimes[7]}
        values="M 1360 700 H 1100 V 850;M 1340 720 H 1080 V 870;M 1360 700 H 1100 V 850" />
    </path>
    <path>
      <animate attributeName="d" dur="9.3s" repeatCount="indefinite" begin={beginTimes[8]}
        values="M 720 0 V 450 H 1440;M 740 20 V 470 H 1420;M 720 0 V 450 H 1440" />
    </path>
    <path>
      <animate attributeName="d" dur="8.4s" repeatCount="indefinite" begin={beginTimes[9]}
        values="M 0 450 H 720 V 900;M 20 470 H 740 V 880;M 0 450 H 720 V 900" />
    </path>
    {/* Extra random casual circuits for organic effect */}
    <path>
      <animate attributeName="d" dur="10.2s" repeatCount="indefinite" begin={beginTimes[10]}
        values="M 200 300 H 400 V 500 H 600;M 220 320 H 420 V 520 H 620;M 200 300 H 400 V 500 H 600" />
    </path>
    <path>
      <animate attributeName="d" dur="11.1s" repeatCount="indefinite" begin={beginTimes[11]}
        values="M 1240 100 V 300 H 1040;M 1260 120 V 320 H 1060;M 1240 100 V 300 H 1040" />
    </path>
    <path>
      <animate attributeName="d" dur="12.5s" repeatCount="indefinite" begin={beginTimes[12]}
        values="M 600 600 H 800 V 800;M 620 620 H 820 V 820;M 600 600 H 800 V 800" />
    </path>
    <path>
      <animate attributeName="d" dur="13.3s" repeatCount="indefinite" begin={beginTimes[13]}
        values="M 900 200 V 400 H 1100;M 920 220 V 420 H 1120;M 900 200 V 400 H 1100" />
    </path>
  </svg>
);

export default CircuitBackground; 