export interface EmbedAudioboomProps {
  title: string;
  url: string;
}

export const EmbedAudioboom = ({ title, url }: EmbedAudioboomProps) => {
  let embedURL = '';

  if (url) {
    const match = url.match(/\/posts\/(\d+)/);
    const postID = match ? match[1] : null;
    embedURL = `https://audioboom.com/posts/${postID}/embed/v4`;
  }

  return (
    <iframe
      title={title}
      src={embedURL}
      className="cu-embed-iframe"
      allow="autoplay"
      allowFullScreen
    />
  );
};

EmbedAudioboom.displayName = 'Embed.Audioboom';
