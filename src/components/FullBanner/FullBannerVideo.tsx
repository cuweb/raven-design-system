import { useRef, useState } from 'react';

export interface FullBannerVideoProps {
  src: string;
}

const PauseIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="2" y="1" width="3.5" height="12" rx="1" />
    <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M2.5 1.5 L12.5 7 L2.5 12.5 Z" />
  </svg>
);

export const FullBannerVideo = ({ src }: FullBannerVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="cu-fullbanner__video-wrap">
      <video
        ref={videoRef}
        className="cu-fullbanner__video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={src} />
      </video>
      <button
        type="button"
        className="cu-fullbanner__video-toggle"
        onClick={toggle}
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
};

FullBannerVideo.displayName = 'FullBanner.Video';
