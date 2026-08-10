# PageLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens. Legacy had no props and a
hardcoded "Loading..." visually-hidden text node; RDS2 adds a `label` prop for a customizable
accessible name and spreads `...rest` onto the wrapper.

## Props Changes

| Prop     | Legacy        | RDS2                                            | Change                                                          |
| -------- | ------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| _(none)_ | no props      | `label?: string`, default `'Loading'`           | Added — sets the spinner's `aria-label`                         |
| _(none)_ | not supported | `...rest: React.HTMLAttributes<HTMLDivElement>` | Added — spreads arbitrary HTML/ARIA attributes onto the wrapper |

## Deprecations

None.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utility classes (`flex items-center justify-center`,
  `inline-block h-28 w-28 animate-spin rounded-full border-4 border-solid border-current
border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`)
  replaced with BEM classes: wrapper is `cu-loader cu-loader--page`, spinner is
  `cu-loader__page-spinner`.
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Spinner styling:** legacy used `border-current` (inherits `color`) with a transparent right
  border segment. RDS2 uses explicit `--rds--color-grey-light` for the ring base and
  `--rds--color-primary` for the highlighted segment, so the spinner's color no longer depends on
  inherited text color.
- **Reduced motion:** legacy slowed the spin animation under `motion-reduce` via a Tailwind arbitrary
  value (`spin_1.5s_linear_infinite`). RDS2 keeps the same behavior — slows (rather than removes) the
  animation under `prefers-reduced-motion: reduce`, since a fully static spinner would stop
  communicating a loading state.
- **Accessibility:** legacy used a visually-hidden `<span>` with the class combination
  `!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0
![clip:rect(0,0,0,0)]` (a manual `sr-only` implementation) inside the `role="status"` element for
  the "Loading..." text. RDS2 uses `aria-label` directly on the `role="status"` element instead,
  driven by the `label` prop.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the
  wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
