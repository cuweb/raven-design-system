import { default as React } from 'react';
export interface PageHeaderProps {
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
export declare const PageHeader: ({ children, as: As, preHeader, header, content, metaData, size, isWhite, isCenter, noUnderline, pronoun, }: PageHeaderProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PageHeader.d.ts.map