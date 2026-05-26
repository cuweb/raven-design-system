import { ProviderName } from '../../utils/video/types';
export interface CardVideoFigureProps {
    url: string;
    thumbnail?: string;
    title?: string;
    provider?: ProviderName;
    skipNetwork?: boolean; /** Skip oEmbed network calls; only resolve via deterministic fast paths (e.g. YouTube). */
    onPlay?: () => void; /** Fired when the user activates the card. The figure still swaps in the iframe internally. */
}
export declare const CardVideoFigure: {
    ({ url, thumbnail: thumbnailProp, title, provider: providerOverride, skipNetwork, onPlay, }: CardVideoFigureProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=CardVideoFigure.d.ts.map