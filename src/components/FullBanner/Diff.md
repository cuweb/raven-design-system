# FullBanner — Diff (Legacy RDS → RDS2)

## Summary

The compound API collapsed from four parts (`FullBanner` + `.Content` + `.Image` + `.Video`) to a
single configurable component with only `.Video` retained as a subcomponent — image, overlay, and
heading content are now driven by props on `FullBanner` itself. Tailwind utility classes were
replaced with `cu-*` BEM/SCSS, and `FullBanner.Video` switched from a CDN video-name lookup to an
explicit `src`.

## Props Changes

### `FullBanner`

| Prop          | Legacy                                | RDS2                                                        | Change                     |
| ------------- | ------------------------------------- | ----------------------------------------------------------- | -------------------------- |
| `title`       | _n/a_ (on `FullBanner.Content`)       | `title: string` (required)                                  | Moved up / now required    |
| `content`     | _n/a_                                 | `content?: string`                                          | Added                      |
| `headerType`  | on `.Content`, default `'h1'`         | `headerType?: 'h1' \| 'h2'`, default `'h2'`                 | Moved up + default changed |
| `justify`     | on `.Content`, default `'start'`      | `justify?: 'start' \| 'end' \| 'center'`, default `'start'` | Moved up                   |
| `opacity`     | on `.Content`, `60\|65\|…\|100`, `70` | `opacity?: number` (free value, `%`), default `70`          | Moved up + type widened    |
| `image`       | _n/a_ (via `FullBanner.Image`)        | `image?: string`                                            | Added                      |
| `imageAlt`    | _n/a_                                 | `imageAlt?: string`, default `''`                           | Added                      |
| `media`       | _n/a_                                 | `media?: React.ReactNode`                                   | Added                      |
| `focalPointX` | _n/a_                                 | `focalPointX?: number`, default `50`                        | Added                      |
| `focalPointY` | _n/a_                                 | `focalPointY?: number`, default `50`                        | Added                      |
| `maxWidth`    | _n/a_ (always full-bleed)             | `maxWidth?: keyof maxWidthClasses`, default `'alignwide'`   | Added                      |
| `contentBox`  | _n/a_                                 | `contentBox?: 'sm' \| 'md'`, default `'sm'`                 | Added                      |

### `FullBanner.Video`

| Prop              | Legacy                                | RDS2                     | Change           |
| ----------------- | ------------------------------------- | ------------------------ | ---------------- |
| `videoName`       | `videoName?: VideoNameKeys`           | _removed_                | Removed          |
| `videoBannerList` | `videoBannerList?: VideoBannerItem[]` | _removed_                | Removed          |
| `src`             | _n/a_                                 | `src: string` (required) | Added (required) |

## Deprecations

- `FullBanner.Content` — removed as a subcomponent. Its `title`, `headerType`, `justify`, and
  `opacity` props are now props on `FullBanner` itself; `FullBannerContentProps` is no longer exported.
- `FullBanner.Image` — removed as a subcomponent. Use the `image` / `imageAlt` props, or pass an
  arbitrary node via `media`. `FullBannerImageProps` is no longer exported.
- `videoName` / `videoBannerList` on `FullBanner.Video` — no direct replacement. The
  `useVideoBanner` hook, the `videoBanner` JSON list, and the CDN URL convention
  (`https://cdn.carleton.ca/cu-media/videos/banner/{name}.{webm,mp4}`) are gone; consumers must now
  supply a video URL explicitly via `src`.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`bg-cu-black-900 relative w-screen ml-offset-center`,
  `cu-prose-light lg:absolute lg:bottom-8`, `max-w-screen-2xl mx-auto flex`, `bg-opacity-[.70]`,
  `lg:max-w-3xl`) → `cu-*` BEM/SCSS (`cu-layout cu-fullbanner`, `cu-fullbanner__media`,
  `cu-fullbanner__img`, `cu-fullbanner__overlay`, `cu-fullbanner__wrap`, `cu-fullbanner__inner--*`,
  `cu-fullbanner__box--sm|--md`) plus WordPress alignment classes from `maxWidth`.
- Root element changed from `<section>` to `<div>`, and the legacy `<>…</>` fragment wrapper in
  `FullBannerContent` is gone.
- Width handling changed: legacy always broke out of its container with `w-screen ml-offset-center`;
  RDS2 uses the `maxWidth` prop with WordPress alignment classes and defaults to `alignwide`
  (rounded corners via `--rds--radius-md`, squared off only when `alignfull`).
- Opacity implementation changed: legacy applied a Tailwind `bg-opacity-*` class to the content box
  from a fixed 60–100 step set; RDS2 renders a dedicated `.cu-fullbanner__overlay` element over the
  media, driven by a `--cu-fullbanner-overlay` CSS custom property computed from any numeric
  `opacity`. The content box itself now uses `color-mix(... 90%, transparent)` at `lg` and up.
- Media is now optional and conditionally rendered — the `cu-fullbanner__media` wrapper (and its
  overlay) only renders when `image` or `media` is provided. Legacy always expected an image or
  video to be composed in as a child.
- Focal point support added: `focalPointX` / `focalPointY` set `object-position` on the image, and
  the image/video are capped at `max-height` 480px (`md`) / 580px (`lg`) with `object-fit: cover`.
- `PageHeader` size mapping changed: legacy passed `size="md"` for `h1` and `size="sm"` for `h2`;
  RDS2 passes `size="primary"` and `size="lg"` respectively, and forwards the new `content` prop.
  `isWhite` and `noUnderline` are still applied in both. Legacy rendered `children` inside
  `PageHeader`; RDS2 renders `children` as a sibling after it, inside the content box.
- Video accessibility/controls reworked: legacy rendered the video via `VideoBanner`
  (`aria-label` from a JSON description, `id="video-banner"`, `tabIndex={-1}`) with an imperative
  `VideoControls()` effect and a separate `PlayPauseButton`. RDS2's `FullBannerVideo` is
  self-contained React state — the `<video>` is `aria-hidden="true"` as decorative background, and a
  `<button>` with a dynamic `aria-label` (`Pause background video` / `Play background video`) and a
  `:focus-visible` outline toggles playback. Legacy sourced both `.webm` and `.mp4`; RDS2 emits a
  single `<source src={src} />` with no `type`.
- Legacy global overrides that reached outside the component
  (`.cu-main > .cu-section > .cu-fullbanner:first-of-type` negative margins, forced white headings,
  `.cu-pageheader { margin-bottom: 0 }`, `img { rounded-none; margin: 0 }`) are gone; RDS2 styles
  are scoped to the `cu-fullbanner` block.
