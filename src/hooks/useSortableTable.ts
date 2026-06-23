import { useState, useMemo } from 'react';

interface DataProps {
  [k: string]: string | number | React.ReactElement;
}

export const useSortableTable = (data: DataProps[]) => {
  const [sortKey, setSortKey] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const tableData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      if (a[sortKey] === null) return 1;
      if (b[sortKey] === null) return -1;
      if (a[sortKey] === null && b[sortKey] === null) return 0;
      return (
        a[sortKey].toString().localeCompare(b[sortKey].toString(), 'en', {
          numeric: true,
        }) * (sortAsc ? 1 : -1)
      );
    });
  }, [data, sortKey, sortAsc]);

  const sortTableData = (orderBy: string, asc: boolean) => {
    setSortKey(orderBy);
    setSortAsc(asc);
  };

  return [tableData, sortTableData] as const;
};
