# TextMedia — Diff (Legacy RDS → RDS2)

## Summary

Legacy's two media subcomponents (`TextMedia.BgImage` for background-image photos with
zoom/focal-point/border controls, and `TextMedia.Aside` for arbitrary wrapped media) were merged
into a single, simpler `TextMedia.Media` that just wraps `children` (e.g. a real `<img>` or
`Embed`) with a vertical `align` option — image cropping/zoom/focal-point/border props have no
direct replacement. The root `TextMedia` gained a configurable `flexRow` breakpoint, `maxWidth`,
and `flipMobile`, renamed `reverse` to `flipX`, and dropped its built-in vertical margin.
`TextMedia.Content`'s `title` became optional (and no longer always renders `PageHeader`), picked
up the same expanded `PageHeader` passthrough props as `TextImageContent`, and its `align`/`width`
props were repurposed with different types/defaults. Tailwind utility classes were replaced with
`cu-textmedia__*` BEM/SCSS classes driven by design tokens.

## Props Changes

| Prop                                                                       | Legacy                                                                                                                | RDS2                                                                                             | Change                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| `children` (`TextMedia`)                                                   | `children?: React.ReactNode`                                                                                          | `children: React.ReactNode`                                                                      | Made required                                         |
| `reverse` → `flipX`                                                        | `reverse?: boolean`                                                                                                   | `flipX?: boolean`                                                                                | Renamed (same effect: reverses row order at `lg`)     |
| `maxWidth` (`TextMedia`)                                                   | _n/a_ — width unconstrained (just `mx-auto`)                                                                          | `maxWidth?: keyof maxWidthClasses`, default `'aligncontent'` (WP alignment keys)                 | Added                                                 |
| `flexRow` (`TextMedia`)                                                    | _n/a_ — row breakpoint hardcoded at `lg`                                                                              | `flexRow?: 'sm' \| 'md' \| 'lg'`, default `'lg'`                                                 | Added — row breakpoint now configurable               |
| `flipMobile` (`TextMedia`)                                                 | _n/a_                                                                                                                 | `flipMobile?: boolean` — stacks `column-reverse` below `sm`                                      | Added                                                 |
| `title` (`Content`)                                                        | `title: string` (required)                                                                                            | `title?: string` (optional)                                                                      | Made optional                                         |
| `preHeader`/`postHeader`/`content`/`metaData`/`size`/`pronoun` (`Content`) | _n/a_                                                                                                                 | Added — passed through to `PageHeader`                                                           | Added                                                 |
| `width` (`Content`)                                                        | `width?: number`, default `60`                                                                                        | `width?: number`, no default (no `flex-basis` override unless set)                               | Default removed                                       |
| `align` (`Content`)                                                        | `align?: keyof justifyContentClasses` (`'start' \| 'center' \| 'end'`), default `'start'` — horizontal text alignment | `align?: 'top' \| 'center'`, default `'top'` — vertical flex alignment                           | Repurposed — different type, values, and axis         |
| `hasUnderline` → `noUnderline`                                             | `hasUnderline?: boolean`, default `true` (underline shown)                                                            | `noUnderline?: boolean`, default `false` (via `PageHeader`'s own default — underline shown)      | Renamed/inverted — same effective default             |
| `isLight` (`Content`)                                                      | `isLight?: boolean` — passed through to `PageHeader`                                                                  | _removed_                                                                                        | Removed                                               |
| `TextMedia.BgImage`                                                        | `imageUrl: string`, `imageZoom?: number`, `focalPointX?`/`focalPointY?: number`, `hasBorder?: boolean`                | _removed_ — merged into `TextMedia.Media`                                                        | Removed (see `TextMedia.Media` below)                 |
| `TextMedia.Aside`                                                          | `align?: keyof marginAutoClasses`, `hasBorder?: boolean`                                                              | _removed_ — merged into `TextMedia.Media`                                                        | Removed (see `TextMedia.Media` below)                 |
| `TextMedia.Media`                                                          | _n/a_                                                                                                                 | `children: React.ReactNode` (required), `align?: 'top' \| 'center' \| 'bottom'`, default `'top'` | Added — unified replacement for `BgImage` and `Aside` |

## Deprecations

- `TextMedia.BgImage` and `TextMedia.Aside` — no longer exist as separate exports; both are
  replaced by the single `TextMedia.Media`, which only wraps `children`.
- `imageUrl`, `imageZoom`, `focalPointX`, `focalPointY` (previously on `BgImage`) — no direct
  replacement. `TextMedia.Media` has no background-image/zoom/focal-point mechanism at all;
  consumers must supply a real `<img>` (or other media element) as `children` and handle
  cropping/positioning themselves.
- `hasBorder` (previously on both `BgImage` and `Aside`, adding an 8px white border/padding
  treatment) — no direct replacement in `TextMedia.Media`.
- `isLight` (`Content`) — no direct replacement.
- The legacy `align` value set (`'start' | 'center' | 'end'`, horizontal) for `Content` — no direct
  replacement; the new `align` (`'top' | 'center'`, vertical) is a different concept under the same
  prop name.

## Behavioral / Styling Changes

- Media subcomponents merged: legacy offered two distinct, purpose-built media wrappers —
  `BgImage` (a `background-image` div with zoom/focal-point support, always `rounded-xl`) and
  `Aside` (a generic flex-item wrapper for arbitrary child media, with margin-based horizontal
  alignment). RDS2 replaces both with one `TextMedia.Media`, a plain flex column wrapper around
  real child elements; `.cu-textmedia__media` instead styles any `img`/`iframe`/`.cu-embed-iframe`
  children directly (rounded corners, `width: 100%`, and a fixed `16 / 9` `aspect-ratio` for
  embeds) rather than the component managing a CSS background-image itself.
- Empty heading avoided: legacy always rendered `<PageHeader header={title} ...>` (and `title` was
  a required prop, so this was always populated). RDS2's `title` is optional and `PageHeader` is
  only rendered when `title` is truthy; otherwise `children` render directly with no `PageHeader`.
- Row breakpoint: legacy always switched to a row layout at `lg` with no way to change it. RDS2's
  `flexRow` prop (default `'lg'`, matching legacy) lets consumers switch to `sm` or `md` instead.
- Root vertical margin removed: legacy applied its own `my-6 md:my-12 first:mt-0` margin directly
  on the root element. RDS2 has no equivalent — spacing between this component and its siblings is
  no longer baked into the component itself.
- Markup: legacy wrapped its root `<div>` in an unnecessary React fragment (`<>...</>`); RDS2
  returns the `<div>` directly with no wrapping fragment (no visual difference).
- Content width default: legacy's `Content` defaulted to a `60%` flex-basis (`width = 60`) even
  when not explicitly set. RDS2 has no default — the content only gets an explicit flex-basis when
  `width` is passed, otherwise it behaves as a normal `flex: 1` item.
- Class naming: Tailwind utility classes (`flex flex-col lg:flex-row gap-6 md:gap-10`,
  `border-8 border-solid border-white rounded-xl bg-white`, `bg-no-repeat bg-cover`) →
  `cu-textmedia`, `cu-textmedia--row-{sm,md,lg}`, `cu-textmedia--reversed`,
  `cu-textmedia--flip-mobile`, `cu-textmedia__content`, `cu-textmedia__content--center`,
  `cu-textmedia__media`, `cu-textmedia__media--center`, `cu-textmedia__media--bottom` BEM classes,
  styled with `var(--rds--*)` tokens.
