import React from 'react';

interface ImageCoverProps {
    children?: React.ReactNode;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    contentWidth?: boolean;
    image?: string;
    opacity?: number;
}
declare const ImageCover: ({ children, maxWidth, contentWidth, image, opacity, }: ImageCoverProps) => React.JSX.Element;

export { ImageCover };
