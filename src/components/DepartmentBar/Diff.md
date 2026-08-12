# DepartmentBar — Diff (Legacy RDS → RDS2)

## Summary

`FooterDept` was renamed to `DepartmentBar` (folder moved out from under `Footer`) with its prop
interface otherwise carried over closely: `footerButtons` was renamed to `buttons` and now uses the
shared, exported `FooterButton` type instead of a local inline interface. The email link now goes
through `useLinkContext()` instead of a raw `<a>`, non-primary action buttons switched from
`color="white"` to `color="dark-grey"`, and the button row now uses the real `ButtonGroup`
component instead of a manually-styled `<div>`. Tailwind utility classes were replaced with
`cu-department-bar__*` BEM/SCSS classes driven by design tokens.

## Props Changes

| Prop                        | Legacy                                                                                          | RDS2                                                                                  | Change                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `footerButtons` → `buttons` | `footerButtons?: FooterButtons[]` (local inline type: `id: number; title: string; url: string`) | `buttons?: FooterButton[]` (shared, exported type from `data/FooterData`, same shape) | Renamed; type now shared/exported instead of local |

`deptName`, `buildingName`, `officeNumber`, `phone`, and `email` are unchanged in signature.

## Deprecations

None — `url` on each button item remains declared but unused in the render in both versions (not
newly deprecated, just never wired up to the `Button` in either implementation).

## Behavioral / Styling Changes

- Component/file rename: `FooterDept` (nested under `Footer/`) → `DepartmentBar` (its own top-level
  component folder) — same component, no behavior change from the rename itself.
- Email link: legacy rendered a raw `<a href={`mailto:${email}`}>`. RDS2 renders it via the
  `LinkComponent` returned by `useLinkContext()`, so consumers can swap in a framework-specific
  link component the same way other RDS2 components do.
- Button row: legacy hand-built the button row as a `<div className="flex flex-wrap justify-center
gap-5 md:justify-end cu-buttongroup md:flex-1">` (applying the `cu-buttongroup` class name to a
  plain `<div>` rather than rendering the actual component). RDS2 uses the real
  `<ButtonGroup align="end">` component.
- Non-primary button color: legacy colored every button after the first with `color="white"`;
  RDS2 uses `color="dark-grey"` instead.
- Heading font weight: legacy's `deptName` heading used `font-semibold`; RDS2's
  `cu-department-bar__name` uses `font-weight: var(--rds--font-weight-bold)` — a heavier weight
  than before.
- Class naming: Tailwind utility classes (`px-8 py-6 bg-cu-black-50 md:px-10 md:py-8`,
  `divide-x lg:flex lg:divide-cu-black-300`, `text-cu-red-700 hover:underline`) →
  `cu-department-bar`, `cu-department-bar__inner`, `cu-department-bar__info`,
  `cu-department-bar__name`, `cu-department-bar__meta`, `cu-department-bar__meta-item`,
  `cu-department-bar__email`, `cu-department-bar__actions` BEM classes, styled with
  `var(--rds--*)` tokens (background, max-width, dividers, and the email link color
  (`var(--rds--color-primary-dark)`) all moved from hardcoded Tailwind colors to tokens).
