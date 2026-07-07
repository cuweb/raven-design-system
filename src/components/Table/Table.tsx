import { useEffect, useRef } from 'react';
import { useSortableTable } from '../../hooks/useSortableTable';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import { maxWidthClasses } from '../../utils/propClasses';
import './styles.scss';

type MaxWidthKeys = keyof typeof maxWidthClasses;

export interface ColumnDefinitionType {
    key: string;
    header: string | React.ReactNode;
    sort?: { sortable: boolean };
    order?: 'ascending' | 'descending';
    default?: true;
}

export interface TableProps {
    data: { [k: string]: string | number | React.ReactElement }[];
    columns: ColumnDefinitionType[];
    colgroup?: number[];
    hasStripes?: boolean;
    noWordBreak?: boolean;
    enableRowHeader?: boolean;
    maxWidth?: MaxWidthKeys;
}

export const Table = ({
    data,
    columns,
    colgroup,
    hasStripes = false,
    noWordBreak = false,
    enableRowHeader = false,
    maxWidth = 'aligncontent',
}: TableProps) => {
    const [tableData, setTableData] = useSortableTable(data);

    const hasMounted = useRef(false);
    useEffect(() => {
        if (!hasMounted.current) {
            const defaultColumn = columns.find((col) => col.default);
            if (defaultColumn) {
                setTableData(defaultColumn.key, defaultColumn.order === 'ascending');
            }
            hasMounted.current = true;
        }
    }, [columns, setTableData]);

    const rootClasses = ['cu-table', maxWidth ? maxWidthClasses[maxWidth] : '']
        .filter(Boolean)
        .join(' ');

    return (
        <div className={rootClasses}>
            {/* <div className="cu-table"> */}
            <table
                className={colgroup ? 'cu-table__table cu-table__table--fixed' : 'cu-table__table'}
            >
                {colgroup && (
                    <colgroup>
                        {colgroup.map((width, index) => (
                            <col key={`col-${index}`} style={{ width: `${width}%` }} />
                        ))}
                    </colgroup>
                )}
                <TableHeader columns={columns} noWordBreak={noWordBreak} sortData={setTableData} />
                <TableRows
                    data={tableData}
                    columns={columns}
                    striped={hasStripes}
                    enableRowHeader={enableRowHeader}
                />
            </table>
        </div>
    );
};
