import * as react from 'react';

interface WideImageSignupProps {
    buttonText?: string;
}

declare const maxWidthClasses: {
    aligncontent: string;
    alignwide: string;
    alignfull: string;
};

type maxWidthKeys = keyof typeof maxWidthClasses;
interface WideImageProps {
    children?: React.ReactNode;
    title: string;
    content?: string;
    image?: string;
    headerType?: 'h1' | 'h2';
    opacity?: number;
    focalPointX?: number;
    focalPointY?: number;
    isType?: 'light' | 'dark' | 'image';
    maxWidth?: maxWidthKeys;
}
declare const WideImage: {
    ({ children, title, content, image, headerType, opacity, focalPointX, focalPointY, isType, maxWidth, }: WideImageProps): react.JSX.Element;
    displayName: string;
} & {
    Signup: {
        ({ buttonText }: WideImageSignupProps): react.JSX.Element;
        displayName: string;
    };
};

export { WideImage };
export type { WideImageProps, WideImageSignupProps };
