import * as react from 'react';

interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    bgType?: 'grey' | 'black' | 'light-gradient';
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    contentWidth?: boolean;
    isHero?: boolean;
}
declare const Section: ({ children, as, bgType, maxWidth, contentWidth, isHero, }: SectionProps) => react.JSX.Element;

export { Section };
