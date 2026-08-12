# ImageGrid — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes were replaced with `cu-imagegrid` BEM/SCSS classes driven by design tokens.
`gridGap` was renamed to `gap` and its numeric Tailwind-scale values (`'0' | '2' | '5' | '10'`)
replaced with named t-shirt sizes (`'none' | 'sm' | 'md' | 'lg'`); `maxWidth` switched from the
Tailwind max-width scale to WordPress alignment keys. `ImageGrid.Image` no longer delegates its
caption to the shared `ImageCaptionOverlay` component — the overlay markup is now inlined and
scoped to `cu-imagegrid__overlay*`, dropping the legacy "Please add a title" placeholder and
removing the column-span-based responsive `order` hack.

## Props Changes

### `ImageGrid`

| Prop              | Legacy                                                                                   | RDS2                                                                     | Change                        |
| ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------- |
| `maxWidth`        | `'2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl' \| 'max' \| 'full'`, default `'5xl'` | `'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'aligncontent'` | Type changed; default changed |
| `gridGap` → `gap` | `gridGap?: '0' \| '2' \| '5' \| '10'`, default `'5'`                                     | `gap?: 'none' \| 'sm' \| 'md' \| 'lg'`, default `'sm'`                   | Renamed; values renamed       |

`children` and `cols` (`'1' | '2' | '3' | '4' | '1/3' | '2/3'`, default `'3'`) are unchanged in
signature.

### `ImageGrid.Image`

No prop signature changes — `imageUrl`, `focalPointX`/`focalPointY` (default `50`/`50`), `colSpan`
(default `'1'`), `rowSpan` (default `'1'`), `aspectRatio` (default `'landscape'`), `title`,
`content`, and `link` all carry over identically. The `colSpan`/`rowSpan`/`aspectRatio` types are
now declared inline as string unions instead of being derived from `propClasses` maps, but the
accepted values are the same.

## Deprecations

- `gridGap` — replaced by `gap`; the numeric values `'0' | '2' | '5' | '10'` have no direct
  equivalents and must be remapped to `'none' | 'sm' | 'md' | 'lg'`.
- `maxWidth` Tailwind-scale values (`'2xl'`–`'7xl'`, `'max'`, `'full'`) — no direct replacements;
  use the WordPress alignment keys instead.
- `ImageCaptionOverlay` — `ImageGrid.Image` no longer renders this shared component; its markup is
  inlined and scoped to `ImageGrid`.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`grid not-prose`, `md:grid-cols-3`, `gap-3 md:gap-5`,
  `max-w-5xl`, `col-span-*`, `row-span-*`, `aspect-[4/3]`, `relative overflow-hidden`,
  `bg-cover bg-center`, `rounded-lg bg-black`) → `cu-layout cu-imagegrid`,
  `cu-imagegrid--{one|two|three|four|one-third|two-thirds}`,
  `cu-imagegrid--gap-{none|sm|md|lg}`, `cu-imagegrid__item`, `cu-imagegrid__item--{aspectRatio}`,
  `cu-imagegrid__item--col-{n}`, `cu-imagegrid__item--row-{n}`, styled with `var(--rds--*)` tokens.
- The legacy `cu-imagegrid-{cols}` and `cu-component-updated` hook classes are gone; column layout
  is now expressed as the `cu-imagegrid--{name}` modifier.
- Span modifiers are only emitted when non-default: legacy always applied `col-span-1`/`row-span-1`
  classes, RDS2 omits the modifier entirely when `colSpan`/`rowSpan` is `'1'`.
- `1/3` and `2/3` layouts changed: legacy used a 3-column grid with a last/first child spanning two
  columns at `lg`; RDS2 uses explicit `33% auto` / `66% auto` two-column templates at `md`.
- Column breakpoints changed: legacy applied all multi-column layouts at `md` (with `4` stepping
  `md:grid-cols-2 lg:grid-cols-4`); RDS2 uses `sm` for the two-column layouts (`--two`, and the
  first step of `--four`), `md` for `--three`/`--one-third`/`--two-thirds`, and `lg` for the final
  four-column step.
- `colSpan="3"` now also overrides the item's aspect ratio to `6/3` at `md`+; the legacy version
  kept whatever `aspectRatio` was passed.
- Responsive `order` hack removed: legacy applied `md:order-1 lg:order-none` to any item whose
  `colSpan` wasn't `'2'`. RDS2 does not reorder items — DOM order is visual order.
- Overlay title placeholder removed: legacy rendered `'Please add a title'` when `title` was empty
  but `content` was present. RDS2 renders only the fields actually supplied.
- Overlay markup/structure: the shared `ImageCaptionOverlay` (`bg-black/75 text-white absolute ...`,
  `hover:bg-cu-red`) is replaced by an inline `cu-imagegrid__overlay` element with
  `cu-imagegrid__overlay--linked`, `cu-imagegrid__overlay-link`, `cu-imagegrid__overlay-title`, and
  `cu-imagegrid__overlay-content` children. Link handling still goes through `useLinkContext()`.
- Accessibility: image items with no `title` and no `content` are now decorative and get
  `aria-hidden="true"`; legacy exposed every background-image `div` to the accessibility tree.
