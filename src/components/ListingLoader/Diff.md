# ListingLoader — Diff (Legacy RDS → RDS2)

## Summary

Legacy had 6 separate components with no props (`ListingNewsLoader`, `ListingEventLoader`,
`ListingIconLoader`, `ListingPageLoader`, `ListingPeopleLoader`, `ListingDescriptionLoader`), each
wrapping legacy `Listing`/`Listing.Body` with hand-written Tailwind skeleton markup. RDS2
consolidates these into a single `ListingLoader` component with a `variant` prop
(`'news' | 'event' | 'icon' | 'page' | 'people' | 'description'`, default `'news'`), matching the
established RDS2 loader pattern used by `CardLoader`.

## Props Changes

| Prop     | Legacy                                                                                   | RDS2                                                                            | Change                                                                     |
| -------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| _(none)_ | 6 separate zero-prop components                                                          | Single `ListingLoader` with `variant?: ListingLoaderVariant` (default `'news'`) | Consolidated — see Deprecations                                            |
| `numCol` | `ListingDescriptionLoader` accepted `numCol` to render 1 or 2 `Listing.Body`s internally | Not supported — consumer renders multiple `ListingLoader` instances instead     | Removed; matches how RDS2's real `Listing`/`StackedList` compose multiples |
| _(none)_ | not supported                                                                            | `...rest: React.HTMLAttributes<HTMLDivElement>`                                 | Added — spreads arbitrary HTML/ARIA attributes onto the inner wrapper      |

## Deprecations

- `ListingNewsLoader`, `ListingEventLoader`, `ListingIconLoader`, `ListingPageLoader`,
  `ListingPeopleLoader`, and `ListingDescriptionLoader` have no direct 1:1 RDS2 replacements.
  Consumers use `<ListingLoader variant="news" | "event" | "icon" | "page" | "people" | "description" />`
  instead.

## Behavioral / Styling Changes

- **Consolidation:** one component with a `variant` prop replaces six standalone components,
  consistent with `CardLoader`'s approach to its own six legacy variants.
- **Class naming:** Tailwind utility classes (`animate-pulse`, `flex flex-col`, `@lg:md:flex-row`,
  `gap-3/5/7`, `grid`, `flex-auto`, `flex-none`, `max-w-[...]`, `aspect-[...]`, `h-4/6/8/10/12/16/36`,
  `w-10/28/36/44/52/64/80/96`, `rounded-md`, `bg-cu-black-100`) replaced with BEM classes: inner
  wrapper is `cu-loader cu-loader--listing cu-loader--listing-{variant}`, with
  `cu-loader__listing-figure` / `cu-loader__listing-date-thumb` / `cu-loader__listing-icon` for the
  media placeholder and `cu-loader__listing-body` / `cu-loader__listing-line` (with `--title` /
  `--small` / `--paragraph` modifiers) for the text-line placeholders.
- **Removed `cu-component-updated` classes** — legacy-only marker classes with no RDS2 equivalent.
- **Background + animation:** legacy skeleton pieces were a flat `bg-cu-black-100` fill with a generic
  `animate-pulse`. RDS2 uses `--rds--color-grey-lighter` with the same subtle looping opacity pulse
  convention used by the other loaders (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully
  disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** the inner wrapper now carries `role="status"` and `aria-label="Loading content"`
  (replacing legacy's visually-hidden `<span className="sr-only">Loading...</span>` text node); every
  skeleton figure/thumb/icon/line is `aria-hidden="true"`. Legacy had no `role` attribute.
- **`Listing` wrapper:** RDS2 passes `revealOnScroll={false}` to the wrapping `Listing` so the
  skeleton renders immediately without waiting for scroll-triggered reveal — legacy's `Listing` had
  no reveal-on-scroll behavior to opt out of.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto the
  inner wrapper, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
