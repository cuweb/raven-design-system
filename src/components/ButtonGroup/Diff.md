# ButtonGroup — Diff (Legacy RDS → RDS2)

## Summary

The configurable `gap` prop was removed in favor of a fixed token-based gap, matching the same
change made to `BadgeGroup`. The `align` prop is unchanged in behavior and available options.

## Props Changes

| Prop  | Legacy                                               | RDS2      | Change  |
| ----- | ---------------------------------------------------- | --------- | ------- |
| `gap` | `gap?: gridGapKey` (multiple options), default `'5'` | _removed_ | Removed |

## Deprecations

- `gap` — no direct replacement; the gap between buttons is now a fixed
  `var(--rds--spacing-2-x-small)` value and can no longer be configured per instance.

## Behavioral / Styling Changes

- Class naming: `cu-buttongroup` (plus Tailwind utilities `flex flex-wrap md:flex-1`, a
  `cu-component-updated` marker class, and `justify-*` utility classes) → `cu-buttongroup` with
  `cu-buttongroup--justify-{start,center,end}` modifier classes, styled via `--rds--*` tokens
  instead of hardcoded/utility values.
- `align` accepts the same three values (`start`, `center`, `end`) with the same default
  (`'start'`) and identical visual behavior — only the internal implementation (utility class
  lookup → dedicated modifier class) changed.
