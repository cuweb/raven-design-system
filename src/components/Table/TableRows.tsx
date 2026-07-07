import type { ColumnDefinitionType } from './Table';

interface TableRowsProps {
    data: { [k: string]: string | number | React.ReactElement }[];
    columns: ColumnDefinitionType[];
    striped: boolean;
    enableRowHeader: boolean;
}

const TableRows = ({ data, columns, striped, enableRowHeader }: TableRowsProps) => {
    return (
        <tbody>
            {data.map((row, rowIndex) => (
                <tr
                    className={['cu-table__row', striped ? 'cu-table__row--striped' : undefined]
                        .filter(Boolean)
                        .join(' ')}
                    key={`row-${rowIndex}`}
                >
                    {columns.map((column, colIndex) => {
                        const cellContent = row[column.key];
                        return enableRowHeader && colIndex === 0 ? (
                            <th scope="row" key={`cell-${colIndex}`} className="cu-table__cell">
                                {cellContent}
                            </th>
                        ) : (
                            <td key={`cell-${colIndex}`} className="cu-table__cell">
                                {cellContent}
                            </td>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};

export default TableRows;
