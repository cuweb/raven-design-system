import React from 'react';

declare const maxWidthClasses: {
    aligncontent: string;
    alignwide: string;
    alignfull: string;
};

type maxWidthKeys = keyof typeof maxWidthClasses;
interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: maxWidthKeys;
}
declare const Section: ({ children, as, isGrey, maxWidth, }: SectionProps) => React.JSX.Element;

export { Section };
