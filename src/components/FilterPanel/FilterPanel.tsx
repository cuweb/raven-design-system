import { useState, useRef, useCallback } from 'react';
import { FilterPanelContext } from './FilterPanelContext';
import type { ActiveFilterItem, ActiveFilters } from './FilterPanelContext';
import { FilterPanelTop } from './FilterPanelTop';
import { FilterPanelBottom } from './FilterPanelBottom';
import './styles.scss';

export interface FilterPanelProps {
  children: React.ReactNode;
  onFilterChange?: (filters: ActiveFilters) => void;
}

const toExternal = (
  currentSortBy: string,
  currentFilterBy: Record<string, ActiveFilterItem[]>,
): ActiveFilters => ({
  sortBy: currentSortBy,
  filterBy: Object.fromEntries(
    Object.entries(currentFilterBy).map(([k, v]) => [k, v.map((i) => i.value)]),
  ),
});

export const FilterPanelWrapper = ({ children, onFilterChange }: FilterPanelProps) => {
  const [sortBy, setSortByState] = useState('');
  const [filterBy, setFilterBy] = useState<Record<string, ActiveFilterItem[]>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const sortByRef = useRef('');

  const setSortBy = useCallback(
    (value: string) => {
      sortByRef.current = value;
      setSortByState(value);
      setFilterBy((prev) => {
        onFilterChange?.(toExternal(value, prev));
        return prev;
      });
    },
    [onFilterChange],
  );

  const toggleFilter = useCallback(
    (filterType: string, item: ActiveFilterItem) => {
      setFilterBy((prev) => {
        const current = prev[filterType] ?? [];
        const exists = current.some((i) => i.value === item.value);
        const next = exists ? current.filter((i) => i.value !== item.value) : [...current, item];
        const updated = { ...prev, [filterType]: next };
        onFilterChange?.(toExternal(sortByRef.current, updated));
        return updated;
      });
    },
    [onFilterChange],
  );

  const removeFilter = useCallback(
    (filterType: string, value: string) => {
      setFilterBy((prev) => {
        const updated = {
          ...prev,
          [filterType]: (prev[filterType] ?? []).filter((i) => i.value !== value),
        };
        onFilterChange?.(toExternal(sortByRef.current, updated));
        return updated;
      });
    },
    [onFilterChange],
  );

  const hasFilters = Object.values(filterBy).some((items) => items.length > 0);

  return (
    <FilterPanelContext.Provider
      value={{ sortBy, filterBy, openDropdown, setSortBy, toggleFilter, removeFilter, setOpenDropdown }}
    >
      <div className={['cu-filter-panel', hasFilters ? 'cu-filter-panel--has-filters' : undefined].filter(Boolean).join(' ')}>
        {children}
      </div>
    </FilterPanelContext.Provider>
  );
};

export const FilterPanel = Object.assign(FilterPanelWrapper, {
  Top: FilterPanelTop,
  Bottom: FilterPanelBottom,
});

FilterPanelWrapper.displayName = 'FilterPanel';
