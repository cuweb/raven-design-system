# PageHeaderLoader — Diff (Legacy RDS → RDS2)

## Summary

Legacy shipped **three separate components** (`PageHeaderLoader`, `PageHeaderEventLoader`,
`PageHeaderPeopleLoader`) with no shared props — each hardcoded to one layout. RDS2 **consolidates
these into a single `PageHeaderLoader` component with a `variant` prop** (`'default' | 'event' |
'people'`), following the same consolidation pattern established by `CardLoader` and `ListingLoader`.
All Tailwind utility classes are replaced with BEM/SCSS + design tokens.

## Props Changes

| Prop       | Legacy                                                   | RDS2                                                              | Change                                                          |
| ---------- | -------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------- |
| `variant`  | not supported (separate components)                      | `'default' \| 'event' \| 'people'`, optional, default `'default'` | Added — selects which legacy component's layout to render       |
| `content`  | `'small' \| 'large'`, optional (`PageHeaderLoader` only) | `'small' \| 'large'`, optional (`variant="default"` only)         | Unchanged, now scoped to the `default` variant                  |
| `isCenter` | `boolean`, optional (`PageHeaderLoader` only)            | `boolean`, optional (`variant="default"` only)                    | Unchanged, now scoped to the `default` variant                  |
| _(none)_   | not supported                                            | `...rest: React.HTMLAttributes<HTMLDivElement>`                   | Added — spreads arbitrary HTML/ARIA attributes onto the wrapper |

## Deprecations

- **`PageHeaderEventLoader` and `PageHeaderPeopleLoader` are deprecated** as standalone components.
  Use `<PageHeaderLoader variant="event" />` and `<PageHeaderLoader variant="people" />` respectively.

## Behavioral / Styling Changes

- **Consolidation:** three legacy components collapsed into one, matching the `CardLoader`/
  `ListingLoader` precedent — a single `variant` prop selects the layout instead of importing a
  different component per use case.
- **Class naming:** Tailwind utility classes (`animate-pulse`, `flex flex-wrap gap-10`,
  `justify-center`, `rounded-md h-20 w-80 bg-cu-black-100`, `w-full md:w-1/3 md:float-right
max-w-[400px]`, `space-y-3 mb-12`, etc.) replaced with BEM classes: `cu-loader--pageheader-default`,
  `cu-loader--pageheader-event`, `cu-loader--pageheader-people`, `cu-loader--pageheader-center`,
  `cu-loader__pageheader-title`, `cu-loader__pageheader-content`, `cu-loader__pageheader-figure`,
  `cu-loader__pageheader-body`, `cu-loader__pageheader-line`, `cu-loader__pageheader-lines`,
  `cu-loader__pageheader-avatars`, `cu-loader__pageheader-avatar`.
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Responsive layout:** legacy used Tailwind's `md:w-1/3 md:float-right` (float-based) for the
  event/people figure. RDS2 uses `flex-direction: row-reverse` at the `$rds-media-query-md`
  breakpoint via SCSS variables (CSS custom properties don't work in media queries) — no floats.
- **`ButtonLoader` composition:** the `event` variant still composes `ButtonLoader`, updated from
  `<ButtonLoader number={2} isSmall={false} />` (legacy prop names) to `<ButtonLoader count={2} />`
  (RDS2's `ButtonLoader` prop is `count`, and its default is already non-small).
- **Avatar row:** the `people` variant's 6 circular placeholders replace inline
  `w-10 h-10 bg-cu-black-100 rounded-full` divs with `cu-loader__pageheader-avatar`, styled via
  `--rds--radius-full` and `--rds--color-grey-lighter`.
- **Background + animation:** legacy skeleton pieces used `bg-cu-black-100` with a generic
  `animate-pulse`. RDS2 uses `--rds--color-grey-lighter` with the same subtle looping opacity pulse
  convention used by the other loaders (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully
  disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading content"`; all
  skeleton pieces are `aria-hidden="true"`. Legacy had no ARIA semantics.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the
  wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
