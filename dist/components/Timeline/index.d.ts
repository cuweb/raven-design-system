import * as react from 'react';

interface TimelineItemProps {
    title: string;
    as?: 'h2' | 'h3';
    children?: React.ReactNode;
    date: string;
}

interface TimelineProps {
    children: React.ReactNode;
}
declare const Timeline: {
    ({ children }: TimelineProps): react.JSX.Element;
    displayName: string;
} & {
    Item: ({ title, as, children, date }: TimelineItemProps) => react.JSX.Element;
};

export { Timeline };
export type { TimelineItemProps, TimelineProps };
