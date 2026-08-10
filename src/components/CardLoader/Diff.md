# CardLoader — Diff (Legacy RDS → RDS2)

## Summary

Full rebuild from six separate components (`CardEventLoader`, `CardIconLoader`, `CardNewsLoader`,
`CardPageLoader`, `CardPeopleLoader`, `CardVideoLoader`) into a single `CardLoader` component with a
`variant` prop, consistent with how RDS2's other loaders (`BlockLoader`, `ButtonLoader`) expose a
single prop-driven component instead of one component per shape. Tailwind utility classes replaced
with BEM/SCSS and design tokens. Each variant now wraps the rebuilt RDS2 `Card` (rather than the
legacy `Card`) with `revealOnScroll={false}` so the skeleton doesn't participate in scroll-reveal
animation, and adds `role="status"`/`aria-label` plus `...rest` passthrough.

## Props Changes

| Prop                | Legacy                                                                                                                                                      | RDS2                                                                                                                       | Change                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| _(component split)_ | Six separate components, each with no props: `CardEventLoader`, `CardIconLoader`, `CardNewsLoader`, `CardPageLoader`, `CardPeopleLoader`, `CardVideoLoader` | One `CardLoader` component with `variant?: 'news' \| 'event' \| 'icon' \| 'page' \| 'people' \| 'video'`, default `'news'` | Consolidated into a single component with a variant prop                 |
| _(none)_            | not supported                                                                                                                                               | `...rest: React.HTMLAttributes<HTMLDivElement>`                                                                            | Added — spreads arbitrary HTML/ARIA attributes onto the skeleton wrapper |

## Deprecations

- `CardEventLoader`, `CardIconLoader`, `CardNewsLoader`, `CardPageLoader`, `CardPeopleLoader`, and
  `CardVideoLoader` as separately-named exports — use `<CardLoader variant="..." />` instead.

## Behavioral / Styling Changes

- **Consolidated API:** legacy required importing a differently-named component per card shape
  (e.g. `import { CardNewsLoader } from '...'`). RDS2 exposes one `CardLoader` component and a
  `variant` prop, matching the pattern used by `BlockLoader` (`cols`) and other RDS2 loaders.
- **Class naming:** Tailwind utility classes (`animate-pulse`, `block`, `w-full`, `rounded-t-lg`,
  `h-60`, `bg-cu-black-100`/`bg-cu-black-50`, `space-y-3`, `max-w-*`, `-mt-*`, `mx-6`, `mb-2`,
  `w-20`, `h-20`, `w-40`, `h-40`, `rounded-full`, `rounded-md`, `flex flex-col items-center
justify-center`, `item-center`, `w-[120px]`, `w-11/12`, `w-6/12`) replaced with BEM classes:
  `cu-loader cu-loader--card cu-loader--card-{variant}` wrapper, `cu-loader__card-figure`,
  `cu-loader__card-date-thumb`, `cu-loader__card-avatar`, `cu-loader__card-icon`,
  `cu-loader__card-body`, `cu-loader__card-line` (with `--title`, `--small`, `--paragraph`,
  `--button` modifiers).
- **Removed `cu-component-updated` class** — legacy-only marker class with no RDS2 equivalent.
- **Removed visually-hidden `<span className="sr-only">Loading...</span>` sibling** — RDS2 conveys
  the same information via `role="status"` and `aria-label="Loading content"` on the wrapper instead
  of a separate visually-hidden text node.
- **Card wrapper:** legacy wrapped each loader in the legacy `Card` component with no props (or
  `isCenter` for people). RDS2 wraps in the rebuilt RDS2 `Card` with `isCenter` for the `people`
  variant and `revealOnScroll={false}` for every variant, since a loading skeleton should render
  immediately rather than wait for a scroll-triggered reveal animation.
- **Background/animation:** legacy skeleton pieces used a flat `bg-cu-black-100`/`bg-cu-black-50`
  fill with a generic `animate-pulse`. RDS2 uses `--rds--color-grey-lighter` with a subtle looping
  opacity pulse (`1` → `0.6` over 1.8s, `--rds--ease-standard` easing), fully disabled under
  `prefers-reduced-motion: reduce`.
- **Accessibility:** the skeleton wrapper now carries `role="status"` and `aria-label="Loading
content"`; every figure/avatar/icon/line placeholder is `aria-hidden="true"`. Legacy relied only
  on a visually-hidden `sr-only` text node with no ARIA role.
- **Attribute passthrough:** RDS2 spreads `...rest` (`React.HTMLAttributes<HTMLDivElement>`) onto
  the skeleton wrapper, allowing consumers to override/extend attributes. Legacy accepted no
  additional attributes.
- **Event variant date-thumb overlap:** legacy used `-mt-10 mx-6 mb-2` to overlap the date-thumb
  placeholder onto the figure; RDS2 achieves the same overlap with a negative top margin on
  `cu-loader__card-date-thumb` expressed in `rem` units.
