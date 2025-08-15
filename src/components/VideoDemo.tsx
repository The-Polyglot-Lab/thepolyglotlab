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
            src="../src/assets/EN-New.mp4"
            title="Escalation Ninja Demo"
            width={560}
            height={315}
          />
        </div>
        
        <div className="video-item">
          <h3>Autoplay (Muted)</h3>
          <VideoPlayer 
            src="../src/assets/EN-New.mp4"
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
            src="../src/assets/EN-New.mp4"
            title="Escalation Ninja Demo - No Controls"
            width={400}
            height={225}
            controls={false}
          />
        </div>
      </div>
      
      <div className="demo-info">
        <h3>Features</h3>
        <ul>
          <li>✅ Custom video player with no external dependencies</li>
          <li>✅ Play/pause, seek, and volume controls</li>
          <li>✅ Responsive design for all devices</li>
          <li>✅ Hover to reveal controls</li>
          <li>✅ Matches your brand colors (#4FFFD2)</li>
          <li>✅ Supports local video files</li>
          <li>✅ Accessible with proper ARIA labels</li>
        </ul>
      </div>
    </div>
  );
}
