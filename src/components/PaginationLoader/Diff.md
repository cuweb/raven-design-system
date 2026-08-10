# PaginationLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens. Legacy rendered separate
mobile (`ButtonLoader`-based) and desktop layouts toggled via responsive `hidden`/`flex` utility
classes, plus a `sr-only` "Loading..." text node. RDS2 renders a single responsive layout (prev/next
arrow skeletons + page-number list) and communicates loading state via `role="status"` instead of a
visually-hidden text node.

## Props Changes

| Prop        | Legacy                          | RDS2                                            | Change                                                       |
| ----------- | ------------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `pageCount` | `number`, optional, default `5` | `number`, optional, default `5`                 | Unchanged                                                    |
| `hasBorder` | `boolean`, optional             | `boolean`, optional                             | Unchanged                                                    |
| _(none)_    | not supported                   | `...rest: React.HTMLAttributes<HTMLDivElement>` | Added — spreads arbitrary HTML/ARIA attributes onto the root |

## Deprecations

None.

## Behavioral / Styling Changes

- **Removed dual mobile/desktop layout:** legacy rendered a `ButtonLoader`-based compact layout for
  mobile (`sm:hidden`) and a separate label + numbered-list layout for desktop (`hidden sm:flex`).
  RDS2 renders a single responsive prev/next-arrow + page-number-list layout at all breakpoints,
  matching the real `Pagination` component's single-layout structure.
- **Removed the "results summary" label skeleton:** legacy's desktop layout included a
  `bg-cu-black-200` label skeleton span (mirroring `Pagination`'s "Showing X of Y results" text, which
  doesn't exist in RDS2's `Pagination`). RDS2 omits it since there's no matching content in RDS2's
  `Pagination`.
- **Class naming:** Tailwind utility classes (`animate-pulse`, `flex`, `items-center`,
  `justify-between`, `sm:hidden`, `hidden sm:flex`, `border`, `rounded-md`, `border-cu-black-100`,
  `bg-cu-black-200`, `w-6 h-6`, `w-48 h-4`) replaced with BEM classes: wrapper is
  `cu-loader cu-loader--pagination` (with `cu-loader--pagination-bordered` modifier for `hasBorder`),
  containing `cu-loader__pagination-arrow` (×2, prev/next) and a
  `cu-loader__pagination-list`/`cu-loader__pagination-item`/`cu-loader__pagination-page` page-number
  list.
- **Removed `cu-pagination`, `cu-component-updated`, and `not-prose` classes** — legacy-only marker
  classes with no RDS2 equivalent.
- **Background + animation:** legacy skeleton pieces were a flat `bg-cu-black-200` fill with a generic
  `animate-pulse`. RDS2 uses `--rds--color-grey-lighter` with the same subtle looping opacity pulse
  convention used by the other loaders (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully
  disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading content"` (replacing
  legacy's visually-hidden `<span className="sr-only">Loading...</span>` text node); the page-number
  list and arrow skeletons are `aria-hidden="true"`. Legacy had no `role` attribute.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the
  wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional attributes.
