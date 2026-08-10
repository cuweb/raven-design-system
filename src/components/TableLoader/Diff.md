# TableLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens. Behavior is otherwise
unchanged: a grid of pulsing cells with alternating row shading, sized by `numRow`/`numCol`.

## Props Changes

| Prop     | Legacy                          | RDS2                                            | Change                                                          |
| -------- | ------------------------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| `numRow` | `number`, optional, default `5` | `number`, optional, default `5`                 | Unchanged                                                       |
| `numCol` | `number`, optional, default `5` | `number`, optional, default `5`                 | Unchanged                                                       |
| _(none)_ | not supported                   | `...rest: React.HTMLAttributes<HTMLDivElement>` | Added — spreads arbitrary HTML/ARIA attributes onto the wrapper |

## Deprecations

None.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utility classes (`animate-pulse`, `grow`, `h-12`, `bg-cu-black-100`,
  `bg-cu-black-50`, `flex space-x-1`, `rounded-md overflow-hidden grid gap-1`) replaced with BEM
  classes: wrapper is `cu-loader cu-loader--table`, each row is `cu-loader__table-row`, each cell is
  `cu-loader__table-cell` (with `cu-loader__table-cell--alt` modifier for odd-indexed rows).
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Background + animation:** legacy skeleton cells alternated between `bg-cu-black-100` and
  `bg-cu-black-50` with a generic `animate-pulse`. RDS2 alternates between
  `--rds--color-grey-lighter` and `--rds--color-grey-pale` with the same subtle looping opacity pulse
  convention used by the other loaders (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully
  disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading content"`; each
  row and cell is `aria-hidden="true"`. Legacy had no ARIA semantics.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the
  wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
