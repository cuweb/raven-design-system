import React from 'react';

interface AsideProps {
    children: React.ReactNode;
    isSticky?: boolean;
    topSpace?: number;
}
declare const Aside: ({ children, isSticky, topSpace }: AsideProps) => React.JSX.Element;

export { Aside };
