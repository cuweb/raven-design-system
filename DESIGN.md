---
version: alpha
name: Raven Design System
description: "Carleton University's web brand as built by the Raven Design System (RDS): Carleton red on white and near-black, Inter throughout, small 4px corners, flat tonal surfaces, and fluid spacing."
colors:
    # Brand
    primary: '#e91c24'
    primary-dark: '#a21218'
    # Neutrals
    black: '#191919'
    grey-dark: '#434343'
    grey: '#767676'
    grey-light: '#d6d6d6'
    grey-lighter: '#e6e6e6'
    grey-pale: '#f5f5f5'
    grey-faint: '#fafafa'
    white: '#ffffff'
    # Extended
    purple: '#636FAC'
    purple-light: '#D3DAE9'
    teal: '#3A8082'
    teal-light: '#C8DAD7'
    exp-blue: '#026BC8'
    exp-blue-light: '#E0EEFE'
    # Semantic
    success: '#009e2d'
    success-light: '#ecfff0'
    success-dark: '#026520'
    warning: '#f4c83c'
    warning-light: '#fefbec'
    warning-dark: '#8d4613'
    error: '#ff5757'
    error-light: '#fff0f0'
    error-dark: '#b10303'
    info: '#8ec5eb'
    info-light: '#f2f8fd'
    info-dark: '#18598c'
typography:
    h1:
        fontFamily: Inter
        fontSize: 3rem
        fontWeight: 600
        lineHeight: 1.1
    h2:
        fontFamily: Inter
        fontSize: 2.5rem
        fontWeight: 600
        lineHeight: 1.1
    h3:
        fontFamily: Inter
        fontSize: 2.25rem
        fontWeight: 600
        lineHeight: 1.1
    h4:
        fontFamily: Inter
        fontSize: 1.75rem
        fontWeight: 600
        lineHeight: 1.1
    h5:
        fontFamily: Inter
        fontSize: 1.5rem
        fontWeight: 600
        lineHeight: 1.1
    h6:
        fontFamily: Inter
        fontSize: 1.5rem
        fontWeight: 600
        lineHeight: 1.1
    body:
        fontFamily: Inter
        fontSize: 1.125rem
        fontWeight: 300
        lineHeight: 1.6
    body-small:
        fontFamily: Inter
        fontSize: 0.9rem
        fontWeight: 300
        lineHeight: 1.6
    caption:
        fontFamily: Inter
        fontSize: 1rem
        fontWeight: 300
        lineHeight: 1.6
    button:
        fontFamily: Inter
        fontSize: 1rem
        fontWeight: 500
        lineHeight: 1.3
    badge:
        fontFamily: Inter
        fontSize: 0.75rem
        fontWeight: 700
    card-title:
        fontFamily: Inter
        fontSize: 1.125rem
        fontWeight: 600
        lineHeight: 1.3
    meta:
        fontFamily: Inter
        fontSize: 0.75rem
        fontWeight: 300
        lineHeight: 1.6
rounded:
    sm: 2px
    md: 4px
    lg: 8px
    xl: 12px
    full: 9999px
spacing:
    2-x-small: 0.44rem
    x-small: 0.67rem
    small: 1rem
    medium: 1.5rem
    large: 2.25rem
    x-large: 3.38rem
    2-x-large: 5.06rem
components:
    button-primary:
        backgroundColor: '{colors.primary}'
        textColor: '{colors.white}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    button-primary-hover:
        backgroundColor: '{colors.grey-dark}'
        textColor: '{colors.white}'
    button-primary-outline:
        backgroundColor: '{colors.white}'
        textColor: '{colors.primary}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    button-primary-outline-hover:
        backgroundColor: '{colors.primary}'
        textColor: '{colors.white}'
    button-dark-grey:
        backgroundColor: '{colors.grey-dark}'
        textColor: '{colors.white}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    button-dark-grey-hover:
        backgroundColor: '{colors.primary}'
        textColor: '{colors.white}'
    button-grey:
        backgroundColor: '{colors.grey-pale}'
        textColor: '{colors.grey-dark}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    button-grey-hover:
        backgroundColor: '{colors.primary}'
        textColor: '{colors.white}'
    button-blue:
        backgroundColor: '{colors.exp-blue}'
        textColor: '{colors.white}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    button-blue-hover:
        backgroundColor: '{colors.grey-dark}'
        textColor: '{colors.white}'
    button-black:
        backgroundColor: '{colors.black}'
        textColor: '{colors.white}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    button-white:
        backgroundColor: '{colors.white}'
        textColor: '{colors.black}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    button-white-hover:
        backgroundColor: '{colors.primary}'
        textColor: '{colors.white}'
    button-disabled:
        backgroundColor: '{colors.grey-light}'
        textColor: '{colors.grey-dark}'
        typography: '{typography.button}'
        rounded: '{rounded.md}'
    link:
        textColor: '{colors.primary-dark}'
    link-hover:
        textColor: '{colors.exp-blue}'
    text-muted:
        backgroundColor: '{colors.white}'
        textColor: '{colors.grey}'
        typography: '{typography.body-small}'
    card:
        backgroundColor: '{colors.white}'
        textColor: '{colors.black}'
        rounded: '{rounded.md}'
        padding: 1.25rem
    card-grey:
        backgroundColor: '{colors.grey-pale}'
        textColor: '{colors.black}'
        rounded: '{rounded.md}'
        padding: 1.25rem
    card-title:
        textColor: '{colors.black}'
        typography: '{typography.card-title}'
    card-title-hover:
        textColor: '{colors.primary}'
    badge-grey:
        backgroundColor: '{colors.grey-pale}'
        textColor: '{colors.grey-dark}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    badge-white:
        backgroundColor: '{colors.white}'
        textColor: '{colors.grey-dark}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    badge-green:
        backgroundColor: '{colors.success-dark}'
        textColor: '{colors.white}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    badge-red:
        backgroundColor: '{colors.error-dark}'
        textColor: '{colors.white}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    badge-yellow:
        backgroundColor: '{colors.warning}'
        textColor: '{colors.black}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    badge-blue:
        backgroundColor: '{colors.info}'
        textColor: '{colors.black}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    badge-purple:
        backgroundColor: '{colors.purple}'
        textColor: '{colors.white}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    badge-teal:
        backgroundColor: '{colors.teal}'
        textColor: '{colors.white}'
        typography: '{typography.badge}'
        rounded: '{rounded.md}'
    status-success:
        backgroundColor: '{colors.success}'
        rounded: '{rounded.full}'
        size: 0.75rem
    status-warning:
        backgroundColor: '{colors.warning}'
        rounded: '{rounded.full}'
        size: 0.75rem
    status-error:
        backgroundColor: '{colors.error}'
        rounded: '{rounded.full}'
        size: 0.75rem
    status-info:
        backgroundColor: '{colors.info}'
        rounded: '{rounded.full}'
        size: 0.75rem
    alert-success:
        backgroundColor: '{colors.success-light}'
        textColor: '{colors.success-dark}'
        rounded: '{rounded.md}'
        padding: '{spacing.medium}'
    alert-warning:
        backgroundColor: '{colors.warning-light}'
        textColor: '{colors.warning-dark}'
        rounded: '{rounded.md}'
        padding: '{spacing.medium}'
    alert-error:
        backgroundColor: '{colors.error-light}'
        textColor: '{colors.error-dark}'
        rounded: '{rounded.md}'
        padding: '{spacing.medium}'
    alert-info:
        backgroundColor: '{colors.info-light}'
        textColor: '{colors.info-dark}'
        rounded: '{rounded.md}'
        padding: '{spacing.medium}'
    toast:
        backgroundColor: '{colors.white}'
        textColor: '{colors.grey-dark}'
        typography: '{typography.body-small}'
        rounded: '{rounded.lg}'
        padding: '{spacing.small}'
    section-grey:
        backgroundColor: '{colors.grey-pale}'
        textColor: '{colors.black}'
        rounded: '{rounded.md}'
        padding: '{spacing.x-large}'
    section-black:
        backgroundColor: '{colors.black}'
        textColor: '{colors.white}'
        rounded: '{rounded.md}'
        padding: '{spacing.x-large}'
    widewave-black:
        backgroundColor: '{colors.black}'
        textColor: '{colors.white}'
    widewave-red:
        backgroundColor: '{colors.primary-dark}'
        textColor: '{colors.white}'
    fullbanner-box:
        backgroundColor: '{colors.black}'
        textColor: '{colors.white}'
        rounded: '{rounded.lg}'
        padding: '{spacing.large}'
    nav-cta:
        backgroundColor: '{colors.primary}'
        textColor: '{colors.white}'
        rounded: '{rounded.md}'
    nav-cta-hover:
        backgroundColor: '{colors.primary-dark}'
        textColor: '{colors.white}'
    footer:
        backgroundColor: '{colors.black}'
        textColor: '{colors.grey-light}'
    figure-caption:
        backgroundColor: '{colors.grey-pale}'
        textColor: '{colors.grey-dark}'
        typography: '{typography.caption}'
    table-row-striped:
        backgroundColor: '{colors.grey-faint}'
        textColor: '{colors.grey-dark}'
        typography: '{typography.body-small}'
    input:
        backgroundColor: '{colors.white}'
        textColor: '{colors.black}'
        rounded: '{rounded.md}'
    loader-block:
        backgroundColor: '{colors.grey-lighter}'
        rounded: '{rounded.md}'
---

# Raven Design System — DESIGN.md

> The visual rules for Carleton University's web brand, written for AI agents and the people working with them. The tokens in the front matter are normative; the prose explains how to apply them. Token values come from [`c2b.config.json`](c2b.config.json), and a unit test keeps this file in sync with it.

## Overview

Carleton's websites serve prospective and current students, faculty, alumni, and the broader community. Every page should feel **polished, clear, and welcoming**: institutional credibility without stiffness, and unmistakably Carleton.

The look in one breath: **Carleton red on clean white and near-black**, set entirely in **Inter** (light body text, semibold headings), with **small 4px corners**, **flat tonal surfaces** lifted by a single soft shadow, generous **fluid spacing**, and the signature **Carleton wave**.

Design principles:

- **Consistency** — one look and feel across every Carleton web property.
- **Accessibility** — WCAG 2.1 AA is a hard gate, not an aspiration.
- **Composability** — small, focused components that combine into full pages.
- **Token-first** — every colour, size, radius, and shadow comes from a token; no hardcoded hex codes, font stacks, or pixel values.

### How to use this file

- **Tokens are the rules.** Front-matter names map one-to-one to RDS CSS custom properties: `colors.grey-dark` → `var(--rds--color-grey-dark)`, `spacing.large` → `var(--rds--spacing-large)`, `rounded.md` → `var(--rds--radius-md)`. Typography roles map to `--rds--font-size-*` tokens (see [Typography](#typography)).
- **Sizes are fluid.** Type and most spacing scale with the viewport through `clamp()`. The front matter records each value at its desktop maximum because the format can't express `clamp()`; the tables below give full ranges. In RDS projects always use the custom property, which carries the fluid formula.
- **Building with RDS** (`@cuweb/raven-design-system`): reach for an existing component first, then tokens. See [Implementing with RDS](#implementing-with-rds).
- **Building without RDS** (prototypes, other stacks): use the literal token values, load Inter, and follow the same rules.
- **Live reference:** every component is documented in the [RDS Storybook](https://cuweb.github.io/raven-design-system/).

## Colors

The palette is deliberately narrow: one brand red used sparingly, a ramp of neutral greys that carries most of the page, a small extended set for categorisation, and semantic triads for feedback.

- **Carleton Red** (`primary`) is the brand's voice. Use it for the most important action on a screen and for small accents: the 2px line across the top of the site header, heading underline rules, left accent bars, quote marks, metadata icons, focus rings, text selection, and hover states. White on red is 4.51:1 — just AA — so red is a fill for short labels, never for paragraphs.
- **Dark Red** (`primary-dark`) is the text-link colour (7.97:1 on white) and the fill for dark red bands.
- **Neutrals** do most of the work. Text is near-black `black` (#191919), never pure #000. `grey-pale` is the main tonal surface; `grey-lighter` draws hairlines; `grey` is for muted text on white only.
- **Extended** colours categorise: `purple` and `teal` fill category badges, and **Experience Blue** (`exp-blue`) is the blue button and the link hover colour. The `-light` tints are pale backgrounds for black text; no component uses them yet.
- **Semantic** states come in triads: the base colour for indicators (status dots, borders, icons), `-light` for backgrounds, and `-dark` for text on the light shade or as a fill behind white text. `warning` and `info` are light enough to take black text.
- **Social** platform colours (`--rds--color-linkedin`, `-facebook`, `-bluesky`, `-twitter`, `-instagram`, `-youtube`, `-tiktok`, `-orcid`) exist only for `SocialIcons` and are deliberately left out of this palette.

### Colour tokens

| Token                         | Name             | Value     | Role                                         |
| ----------------------------- | ---------------- | --------- | -------------------------------------------- |
| `--rds--color-primary`        | `primary`        | `#e91c24` | Primary actions, accents, focus ring, hover  |
| `--rds--color-primary-dark`   | `primary-dark`   | `#a21218` | Text links, dark red bands                   |
| `--rds--color-black`          | `black`          | `#191919` | Text, headings, dark bands, footer           |
| `--rds--color-grey-dark`      | `grey-dark`      | `#434343` | Secondary text, dark-grey buttons            |
| `--rds--color-grey`           | `grey`           | `#767676` | Muted text and icons, on white only          |
| `--rds--color-grey-light`     | `grey-light`     | `#d6d6d6` | Disabled fills, input borders, dividers      |
| `--rds--color-grey-lighter`   | `grey-lighter`   | `#e6e6e6` | Hairline borders, skeleton loaders           |
| `--rds--color-grey-pale`      | `grey-pale`      | `#f5f5f5` | Tonal surfaces: grey bands, cards, captions  |
| `--rds--color-grey-faint`     | `grey-faint`     | `#fafafa` | Subtle surfaces: striped rows, menu panels   |
| `--rds--color-white`          | `white`          | `#ffffff` | Page and card background                     |
| `--rds--color-purple`         | `purple`         | `#636FAC` | Category badges (white text)                 |
| `--rds--color-purple-light`   | `purple-light`   | `#D3DAE9` | Pale tint                                    |
| `--rds--color-teal`           | `teal`           | `#3A8082` | Category badges (white text)                 |
| `--rds--color-teal-light`     | `teal-light`     | `#C8DAD7` | Pale tint                                    |
| `--rds--color-exp-blue`       | `exp-blue`       | `#026BC8` | Blue button, link hover                      |
| `--rds--color-exp-blue-light` | `exp-blue-light` | `#E0EEFE` | Pale tint                                    |
| `--rds--color-success`        | `success`        | `#009e2d` | Success indicator                            |
| `--rds--color-success-light`  | `success-light`  | `#ecfff0` | Success background                           |
| `--rds--color-success-dark`   | `success-dark`   | `#026520` | Success text, green badge                    |
| `--rds--color-warning`        | `warning`        | `#f4c83c` | Warning indicator, yellow badge (black text) |
| `--rds--color-warning-light`  | `warning-light`  | `#fefbec` | Warning background                           |
| `--rds--color-warning-dark`   | `warning-dark`   | `#8d4613` | Warning text                                 |
| `--rds--color-error`          | `error`          | `#ff5757` | Error indicator                              |
| `--rds--color-error-light`    | `error-light`    | `#fff0f0` | Error background                             |
| `--rds--color-error-dark`     | `error-dark`     | `#b10303` | Error text, red badge                        |
| `--rds--color-info`           | `info`           | `#8ec5eb` | Info indicator, blue badge (black text)      |
| `--rds--color-info-light`     | `info-light`     | `#f2f8fd` | Info background                              |
| `--rds--color-info-dark`      | `info-dark`      | `#18598c` | Info text                                    |

### Contrast-checked pairs

| Text on background                                             | Ratio                       | Use                                      |
| -------------------------------------------------------------- | --------------------------- | ---------------------------------------- |
| `black` on `white`                                             | 17.58:1                     | Body text                                |
| `grey-dark` on `white`                                         | 9.89:1                      | Secondary text                           |
| `primary-dark` on `white`                                      | 7.97:1                      | Links                                    |
| `exp-blue` on `white`                                          | 5.33:1                      | Link hover                               |
| `grey` on `white`                                              | 4.54:1                      | Muted text — white backgrounds only      |
| `primary` on `white` / `white` on `primary`                    | 4.51:1                      | Outline and red buttons, accents         |
| `white` on `primary-dark`                                      | 7.97:1                      | Dark red bands                           |
| `white` on `black`                                             | 17.58:1                     | Dark bands                               |
| `grey-light` on `black`                                        | 12.10:1                     | Footer text                              |
| `black` / `grey-dark` on `grey-pale`                           | 16.13:1 / 9.07:1            | Grey bands, cards, captions              |
| `white` on `exp-blue` / `purple` / `teal`                      | 5.33 / 4.77 / 4.58:1        | Blue button, category badges             |
| `black` on `warning` / `info`                                  | 11.03 / 9.49:1              | Yellow and blue badges                   |
| `white` on `success-dark` / `error-dark`                       | 7.28:1                      | Green and red badges                     |
| `-dark` on `-light` (each semantic triad)                      | 6.58–6.98:1                 | Alerts                                   |
| **Fails:** `primary` on `grey-pale`                            | 4.14:1                      | Never                                    |
| **Fails:** `grey` on `grey-pale`                               | 4.17:1                      | Never                                    |
| **Fails:** `white` on `success` / `error` / `info` / `warning` | 3.54 / 3.11 / 1.85 / 1.59:1 | Never — use a `-dark` fill or black text |

### Dark contexts

Add `data-color-scheme="dark"` to any element (or to `<html>`) to flip its content for a dark background: near-black background, white text and headings, and underlined white links that turn `grey-lighter` on hover. `Section` with `bgType="black"` and `WideWave` set it automatically. Components with their own dark surfaces, such as the FullBanner box and the footer, colour their text directly.

### Gradients

| Token                                | Value                                                              | Use                                                            |
| ------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| `--rds--gradient-red-to-dark-red`    | `linear-gradient(135deg,rgb(233,28,36) 0%,rgb(25,25,25) 100%)`     | Carleton red to near-black (despite the name); white text only |
| `--rds--gradient-dark-grey-to-black` | `linear-gradient(135deg,rgb(118,118,118) 0%,rgb(25,25,25) 100%)`   | Grey to near-black; white text only                            |
| `--rds--gradient-white-to-pale-grey` | `linear-gradient(135deg,rgb(250,250,250) 0%,rgb(245,245,245) 90%)` | `Section` `light-gradient` band, table header and footer rows  |

No RDS component uses the two dark gradients; reserve them for rare feature backgrounds.

## Typography

**Inter** is the only typeface: self-hosted in weights 300–700 with italics (`@cuweb/raven-design-system/fonts.css`), stack `Inter, sans-serif` (`--rds--font-family-inter`). The voice comes from weight contrast. **Light (300) body text** reads open and editorial; **semibold (600) headings** with tight 1.1 leading read confident. Buttons and UI labels are medium (500); badges, date numerals, and department names are bold (700). There are no letter-spacing adjustments, and uppercase is reserved for tiny labels such as event-date months and avatar initials.

### Roles

| Role         | Size token        | Weight | Line height | Notes                                       |
| ------------ | ----------------- | ------ | ----------- | ------------------------------------------- |
| `h1`         | `heading-primary` | 600    | 1.1         | One per page                                |
| `h2`         | `heading-x-large` | 600    | 1.1         |                                             |
| `h3`         | `heading-large`   | 600    | 1.1         |                                             |
| `h4`         | `heading-medium`  | 600    | 1.1         |                                             |
| `h5`         | `heading-small`   | 600    | 1.1         |                                             |
| `h6`         | `heading-small`   | 600    | 1.1         | Italic                                      |
| `body`       | `large`           | 300    | 1.6         | Default text                                |
| `body-small` | `small`           | 300    | 1.6         | Excerpts, table cells, alert and toast copy |
| `caption`    | `medium`          | 300    | 1.6         | Italic, `grey-dark` on a `grey-pale` band   |
| `button`     | `medium`          | 500    | 1.3         | `small` below 784px and on small buttons    |
| `badge`      | `x-small`         | 700    | —           |                                             |
| `card-title` | `large`           | 600    | 1.3         | Black, turning red on hover                 |
| `meta`       | `x-small`         | 300    | 1.6         | Italic: dates, read times                   |

Headings and text are `black` on light surfaces and white in dark contexts.

### Fluid type scale

Every size scales linearly from its minimum at a 320px viewport to its maximum at 1280px.

| Token                              | Min → max         | Used for                                               |
| ---------------------------------- | ----------------- | ------------------------------------------------------ |
| `--rds--font-size-x-small`         | 0.7rem → 0.75rem  | Badges, card metadata, event-date months               |
| `--rds--font-size-small`           | 0.8rem → 0.9rem   | Excerpts, table cells, alert copy, buttons below 784px |
| `--rds--font-size-medium`          | 0.85rem → 1rem    | Buttons, captions, pre-headings, detail lists          |
| `--rds--font-size-large`           | 0.9rem → 1.125rem | Body text, card and alert titles                       |
| `--rds--font-size-x-large`         | 1.05rem → 1.25rem | Lead text in large page headers, event-date numerals   |
| `--rds--font-size-2x-large`        | 1.25rem → 1.5rem  | Large supporting text                                  |
| `--rds--font-size-heading-small`   | 1rem → 1.5rem     | h5, h6; `PageHeader` size `sm`                         |
| `--rds--font-size-heading-medium`  | 1.25rem → 1.75rem | h4; `PageHeader` size `md`                             |
| `--rds--font-size-heading-large`   | 1.5rem → 2.25rem  | h3; `PageHeader` size `lg`                             |
| `--rds--font-size-heading-x-large` | 1.75rem → 2.5rem  | h2; `PageHeader` size `xl`                             |
| `--rds--font-size-heading-primary` | 1.75rem → 3rem    | h1; `PageHeader` size `primary`                        |

### Weights and line heights

| Token                         | Value | Used for                                |
| ----------------------------- | ----- | --------------------------------------- |
| `--rds--font-weight-light`    | 300   | Body text, captions, citations          |
| `--rds--font-weight-normal`   | 400   | Pre-headings, detail lists              |
| `--rds--font-weight-medium`   | 500   | Buttons, header CTAs                    |
| `--rds--font-weight-semibold` | 600   | Headings; card, alert, and table titles |
| `--rds--font-weight-bold`     | 700   | Badges, date numerals, department names |
| `--rds--line-height-tight`    | 1.3   | Buttons, card titles, UI labels         |
| `--rds--line-height-normal`   | 1.6   | Body text                               |
| `--rds--line-height-loose`    | 1.8   | Extra-airy long-form text               |

Headings use a line height of 1.1, set in the base styles rather than as a token.

### Rhythm and links

- Space above headings: `x-large` before an h1 and `large` before h2–h6, then `small` between a heading and what follows it.
- Paragraphs and blocks in a content flow are separated by `medium`; list items by `x-small`.
- Links are `primary-dark` and turn `exp-blue` on hover. Inside cards, body links are `primary` and underline on hover; in dark contexts links are white and underlined.

## Layout

Layouts are mobile-first and centred. Text sits in a **960px reading column**, card grids, banners, and wide media extend to **1280px**, and full-bleed bands span the viewport. Page gutters are `--rds--spacing-large` on each side.

### Widths

| Token                        | Value  | Use                                                 |
| ---------------------------- | ------ | --------------------------------------------------- |
| `--rds--layout-small-size`   | 600px  | Narrow content (`alignsmall`), compact banner boxes |
| `--rds--layout-content-size` | 960px  | The reading column (`aligncontent`, the default)    |
| `--rds--layout-wide-size`    | 1280px | Grids, banners, and wide media (`alignwide`)        |
| `--rds--layout-max-size`     | 1536px | The largest layout width                            |

### Breakpoints

CSS custom properties can't be used inside media queries, so breakpoints are plain values; in RDS SCSS they are the `$rds-media-query-*` variables. Style for mobile first and enhance upward with `min-width` queries.

| Variable              | Value  | What changes                                                    |
| --------------------- | ------ | --------------------------------------------------------------- |
| `$rds-media-query-sm` | 600px  | Two-column grids; testimonials go side by side                  |
| `$rds-media-query-md` | 784px  | Buttons and band padding grow; three-column and 1/3 + 2/3 grids |
| `$rds-media-query-lg` | 960px  | Four-column grids; the FullBanner text box overlays its image   |
| `$rds-media-query-xl` | 1280px | The widest breakpoint                                           |

### Structure

- **Constrained flow.** Page content uses WordPress-style layout classes: `is-layout-constrained` centres children at the content width, `alignwide` widens a child to 1280px, `alignfull` breaks it out edge to edge, and `has-global-padding` applies the page gutters.
- **Bands.** `Section` wraps content in an optional `grey`, `black`, or `light-gradient` band with `large` padding (`x-large` from 784px). Consecutive bands of the same colour merge into one. Neighbouring layout blocks are separated by `medium`, or `large` from 784px.
- **Grids.** `Column` lays out 1, 2, 3, or 4 equal columns, or 1/3 + 2/3 splits, with a `large` gap. Two columns start at 600px and three at 784px; four columns show two from 600px and four from 960px.

### Spacing scale

| Token                      | Value                          | Range   | Typical use                                                       |
| -------------------------- | ------------------------------ | ------- | ----------------------------------------------------------------- |
| `--rds--spacing-2-x-small` | `0.44rem`                      | ≈7px    | Icon-to-text gaps                                                 |
| `--rds--spacing-x-small`   | `0.67rem`                      | ≈11px   | List items, table cell padding, badge insets                      |
| `--rds--spacing-small`     | `clamp(0.625rem, 1vw, 1rem)`   | 10–16px | After headings, gaps inside cards and alerts                      |
| `--rds--spacing-medium`    | `clamp(1rem, 2vw, 1.5rem)`     | 16–24px | Content flow, alert padding                                       |
| `--rds--spacing-large`     | `clamp(1.5rem, 3vw, 2.25rem)`  | 24–36px | Page gutters, grid gaps, space above h2–h6, band padding (mobile) |
| `--rds--spacing-x-large`   | `clamp(2.5rem, 4vw, 3.38rem)`  | 40–54px | Band padding (desktop), space above h1                            |
| `--rds--spacing-2-x-large` | `clamp(3.75rem, 6vw, 5.06rem)` | 60–81px | The largest separations, testimonial padding                      |

## Elevation & Depth

RDS is **flat**. Hierarchy comes from tonal layers (a white page, `grey-faint` and `grey-pale` surfaces, near-black bands), hairline borders, and the red accents. Elevation is reserved for things that genuinely float.

| Token                   | Value                                                                | Use                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--rds--shadow-natural` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | The only shadow in use: cards, event-date tiles, dialogs, modals, toasts, the cookie banner, filter panels, header menus, stacked lists, the login box |
| `--rds--shadow-sharp`   | `6px 6px 0px rgba(0, 0, 0, 0.2)`                                     | Defined but unused; don't introduce it without a design decision                                                                                       |

- Tonal surfaces don't get shadows: grey cards drop theirs.
- Borders are hairlines: 1px `grey-lighter` for the site header, tables, and dividers; 1px `grey-light` for inputs and table-head rules.
- Over photography, use scrims rather than shadows. FullBanner darkens images (70% black by default) and sets its text in a 90% black box; ImageCover lightens photos with an 85% white overlay; `black80` and `white80` badges sit on images.
- The site header is sticky and shadowless; its bottom hairline is enough.

## Shapes

Corners are **small and consistent**: 4px (`md`) almost everywhere, precise and modern without looking soft.

| Token                | Value  | Use                                                                               |
| -------------------- | ------ | --------------------------------------------------------------------------------- |
| `--rds--radius-sm`   | 2px    | Small inner elements: date tiles, card images, pagination, progress bars          |
| `--rds--radius-md`   | 4px    | The default: buttons, cards, badges, alerts, inputs, tables, figures, inset bands |
| `--rds--radius-lg`   | 8px    | Floating surfaces: the FullBanner text box, toasts, stacked lists                 |
| `--rds--radius-xl`   | 12px   | Defined but unused                                                                |
| `--rds--radius-full` | 9999px | Avatars, status dots, round icon buttons, timeline markers                        |

- Full-bleed (`alignfull`) bands and banners are square; the same surfaces inset in the page get `md` corners.
- A 3px `primary` left border marks featured cards (`leftBorder`) and bordered quotes; testimonials use 4px on small screens.
- CallOut boxes use a 5px `grey-light` frame.

### Brand motifs

- **The Carleton wave.** Flowing wave graphics edge key bands: black or red hard-edged waves along the top of `WideWave`, a repeating red wave along the bottom of `ImageCover`, red waves in the footer, and a white wave inside grey cards (`hasWave`). Use the official SVGs from `https://cdn.carleton.ca/rds/assets/graphics/` (`cu-waves-*.svg`); never redraw or recolour them.
- **The red line.** A 2px `primary` line is pinned to the very top of the viewport, above the site header.
- **Heading underline.** A short 1px `primary` rule, `spacing-large` wide, sits under a page-header heading and centres with centred text.
- **Quote mark.** A large (3.5rem) `primary` opening quotation mark sits above quoted text.

## Components

Use the RDS component when one exists; they encode everything below. Class names follow `cu-` BEM: `cu-card`, `cu-card--grey`, `cu-card__header`.

### Buttons

`Button` renders a native `<button>`. For navigation, use a link styled with the same classes (`a.cu-button`) or your framework's `Link`.

- **Shape:** `md` radius, a 1px border in the fill colour, and a medium (500) label with tight leading that never wraps. Padding is `x-small` × `medium`, growing to `small` × `large` from 784px; the label grows from `small` to `medium` at the same point. Icons sit left of the label at 20px (16px on small buttons).
- **Colours:** `red` (the default, for the primary action), `dark-grey`, `grey`, `blue`, `black`, and `white` (for dark backgrounds).
- **Hover:** red and blue turn dark grey; dark-grey, grey, and white turn red; black stays black. Outline buttons (`isOutline`) are white with coloured text and border, and fill with their colour on hover.
- **Modifiers:** `isSmall` (fixed small label, 0.5rem × 0.75rem padding), `isFull` (full width), and `isDisabled` (`grey-light` fill, `grey-dark` text, native `disabled`).
- Use one red button per group, with white, outline, or grey buttons for secondary actions. Group two or more with `ButtonGroup`. Icon-only buttons need `ariaLabel`.

### Cards

- White, `md` radius, `natural` shadow, and 1.25rem padding (1.75rem at the bottom).
- The title uses the `card-title` style: black, turning red on hover with no underline. Metadata is `x-small` italic, excerpts are `small`, and metadata icons are red.
- Variants: `isGrey` (grey-pale with no shadow, plus an optional white wave via `hasWave`), `leftBorder` (3px red accent), `isCenter`, `noImage`, and `noHover`.
- Event cards get a 70px white date tile (`sm` radius, shadow) that overlaps the image: the month in bold uppercase red, the day in bold black.
- Compose cards from the compound parts (`Card.Figure`, `Card.Header`, `Card.Body`, `Card.Excerpt`, `Card.EventMeta`, `Card.DateThumb`, `Card.Footer`, and so on) and lay them out with `Column` inside a wide container.

### Badges and status

- **Badges** are `x-small` bold labels with 3px × 12px padding, `md` radius (`sm`, `lg`, `full`, and `none` are available), and a border matching the fill. Colours: `grey`, `white`, `green` (success-dark), `red` (error-dark), `yellow` (warning, black text), `blue` (info, black text), `purple`, `teal`, and translucent `black80` and `white80` for use on images. Group them with `BadgeGroup`; on cards they overlay the top-left corner of the image.
- **Status** is a 0.75rem dot in the base semantic colour beside a `small` text label. Never show the dot alone.

### Feedback

- **Alert:** a `-light` fill, 1px base-colour border, and `-dark` text, with `md` radius and `medium` padding. It holds an icon, a `large` semibold title, and `small` `grey-dark` body copy.
- **Toast:** white, `lg` radius, `natural` shadow, with a thin tinted border and an icon in the semantic colour, a `medium` semibold title, and `small` `grey` body copy. Toasts are at most 22rem wide, stacked top right on desktop and at the bottom on mobile.
- **Dialog and Modal:** floating panels with `md` radius and the `natural` shadow; the page behind stops scrolling while one is open.
- **Loaders** (`BlockLoader`, `CardLoader`, `ListingLoader`, and others): skeletons in `grey-lighter` blocks with `md` radius and a subtle pulse, mirroring the layout they stand in for.

### Page headers

`PageHeader` sets a heading (semibold, tight leading, black) with an optional pre-heading (`medium`, `grey-dark`), supporting content, and the red underline rule. Sizes `sm` through `primary` step both heading and content sizes (see the type scale). A `white` variant is for dark backgrounds, and headers can be centred.

### Bands and heroes

- **Section:** a `grey`, `black` (dark context), or `light-gradient` band; the hero variant opens a page.
- **WideWave:** a near-black (or dark red) full-bleed band with the Carleton wave along its top; the showcase band for a heading plus a card grid.
- **ImageCover:** a `grey-pale` band, or a fixed background photo under a white overlay, edged with a red wave along the bottom.
- **FullBanner:** a full-bleed photo or video (at most 480px tall from 784px and 580px from 960px) with a near-black text box holding a white `PageHeader` and buttons. Background video gets a round pause control.
- **WideImage, TextImage, and TextMedia:** image-led bands and text-beside-media layouts.

### Navigation and footer

- **Nav:** a sticky white header with a 1px `grey-lighter` bottom border and the red line above it. Menu items get `grey-pale` hover fills; header CTAs are small `md`-radius red buttons (dark red on hover) or black.
- **DepartmentBar:** a `grey-pale` bar with the unit name in bold black, contact details divided by `grey-light` rules, and a bold `primary-dark` email link.
- **Footer and FooterStandard:** near-black with red Carleton waves along the bottom, `grey-light` text, white headings and links, and `grey-dark` dividers.

### Content

- **Quote:** at most 48rem wide, with either a 3px red left bar or a large red quote mark; the citation is `small` and light.
- **Testimonial:** a `grey-pale` panel (white inside grey sections) with `md` radius, a photo taking 40% of the width from 600px, and `2-x-large` padding.
- **CallOut:** a white box with a 5px `grey-light` frame, `md` radius, and `large` × `x-large` padding, holding a `PageHeader` and buttons.
- **Figure:** an `md`-radius image with an optional caption band (`grey-pale`, italic `grey-dark` `medium` text).
- **Table:** white with a 1px `grey-lighter` border and `md` radius, light-gradient header and footer rows, `small` semibold black headers, `small` `grey-dark` cells, and optional `grey-faint` striping.
- **Details:** plain or grey-panel lists of facts, with optional `grey-light` dividers and `grey` icons.
- **Inputs** (`SearchInput`, `LocationPicker`): a 1px `grey-light` border and `md` radius; the border darkens on focus.

### Component catalogue

| Need                 | Use                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Actions              | `Button`, `ButtonGroup`                                                                            |
| Labels and states    | `Badge`, `BadgeGroup`, `Status`, `ProgressBar`                                                     |
| Page titles          | `PageHeader`                                                                                       |
| Cards and grids      | `Card`, `Column`, `StackedList`                                                                    |
| Lists and facts      | `Listing`, `Description`, `Details`, `Timeline`                                                    |
| Feedback             | `Alert`, `Toast`, `Dialog`, `Modal`, loaders                                                       |
| Bands                | `Section`, `WideWave`, `ImageCover`                                                                |
| Heroes and media     | `FullBanner`, `WideImage`, `TextImage`, `TextMedia`, `Figure`, `Embed`, `ImageGrid`, `ImageSlider` |
| Quotes and CTAs      | `Quote`, `Testimonial`, `CallOut`                                                                  |
| Data                 | `Table`, `Calendar`                                                                                |
| Search and filtering | `SearchInput`, `FilterPanel`, `Pagination`                                                         |
| Maps                 | `Location`, `LocationPicker`                                                                       |
| Site chrome          | `Nav`, `DepartmentBar`, `Footer`, `FooterStandard`, `SocialIcons`                                  |
| People               | `Avatar`, `Card` (people layout)                                                                   |
| Page scaffolding     | `Body`, `Main`, `Article`, `Aside`                                                                 |
| Utilities            | `Icon`, `LinkProvider`, `CookieBanner`, `Login`, `Carleton360`                                     |

## Motion

Motion is quiet and functional: brief hover transitions and a gentle entrance for content, never decoration.

| Token                     | Value                        | Use                       |
| ------------------------- | ---------------------------- | ------------------------- |
| `--rds--duration-instant` | 100ms                        | Instant feedback          |
| `--rds--duration-fast`    | 150ms                        | Hover and colour changes  |
| `--rds--duration-base`    | 250ms                        | Most UI transitions       |
| `--rds--duration-slow`    | 400ms                        | Larger movements          |
| `--rds--duration-slower`  | 600ms                        | Entrances (scroll reveal) |
| `--rds--ease-standard`    | `cubic-bezier(0.2, 0, 0, 1)` | Most UI motion            |
| `--rds--ease-emphasized`  | `cubic-bezier(0.3, 0, 0, 1)` | Entrances                 |
| `--rds--ease-accelerate`  | `cubic-bezier(0.3, 0, 1, 1)` | Exits                     |

- Animate only `opacity` and `transform`.
- Cards reveal on scroll: they fade in and rise 12px over `slower` with `emphasized` easing, triggered 200px before they reach the viewport. Cards arriving together are staggered 120ms apart, capped at 600ms.
- Honour `prefers-reduced-motion: reduce` with no entrances and no smooth scrolling.

## Iconography & Brand Assets

- **Icons** are Font Awesome Pro, delivered only through the private `@cuweb/rds-icons` package and rendered by name with `<Icon name="…" />` or a component's `icon` prop. Never paste icon SVGs or path data into code, because the licence forbids redistributing them. Icons inherit `currentColor`; common sizes are 16px (small buttons), 20px (buttons), and 24px. Decorative icons are hidden from assistive technology; give meaningful icons a `title`.
- **Logos:** use the official Carleton logos from `https://cdn.carleton.ca/rds/assets/cu-logos/` (colour or black; horizontal or vertical lockups; shield-only marks). Never recreate, recolour, or distort them. Ravens athletics marks are for athletics contexts only.
- **Photography:** use real campus photography, set under a scrim or overlay whenever text sits on top of it.

## Accessibility

- **WCAG 2.1 AA is the floor.** Every RDS story is tested with axe and any violation fails CI. Aim for AAA where it doesn't compromise the design.
- **Contrast:** use the checked pairs in [Colors](#colors); body text needs 4.5:1.
- **Focus:** every focusable element shows a 2px `primary` outline offset by 2px (`:focus-visible`); use white on dark or photographic backgrounds. Never remove it.
- **Selection:** selected text is white on `primary`.
- **Names:** icon-only buttons need an accessible label; decorative icons stay hidden from assistive technology.
- **Never rely on colour alone:** status dots, badges, and alerts always carry text, and usually an icon.
- **Structure:** one `Main` per page, `Article` for self-contained content, `Aside` for related content, and headings in order.
- **Motion:** respect reduced-motion preferences.
- **Buttons act; links navigate.**

## Do's and Don'ts

- **Do** take every colour, size, radius, and shadow from the tokens: `var(--rds--*)` in RDS projects, the literal values elsewhere.
- **Do** keep Carleton red for the single most important action and for small accents; let white, near-black, and greys carry the page.
- **Do** set text in `black` (#191919) and links in `primary-dark`; never use pure #000.
- **Do** use Inter only: light body, semibold headings, medium buttons.
- **Do** keep reading text within the 960px column, and use 1280px for grids and media.
- **Do** use existing RDS components before writing custom CSS, and follow `cu-` BEM naming for anything new.
- **Do** pair every colour signal with text or an icon.
- **Don't** put `primary` text on `grey-pale` (4.14:1), or `grey` text on anything but white.
- **Don't** put white text on the base semantic colours (`success`, `error`, `info`, `warning`); use the `-dark` shade, or black text on `warning` and `info`.
- **Don't** use `warning` yellow for text, or social brand colours outside `SocialIcons`.
- **Don't** add colours, fonts, radii, or shadows, including the defined-but-unused `shadow-sharp` and `radius-xl`.
- **Don't** round full-bleed surfaces, or add shadows to tonal ones.
- **Don't** remove the focus ring, animate layout properties, or ignore reduced motion.
- **Don't** redraw or recolour the Carleton logo or waves, or paste icon SVGs into code.
- **Don't** use a `Button` for navigation.

## Implementing with RDS

- **Packages:** `@cuweb/raven-design-system` plus the private `@cuweb/rds-icons` peer dependency, both from GitHub Packages. See `docs/consumers/` for installation and authentication.
- **Styles:** import `@cuweb/raven-design-system/styles.css` once for tokens, base styles, and all component CSS, or just `tokens.css` and `fonts.css` for custom builds. WordPress themes enqueue the same stylesheet; `dist/wordpress/` carries the theme.json and the block and hybrid theme CSS.
- **Tokens:** `--rds--color-*`, `--rds--font-size-*`, `--rds--font-weight-*`, `--rds--line-height-*`, `--rds--spacing-*`, `--rds--radius-*`, `--rds--shadow-*`, `--rds--gradient-*`, `--rds--layout-*`, `--rds--duration-*`, and `--rds--ease-*`.
- **Classes:** components use `cu-` BEM (`cu-button--outline`), and layout uses the WordPress classes described in [Layout](#layout). Don't restyle component internals; compose and wrap components instead.
- **Links:** wrap the app in `LinkProvider` so components render your router's `Link`.
- **Motion in WordPress:** add `data-cu-reveal` to elements and load `vanilla-js/cuMotion`.
- **Reference:** the [Storybook](https://cuweb.github.io/raven-design-system/) documents every component. When Storybook runs locally, its MCP server (`http://localhost:6006/mcp`) exposes the same docs to agents. Token source: `c2b.config.json`.
