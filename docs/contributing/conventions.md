# Conventions

This is a human-readable overview. The **canonical** rules — the ones GitHub Copilot enforces per file — live in [`.github/instructions/`](../../.github/instructions/). When this doc and a `.instructions.md` file disagree, the `.instructions.md` file wins.

| Scope | Canonical file |
|---|---|
| Project-wide | [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md) |
| `src/components/**/*.tsx` | [`.github/instructions/components.instructions.md`](../../.github/instructions/components.instructions.md) |
| `**/*.stories.tsx` | [`.github/instructions/stories.instructions.md`](../../.github/instructions/stories.instructions.md) |
| `**/*.scss` | [`.github/instructions/styles.instructions.md`](../../.github/instructions/styles.instructions.md) |

## File layout

Each component is a folder under [`src/components/`](../../src/components/):

```
src/components/Foo/
├── Foo.tsx              # Component implementation
├── Foo.stories.tsx      # Storybook stories
├── index.ts             # Barrel: export { Foo }; export type { FooProps }
└── styles.scss          # Component styles, BEM + tokens
```

## Naming

- **Class prefix:** `cu-` with BEM (e.g., `cu-badge`, `cu-badge--green`, `cu-badge__icon`)
- **CSS tokens:** `var(--rds--*)` (double dash) — e.g., `var(--rds--color-primary)`, `var(--rds--spacing-medium)`
- **SCSS variables (only for `@media`)**: `@use '../../styles/auto/variables' as *;` then `$rds-media-query-{sm,md,lg,xl}`

## Component patterns

- Export a named interface for props: `export interface FooProps`
- Export the component as a named export: `export const Foo`
- Add the component to [`src/index.ts`](../../src/index.ts) (so it's part of the main entry)
- Add the component name to `componentNames` in [`vite.config.components.ts`](../../vite.config.components.ts) (for per-component build output)
- Import styles directly: `import './styles.scss';` at the top of the `.tsx`
- Prefer discriminated unions over optional prop combos for polymorphic shapes
- For subcomponents, attach with `Object.assign` and set `displayName`

## Story patterns

- **Title taxonomy** — see [`docs/structure.md`](../structure.md) for the full component inventory and rationale. The prefix for each category:
  - `Components/Elements/*` — atomic primitives (Badge, Button, Icon, …)
  - `Components/Content/*` — content display patterns (Card, Quote, Table, …)
  - `Components/Media/*` — image/video-heavy and promotional (FullBanner, ImageGrid, …)
  - `Components/Navigation/*` — wayfinding (Nav, PageHeader, Footer, Pagination, …)
  - `Components/Forms/*` — data entry and filtering (Form, Input, Select, FilterPanel, …)
  - `Components/Feedback/*` — overlays, loading states, errors (Alert, Modal, Loaders, …)
  - `Components/Layout/*` — structural wrappers (Section, Column, StackedList, …)
  - `Components/Template Parts/*` — WordPress template part wrappers (Article, Aside, Body, Main)
  - `Components/Utilities/*` — behavioral / non-visual (LinkProvider, CookieBanner, …)
- Always `tags: ['autodocs']` and `parameters.controls.sort: 'requiredFirst'`
- Define `argTypes` for union-type props so Storybook renders a dropdown:
  - `'inline-radio'` for 2–4 options
  - `'select'` for larger sets
- Use **expression-bodied** render functions only — `.storybook/preview.ts` source transform unwraps `{ render: (args) => <Foo {...args} /> }` into clean code in the docs panel. Block bodies break the transform.
- For shared content, use helpers from [`src/data/storyContent.tsx`](../../src/data/storyContent.tsx): `<SingleParagraph />`, `<MultiParagraph count={n} />`, `<SampleList />`. Don't inline lorem ipsum.

## Styles

- All visual values come from `--rds--*` design tokens. **Never hardcode** hex colors, pixel values, or font stacks.
- Token reference: [`src/styles/auto/tokens.css`](../../src/styles/auto/tokens.css) (generated — do not edit).
- BEM with `cu-` prefix for class names; utility classes use `cu-utils--`.
- Mobile-first: default styles are mobile, use `min-width` media queries to enhance.
- Breakpoint variables (`$rds-media-query-{sm,md,lg,xl}`) are auto-generated in [`src/styles/auto/_variables.scss`](../../src/styles/auto/_variables.scss) — never edit by hand; run `pnpm c2b` to regenerate.

## Icons

- Type the icon name with `IconName` from `@cuweb/rds-icons` (peer dep) so consumers get autocomplete:
  ```tsx
  import type { IconName } from '@cuweb/rds-icons';
  interface FooProps {
    icon?: IconName;
  }
  ```
- Render via the central component: `<Icon name={icon} size={20} />`
- Never add `.svg` files to this repo — FA Pro license requires icons stay in `@cuweb/rds-icons`. See [architecture.md → Two-package icon model](architecture.md#two-package-icon-model).

## Accessibility

- Spread ARIA / HTML attrs through `...rest` so consumers can override
- Decorative icons: `<Icon>` defaults to `aria-hidden="true"` + `focusable="false"`
- Meaningful icons: pass `title` — `<Icon>` switches to `role="img"` + `<title>`
- Interactive components extend the appropriate element's HTMLAttributes (e.g., `React.ComponentPropsWithoutRef<'button'>`) so DOM events pass through
- A11y violations fail CI as errors — see [testing.md](testing.md). Don't disable `color-contrast` rules without fixing the underlying design issue.

## LinkProvider

Components that render links (e.g., Badge with `href`) should call `useLinkContext()` so consumers can swap in Next.js's `Link` (or React Router's, or a plain `<a>`):

```tsx
import { useLinkContext } from '../LinkProvider/useLinkContext';

const LinkComponent = useLinkContext();
return href ? <LinkComponent href={href}>...</LinkComponent> : <span>...</span>;
```

## Adding a new component

1. Create [`src/components/Foo/`](../../src/components/) with `Foo.tsx`, `styles.scss`, `index.ts`, `Foo.stories.tsx`
2. Add `export { Foo } from './components/Foo';` to [`src/index.ts`](../../src/index.ts)
3. Add `'Foo'` to the `componentNames` array in [`vite.config.components.ts`](../../vite.config.components.ts)
4. If the component uses icons, type the prop as `IconName` (peer dep — already available)
5. Add a `## [Unreleased]` entry to [`CHANGELOG.mdx`](../../CHANGELOG.mdx) with `_Added_` prefix
6. Verify: `pnpm typecheck && pnpm lint && pnpm test:storybook`

See [testing.md](testing.md) for what each verification step does.

## Code style

- Automatic JSX transform — don't import React unless using its APIs directly
- Avoid `<></>` when a single root element exists
- Use `undefined` instead of empty strings for conditional `className` (avoids `class=""` in the DOM)
- Prefer early returns over ternaries for branching render logic
- No dead commented-out code — remove or implement
- Don't add docstrings, comments, or type annotations to code you didn't change
