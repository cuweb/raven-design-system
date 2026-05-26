import { default as React } from 'react';
import { justifyClasses, maxWidthClasses } from '../../utils/propClasses';
type JustifyKeys = keyof typeof justifyClasses;
type MaxWidthKeys = keyof typeof maxWidthClasses;
export interface CallOutProps {
    children?: React.ReactNode;
    title: string;
    as?: 'h2' | 'h3';
    justify?: JustifyKeys;
    maxWidth?: MaxWidthKeys;
}
export declare const CallOut: ({ children, title, as, justify, maxWidth, }: CallOutProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CallOut.d.ts.map