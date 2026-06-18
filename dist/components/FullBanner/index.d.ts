import * as react from 'react';

interface FullBannerVideoProps {
    src: string;
}

declare const maxWidthClasses: {
    aligncontent: string;
    alignwide: string;
    alignfull: string;
};
declare const justifyClasses: {
    start: string;
    end: string;
    center: string;
};

type MaxWidthKeys = keyof typeof maxWidthClasses;
type JustifyKeys = keyof typeof justifyClasses;
declare const contentBoxClasses: {
    readonly lg: "cu-fullbanner__inner--lg";
    readonly xl: "cu-fullbanner__inner--xl";
};
type ContentBoxKeys = keyof typeof contentBoxClasses;
interface FullBannerProps {
    children?: React.ReactNode;
    title: string;
    content?: string;
    headerType?: 'h1' | 'h2';
    image?: string;
    imageAlt?: string;
    media?: React.ReactNode;
    opacity?: number;
    focalPointX?: number;
    focalPointY?: number;
    maxWidth?: MaxWidthKeys;
    contentBox?: ContentBoxKeys;
    justify?: JustifyKeys;
}
declare const FullBanner: {
    ({ children, title, content, headerType, image, imageAlt, media, opacity, focalPointX, focalPointY, maxWidth, contentBox, justify, }: FullBannerProps): react.JSX.Element;
    displayName: string;
} & {
    Video: {
        ({ src }: FullBannerVideoProps): react.JSX.Element;
        displayName: string;
    };
};

export { FullBanner };
export type { FullBannerProps, FullBannerVideoProps };
