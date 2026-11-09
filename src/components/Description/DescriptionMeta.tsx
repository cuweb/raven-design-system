export interface DescriptionMetaProps {
    term?: string;
    children: React.ReactNode;
    useColumns?: boolean;
}

export const DescriptionMeta = ({ term, children, useColumns = false }: DescriptionMetaProps) => {
    const classes = [
        'cu-description__item',
        useColumns ? 'cu-description__item--columns' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <dl className={classes}>
            <dt className="cu-description__term">{term}</dt>
            <dd className="cu-description__content">{children}</dd>
        </dl>
    );
};

DescriptionMeta.displayName = 'Description.Meta';
