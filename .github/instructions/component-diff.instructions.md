---
applyTo: 'src/components/**/Diff.md'
---

# Component Diff Documentation

`Diff.md` is a migration-facing changelog documenting what changed between a legacy RDS component and
its RDS2 rebuild. It exists so consumers migrating from RDS to RDS2 have immediate visibility into
prop renames, removals, default changes, deprecations, and behavioral/styling differences — without
having to diff source themselves.

This file is a **reference spec only**. It does not trigger generation on its own. A `Diff.md` is
produced when explicitly requested with a component name and the legacy source folder, e.g.:

> "Using the component diff instructions, generate a Diff.md for Badge — legacy version is at ../rds/lib/components/Badge."

The RDS2 side is never provided explicitly — always resolve it from `src/components/{ComponentName}/`
in this repo, using the same component name given in the request.

Generate `Diff.md` one component at a time, on explicit request. Do not bulk-generate across the
library, and do not assume a legacy component has been renamed into a differently-named RDS2
component — only compare the exact pair named in the request.

## Legacy source

The legacy component's folder is provided explicitly in each request (by convention, under a sibling
`rds` repo checkout, split across `lib/components/{Name}` or `lib/layouts/{Name}` — see
`docs/name-mismatch.md` for the current list of components that exist only in one project).

## Where Diff.md lives

`src/components/ComponentName/Diff.md`, alongside the component's `.tsx`, `styles.scss`, and
`Docs.mdx`.

## Template

```md
# ComponentName — Diff (Legacy RDS → RDS2)

## Summary

One or two sentences describing the overall scope of change (e.g. "Tailwind utility classes replaced
with BEM/SCSS; `link` prop renamed to `href`; one prop removed.").

## Props Changes

| Prop            | Legacy                  | RDS2                  | Change          |
| --------------- | ----------------------- | --------------------- | --------------- |
| `link` → `href` | `link?: string`         | `href?: string`       | Renamed         |
| `noWordBreak`   | `noWordBreak?: boolean` | _removed_             | Removed         |
| `rounded`       | default `'full'`        | default `'md'`        | Default changed |
| `color`         | 9 options               | 10 options (+ `teal`) | Added value     |

Only include rows for props that actually changed — do not list unchanged props.

## Deprecations

Explicit list of anything removed with no direct RDS2 replacement (props, exported types, subcomponents).
If there are none, state "None."

## Behavioral / Styling Changes

Notes on anything not captured by the props table:

- Class naming: Tailwind utility classes → `cu-*` BEM/SCSS classes (name the old and new class(es))
- Markup/structure changes (e.g. wrapping element changed from `<p>` to `<span>`)
- New HTML attribute passthrough (e.g. now spreads `...rest`)
- Changed rendering/branching logic
- Accessibility-relevant changes (e.g. new `aria-*` defaults)

If there are none beyond the props table, state "None."
```

## Process for generating a Diff.md

1. Read the legacy component's `.tsx` (and `styles.css` if relevant) from the folder given in the request.
2. Read the RDS2 component's `.tsx` and `styles.scss` from `src/components/{ComponentName}/` in this
   repo — resolved by name, not provided in the request.
3. Compare prop interfaces field-by-field: renamed, removed, added, default value changes, type changes.
4. Compare rendering output: element structure, class name strategy, conditional logic, attribute
   passthrough.
5. Fill in the template above. Omit sections' inner content only if genuinely empty (state "None"
   rather than deleting the heading).
6. Do not speculate about legacy components with a different name that might correspond to the RDS2
   component — only compare the exact pair given in the request.
