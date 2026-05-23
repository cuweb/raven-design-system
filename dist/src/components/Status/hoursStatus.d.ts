export interface HoursStatus {
    variant: 'success' | 'warning' | 'error';
    label: string;
}
/**
 * Compute a Status-ready `{ variant, label }` from operating hours.
 *
 * Variant rules:
 *   - error   — current time is before open or after close
 *   - warning — within 60 minutes of close
 *   - success — open with more than 60 minutes remaining
 *
 * `open` and `close` are 24h strings like `'07:00'` and `'20:00'`. Assumes
 * close is later than open on the same day; venues that wrap past midnight
 * aren't modelled here yet.
 */
export declare const formatHoursStatus: (open: string, close: string, now?: Date) => HoursStatus;
//# sourceMappingURL=hoursStatus.d.ts.map