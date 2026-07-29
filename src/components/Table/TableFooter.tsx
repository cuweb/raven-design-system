import type { ColumnDefinitionType } from './Table';

interface TableFooterProps {
    columns: ColumnDefinitionType[];
    noWordBreak: boolean;
}

const TableFooter = ({ columns, noWordBreak }: TableFooterProps) => {
    return (
        <tfoot className="cu-table__foot">
            <tr>
                {columns.map((column, index) => {
                    const headerClasses = [
                        'cu-table__header-cell',
                        noWordBreak ? 'cu-table__header-cell--no-wrap' : undefined,
                    ]
                        .filter(Boolean)
                        .join(' ');

                    return (
                        <th scope="col" key={`footerCell-${index}`} className={headerClasses}>
                            {column.header}
                        </th>
                    );
                })}
            </tr>
        </tfoot>
    );
};

export default TableFooter;
