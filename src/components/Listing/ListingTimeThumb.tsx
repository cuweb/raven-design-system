export interface ListingTimeThumbProps {
    value: string | number;
    unit?: string;
}

/**
 * Visual-only duration/countdown stamp. The value should also be present in
 * Listing.Excerpt — this thumb is aria-hidden so screen readers aren't given
 * duplicate info.
 */
export const ListingTimeThumb = ({ value, unit = 'min' }: ListingTimeThumbProps) => {
    return (
        <div className="cu-listing__time-thumb" aria-hidden="true">
            <span className="cu-listing__time-thumb-value">{value}</span>
            {value !== 'Now' && <span className="cu-listing__time-thumb-unit">{unit}</span>}
        </div>
    );
};

ListingTimeThumb.displayName = 'Listing.TimeThumb';
