import * as react from 'react';

interface WideWaveProps {
    children?: React.ReactNode;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    contentWidth?: boolean;
    color?: 'red' | 'black';
}
declare const WideWave: ({ children, maxWidth, contentWidth, color }: WideWaveProps) => react.JSX.Element;

export { WideWave };
