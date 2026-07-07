import { getDate, parse, format, isSameDay } from 'date-fns';

export interface ListingDateThumbProps {
    startDate: string;
    endDate: string;
}

/**
 * Visual-only date stamp. The date should also be present in Listing.EventMeta —
 * this thumb is aria-hidden so screen readers aren't given duplicate info.
 */
export const ListingDateThumb = ({ startDate, endDate }: ListingDateThumbProps) => {
    const eventStartDate = parse(startDate, 'yyyy-MM-dd HH:mm:ss', new Date());
    const eventEndDate = parse(endDate, 'yyyy-MM-dd HH:mm:ss', new Date());

    const eventStartMonth = format(eventStartDate, 'MMM');
    const eventStartDay = getDate(eventStartDate);
    const isMultiDay = !isSameDay(eventStartDate, eventEndDate);

    return (
        <div className="cu-listing__date-thumb" aria-hidden="true">
            {isMultiDay ? (
                <>
                    <span className="cu-listing__date-thumb-month">Multi</span>
                    <span className="cu-listing__date-thumb-day">Day</span>
                </>
            ) : (
                <>
                    <span className="cu-listing__date-thumb-month">{eventStartMonth}</span>
                    <span className="cu-listing__date-thumb-day">{eventStartDay}</span>
                </>
            )}
        </div>
    );
};

ListingDateThumb.displayName = 'Listing.DateThumb';
