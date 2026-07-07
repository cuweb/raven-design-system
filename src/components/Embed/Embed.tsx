import './styles.scss';
import { EmbedYouTube } from './Embed.YouTube';
import { EmbedVimeo } from './Embed.Vimeo';
import { EmbedKaltura } from './Embed.Kaltura';
import { EmbedPowerBi } from './Embed.PowerBi';
import { EmbedTED } from './Embed.TED';
import { EmbedSoundCloud } from './Embed.SoundCloud';
import { EmbedAudioboom } from './Embed.Audioboom';

export interface EmbedProps {
    children: React.ReactNode;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
}

export const EmbedWrapper = ({ children, maxWidth = 'aligncontent' }: EmbedProps) => {
    const rootClasses = ['cu-embed cu-layout', maxWidth].filter(Boolean).join(' ');

    return (
        <div className={rootClasses}>
            <div className={`cu-embed__container ${maxWidth}`}>{children}</div>
        </div>
    );
};

export const Embed = Object.assign(EmbedWrapper, {
    YouTube: EmbedYouTube,
    Vimeo: EmbedVimeo,
    Kaltura: EmbedKaltura,
    PowerBi: EmbedPowerBi,
    TED: EmbedTED,
    SoundCloud: EmbedSoundCloud,
    Audioboom: EmbedAudioboom,
});

EmbedWrapper.displayName = 'Embed';
