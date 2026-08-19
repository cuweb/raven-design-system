# LocationPicker — Diff (Legacy RDS → RDS2)

## Summary

The Google Maps API key is no longer read from a build-time environment variable — it is now a
required `googleMapsApiKey` prop. Inline `style` objects and Tailwind utility classes were replaced
with `cu-location-picker` BEM/SCSS, the props interface was renamed and exported, and the search
input gained an `aria-label`.

## Props Changes

| Prop               | Legacy                                                                  | RDS2                                      | Change                             |
| ------------------ | ----------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------- |
| `googleMapsApiKey` | _not a prop_ — read from `import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY` | `googleMapsApiKey: string` (required)     | Added (required)                   |
| `markerCallback`   | `(coordinates: SingleMarkerInterface) => void`                          | `(marker: SingleMarkerInterface) => void` | Parameter renamed (signature same) |
| `address`          | `address?: string`                                                      | `address?: string`                        | Unchanged                          |

Interface renamed and exported: `ILocationPickerProps` (internal) → `LocationPickerProps`
(exported). `SingleMarkerInterface` is unchanged and still exported.

## Deprecations

- `import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY` — the component no longer reads any environment
  variable. Consumers must pass `googleMapsApiKey` explicitly.

## Behavioral / Styling Changes

- Class naming: inline `style` object on the `<input>` and Tailwind utilities on the icon
  (`relative`, `pointer-events-none absolute left-3.5 top-3.5`) → `cu-*` BEM/SCSS classes
  (`cu-location-picker`, `cu-location-picker__input`, `cu-location-picker__icon`) in `styles.scss`.
- Hardcoded values replaced with tokens: `1px solid #ccc` → `var(--rds--color-grey-light)`,
  `border-radius: 4px` → `var(--rds--radius-md)`, `padding: 8px 8px 8px 40px` →
  `var(--rds--spacing-x-small)` based padding; icon `color="#999999"` prop removed in favour of
  `color: var(--rds--color-grey)` on `.cu-location-picker__icon`.
- Icon positioning: legacy pinned the icon with fixed offsets (`left-3.5 top-3.5`); RDS2 centres it
  vertically with `top: 50%; transform: translateY(-50%)`.
- New styling: the input now has an explicit `:focus` state (2px `--rds--color-primary` outline with
  offset) and `::placeholder` colour; the legacy input had no focus or placeholder styling beyond
  browser defaults.
- Accessibility: the search `<input>` now has `aria-label="Search for a location"` — legacy relied on
  the `placeholder` alone, which is not an accessible name.
- Component declaration: `export function LocationPicker(...)` → `export const LocationPicker = (...) =>`.
  The legacy `// eslint-disable-next-line no-undef` comments around the `google.maps` types are no
  longer needed.
- Unchanged: `useJsApiLoader` with the `places` library, the `address` → `inputRef.value` sync
  effect, the `getPlace()` guard on `place.geometry.location`, and the `if (!isLoaded) return null`
  early return.
