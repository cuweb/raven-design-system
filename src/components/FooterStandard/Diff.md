# FooterStandard — Diff (Legacy RDS → RDS2)

## Summary

Legacy's `FooterStandard` was a fully hardcoded component (fixed acknowledgment text, five
hardcoded link columns, inline SVG social icons, a hardcoded Ravens logo link, and a fixed
contact phone/email/address), composing a separate `FooterLogoLinks` subcomponent for its
logo/meta row. RDS2's `FooterStandard` is now entirely data-driven and configurable: every piece
of content (acknowledgment, columns, contact info, social links, logo, meta links) is a prop with
a sensible default, columns are resolved from a shared `footerLinksByType` data map keyed by a new
`type` prop (unifying what legacy implemented as three separate components —
`FooterStandard`/`FooterAthletics`/`FooterFutureFunder`), social icons now use the shared `Icon`
component instead of hand-rolled inline SVGs, and `FooterLogoLinks` is inlined directly rather than
composed as a separate component. Tailwind utility classes were replaced with `cu-footer__*`
BEM/SCSS classes driven by design tokens, shared with the other footer variants.

## Props Changes

| Prop                                              | Legacy                                                                                                                | RDS2                                                                                        | Change                                              |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `type`                                            | _n/a_ — this component only ever rendered the "standard" column set (Athletics/FutureFunder were separate components) | `type?: FooterType`, default `'standard'` — selects the column set from `footerLinksByType` | Added — unifies what were three separate components |
| `acknowledgment`                                  | _n/a_ — hardcoded text                                                                                                | `acknowledgment?: string`, default `defaultAcknowledgment`                                  | Added                                               |
| `contact`                                         | _n/a_ — hardcoded phone/email/address                                                                                 | `contact?: FooterContactInfo`, default `defaultFooterContact`                               | Added                                               |
| `social`                                          | _n/a_ — hardcoded array of 5 inline-SVG platforms                                                                     | `social?: FooterSocialLink[]`, default `defaultFooterSocial` (uses shared `Icon` names)     | Added                                               |
| `logoSrc`/`logoAlt`                               | _n/a_ — hardcoded inside the composed `FooterLogoLinks`                                                               | `logoSrc?: string` / `logoAlt?: string`, defaults matching legacy's hardcoded values        | Added                                               |
| `privacyHref`/`accessibilityHref`/`copyrightHref` | _n/a_ — hardcoded URLs                                                                                                | Each `?: string`, defaults matching legacy's hardcoded URLs                                 | Added                                               |

Legacy `FooterStandard` took no props at all.

## Deprecations

- Hardcoded 5-column link structure (Admissions/Academics/Students/Campus/Ravens) with inline
  `<ul>`s per column — no direct prop-level replacement; equivalent content now lives in the
  `footerLinksByType` data map and is rendered generically via nested `column`/`group`/`links`
  arrays, so there's no longer a fixed set of named columns baked into the component.
- Hardcoded Ravens logo image/link (raw S3 URL wrapped in a link to `goravens.carleton.ca`) inside
  the "Ravens" column — no direct replacement; a column group's optional generic `media` field
  (image + optional link + width) now covers this instead of a Ravens-specific block.
- `FooterLogoLinks` as a standalone, separately-importable component — no longer exists; its
  markup is inlined directly into `FooterStandard` (same finding as in `Footer`'s `Diff.md`).
- Legacy's separate `FooterAthletics` and `FooterFutureFunder` components — their column-set
  behavior is now reachable from this same component via `type="athletics"` / `type="futureFunder"`
  rather than being distinct components (out of scope for a line-by-line diff here, but relevant
  context for why `type` exists).

## Behavioral / Styling Changes

- Social icons: legacy hand-rolled a raw inline `<svg>` per platform (Facebook, Instagram,
  Twitter, YouTube, LinkedIn) inside a local `Social` array. RDS2 renders each social link's icon
  via the shared `<Icon name={item.icon} size={24} />` component, with the platform list itself
  supplied through the `social` prop (`FooterSocialLink[]`).
- sr-only heading id: legacy used `id="footer-heading"`; RDS2 uses `id="cu-footer-heading"` —
  namespaced to match the `cu-` class prefix convention (still correctly targeted by the same
  element's `aria-labelledby`).
- Link/contact hover color: legacy used a hardcoded `hover:text-cu-red` for contact and social
  links; RDS2 uses `var(--rds--color-primary)` for the same hover states (column links keep
  `hover:text-white`-equivalent behavior via `var(--rds--color-white)`).
- Contact link underline: legacy applied `underline underline-offset-auto`; RDS2 applies a plain
  `text-decoration: underline` with no explicit offset — visually equivalent, simplified.
- Layout/breakpoints: legacy hid the acknowledgment link-columns block entirely below `md`
  (`hidden md:block`) and column layout with `flex justify-between`; RDS2 preserves the same
  hide-until-`md` behavior via `.cu-footer__columns { display: none; @media md { display: flex;
justify-content: space-between } }` — same breakpoint and visibility behavior, carried over
  faithfully.
- Contact block stacking order: legacy used `flex-col-reverse ... lg:flex-row` to reverse the
  visual order of the phone/email paragraph, address, and social icons on narrow screens. RDS2's
  `.cu-footer__contact` uses the same `column-reverse` → `row` switch at the same `lg` breakpoint.
- Class naming: Tailwind utility classes (`px-8 py-8 md:px-10 md:py-12`, `bg-cu-black-900
bg-cu-waves-footer-red bg-[length:100.5%] bg-bottom bg-no-repeat`, `text-cu-black-300
hover:text-white`, `flex flex-col-reverse items-center justify-between gap-2 mb-12`) →
  `cu-footer`, `cu-footer--{type}`, `cu-footer__inner`, `cu-footer__acknowledgment`,
  `cu-footer__columns`, `cu-footer__column`, `cu-footer__column-group`,
  `cu-footer__column-heading`, `cu-footer__column-list`, `cu-footer__column-item`,
  `cu-footer__column-link`, `cu-footer__column-media`, `cu-footer__contact`,
  `cu-footer__contact-lead`, `cu-footer__contact-address`, `cu-footer__contact-link`,
  `cu-footer__social`, `cu-footer__social-link`, `cu-footer__logo-links`, `cu-footer__logo`,
  `cu-footer__meta`, `cu-footer__meta-item`, `cu-footer__meta-link` BEM classes, styled with
  `var(--rds--*)` tokens and shared with the other footer variants via a single stylesheet.
