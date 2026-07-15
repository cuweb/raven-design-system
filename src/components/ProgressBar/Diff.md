# ProgressBar — Diff (Legacy RDS → RDS2)

## Summary

A required `label` prop was added to give the progress bar an accessible name (legacy had none);
the mount animation (delayed/eased fill-in) was removed in favor of an immediate width; and
Tailwind utility classes were replaced with `cu-*` BEM/SCSS token-based classes, changing the
track from fully rounded (`pill`) to a small radius.

## Props Changes

| Prop    | Legacy | RDS2                       | Change                                                      |
| ------- | ------ | -------------------------- | ----------------------------------------------------------- |
| `label` | _n/a_  | `label: string` (required) | Added — mapped to `aria-label` on the `progressbar` element |

## Deprecations

None.

## Behavioral / Styling Changes

- Accessibility: legacy rendered `role="progressbar"` with no accessible name (no `aria-label`/
  `aria-labelledby`) — an a11y gap. RDS2 requires a `label` prop and sets `aria-label={label}` on
  the progressbar element.
- Animation: legacy animated the fill on mount — it started at `0%` and, after a `100ms` delay
  (via `useEffect`/`setTimeout`/state), transitioned to the target percentage over `1000ms`
  (`transition-all duration-1000 ease-out`). RDS2 sets the fill width directly to the computed
  percentage with no delay, state, or CSS transition — the bar renders at its final width
  immediately.
- Class naming: Tailwind utility classes (`h-3 bg-slate-200 rounded-full`,
  `bg-gradient-to-r from-cu-red-400 to-cu-red-600`) → `cu-progressbar` / `cu-progressbar__fill`
  BEM classes styled with `var(--rds--color-*)` gradient tokens instead of hardcoded Tailwind
  colors.
- Shape: legacy track and fill were fully rounded (`rounded-full`, pill-shaped); RDS2 uses
  `var(--rds--radius-sm)` (a small radius) instead.
- Markup/structure: legacy nested a full-height inner `<div>` sized by `width`; RDS2's fill `<div>`
  is absolutely positioned (`top/left/bottom: 0`) with only `width` set, achieving the same
  visual result via a different layout technique.
