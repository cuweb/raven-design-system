# Table — Diff (Legacy RDS → RDS2)

## Summary

`Table` gained a new optional `Table.Footer`/`hasFooter` (net-new — legacy has no footer
subcomponent) and a `maxWidth` prop; the dead, unused `range` prop was removed. The `aria-sort`
value and sort-button `aria-label` wording on `TableHeader` were corrected (legacy announced the
opposite of the actual sort direction). Initial sort-indicator state is now derived synchronously
from `columns` instead of being set imperatively in a post-mount `useEffect`. Tailwind utility
classes plus the shared `Table.Styles.ts` object were replaced with `cu-table__*` BEM/SCSS classes
driven by design tokens, and the container styling moved from a shadow-based card to a
border-based one.

## Props Changes

| Prop        | Legacy                                                                      | RDS2                                                                             | Change                                           |
| ----------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| `hasFooter` | _n/a_ — no footer subcomponent existed                                      | `hasFooter?: boolean`, default `false`                                           | Added — enables a new `TableFooter` subcomponent |
| `maxWidth`  | _n/a_                                                                       | `maxWidth?: keyof maxWidthClasses`, default `'aligncontent'` (WP alignment keys) | Added                                            |
| `range`     | `range?: number[]`, default `[1, -1]` (declared, never used in `TableRows`) | _removed_                                                                        | Removed (was already dead/no-op in legacy)       |

`data`, `columns` (`ColumnDefinitionType`), `colgroup`, `hasStripes` (default `false`),
`noWordBreak` (default `false`), and `enableRowHeader` (default `false`) are unchanged.

## Deprecations

- `range` — no direct replacement; it had no effect in the legacy `TableRows` component either.

## Behavioral / Styling Changes

- New `TableFooter` subcomponent: legacy had no way to repeat column headers as a `<tfoot>`. RDS2
  adds a `TableFooter` (rendered when `hasFooter` is `true`), producing a `<tfoot
class="cu-table__foot">` row of `<th scope="col">` cells mirroring the header labels, styled with
  the same gradient background as `cu-table__head`.
- `aria-sort` direction bug fix: legacy set `aria-sort="descending"` on the active column while
  `ascending` was `true`, and `aria-sort="ascending"` while `ascending` was `false` — the value was
  inverted relative to the actual sort direction. RDS2 sets `aria-sort="ascending"` when `ascending`
  is `true` and `"descending"` when it's `false`, matching the real sort order.
- Sort button `aria-label` wording: legacy's label described the _current_ state (e.g. `"Sort
{key} by ascending order"` while already ascending, `"Sort by {key}"` when inactive). RDS2's label
  describes the _action_ the click will perform (e.g. `"Sort {key} descending"` while currently
  ascending, `"Sort by {key}"` when inactive) — clearer and consistent with the corrected
  `aria-sort` direction.
- Initial sort-indicator timing: legacy's `TableHeader` started `active`/`ascending` at hardcoded
  defaults (`''` / `true`) and only synced them to the `default`-flagged column inside a
  `useEffect` gated by a `hasMounted` ref, causing a possible render before the default sort
  indicator/icon appeared. RDS2 initializes `active`/`ascending` directly from `columns` via
  `useState(defaultColumn?.key ?? '')` / `useState(defaultColumn?.order !== 'descending')`, so the
  correct indicator renders on the first pass; `Table.tsx` still separately triggers the initial
  data sort itself via its own mount effect (unchanged from legacy in that regard).
- Icon color: legacy passed a hardcoded `color="#000000"` to each sort chevron `<Icon>`; RDS2
  passes no explicit color and colors the icon via `.cu-table__sort-btn`'s
  `color: var(--rds--color-grey-dark)` instead.
- Container styling: legacy's root `<div>` used a shadow-based card look
  (`rounded-lg shadow-lg`, no border) with a flat `bg-cu-black-50` header background. RDS2's
  `.cu-table` uses a border-based card (`border: 1px solid var(--rds--color-grey-lighter)`, no
  shadow) with `var(--rds--color-white)` background, and `.cu-table__head`/`.cu-table__foot` use a
  `var(--rds--gradient-white-to-pale-grey)` gradient instead of a flat grey.
- Row borders: legacy applied row borders unconditionally via a shared `styles.borders` class
  (`border-b border-cu-black-100 last:border-none`) regardless of `hasStripes`. RDS2 applies the
  same border behavior via `.cu-table__row` (with `:last-child { border-bottom: none }`) — same
  effective behavior, now tokenized (`var(--rds--color-grey-lighter)`).
- Striping: `odd:bg-white even:bg-cu-black-25` (Tailwind) → `:nth-child(odd)` /
  `:nth-child(even)` rules using `var(--rds--color-white)` / `var(--rds--color-grey-faint)` — same
  parity, different token.
- Class naming: Tailwind utility classes plus the shared `Table.Styles.ts` object
  (`tableGlobal`, `tableHeaderRow`, `tableBodyRow`, `borders`, `striped`) → `cu-table`,
  `cu-table__table`, `cu-table__head`, `cu-table__foot`, `cu-table__header-cell`,
  `cu-table__header-cell-inner`, `cu-table__sort-btn`, `cu-table__row`, `cu-table__cell` BEM
  classes, styled with `var(--rds--*)` tokens.
