# Description — Diff (Legacy RDS → RDS2)

## Summary

Public props are unchanged across `Description`, `Description.Meta`, and
`Description.Accordion`. The accordion uses native `<details>`/`<summary>` disclosure behavior
instead of custom state management, while metadata term/definition pairs remain semantic
description lists. The shared `Description.Styles.ts` object and Tailwind utility classes were
replaced by `cu-description__*` BEM/SCSS classes driven by design tokens.

## Props Changes

No prop signatures changed. `Description`, `Description.Meta` (`term`, `children`, `useColumns`),
and `Description.Accordion` (`term`, `children`) all carry over as-is (`useColumns` now has an
explicit `= false` default in RDS2, matching its effectively-falsy legacy behavior).

## Deprecations

- `script.ts` (the imperative `toggleAccordion` handler) — replaced by the browser's built-in
  `<details>`/`<summary>` disclosure behavior; no custom toggle script is needed.
- `Description.Styles.ts` (the shared `styles.base`/`styles.term`/`styles.desc`/`styles.baseMeta`
  Tailwind class object) — no direct replacement; equivalent styling now lives in `styles.scss`.
- `cu-prose` / `cu-prose-first-last` classes on `Description.Meta`'s `<dd>` — no direct
  replacement; equivalent child-spacing behavior (margin between children, no margin on
  first/last child) is now built directly into `.cu-description__content`'s own CSS rules.

## Behavioral / Styling Changes

- Accordion behavior: legacy toggled the accordion by directly mutating the DOM; RDS2 uses
  `<details>`/`<summary>` so the browser manages the open state and built-in disclosure semantics.
  Items start closed and have no `name` attribute, so each opens independently.
- Accordion markup: `Description.Accordion` changes from a term/definition pair inside the shared
  `<dl>` to a native disclosure. `Description.Meta` now renders each `<dt>`/`<dd>` pair inside its
  own `<dl>`, and the `Description` wrapper is a neutral `<div>` that can contain both item types.
- Keyboard interaction: the native `<summary>` is keyboard-operable with Enter and Space; its
  focus-visible outline remains styled. The summary text labels the disclosure, the browser
  exposes its open state to assistive technology, and the decorative chevron follows the
  `<details>` `open` state without custom `aria-expanded` or `aria-controls` attributes.
- Icon color: legacy passed an explicit hardcoded `color="#808080"` to the chevron `<Icon>`; RDS2
  passes no explicit color and instead colors it via CSS (`var(--rds--color-grey)` on
  `.cu-description__accordion-icon`).
- Icon rotation: legacy toggled Tailwind `rotate-0`/`rotate-90` utility classes imperatively via
  JS; RDS2 rotates the chevron using the native `<details open>` state in CSS.
- Column layout (`Description.Meta` with `useColumns`): legacy used a custom Tailwind grid
  template utility (`md:grid-cols-left-260 gap-2 md:gap-6`); RDS2 uses an explicit CSS Grid
  (`grid-template-columns: 260px 1fr`) under a `cu-description__item--columns` modifier class —
  same 260px term-column width, same breakpoint.
- Border/divider color: `border-cu-black-100` (Tailwind) → `var(--rds--color-grey-light)` token.
- Class naming: Tailwind utility classes plus the shared `Description.Styles.ts` object →
  `cu-description`, `cu-description__item`, `cu-description__term`, `cu-description__content`,
  `cu-description__trigger`, `cu-description__accordion-icon` BEM classes, styled with
  `var(--rds--*)` tokens.
