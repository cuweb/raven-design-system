# SearchInput — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-*` BEM/SCSS token-based classes; `callback` and
`placeholder` are now optional; the results dropdown is now controlled by the parent (opens on
typing, closes on click-outside) instead of by an internal `Cmd/Ctrl+K` keyboard toggle inside
`SearchInput.Results`; result rows no longer navigate via `window.location.href`, relying on the
`LinkProvider` anchor instead.

## Props Changes

### `SearchInput`

| Prop          | Legacy                                               | RDS2                                                      | Change       |
| ------------- | ---------------------------------------------------- | --------------------------------------------------------- | ------------ |
| `callback`    | `callback: (k: string) => void` (required)           | `callback?: (value: string) => void`, defaults to a no-op | Now optional |
| `placeholder` | `placeholder: string` (required, default `'Search'`) | `placeholder?: string`, default `'Search'`                | Now optional |

### `SearchInput.Results`

| Prop          | Legacy                                                                 | RDS2                                                                                                           | Change                                   |
| ------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `resultsData` | `SourceDataProps[]` — `{ [k: string]: string \| number; url: string }` | `SearchResultItem[]` — `{ id: string \| number; title: string; url: string; [key: string]: string \| number }` | Type changed — `id`/`title` now explicit |

### Exported types

| Type               | Legacy                                                        | RDS2                                                             | Change                        |
| ------------------ | ------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------- |
| `SourceDataProps`  | exported from `SearchInputResults`                            | `SearchResultItem`                                               | Renamed and retyped           |
| `SearchInputProps` | declared twice — once per file, results props reused the name | `SearchInputProps` (input) + `SearchInputResultsProps` (results) | Split into two distinct names |
| `SelectedOption`   | `{ url: string }`                                             | _removed_                                                        | Removed                       |

## Deprecations

- `SelectedOption` — removed; there is no click-handler-driven navigation object in RDS2.
- The `Cmd/Ctrl+K` keyboard toggle inside `SearchInput.Results` — removed with no replacement;
  open/close state is now owned by `SearchInput`.
- Programmatic navigation via `window.location.href` in the results `onClick` — removed; navigation
  is handled entirely by the `LinkComponent` anchor.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`cu-search cu-component-updated relative items-center
not-prose`, `w-full h-12 pr-4 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11`,
  `py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2`, etc.) → `cu-*` BEM/SCSS classes
  (`cu-search-input`, `cu-search-input__wrapper`, `cu-search-input__icon`,
  `cu-search-input__field`, `cu-search-input__results`, `cu-search-input__results-list`,
  `cu-search-input__results-item`, `cu-search-input__results-link`) driven by `var(--rds--*)` tokens.
- Markup/structure: legacy rendered the icon and input as direct children of the root with a bare
  `<div className="relative w-full">` always wrapping `children`. RDS2 wraps the icon and input in
  `cu-search-input__wrapper` and only renders the `cu-search-input__results` container when the
  dropdown is open and `children` are present.
- Open/close ownership: legacy `SearchInputResults` managed its own `open` state, defaulted to
  `true`, and toggled on `Cmd/Ctrl+K` via a `window` `keydown` listener. RDS2 moves this to
  `SearchInput`, which opens the dropdown when the input has a value and closes it on a
  `mousedown` outside the component (`wrapperRef` + `document` listener).
- Results rendering: legacy nested conditional fragments (`{open && (<>{resultsData?.length > 0 &&
...}</>)}`); RDS2 early-returns `null` when `resultsData` is empty and renders a single `<ul>`.
- Navigation: legacy attached an `onClick` to each `<li>` that set `window.location.href` and also
  rendered a `LinkComponent` inside it (double navigation path, and the `<li>` click was not
  keyboard-accessible). RDS2 renders only the `LinkComponent` as a block-level link filling the row,
  so the whole row is clickable and keyboard-focusable.
- Icon: legacy hardcoded `color="#b3b3b3"` and positioning utilities (`absolute top-3.5 left-3.5`)
  and passed `aria-hidden="true"` explicitly; RDS2 positions and colors it in SCSS
  (`var(--rds--color-grey)`, vertically centred with `top: 50%` / `translateY(-50%)`,
  `pointer-events: none`) and relies on `Icon`'s default `aria-hidden`.
- Input `id`: legacy hardcoded `id="search__input"` (a duplicate-ID hazard with multiple instances
  on a page); RDS2 renders no `id`.
- React import: legacy imported `React` explicitly; RDS2 uses the automatic JSX transform.
- `displayName` changed from `'Search Input'` to `'SearchInput'`.
