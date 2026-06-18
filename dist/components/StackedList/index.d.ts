import * as react from 'react';

interface StackedListProps {
    children: React.ReactNode;
    as?: 'ul' | 'div';
    cols?: '1' | '2';
    header?: string;
    noShadow?: boolean;
}
declare const StackedList: ({ children, as: ListComponent, cols, header, noShadow, }: StackedListProps) => react.JSX.Element;

export { StackedList };
export type { StackedListProps };
