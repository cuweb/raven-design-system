import { useEffect, useRef } from 'react';
import { useSortableTable } from '../../hooks/useSortableTable';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import './styles.scss';

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
}

export const Table = ({
  data,
  columns,
  colgroup,
  hasStripes = false,
  noWordBreak = false,
  enableRowHeader = false,
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

  return (
    <div className="cu-table">
      <table className={colgroup ? 'cu-table__table cu-table__table--fixed' : 'cu-table__table'}>
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
