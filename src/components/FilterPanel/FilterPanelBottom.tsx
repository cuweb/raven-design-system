import { Icon } from '../Icon/Icon';
import { useFilterPanel } from './FilterPanelContext';

export const FilterPanelBottom = () => {
    const { filterBy, removeFilter } = useFilterPanel();

    const activeTags = Object.entries(filterBy).flatMap(([filterType, items]) =>
        items.map((item) => ({ filterType, ...item })),
    );

    if (activeTags.length === 0) return null;

    return (
        <div className="cu-filter-panel__bottom">
            <span className="cu-filter-panel__active-label">Active filters:</span>
            <div className="cu-filter-panel__active-filters">
                {activeTags.map(({ filterType, value, label }) => (
                    <span key={`${filterType}-${value}`} className="cu-filter-panel__tag">
                        {label}
                        <button
                            type="button"
                            className="cu-filter-panel__tag-remove"
                            onClick={() => removeFilter(filterType, value)}
                            aria-label={`Remove filter: ${label}`}
                        >
                            <Icon name="xmark" size={10} />
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};

FilterPanelBottom.displayName = 'FilterPanel.Bottom';
