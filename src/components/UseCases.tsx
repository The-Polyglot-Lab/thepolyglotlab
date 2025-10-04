import React from 'react';
import VideoPlayer from './VideoPlayer';
import '../styles/UseCases.css';

const UseCases: React.FC = () => {
  const useCases = [
    {
      id: 'jane',
      title: 'Jane\'s Workflow',
      description: 'See how Jane automates her daily tasks',
      videoUrl: 'https://tpl-assets.s3.us-east-1.amazonaws.com/EN-Jane.mp4'
    },
    {
      id: 'mark',
      title: 'Mark\'s Process',
      description: 'Watch Mark streamline his operations',
      videoUrl: 'https://tpl-assets.s3.us-east-1.amazonaws.com/EN-Mark.mp4'
    },
    {
      id: 'sarah',
      title: 'Sarah\'s Solution',
      description: 'Discover Sarah\'s time-saving techniques',
      videoUrl: 'https://tpl-assets.s3.us-east-1.amazonaws.com/EN-Sarah.mp4'
    },
    {
      id: 'bridget',
      title: 'Bridget\'s Breakthrough',
      description: 'Learn from Bridget\'s automation success',
      videoUrl: 'https://tpl-assets.s3.us-east-1.amazonaws.com/EN-Bridget.mp4'
    }
  ];

  return (
    <div className="use-cases">
      <div className="use-cases-header">
        <h2>Use Cases</h2>
        <p>See how people are saving time and energy with Escalation Ninja</p>
      </div>
      
      <div className="use-cases-grid">
        {useCases.map((useCase) => (
          <div key={useCase.id} className="use-case-item">
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
            <div className="use-case-video">
              <VideoPlayer
                src={useCase.videoUrl}
                title={useCase.title}
                width={400}
                height={225}
                controls={true}
                autoPlay={false}
                muted={false}
                fullscreenButtonPosition="top-right"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCases;
