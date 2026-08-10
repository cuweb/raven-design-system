# FilterPanel — Diff (Legacy RDS → RDS2)

## Summary

`FilterPanel` was rewritten from an imperative, vanilla-JS-driven component (`Dropdown`/`Filter`
classes manipulating the DOM directly, wired up in a `useEffect`, emitting a native `filterChange`
`CustomEvent`) to a fully React-controlled component built on `FilterPanelContext` +
`useState`/`useCallback`, exposing a new `onFilterChange` prop instead of a DOM event. Initial
per-option `selected`/`checked` flags were dropped since selection state is now always controlled
internally. Dropdown accessibility semantics (`role="listbox"`/`"option"`, reactive
`aria-expanded`, Escape-to-close) were added, and root/class naming moved from `cu-filter` to
`cu-filter-panel` BEM classes styled with `var(--rds--*)` tokens.

## Props Changes

| Prop                                | Legacy                                                                                           | RDS2                                                | Change                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------- | --------------------------------------------------- |
| `children` (`FilterPanel`)          | `children?: React.ReactNode` (optional)                                                          | `children: React.ReactNode` (required)              | Made required                                       |
| `onFilterChange`                    | _n/a_ — consumers listened for a native `filterChange` `CustomEvent` on the root element instead | `onFilterChange?: (filters: ActiveFilters) => void` | Added — replaces the custom DOM event               |
| `sortOptions[].selected`            | `selected?: boolean` — preselects a sort option on mount                                         | _removed_ (`SortOption` has only `label`/`value`)   | Removed — no way to preset an initial sort value    |
| `filterOptions[].options[].checked` | `checked: boolean` (required) — pre-checks a filter option on mount                              | _removed_ (`FilterOption` has only `value`/`label`) | Removed — no way to preset initially active filters |

`sortOptions[].label`/`.value` and `filterOptions[].id`/`.name`/`.options[].value`/`.label` are
otherwise unchanged in shape.

## Deprecations

- Native `filterChange` `CustomEvent` (dispatched on the root element with
  `{ sortBy, filterBy }` in `event.detail`) — replaced by the `onFilterChange` prop callback; there
  is no event-based equivalent in RDS2.
- `sortOptions[].selected` / `filterOptions[].options[].checked` — no direct replacement; RDS2 has
  no prop for pre-selecting a sort option or pre-checking a filter option on initial render
  (selection always starts empty and is driven entirely by user interaction / `FilterPanelContext`
  state).
- The standalone `Dropdown`/`Filter` vanilla-JS classes (`dropdown.ts`, `filter.ts`) — no direct
  replacement; equivalent behavior now lives in `FilterPanelContext`, `FilterPanelTop`, and
  `FilterPanelBottom` as React state/handlers.

## Behavioral / Styling Changes

- State management architecture: legacy queried the DOM by class name (`.cu-filter__dropdown`,
  `.cu-filter__sorting-item`, `.cu-filter__filtering-item`, etc.) inside a `useEffect`, mutating
  `classList`/`data-*` attributes directly and dispatching a `filterChange` `CustomEvent`. RDS2
  tracks `sortBy`, `filterBy`, and `openDropdown` in React state via `FilterPanelContext`, with
  `FilterPanelTop`/`FilterPanelBottom` reading/writing that context — no direct DOM manipulation.
- Dropdown open/close: legacy toggled a `hidden` class and rotated an arrow icon (`rotate-180`)
  imperatively, closing other dropdowns on toggle and on any outside click (no `Escape` handling).
  RDS2 derives open state from `openDropdown` in context, closes the open dropdown on outside click
  **and** on `Escape`, and rotates the chevron via a `cu-filter-panel__dropdown-toggle--open`
  modifier class driven by state.
- Dropdown viewport alignment: legacy had an `alignDropdowns` routine that measured the menu's
  bounding rect and flipped `left`/`right` inline styles if the menu would overflow the viewport.
  RDS2 has no equivalent — the dropdown menu is always anchored `left: 0` via CSS.
- Sort menu semantics: legacy rendered the sort menu as a plain `<ul>` of buttons with
  `data-selected`/`data-sort` attributes and no ARIA listbox roles. RDS2 renders it with
  `role="listbox"` on the `<ul>` and `role="option"` + `aria-selected` on each `<li>`.
- Filter checkbox state: legacy checkboxes used `defaultChecked` (uncontrolled) with click
  listeners updating an internal `_activeFilterItems` object. RDS2 checkboxes are fully controlled
  (`checked={isChecked}`) and call `toggleFilter` via context `onChange`.
- Active filter count badge: legacy had no indicator of how many options were active within a
  filter group's toggle button. RDS2 adds a `cu-filter-panel__count` badge (with
  `aria-label="{n} selected"`) next to the group name when it has active filters.
- Icons: legacy hand-rolled an inline `<svg>` (`DropDownSVG`) for the dropdown chevron and had no
  icon for removing an active filter tag. RDS2 uses the shared `<Icon name="chevron-down" size={14}
/>` for dropdown toggles and `<Icon name="xmark" size={10} />` for removing an active filter tag.
- Bottom bar visibility: legacy's `FilterPanelBottom` always rendered a bar with a static
  "Filters" label and a divider, even with zero active filters (with an empty
  `.cu-filter__active-filter-panel` container populated later via imperative DOM updates). RDS2's
  `FilterPanelBottom` returns `null` entirely when there are no active filters, and shows an
  "Active filters:" label (instead of "Filters") only once at least one filter is active.
- Active filter tag removal: legacy relied on DOM elements built by the vanilla `Filter` class
  (reading `data-label`/`data-filter-type` off dynamically-injected buttons with a
  `.cu-filter__active-filter-remove` class). RDS2 tags are rendered directly from `filterBy` state
  and call `removeFilter(filterType, value)` from context on click, with an
  `aria-label="Remove filter: {label}"` on the remove button.
- Root class naming: `cu-filter` (with a `.cu-filter__active-filter-panel` bottom container) →
  `cu-filter-panel`, with a `cu-filter-panel--has-filters` modifier added when any filter is
  active. All descendant classes renamed from `cu-filter__*` to `cu-filter-panel__*`.
- Class naming (styling): Tailwind utility classes (`border rounded-tl-lg rounded-tr-lg
border-cu-black-100 bg-gray-50 px-4 py-4`, `hidden`, `ring-1 ring-black ring-opacity-5`, `rotate-180`,
  etc.) → `cu-filter-panel__*` BEM classes styled with `var(--rds--*)` tokens.
