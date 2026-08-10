# ButtonLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens. `number` renamed to
`count` and made optional with a default of `1`; `isSmall` made optional and its default changed
from `true` to unset (small-off), matching `Button`'s own normal-size default. The component now
spreads `...rest` HTML attributes and adds `role="status"`/`aria-label` for loading-state semantics.

## Props Changes

| Prop               | Legacy                              | RDS2                                                    | Change                                                       |
| ------------------ | ----------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| `number` → `count` | `number`, required                  | `count?: number`, optional, default `1`                 | Renamed, made optional with a default                        |
| `isSmall`          | `boolean`, required, default `true` | `boolean`, optional, default unset (`false`-equivalent) | Made optional, default changed                               |
| _(none)_           | not supported                       | `...rest: React.HTMLAttributes<HTMLDivElement>`         | Added — spreads arbitrary HTML/ARIA attributes onto the root |

## Deprecations

None.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utility classes (`flex`, `gap-5`, `animate-pulse`, `block`, `rounded-md`, `w-44`, `bg-cu-black-100`, `h-9`, `h-12`) replaced with BEM classes: wrapper is `cu-loader cu-loader--button`, each skeleton child is `cu-loader__button` with an `cu-loader__button--small` modifier when `isSmall` is set (legacy used `h-9`/`h-12` height utility classes directly on the child).
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Background/animation:** legacy skeleton button was a flat `bg-cu-black-100` fill with a generic `animate-pulse`. RDS2 uses `--rds--color-grey-lighter` with a subtle looping opacity pulse (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading content"`; each skeleton button is `aria-hidden="true"`. Legacy had no ARIA semantics.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the wrapper, allowing consumers to override/extend attributes (e.g. `aria-label`). Legacy accepted no additional attributes.
- **Gap spacing:** legacy used a fixed `gap-5` (Tailwind, 1.25rem); RDS2 uses `var(--rds--spacing-small)`.
- **Sizing:** legacy fixed skeleton width to `w-44` (11rem) with heights `h-9` (2.25rem, small) / `h-12` (3rem, default); RDS2 keeps the same dimensions expressed as SCSS values (`width: 11rem`, `height: 3rem` default, `height: 2.25rem` for `--small`).
