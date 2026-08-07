# BlockLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens. `cols` is now typed via
the shared `gridColumnClasses` map (string keys) instead of numeric/string union literals, `height`
gained a default, and the component now renders one skeleton block per column instead of a single
block regardless of `cols` — the legacy version computed grid-column Tailwind classes but only ever
rendered a single child `<div>`, so `cols` had no visible effect. The skeleton animation changed from
a static grey fill to a subtle, accessibility-conscious opacity pulse, and the component now spreads
`...rest` HTML attributes and adds `role="status"` for loading-state semantics.

## Props Changes

| Prop     | Legacy                                                                          | RDS2                                                                                                     | Change                                                                 |
| -------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cols`   | `1 \| 2 \| 3 \| 4 \| '1/3' \| '2/3'` (numeric keys), required                   | `'1' \| '2' \| '3' \| '4' \| '1/3' \| '2/3'` (string keys via `GridColumnKeys`), optional, default `'1'` | Type changed (numeric → string literals), made optional with a default |
| `height` | `number`, required, default `100` (default unreachable since prop was required) | `number`, optional, default `100`                                                                        | Made optional                                                          |
| _(none)_ | not supported                                                                   | `...rest: React.HTMLAttributes<HTMLDivElement>`                                                          | Added — spreads arbitrary HTML/ARIA attributes onto the root           |

## Deprecations

None.

## Behavioral / Styling Changes

- **Rendering fixed to match `cols`:** Legacy applied a grid-column Tailwind class (`gridColsClass[cols]`) to the wrapper but always rendered exactly one skeleton `<div>` child, so multi-column layouts never showed multiple blocks. RDS2 renders one `.cu-loader__block` per column (`1`/`2`/`3`/`4` → that many blocks; `1/3`/`2/3` → 2 blocks each, matching the asymmetric split used by `Column`/`ImageGrid`).
- **Class naming:** Tailwind utility classes (`grid`, `grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-4`, `gap-5`, `items-start`, `block`, `rounded-md`, `w-full`, `bg-cu-black-100`) replaced with BEM classes: wrapper is `cu-loader cu-loader--block cu-loader--block-{variant}` (variant one of `two`, `three`, `four`, `one-third`, `two-thirds`; no modifier class for `cols="1"`), each skeleton child is `cu-loader__block`.
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Grid columns are now responsive** (mobile-first via `$rds-media-query-*` breakpoints) instead of Tailwind's `md:`/`lg:` prefixes baked into a single class string — same breakpoint semantics, expressed in SCSS.
- **Background:** legacy skeleton block was a flat `bg-cu-black-100` fill with no animation. RDS2 uses `--rds--color-grey-lighter` with a subtle looping opacity pulse (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading content"`; each skeleton block is `aria-hidden="true"`. Legacy had no ARIA semantics.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the wrapper, allowing consumers to override/extend attributes (e.g. `aria-label`, `className` via spread order). Legacy accepted no additional attributes.
- **Gap spacing:** legacy used a fixed `gap-5` (Tailwind, 1.25rem); RDS2 uses `var(--rds--spacing-small)`.
