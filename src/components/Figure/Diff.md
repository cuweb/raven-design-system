# Figure — Diff (Legacy RDS → RDS2)

## Summary

`rounded` and `noMobile` were removed (`noMobile` was already unused/dead in the legacy
component); the inner wrapper's drop shadow and white background were dropped in favor of a
flatter style; the fixed-size/float breakpoint shifted from `lg` to `md`; and WordPress
`alignleft`/`alignright` layout classes were added so floated figures opt out of centering.
`size` and `align` value sets are unchanged.

## Props Changes

| Prop       | Legacy                                                                      | RDS2      | Change                                                                                                    |
| ---------- | --------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| `rounded`  | `rounded?: borderRadiusKeys`, default `'none'`                              | _removed_ | Removed — corners are now always rounded (`var(--rds--radius-md)`) on the inner wrapper, not configurable |
| `noMobile` | `noMobile?: boolean` (declared but never used in the legacy component body) | _removed_ | Removed (was already dead/no-op in legacy)                                                                |

`size` (`xs \| sm \| md \| lg \| full`, default `'full'`) and `align` (`left \| right \| center \|
none`, default `'none'`) are unchanged.

## Deprecations

- `rounded` — no direct replacement; the figure's inner wrapper always has rounded corners now.
- `noMobile` — no direct replacement; it had no effect in the legacy component either.

## Behavioral / Styling Changes

- Inner wrapper appearance: legacy's inner `<div>` had `bg-white shadow-lg` (a white background
  and a drop shadow around the media); RDS2's `.cu-figure__inner` has neither — just
  `overflow: hidden` and a rounded corner, a flatter look.
- Breakpoint shift: legacy applied sized max-widths and float alignment starting at the `lg`
  breakpoint (e.g. `lg:max-w-[320px]`, `lg:float-left`), collapsing to full-width below `lg`.
  RDS2 applies sizing/floating starting at `md` instead — sized/floated figures now take effect
  at a narrower viewport than before.
- Sizing mechanism: legacy applied `size` as a `max-width` (Tailwind `max-w-*`) on both the
  `<figure>` and inner wrapper; RDS2 applies `size` as an explicit `width` on `.cu-figure--{size}`,
  with a `max-width: 100%` safety net on the root `<figure>` so it never overflows a narrower
  container.
- WordPress layout integration: RDS2 adds `alignleft` / `alignright` classes when `align` is
  `'left'`/`'right'`, specifically to opt the figure out of the `is-layout-constrained` rule (which
  would otherwise force `margin-left`/`margin-right: auto` and block the float). Legacy had no
  such WP layout class integration.
- Caption styling: legacy rendered the caption as plain italic text with no background
  (`px-5 py-4 text-base italic text-cu-black-700`); RDS2 gives the caption an explicit
  `background-color: var(--rds--color-grey-pale)` background band, in addition to padding and
  italic styling.
- Markup: legacy wrapped the `<figure>` in an unnecessary React fragment (`<>...</>`); RDS2 returns
  the `<figure>` directly with no wrapping fragment (no visual difference).
- Class naming: Tailwind utility classes (`lg:max-w-[320px]`, `lg:float-left lg:clear-left
mb-6 lg:mr-12`, `mx-auto`, `!mt-8 md:!mt-4`, `overflow-hidden bg-white shadow-lg`) → `cu-figure`,
  `cu-figure--{size}`, `cu-figure--{align}`, `cu-figure__inner`, `cu-figure__caption` BEM classes,
  styled with `var(--rds--*)` tokens.
