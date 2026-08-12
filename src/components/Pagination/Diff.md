# Pagination — Diff (Legacy RDS → RDS2)

## Summary

`Pagination` changed from an uncontrolled component (managing its own `currentPage` state
internally, seeded from an optional `currentPageNumber`, and reporting changes outward via two
separate callbacks) to a fully controlled component driven by `currentPage`/`totalPages` props and
a single `onPageChange` callback. The "Showing X to Y of Z results" summary text and the
mobile-only simplified Previous/Next view were both removed — RDS2 always renders one unified
page-number list at every breakpoint. Page-range windowing moved from the configurable
`usePagination` hook (`totalCount`/`pageSize`/`siblingCount`) to a fixed internal algorithm keyed
only on `totalPages`. The active page is now a filled pill instead of bold red text, and several
accessibility gaps (missing `aria-current`, non-disabled boundary buttons) were fixed. Tailwind
utility classes were replaced with `cu-pagination__*` BEM/SCSS classes driven by design tokens.

## Props Changes

| Prop                                       | Legacy                                                                                                                                                      | RDS2                                                                                    | Change                                                              |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `totalCount`/`pageSize`/`siblingCount`     | Required — item count, page size, and configurable sibling window for range building                                                                        | _removed_ — replaced by a single `totalPages: number` prop, fixed windowing             | Removed                                                             |
| `currentPageNumber` → `currentPage`        | `currentPageNumber?: number` — optional, only seeds initial internal state (uncontrolled)                                                                   | `currentPage: number` (required) — fully controlled, always reflects the displayed page | Renamed and made required/controlled                                |
| `callback`/`callbackPage` → `onPageChange` | `callback: (range: [number?, number?]) => void` (result range) + `callbackPage: (page: number) => void` (page number), both required, fired via `useEffect` | `onPageChange: (page: number) => void` (required)                                       | Merged into one callback — the result-range tuple has no equivalent |
| `hasBorder`/`hasSpacing`                   | `hasBorder?: boolean` / `hasSpacing?: boolean` — toggle extra border/padding on the root                                                                    | _removed_ — layout/spacing is fixed                                                     | Removed                                                             |
| `ariaLabel`                                | _n/a_ — `aria-label="Pagination"` hardcoded on the `<nav>`                                                                                                  | `ariaLabel?: string`, default `'Pagination'`                                            | Added                                                               |

## Deprecations

- `totalCount`, `pageSize`, `siblingCount` — no direct replacement; consumers must compute
  `totalPages` themselves before rendering, and there's no way to configure how many sibling pages
  surround the current page (RDS2's window is fixed at ±1).
- `callback`'s result-range tuple (`[startResult, endResult]`, used to render "Showing X to Y of Z
  results") — no direct replacement; RDS2 has no built-in results-summary text at all.
- `hasBorder` / `hasSpacing` — no direct replacement; the root's spacing/border is fixed.
- The mobile-only simplified Previous/Next view (`sm:hidden`, plain text buttons with no page
  numbers) — no direct replacement; RDS2 shows the same full page-number nav at every breakpoint.

## Behavioral / Styling Changes

- Controlled vs. uncontrolled: legacy owned `currentPage` in its own `useState` (seeded once from
  `currentPageNumber`, not resynced if that prop changes later) and only informed the parent of
  page changes via effects calling `callback`/`callbackPage`. RDS2 has no internal page state —
  `currentPage` is a prop, and every navigation action calls `onPageChange` so the parent is
  responsible for updating it.
- Results-summary text removed: legacy rendered a "Showing **{start}** to **{end}** of
  **{totalCount}** results" paragraph next to the page-number nav (hidden below `sm`). RDS2 has no
  equivalent text — it renders only the pagination nav itself.
- Responsive layout removed: legacy showed a completely different, simplified mobile view below
  `sm` (`flex justify-between sm:hidden`, plain "Previous"/"Next" text buttons, no page numbers)
  and the full numbered nav only at `sm`+ (`hidden sm:flex`). RDS2 always renders the same
  `cu-pagination__list` (Previous icon button, page numbers/ellipses, Next icon button) regardless
  of viewport width, with `flex-wrap` handling narrow widths instead of swapping to a different
  layout.
- Empty/single-page guard removed: legacy returned `null` entirely when `currentPage === 0` or the
  computed range had fewer than 2 pages (i.e., a single-page result set rendered nothing). RDS2 has
  no such guard — it always renders the nav based on `totalPages`, even for `totalPages <= 1`.
- Boundary button disabling: legacy's Previous/Next buttons (both the mobile text buttons and the
  desktop icon buttons) had no `disabled`/`aria-disabled` attribute at all — clicking past the
  first/last page was only prevented inside the `onPrevious`/`onNext` handlers, so the buttons
  stayed visually enabled at the boundaries. RDS2 explicitly sets `disabled` and `aria-disabled` on
  the Previous/Next buttons when `currentPage` is the first/last page.
- Active page indicator: legacy styled the current page as plain bold red text
  (`font-bold text-cu-red`) with no background. RDS2 styles it as a filled pill
  (`cu-pagination__button--active`: `background-color`/`border-color: var(--rds--color-primary)`,
  white text, bold) — a more prominent, button-like active state.
- `aria-current`: legacy had no `aria-current` on the active page button. RDS2 sets
  `aria-current="page"` on it.
- Page button labeling: legacy page-number buttons had no explicit `aria-label` (relied on the
  visible number only). RDS2 adds `aria-label="Page {n}"` to each.
- Previous/Next accessible labeling: legacy used a visually-hidden `<span className="sr-only">`
  ("Previous"/"Next") alongside the icon inside the button. RDS2 removes the sr-only span and sets
  `aria-label="Previous page"` / `"Next page"` directly on the button instead.
- Ellipsis semantics: legacy rendered the ellipsis (`DOTS`) as a plain text `<li>` sharing the same
  wrapper classes as clickable page `<li>`s (though not actually interactive). RDS2 renders it as
  `<span aria-hidden="true">…</span>` inside a plain `<li>`, explicitly hidden from assistive tech.
- Windowing algorithm: legacy delegated to the `usePagination` hook, parameterized by
  `totalCount`/`pageSize`/`siblingCount` (configurable sibling window, `DOTS` sentinel). RDS2's
  `buildPageList` is a fixed algorithm: show every page when `totalPages <= 7`; otherwise always
  show page 1, the last page, and the current page ±1, with a single `'…'` ellipsis filling each
  gap — no way to widen or narrow the sibling window.
- Class naming: Tailwind utility classes (`inline-flex overflow-hidden border rounded-md
border-cu-black-100`, `text-sm py-2 px-4 hover:bg-cu-black-50`, `font-bold text-cu-red`) →
  `cu-pagination`, `cu-pagination__list`, `cu-pagination__item`, `cu-pagination__button`,
  `cu-pagination__button--active`, `cu-pagination__button--prev`, `cu-pagination__button--next`,
  `cu-pagination__ellipsis` BEM classes, styled with `var(--rds--*)` tokens — each page button now
  has its own bordered/rounded pill shape rather than sharing one continuous bordered strip.
