import './styles.scss';

export interface StackedListProps {
    children: React.ReactNode;
    as?: 'ul' | 'div';
    cols?: '1' | '2';
    header?: string;
    noShadow?: boolean;
}

export const StackedList = ({
    children,
    as: ListComponent = 'ul',
    cols = '2',
    header,
    noShadow = false,
}: StackedListProps) => {
    const wrapperClasses = [
        'cu-layout cu-stackedlist',
        noShadow ? 'cu-stackedlist--no-shadow' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={wrapperClasses}>
            {header && <h2 className="cu-stackedlist__header">{header}</h2>}
            <ListComponent className={`cu-stackedlist__list cu-stackedlist--cols-${cols}`}>
                {children}
            </ListComponent>
        </div>
    );
};
