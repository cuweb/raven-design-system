export interface EmbedSoundCloudProps {
  title: string;
  url: string;
}

export const EmbedSoundCloud = ({ title, url }: EmbedSoundCloudProps) => {
  const src = `https://w.soundcloud.com/player/?url=${url}&color=ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=true`;

  return (
    <iframe
      title={title}
      src={src}
      className="cu-embed-iframe"
      allow="encrypted-media"
      allowFullScreen
    />
  );
};

EmbedSoundCloud.displayName = 'Embed.SoundCloud';
