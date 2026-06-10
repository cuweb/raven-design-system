import React from 'react';

declare const justifyClasses: {
    start: string;
    end: string;
    center: string;
};

type ButtonGroupAlign = keyof typeof justifyClasses;
interface ButtonGroupProps {
    children: React.ReactNode;
    align?: ButtonGroupAlign;
}
declare const ButtonGroup: ({ children, align }: ButtonGroupProps) => React.JSX.Element;

export { ButtonGroup };
export type { ButtonGroupProps };
