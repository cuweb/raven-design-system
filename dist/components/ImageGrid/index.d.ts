import * as react from 'react';

type ColSpanType = '1' | '2' | '3' | '4';
type RowSpanType = '1' | '2' | '3' | '4';
type AspectRatioType = 'landscape' | 'portrait' | 'square' | 'wide';
interface ImageGridImageProps {
    imageUrl: string;
    focalPointX?: number;
    focalPointY?: number;
    colSpan?: ColSpanType;
    rowSpan?: RowSpanType;
    aspectRatio?: AspectRatioType;
    title?: string;
    content?: string;
    link?: string;
}
declare const ImageGridImage: {
    ({ imageUrl, focalPointX, focalPointY, colSpan, rowSpan, aspectRatio, title, content, link, }: ImageGridImageProps): react.JSX.Element;
    displayName: string;
};

declare const gridColumnClasses: {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '1/3': string;
    '2/3': string;
};

type GridColumnKeys = keyof typeof gridColumnClasses;
type GapType = 'none' | 'sm' | 'md' | 'lg';
interface ImageGridProps {
    children: React.ReactNode;
    cols?: GridColumnKeys;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    gap?: GapType;
}
declare const ImageGridWrapper: {
    ({ children, cols, maxWidth, gap, }: ImageGridProps): react.JSX.Element;
    displayName: string;
};
declare const ImageGrid: {
    ({ children, cols, maxWidth, gap, }: ImageGridProps): react.JSX.Element;
    displayName: string;
} & {
    Image: {
        ({ imageUrl, focalPointX, focalPointY, colSpan, rowSpan, aspectRatio, title, content, link, }: ImageGridImageProps): react.JSX.Element;
        displayName: string;
    };
};

export { ImageGrid, ImageGridImage, ImageGridWrapper };
export type { ImageGridImageProps, ImageGridProps };
