import * as react from 'react';

declare const maxWidthClasses: {
    aligncontent: string;
    alignwide: string;
    alignfull: string;
};

type MaxWidthKeys = keyof typeof maxWidthClasses;
interface ImageCoverProps {
    children?: React.ReactNode;
    image?: string;
    opacity?: number;
    focalPointX?: number;
    focalPointY?: number;
    maxWidth?: MaxWidthKeys;
}
declare const ImageCover: ({ children, image, opacity, focalPointX, focalPointY, maxWidth, }: ImageCoverProps) => react.JSX.Element;

export { ImageCover };
export type { ImageCoverProps };
