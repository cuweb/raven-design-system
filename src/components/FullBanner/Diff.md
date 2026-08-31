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

| Prop              | Legacy                                                   | RDS2                     | Change           |
| ----------------- | -------------------------------------------------------- | ------------------------ | ---------------- |
| `videoName`       | `videoName?: VideoNameKeys`, default `'campus-2025'`     | _removed_                | Removed          |
| `videoBannerList` | `videoBannerList?: VideoBannerItem[]` (accepted, unused) | _removed_                | Removed          |
| `src`             | _n/a_                                                    | `src: string` (required) | Added (required) |

`VideoNameKeys` was derived from `utils/json-lists.js` (`(typeof videoBanner)[number]['name']`), so the
set of playable videos was closed at build time. `videoBannerList` was declared on
`FullBannerVideoProps` and forwarded to `VideoBanner`, but `VideoBanner` never destructured it — it had
no effect. Both are gone in RDS2, replaced by a single required `src` URL.

## Deprecations

- `FullBanner.Content` — removed as a subcomponent. Its `title`, `headerType`, `justify`, and
  `opacity` props are now props on `FullBanner` itself; `FullBannerContentProps` is no longer exported.
- `FullBanner.Image` — removed as a subcomponent. Use the `image` / `imageAlt` props, or pass an
  arbitrary node via `media`. `FullBannerImageProps` is no longer exported.
- `videoName` / `videoBannerList` on `FullBanner.Video` — no direct replacement. The
  `useVideoBanner` hook (`VideoBanner`, `VideoBannerItem`), the `videoBanner` JSON list, the
  `VideoNameKeys` union, the imperative `VideoControls()` DOM helper, the `PlayPauseButton`
  subcomponent, and the CDN URL convention
  (`https://cdn.carleton.ca/cu-media/videos/banner/{name}.{webm,mp4}`) are all gone; consumers must now
  supply a video URL explicitly via `src`.
- `videoType` — legacy `FullBanner.Video` hard-coded `videoType="banner"` when calling `VideoBanner`;
  the `'banner' | 'splash'` distinction no longer exists in RDS2.
- `showPlayPauseButton` — `VideoBanner` exposed this toggle (default `true`), but `FullBanner.Video`
  never forwarded it. RDS2 always renders the toggle button and offers no opt-out.

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
- Video markup/structure changed: legacy `FullBanner.Video` was a thin pass-through to the shared
  `VideoBanner` hook component, which returned a fragment containing a bare `<video>` plus an
  absolutely-positioned `PlayPauseButton` wrapper. RDS2's `FullBannerVideo` owns its own markup and
  wraps everything in a `.cu-fullbanner__video-wrap` element.
- Video class naming: `cu-video rounded-none w-full h-auto bg-black not-prose` and the Tailwind
  control wrapper (`absolute right-0 -translate-x-4 md:-translate-x-6 xl:-translate-x-10 bottom-4
lg:bottom-8 z-50`) → `cu-fullbanner__video`, `cu-fullbanner__video-wrap`, and
  `cu-fullbanner__video-toggle` in SCSS. The shared `cu-video` / `cu-video-controls` hooks that
  `VideoControls()` queried by class name no longer exist.
- Video playback control rewritten from imperative DOM to React state: legacy ran a `useEffect` that
  called `VideoControls()`, which walked `document.getElementsByClassName('cu-video')`, called
  `video.load()`, used `video.closest('section')` to find the button, attached a `click` listener, and
  guarded re-init with a `data-initialized` attribute. RDS2 uses a `useRef` on the `<video>` and an
  `isPlaying` state flag with an `onClick` handler — no global DOM queries, no `section` ancestor
  requirement, and no reliance on `.cu-video` being unique.
- Video accessibility changed: legacy labelled the `<video>` itself with `aria-label` from the JSON
  `description` (falling back to `'Default video description'`), gave it `id="video-banner"` and
  `tabIndex={-1}`, and its button used static `aria-label`/`title` of `"Pause video"` that
  `VideoControls` swapped to `"Play video"`. RDS2 treats the video as decorative with
  `aria-hidden="true"` (no `id`, no `tabIndex`) and puts the accessible name on the `<button>` via a
  React-driven `aria-label` of `Pause background video` / `Play background video`; `title` is no
  longer set.
- Video sources changed: legacy emitted two `<source>` elements (`.webm` then `.mp4`) with explicit
  `type` attributes built from the CDN path, plus a `<p>Your browser does not support the video tag.</p>`
  fallback. RDS2 emits a single `<source src={src} />` with no `type` and no text fallback.
- Video attributes: `autoPlay muted loop playsInline` are unchanged; legacy's explicit
  `controls={false}` is dropped (native controls are off by default).
- Toggle button placement/appearance changed: legacy sat bottom-right with responsive negative
  translations, `w-8 h-8 md:w-14 md:h-14`, `rounded-lg`, `bg-black/70`, `hover:bg-cu-red-700`, and a
  Font Awesome-style play/pause SVG path. RDS2 pins it top-right at `var(--rds--spacing-small)`,
  fixed `2rem` square, `--rds--radius-full`, `rgba(0,0,0,0.5)` → `0.75` on hover, with inline 14×14
  `PauseIcon` / `PlayIcon` SVGs and a `:focus-visible` outline (legacy had no focus style).
- `type="button"` is now set on the toggle so it can't submit a surrounding form.
- Legacy global overrides that reached outside the component
  (`.cu-main > .cu-section > .cu-fullbanner:first-of-type` negative margins, forced white headings,
  `.cu-pageheader { margin-bottom: 0 }`, `img { rounded-none; margin: 0 }`) are gone; RDS2 styles
  are scoped to the `cu-fullbanner` block.
