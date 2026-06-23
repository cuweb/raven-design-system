import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import type { ColumnDefinitionType } from './Table';

interface TableHeaderProps {
  columns: ColumnDefinitionType[];
  noWordBreak: boolean;
  sortData: (key: string, asc: boolean) => void;
}

const TableHeader = ({ columns, noWordBreak, sortData }: TableHeaderProps) => {
  const defaultColumn = columns.find((col) => col.default);
  const [ascending, setAscending] = useState(defaultColumn?.order !== 'descending');
  const [active, setActive] = useState(defaultColumn?.key ?? '');

  const handleSortChange = (key: string) => {
    const asc = key === active ? !ascending : true;
    setActive(key);
    setAscending(asc);
    sortData(key, asc);
  };

  return (
    <thead className="cu-table__head">
      <tr>
        {columns.map((column, index) => {
          const isSortable = column.sort?.sortable;
          const isActive = column.key === active;
          const headerClasses = [
            'cu-table__header-cell',
            isSortable ? 'cu-table__header-cell--sortable' : undefined,
            noWordBreak ? 'cu-table__header-cell--no-wrap' : undefined,
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <th
              scope="col"
              key={`headerCell-${index}`}
              className={headerClasses}
              onClick={() => (isSortable ? handleSortChange(column.key) : undefined)}
              aria-sort={
                isActive && ascending
                  ? 'ascending'
                  : isActive && !ascending
                    ? 'descending'
                    : undefined
              }
            >
              {isSortable ? (
                <div className="cu-table__header-cell-inner">
                  <span>{column.header}</span>
                  <button
                    className="cu-table__sort-btn"
                    aria-label={
                      isActive && ascending
                        ? `Sort ${column.key} descending`
                        : isActive && !ascending
                          ? `Sort ${column.key} ascending`
                          : `Sort by ${column.key}`
                    }
                  >
                    {isActive && ascending ? (
                      <Icon name="chevron-down" size={12} aria-hidden="true" />
                    ) : isActive && !ascending ? (
                      <Icon name="chevron-up" size={12} aria-hidden="true" />
                    ) : (
                      <Icon name="chevron-up-down" size={12} aria-hidden="true" />
                    )}
                  </button>
                </div>
              ) : (
                column.header
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
