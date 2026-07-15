# CallOut — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-*` BEM/SCSS token-based classes; a new `as` prop lets
callers choose the heading level (`h2`/`h3`) instead of it being hardcoded; `maxWidth` now uses
WordPress alignment keys (`alignsmall`/`aligncontent`/`alignwide`/`alignfull`) instead of Tailwind
max-width scale keys, with a new default; and the box styling (border weight/color, background,
padding) changed.

## Props Changes

| Prop       | Legacy                                                                                 | RDS2                                                                                                                           | Change                                 |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| `as`       | _n/a_ — heading was always rendered as `<h2>` via `PageHeader as="h2"`                 | `as?: 'h2' \| 'h3'`, default `'h2'`                                                                                            | Added                                  |
| `maxWidth` | `keyof maxWidthClasses` — Tailwind scale (`2xl`…`7xl`, `max`, `full`), default `'4xl'` | `keyof maxWidthClasses` — WP alignment keys (`alignsmall`, `aligncontent`, `alignwide`, `alignfull`), default `'aligncontent'` | Value set changed / default changed    |
| `justify`  | `keyof justifyContentClasses` (`start \| end \| center`), default `'center'`           | `keyof justifyClasses` (`start \| end \| center`), default `'center'`                                                          | Unchanged (internal type renamed only) |

## Deprecations

- Tailwind max-width scale values (`2xl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `max`, `full`) for
  `maxWidth` — no direct replacement; consumers must switch to the WordPress alignment keys
  (`alignsmall`, `aligncontent`, `alignwide`, `alignfull`).

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`mx-auto border-8 md:border-[12px]
border-cu-black-50 px-8 pt-5 pb-6 md:px-16 md:pt-8 md:py-10 rounded-lg`) → `cu-callout` BEM
  class styled with `var(--rds--*)` tokens.
- Border: legacy used a heavy `8px` (`12px` on `md`+) solid border in
  `border-cu-black-50`; RDS2 uses a flat `5px` border in `var(--rds--color-grey-light)` with no
  responsive size change.
- Background: legacy had no explicit background (transparent box, relying on the thick border for
  visual weight); RDS2 sets an explicit `background-color: var(--rds--color-white)`.
- Padding: legacy used asymmetric, responsive padding (`px-8 pt-5 pb-6` on mobile, stepping up to
  `px-16 pt-8 py-10` at `md`); RDS2 uses a single non-responsive
  `var(--rds--spacing-large) var(--rds--spacing-x-large)` padding value.
- Heading underline positioning for `justify="end"`: legacy targeted the underline via
  `.cu-callout--end .cu-pageheader h2:after`; RDS2 targets it via
  `.cu-callout--end .cu-pageheader__heading--underline::after` — functionally equivalent, updated
  to match `PageHeader`'s new class naming and to work regardless of heading level (`h2`/`h3`).
