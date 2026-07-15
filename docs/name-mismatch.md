# RDS → RDS2 Name Mismatches

Reference list of components that don't have a same-named counterpart between the legacy RDS project
and RDS2 (`src/components/`). This exists to flag ambiguity before running a
[component diff](../.github/instructions/component-diff.instructions.md) — **no renames or mappings
are assumed here**; anything listed as "possibly related" is an unconfirmed observation only, not a
stated equivalence.

This list was compiled by inspecting the legacy RDS repo (conventionally checked out as a sibling
folder named `rds`), whose components are split across two folders: `lib/components/*` and
`lib/layouts/*`.

## RDS2 components with no same-named legacy component

| RDS2 component | Notes                                            |
| -------------- | ------------------------------------------------ |
| `Status`       | Not a component in legacy RDS — net-new in RDS2. |

The following were initially flagged here but are confirmed **not** mismatches — legacy has them
nested under `Footer`, just under a different subfolder name:

- `CookieBanner` — legacy: `lib/components/Footer/FooterCookie/`
- `DepartmentBar` — legacy: `lib/components/Footer/FooterDept/`
- `FooterStandard` — legacy: `lib/components/Footer/FooterStandard/FooterStandard.tsx` (same name)

## Legacy components with no same-named RDS2 component

Per `docs/refactor.md`, most of these are intentionally deprecated (reasoning included where documented
there); a few are still marked `port` (not yet ported) rather than deprecated.

| Legacy component      | Source folder     | RDS2 status                                                                                                    |
| --------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| `ErrorMessages`       | `lib/components/` | Deprecated — can be replicated with Text & Image                                                               |
| `FundingDetails`      | `lib/components/` | Deprecated — can be replicated with Text & Image                                                               |
| `ImageCaptionOverlay` | `lib/components/` | Deprecated — best to have individual control                                                                   |
| `Placeholder`         | `lib/components/` | Deprecated — no component required                                                                             |
| `Splash`              | `lib/components/` | Deprecated — only used in WordPress, no component required                                                     |
| `Meta`                | `lib/components/` | Deprecated — Next.js handles this natively                                                                     |
| `FloatBox`            | `lib/layouts/`    | Deprecated — not very useful, better data presentation planned                                                 |
| `Form`                | `lib/components/` | Not yet ported (`port` status in `docs/refactor.md`) — sub-fields (Checkbox, Select, Input, etc.) also pending |
| `Loaders`             | `lib/components/` | Not yet ported (`port` status) — per-component loaders (CardLoader, TableLoader, etc.) also pending            |

### Confirmed merges

These legacy components have no same-named RDS2 counterpart because they were intentionally merged
into another component rather than dropped:

- `MultiDayCalendar` (`lib/components/`) — merged into `Calendar`; maintaining two near-identical
  components wasn't worth it.
- `WideBanner` (`lib/components/`) — merged into `FullBanner`.

### No longer mismatches

`Toast`, `WideImage`, and `WideWave` were previously listed here as unverified, but all three exist
under the same name in `src/components/` — not mismatches.

## How to use this list

Before requesting a `Diff.md` for a component pair, check here first if the RDS2 name doesn't have an
obvious 1:1 legacy match. If a legacy component looks "possibly related," confirm manually (read both
source files) before treating it as the correct pairing — do not assume based on name similarity alone.
