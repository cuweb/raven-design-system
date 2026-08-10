export interface DescriptionLoaderMetaProps {
    rows?: number;
    useColumns?: boolean;
}

export const DescriptionLoaderMeta = ({
    rows = 1,
    useColumns = false,
}: DescriptionLoaderMetaProps) => {
    const itemClasses = [
        'cu-loader__description-item',
        useColumns ? 'cu-loader__description-item--columns' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <>
            {Array.from({ length: rows }, (_, rowIndex) => (
                <div key={rowIndex} className={itemClasses} aria-hidden="true">
                    <span className="cu-loader__description-term" />
                    <span className="cu-loader__description-content" />
                </div>
            ))}
        </>
    );
};

DescriptionLoaderMeta.displayName = 'DescriptionLoader.Meta';
