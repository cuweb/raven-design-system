# TopNavLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind + hardcoded inline SVG spinner to a lightweight BEM/SCSS CSS-only
spinner (border-based rotating ring), matching the pattern established by `PageLoader` but sized
for inline use within a top navigation bar.

## Props Changes

| Prop     | Legacy                                 | RDS2                                            | Change                                                          |
| -------- | -------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| _(none)_ | not supported (hardcoded "Loading...") | `label?: string`, default `"Loading"`           | Added — customizable accessible label                           |
| _(none)_ | not supported                          | `...rest: React.HTMLAttributes<HTMLDivElement>` | Added — spreads arbitrary HTML/ARIA attributes onto the wrapper |

## Deprecations

None.

## Behavioral / Styling Changes

- **Spinner implementation:** legacy hardcoded a large inline SVG (two `<path>` shapes) with Tailwind
  `animate-spin`, `fill-red-600`, `text-gray-200 dark:text-gray-600` classes. RDS2 replaces this with
  a CSS-only rotating ring (`border` + `border-right-color` trick), consistent with `PageLoader`'s
  spinner — no inline SVG markup, no hardcoded color/dark-mode classes.
- **Colors:** legacy hardcoded `fill-red-600` / `text-gray-200` / dark-mode `text-gray-600`. RDS2
  uses `--rds--color-grey-light` (ring base) and `--rds--color-primary` (ring highlight) design
  tokens — no separate dark-mode variant needed since tokens handle theming.
- **Size:** legacy SVG was `h-8 w-8` (2rem) — RDS2's spinner matches this at `2rem` diameter with a
  thinner `3px` border (vs. `PageLoader`'s larger `7rem`/`4px` full-page spinner), appropriately
  scaled for inline top-nav placement.
- **Accessible label:** legacy hardcoded `<span className="sr-only">Loading...</span>`. RDS2 exposes
  this as a `label` prop (default `"Loading"`) rendered via the shared `.sr-only` utility class,
  allowing consumers to customize the announced text.
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Animation:** legacy relied on Tailwind's `animate-spin` utility. RDS2 defines an explicit
  `cu-loader-topnav-spin` keyframe (continuous 360° rotation), with reduced-motion handling that
  slows (rather than removes) the spin under `prefers-reduced-motion: reduce`, matching `PageLoader`'s
  precedent — a fully static spinner would not communicate a loading state.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the
  wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
