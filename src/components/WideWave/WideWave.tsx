import './styles.scss';

export interface WideWaveProps {
    children?: React.ReactNode;
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    contentWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
    color?: 'red' | 'black';
}

export const WideWave = ({
    children,
    maxWidth = 'alignfull',
    contentWidth = 'alignwide',
    color = 'black',
}: WideWaveProps) => {
    const rootClasses = [
        'cu-layout cu-widewave',
        'cu-widewave--' + color,
        'has-global-padding',
        maxWidth,
        'is-layout-constrained',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <section className={rootClasses} data-color-scheme="dark">
            <div className={`cu-widewave__wave alignfull`} />
            <div className={`has-global-padding ${contentWidth}`}>{children}</div>
        </section>
    );
};
