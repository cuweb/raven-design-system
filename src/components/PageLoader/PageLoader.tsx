import './styles.scss';

export interface PageLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
}

export const PageLoader = ({ label = 'Loading', ...rest }: PageLoaderProps) => {
    return (
        <div className="cu-loader cu-loader--page" {...rest}>
            <span className="cu-loader__page-spinner" role="status" aria-label={label} />
        </div>
    );
};
