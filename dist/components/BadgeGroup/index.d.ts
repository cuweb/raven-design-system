import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface BadgeGroupProps {
    children: React.ReactNode;
    isAbsolute?: boolean;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}
declare const BadgeGroup: ({ children, isAbsolute, top, right, bottom, left, }: BadgeGroupProps) => react_jsx_runtime.JSX.Element;

export { BadgeGroup };
export type { BadgeGroupProps };
