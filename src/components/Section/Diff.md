# Section — Diff (Legacy RDS → RDS2)

## Summary

`isGrey` boolean replaced with a broader `bgType` enum; `maxWidth` moved from a fixed Tailwind
max-width scale to the WordPress alignment system; a new `contentWidth` prop and `isHero` prop were
added; Tailwind utility classes were replaced with BEM/SCSS.

## Props Changes

| Prop                | Legacy                                         | RDS2                                                                                    | Change                 |
| ------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------- |
| `isGrey` → `bgType` | `isGrey?: boolean`                             | `bgType?: 'grey' \| 'black' \| 'light-gradient'`                                        | Renamed, expanded      |
| `maxWidth`          | `maxWidthKeys` (e.g. `'5xl'`), default `'5xl'` | `'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'aligncontent'`                | Type & default changed |
| `contentWidth`      | _none_                                         | `contentWidth?: 'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'aligncontent'` | Added                  |
| `isHero`            | _none_                                         | `isHero?: boolean`                                                                      | Added                  |

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: Tailwind utilities (`bg-cu-black-50 max-w-screen-2xl mx-auto rounded-xl`,
  `px-6 py-5 md:px-14 md:py-12`, `w-screen ml-offset-center`, `px-4 md:px-6 lg:px-12`, and
  `cu-max-w-child-{maxWidth}`) → BEM modifiers (`cu-section--grey`, `cu-section--black`,
  `cu-section--light-gradient`, `cu-section--hero`) driven by CSS custom properties
  (`var(--rds--spacing-large)`, `var(--rds--color-grey-pale)`, etc.) and WordPress layout utility
  classes (`has-global-padding`, `is-layout-constrained`, `aligncontent`/`alignwide`/`alignfull`).
- Markup/structure: legacy always rendered an inner content `<div>` with `space-y-6 md:space-y-10
cu-prose-first-last` plus conditional grey background/padding classes. RDS2's inner content `<div>`
  instead uses `has-global-padding ${contentWidth}`, decoupling background/padding (`bgType`) from
  content width constraints (`contentWidth`).
- New `data-color-scheme="dark"` attribute is set on the root element when `bgType === 'black'`
  (legacy had no equivalent color-scheme signaling).
- New `isHero` modifier (`cu-section--hero`) has no legacy counterpart — it applies the same padding
  treatment as the grey/black/light-gradient backgrounds without requiring a `bgType`.
- Legacy's grey background variant forced a `rounded-xl` corner and constrained max-width regardless
  of alignment; RDS2 only applies `border-radius` when the section is not `alignfull`, and adjacent
  same-`bgType` sections have their padding/margin collapsed (`& + .cu-section--grey { padding-top: 0 }`)
  to avoid doubled spacing — no equivalent adjacent-sibling handling existed in legacy.
