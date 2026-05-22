import { ComponentProps } from 'react';
import { ComponentType } from 'react';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { IconName } from '@cuweb/rds-icons';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { RefObject } from 'react';
import { SVGProps } from 'react';

export declare const Article: ({ children, content }: ArticleProps) => JSX_2.Element;

declare interface ArticleProps {
    children?: default_2.ReactNode;
    content?: string;
}

export declare const Aside: ({ children, isSticky, topSpace }: AsideProps) => JSX_2.Element;

declare interface AsideProps {
    children: default_2.ReactNode;
    isSticky?: boolean;
    topSpace?: number;
}

export declare const Badge: ({ text, href, rounded, color, ...rest }: BadgeProps) => JSX_2.Element;

export declare const BadgeGroup: ({ children, isAbsolute, top, right, bottom, left, }: BadgeGroupProps) => JSX_2.Element;

declare interface BadgeGroupProps {
    children: default_2.ReactNode;
    isAbsolute?: boolean;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

declare interface BadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    href?: string;
    rounded?: borderRadiusKeys;
    color?: 'grey' | 'white' | 'black80' | 'white80' | 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'teal';
}

declare const Body_2: ({ children, className }: BodyProps) => JSX_2.Element;
export { Body_2 as Body }

declare interface BodyProps {
    children: default_2.ReactNode;
    className?: string;
}

declare const borderRadiusClasses: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
};

declare type borderRadiusKeys = keyof typeof borderRadiusClasses;

export declare const Button: ({ color, title, icon, type, isSmall, isFull, isDisabled, ariaLabel, ...rest }: ButtonNoTitleProps | ButtonTitleProps) => JSX_2.Element;

export declare const ButtonGroup: ({ children, align }: ButtonGroupProps) => JSX_2.Element;

declare type ButtonGroupAlign = keyof typeof justifyClasses;

declare interface ButtonGroupProps {
    children: default_2.ReactNode;
    align?: ButtonGroupAlign;
}

declare interface ButtonNoTitleProps extends ButtonProps {
    title?: string;
    icon: IconName;
    ariaLabel: string;
}

declare interface ButtonProps extends default_2.ComponentPropsWithoutRef<'button'> {
    color?: 'red' | 'grey' | 'dark-grey' | 'black' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isSmall?: boolean;
    isFull?: boolean;
    isDisabled?: boolean;
}

declare interface ButtonTitleProps extends ButtonProps {
    title: string;
    icon?: IconName;
    ariaLabel?: string;
}

export declare const Card: {
    ({ children, isGrey, hasWave, isCenter, isCenterDesktop, noHover, leftBorder, revealOnScroll, className, }: CardProps): JSX_2.Element;
    displayName: string;
} & {
    Figure: {
        ({ children, isRound, isSmall, isSquare, isIcon }: CardFigureProps): JSX_2.Element;
        displayName: string;
    };
    VideoFigure: {
        ({ url, thumbnail: thumbnailProp, title, provider: providerOverride, skipNetwork, onPlay, }: CardVideoFigureProps): JSX_2.Element;
        displayName: string;
    };
    DateThumb: {
        ({ startDate, endDate }: CardDateThumbProps): JSX_2.Element;
        displayName: string;
    };
    ImageThumb: {
        ({ children, isSquare }: CardImageThumbProps): JSX_2.Element;
        displayName: string;
    };
    Initials: {
        ({ initials }: CardInitialsProps): JSX_2.Element;
        displayName: string;
    };
    Header: {
        ({ title, link, extraText, as, date, datePrefix, readTime, position, }: CardHeaderProps): JSX_2.Element;
        displayName: string;
    };
    Body: {
        ({ children }: CardBodyProps): JSX_2.Element;
        displayName: string;
    };
    Content: {
        ({ children }: CardContentProps): JSX_2.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: CardFooterProps): JSX_2.Element;
        displayName: string;
    };
    Excerpt: {
        ({ text, hasMore, truncateOnMobile }: CardExcerptProps): JSX_2.Element;
        displayName: string;
    };
    EventMeta: {
        ({ startDateTime, endDateTime, onCampus, onCampusBuilding, onCampusRoomNumber, eventAddress, }: CardEventMetaProps): JSX_2.Element;
        displayName: string;
    };
    PeopleMeta: {
        ({ jobTitle, children, phone }: CardPeopleMetaProps): JSX_2.Element;
        displayName: string;
    };
    Stats: {
        ({ stat, desc, reverse }: CardStatsProps): JSX_2.Element;
        displayName: string;
    };
    Status: {
        (props: CardStatusProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface CardBodyProps {
    children: default_2.ReactNode;
}

declare interface CardContentProps {
    children?: ReactNode;
}

declare interface CardDateThumbProps {
    startDate: string;
    endDate: string;
}

declare interface CardEventMetaProps {
    startDateTime: string;
    endDateTime: string;
    onCampus: boolean;
    onCampusBuilding?: string | null;
    onCampusRoomNumber?: string | null;
    eventAddress?: string;
}

declare interface CardExcerptProps {
    text?: string;
    hasMore?: boolean;
    truncateOnMobile?: boolean;
}

declare interface CardFigureProps {
    children: React.ReactNode;
    isRound?: boolean;
    isSmall?: boolean;
    isSquare?: boolean;
    isIcon?: boolean;
}

declare interface CardFooterProps {
    children: default_2.ReactNode;
}

declare interface CardHeaderProps {
    title: string;
    link?: string;
    extraText?: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
    readTime?: string;
    position?: 'top' | 'bottom';
}

declare interface CardImageThumbProps {
    children: default_2.ReactNode;
    isSquare?: boolean;
}

declare interface CardInitialsProps {
    initials: string;
}

declare interface CardPeopleMetaProps {
    children: default_2.ReactNode;
    jobTitle?: string;
    phone?: string;
}

export declare interface CardProps {
    children: default_2.ReactNode;
    isGrey?: boolean;
    hasWave?: boolean;
    isCenter?: boolean;
    isCenterDesktop?: boolean;
    noHover?: boolean;
    leftBorder?: boolean;
    revealOnScroll?: boolean;
    className?: string;
}

declare interface CardStatsProps {
    stat: string;
    desc: string;
    reverse?: boolean;
}

export declare type CardStatusProps = StatusProps;

export declare interface CardVideoFigureProps {
    url: string;
    thumbnail?: string;
    title?: string;
    provider?: ProviderName;
    skipNetwork?: boolean; /** Skip oEmbed network calls; only resolve via deterministic fast paths (e.g. YouTube). */
    onPlay?: () => void; /** Fired when the user activates the card. The figure still swaps in the iframe internally. */
}

export declare const Column: {
    ({ children, cols }: ColumnProps): JSX_2.Element;
    displayName: string;
} & {
    Content: {
        ({ children, isFirst }: ColumnContentProps): JSX_2.Element;
        displayName: string;
    };
};

declare interface ColumnContentProps {
    children: default_2.ReactNode;
    isFirst?: boolean;
}

declare interface ColumnProps {
    children: default_2.ReactNode;
    cols?: gridColumnKeys;
}

export declare const CookieBanner: ({ cookieName, message, policyHref, policyLabel, buttonLabel, }: CookieBannerProps) => JSX_2.Element | null;

export declare interface CookieBannerProps {
    cookieName?: string;
    message?: string;
    policyHref?: string;
    policyLabel?: string;
    buttonLabel?: string;
}

declare const _default: {
    "hours": {
        "ariaPrefix": "Hours",
        "labels": {
            "success": "Open",
            "warning": "Closing soon",
            "error": "Closed"
        }
    },
    "availability": {
        "ariaPrefix": "Availability",
        "labels": {
            "success": "Available",
            "warning": "Limited availability",
            "error": "Unavailable"
        }
    },
    "system": {
        "ariaPrefix": "System status",
        "labels": {
            "success": "Operational",
            "warning": "Degraded",
            "error": "Outage",
            "info": "Maintenance"
        }
    }
};

/** Built-in registry, exported for inspection / merging with project-level types. */
export declare const defaultStatusTypes: StatusTypeRegistry;

export declare const DepartmentBar: ({ deptName, buildingName, officeNumber, phone, email, buttons, }: DepartmentBarProps) => JSX_2.Element;

export declare interface DepartmentBarProps {
    deptName?: string;
    buildingName?: string;
    officeNumber?: string;
    phone?: string;
    email?: string;
    buttons?: FooterButton[];
}

export declare const detectProvider: (url: string) => ProviderDefinition | null;

export declare const Footer: ({ logoSrc, logoAlt, privacyHref, accessibilityHref, copyrightHref, }: FooterProps) => JSX_2.Element;

declare interface FooterButton {
    id: number;
    title: string;
    url: string;
}

declare interface FooterContactInfo {
    phone: string;
    phoneHref?: string;
    contactHref?: string;
    address: string;
}

export declare interface FooterProps {
    logoSrc?: string;
    logoAlt?: string;
    privacyHref?: string;
    accessibilityHref?: string;
    copyrightHref?: string;
}

declare interface FooterSocialLink {
    name: string;
    href: string;
    icon: IconName;
}

export declare const FooterStandard: ({ type, acknowledgment, contact, social, logoSrc, logoAlt, privacyHref, accessibilityHref, copyrightHref, }: FooterStandardProps) => JSX_2.Element;

export declare interface FooterStandardProps {
    type?: FooterType;
    acknowledgment?: string;
    contact?: FooterContactInfo;
    social?: FooterSocialLink[];
    logoSrc?: string;
    logoAlt?: string;
    privacyHref?: string;
    accessibilityHref?: string;
    copyrightHref?: string;
}

export declare type FooterType = 'standard' | 'athletics' | 'futureFunder';

/**
 * Compute a Status-ready `{ variant, label }` from operating hours.
 *
 * Variant rules:
 *   - error   — current time is before open or after close
 *   - warning — within 60 minutes of close
 *   - success — open with more than 60 minutes remaining
 *
 * `open` and `close` are 24h strings like `'07:00'` and `'20:00'`. Assumes
 * close is later than open on the same day; venues that wrap past midnight
 * aren't modelled here yet.
 */
export declare const formatHoursStatus: (open: string, close: string, now?: Date) => HoursStatus;

export declare const getProvider: (name: ProviderName) => ProviderDefinition | null;

declare const gridColumnClasses: {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '1/3': string;
    '2/3': string;
};

declare type gridColumnKeys = keyof typeof gridColumnClasses;

export declare interface HoursStatus {
    variant: 'success' | 'warning' | 'error';
    label: string;
}

export declare const Icon: ({ name, size, title, ...rest }: IconProps) => JSX_2.Element | null;

export { IconName }

export declare interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
    name: IconName;
    size?: number | string;
    title?: string;
}

declare const justifyClasses: {
    start: string;
    end: string;
    center: string;
};

declare type LinkComponent = ComponentType<ComponentProps<'a'>>;

export declare const LinkProvider: FC<LinkProviderProps>;

declare interface LinkProviderProps {
    component: LinkComponent;
    children: ReactNode;
}

export declare const Main: ({ children, hasPadding }: MainProps) => JSX_2.Element;

declare interface MainProps {
    children: default_2.ReactNode;
    hasPadding?: boolean;
}

declare const maxWidthClasses: {
    aligncontent: string;
    alignwide: string;
    alignfull: string;
};

declare type maxWidthKeys = keyof typeof maxWidthClasses;

export declare interface OEmbedData {
    thumbnail?: string;
    title?: string;
    author?: string;
    provider: ProviderName;
    duration?: number;
}

export declare const PROVIDER_NAMES: ProviderName[];

export declare interface ProviderDefinition {
    name: ProviderName;
    matches: (url: string) => boolean;
    parseId: (url: string) => string | null;
    buildEmbedUrl: (id: string) => string;
    buildThumbnailUrl?: (id: string) => string;
    buildOEmbedUrl?: (url: string) => string;
}

export declare type ProviderName = 'youtube' | 'vimeo' | 'ted';

export declare interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    disabled?: boolean;
}

export declare const Section: ({ children, as, isGrey, maxWidth, }: SectionProps) => JSX_2.Element;

declare interface SectionProps {
    children?: default_2.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: maxWidthKeys;
}

export declare const Status: {
    ({ children, variant, type, label, context, }: StatusProps): JSX_2.Element | null;
    displayName: string;
};

export declare interface StatusProps {
    children?: default_2.ReactNode;
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
    /* Excluded from this release type: context */
}

/**
 * Built-in type names. The string literal type comes from the JSON keys, but
 * `Status`'s `type` prop is intentionally a wider `string` so consumers can
 * inject project-specific types (eventually via a Provider) without this
 * package needing to know about them.
 */
export declare type StatusType = keyof typeof _default;

export declare interface StatusTypeDefinition {
    /** Used as a prefix in the rendered aria-label, e.g. "Hours: Open until 8:00 PM". */
    ariaPrefix: string;
    /** Default visible text per variant. Variants may be omitted; an unresolved (type, variant) pair renders nothing. */
    labels: Partial<Record<StatusVariant, string>>;
}

export declare type StatusTypeRegistry = Record<string, StatusTypeDefinition>;

export declare type StatusVariant = 'success' | 'error' | 'warning' | 'info';

export declare const useOEmbed: (url: string | undefined, options?: UseOEmbedOptions) => UseOEmbedResult;

export declare interface UseOEmbedOptions {
    /** Skip network calls; only resolve via deterministic fast paths (e.g. YouTube). */
    skipNetwork?: boolean;
}

export declare interface UseOEmbedResult {
    data: OEmbedData | null;
    loading: boolean;
    error: Error | null;
}

export declare const useReducedMotion: () => boolean;

export declare const useScrollReveal: <T extends HTMLElement = HTMLDivElement>(options?: ScrollRevealOptions) => {
    ref: RefObject<T>;
    isVisible: boolean;
};

export { }
