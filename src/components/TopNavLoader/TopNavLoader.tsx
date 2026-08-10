import './styles.scss';

export interface TopNavLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
}

export const TopNavLoader = ({ label = 'Loading', ...rest }: TopNavLoaderProps) => {
    return (
        <div className="cu-loader cu-loader--topnav" role="status" {...rest}>
            <span className="cu-loader__topnav-spinner" aria-hidden="true" />
            <span className="sr-only">{label}</span>
        </div>
    );
};
