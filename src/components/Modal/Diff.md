# Modal — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-modal` BEM/SCSS classes; `maxWidth`/`noProse`/`content`
props were removed in favor of a simpler `size` prop and children-only content; `ariaDescription`
was renamed to `ariaDescribedBy`; open/close, Esc-key, and click-outside logic moved into a shared
`useDialogElement` hook; the `onClose` callback prop was removed.

## Props Changes

| Prop              | Legacy                                            | RDS2                                                      | Change                               |
| ----------------- | ------------------------------------------------- | --------------------------------------------------------- | ------------------------------------ |
| `maxWidth`        | `keyof typeof maxWidthClasses` (default `'4xl'`)  | _removed_                                                 | Removed                              |
| `size`            | _n/a_                                             | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` (default `'md'`) | Added                                |
| `content`         | `string` (rendered via `dangerouslySetInnerHTML`) | _removed_                                                 | Removed                              |
| `noProse`         | `boolean` (default `false`)                       | _removed_                                                 | Removed                              |
| `ariaDescription` | `string`, required                                | `ariaDescribedBy?: string`, optional                      | Renamed, type changed, made optional |
| `onClose`         | `() => void`                                      | _removed_                                                 | Removed                              |
| `children`        | `React.ReactNode`, optional                       | `React.ReactNode`, required                               | Now required                         |

## Deprecations

- `content` (raw HTML string rendering via `dangerouslySetInnerHTML`) was removed with no direct
  replacement — consumers must render sanitized content via `children` instead.
- `noProse` was removed with no direct replacement — RDS2 does not apply prose styling to modal
  content by default.
- `onClose` was removed with no direct replacement — consumers should react to `isOpen` transitioning
  to `false` via `setIsOpen` instead.
- `maxWidth`'s full class-keyed API (`keyof typeof maxWidthClasses`) was removed in favor of the
  fixed 5-value `size` prop; there is no exact one-to-one mapping between old and new width values.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`fixed top-[50%] -translate-y-[50%] ... w-11/12
${maxWidthClasses[maxWidth]} shadow-md rounded-md py-6 md:py-10 h-auto max-h-[90vh] overflow-hidden`,
  etc.) replaced with `cu-modal`, `cu-modal--{size}`, `cu-modal--align-top`, `cu-modal__close`,
  `cu-modal__content`.
- Open/close state syncing, body-scroll-lock class toggling, Esc-key handling, and click-outside
  detection (previously four separate `useEffect` hooks with manual `document` event listeners) are
  now handled by the shared `useDialogElement` hook, which also exposes `handleBackdropClick` wired
  directly to the dialog's `onClick`.
- The legacy component manually early-returned `null` when `!isOpen`; RDS2's dialog element is always
  rendered and its visibility is controlled by the native `<dialog>` open/close behavior via
  `useDialogElement`.
- Close button icon changed from an inline `<svg>` to the shared `<Icon name="xmark" size={16} />` component.
- `aria-describedby` is now optional (`ariaDescribedBy`) instead of a required string, and is
  expected to be an element `id` rather than an arbitrary description string.
