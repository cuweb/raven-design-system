# Location — Diff (Legacy RDS → RDS2)

## Summary

`Location` no longer wraps its map in the shared `Figure` component — it now renders its own root
element with a dedicated `cu-location` class, `role="region"`, and an `aria-label`. The unused
`singleMarker` prop was dropped, `markers`/`center` gained proper types (replacing `any`), and the
component now guards against rendering a marker/info-window with `NaN` coordinates when `lat`/`lng`
are missing — a bug present in the legacy version. Tailwind utility classes were replaced with
`cu-location__*` BEM/SCSS classes driven by design tokens.

## Props Changes

| Prop           | Legacy                                          | RDS2                                                                                              | Change                                     |
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `singleMarker` | `singleMarker?: boolean` (declared, never used) | _removed_                                                                                         | Removed (was already dead/no-op in legacy) |
| `markers`      | `markers?: any`                                 | `markers?: MarkerData[]` (`{ id: string; name: string; position: { lat: number; lng: number } }`) | Typed (was untyped)                        |
| `center`       | `center?: any`                                  | `center?: { lat: string; lng: string }`                                                           | Typed (was untyped)                        |

`lat`, `lng`, `location`, `zoom` (default `15`), and `isRounded` (default `true`) are unchanged.

## Deprecations

- `singleMarker` — no direct replacement; it had no effect in the legacy component either.
- Implicit dependency on `Figure`'s `rounded` prop — legacy rendered the map inside
  `<Figure rounded={isRounded ? 'lg' : 'none'}>`. RDS2 no longer uses `Figure` at all (and
  `Figure`'s own `rounded` prop was separately removed — see `Figure`'s `Diff.md`), so rounding is
  now handled entirely by `Location`'s own `cu-location--rounded` modifier class.

## Behavioral / Styling Changes

- Wrapping element: legacy rendered `<Figure rounded={...}><GoogleMap .../></Figure>`, reusing
  `Figure`'s markup/styling for the rounded corners and container. RDS2 renders its own
  `<div className="cu-location ...">` directly around `<GoogleMap>` — no dependency on `Figure`.
- Accessibility: legacy's root (via `Figure`) had no ARIA labeling. RDS2's root div adds
  `role="region"` and `aria-label={location ?? 'Map'}`.
- NaN-coordinate guard: legacy unconditionally rendered the primary `<MarkerF>` (and, when
  `showInfo` was true, the `<InfoWindowF>`) using `Number(lat)`/`Number(lng)` even when `lat`/`lng`
  were `undefined`, producing a marker/info-window positioned at `NaN, NaN`. RDS2 only renders the
  primary marker and its info window when both `parsedLat` and `parsedLng` are defined numbers.
- Map container sizing: legacy used `mapContainerClassName="w-full h-96"` (Tailwind); RDS2 uses
  `cu-location__map` with an explicit `width: 100%; height: 24rem` (same height as `h-96`, now
  authored directly in CSS).
- Info window content: legacy styled the info window content and link with Tailwind
  (`text-center text-base`, `font-semibold text-cu-red`); RDS2 uses `cu-location__info` /
  `cu-location__info-link` classes, with the link color driven by `var(--rds--color-primary)`
  (hover: `var(--rds--color-primary-dark)`) instead of `text-cu-red`.
- Automatic top margin: RDS2 adds `* + & { margin-top: var(--rds--spacing-medium); }`, giving the
  component spacing from a preceding sibling automatically. Legacy had no equivalent — spacing
  depended entirely on `Figure`'s own margin behavior (which only applied when an `align` other
  than `'none'` was passed, and `Location` never passed one, so legacy had no automatic margin at
  all).
- Class naming: Tailwind utility classes (`w-full h-96`, `text-center text-base`, `font-semibold
text-cu-red`) → `cu-location`, `cu-location--rounded`, `cu-location__map`, `cu-location__info`,
  `cu-location__info-link` BEM classes, styled with `var(--rds--*)` tokens.
