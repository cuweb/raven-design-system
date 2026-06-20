export interface EmbedPowerBiProps {
  title: string;
  url: string;
}

export const EmbedPowerBi = ({ title, url }: EmbedPowerBiProps) => (
  <iframe title={title} src={url} className="cu-embed-iframe" allowFullScreen />
);

EmbedPowerBi.displayName = 'Embed.PowerBi';
