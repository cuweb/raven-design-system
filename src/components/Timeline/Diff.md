# Timeline — Diff (Legacy RDS → RDS2)

## Summary

`Timeline` was redesigned from a responsive two-column layout (a right-aligned "aside" label
column with its own divider/marker, stacking above a content column on mobile) to a single-column
layout at all breakpoints, with one continuous vertical line running down the whole `Timeline` and
a marker dot on each item's date. `TimelineItem`'s `aside` prop was renamed to `date` and
`headerType` was renamed to `as`, matching the naming used elsewhere in RDS2. Tailwind utility
classes and the `cu-prose*` typography classes were replaced with `cu-timeline__*` BEM/SCSS classes
driven by design tokens.

## Props Changes

| Prop                | Legacy                                      | RDS2                                | Change  |
| ------------------- | ------------------------------------------- | ----------------------------------- | ------- |
| `aside` → `date`    | `aside: string` (required)                  | `date: string` (required)           | Renamed |
| `headerType` → `as` | `headerType?: 'h2' \| 'h3'`, default `'h2'` | `as?: 'h2' \| 'h3'`, default `'h2'` | Renamed |

`children` (`TimelineItem`) and `children` (`Timeline`) are unchanged.

## Deprecations

None.

## Behavioral / Styling Changes

- Layout redesign: legacy rendered each item as two columns at `md`+ — a right-aligned, fixed-width
  (`max-w-60`) date/aside column with its own right-hand divider (`md:border-r`), and a content
  column to its right; below `md` the item stacked into a single column with a left border and the
  marker on the left edge. RDS2 always renders a single column (date stacked above content) with
  one continuous vertical line running the full height of the `Timeline` (`border-left` on the
  root `.cu-timeline`), at every breakpoint — there's no side-by-side date/content arrangement at
  any screen size anymore.
- Vertical line ownership: legacy had no single continuous line — each item independently drew its
  own left border (mobile) or the aside column's right border (desktop), so the line was
  effectively segmented per item. RDS2 draws one continuous `border-left` on the root `.cu-timeline`
  container that spans all items.
- Marker dot: legacy positioned the dot via a `::after` on `.cu-timeline-aside`, sitting on the
  boundary between the date and content columns (`-left-1.5` on mobile, `md:-right-1.5` on
  desktop) and colored `bg-cu-red`. RDS2 positions the dot via a `::after` on `.cu-timeline__date
p`, always on the single vertical line to the item's left, colored `var(--rds--color-primary)`.
- Last-item spacing: legacy gave every item the same bottom padding (`pb-10`) with no special
  handling for the final item. RDS2 reduces the bottom padding on the last item
  (`var(--rds--spacing-medium)` vs `var(--rds--spacing-x-large)` for the rest).
- Typography: legacy wrapped item content in `cu-prose cu-prose-dark cu-prose-first-last`
  (shared prose typography classes). RDS2 has no dependency on the shared prose classes — spacing
  between the `PageHeader` and the next paragraph, and zeroing the last child's bottom margin, are
  now handled by explicit rules scoped to `.cu-timeline__content`.
- Divider/border color: `border-cu-black-100` (Tailwind) → `var(--rds--color-grey-light)` token.
- Class naming: Tailwind utility classes (`flex md:gap-10 flex-col md:flex-row`, `border-l
border-cu-black-100`, `max-w-60 md:text-right md:border-r`) → `cu-timeline`, `cu-timeline__item`,
  `cu-timeline__date`, `cu-timeline__content` BEM classes, styled with `var(--rds--*)` tokens.
