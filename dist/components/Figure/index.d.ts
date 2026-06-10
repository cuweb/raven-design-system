import React from 'react';

type FigureSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'full';
type FigureAlignType = 'left' | 'right' | 'center' | 'none';
interface FigureProps {
    children: React.ReactNode;
    caption?: string;
    size?: FigureSizeType;
    align?: FigureAlignType;
}
declare const Figure: ({ children, caption, size, align, }: FigureProps) => React.JSX.Element;

export { Figure };
export type { FigureProps };
