import './styles.scss';

export interface PaginationLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    pageCount?: number;
    hasBorder?: boolean;
}

export const PaginationLoader = ({ pageCount = 5, hasBorder, ...rest }: PaginationLoaderProps) => {
    const wrapperClasses = [
        'cu-loader',
        'cu-loader--pagination',
        hasBorder ? 'cu-loader--pagination-bordered' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={wrapperClasses} role="status" aria-label="Loading content" {...rest}>
            <span className="cu-loader__pagination-arrow" aria-hidden="true" />
            <ul className="cu-loader__pagination-list" aria-hidden="true">
                {Array.from({ length: pageCount }, (_, index) => (
                    <li key={index} className="cu-loader__pagination-item">
                        <span className="cu-loader__pagination-page" />
                    </li>
                ))}
            </ul>
            <span className="cu-loader__pagination-arrow" aria-hidden="true" />
        </div>
    );
};
