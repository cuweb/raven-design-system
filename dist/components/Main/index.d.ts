import React from 'react';

interface MainProps {
    children: React.ReactNode;
    as?: 'main' | 'div';
    hasPadding?: boolean;
    className?: string;
}
declare const Main: ({ children, as, hasPadding, className }: MainProps) => React.JSX.Element;

export { Main };
