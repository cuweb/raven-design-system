# Embed — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-*` BEM/SCSS; the `Figure` wrapper was dropped in favour of a
`cu-embed` / `cu-embed__container` structure, and the boolean `isRounded` prop was replaced by a
`maxWidth` alignment prop that also drives corner rounding. Provider subcomponents (`YouTube`, `Vimeo`,
`Kaltura`, `PowerBi`, `TED`, `SoundCloud`, `Audioboom`) and `EmbedHubSpot` keep identical props; only
minor markup and URL-encoding fixes changed.

## Props Changes

### `Embed` (wrapper)

| Prop                     | Legacy                | RDS2                                                      | Change              |
| ------------------------ | --------------------- | --------------------------------------------------------- | ------------------- |
| `isRounded` → `maxWidth` | `isRounded?: boolean` | `maxWidth?: 'aligncontent' \| 'alignwide' \| 'alignfull'` | Replaced            |
| `maxWidth`               | _n/a_                 | default `'aligncontent'`                                  | Added (new default) |

### Provider subcomponents and `EmbedHubSpot`

No prop changes. `EmbedYouTubeProps`, `EmbedVimeoProps`, `EmbedKalturaProps`, `EmbedPowerBiProps`,
`EmbedTEDProps`, `EmbedSoundCloudProps`, `EmbedAudioboomProps` all remain `{ title: string; url: string }`,
and `EmbedHubSpotProps` remains `{ formId: string; portalId: string }`.

## Deprecations

- `isRounded` — removed with no direct replacement. Rounding is now applied automatically by
  `.cu-embed__container:not(.alignfull)`, so only `alignfull` embeds render square corners.
- The legacy dependency on the `Figure` component was removed; embeds no longer render a `<figure>`
  wrapper. Consumers who need a caption should compose `Figure` around `Embed` themselves.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utilities (`relative rounded-xl overflow-hidden w-full pb-[56.25%] border border-cu-black-100`)
  replaced with `cu-embed cu-layout` on the root and `cu-embed__container` on the inner wrapper. The
  `maxWidth` value is applied as a WordPress alignment class (`aligncontent` / `alignwide` / `alignfull`)
  on both elements.
- **Markup/structure:** legacy rendered `<Figure><div>…</div></Figure>` inside a redundant fragment; RDS2
  renders `<div class="cu-embed cu-layout {maxWidth}"><div class="cu-embed__container {maxWidth}">…</div></div>`
  with no fragment and no `Figure`.
- **Aspect ratio:** the `pb-[56.25%]` padding hack was replaced with `aspect-ratio: 16 / 9` in SCSS.
- **Border:** the legacy `border border-cu-black-100` outline was removed; `.cu-embed-iframe` now sets
  `border: 0` explicitly and rounding comes from `var(--rds--radius-md)` instead of `rounded-xl`.
- **SoundCloud URL fix:** query-string separators were HTML-entity encoded in legacy
  (`&amp;color='ff5500'&amp;…`); RDS2 uses plain `&` separators and drops the stray quotes around the
  colour value, so the player parameters now actually apply.
- **Removed hardcoded iframe sizing:** legacy `SoundCloud`/`Audioboom` passed `width="100%"` and `TED`
  passed `width="854" height="480"`; these are gone in RDS2 since `.cu-embed-iframe` is absolutely
  positioned at 100% × 100%.
- **PowerBi:** converted from a block-bodied function to an expression-bodied arrow, and
  `allowFullScreen={true}` shortened to `allowFullScreen` (no behavioral change).
- **TED / Vimeo / YouTube:** the `lastPiece` / `videoID` variables were scoped inside the `if (url)`
  block rather than the function body. No output change.
- **`EmbedHubSpot`:** the inline `style={{ width: '100%' }}` on the form container was removed (width is
  now left to CSS/consumer layout), and the nested `else { if (window.hbspt) }` was flattened to
  `else if`. Behavior is otherwise unchanged.
- **Accessibility:** unchanged — each provider still requires a `title` on its `<iframe>`.
