export interface EmbedVimeoProps {
  title: string;
  url: string;
}

export const EmbedVimeo = ({ title, url }: EmbedVimeoProps) => {
  let embedURL = '';

  if (url) {
    const urlParts = url.split('/');
    const lastPiece = urlParts[urlParts.length - 1];
    embedURL = `https://player.vimeo.com/video/${lastPiece}`;
  }

  return (
    <iframe
      title={title}
      src={embedURL}
      className="cu-embed-iframe"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  );
};

EmbedVimeo.displayName = 'Embed.Vimeo';
