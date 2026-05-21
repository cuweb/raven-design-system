import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare const justifyClasses: {
    start: string;
    end: string;
    center: string;
};

type ButtonGroupGap = 'sm' | 'md' | 'lg';
type ButtonGroupAlign = keyof typeof justifyClasses;
interface ButtonGroupProps {
    children: React.ReactNode;
    align?: ButtonGroupAlign;
}
declare const ButtonGroup: ({ children, align }: ButtonGroupProps) => react_jsx_runtime.JSX.Element;

export { ButtonGroup };
export type { ButtonGroupGap, ButtonGroupProps };
