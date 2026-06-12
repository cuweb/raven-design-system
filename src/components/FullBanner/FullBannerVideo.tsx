export interface FullBannerVideoProps {
  src: string;
}

export const FullBannerVideo = ({ src }: FullBannerVideoProps) => (
  <video
    className="cu-fullbanner__video"
    autoPlay
    muted
    loop
    playsInline
    aria-hidden="true"
  >
    <source src={src} />
  </video>
);

FullBannerVideo.displayName = 'FullBanner.Video';
