import { useRef, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import { useFilterPanel } from './FilterPanelContext';
import type { FilterGroup, SortOption } from './FilterPanelContext';

export interface FilterPanelTopProps {
  sortOptions?: SortOption[];
  filterOptions?: FilterGroup[];
}

export const FilterPanelTop = ({ sortOptions, filterOptions }: FilterPanelTopProps) => {
  const { sortBy, filterBy, openDropdown, setSortBy, toggleFilter, setOpenDropdown } =
    useFilterPanel();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (topRef.current && !topRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setOpenDropdown]);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="cu-filter-panel__top" ref={topRef}>
      <div className="cu-filter-panel__controls">
        {sortOptions && (
          <div className="cu-filter-panel__sort">
            <div className="cu-filter-panel__dropdown">
              <button
                type="button"
                id="cu-filter-panel-sort"
                className={[
                  'cu-filter-panel__dropdown-toggle',
                  openDropdown === 'sort' ? 'cu-filter-panel__dropdown-toggle--open' : undefined,
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-expanded={openDropdown === 'sort'}
                aria-haspopup="listbox"
                aria-controls="cu-filter-panel-sort-menu"
                onClick={() => toggleDropdown('sort')}
              >
                Sort
                <Icon name="chevron-down" size={14} />
              </button>

              {openDropdown === 'sort' && (
                <ul
                  id="cu-filter-panel-sort-menu"
                  className="cu-filter-panel__dropdown-menu"
                  role="listbox"
                  aria-labelledby="cu-filter-panel-sort"
                >
                  {sortOptions.map((option) => (
                    <li key={option.value} role="option" aria-selected={sortBy === option.value}>
                      <button
                        type="button"
                        className={[
                          'cu-filter-panel__sort-item',
                          sortBy === option.value
                            ? 'cu-filter-panel__sort-item--selected'
                            : undefined,
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() => {
                          setSortBy(option.value);
                          setOpenDropdown(null);
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {filterOptions && filterOptions.length > 0 && (
          <div className="cu-filter-panel__filters">
            {filterOptions.map((group, index) => {
              const activeGroupFilters = filterBy[group.id] ?? [];

              return (
                <div key={group.id} className="cu-filter-panel__filter-group">
                  {index > 0 && <span className="cu-filter-panel__divider" aria-hidden="true" />}

                  <div className="cu-filter-panel__dropdown">
                    <button
                      type="button"
                      id={`cu-filter-panel-${group.id}`}
                      className={[
                        'cu-filter-panel__dropdown-toggle',
                        openDropdown === group.id
                          ? 'cu-filter-panel__dropdown-toggle--open'
                          : undefined,
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      aria-expanded={openDropdown === group.id}
                      aria-controls={`cu-filter-panel-${group.id}-menu`}
                      onClick={() => toggleDropdown(group.id)}
                    >
                      {group.name}
                      {activeGroupFilters.length > 0 && (
                        <span
                          className="cu-filter-panel__count"
                          aria-label={`${activeGroupFilters.length} selected`}
                        >
                          {activeGroupFilters.length}
                        </span>
                      )}
                      <Icon name="chevron-down" size={14} />
                    </button>

                    {openDropdown === group.id && (
                      <ul
                        id={`cu-filter-panel-${group.id}-menu`}
                        className="cu-filter-panel__dropdown-menu"
                        aria-labelledby={`cu-filter-panel-${group.id}`}
                      >
                        {group.options.map((option) => {
                          const isChecked = activeGroupFilters.some(
                            (i) => i.value === option.value,
                          );

                          return (
                            <li key={option.value} className="cu-filter-panel__filter-item">
                              <input
                                type="checkbox"
                                id={`cu-filter-panel-${group.id}-${option.value}`}
                                checked={isChecked}
                                onChange={() =>
                                  toggleFilter(group.id, {
                                    value: option.value,
                                    label: option.label,
                                  })
                                }
                              />
                              <label htmlFor={`cu-filter-panel-${group.id}-${option.value}`}>
                                {option.label}
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

FilterPanelTop.displayName = 'FilterPanel.Top';
