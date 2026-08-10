import './styles.scss';

export interface TableLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    numRow?: number;
    numCol?: number;
}

export const TableLoader = ({ numRow = 5, numCol = 5, ...rest }: TableLoaderProps) => {
    return (
        <div
            className="cu-loader cu-loader--table"
            role="status"
            aria-label="Loading content"
            {...rest}
        >
            {Array.from({ length: numRow }, (_, rowIndex) => (
                <div key={rowIndex} className="cu-loader__table-row" aria-hidden="true">
                    {Array.from({ length: numCol }, (_, colIndex) => (
                        <span
                            key={colIndex}
                            className={
                                rowIndex % 2 === 0
                                    ? 'cu-loader__table-cell'
                                    : 'cu-loader__table-cell cu-loader__table-cell--alt'
                            }
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
