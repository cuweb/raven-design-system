import { default as React } from 'react';
type FigureSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'full';
type FigureAlignType = 'left' | 'right' | 'center' | 'none';
export interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: FigureSizeType;
    align?: FigureAlignType;
}
export declare const Figure: ({ children, caption, size, align, }: FigureProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Figure.d.ts.map