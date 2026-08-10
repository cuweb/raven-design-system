# EventLoader — Diff (Legacy RDS → RDS2)

## Summary

Composition-level rebuild. Legacy composed `Column`, `StackedList`, `Aside`,
`ListingNewsLoader` (×6), `PaginationLoader`, and `CalendarLoader` from the main package export
(`../../../main`). RDS2 composes the equivalent rebuilt components (`Column`, `StackedList`, `Aside`,
`ListingLoader` with `variant="event"`, `PaginationLoader`, `CalendarLoader`) using the same
two-column events-page layout.

## Props Changes

| Prop              | Legacy                               | RDS2                                            | Change                                                          |
| ----------------- | ------------------------------------ | ----------------------------------------------- | --------------------------------------------------------------- |
| `pageCount`       | `number`, optional, default `5`      | `number`, optional, default `5`                 | Unchanged                                                       |
| `showClearButton` | `boolean`, optional, default `false` | `boolean`, optional, default `false`            | Unchanged                                                       |
| _(none)_          | not supported                        | `...rest: React.HTMLAttributes<HTMLDivElement>` | Added — spreads arbitrary HTML/ARIA attributes onto the wrapper |

## Deprecations

None.

## Behavioral / Styling Changes

- **Listing variant used:** legacy always used `ListingNewsLoader` (news-shaped skeletons) for the
  6 listing items, even though this is an events page. RDS2 uses `ListingLoader` with
  `variant="event"`, so the skeleton shape matches the eventual event-listing content (date-thumb
  instead of a wide image).
- **Class naming:** wrapper is `cu-loader cu-loader--event` (unchanged naming from legacy, minus the
  `cu-component-updated` marker class, which has no RDS2 equivalent).
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the
  wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
- **Accessibility:** loading-state semantics (`role="status"`, `aria-hidden`) now come from the
  composed `ListingLoader`, `PaginationLoader`, and `CalendarLoader` components themselves, rather
  than being declared at the `EventLoader` level (legacy had no ARIA semantics anywhere in this
  composition).
