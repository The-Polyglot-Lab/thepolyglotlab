import React from 'react';
import VideoPlayer from './VideoPlayer';
import '../styles/VideoDemo.css';

export default function VideoDemo() {
  return (
    <div className="video-demo">
      <div className="demo-section">
        <h2>Escalation Ninja Demo</h2>
        <p>See how our Slack-native automation works in action</p>
      </div>
      
      <div className="video-showcase">
        <div className="video-item">
          <VideoPlayer 
            src="https://tpl-assets.s3.us-east-1.amazonaws.com/EN-New.mp4"
            title="Escalation Ninja Demo"
            width={800}
            height={450}
            controls={true}
            autoPlay={false}
            muted={false}
            fullscreenButtonPosition="top-right"
          />
        </div>
      </div>
    </div>
  );
}
