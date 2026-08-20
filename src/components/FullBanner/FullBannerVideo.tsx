import { useRef, useState } from 'react';

export interface FullBannerVideoProps {
    src: string | string[];
    poster?: string;
    description?: string;
    fallback?: string;
}

const videoMimeTypes: Record<string, string> = {
    mp4: 'video/mp4',
    m4v: 'video/mp4',
    webm: 'video/webm',
    ogv: 'video/ogg',
    ogg: 'video/ogg',
    mov: 'video/quicktime',
};

const getVideoType = (url: string) => {
    const extension = url.split(/[?#]/)[0].split('.').pop()?.toLowerCase();
    return extension ? videoMimeTypes[extension] : undefined;
};

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

export const FullBannerVideo = ({
    src,
    poster,
    description,
    fallback = 'Your browser does not support the video tag.',
}: FullBannerVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const sources = Array.isArray(src) ? src : [src];

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

    const label = isPlaying ? 'Pause background video' : 'Play background video';

    return (
        <div className="cu-fullbanner__video-wrap">
            <video
                ref={videoRef}
                className="cu-fullbanner__video"
                poster={poster}
                muted
                loop
                playsInline
                controls={false}
                aria-hidden="true"
                tabIndex={-1}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                aria-label={description}
            >
                {sources.map((source) => (
                    <source key={source} src={source} type={getVideoType(source)} />
                ))}
                <p>{fallback}</p>
            </video>
            <button
                type="button"
                className="cu-fullbanner__video-toggle"
                onClick={toggle}
                aria-label={label}
                title={label}
            >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
        </div>
    );
};

FullBannerVideo.displayName = 'FullBanner.Video';
