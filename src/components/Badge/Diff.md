# Badge — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-*` BEM/SCSS token-based classes; `link` prop renamed
to `href`; `noWordBreak` removed (nowrap is now the permanent default); `rounded` default changed
from `'full'` to `'md'`; a `teal` color option was added; and the component now spreads arbitrary
anchor attributes via `...rest`.

## Props Changes

| Prop            | Legacy                                   | RDS2                                                                          | Change                                                   |
| --------------- | ---------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| `link` → `href` | `link?: string`                          | `href?: string`                                                               | Renamed                                                  |
| `noWordBreak`   | `noWordBreak?: boolean`, default `false` | _removed_                                                                     | Removed — badge text is now always `white-space: nowrap` |
| `rounded`       | default `'full'`                         | default `'md'`                                                                | Default changed                                          |
| `color`         | 9 options                                | 10 options (+ `teal`)                                                         | Added value                                              |
| _(rest)_        | not supported                            | extends `React.AnchorHTMLAttributes<HTMLAnchorElement>`, spread via `...rest` | Added passthrough                                        |

## Deprecations

- `noWordBreak` — no direct replacement; text wrapping behavior is fixed to `nowrap` for all badges.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`bg-cu-black-50`, `text-cu-black-800`, `bg-green-50`,
  etc.) → `cu-*` BEM/SCSS classes driven by design tokens (`cu-badge--grey`, `cu-badge--green`,
  `cu-badge--radius-{sm,md,lg,full,none}`, etc.), with colors/borders resolved from
  `var(--rds--color-*)` tokens instead of hardcoded Tailwind palette values.
- Markup/structure: legacy always wrapped content in an outer `<p>` with an inner `<span>` (and a
  nested `<LinkComponent>` + `<span>` when linked); RDS2 renders a single element — a `<span>`
  when there's no `href`, or the `LinkComponent` directly (as an `<a>`) when `href` is provided —
  with no extra wrapper.
- Styling now includes a visible border on every badge (`border-width: 1px` matching the
  background color) which legacy did not have.
- Link styling: legacy applied a `hover:bg-cu-red hover:text-white` hover state (badge changes to
  red on hover); RDS2 instead underlines the text on hover (`text-decoration: underline`) and
  keeps the badge's color, leaving color semantics intact when linked.
- New HTML attribute passthrough: RDS2 spreads `...rest` (arbitrary anchor attributes) onto the
  rendered element; legacy accepted no additional attributes.
