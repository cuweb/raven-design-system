# ImageCover — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes and manual breakout/overlay logic replaced with `cu-*` BEM/SCSS and
standard WordPress layout classes; `imageZoom`, `focalPointX`, and `focalPointY` were removed,
a new `contentWidth` prop was added, and the overlay/wave rendering was reworked.

## Props Changes

| Prop           | Legacy                                                                                                 | RDS2                                                                  | Change                        |
| -------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | ----------------------------- |
| `maxWidth`     | `keyof maxWidthClasses` (broad set), no default                                                        | `'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'alignfull'` | Type narrowed / default added |
| `contentWidth` | _n/a_                                                                                                  | `'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'alignfull'` | Added                         |
| `image`        | `image?: string`, default `'nicol'`                                                                    | `image?: string`, no default (optional)                               | Default removed               |
| `imageZoom`    | `imageZoom?: number`, default `0`                                                                      | _removed_                                                             | Removed                       |
| `opacity`      | `opacity?: number`, default `90`, validated against a fixed 60–80 step set (`console.warn` on invalid) | `opacity?: number`, default `90`, no validation                       | Validation removed            |
| `focalPointX`  | `focalPointX?: string`, default `'50'`                                                                 | _removed_                                                             | Removed                       |
| `focalPointY`  | `focalPointY?: string`, default `'50'`                                                                 | _removed_                                                             | Removed                       |

## Deprecations

- `imageZoom` — no direct RDS2 replacement; background image can no longer be zoomed via `transform: scale`.
- `focalPointX` / `focalPointY` — no direct RDS2 replacement; background position is fixed at `50% 50%`.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`bg-cu-waves-repeating-bottom-red`, `w-screen`,
  `ml-offset-center`, `px-6 md:px-8 lg:px-14`, etc.) → `cu-*` BEM/SCSS classes
  (`cu-layout cu-imagecover`, `cu-imagecover--image`, `cu-imagecover__wave`) plus WordPress
  layout classes (`has-global-padding`, `is-layout-constrained`, `alignfull`/`alignwide`/`aligncontent`).
- Background image is now fully optional: legacy always applied a background image (defaulting
  to `'nicol'`) via inline styles; RDS2 only sets `--cu-imagecover-bg` (and the
  `cu-imagecover--image` modifier class) when an `image` prop is passed, otherwise the section
  falls back to a plain `background-color: var(--rds--color-grey-pale)`.
- Overlay structure changed: legacy applied the opacity overlay as a `background-color` inline
  style on the inner content wrapper only; RDS2 renders the overlay as a `::after`
  pseudo-element covering the entire `<section>`, independent of the content wrapper.
- Background image no longer supports zoom or focal-point positioning; position is fixed at
  `50% 50%`, and RDS2 adds `background-attachment: fixed` for a parallax effect not present in
  legacy.
- Breakout/width handling changed: legacy manually broke out of its container with
  `w-screen ml-offset-center`; RDS2 relies on standard WordPress alignment classes driven by the
  `maxWidth` prop, with content width independently controlled by the new `contentWidth` prop.
- Wave graphic reworked: legacy rendered an absolutely positioned `<div>` with a Tailwind
  repeating-background class overlapping the bottom edge of the image; RDS2 renders a dedicated
  `.cu-imagecover__wave` block-level element with its own background image, height, and margins,
  positioned after the content rather than overlapping it.
- Markup simplified: legacy nested content in `cu-imagecover-content` with a `cu-prose-first-last`
  class; RDS2 wraps children in a `has-global-padding {contentWidth}` div with no prose-reset
  class.
