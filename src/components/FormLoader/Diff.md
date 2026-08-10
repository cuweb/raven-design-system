# FormLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens, keeping the same
`Object.assign` subcomponent pattern legacy used (`FormLoader.RowLoader`). `RowLoader`'s `cols` prop
is now typed via the shared `gridColumnClasses` map (string keys) instead of numeric/string union
literals, matching `BlockLoader`'s convention, and is now optional (falls back to a vertical stack)
rather than required.

## Props Changes

| Prop       | Legacy                                                       | RDS2                                                                     | Change                                                                                                                                                      |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `React.ReactNode`, required (`FormLoader`)                   | `React.ReactNode`, required                                              | Unchanged                                                                                                                                                   |
| `noMargin` | `boolean`, optional (`FormLoader`)                           | `boolean`, optional                                                      | Unchanged                                                                                                                                                   |
| `cols`     | `1 \| 2 \| 3 \| 4 \| '1/3' \| '2/3'`, required (`RowLoader`) | `RowLoaderCols` (`'1' \| '2' \| '3' \| '4' \| '1/3' \| '2/3'`), optional | Type changed (numeric → string literals via shared map), made optional — omitting it renders a vertical stack instead of requiring an explicit `cols` value |
| `fields`   | `number`, required (`RowLoader`)                             | `number`, optional, default `1`                                          | Made optional with a default                                                                                                                                |
| _(none)_   | not supported                                                | `...rest: React.HTMLAttributes<HTMLDivElement>` (`FormLoader`)           | Added — spreads arbitrary HTML/ARIA attributes onto the wrapper                                                                                             |

## Deprecations

None — `FormLoader` and `FormLoader.RowLoader` both have direct RDS2 equivalents.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utility classes (`flex flex-col gap-8 w-full`, `grid`, `gap-5`,
  `items-start`, `space-y-5`, `animate-pulse`, `block w-full h-14 rounded-md bg-cu-black-100`)
  replaced with BEM classes: wrapper is `cu-loader cu-loader--form` (with
  `cu-loader--form-nomargin` modifier), each row is `cu-loader__form-row` (with
  `cu-loader__form-row-{variant}` modifier — `stacked`, `two`, `three`, `four`, `one-third`,
  `two-thirds`), each field is `cu-loader__form-field`.
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Grid columns are now responsive** (mobile-first via `$rds-media-query-*` breakpoints), reusing
  the same column-count semantics as `BlockLoader`, rather than a static Tailwind grid class per
  `cols` value.
- **Background:** legacy skeleton field was a flat `bg-cu-black-100` fill with a generic
  `animate-pulse`. RDS2 uses `--rds--color-grey-lighter` with the same subtle looping opacity pulse
  convention used by the other loaders (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully
  disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading content"`; each
  skeleton field is `aria-hidden="true"`. Legacy had no ARIA semantics.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto
  the `FormLoader` wrapper, allowing consumers to override/extend attributes. Legacy accepted no
  additional attributes.
