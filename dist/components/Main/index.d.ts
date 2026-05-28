import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface MainProps {
    children: React.ReactNode;
    as?: 'main' | 'div';
    hasPadding?: boolean;
    className?: string;
}
declare const Main: ({ children, as, hasPadding, className }: MainProps) => react_jsx_runtime.JSX.Element;

export { Main };
