import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface PageHeaderProps {
    children?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3';
    preHeader?: string;
    header: string;
    content?: string;
    metaData?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'primary';
    isWhite?: boolean;
    isCenter?: boolean;
    noUnderline?: boolean;
    pronoun?: string;
}
declare const PageHeader: ({ children, as: As, preHeader, header, content, metaData, size, isWhite, isCenter, noUnderline, pronoun, }: PageHeaderProps) => react_jsx_runtime.JSX.Element;

export { PageHeader };
export type { PageHeaderProps };
