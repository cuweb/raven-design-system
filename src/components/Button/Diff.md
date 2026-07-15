# Button — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-*` BEM/SCSS token-based classes; a new `isOutline`
variant was added along with a `blue` color option; `icon` is now typed as `IconName` instead of
a bare `string`; and the `ariaLabel` default was fixed so an unset label is no longer rendered as
the literal placeholder string `"aria-label"`.

## Props Changes

| Prop        | Legacy                                                                    | RDS2                                                            | Change                      |
| ----------- | ------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------- |
| `color`     | 5 options: `red \| grey \| dark-grey \| black \| white`                   | 6 options: `red \| grey \| dark-grey \| blue \| black \| white` | Added value                 |
| `icon`      | `icon?: string` / `icon: string` (raw icon name)                          | `icon?: IconName` / `icon: IconName` (typed)                    | Type narrowed               |
| `isOutline` | _n/a_                                                                     | `isOutline?: boolean`                                           | Added                       |
| `ariaLabel` | `ariaLabel?: string`, default `'aria-label'` (literal placeholder string) | `ariaLabel?: string`, no default (`undefined`)                  | Default removed / bug fixed |

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`bg-cu-red`, `bg-cu-black-600`, `border-slate-300`,
  etc.) → `cu-*` BEM/SCSS classes driven by `var(--rds--color-*)` design tokens.
- `ariaLabel` bug fix: legacy defaulted `ariaLabel` to the literal string `'aria-label'`, so
  `aria-label={!ariaLabel ? title : ariaLabel}` always evaluated the default as truthy and
  rendered `aria-label="aria-label"` on any button where the caller didn't pass one. RDS2 has no
  default, so the attribute is simply omitted when not provided (the visible `title` text still
  supplies the accessible name).
- Icon spacing: legacy applied dedicated margin utility classes to the icon (`.cu-button .cu-icon
{ -ml-1 mr-1 }`, `-ml-0.5` when small) for text/icon spacing; RDS2 relies on the button's own
  `gap` (flex) for spacing and applies no icon-specific margins.
- Icon color: legacy explicitly passed `color="currentColor"` to `<Icon>`; RDS2 omits an explicit
  color prop and instead passes `className="cu-icon"`.
- New outline variant: when `isOutline` is set (and the button isn't disabled), each color gets
  an inverted style (white background, colored border/text, with an inverted hover state) — not
  present in legacy.
- Disabled styling: legacy used hardcoded Tailwind slate colors (`border-slate-300`,
  `bg-slate-300`); RDS2 uses `var(--rds--color-grey-light)` / `var(--rds--color-grey-dark)` tokens.
