import { default as React } from 'react';
import { justifyClasses } from '../../utils/propClasses';
export type ButtonGroupGap = 'sm' | 'md' | 'lg';
type ButtonGroupAlign = keyof typeof justifyClasses;
export interface ButtonGroupProps {
    children: React.ReactNode;
    align?: ButtonGroupAlign;
}
export declare const ButtonGroup: ({ children, align }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ButtonGroup.d.ts.map