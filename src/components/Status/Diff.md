# Status — Diff (Legacy RDS → RDS2)

## Summary

Status is a net-new component introduced in RDS2 with no legacy RDS equivalent. It renders an inline
indicator (a colored dot plus text) for a `success` | `error` | `warning` | `info` variant, with an
optional `type`-based registry lookup (built-in types: `'hours'`, `'availability'`, `'system'`) that
supplies a default label and `aria-label` prefix for a given `(type, variant)` pair. Text resolution
order is `children` > `label` prop > registry default > nothing; if a `type` is set but nothing
resolves, the component renders `null`. A `context` prop (`'standalone'` | `'in-card'`, internal/used
by `Card.Status`) selects an independent styling scope.

## Props Changes

N/A — net-new component, no legacy props to compare.

## Deprecations

None — net-new component.

## Behavioral / Styling Changes

N/A — net-new component.
