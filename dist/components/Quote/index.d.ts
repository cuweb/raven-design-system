import * as react from 'react';

interface QuoteProps {
    children?: React.ReactNode;
    cite?: string;
    graphic?: 'border' | 'quote';
    isCenter?: boolean;
}
declare const Quote: ({ children, cite, graphic, isCenter }: QuoteProps) => react.JSX.Element;

export { Quote };
export type { QuoteProps };
