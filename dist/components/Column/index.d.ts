import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ColumnContentProps {
    children: React.ReactNode;
    isFirst?: boolean;
}

declare const gridColumnClasses: {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '1/3': string;
    '2/3': string;
};

type gridColumnKeys = keyof typeof gridColumnClasses;
interface ColumnProps {
    children: React.ReactNode;
    cols?: gridColumnKeys;
}
declare const Column: {
    ({ children, cols }: ColumnProps): react_jsx_runtime.JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, isFirst }: ColumnContentProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

export { Column };
