# Login — Diff (Legacy RDS → RDS2)

## Summary

`maxWidth` (a fixed Tailwind max-width scale) was replaced with an `align` prop controlling horizontal
alignment at a single fixed card width; the component now spreads arbitrary `<div>` HTML attributes
via `...rest`; Tailwind utility classes were replaced with BEM/SCSS.

## Props Changes

| Prop                 | Legacy                                     | RDS2                                                                 | Change           |
| -------------------- | ------------------------------------------ | -------------------------------------------------------------------- | ---------------- |
| `maxWidth` → `align` | `maxWidth?: maxWidthKeys`, default `'2xl'` | `align?: 'start' \| 'center' \| 'end'`, default `'center'`           | Renamed, retyped |
| `...rest`            | _none_                                     | `extends React.HTMLAttributes<HTMLDivElement>`, spread via `...rest` | Added            |

## Deprecations

- `maxWidth` — the configurable Tailwind max-width scale has no RDS2 equivalent; the card now renders
  at a single fixed `max-width: 32rem` regardless of props. Only its horizontal alignment within the
  parent is configurable via `align`.

## Behavioral / Styling Changes

- Class naming: Tailwind utilities (`not-prose p-6 pt-0 border border-cu-black-100
${maxWidthClasses[maxWidth]} shadow-md rounded-md bg-white`) → BEM (`cu-login`,
  `cu-login--{start,center,end}`, `cu-login__logo`, `cu-login__error`, `cu-login__social`,
  `cu-login__social-label`) backed by CSS custom properties (`var(--rds--spacing-medium)`,
  `var(--rds--color-white)`, `var(--rds--shadow-natural)`, etc.).
- Alignment: legacy centered/sized the card purely via the Tailwind max-width utility class (no
  explicit alignment control — margin behavior was whatever the surrounding layout provided). RDS2
  makes alignment an explicit prop (`cu-login--start` → `margin-right: auto`, `cu-login--center` →
  `margin-inline: auto`, `cu-login--end` → `margin-left: auto`) at a fixed card width.
- `cu-component-updated` marker class (present in legacy, used to flag partially-migrated components)
  is not present in RDS2 — no longer needed since the component is fully rebuilt.
- Attribute passthrough: RDS2 spreads `...rest` onto the root `<div>`, letting consumers pass
  arbitrary HTML attributes (e.g. `id`, `aria-*`, `data-*`); legacy accepted no such passthrough.
- Error alert: legacy always passed `key="login-error"` to the nested `Alert` and defaulted
  `errorTitle`/`errorDesc` to empty strings (`errorTitle = ''`, `errorDesc = ''`). RDS2 leaves
  `errorTitle`/`errorDesc` undefined by default and only supplies a fallback (`errorTitle ?? ''`)
  when rendering the `Alert`, and drops the `key` prop (unnecessary outside a list).
- Logo image: legacy applied Tailwind utility classes for extra border padding around the logo
  (`w-auto h-20 mx-auto mt-4 bg-white border-x-[16px] border-y-[12px] border-white rounded-md`). RDS2
  simplifies this to a fixed height with no border padding (`cu-login__logo` → `height: 50px`,
  `margin-inline: auto`, `margin-top`, `background-color`), dropping the border-as-padding technique
  and the rounded corners on the logo itself.
