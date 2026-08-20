# Toast — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-toast`/`cu-toaster` BEM/SCSS classes; the compound API
dropped its `Toast.Title` and `Toast.Content` subcomponents in favor of direct `title`/`content`
props on `Toast`; accessibility roles and labeling were added.

## Props Changes

| Prop      | Legacy                             | RDS2                             | Change |
| --------- | ---------------------------------- | -------------------------------- | ------ |
| `title`   | rendered via `Toast.Title` child   | `title: string` prop             | Added  |
| `content` | rendered via `Toast.Content` child | `content?: React.ReactNode` prop | Added  |

## Deprecations

`Toast.Title` and `Toast.Content` subcomponents were removed with no direct replacement — their
content is now passed via the `title` and `content` props on `Toast` itself.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`pointer-events-auto w-full max-w-sm overflow-hidden
rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transform transition ease-in
duration-200`, etc.) replaced with `cu-toast`, `cu-toast--{type}`, `cu-toast--hidden`,
  `cu-toast__inner`, `cu-toast__icon`, `cu-toast__body`, `cu-toast__title`, `cu-toast__content`,
  `cu-toast__close`. Similarly `Toaster` classes replaced with `cu-toaster` / `cu-toaster__stack`.
- The transition-out state is now driven by a single `cu-toast--hidden` class instead of a
  Tailwind conditional class string (`translate-y-0 opacity-200 ...` vs `translate-y-2 opacity-0 ...`).
- Icon colors are no longer set via inline hex values (`#4ade80`, `#facc15`, `#e91c24`, `#2563eb`) —
  driven by the `cu-toast--{type}` class and design tokens.
- `Toaster` gains `aria-atomic="true"` in addition to the pre-existing `aria-live="assertive"`.
- Each `Toast` now carries `role="status"`, a live-region role not present in the legacy markup.
- The close button gained an explicit `aria-label="Dismiss notification"` (legacy relied on a
  visually-hidden "Close" `<span className="sr-only">` instead).
- Close (`xmark`) icon size changed from `20` to `16`; content icon size changed from `24` to `20`.
