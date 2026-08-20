# Dialog — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-dialog` BEM/SCSS classes; open/close-tracking `useEffect`
logic moved into a shared `useDialogElement` hook; the `aria-labelledby`/`aria-describedby` wiring
was fixed to reference actual element `id`s instead of raw text; a click-outside handler with a bug
was removed.

## Props Changes

None — the prop interface is unchanged (`children`, `title`, `description`, `isOpen`, `setIsOpen`).

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`fixed top-[50%] -translate-y-[50%] left-[50%]
-translate-x-[50%] z-[51] not-prose w-11/12 md:w-full md:min-w-96 md:max-w-md shadow-md rounded-md
p-3.5 m-0`, etc.) replaced with `cu-dialog`, `cu-dialog__body`, `cu-dialog__title`,
  `cu-dialog__description`.
- Open/close state syncing, body-scroll-lock class toggling, and Esc/backdrop-dismiss prevention
  (previously four separate `useEffect` hooks plus manual `cancel`/`close` event listeners) are now
  handled by the shared `useDialogElement` hook (`dismissible: false`).
- `aria-labelledby`/`aria-describedby` previously received the raw `title`/`description` **strings**
  directly (invalid usage — these attributes must reference element `id`s). RDS2 fixes this by
  assigning `id="cu-dialog-title"` / `id="cu-dialog-description"` to the corresponding elements and
  referencing those ids.
- The legacy `handleClick` handler called `setIsOpen(true)` on a click matching `dialogRef.current`
  (i.e. clicking the backdrop reopened rather than closed the dialog) — this handler was removed
  entirely in RDS2, since `Dialog` is intentionally non-dismissible via backdrop click.
- Title element changed from `<h3>` to `<h2>`.
- `ButtonGroup` no longer receives an explicit `gap="5"` prop (uses the component's default gap).
