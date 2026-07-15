# SocialIcons — Diff (Legacy RDS → RDS2)

## Summary

The fixed `socialService` enum (a hardcoded map of inline brand SVGs, titles, and colors) was
replaced by a generic `icon` (`IconName`) + explicit `label` prop pair sourced from the shared
`@cuweb/rds-icons` package. A new `iconColor` prop (via React context) lets a whole group render
in black, white, or brand colors, replacing the old approach of baking a fixed brand fill color
into each SVG.

## Props Changes

### `SocialIcons`

| Prop        | Legacy                       | RDS2                                                                                | Change       |
| ----------- | ---------------------------- | ----------------------------------------------------------------------------------- | ------------ |
| `children`  | `children?: React.ReactNode` | `children: React.ReactNode` (required)                                              | Now required |
| `iconColor` | _n/a_                        | `iconColor?: SocialIconsColor` (`'black' \| 'white' \| 'brand'`), default `'black'` | Added        |

### `SocialIcons.Item`

| Prop                  | Legacy                                                                                                                                                                      | RDS2                                                | Change                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------- |
| `socialService`       | `socialService: keyof typeof socialServices` (fixed set: `linkedin`, `facebook`, `bluesky`, `x`, `instagram`, `orcidid`, `personal`), each with a hardcoded title/color/SVG | _removed_                                           | Removed (replaced by `icon`)                                   |
| `icon`                | _n/a_                                                                                                                                                                       | `icon: IconName` (any icon from `@cuweb/rds-icons`) | Added (replaces `socialService`)                               |
| `socialLink` → `href` | `socialLink: string`                                                                                                                                                        | `href: string`                                      | Renamed                                                        |
| `label`               | _n/a_ (accessible name came from the service's built-in `title`)                                                                                                            | `label: string` (required)                          | Added — caller must now supply the accessible label explicitly |

## Deprecations

- `socialService` and its baked-in service map (titles, brand colors, inline SVGs) — no direct
  1:1 replacement. Consumers now pass any `icon` from `@cuweb/rds-icons` plus their own `label`
  text instead of relying on a fixed, pre-labeled set of services.
- `personal` (the "personal website" preset) — no direct replacement; no special-cased icon/label
  is baked in anymore.
- Hardcoded inline brand SVGs (with per-icon fixed `fill` colors and an Instagram gradient) — no
  direct replacement; icons now render via the shared `<Icon>` component, with color driven by
  the `iconColor` prop / CSS instead of colors baked into the SVG markup.

## Behavioral / Styling Changes

- Icon coloring: legacy rendered each service's icon with its brand color hardcoded directly into
  the SVG's `fill` attribute (e.g. `fill="#0072b1"` for LinkedIn), always visible regardless of
  hover state (except Instagram's gradient). RDS2 icons inherit color from CSS
  (`cu-social--black|white|brand` modifier classes set via the new `iconColor` prop, passed down
  through `SocialIconsContext`), with brand colors only applied via a `--cu-social-brand` CSS
  variable keyed off a `data-social` attribute and typically used only on hover (or always, in
  `brand` mode).
- Accessible label: legacy exposed the label via a visually-hidden `<span className="sr-only">`
  inside the link (sourced from the service's built-in `title`), plus a redundant `<title>` inside
  the raw SVG. RDS2 sets `aria-label={label}` directly on the link and renders the icon via
  `<Icon>` with no title/sr-only span — the caller-supplied `label` is now the single source of
  the accessible name.
- Null-guard removed: legacy's `SocialIconsItem` returned `null` if `!socialService ||
!socialLink`. RDS2 has no runtime guard — `icon`, `href`, and `label` are all required,
  non-optional props enforced at the type level instead.
- Markup/structure: legacy wrapped output in a React fragment with a raw `<p className="cu-social-prefix">`
  and `<ul className="cu-social">`; RDS2 wraps everything in a `<div className="cu-social
cu-social--{color}">` containing `<p className="cu-social__prefix">` and `<ul
className="cu-social__list">`, and introduces a `SocialIconsContext` provider so `Item` can read
  the group's `iconColor`.
- Class naming: Tailwind utility classes (`text-sm md:text-base text-cu-black-600 italic mb-2`,
  `flex flex-wrap gap-6 items-center`, `text-cu-black-400`, per-icon `w-6 h-6 md:w-8 md:h-8`) →
  `cu-*` BEM classes (`cu-social`, `cu-social__prefix`, `cu-social__list`, `cu-social__item`,
  `cu-social__link`) styled with `var(--rds--*)` tokens; icon sizing now comes from the shared
  `<Icon>` component's default (`1em`, scaled via `font-size` on `.cu-social__link`) rather than
  fixed width/height utility classes.
- Brand hookup set expanded/renamed: legacy's fixed service keys (`linkedin`, `facebook`,
  `bluesky`, `x`, `instagram`, `orcidid`, `personal`) → RDS2's `data-social`-driven brand color
  CSS covers `linkedin`, `facebook`, `bluesky`, `x-twitter` (renamed from `x`), `instagram`,
  `youtube` (new), `tiktok` (new), `orcid` (renamed from `orcidid`) — `personal` has no
  equivalent, and any other `icon` value renders without a brand-color hook.
