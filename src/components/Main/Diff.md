# Main — Diff (Legacy RDS → RDS2)

## Summary

`maxWidth` and `noProse` were removed; new `as` and `hasPadding` props were added. The double-nested
`<main><section>` markup was collapsed into a single configurable root element, and width constraints
moved from a fixed Tailwind max-width scale to the WordPress alignment/layout utility classes.

## Props Changes

| Prop         | Legacy                                     | RDS2                                     | Change  |
| ------------ | ------------------------------------------ | ---------------------------------------- | ------- |
| `maxWidth`   | `maxWidth?: maxWidthKeys`, default `'5xl'` | _removed_                                | Removed |
| `noProse`    | `noProse?: boolean`                        | _removed_                                | Removed |
| `as`         | _none_                                     | `as?: 'main' \| 'div'`, default `'main'` | Added   |
| `hasPadding` | _none_                                     | `hasPadding?: boolean`, default `true`   | Added   |
| `className`  | _none_                                     | `className?: string`, default `''`       | Added   |

## Deprecations

- `maxWidth` — the fixed Tailwind max-width scale (e.g. `'5xl'`) has no direct RDS2 equivalent on this
  component; width constraints are now expected to come from a nested layout component (e.g.
  `Section`, `Column`) rather than `Main` itself.
- `noProse` — RDS2 no longer applies any prose styling (`cu-prose`/`cu-prose-dark`) by default, so
  there is nothing to opt out of; consumers who need prose styling must apply it themselves on
  content.

## Behavioral / Styling Changes

- Markup/structure: legacy always rendered a fixed two-element structure —
  `<main className="cu-main ..."><section className="cu-section cu-section--primary cu-max-w-{maxWidth} box-border relative w-full">{children}</section></main>`.
  RDS2 renders a single configurable root element (`as`, default `<main>`) wrapping children in one
  inner `<div className="alignfull has-global-padding is-layout-constrained entry-content">` —
  the extra `<section>` wrapper and its `cu-section--primary`/`cu-max-w-*` classes are gone entirely.
- Class naming: Tailwind utilities (`flex overflow-x-hidden justify-center px-4 md:px-6 lg:px-12`,
  `box-border relative w-full`) → BEM/WordPress utility classes (`cu-main`, `cu-main--padding`,
  `alignfull`, `has-global-padding`, `is-layout-constrained`, `entry-content`).
- Padding: legacy always applied horizontal padding directly on `<main>` via the `$primarySpacing`
  Tailwind utility (`px-4 md:px-6 lg:px-12`, marked `TODO GLOBAL`). RDS2 makes vertical padding
  optional and conditional (`hasPadding` toggles `cu-main--padding`, which applies
  `var(--rds--spacing-large)` top/bottom only); horizontal gutter now comes from `has-global-padding`
  on the inner content `<div>` instead of the root element.
- Prose styling: legacy conditionally applied `cu-prose cu-prose-dark` to the root unless `noProse`
  was set. RDS2 applies no prose classes at all — this styling responsibility was removed from `Main`.
- Link styling: RDS2 adds new default link styles scoped to `.cu-main a` (bold weight, color
  transition, underline + `var(--rds--color-primary-dark)` on hover) with no equivalent in legacy.
