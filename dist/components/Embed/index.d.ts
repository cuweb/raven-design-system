import * as react from 'react';

interface EmbedAudioboomProps {
    title: string;
    url: string;
}

interface EmbedSoundCloudProps {
    title: string;
    url: string;
}

interface EmbedTEDProps {
    title: string;
    url: string;
}

interface EmbedPowerBiProps {
    title: string;
    url: string;
}

interface EmbedKalturaProps {
    title: string;
    url: string;
}

interface EmbedVimeoProps {
    title: string;
    url: string;
}

interface EmbedYouTubeProps {
    title: string;
    url: string;
}

interface EmbedProps {
    children: React.ReactNode;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
}
declare const EmbedWrapper: {
    ({ children, maxWidth }: EmbedProps): react.JSX.Element;
    displayName: string;
};
declare const Embed: {
    ({ children, maxWidth }: EmbedProps): react.JSX.Element;
    displayName: string;
} & {
    YouTube: {
        ({ title, url }: EmbedYouTubeProps): react.JSX.Element;
        displayName: string;
    };
    Vimeo: {
        ({ title, url }: EmbedVimeoProps): react.JSX.Element;
        displayName: string;
    };
    Kaltura: {
        ({ title, url }: EmbedKalturaProps): react.JSX.Element;
        displayName: string;
    };
    PowerBi: {
        ({ title, url }: EmbedPowerBiProps): react.JSX.Element;
        displayName: string;
    };
    TED: {
        ({ title, url }: EmbedTEDProps): react.JSX.Element;
        displayName: string;
    };
    SoundCloud: {
        ({ title, url }: EmbedSoundCloudProps): react.JSX.Element;
        displayName: string;
    };
    Audioboom: {
        ({ title, url }: EmbedAudioboomProps): react.JSX.Element;
        displayName: string;
    };
};

interface EmbedHubSpotProps {
    formId: string;
    portalId: string;
}
interface HubSpotForms {
    create: (options: {
        portalId: string;
        formId: string;
        target: string;
    }) => void;
}
declare global {
    interface Window {
        hbspt?: {
            forms: HubSpotForms;
        };
    }
}
declare const EmbedHubSpot: {
    ({ formId, portalId }: EmbedHubSpotProps): react.JSX.Element;
    displayName: string;
};

export { Embed, EmbedHubSpot, EmbedWrapper };
export type { EmbedAudioboomProps, EmbedHubSpotProps, EmbedKalturaProps, EmbedPowerBiProps, EmbedProps, EmbedSoundCloudProps, EmbedTEDProps, EmbedVimeoProps, EmbedYouTubeProps };
