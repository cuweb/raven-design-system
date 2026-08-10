import { gridColumnClasses } from '../../utils/propClasses';

export type RowLoaderCols = keyof typeof gridColumnClasses;

export interface RowLoaderProps {
    cols?: RowLoaderCols;
    fields?: number;
}

export const RowLoader = ({ cols, fields = 1 }: RowLoaderProps) => {
    const rowClasses = [
        'cu-loader__form-row',
        cols ? `cu-loader__form-row-${gridColumnClasses[cols]}` : 'cu-loader__form-row-stacked',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={rowClasses}>
            {Array.from({ length: fields }, (_, fieldIndex) => (
                <span key={fieldIndex} className="cu-loader__form-field" aria-hidden="true" />
            ))}
        </div>
    );
};

RowLoader.displayName = 'FormLoader.RowLoader';
