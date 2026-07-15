# Avatar — Diff (Legacy RDS → RDS2)

## Summary

The nested `user` object prop was flattened into top-level props, the `size` scale was reduced
from 7 values to 3, and the component now renders a real `<button>` when interactive (with a
properly wired `onClick` and `aria-label`) instead of only toggling a cursor style.

## Props Changes

| Prop              | Legacy                                                                                                                              | RDS2                                                                                                                          | Change                                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `user`            | `user: UserInfoType` (`{ firstName, lastName, image?, info? }`)                                                                     | _removed_ — flattened into top-level props                                                                                    | Removed (flattened)                                                                                                          |
| `firstName`       | `user.firstName: string` (required)                                                                                                 | `firstName: string` (required)                                                                                                | Moved to top level                                                                                                           |
| `lastName`        | `user.lastName: string` (required)                                                                                                  | `lastName?: string` (optional)                                                                                                | Moved to top level / now optional                                                                                            |
| `src`             | `user.image.src: string \| undefined`                                                                                               | `src?: string`                                                                                                                | Moved to top level, renamed from `image.src`                                                                                 |
| `alt`             | `user.image.alt: string \| undefined`                                                                                               | `alt?: string`                                                                                                                | Moved to top level, renamed from `image.alt`; now used as the accessible name on the wrapper instead of the (hidden) `<img>` |
| `image.width`     | `user.image.width?: string`                                                                                                         | _removed_                                                                                                                     | Removed                                                                                                                      |
| `image.height`    | `user.image.height?: string`                                                                                                        | _removed_                                                                                                                     | Removed                                                                                                                      |
| `image.className` | `user.image.className?: string`                                                                                                     | _removed_                                                                                                                     | Removed                                                                                                                      |
| `info`            | `user.info?: React.ReactNode`                                                                                                       | _removed_                                                                                                                     | Removed                                                                                                                      |
| `size`            | 7 options: `xs \| sm \| md \| lg \| xl \| 2xl \| 4xl`, default `'xl'`                                                               | 3 options: `sm \| md \| lg`, default `'md'`                                                                                   | Reduced value set / default changed                                                                                          |
| `onClick`         | `(event: React.MouseEvent<HTMLElement>) => void`; accepted but never attached to an element — only toggled a `cursor-pointer` class | `React.MouseEventHandler<HTMLButtonElement>`; when provided, renders a `<button>` with the handler wired and `aria-label` set | Behavior fixed — now functional                                                                                              |

## Deprecations

- `image.width` / `image.height` / `image.className` — no direct replacement; the image now
  always fills its container via `object-fit: cover`.
- `info` — no direct replacement (it was unused in the legacy render output as well).
- `size` values `xl`, `2xl`, `4xl` — no direct replacement; `lg` is now the largest available size.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`text-xs h-8 w-8`, `bg-cu-black-100`, `rounded-full` /
  `rounded-md`, etc.) → `cu-*` BEM/SCSS classes (`cu-avatar`, `cu-avatar--sm|md|lg`,
  `cu-avatar--circle|square`, `cu-avatar__image`, `cu-avatar__initials`).
- Root markup: legacy always rendered a bare `<img>` or `<div>` with no semantic role; RDS2
  renders a `<button type="button">` when `onClick` is provided, otherwise a `<div role="img"
aria-label>` — giving non-interactive avatars an accessible name and interactive avatars real
  button semantics.
- Accessibility: legacy set a descriptive `alt` on the `<img>` but then hid it with
  `aria-hidden="true"` (so the alt text was never exposed to assistive tech). RDS2 always renders
  the image/initials with `aria-hidden="true"` and instead exposes the accessible name via
  `aria-label` on the wrapping `<button>`/`<div>` (falling back to `firstName`/`lastName`).
- Focus styling: legacy applied focus-ring Tailwind classes (`focus:ring-2 …`) to every avatar
  regardless of interactivity; RDS2 only applies focus-visible outline styling to the `<button>`
  variant — non-interactive avatars have no focus styles.
- Initials casing: RDS2 applies `text-transform: uppercase` in CSS so initials are always
  uppercase regardless of input casing; legacy relied on whatever casing was passed in.
- Shape naming: legacy mapped `isCircle` to a rounded-corner utility class with no explicit
  semantic name; RDS2 uses explicit `cu-avatar--circle` / `cu-avatar--square` modifier classes.
