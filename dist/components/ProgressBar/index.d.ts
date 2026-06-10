import * as react from 'react';

interface ProgressBarProps {
    value: number;
    max?: number;
    label: string;
}
declare const ProgressBar: ({ value, max, label }: ProgressBarProps) => react.JSX.Element;

export { ProgressBar };
export type { ProgressBarProps };
