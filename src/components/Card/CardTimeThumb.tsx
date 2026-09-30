export interface CardTimeThumbProps {
    value: string | number;
    unit?: string;
}

/**
 * Visual-only duration/countdown stamp. The value should also be present in
 * Card.Excerpt — this thumb is aria-hidden so screen readers aren't given
 * duplicate info.
 */
export const CardTimeThumb = ({ value, unit = 'min' }: CardTimeThumbProps) => {
    return (
        <div className="cu-card__time-thumb" aria-hidden="true">
            <span className="cu-card__time-thumb-value">{value}</span>
            {value !== 'Now' && <span className="cu-card__time-thumb-unit">{unit}</span>}
        </div>
    );
};

CardTimeThumb.displayName = 'Card.TimeThumb';
