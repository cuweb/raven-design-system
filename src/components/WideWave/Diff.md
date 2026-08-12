# WideWave — Diff (Legacy RDS → RDS2)

## Summary

`wave` prop renamed to `color` with its default flipped from `'red'` to `'black'`; new `maxWidth`/
`contentWidth` props add WordPress alignment support; the wave graphic moved from a full-bleed
background image on the section itself to a dedicated `cu-widewave__wave` element; Tailwind utility
classes were replaced with BEM/SCSS.

## Props Changes

| Prop             | Legacy                                     | RDS2                                                                                 | Change                   |
| ---------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------ |
| `wave` → `color` | `wave?: 'red' \| 'black'`, default `'red'` | `color?: 'red' \| 'black'`, default `'black'`                                        | Renamed, default changed |
| `maxWidth`       | _none_                                     | `maxWidth?: 'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'alignfull'`     | Added                    |
| `contentWidth`   | _none_                                     | `contentWidth?: 'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'alignwide'` | Added                    |

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: Tailwind utilities (`relative overflow-x-hidden w-screen ml-offset-center px-6
md:px-8 lg:px-14 cu-max-w-child-5xl bg-repeat-x xl:bg-[length:1200px_156px] pb-5 md:pb-12`, plus
  responsive `pt-16 sm:pt-24 md:pt-28 ...`) → BEM (`cu-widewave`, `cu-widewave--{red,black}`) backed
  by CSS custom properties (`var(--rds--spacing-large)`, `var(--rds--color-black)`,
  `var(--rds--color-primary-dark)`) and WordPress layout classes (`has-global-padding`,
  `is-layout-constrained`, `aligncontent`/`alignwide`/`alignfull`).
- Markup/structure: legacy applied the wave graphic as a repeating `background-image` directly on the
  root `<section>` (via inline `style={{ backgroundPosition: '-1px -1px' }}` plus a Tailwind
  background-size utility). RDS2 introduces a dedicated `<div className="cu-widewave__wave alignfull" />`
  element rendered before the content, with the wave graphic and sizing applied to that element via
  SCSS instead of an inline style.
- Content wrapper: legacy wrapped children in `cu-widewaves-content cu-prose-light
cu-prose-first-last`; RDS2 wraps children in `has-global-padding ${contentWidth}`, decoupling prose
  styling from the component (now expected to be handled by consumers/global styles).
- New `data-color-scheme="dark"` attribute is always set on the root `<section>` in RDS2 (legacy had
  no equivalent color-scheme signaling).
- Legacy hardcoded the element as `<section>`; RDS2 keeps `<section>` as well but no longer exposes an
  `as` prop in either version, so no change there.
- Wave graphic source: both versions reference the same hosted SVG assets
  (`cu-waves-hard-edge-{red,black}.svg`), but legacy applied them as Tailwind background utility
  classes (`bg-cu-waves-hard-edge-red`, etc.) while RDS2 references the CDN URLs directly in SCSS
  `background-image`.
