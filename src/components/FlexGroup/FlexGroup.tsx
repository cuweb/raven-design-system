import './styles.scss';

export interface FlexGroupProps {
    children: React.ReactNode;
    direction?: 'row' | 'column';
    wrap?: 'wrap' | 'nowrap';
    justify?: 'start' | 'center' | 'end' | 'space-between';
    align?: 'start' | 'center' | 'end' | 'stretch';
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
}

export const FlexGroup = ({
    children,
    direction = 'row',
    wrap = 'wrap',
    justify,
    align,
    maxWidth = 'aligncontent',
}: FlexGroupProps) => {
    const rootClasses = [
        'cu-layout cu-flexgroup',
        direction === 'column' && 'cu-flexgroup--column',
        wrap === 'nowrap' && 'cu-flexgroup--nowrap',
        justify && `cu-flexgroup--justify-${justify}`,
        align && `cu-flexgroup--align-${align}`,
        maxWidth,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={rootClasses}>{children}</div>;
};
