# Column — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with BEM/SCSS grid modifiers; a new `maxWidth` prop adds WordPress
alignment support; the default `cols` changed from `'1'` to `'2'`; and `Column.Content`'s `reverse`
prop was replaced with an inverted `isFirst` prop.

## Props Changes

| Prop                  | Legacy                                                  | RDS2                                                      | Change                  |
| --------------------- | ------------------------------------------------------- | --------------------------------------------------------- | ----------------------- |
| `cols`                | default `'1'`                                           | default `'2'`                                             | Default changed         |
| `maxWidth`            | _none_                                                  | `maxWidth?: 'aligncontent' \| 'alignwide' \| 'alignfull'` | Added                   |
| `reverse` → `isFirst` | `Column.Content`: `reverse?: boolean` (default `false`) | `Column.Content`: `isFirst?: boolean` (default `false`)   | Renamed, inverted logic |

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: Tailwind grid utilities (`grid gap-6 md:gap-10 md:grid-cols-2`, etc., driven by
  `gridColumnClasses` producing raw Tailwind classes) → BEM modifiers `cu-column--{one,two,three,four,
one-third,two-thirds}` backed by SCSS `grid-template-columns` rules using `$rds-media-query-*`
  breakpoints and `var(--rds--spacing-large)` for gap.
- `cu-column-content` (legacy) → `cu-column__content` (RDS2), following BEM `__element` naming.
- Ordering logic changed: legacy `ColumnContent` defaults to `order-none` and applies `order-1`
  (moves to front) when `reverse` is `true`, with the sibling wrapper independently reordering via
  `.cu-column--reverse > *:last-child`. RDS2 makes `cu-column__content` default to `order: 1` and
  requires an explicit `isFirst` prop (adding class `is-first`) on whichever content block should
  render first (`order: 0`), removing the separate `cu-column--reverse` wrapper modifier entirely.
- `margin-y` spacing on the outer wrapper (`my-6 md:my-10 first:mt-0`, marked `TODO GLOBAL` in legacy)
  is no longer applied by the component itself in RDS2 — spacing is handled by the global layout
  system instead.
- First/last child margin reset (`*:first-child { margin-top: 0 }`, `*:last-child { margin-bottom: 0 }`)
  preserved in both versions, just re-scoped from `cu-column-content` to `cu-column__content`.
