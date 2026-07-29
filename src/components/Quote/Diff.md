# Quote — Diff (Legacy RDS → RDS2)

## Summary

The prop interface is unchanged. The outer `<div>` wrapper was removed so `<blockquote>` is now the root element; Tailwind utility classes were replaced with BEM/SCSS classes; the `quote` graphic was rebuilt from a background-image to a CSS `::before` pseudo-element; and the `cite` element gained explicit typography styling via `cu-quote__cite`.

## Props Changes

No prop renames, removals, type changes, or default changes — all four props (`children`, `cite`, `graphic`, `isCenter`) carry over with identical signatures and defaults.

## Deprecations

None.

## Behavioral / Styling Changes

- **Root element changed**: Legacy renders `<div className="cu-quote cu-component-updated not-prose"><blockquote …>`. RDS2 renders `<blockquote className="cu-quote …">` directly — the outer `<div>` wrapper, `cu-component-updated`, and `not-prose` classes are gone.
- **Class naming**: Tailwind utility classes replaced with BEM/SCSS. `blockquote` now receives `cu-quote`, `cu-quote--{graphic}`, and (when centered) `cu-quote--center` instead of inline utility strings.
- **`cu-prose` class removed**: Legacy applied `cu-prose` to the `blockquote`; RDS2 does not.
- **`isCenter` class**: Legacy applied `mx-auto` on the `blockquote`; RDS2 applies the BEM modifier `cu-quote--center` which uses `margin-inline: auto`.
- **`border` graphic styling**: Legacy used hardcoded Tailwind red (`border-red-600`) and a 4-unit left border with rounded corners. RDS2 uses `var(--rds--color-primary)` for the border colour and a 3px left border with spacing and radius controlled by `--rds--*` tokens.
- **`quote` graphic rebuilt**: Legacy used a background-image utility class (`bg-cu-quote-red-10`) for the decorative quotation mark. RDS2 replaces this with a CSS `::before` pseudo-element rendering the Unicode character `\201C` styled with `var(--rds--color-primary)` and `var(--rds--font-family-inter)`.
- **`cite` element styling**: Legacy applied only a bare `block` class. RDS2 uses `cu-quote__cite` which adds explicit `font-size`, `font-weight: light`, `font-style: normal`, and `margin-top` via SCSS tokens.
- **`p` margin reset**: RDS2 adds a nested `p { margin: 0 }` rule inside `.cu-quote` to normalise prose paragraph spacing; legacy relied on the Tailwind prose stack for this.
