export interface EmbedTEDProps {
  title: string;
  url: string;
}

export const EmbedTED = ({ title, url }: EmbedTEDProps) => {
  let embedURL = '';

  if (url) {
    const urlParts = url.split('/');
    const lastPiece = urlParts[urlParts.length - 1];
    embedURL = `https://embed.ted.com/talks/lang/en/${lastPiece}`;
  }

  return <iframe title={title} src={embedURL} className="cu-embed-iframe" allowFullScreen />;
};

EmbedTED.displayName = 'Embed.TED';
