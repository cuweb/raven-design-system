import * as react from 'react';

interface ImageCoverProps {
    children?: React.ReactNode;
    image?: string;
    opacity?: number;
    focalPointX?: number;
    focalPointY?: number;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    contentWidth?: boolean;
}
declare const ImageCover: ({ children, image, opacity, focalPointX, focalPointY, maxWidth, contentWidth, }: ImageCoverProps) => react.JSX.Element;

export { ImageCover };
export type { ImageCoverProps };
