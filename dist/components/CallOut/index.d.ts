import React from 'react';

declare const maxWidthClasses: {
    aligncontent: string;
    alignwide: string;
    alignfull: string;
};
declare const justifyClasses: {
    start: string;
    end: string;
    center: string;
};

type JustifyKeys = keyof typeof justifyClasses;
type MaxWidthKeys = keyof typeof maxWidthClasses;
interface CallOutProps {
    children?: React.ReactNode;
    title: string;
    as?: 'h2' | 'h3';
    justify?: JustifyKeys;
    maxWidth?: MaxWidthKeys;
}
declare const CallOut: ({ children, title, as, justify, maxWidth, }: CallOutProps) => React.JSX.Element;

export { CallOut };
export type { CallOutProps };
