# StackedList — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with BEM/SCSS; the float-based `offset` layout, `listType`
variants, and `maxWidth` prop were all removed in favor of a simpler, purely grid-based two-column
layout.

## Props Changes

| Prop       | Legacy                                           | RDS2      | Change  |
| ---------- | ------------------------------------------------ | --------- | ------- |
| `listType` | `listType?: 'posts' \| 'toc'`, default `'posts'` | _removed_ | Removed |
| `offset`   | `offset?: 'left' \| 'right'`                     | _removed_ | Removed |
| `maxWidth` | `maxWidth?: maxWidthKeys`, default `'5xl'`       | _removed_ | Removed |

## Deprecations

- `listType` — the `'toc'` (table of contents) variant, including its distinct list-style/indentation
  styling (`cu-stackedlist--toc`, decimal/lower-alpha/lower-roman nested list markers), has no RDS2
  replacement.
- `offset` — the float-based single-column offset layout (`cu-stackedlist--offset`, `md:float-left`/
  `md:float-right` with responsive margins) has no RDS2 replacement; RDS2 only supports the standard
  1- or 2-column grid.
- `maxWidth` — no longer configurable; RDS2 relies on the surrounding layout (e.g. `Section`) to
  constrain width instead of the component doing it internally.

## Behavioral / Styling Changes

- Class naming: Tailwind utilities (`not-prose mx-auto overflow-hidden rounded-lg bg-white w-full
shadow-lg`, `grid md:grid-cols-{cols}`) → BEM (`cu-stackedlist`, `cu-stackedlist__list`,
  `cu-stackedlist--cols-{1,2}`) backed by CSS custom properties
  (`var(--rds--radius-lg)`, `var(--rds--color-white)`, `var(--rds--shadow-natural)`).
- Header markup: legacy rendered inline Tailwind classes directly on the `<h2>`
  (`px-6 py-4 text-base font-semibold border-b rounded-t-lg md:text-xl bg-gray-50 text-cu-black-800`);
  RDS2 uses a single `cu-stackedlist__header` BEM class with equivalent styling sourced from tokens.
- List item borders: legacy scoped border rules to `cu-stackedlist--posts` (e.g.
  `.cu-stackedlist--posts.cu-stackedlist--2 > li:nth-child(odd)`); RDS2 applies equivalent border/
  divider logic directly under `cu-stackedlist--cols-1`/`cu-stackedlist--cols-2` since the `posts`/
  `toc` distinction no longer exists.
- `cu-component-updated` marker class (present in legacy, used to flag partially-migrated components)
  is not present in RDS2 — no longer needed since the component is fully rebuilt.
- Root class gains a `cu-layout` marker in RDS2 (`cu-layout cu-stackedlist`), absent in legacy.
