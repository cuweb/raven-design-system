# Details — Diff (Legacy RDS → RDS2)

## Summary

`Details` itself is largely unchanged (`as`, `hasDividers`, `isGrey` all carry over as-is).
`Details.Item` dropped its `as` prop (always renders `<li>` now, which was the only legal value
anyway), and `iconName` moved from a raw string rendering a hardcoded `<img>` fetched from a CDN
URL to a typed `IconName` rendered via the shared `<Icon>` component. Divider styling changed from
red to a neutral grey token, and item markup is now consistent whether or not an icon is present.

## Props Changes

| Prop        | Legacy                                                              | RDS2                                          | Change                                      |
| ----------- | ------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------- |
| `as` (Item) | `as?: 'li'` (only legal value was `'li'`)                           | _removed_ — always renders `<li>`             | Removed                                     |
| `iconName`  | `iconName?: string` — rendered as `<img src={CDN}/${iconName}.svg>` | `iconName?: IconName` — rendered via `<Icon>` | Type narrowed / rendering mechanism changed |

`Details` (`as`, `hasDividers`, `isGrey`) is unchanged.

## Deprecations

None.

## Behavioral / Styling Changes

- Icon rendering: legacy fetched a static image from a hardcoded CDN URL
  (`https://cdn.carleton.ca/rds/assets/font-awesome/${iconName}.svg`) via a plain `<img>` with an
  `alt="{iconName} icon"`, wrapped in a `<span className="block w-6 flex-none mr-4">`. RDS2
  renders the icon via the shared `<Icon>` component (`size={20}`, `aria-hidden`) directly, with
  no separate wrapper span and no `alt` text (the icon is treated as decorative).
- Markup consistency: legacy only wrapped children in a `<p>` when an icon was present (bare,
  unwrapped children otherwise) — an inconsistent DOM structure depending on `iconName`. RDS2
  always wraps children in a `<span>`, regardless of whether `iconName` is set.
- Divider color: legacy's `cu-details--dividers` used red dividers and red, medium-weight links
  (`divide-cu-red`, `li a { font-medium text-cu-red }`). RDS2's `cu-details--dividers` uses a
  neutral `var(--rds--color-grey-light)` border and applies no special link styling.
- `isGrey` background/padding: legacy used a fixed `bg-cu-black-50 rounded-xl py-5 px-8` at all
  breakpoints. RDS2's `cu-details--grey` uses `var(--rds--color-grey-pale)` with responsive
  padding (`var(--rds--spacing-medium)` on mobile, `var(--rds--spacing-large)` at `md`+).
- Class naming: Tailwind utility classes (`font-bold`, `flex align-top`, `divide-y
divide-cu-red`, `py-2 md:py-3.5`) → `cu-details` / `cu-details__item` BEM classes
  (`cu-details--grey`, `cu-details--dividers`, `cu-details__item--bold`,
  `cu-details__item--icon`), styled with `var(--rds--*)` tokens.
