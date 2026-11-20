import { gridColumnClasses } from '../../utils/propClasses';
import './styles.scss';

export interface GridGroupProps {
    children: React.ReactNode;
    cols?: '1' | '2' | '3';
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
}

export const GridGroup = ({ children, cols = '3', maxWidth = 'aligncontent' }: GridGroupProps) => {
    const rootClasses = [
        `cu-layout cu-gridgroup cu-gridgroup--${gridColumnClasses[cols]}`,
        maxWidth,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={rootClasses}>{children}</div>;
};
