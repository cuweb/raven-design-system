# DescriptionLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from Tailwind utility classes to BEM/SCSS with design tokens, following the same
`Object.assign` subcomponent pattern legacy used (`DescriptionLoader.Accordion`, `DescriptionLoader.Meta`).
Legacy skeleton pieces were static grey fills with no animation; RDS2 adds a subtle,
accessibility-conscious pulse and `role="status"`/`aria-hidden` semantics, mirroring the rebuilt
`Description` component's structure and naming.

## Props Changes

| Prop         | Legacy                               | RDS2                                              | Change                                                        |
| ------------ | ------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------- |
| `children`   | `React.ReactNode`, required          | `React.ReactNode`, required                       | Unchanged                                                     |
| _(none)_     | not supported                        | `...rest: React.HTMLAttributes<HTMLDListElement>` | Added on the wrapper — spreads arbitrary HTML/ARIA attributes |
| `rows`       | `number`, required (Accordion, Meta) | `number`, optional, default `1`                   | Made optional with a default on both `Accordion` and `Meta`   |
| `useColumns` | `boolean`, optional (Meta)           | `boolean`, optional, default `false`              | Unchanged behavior, default made explicit                     |

## Deprecations

None — `DescriptionLoader`, `DescriptionLoader.Accordion`, and `DescriptionLoader.Meta` all have
direct RDS2 equivalents.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utility classes (`animate-pulse`, `border-b`, `border-cu-black-100`,
  `grid`, `gap-2`, `gap-5`, `gap-6`, `md:grid-cols-left-260`, `h-8`, `h-10`, `h-16`, `h-20`,
  `rounded-md`, `bg-cu-black-100`) replaced with BEM classes: wrapper is
  `cu-loader cu-loader--description`, `Meta` rows are `cu-loader__description-item` (with
  `cu-loader__description-item--columns` modifier) containing `cu-loader__description-term` /
  `cu-loader__description-content` skeleton pieces, `Accordion` rows are
  `cu-loader__description-accordion` containing `cu-loader__description-row` skeleton pieces.
- **Removed `cu-component-updated` and `cu-block-spacing` classes** — legacy-only marker classes with
  no RDS2 equivalent (layout spacing is now handled by the parent `Main`/`Section` composition, as
  with other loaders).
- **Skeleton fill + animation:** legacy skeleton spans were a flat `bg-cu-black-100` fill with a
  generic `animate-pulse` (Tailwind's default opacity pulse). RDS2 uses `--rds--color-grey-lighter`
  with the same subtle looping opacity pulse convention used by the other loaders (`1` → `0.6` over
  1.8s, `--rds--ease-standard` easing), fully disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** wrapper now carries `role="status"` and `aria-label="Loading content"`; each
  skeleton row/piece is `aria-hidden="true"`. Legacy had no ARIA semantics. Because `role="status"`
  is not an ARIA-allowed role on `<dl>`, RDS2 wraps the `<dl>` in an outer `<div>` that carries the
  `role`/`aria-label`, with `...rest` spreading onto the inner `<dl>` instead.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDListElement>`) onto
  the wrapper `<dl>`, allowing consumers to override/extend attributes. Legacy accepted no additional
  attributes.
- **`Accordion` layout simplified:** legacy rendered a single skeleton span per row inside a bordered
  grid wrapper matching the real `Description.Accordion`'s term/trigger layout. RDS2's skeleton row
  is a single pulsing block per row (no trigger/icon skeleton), since the accordion trigger affordance
  isn't meaningful in a loading state.
