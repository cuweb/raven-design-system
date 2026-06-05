# AGENTS.md — rds2 AI Agent Guide

Canonical per-file rules live in `.github/instructions/`. When this file and an `.instructions.md` file disagree, the `.instructions.md` file wins.

| Scope | Canonical file |
|---|---|
| Project-wide | `.github/copilot-instructions.md` |
| `src/components/**/*.tsx` | `.github/instructions/components.instructions.md` |
| `**/*.stories.tsx` | `.github/instructions/stories.instructions.md` |
| `**/*.scss` | `.github/instructions/styles.instructions.md` |

---

## Project overview

**@cuweb/rds2** — Carleton University's React component library. Paired with `@cuweb/rds-icons` (private peer dep) for Font Awesome Pro icons.

- **Build:** Vite library mode (ESM + CJS), TypeScript 6, pnpm
- **Runtime:** React 18, SCSS + CSS custom properties (no Tailwind)
- **Testing:** Storybook 10 + Vitest + Playwright; axe a11y at `"error"` threshold
- **Tokens:** `@troychaplin/component2block` generates `src/styles/auto/tokens.css` + `_variables.scss` from `c2b.config.json` — **never edit these files by hand**

---

## Common commands

```sh
pnpm storybook          # start Storybook dev server
pnpm typecheck          # tsc --noEmit
pnpm lint               # ESLint over src/
pnpm lint:fix           # ESLint with --fix
pnpm test               # Vitest unit tests
pnpm test:storybook     # all stories + axe a11y (requires Node 22+)
pnpm build              # Vite library build
pnpm c2b                # regenerate tokens.css + _variables.scss
```

**Before committing:** `pnpm typecheck && pnpm lint && pnpm test:storybook` must all pass.

---

## Adding a new component

1. Create `src/components/Foo/` with `Foo.tsx`, `styles.scss`, `index.ts`, `Foo.stories.tsx`
2. Add `export { Foo } from './components/Foo';` to `src/index.ts`
3. Add `'Foo'` to `componentNames` in `vite.config.components.ts`
4. Add a `## [Unreleased]` entry to `CHANGELOG.mdx` with the `_Added_` prefix

---

## Code conventions

- **No React import** unless using its APIs directly (automatic JSX transform)
- **No empty fragments** — avoid `<></>` when a single root element works
- **`undefined` not `''`** for conditional `className` — prevents `class=""` in the DOM
- **Early returns** over ternaries for branching render logic
- **No dead code** — remove commented-out code; never leave `// TODO` stubs
- **BEM class prefix:** `cu-` (e.g. `cu-badge`, `cu-badge--green`, `cu-badge__icon`)
- **CSS tokens:** `var(--rds--*)` — never hardcode colors, sizes, or font stacks

---

## Storybook stories

### File structure

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Component } from './Component';

const meta: Meta<typeof Component> = {
  title: 'Components/Category/Component',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    // Required for all union/enum props
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;
```

### Title taxonomy

| Prefix | Usage |
|---|---|
| `Components/Elements/*` | Atomic UI (Badge, Button, Icon, BadgeGroup) |
| `Components/Content/*` | Content display (Card, Quote, Table) |
| `Components/Media/*` | Image/video-heavy (FullBanner, ImageGrid) |
| `Components/Navigation/*` | Wayfinding (Nav, PageHeader, Footer) |
| `Components/Forms/*` | Data entry (Form, Input, Select) |
| `Components/Feedback/*` | Overlays, loading, errors (Alert, Modal) |
| `Components/Layout/*` | Structural wrappers (Section, Column) |
| `Components/Template Parts/*` | WordPress template part wrappers (Article, Aside, Body, Main) |
| `Components/Utilities/*` | Behavioral / non-visual (LinkProvider, CookieBanner) |
| `Overview/Templates/*` | Full-page compositions |

### Args

Always inline `args` inside the story object — never the external-assignment pattern:

```tsx
// Correct
export const Primary: Story = {
  args: { text: 'Badge', color: 'green' },
};

// Wrong
export const Primary: Story = {};
Primary.args = { text: 'Badge' };
```

Omit `args: {}` entirely if a story doesn't need args.

### argTypes

Always define `argTypes` for props with a union type so Storybook renders a dropdown:

- `'inline-radio'` for 2–4 options
- `'select'` for larger sets

```tsx
argTypes: {
  color: { control: 'select', options: ['grey', 'green', 'red', 'yellow', 'blue'] },
  rounded: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'full'] },
},
```

### Render functions — expression body only

The source transform in `.storybook/preview.ts` unwraps `render` functions for the docs code panel. **Block bodies break it.**

```tsx
// Correct — expression body
render: (args) => (
  <Main>
    <Section>
      <Component {...args} />
    </Section>
  </Main>
)

// Wrong — block body (breaks docs source panel)
render: (args) => {
  return <Component {...args} />;
}
```

If you need derived values, compute them inline with ternaries or hoist them outside `render`.

Only add `render` when you need custom layout or conditional composition. If the story is just `<Component {...args} />`, omit `render` — Storybook generates it.

### Shared content helpers

Use helpers from `src/data/storyContent.tsx` — never inline lorem ipsum:

```tsx
import { MultiParagraph, SingleParagraph, SampleList } from '../../data/storyContent';
```

### Accessibility

A11y violations are configured as errors and will fail `pnpm test:storybook`. Rules:

- **Never disable `color-contrast`** without fixing the underlying design token
- Disable a specific rule per-story only when it's a story-structure false positive:

```tsx
parameters: {
  a11y: {
    config: {
      rules: [{ id: 'landmark-complementary-is-top-level', enabled: false }],
    },
  },
},
```

- For stories that can't pass axe for architectural reasons (e.g. `<Body>` renders `<body>` inside Storybook's `<div>`), opt out entirely:

```tsx
tags: ['autodocs', '!test'],
parameters: {
  a11y: { test: 'off' },
},
```

The `!test` tag skips the story in `pnpm test:storybook` but keeps it visible in Storybook dev.

---

## SCSS

- All visual values from `--rds--*` tokens — see `src/styles/auto/tokens.css`
- Breakpoints via SCSS variables (CSS custom properties don't work in `@media`):

```scss
@use '../../styles/auto/variables' as *;

@media (min-width: $rds-media-query-md) { ... }
```

Available: `$rds-media-query-sm` (640px), `$rds-media-query-md` (768px), `$rds-media-query-lg` (1024px), `$rds-media-query-xl` (1280px).

Mobile-first: default styles target mobile; `min-width` queries enhance upward.

---

## Icons

Icons come exclusively from `@cuweb/rds-icons` (private peer dep). **Never add `.svg` files to this repo.**

```tsx
// Central component — preferred
import { Icon } from '../Icon/Icon';
<Icon name="circle-check" size={24} />

// Typed icon prop on a component
import type { IconName } from '@cuweb/rds-icons';
interface FooProps { icon?: IconName; }
```

For story grid/select demos, use `iconList` from `@cuweb/rds-icons` — don't hardcode icon name arrays.

---

## LinkProvider

Components that render links should use `useLinkContext()` so consumers can swap in Next.js `Link`, React Router `Link`, or a plain `<a>`:

```tsx
import { useLinkContext } from '../LinkProvider/useLinkContext';

const LinkComponent = useLinkContext();
return href ? <LinkComponent href={href}>...</LinkComponent> : <span>...</span>;
```

---

## Accessibility (components)

- Spread ARIA / HTML attrs via `...rest` so consumers can override
- Interactive components must extend the appropriate element's HTMLAttributes (e.g., `React.ComponentPropsWithoutRef<'button'>`) so DOM events pass through
- Decorative icons: `<Icon>` defaults to `aria-hidden="true"` + `focusable="false"`
- Meaningful icons: pass `title` to `<Icon>` — it sets `role="img"` + `<title>` automatically

---

## Changelog

Format: [Keep a Changelog](https://keepachangelog.com/). Add entries under `## [Unreleased]` in `CHANGELOG.mdx`:

```
_Added_ Brief description of what was added.
_Changed_ Brief description of what changed.
_Fixed_ Brief description of what was fixed.
```

Prefixes: `_Added_`, `_Changed_`, `_Fixed_`, `_Removed_`, `_Deprecated_`, `_Breaking_`, `_Security_`. Use `_Breaking_` alongside a major version bump.

---

## Key gotchas

- **Node 22.14 specifically** — `eslint-visitor-keys` (transitive dep) requires 22.13+; earlier minors fail on install
- **No SVGs in this repo** — FA Pro license requires icons stay in `@cuweb/rds-icons`
- **Storybook source transform** — expression-bodied render functions only; block bodies break the docs code panel
- **CSS vars in media queries** — won't work; use SCSS variables from `_variables.scss`
- **TS 6 side-effect imports** — `declare module '*.scss';` (no body) in `src/scss.d.ts`
- **`.npmrc` split** — project `.npmrc` has only `@cuweb:registry=...`; auth `_authToken` lives in `~/.npmrc`
- **Never run `--no-verify`** — husky hooks exist because bypassing them masked real bugs in the past
