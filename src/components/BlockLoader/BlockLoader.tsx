import { gridColumnClasses } from '../../utils/propClasses';
import './styles.scss';

type GridColumnKeys = keyof typeof gridColumnClasses;

const blockCounts: Record<GridColumnKeys, number> = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '1/3': 2,
    '2/3': 2,
};

export interface BlockLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    height?: number;
    cols?: GridColumnKeys;
}

export const BlockLoader = ({ height = 100, cols = '1', ...rest }: BlockLoaderProps) => {
    const blockCount = blockCounts[cols];

    return (
        <div
            className={`cu-loader cu-loader--block cu-loader--block-${gridColumnClasses[cols]}`}
            role="status"
            aria-label="Loading content"
            {...rest}
        >
            {Array.from({ length: blockCount }).map((_, index) => (
                <div
                    key={index}
                    className="cu-loader__block"
                    aria-hidden="true"
                    style={{ height: `${height}px` }}
                />
            ))}
        </div>
    );
};
