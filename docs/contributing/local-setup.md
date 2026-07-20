# Local setup

How to get a working dev environment for contributing to `@cuweb/raven-design-system`.

## Prerequisites

- **Node 22.14+** — pinned in [`.nvmrc`](../../.nvmrc). Run `nvm use` from the repo root.
- **pnpm 10.x** — declared in `packageManager` of [`package.json`](../../package.json). Install via `corepack enable` or follow [pnpm's install docs](https://pnpm.io/installation).

## 1. Clone and install

```sh
git clone git@github.com:cuweb/raven-design-system.git
cd raven-design-system
nvm use
pnpm install
```

All devDependencies come from the public npm registry. No GitHub Packages authentication is required for contributors.

> **Note for consumers:** If you are installing `@cuweb/raven-design-system` as a dependency in your own project, you will need a GitHub Packages token since RDS is published privately. See the [README](../../README.md) for consumer setup instructions.

## 2. Install Playwright browsers

`pnpm test:storybook` runs stories in headless Playwright. The npm package installs the runner, but the browser binaries are downloaded separately:

```sh
pnpm exec playwright install chromium
```

This is a one-time step per machine. If you skip it, `pnpm test:storybook` will fail with a "Executable doesn't exist" error pointing at a missing Chromium binary.

If you need cross-browser coverage (not typical for this project), run `pnpm exec playwright install` without arguments to install all browsers.

## 3. Run Storybook

```sh
pnpm dev
```

Storybook starts at http://localhost:6006. The `dev` script runs `assets` + `c2b` first to ensure generated files (asset config + design tokens) are current.

## Adding or updating icons

Icon SVG source files live in `src/icons/svg/`. After adding or modifying an SVG, regenerate the icon components:

```sh
pnpm generate:icons
```

This rebuilds `src/icons/generated/` and `src/icons/iconList.ts` from the SVG files. Commit both the SVG and the regenerated files together. This is the same pattern as `pnpm c2b` for design tokens — run it when the source changes, commit the output.

## Verify your setup

```sh
pnpm typecheck      # generate icons + tsc --noEmit
pnpm lint           # ESLint over src/
pnpm test           # Vitest run
pnpm test:storybook # Vitest + a11y axe checks across all stories (Node 22+ required)
```

The last command is what the [pre-push hook](../../.husky/pre-push) runs — make sure it passes locally before pushing.

## Hooks

[Husky](https://typicode.github.io/husky/) runs two hooks via [`pnpm prepare`](../../package.json):

- **pre-commit** ([`.husky/pre-commit`](../../.husky/pre-commit)) — `pnpm lint && pnpm typecheck`
- **pre-push** ([`.husky/pre-push`](../../.husky/pre-push)) — `pnpm test:storybook`

If a hook fails, fix the underlying issue rather than skipping with `--no-verify`.

## Troubleshooting

| Error                                                                   | Fix                                                                                              |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `pnpm test:storybook` — "Executable doesn't exist" / Chromium not found | Run `pnpm exec playwright install chromium` (step 2)                                             |
| `pnpm test:storybook` hangs or fails on Node < 22                       | Install Node 22.14 (`nvm install 22.14.0 && nvm use`)                                            |
| `pnpm c2b` errors about missing `c2b.config.json`                       | You're not in the repo root, or the file was deleted — restore from git                          |
| TypeScript errors about missing icon types                              | Run `pnpm generate:icons` — this should only happen if generated files were accidentally deleted |

## When to rotate tokens

If you are a consumer with a GitHub Packages token, rotate it at https://github.com/settings/tokens when it expires or when you leave the team.
