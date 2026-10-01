# CampaignHero development process

This log records the prompts and implementation decisions that shaped `CampaignHero`. Add a dated entry after each future prompt that changes this component or its examples.

## Prompt 1 — Plan and build CampaignHero

### Requirements discussed

- Add a new campaign hero; no Campaign Banner implementation exists in this repository, so removing or migrating a legacy component was out of scope.
- Reuse `PageHeader` for the department, title, and description. The department is the only `preHeader` value.
- Display campaign categories as grey `Badge` components beneath the description.
- Keep the text and category group visually separate from fundraising progress and the primary action.
- Place icon-free fundraising statistics beneath the hero on a grey background, following the Homepage template's `Card.Stats` pattern.
- Let a full-width campaign image extend beyond the alignwide text area and fade into the lightest grey token.
- Link the primary action to `#donate`.

### Implementation

- Added a typed `CampaignHero` component. Its props provide campaign copy, image and alternative text, categories, amount raised, goal, time remaining, and optional currency/action URL.
- Composed existing `PageHeader`, `Badge`, `ProgressBar`, `Card.Stats`, `Column`, and `Section` components. The donation action is a real link styled with the shared button classes because `Button` renders a button, not a navigation link; it uses `LinkProvider` so consumers can inject their router's link component.
- Calculated the displayed funded percentage from amount raised and goal, capped it at 100%, and passed the same underlying values to the progress bar.
- Added mobile-first styles with a token-based grey image fade and a desktop side fade, plus a Storybook example, required component documentation, public export, and changelog entry.

### Teaching notes

- Start by searching for an existing component before planning a replacement. Confirming that no Campaign Banner exists avoided deleting or changing an unrelated API.
- Compose existing primitives for consistent design and accessibility; use a native anchor for navigation rather than simulating a link with a button.
- Keep fundraising calculations in one place so the progress label and statistic card agree.
- Use design tokens for visual values and SCSS breakpoint variables only inside media queries.

## Prompt 2 — Show CampaignHero in a page template

### Requirements

- Add `PROCESS.md` to this component folder as an ongoing teaching log.
- Duplicate the existing cutheme `PageLayout` story as `FutureFunderCampaign`.
- Replace only the first section inside `Main` with the campaign hero.

### Implementation

- Created `src/templates/cutheme/FutureFunderCampaign.stories.tsx` from `PageLayout.stories.tsx`, preserving the existing navigation, footer, cookie banner, and example page content.
- Replaced the page's introductory gradient section with `CampaignHero`, using representative campaign content and the component's default `#donate` target.
- Kept the new named story under the existing cutheme template group so it appears alongside the original Page Layout example.
- Verified with `pnpm typecheck`, `pnpm lint`, and `pnpm test:storybook` (318 tests passed, 2 skipped); the copied story passes Prettier and `git diff --check`.

### Teaching notes

- A template story shows how a reusable component behaves with its surrounding site chrome, not only in an isolated component demo.
- Duplicate the smallest existing composition that provides the desired context, then make the specifically requested substitution to keep the example familiar and easy to compare.
