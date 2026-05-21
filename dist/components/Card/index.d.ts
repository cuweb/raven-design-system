import React$1, { ReactNode } from 'react';
import statusTypes from '../Status/statusTypes.json';
import * as react_jsx_runtime from 'react/jsx-runtime';

type StatusVariant = 'success' | 'error' | 'warning' | 'info';
/**
 * Built-in type names. The string literal type comes from the JSON keys, but
 * `Status`'s `type` prop is intentionally a wider `string` so consumers can
 * inject project-specific types (eventually via a Provider) without this
 * package needing to know about them.
 */
type StatusType = keyof typeof statusTypes;

interface StatusProps {
    children?: React$1.ReactNode;
    variant?: StatusVariant;
    /**
     * Opt into the registry: when set, the component looks up a default label and
     * aria-prefix for the (type, variant) pair. Built-in types are `'hours'`,
     * `'availability'`, `'system'`. Consumers may pass other strings — they'll
     * resolve to no label unless a future Provider supplies a matching entry.
     */
    type?: StatusType | (string & {});
    /** Explicit text override. Used when no `children` are provided. Wins over the registry default. */
    label?: string;
    /**
     * @internal
     * Selects the context modifier class. `Card.Status` passes `'in-card'` so
     * the inner span gets `cu-status--in-card`; standalone use defaults to
     * `'standalone'` (`cu-status--standalone`). This lets each context have
     * fully independent styles without descendant-selector specificity battles.
     */
    context?: 'standalone' | 'in-card';
}

type CardStatusProps = StatusProps;

interface CardStatsProps {
    stat: string;
    desc: string;
    reverse?: boolean;
}

interface CardPeopleMetaProps {
    children: React$1.ReactNode;
    jobTitle?: string;
    phone?: string;
}

interface CardEventMetaProps {
    startDateTime: string;
    endDateTime: string;
    onCampus: boolean;
    onCampusBuilding?: string | null;
    onCampusRoomNumber?: string | null;
    eventAddress?: string;
}

interface CardExcerptProps {
    text?: string;
    hasMore?: boolean;
    truncateOnMobile?: boolean;
}

interface CardFooterProps {
    children: React$1.ReactNode;
}

interface CardContentProps {
    children?: ReactNode;
}

interface CardBodyProps {
    children: React$1.ReactNode;
}

interface CardHeaderProps {
    title: string;
    link?: string;
    extraText?: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    readTime?: string;
    position?: 'top' | 'bottom';
}

interface CardInitialsProps {
    initials: string;
}

interface CardImageThumbProps {
    children: React$1.ReactNode;
    isSquare?: boolean;
}

interface CardDateThumbProps {
    startDate: string;
    endDate: string;
}

type ProviderName = 'youtube' | 'vimeo' | 'ted';

interface CardVideoFigureProps {
    url: string;
    thumbnail?: string;
    title?: string;
    provider?: ProviderName;
    skipNetwork?: boolean; /** Skip oEmbed network calls; only resolve via deterministic fast paths (e.g. YouTube). */
    onPlay?: () => void; /** Fired when the user activates the card. The figure still swaps in the iframe internally. */
}

interface CardFigureProps {
    children: React.ReactNode;
    isRound?: boolean;
    isSmall?: boolean;
    isSquare?: boolean;
    isIcon?: boolean;
}

interface CardProps {
    children: React$1.ReactNode;
    isGrey?: boolean;
    hasWave?: boolean;
    isCenter?: boolean;
    isCenterDesktop?: boolean;
    noHover?: boolean;
    leftBorder?: boolean;
    revealOnScroll?: boolean;
}
declare const Card: {
    ({ children, isGrey, hasWave, isCenter, isCenterDesktop, noHover, leftBorder, revealOnScroll, }: CardProps): react_jsx_runtime.JSX.Element;
    displayName: string;
} & {
    Figure: {
        ({ children, isRound, isSmall, isSquare, isIcon }: CardFigureProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    VideoFigure: {
        ({ url, thumbnail: thumbnailProp, title, provider: providerOverride, skipNetwork, onPlay, }: CardVideoFigureProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    DateThumb: {
        ({ startDate, endDate }: CardDateThumbProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    ImageThumb: {
        ({ children, isSquare }: CardImageThumbProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: CardInitialsProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Header: {
        ({ title, link, extraText, as, date, datePrefix, readTime, position, }: CardHeaderProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: CardBodyProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: CardContentProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: CardFooterProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore, truncateOnMobile }: CardExcerptProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: CardEventMetaProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: CardPeopleMetaProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc, reverse }: CardStatsProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Status: {
        (props: CardStatusProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

export { Card };
export type { CardProps, CardStatusProps, CardVideoFigureProps };
