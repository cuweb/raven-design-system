# SearchInput — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-search-input__*` BEM/SCSS classes; `callback` and
`placeholder` are now optional (`callback` defaults to a no-op). Results visibility moved from
`SearchInput.Results` (which self-managed an `open` state plus a global ⌘K/Ctrl+K keyboard toggle)
up into the `SearchInput` wrapper, which now opens on typed input and closes on outside click.
`SearchInput.Results` lost its `window.location.href` click navigation and is now a purely
presentational list rendered through `LinkProvider`.

## Props Changes

### `SearchInput`

| Prop          | Legacy                                                                                      | RDS2                                                     | Change                      |
| ------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------- |
| `callback`    | `callback: (k: string) => void` (required)                                                  | `callback?: (value: string) => void`, default `() => {}` | Now optional, has a default |
| `placeholder` | `placeholder: string` (required in the type, defaulted to `'Search'` in the implementation) | `placeholder?: string`, default `'Search'`               | Now optional in the type    |
| `children`    | `children?: React.ReactNode`                                                                | `children?: React.ReactNode`                             | Unchanged                   |

### `SearchInput.Results`

| Prop          | Legacy                                                                                                                      | RDS2                                                                                                       | Change                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `resultsData` | `resultsData: SourceDataProps[]`                                                                                            | `resultsData: SearchResultItem[]`                                                                          | Item type renamed and tightened |
| _item shape_  | `SourceDataProps = { [k: string]: string \| number; url: string }` — `id` and `title` were used at runtime but not declared | `SearchResultItem = { id: string \| number; title: string; url: string; [key: string]: string \| number }` | `id` and `title` now required   |

### Exported types

| Type               | Legacy                                                                                            | RDS2                                                                 | Change                       |
| ------------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------- |
| `SourceDataProps`  | exported                                                                                          | `SearchResultItem`                                                   | Renamed                      |
| `SearchInputProps` | exported twice — once from `SearchInput.tsx`, once from `SearchInputResults.tsx` (name collision) | `SearchInputProps` (wrapper) and `SearchInputResultsProps` (results) | Renamed / collision resolved |
| `SelectedOption`   | `{ url: string }`, exported                                                                       | _removed_                                                            | Removed                      |

## Deprecations

- `SelectedOption` — removed; there is no click-to-navigate handler in RDS2 that needs it.
- The results-level ⌘K / Ctrl+K keyboard toggle — removed with no replacement prop or API.
- `SearchInputResults`' internal `open` state and `handleComboboxChange` navigation — removed;
  open/closed state is now owned by the `SearchInput` wrapper and navigation is handled entirely by
  the link component supplied via `LinkProvider`.
- `SearchInputProps` as the name for the results props — consumers importing it for
  `SearchInput.Results` must switch to `SearchInputResultsProps`.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`cu-search cu-component-updated relative items-center
not-prose`, `w-full h-12 pr-4 text-sm bg-transparent border rounded-lg border-cu-black-100 pl-11
…`, `py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2`, `px-4 py-2 cursor-default
select-none hover:bg-cu-black-50 …`) → `cu-search-input`, `cu-search-input__wrapper`,
  `cu-search-input__icon`, `cu-search-input__field`, `cu-search-input__results`,
  `cu-search-input__results-list`, `cu-search-input__results-item`, `cu-search-input__results-link`,
  styled with `var(--rds--*)` tokens in `styles.scss`.
- Results visibility: legacy always rendered `<div className="relative w-full">{children}</div>`
  and let `SearchInputResults` decide whether to show its list (`open` defaulted to `true`). RDS2
  only renders the results wrapper when `open && children`, where `open` is set by the wrapper to
  `value.length > 0` — so results are hidden until the user types.
- Outside click: RDS2 adds a `mousedown` listener on `document` and a `wrapperRef` on the root
  element to close the results when the user clicks outside. Legacy had no outside-click handling.
- Keyboard shortcut removed: legacy `SearchInputResults` registered a global `keydown` listener that
  toggled `open` on ⌘K / Ctrl+K. RDS2 registers no keyboard listener.
- Navigation: legacy attached `onClick={() => handleComboboxChange(record)}` to each `<li>`, which
  set `window.location.href` directly (in addition to the `LinkComponent` inside it, so a click
  could trigger both a hard navigation and the link). RDS2 removes the `<li>` click handler entirely
  — navigation happens only through the `LinkComponent` from `useLinkContext()`.
- Markup structure: legacy nested the icon, input, and a `relative w-full` children wrapper as
  direct siblings inside one root `<div>`. RDS2 wraps the icon and input in a
  `cu-search-input__wrapper` element (the positioning context for the icon) and places the results
  in a sibling `cu-search-input__results` element.
- Empty results: legacy nested two fragments and guarded with `resultsData && resultsData.length > 0`.
  RDS2 uses an early `if (!resultsData.length) return null;` and no fragments.
- Input `id` removed: legacy hardcoded `id="search__input"`, which broke uniqueness when more than
  one `SearchInput` was on a page. RDS2 renders no `id` on the input.
- Icon: legacy passed `color="#b3b3b3"` and `aria-hidden="true"` explicitly and positioned the icon
  with `absolute top-3.5 left-3.5`. RDS2 relies on `<Icon>`'s default `aria-hidden`, sets the color
  via `var(--rds--color-grey)` in SCSS, and vertically centers the icon with `top: 50%` /
  `translateY(-50%)` instead of a fixed offset; `pointer-events: none` is added so the icon doesn't
  intercept clicks on the field.
- `displayName` changed from `'Search Input'` to `'SearchInput'` (results keeps
  `'SearchInput.Results'`).
- Change handler typing: legacy typed the event as
  `{ target: { value: React.SetStateAction<string> } }`; RDS2 uses
  `React.ChangeEvent<HTMLInputElement>`.
