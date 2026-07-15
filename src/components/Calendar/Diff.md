# Calendar — Diff (Legacy RDS → RDS2)

## Summary

RDS2's `Calendar` merges the legacy `Calendar` (single-day selection) and `MultiDayCalendar`
(range selection) into one component, switched via a new `mode?: 'single' | 'range'` prop. The
required `callback` prop (with two different signatures across the two legacy components) was
unified into a single optional `onSelect` prop; the day grid gained explicit `grid`/`row`/
`gridcell` ARIA semantics and `aria-pressed` state that neither legacy component had; and styling
moved from Tailwind + a `classNames` helper to `cu-calendar__*` BEM/SCSS classes.

## Props Changes

| Prop                    | Legacy                                                                                                                           | RDS2                                                                              | Change                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| `mode`                  | _n/a_ — selection behavior was determined by which component you used (`Calendar` = single, `MultiDayCalendar` = range)          | `mode?: 'single' \| 'range'`, default `'single'`                                  | Added — replaces choosing between two components  |
| `callback` → `onSelect` | `callback: (d: Date) => void` (required, `Calendar`) / `callback: (selectedDays: Date[]) => void` (required, `MultiDayCalendar`) | `onSelect?: (value: Date \| Date[]) => void` (optional, single unified signature) | Renamed, made optional, unified across both modes |
| `events`                | `events?: { id, name, imageUrl, startDatetime, endDatetime }[]` (inline type, both)                                              | `events?: CalendarEvent[]` (same shape, now an exported named type)               | Type now named/exported                           |
| `defaultDate`           | `defaultDate?: string` (both)                                                                                                    | `defaultDate?: string`                                                            | Unchanged                                         |

## Deprecations

- `MultiDayCalendar` — no longer exists as a separate component; use `Calendar` with
  `mode="range"` instead.
- `callback` — replaced by `onSelect`; there is no prop that preserves the old required,
  mode-specific callback signatures.

## Behavioral / Styling Changes

- Component merge: two separate components/exports (`Calendar`, `MultiDayCalendar`) → a single
  `Calendar` component with a `mode` prop; `RDS2` has no standalone multi-day calendar export.
- Event indicator bug fix in range mode: legacy `MultiDayCalendar`'s event dot only checked
  `isSameDay(event.startDatetime, day)`, so a multi-day event's dot only appeared on its start
  day. RDS2 uses the more thorough check (`isSameDay(start, day) || isSameDay(end, day) ||
isWithinInterval(day, { start, end })`) — the same logic the legacy single-day `Calendar`
  already had — for both `single` and `range` modes, so multi-day events now show a dot across
  their entire span in range mode too.
- "Clear" button visibility: legacy tracked a separate `showClear` boolean that started `false`
  even when a `defaultDate` pre-selected a day, so the clear button was hidden until the user
  made a new click. RDS2 derives visibility from `hasSelection = selectedDays.length > 0`, so if
  `defaultDate` is set, the clear button is visible immediately on mount.
- "Clear" button label changed from `"Clear Calendar"` to `"Clear selection"`.
- "Clear" button wrapper: legacy `Calendar` (single) wrapped it in a plain `<div className="mt-4">`;
  legacy `MultiDayCalendar` wrapped it in `<ButtonGroup align="center">`. RDS2 uses a single
  `<div className="cu-calendar__clear">` for both modes (no `ButtonGroup`).
- Accessibility — day grid: legacy rendered a flat CSS grid of day cells with no grid-related
  ARIA roles. RDS2 groups days into week rows and adds `role="grid"` (with an `aria-label` of the
  current month) on the grid container, `role="row"` per week, `role="gridcell"` per day, and
  `aria-pressed` on each day button reflecting selection state.
- Accessibility — nav buttons: legacy exposed the accessible label via a visually-hidden
  `<span className="sr-only">Previous/Next month</span>` inside the button. RDS2 sets
  `aria-label="Previous month"` / `"Next month"` directly on the button instead, with no sr-only
  span.
- Accessibility — weekday header: legacy rendered seven literal `<div>` letters with no ARIA
  treatment. RDS2 renders them from an array inside a container with `aria-hidden="true"` (the
  grid's day-of-week semantics are instead conveyed via the `gridcell`/`row` structure).
- Nav icon size: legacy passed `size={20}` to the chevron `<Icon>`; RDS2 passes `size={12}`.
- Class naming: Tailwind utility classes composed through a local `classNames(...)` helper
  (`bg-cu-red text-white`, `hover:bg-cu-red hover:text-white`, `disabled:bg-cu-black-50`, etc.) →
  `cu-calendar__*` BEM modifier classes (`cu-calendar__day-btn--selected`, `--in-range`,
  `--today`, `--disabled`, `--outside-month`), styled with `var(--rds--*)` tokens.
