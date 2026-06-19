import React from 'react';

interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    contentWidth?: boolean;
}
declare const Section: ({ children, as, isGrey, maxWidth, contentWidth, }: SectionProps) => React.JSX.Element;

export { Section };
