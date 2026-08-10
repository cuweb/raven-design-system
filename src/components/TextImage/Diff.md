# TextImage — Diff (Legacy RDS → RDS2)

## Summary

`TextImage`'s row-breakpoint prop (`flexRow`) was removed — the row layout now always activates
at a single fixed `md` breakpoint instead of being configurable — and `flipYsm` was renamed to
`flipMobile` with its breakpoint normalized to match (fixing a legacy mismatch where the flip and
base row breakpoints could disagree). `TextImageContent` picked up many new props
(`preHeader`/`postHeader`/`content`/`size`/`align`/`isWhite`/`noUnderline`/`pronoun`/`imageMode`),
no longer renders an empty `PageHeader` when no `title` is given, replaced fixed pixel min-heights
with a configurable `imageMode` aspect ratio, defaulted mobile image visibility to shown (was
hidden), and fixed the `imageZoom` → `scale()` string-concatenation bug. Tailwind utility classes
were replaced with `cu-textimage__*` BEM/SCSS classes driven by design tokens.

## Props Changes

| Prop                                           | Legacy                                                                                                                 | RDS2                                                                                               | Change                                                              |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `children` (`TextImage`)                       | `children?: React.ReactNode`                                                                                           | `children: React.ReactNode`                                                                        | Made required                                                       |
| `maxWidth`                                     | default `'5xl'` (Tailwind scale)                                                                                       | default `'aligncontent'` (WP alignment keys)                                                       | Default changed (value set already WP keys elsewhere)               |
| `flexRow`                                      | `flexRow?: keyof flexRowClasses`, default `'lg'` — configurable row breakpoint                                         | _removed_ — row layout is always fixed at `md`                                                     | Removed                                                             |
| `flipYsm` → `flipMobile`                       | `flipYsm?: boolean` — `flex-col-reverse sm:flex-row` (flips stacking at `sm`, independent of the `flexRow` breakpoint) | `flipMobile?: boolean` — `column-reverse` below `md`, `row` at `md`+                               | Renamed; breakpoint now matches the base row breakpoint             |
| `preHeader`/`postHeader`/`content` (`Content`) | _n/a_                                                                                                                  | `preHeader?: string` / `postHeader?: string` / `content?: string` — passed through to `PageHeader` | Added                                                               |
| `size` (`Content`)                             | _n/a_ — size was hardcoded from `headerType`                                                                           | `size?: 'sm' \| 'md' \| 'lg' \| 'xl' \| 'primary'` — overrides the `headerType`-based default      | Added                                                               |
| `align` (`Content`)                            | _n/a_ — only `isCenter` existed                                                                                        | `align?: 'top' \| 'center'`, default `'center'`                                                    | Added (see also default-behavior note below)                        |
| `isWhite`/`noUnderline`/`pronoun` (`Content`)  | _n/a_                                                                                                                  | Passed through to `PageHeader`                                                                     | Added                                                               |
| `imageMode` (`Content`)                        | _n/a_ — media used a fixed `min-height` instead                                                                        | `imageMode?: 'stretch' \| '16/9' \| '4/3' \| '3/2' \| '2/3' \| '1/1'`, default `'stretch'`         | Added                                                               |
| `hasMobileImage` → `showOnMobile`              | `hasMobileImage?: boolean` — image hidden on mobile unless `true`                                                      | `showOnMobile?: boolean`, default `true` — image hidden on mobile only if explicitly `false`       | Renamed; **default flipped** — image now shows on mobile by default |

`imageUrl`, `contentWidth` (default `50`), `imageZoom` (default `0`), `focalPointX`/`focalPointY`
(default `50`/`50`), `title`, `headerType` (default `'h2'`), `metaData`, and `isCenter` are
otherwise unchanged in signature.

## Deprecations

- `flexRow` — no direct replacement; the row breakpoint is now fixed at `md` for every instance.
- `TextImageContent copy.tsx` (a duplicate/backup file present in the legacy folder) has no RDS2
  counterpart — not a public API, just leftover legacy scaffolding.

## Behavioral / Styling Changes

- Empty heading avoided: legacy always rendered `<PageHeader header={title ? title : ''} ...>`
  even when no `title` was passed (producing a `PageHeader` with an empty heading), and had a large
  block of dead, commented-out fallback `<h1>`/`<h2>` markup that was never reachable. RDS2 only
  renders `PageHeader` when `title` is truthy; otherwise it renders `children` directly with no
  `PageHeader` at all.
- Heading size resolution: legacy hardcoded the `PageHeader` `size` to `'md'` for `headerType="h2"`
  and `'lg'` for `"h1"`, with no way to override it. RDS2 computes
  `size ?? (headerType === 'h1' ? 'primary' : 'lg')` — consumers can now pass an explicit `size`,
  and the auto-derived defaults changed (`h2` → `'lg'` instead of `'md'`, `h1` → `'primary'`
  instead of `'lg'`).
- Vertical alignment default: legacy only centered content vertically when `isCenter` was `true`
  (`justify-center`); otherwise content used the flex default (effectively top-aligned). RDS2
  defaults `align` to `'center'` — content is vertically centered by default now unless `align="top"`
  is explicitly passed (`isCenter` still forces `'center'` the same as before).
- Image aspect ratio: legacy fixed the media block's height via `min-h-[360px] lg:min-h-[220px]`
  (arbitrary Tailwind values, always `bg-cover`, no aspect-ratio control). RDS2's default
  `imageMode="stretch"` keeps a flat `min-height: 360px` (no `lg` reduction), and any other
  `imageMode` value switches to a CSS `aspect-ratio` (via the `--cu-textimage-aspect` custom
  property) instead of a min-height, letting consumers pick `16/9`, `4/3`, `3/2`, `2/3`, or `1/1`.
- `imageZoom` scale calculation: legacy computed `transform: scale(1.${imageZoom})` via string
  concatenation (only behaves sensibly for single-digit `imageZoom` values) and always set a
  `transform`, even a no-op `scale(1.0)` when `imageZoom` was `0`. RDS2 computes
  `1 + imageZoom * 0.1` arithmetically and omits `transform` entirely when `imageZoom` is falsy.
- Row breakpoint consistency: legacy's `flipYsm` used its own `sm:flex-row` breakpoint independent
  of the `flexRow` prop's breakpoint (default `lg`), so a default-configured instance could flip
  columns at `sm` while the base layout didn't become a row until `lg` — an inconsistent
  intermediate state. RDS2's `--flip-mobile` reverses at the same fixed `md` breakpoint the base
  layout itself switches to `row` at, so there's no longer a breakpoint mismatch window.
- Class naming: Tailwind utility classes (`flex flex-col lg:flex-row gap-6 mx-auto md:gap-10`,
  `hidden lg:block`, `rounded`, `min-h-[360px] lg:min-h-[220px]`) → `cu-textimage`,
  `cu-textimage--reversed`, `cu-textimage--flip-mobile`, `cu-textimage__content`,
  `cu-textimage__content--top`, `cu-textimage__media-wrap`, `cu-textimage__media-wrap--aspect`,
  `cu-textimage__media-wrap--hide-mobile`, `cu-textimage__media` BEM classes, styled with
  `var(--rds--*)` tokens.
