# Testimonial — Diff (Legacy RDS → RDS2)

## Summary

RDS2's `Testimonial` now delegates its quote markup to the shared `Quote` component (rendering a
semantic `<blockquote>`/`<cite>` instead of plain, unstructured `children`), adding a required
`quote` prop and an optional `cite` prop while making `children` optional (used only as a custom
override for the quote content). A `maxWidth` prop (WP alignment keys) was added, the image reveal
breakpoint moved from `md` to `sm`, the image sizing mechanism changed from fixed pixel widths to a
fluid percentage, and the `imageZoom`-to-`scale()` calculation was corrected from a string-
concatenation quirk to real arithmetic. Tailwind utility classes were replaced with
`cu-testimonial__*` BEM/SCSS classes driven by design tokens.

## Props Changes

| Prop       | Legacy                                            | RDS2                                                                             | Change                                                      |
| ---------- | ------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `children` | `children: React.ReactNode` (required)            | `children?: React.ReactNode` (optional)                                          | Made optional — falls back to `<p>{quote}</p>` when omitted |
| `quote`    | _n/a_ — quote text had to be passed as `children` | `quote: string` (required)                                                       | Added                                                       |
| `cite`     | _n/a_ — no attribution support                    | `cite?: string`                                                                  | Added — passed through to the internal `Quote`              |
| `maxWidth` | _n/a_ — width hardcoded via Tailwind `max-w-7xl`  | `maxWidth?: keyof maxWidthClasses`, default `'aligncontent'` (WP alignment keys) | Added                                                       |

`imageUrl`, `imageZoom` (default `0`), `focalPointX`/`focalPointY` (default `50`/`50`), and
`reverse` (default `false`) are unchanged in signature.

## Deprecations

None — `children` still works as a rendering override, it's simply no longer the only way to
supply quote content.

## Behavioral / Styling Changes

- Quote semantics: legacy rendered `children` directly inside plain `<div>`s with no
  quotation-specific markup. RDS2 wraps content in the shared `<Quote cite={cite}>` component,
  producing a semantic `<blockquote>` (and `<cite>` when provided) — `children`, when supplied,
  overrides the default `<p>{quote}</p>` body but is still rendered inside that same `<Quote>`.
- `imageZoom` scale calculation: legacy computed `transform: scale(1.${imageZoom})` via string
  concatenation (e.g. `imageZoom={5}` → the literal string `"1.5"` — only behaves sensibly for
  single-digit values and breaks down for anything else, such as `imageZoom={25}` → `"1.25"`
  instead of a meaningfully larger zoom). RDS2 computes it arithmetically as
  `transform: scale(${1 + imageZoom * 0.1})`, giving a mathematically correct, generalizable zoom
  factor.
- Image reveal breakpoint: legacy hid the image below `md` (`hidden md:block`) with fixed pixel
  widths (`md:w-64`, `lg:w-80`) and an overhang trick (`md:-my-8`). RDS2 hides the image below `sm`
  instead, and sizes it as a fluid `width: 40%` of the container rather than fixed pixel steps —
  the image now appears at a narrower viewport than before.
- Left accent border: legacy had no border treatment; the stacked mobile layout was just a grey
  rounded box. RDS2 adds a `border-left: 4px solid var(--rds--color-primary)` on the root element
  below `sm` (removed at `sm`+ once the layout switches to a row), echoing `Quote`'s "border"
  graphic style, while the nested `Quote` itself has its own border/padding suppressed
  (`.cu-quote--border { border: none }`) so only the outer `Testimonial` border shows.
- Context-aware background: RDS2 adds `.cu-section--grey .cu-testimonial { background-color:
var(--rds--color-white); }`, flipping the testimonial's background to white when placed inside a
  grey `Section`. Legacy had no equivalent — its background was a fixed `bg-cu-black-50` regardless
  of surrounding context.
- Layout/spacing model: legacy used staged responsive Tailwind gaps/padding
  (`gap-5 md:gap-10 lg:gap-16`, `py-6 px-6 md:px-0 md:py-16 lg:py-20`) across several nested
  wrapper `<div>`s. RDS2 flattens the markup to two children
  (`cu-testimonial__image`, `cu-testimonial__content`) with a single fixed
  `padding: var(--rds--spacing-2-x-large)` on the content, relying on flexbox `column-reverse`/`row`
  switching at `sm` instead of a chain of breakpoint-specific utility classes.
- Class naming: Tailwind utility classes (`bg-cu-black-50 rounded-xl`, `max-w-7xl`,
  `md:flex-row-reverse`, `hidden md:block`, etc.) → `cu-testimonial`, `cu-testimonial--reverse`,
  `cu-testimonial__image`, `cu-testimonial__content` BEM classes, styled with `var(--rds--*)`
  tokens.
