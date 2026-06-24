import { createContext, useContext } from 'react';

export interface SortOption {
  label: string;
  value: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

export interface ActiveFilters {
  sortBy: string;
  filterBy: Record<string, string[]>;
}

export interface ActiveFilterItem {
  value: string;
  label: string;
}

export interface FilterPanelContextValue {
  sortBy: string;
  filterBy: Record<string, ActiveFilterItem[]>;
  openDropdown: string | null;
  setSortBy: (value: string) => void;
  toggleFilter: (filterType: string, item: ActiveFilterItem) => void;
  removeFilter: (filterType: string, value: string) => void;
  setOpenDropdown: (id: string | null) => void;
}

export const FilterPanelContext = createContext<FilterPanelContextValue | null>(null);

export const useFilterPanel = (): FilterPanelContextValue => {
  const ctx = useContext(FilterPanelContext);
  if (!ctx) {
    throw new Error('useFilterPanel must be used within a FilterPanel');
  }
  return ctx;
};
