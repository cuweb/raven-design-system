# Icon — Diff (Legacy RDS → RDS2)

## Summary

Icon rendering moved from a runtime SVG fetch (from a CDN/local asset path, injected via
`dangerouslySetInnerHTML`) to statically bundled React components from the private
`@cuweb/rds-icons` package, rendered synchronously with no network request. The `color` prop was
removed, the default `size` unit changed from a pixel number to `'1em'`, and a new `title` prop
enables an accessible (non-decorative) mode.

## Props Changes

| Prop        | Legacy                                                          | RDS2                                                                                                       | Change                                                  |
| ----------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `name`      | `name: string` (any string, fetched at runtime)                 | `name: IconName` (typed union from `@cuweb/rds-icons`)                                                     | Type narrowed                                           |
| `size`      | `size?: number \| string`, default `24`                         | `size?: number \| string`, default `'1em'`                                                                 | Default changed — now scales with font-size             |
| `color`     | `color?: string`, default `'#000000'`                           | _removed_                                                                                                  | Removed                                                 |
| `className` | `className?: string`; always merged with a `cu-icon` base class | _n/a as a dedicated prop_ — comes through spread `...rest` (via `SVGProps`); no automatic base class added | Removed (base class no longer automatic)                |
| `title`     | _n/a_                                                           | `title?: string`                                                                                           | Added — enables `role="img"` + `<title>` + `aria-label` |
| _(rest)_    | not supported                                                   | extends `SVGProps<SVGSVGElement>` (minus `name`), spread via `...rest`                                     | Added passthrough                                       |

## Deprecations

- `color` — no direct replacement; icon color now follows `currentColor`/CSS by default, or can
  be overridden via standard SVG props (e.g. `fill`) spread through `...rest`.
- Fetching arbitrary icons by string name from a remote/local SVG asset path — no longer
  supported. `name` must match a key in `@cuweb/rds-icons`' `IconName` union; icons are bundled
  from the private `@cuweb/rds-icons` package rather than loaded dynamically at runtime (see
  `docs/contributing/architecture.md#two-package-icon-model`).

## Behavioral / Styling Changes

- Rendering mechanism: legacy fetched raw SVG markup asynchronously (`fetch()` inside
  `useEffect`), patched `fill`/`width`/`height` via a regex string replace, and injected the
  result with `dangerouslySetInnerHTML` into a wrapping `<span>` — rendering nothing (a blank
  sized `<span>`) until the request resolves, and silently rendering nothing if the fetch fails.
  RDS2 looks up a bundled React component from `iconMap` and renders the actual `<svg>` element
  directly and synchronously, with no network request, no loading state, and no
  `dangerouslySetInnerHTML`; if `name` isn't found in the map it renders `null`.
- Accessibility: legacy always set `aria-hidden="true"` on the icon with no way to expose it as a
  meaningful image. RDS2 defaults to `aria-hidden="true"` + `focusable="false"` for decorative
  icons, but when a `title` is provided it instead renders `role="img"` with an `aria-label` and
  a nested `<title>` element.
- Class naming: legacy always added a `cu-icon` class to the rendered `<span>` in addition to any
  passed `className`. RDS2 adds no class by default — callers must pass `className="cu-icon"` (or
  any other classes) explicitly, since `className` now just flows through the spread SVG props.
- Root element: legacy rendered a `<span>` container around injected SVG markup; RDS2 renders the
  real `<svg>` element as a proper React component, with all SVG element props (e.g. `fill`,
  `stroke`, `onClick`) passthrough-able via `...rest`.
