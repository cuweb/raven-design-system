# Carleton360 — Diff (Legacy RDS → RDS2)

## Summary

The previously hardcoded description text is now an optional `description` prop (with the same
default copy); the component no longer applies its own vertical margin; and Tailwind utility
classes were replaced with `cu-carleton360*` BEM/SCSS classes driven by design tokens. The logo
SVG markup is unchanged (only its JSX attribute casing was corrected).

## Props Changes

| Prop          | Legacy                                              | RDS2                                                                                                                                             | Change |
| ------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| `description` | _n/a_ — text was hardcoded in the component's `<p>` | `description?: string`, default `'Get started in Carleton 360 to receive tailored information on our programs, student services and community.'` | Added  |

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`text-center flex items-center justify-center mx-auto
px-8 md:px-16 rounded-xl my-6 md:my-12 first:mt-0 pt-10 pb-12 max-w-5xl bg-cu-black-50`, etc.) →
  `cu-carleton360` (with `cu-carleton360__logo` and `cu-carleton360__description` child classes),
  styled with `var(--rds--*)` design tokens.
- Component-level margin removed: legacy applied its own vertical margin
  (`my-6 md:my-12 first:mt-0`) directly on the root element; RDS2 has no equivalent — spacing
  between this component and its siblings is no longer baked into the component itself.
- Padding: legacy used asymmetric top/bottom padding (`pt-10 pb-12`) with responsive horizontal
  padding (`px-8` / `px-16` at `md`); RDS2 uses symmetric
  `var(--rds--spacing-x-large) var(--rds--spacing-large)` padding, with only the horizontal
  inline padding widened at the `md` breakpoint.
- Background: `bg-cu-black-50` (Tailwind) → `var(--rds--color-grey-pale)` token.
- Max width: `max-w-5xl` (Tailwind utility) → explicit `max-width: 64rem` (same value, now
  authored directly in CSS).
- Spacing before a following button group: legacy targeted `.cu-carleton360 p +
.cu-buttongroup` (adjacent-sibling selector after the description `<p>`); RDS2 targets
  `.cu-carleton360 .cu-buttongroup` directly with `margin-top: var(--rds--spacing-medium)` —
  same visual effect, no longer dependent on sibling-selector adjacency to a `<p>`.
- SVG markup: identical logo artwork, but attribute casing was corrected from raw HTML-style
  attributes (`fill-rule`) to JSX-idiomatic camelCase (`fillRule`) — no visual change.
