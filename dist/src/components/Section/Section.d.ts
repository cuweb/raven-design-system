import { default as React } from 'react';
import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: maxWidthKeys;
}
export declare const Section: ({ children, as, isGrey, maxWidth, }: SectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Section.d.ts.map