# PageHeader — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-*` BEM/SCSS token-based classes; the `size` scale was
rebuilt (`xs`/`sm`/`md`/`lg` → `sm`/`md`/`lg`/`xl`/`primary`); the `isLight` prop was removed; a
`postHeader` prop was added; and the `PageHeader.Event` subcomponent (and its `date-fns` date
formatting) was dropped entirely.

## Props Changes

| Prop         | Legacy                                       | RDS2                                                      | Change                                                |
| ------------ | -------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg'`, default `lg` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'primary'`, default `lg` | Type changed — `xs` removed, `xl` and `primary` added |
| `isLight`    | `isLight?: boolean`                          | _removed_                                                 | Removed                                               |
| `postHeader` | _not present_                                | `postHeader?: string`                                     | Added                                                 |
| `isWhite`    | `isWhite?: boolean`, no default              | default `false`                                           | Default added                                         |
| `isCenter`   | `isCenter?: boolean`, no default             | default `false`                                           | Default added                                         |

## Deprecations

- `isLight` — removed with no direct replacement. Legacy used it to opt into a size-derived prose
  content style (`prose-lg md:prose-2xl font-light`) on the wrapper; RDS2 drives content sizing
  entirely from the `cu-pageheader--{size}` modifier.
- `size="xs"` — removed from the size scale. Use `sm` as the closest equivalent.
- `PageHeader.Event` — the compound subcomponent (`PageHeaderEvent`, with `startDate`/`endDate`
  props and `date-fns`-based date range formatting) no longer exists. RDS2 exports `PageHeader` as
  a plain function component with no attached subcomponents. Consumers should render formatted
  event dates themselves into `metaData` or `children`.
- `PageHeaderEventProps` — the exported type is gone along with the subcomponent.
- `PageHeaderWrapper` — legacy exported both `PageHeaderWrapper` and the `Object.assign`-composed
  `PageHeader`; RDS2 exports only `PageHeader`.

## Behavioral / Styling Changes

- Class naming: Tailwind utility classes (`font-semibold not-prose`, `text-cu-black-700`,
  `mb-6 md:mb-12`, `after:bg-cu-red`, `text-center mx-auto`, `max-w-5xl`, plus `headerSizeClasses`
  from `utils/propClasses`) → `cu-*` BEM/SCSS classes: `cu-pageheader`,
  `cu-pageheader--{sm,md,lg,xl,primary}`, `cu-pageheader--white`, `cu-pageheader--center`,
  `cu-pageheader__heading`, `cu-pageheader__heading--underline`, `cu-pageheader__pre`,
  `cu-pageheader__post`, `cu-pageheader__pronoun`, `cu-pageheader__meta`. All colors, sizes,
  spacing and font stacks now come from `var(--rds--*)` tokens.
- Legacy wrapper classes `cu-component-updated` and `cu-prose-first-last` (and the
  `children ? 'mb-6 md:mb-12' : ...` branch on the root) are gone — the root is no longer
  conditionally styled based on whether `children` is present.
- Underline: legacy built the rule inline via `getHeaderPadding()`, mixing size-specific bottom
  padding and width (`pb-3 after:w-6` … `pb-6 after:w-10`) with color and offset utilities. RDS2
  applies a single `cu-pageheader__heading--underline` modifier with a fixed token-based
  padding/width, and shifts the color (`--rds--color-white`) and centering (`left: 50%` +
  `translateX(-50%)`) into the `--white` / `--center` modifiers.
- Centering: legacy stamped `cu-pageheader--center text-center mx-auto` onto the root, the
  heading, the meta wrapper and the content paragraph individually. RDS2 sets
  `cu-pageheader--center` once on the root and cascades `text-align: center` in SCSS.
- Meta styling: legacy `.cu-pageheader__meta` was a `flex flex-col gap-4 md:gap-6` column with
  `text-xl` paragraphs; RDS2 reduces it to a bottom-margin block with no flex layout or child
  paragraph sizing.
- Legacy `styles.css` also reset lists inside the header (`.cu-pageheader ul/ol` → `p-0 list-none`,
  `.cu-pageheader li` → `m-0 p-0`) and centered a nested `.cu-buttongroup` when
  `.cu-pageheader--center` was applied. Neither rule carries over to RDS2's `styles.scss`.
- New `postHeader` renders as a `<span class="cu-pageheader__post">` after the header text (and
  after `pronoun`) inside the heading element.
- Content paragraph: the 320-character truncation with `...` suffix is unchanged, but the
  paragraph is now rendered as a bare `<p>` with no class (legacy applied
  `max-w-5xl` + centering utilities); the `--rds--font-size-*` rules in `styles.scss` target
  `.cu-pageheader__content`, which the component does not currently emit.
- No new HTML attribute passthrough: neither version spreads `...rest`.
- Accessibility: no change — both render a `<header>` wrapper with a configurable `as`
  (`h1`/`h2`/`h3`) heading, defaulting to `h1`.
- `displayName` is no longer set on the RDS2 component.
