# BadgeGroup — Diff (Legacy RDS → RDS2)

## Summary

The configurable `gap` prop was removed in favor of a fixed token-based gap; class naming moved
from Tailwind utilities plus a `cu-badgegroup` class to a single `cu-badge-group` BEM class.
Positioning props (`isAbsolute`, `top`/`right`/`bottom`/`left`) are unchanged.

## Props Changes

| Prop  | Legacy                                                | RDS2      | Change  |
| ----- | ----------------------------------------------------- | --------- | ------- |
| `gap` | `gap?: gridGapKeys` (multiple options), default `'2'` | _removed_ | Removed |

## Deprecations

- `gap` — no direct replacement; the gap between badges is now a fixed
  `var(--rds--spacing-2-x-small)` value and can no longer be configured per instance.

## Behavioral / Styling Changes

- Class naming: `cu-badgegroup` (plus Tailwind utilities `flex flex-wrap md:flex-1` and a
  `cu-component-updated` marker class) → single `cu-badge-group` BEM class with equivalent
  `display: flex; flex-wrap: wrap` and a `min-width` media query applying `flex: 1 1 0%`,
  now driven by `--rds--*` design tokens instead of hardcoded/utility values.
- No changes to absolute-positioning behavior — `isAbsolute`, `top`, `right`, `bottom`, and
  `left` behave identically to the legacy component.
