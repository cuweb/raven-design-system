# WideImage — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-wideimage` BEM/SCSS; the decorative wave SVG, dark-variant
blur SVG, and scroll-down affordance were all removed along with their `hasWave`/`hasScroll` props. A
`content` prop was added and passed through to `PageHeader`, and a `maxWidth` prop replaces the
hardcoded width/margin utilities. The image overlay moved from a rendered `<div>` to a CSS
`::before` pseudo-element driven by a `--cu-wideimage-overlay` custom property.

## Props Changes

### `WideImage`

| Prop        | Legacy                                                                               | RDS2                             | Change                        |
| ----------- | ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------- |
| `hasWave`   | `hasWave?: boolean`                                                                  | _removed_                        | Removed                       |
| `hasScroll` | `hasScroll?: boolean`                                                                | _removed_                        | Removed                       |
| `content`   | _n/a_                                                                                | `content?: string`               | Added                         |
| `maxWidth`  | _n/a_                                                                                | `maxWidth?: maxWidthKeys`        | Added (default `'alignwide'`) |
| `opacity`   | `(typeof opacityValues)[number]` (union of 60–80, runtime `console.warn` on invalid) | `opacity?: number` (unvalidated) | Type widened                  |

### `WideImage.Signup`

| Prop         | Legacy                                                 | RDS2                  | Change          |
| ------------ | ------------------------------------------------------ | --------------------- | --------------- |
| `children`   | `children?: React.ReactNode`                           | _removed_             | Removed         |
| `buttonText` | default `'Submit Email'` (falls back to `'Subscribe'`) | default `'Subscribe'` | Default changed |

## Deprecations

- `hasWave` — the decorative bottom wave SVG and its associated padding variants no longer exist.
- `hasScroll` — the click-to-scroll chevron and its `handleScroll` window-scroll behavior were removed
  with no RDS2 replacement.
- `WideImageSignupProps.children` — was declared but never rendered in legacy; removed outright.
- The exported `WideImageWrapper` symbol is no longer exported; only the composed `WideImage` (with
  `.Signup`) is public.
- Legacy inline-style helpers `getImageStyles`, `getInlineStyle`, and `getOpacityStyle` from
  `utils/inlineImage` are no longer used.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utilities (`relative flex items-center justify-center mx-auto px-8 …
rounded-xl not-prose my-6 md:my-12`) → `cu-wideimage`, `cu-wideimage--{light|dark|image}`,
  `cu-wideimage__content` in `styles.scss`. The legacy variant class `cu-wideimage-{isType}` (single
  hyphen, on the inner content div) is now the BEM modifier `cu-wideimage--{isType}` on the root.
- **Overlay:** legacy rendered an absolutely positioned `<div class="absolute top-0 w-full h-screen
bg-black">` with an inline opacity style. RDS2 removes that element and uses a `&--image::before`
  pseudo-element with `rgba(0, 0, 0, var(--cu-wideimage-overlay, 0.7))`, where the custom property is
  set inline from `opacity / 100`.
- **Opacity validation:** legacy warned via `console.warn` when `opacity` fell outside 60–80. RDS2
  accepts any number with no warning.
- **Padding:** legacy computed responsive `paddingY` utility strings in a `switch` on `isType` plus a
  `hasWave` override. RDS2 uses `padding-block: var(--rds--spacing-2-x-large)` with `lg`/`xl` media
  queries scaling it for the `image` variant only.
- **Backgrounds:** `light`/`dark` background colors now come from `--rds--color-grey-pale` and
  `--rds--color-black` in SCSS rather than the `getImageStyles` helper's utility classes.
- **Width:** legacy hardcoded `max-w-4xl` on the content wrapper and `mx-auto` on the root. RDS2 maps
  the `maxWidth` prop through `maxWidthClasses` onto the root and uses
  `--rds--layout-content-size` for the content wrapper. `.alignfull` drops the border radius.
- **PageHeader usage:** `size` changed from `'lg' | 'md'` to `'primary' | 'xl'`, and body copy is now
  passed via the new `content` prop instead of only as `children` of `PageHeader`. `children` is now
  rendered as a sibling after `PageHeader` rather than inside it.
- **`isType="dark"` decoration:** the blurred white ellipse SVG rendered at the bottom of dark
  variants was removed.
- **Signup markup:** `w-full max-w-xl space-y-5 cu-wideimage-signup` → `cu-wideimage__signup` with
  `__signup-row`, `__signup-input`, `__signup-optin`, `__signup-checkbox`, `__signup-label` elements
  and dedicated `WideImageSignup.scss`.
- **Signup accessibility/semantics:** email input changed from `type="text"` to `type="email"`; `id`
  changed from `email` to `cu-wideimage-email` (and `optin` → `cu-wideimage-optin`) to avoid generic
  ID collisions; the checkbox's `name` changed from `favcharacters` to `optin` and its `value` from
  `name` to `yes`; label copy corrected from "Enter you email address" to "Enter your email address".
- No `...rest` passthrough was added in either version — extra HTML attributes are still not forwarded.
