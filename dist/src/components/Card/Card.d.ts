import { default as React } from 'react';
export interface CardProps {
    children: React.ReactNode;
    isGrey?: boolean;
    hasWave?: boolean;
    isCenter?: boolean;
    isCenterDesktop?: boolean;
    noHover?: boolean;
    leftBorder?: boolean;
    revealOnScroll?: boolean;
}
export declare const CardWrapper: {
    ({ children, isGrey, hasWave, isCenter, isCenterDesktop, noHover, leftBorder, revealOnScroll, }: CardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Card: {
    ({ children, isGrey, hasWave, isCenter, isCenterDesktop, noHover, leftBorder, revealOnScroll, }: CardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Figure: {
        ({ children, isRound, isSmall, isSquare, isIcon }: import('./CardFigure').CardFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    VideoFigure: {
        ({ url, thumbnail: thumbnailProp, title, provider: providerOverride, skipNetwork, onPlay, }: import('./CardVideoFigure').CardVideoFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DateThumb: {
        ({ startDate, endDate }: import('./CardDateThumb').CardDateThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    ImageThumb: {
        ({ children, isSquare }: import('./CardImageThumb').CardImageThumbProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: import('./CardInitials').CardInitialsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ title, link, extraText, as, date, datePrefix, readTime, position, }: import('./CardHeader').CardHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: import('./CardBody').CardBodyProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: import('./CardContent').CardContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: import('./CardFooter').CardFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore, truncateOnMobile }: import('./CardExcerpt').CardExcerptProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: import('./CardEventMeta').CardEventMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: import('./CardPeopleMeta').CardPeopleMetaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc, reverse }: import('./CardStats').CardStatsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Status: {
        (props: import('./CardStatus').CardStatusProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
//# sourceMappingURL=Card.d.ts.map