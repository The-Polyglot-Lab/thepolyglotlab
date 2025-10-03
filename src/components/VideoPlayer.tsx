import React, { useRef, useState, useEffect } from 'react';
import '../styles/VideoPlayer.css';

interface VideoPlayerProps {
  src: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  fullscreenButtonPosition?: 'controls' | 'top-right';
}

export default function VideoPlayer({ 
  src, 
  title = "Video", 
  width = 560, 
  height = 315, 
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  fullscreenButtonPosition = 'controls'
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFullscreenButton, setShowFullscreenButton] = useState(false);

  // Track if this video was the last one interacted with
  const [isLastInteracted, setIsLastInteracted] = useState(false);

  // Handle spacebar for play/pause and ESC for fullscreen exit
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only respond to spacebar if this video was the last one interacted with
      if (e.code === 'Space' && videoRef.current && isLastInteracted) {
        e.preventDefault(); // Prevent page scrolling
        handlePlayPause();
      }
      // ESC only works if this video is in fullscreen and was last interacted with
      if (e.key === 'Escape' && isFullscreen && isLastInteracted) {
        handleFullscreen();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isFullscreen, isLastInteracted]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      
      // Show fullscreen button briefly when state changes
      if (isFullscreen) {
        setShowFullscreenButton(true);
        setTimeout(() => {
          setShowFullscreenButton(false);
        }, 1000);
      }
    }
  };

  // Handle video click/tap for play/pause and focus
  const handleVideoClick = (e: React.MouseEvent) => {
    // Mark this video as the last one interacted with
    setIsLastInteracted(true);
    
    // Clear focus from all other videos by dispatching a custom event
    window.dispatchEvent(new CustomEvent('videoInteraction', { 
      detail: { videoId: videoRef.current?.src } 
    }));
    
    if (videoRef.current) {
      videoRef.current.focus(); // Focus this video when clicked
      
      // In fullscreen, ensure the video stays focused for keyboard controls
      if (isFullscreen) {
        // Prevent any default fullscreen click behaviors that might interfere
        setTimeout(() => {
          videoRef.current?.focus();
        }, 10);
      }
    }
    handlePlayPause();
    
    // Always prevent default and stop propagation to avoid modal interference
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle touch events for mobile
  const handleTouchEnd = (e: React.TouchEvent) => {
    // Mark this video as the last one interacted with
    setIsLastInteracted(true);
    
    // Clear focus from all other videos by dispatching a custom event
    window.dispatchEvent(new CustomEvent('videoInteraction', { 
      detail: { videoId: videoRef.current?.src } 
    }));
    
    if (videoRef.current) {
      videoRef.current.focus();
    }
    handlePlayPause();
    
    e.preventDefault();
    e.stopPropagation();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleFullscreen = async () => {
    if (!videoRef.current) return;

    // Mark this video as the last one interacted with when toggling fullscreen
    setIsLastInteracted(true);
    
    // Clear focus from all other videos
    window.dispatchEvent(new CustomEvent('videoInteraction', { 
      detail: { videoId: videoRef.current?.src } 
    }));

    try {
      if (!isFullscreen) {
        // Enter fullscreen
        if (videoRef.current.requestFullscreen) {
          await videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          await (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).msRequestFullscreen) {
          await (videoRef.current as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  // Listen for video interaction events to clear focus from other videos
  useEffect(() => {
    const handleVideoInteraction = (e: CustomEvent) => {
      // If another video was interacted with, clear this video's focus
      if (e.detail.videoId !== videoRef.current?.src) {
        setIsLastInteracted(false);
      }
    };

    window.addEventListener('videoInteraction', handleVideoInteraction as EventListener);
    return () => window.removeEventListener('videoInteraction', handleVideoInteraction as EventListener);
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
      
      // Ensure video gets focus when entering fullscreen for keyboard controls
      if (isCurrentlyFullscreen && videoRef.current) {
        setTimeout(() => {
          videoRef.current?.focus();
        }, 100); // Small delay to ensure fullscreen transition completes
      }
    };

    // Add global click listener for fullscreen mode
    const handleGlobalClick = (e: MouseEvent) => {
      // Only handle clicks when we're in fullscreen and this video was last interacted with
      if (isFullscreen && isLastInteracted && videoRef.current) {
        // Check if click is on the video element or its children
        const target = e.target as Element;
        if (videoRef.current.contains(target) || target === videoRef.current) {
          handlePlayPause();
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isFullscreen, isLastInteracted]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`video-player-container ${className}`}>
      <div 
        className="video-wrapper" 
        style={{ width, height }}
        onClick={handleVideoClick}
        onTouchEnd={handleTouchEnd}
      >
        <video
          ref={videoRef}
          src={src}
          title={title}
          width={width}
          height={height}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={handleVideoClick}
          onTouchEnd={handleTouchEnd}
          className="video-element"
          style={{ cursor: 'pointer' }}
          tabIndex={0}
        />
        
        {controls && (
          <div className="video-controls" onClick={(e) => e.stopPropagation()}>
            <button 
              className="play-pause-btn"
              onClick={handlePlayPause}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            
            <div className="time-display">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>
            
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="seek-bar"
              aria-label="Seek video"
            />
            
            <div className="volume-control">
              <span className="volume-icon">🔊</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
                aria-label="Volume"
              />
            </div>
            
            {fullscreenButtonPosition === 'controls' && (
              <button 
                className="fullscreen-btn"
                onClick={handleFullscreen}
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                {isFullscreen ? '⤓' : '⤢'}
              </button>
            )}
          </div>
        )}

        {fullscreenButtonPosition === 'top-right' && (
          <button 
            className="fullscreen-btn fullscreen-btn-topright"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleFullscreen();
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleFullscreen();
            }}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? '⤓' : '⤢'}
          </button>
        )}

        {/* Fullscreen play/pause overlay - only show in fullscreen */}
        {isFullscreen && (
          <div 
            className={`fullscreen-overlay ${showFullscreenButton ? 'show-button' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
          >
            <div className="fullscreen-play-pause-btn">
              {isPlaying ? '⏸️' : '▶️'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
