import React from 'react';
import VideoPlayer from './VideoPlayer';
import '../styles/VideoDemo.css';

export default function VideoDemo() {
  return (
    <div className="video-demo">
      <div className="demo-section">
        <h2>Video Player Demo</h2>
        <p>Custom video player for EN-New.mp4 - No YouTube dependency!</p>
      </div>
      
      <div className="video-showcase">
        <div className="video-item">
          <h3>Default Video Player</h3>
          <VideoPlayer 
            src="../../public/EN-New.mp4"
            title="Escalation Ninja Demo"
            width={560}
            height={315}
          />
        </div>
        
        <div className="video-item">
          <h3>Autoplay (Muted)</h3>
          <VideoPlayer 
            src="../../public/EN-New.mp4"
            title="Escalation Ninja Demo - Autoplay"
            width={480}
            height={270}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </div>
        
        <div className="video-item">
          <h3>No Controls</h3>
          <VideoPlayer 
            src="../../public/EN-New.mp4"
            title="Escalation Ninja Demo - No Controls"
            width={400}
            height={225}
            controls={false}
          />
        </div>
      </div>
    </div>
  );
}
