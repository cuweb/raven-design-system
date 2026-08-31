# Alert — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-alert` BEM/SCSS classes; the `size` prop was removed;
default `type` changed from `success` to `info`; the component now spreads `...rest` HTML attributes
and adds `role="alert"` for accessibility.

## Props Changes

| Prop      | Legacy                                  | RDS2                                                           | Change          |
| --------- | --------------------------------------- | -------------------------------------------------------------- | --------------- |
| `size`    | `'sm' \| 'md' \| 'lg'` (default `'sm'`) | _removed_                                                      | Removed         |
| `type`    | default `'success'`                     | default `'info'`                                               | Default changed |
| `content` | `React.ReactNode \| string`             | `React.ReactNode`                                              | Type narrowed   |
| `...rest` | not supported                           | `Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>` spread | Added           |

## Deprecations

The `size` prop (and its `sm`/`md`/`lg` icon/title scaling) has no direct RDS2 replacement — RDS2
renders a single fixed size.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`flex rounded-md p-4`, `text-sm md:text-base font-semibold`,
  etc.) replaced with `cu-alert`, `cu-alert--{type}`, `cu-alert__icon`, `cu-alert__body`,
  `cu-alert__title`, `cu-alert__content`.
- Icon color is no longer set via inline hex values (`#d32f2f`, `#fbc02d`, `#1976d2`, `#388e3c`) —
  color is driven entirely by the `cu-alert--{type}` class and design tokens.
- Icon size is no longer dynamic based on `size` — fixed at `24`.
- New `role="alert"` on the root element so screen readers announce the alert immediately.
- New `...rest` passthrough allows consumers to override/add HTML attributes (e.g. additional
  `aria-*` attributes), which the legacy component did not support.
