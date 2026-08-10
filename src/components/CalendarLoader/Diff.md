# CalendarLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens. The DOM structure now
mirrors RDS2's `Calendar` component (header, weekday row, week-based day grid with column-start
offsets) instead of the legacy's flat day grid, so the skeleton visually matches the real component
it precedes. `showClearButton` is unchanged in name/type but now renders the rebuilt RDS2
`ButtonLoader` (via its `count`/`isSmall` props) instead of the legacy `ButtonLoader`
(`number`/`isSmall`). The component now spreads `...rest` HTML attributes and adds
`role="status"`/`aria-label` for loading-state semantics.

## Props Changes

| Prop              | Legacy              | RDS2                                            | Change                                                       |
| ----------------- | ------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `showClearButton` | `boolean`, optional | `boolean`, optional                             | Unchanged type; now renders RDS2 `ButtonLoader`              |
| _(none)_          | not supported       | `...rest: React.HTMLAttributes<HTMLDivElement>` | Added — spreads arbitrary HTML/ARIA attributes onto the root |

## Deprecations

None.

## Behavioral / Styling Changes

- **Layout rebuilt to mirror `Calendar`:** Legacy rendered a single flat 7-column day grid using
  Tailwind's `col-start-*` utilities directly on each cell div. RDS2 groups days into week rows
  (`cu-loader__calendar-row`, matching `Calendar`'s `cu-calendar__row`) with the same
  `cu-loader__calendar-day--col-start-{2–7}` offset classes applied only to the first cell of the
  first week — matching `Calendar`'s exact grid structure rather than the legacy's simpler
  flat-list approach.
- **Class naming:** Tailwind utility classes (`flex`, `items-center`, `justify-center`, `p-2`,
  `grid`, `grid-cols-7`, `gap-px`, `mt-4`, `text-center`, `w-8`, `h-8`, `bg-cu-black-200`,
  `rounded-full`, `animate-pulse`, `text-cu-black-800`, `hover:text-cu-red`, etc.) replaced with BEM
  classes: `cu-loader cu-loader--calendar` wrapper, `cu-loader__calendar-header`,
  `cu-loader__calendar-nav-btn`, `cu-loader__calendar-month`, `cu-loader__calendar-weekdays`,
  `cu-loader__calendar-weekday`, `cu-loader__calendar-grid`, `cu-loader__calendar-row`,
  `cu-loader__calendar-day`, `cu-loader__calendar-day-btn`, `cu-loader__calendar-clear`.
- **Removed `cu-component-updated` and `not-prose` classes** — legacy-only marker classes with no
  RDS2 equivalent.
- **Removed dead code:** legacy contained a commented-out `{format(firstDayCurrentMonth, 'MMMM
yyyy')}` expression inside the month skeleton — RDS2 has no such placeholder comment since the
  month title is a pure skeleton block with no real text.
- **Nav buttons are non-interactive:** legacy rendered actual `<button type="button">` elements with
  visually-hidden (`sr-only`) "Previous month"/"Next month" text but no `onClick` handlers — inert
  buttons that looked interactive. RDS2 renders `<span aria-hidden="true">` placeholders instead,
  since a loading skeleton has nothing to navigate to yet.
- **Day buttons are non-interactive:** legacy rendered a real `<button disabled={isBefore(day,
today)}>` per day (so future days were focusable/enabled despite the calendar not being ready).
  RDS2 renders a plain `<span>` skeleton per day — none of the cells are focusable or clickable.
- **Background/animation:** legacy skeleton pieces used a flat `bg-cu-black-200` fill with a generic
  `animate-pulse`. RDS2 uses `--rds--color-grey-lighter` with a subtle looping opacity pulse (`1` →
  `0.6` over 1.8s, `--rds--ease-standard` easing), fully disabled under `prefers-reduced-motion:
reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading calendar"`; the
  header, weekday row, and day grid are `aria-hidden="true"`. Legacy had no ARIA semantics beyond
  the unused `sr-only` nav labels.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto
  the wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
- **Weekday row spacing/borders:** legacy day-of-week row used `gap-px`/`mt-4` and the day grid used
  `isolate overflow-hidden rounded-lg border border-cu-black-100 bg-cu-black-50`; RDS2 expresses the
  same visual structure (1px gap, rounded border, pale background) via `--rds--spacing-medium`,
  `--rds--radius-md`, `--rds--color-grey-light`, and `--rds--color-grey-pale` tokens.
- **Clear button:** legacy passed `number={1} isSmall={true}` to its own `ButtonLoader`; RDS2 passes
  the equivalent `count={1} isSmall` to the rebuilt RDS2 `ButtonLoader` (see `ButtonLoader`'s own
  `Diff.md` for that component's prop renames).
