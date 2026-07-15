# Description — Diff (Legacy RDS → RDS2)

## Summary

Public props are unchanged across `Description`, `Description.Meta`, and
`Description.Accordion`. The accordion's open/closed state moved from an imperative DOM-manipulation
script (`script.ts`, toggling classes/attributes via `querySelector`/`closest`) to React
`useState`, and its clickable trigger changed from a `<div role="button">` to a semantic
`<button>`. The shared `Description.Styles.ts` object and Tailwind utility classes were replaced
by `cu-description__*` BEM/SCSS classes driven by design tokens.

## Props Changes

No prop signatures changed. `Description`, `Description.Meta` (`term`, `children`, `useColumns`),
and `Description.Accordion` (`term`, `children`) all carry over as-is (`useColumns` now has an
explicit `= false` default in RDS2, matching its effectively-falsy legacy behavior).

## Deprecations

- `script.ts` (the imperative `toggleAccordion` handler) — no direct replacement; the accordion's
  open/closed state is now managed internally via React `useState`.
- `Description.Styles.ts` (the shared `styles.base`/`styles.term`/`styles.desc`/`styles.baseMeta`
  Tailwind class object) — no direct replacement; equivalent styling now lives in `styles.scss`.
- `cu-prose` / `cu-prose-first-last` classes on `Description.Meta`'s `<dd>` — no direct
  replacement; equivalent child-spacing behavior (margin between children, no margin on
  first/last child) is now built directly into `.cu-description__content`'s own CSS rules.

## Behavioral / Styling Changes

- Accordion state management: legacy toggled the accordion by directly mutating the DOM —
  setting `aria-expanded` on the trigger, toggling `rotate-0`/`rotate-90` classes on the icon, and
  flipping the content's `hidden` property — all via `event.currentTarget.closest()` /
  `querySelector()` in a plain event handler. RDS2 tracks `isOpen` in React state and derives all
  of `aria-expanded`, the icon's modifier class, and the content's `hidden` attribute from it.
- Trigger element: legacy used a `<div role="button" aria-expanded aria-controls onClick>` with
  no keyboard handling (`role="button"` on a non-interactive element with no `onKeyDown` is an
  accessibility anti-pattern). RDS2 uses a real `<button type="button">`, which gets native
  keyboard activation (Enter/Space) for free.
- `aria-controls`/`id` when `term` is empty: legacy generated an empty string (`''`) for
  `termLabel` when there was no valid term, so `aria-controls=""` / `id=""` would be rendered.
  RDS2 generates `undefined` in that case, so the attributes are omitted entirely.
- Icon color: legacy passed an explicit hardcoded `color="#808080"` to the chevron `<Icon>`; RDS2
  passes no explicit color and instead colors it via CSS (`var(--rds--color-grey)` on
  `.cu-description__accordion-icon`).
- Icon rotation: legacy toggled Tailwind `rotate-0`/`rotate-90` utility classes imperatively via
  JS; RDS2 toggles a `cu-description__accordion-icon--open` modifier class based on `isOpen`
  state, with the rotation/transition defined in CSS.
- Column layout (`Description.Meta` with `useColumns`): legacy used a custom Tailwind grid
  template utility (`md:grid-cols-left-260 gap-2 md:gap-6`); RDS2 uses an explicit CSS Grid
  (`grid-template-columns: 260px 1fr`) under a `cu-description__item--columns` modifier class —
  same 260px term-column width, same breakpoint.
- Border/divider color: `border-cu-black-100` (Tailwind) → `var(--rds--color-grey-light)` token.
- Class naming: Tailwind utility classes plus the shared `Description.Styles.ts` object →
  `cu-description`, `cu-description__item`, `cu-description__term`, `cu-description__content`,
  `cu-description__trigger`, `cu-description__accordion-icon` BEM classes, styled with
  `var(--rds--*)` tokens.
