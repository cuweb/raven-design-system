# Footer — Diff (Legacy RDS → RDS2)

## Summary

RDS2's `Footer` corresponds to legacy's `FooterBasic`, which composed a separate
`FooterLogoLinks` component — the two are merged into a single `Footer` component in RDS2, and
`FooterLogoLinks` is no longer separately exported. The previously fully-hardcoded logo and link
URLs are now configurable via new props (`logoSrc`, `logoAlt`, `privacyHref`, `accessibilityHref`,
`copyrightHref`), all defaulting to the same values legacy hardcoded. The dark background and red
wave graphic are preserved, but now come from a shared `.cu-footer` base class (also used by
`FooterStandard`/`FooterAthletics`/`FooterFutureFunder`) instead of being defined per-variant.
Tailwind utility classes were replaced with `cu-footer__*` BEM/SCSS classes driven by design
tokens, with the same padding/sizing/gap values carried over.

## Props Changes

| Prop                | Legacy                                            | RDS2                                                                 | Change |
| ------------------- | ------------------------------------------------- | -------------------------------------------------------------------- | ------ |
| `logoSrc`           | _n/a_ — hardcoded CDN URL in `FooterLogoLinks`    | `logoSrc?: string`, default `assets.cuLogoColorVerticalOutlined`     | Added  |
| `logoAlt`           | _n/a_ — hardcoded `"Logo of Carleton University"` | `logoAlt?: string`, default `'Logo of Carleton University'`          | Added  |
| `privacyHref`       | _n/a_ — hardcoded URL                             | `privacyHref?: string`, default matches legacy's hardcoded URL       | Added  |
| `accessibilityHref` | _n/a_ — hardcoded URL                             | `accessibilityHref?: string`, default matches legacy's hardcoded URL | Added  |
| `copyrightHref`     | _n/a_ — hardcoded URL                             | `copyrightHref?: string`, default matches legacy's hardcoded URL     | Added  |

Legacy `FooterBasic`/`FooterLogoLinks` took no props at all.

## Deprecations

- `FooterLogoLinks` as a standalone, separately-importable component — no longer exists; its
  markup is now inlined directly into `Footer`.
- Hardcoded logo asset URL (`https://cdn.carleton.ca/rds/assets/cu-logos/...`) — replaced by the
  `assets.cuLogoColorVerticalOutlined` config reference; the raw CDN URL is no longer used directly
  (though it remains the effective default via the asset config).

## Behavioral / Styling Changes

- Component merge: legacy split this footer into two components — `FooterBasic` (the `<footer>`
  wrapper with the background/heading) wrapping `FooterLogoLinks` (the logo + link list). RDS2
  merges both into a single `Footer` component with no separate sub-export.
- sr-only heading id: legacy used `id="footer-heading"`; RDS2 uses `id="cu-footer-heading"` —
  namespaced to match the `cu-` class prefix convention (still correctly referenced by the same
  element's `aria-labelledby`).
- Background/wave graphic: preserved in both — legacy applied it as a per-component Tailwind
  utility (`bg-cu-black-900 bg-cu-waves-footer-red bg-bottom bg-cover`) directly on `FooterBasic`'s
  `<footer>`. RDS2 applies the same look via a shared `.cu-footer` base class
  (`background-color: var(--rds--color-black)`, `background-image:
var(--rds--asset-cu-waves-footer-red)`) that's now shared across `Footer`, `FooterStandard`,
  `FooterAthletics`, and `FooterFutureFunder`, rather than being redefined per variant.
- Style file sharing: RDS2's `Footer` imports `../FooterStandard/styles.scss` rather than owning
  its own stylesheet — all footer variants now consolidate their shared base styles
  (`.cu-footer`, `.cu-footer__logo`, `.cu-footer__meta*`, etc.) in one file, with only the
  `--basic`/`--standard`/`--athletics`/`--futureFunder` modifier differing padding per variant.
  Legacy had no such sharing — `FooterBasic` and `FooterLogoLinks` were self-contained.
- Class naming: Tailwind utility classes (`pt-8 sm:pt-12`, `grid justify-center pb-24 sm:pb-36
lg:pb-44`, `w-auto h-32 sm:h-44`, `flex flex-wrap justify-center space-x-4 gap-y-4 text-xs
sm:space-x-6 sm:text-sm`, `hover:text-white`) → `cu-footer`, `cu-footer--basic`,
  `cu-footer__logo-links`, `cu-footer__logo`, `cu-footer__meta`, `cu-footer__meta-item`,
  `cu-footer__meta-link` BEM classes, styled with `var(--rds--*)` tokens — the same padding,
  sizing, and gap values were carried over (e.g. `pb-24`/`sm:pb-36`/`lg:pb-44` → `6rem`/`9rem`/
  `11rem`, `h-32`/`sm:h-44` → `8rem`/`11rem`).
