import React from 'react';

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
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
}
declare const Column: {
    ({ children, cols, maxWidth }: ColumnProps): React.JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, isFirst }: ColumnContentProps): React.JSX.Element;
        displayName: string;
    };
};

export { Column };
