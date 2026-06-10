import React from 'react';

interface BodyProps {
    children: React.ReactNode;
    className?: string;
}
declare const Body: ({ children, className }: BodyProps) => React.JSX.Element;

export { Body };
