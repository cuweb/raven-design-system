# Installation

How to install `@cuweb/raven-design-system` in any consumer project.

## Prerequisites

You need GitHub Packages authentication before `pnpm install` will succeed — `@cuweb/raven-design-system` is a private package. Set up auth once per machine:

**With `gh` CLI (easiest):**

```sh
gh auth refresh --scopes read:packages
echo "//npm.pkg.github.com/:_authToken=$(gh auth token)" >> ~/.npmrc
```

**Manually:**

1. Go to https://github.com/settings/tokens
2. **Generate new token → Generate new token (classic)**
3. Name it `cuweb-packages`, pick an expiration, scope: `read:packages` only
4. Add to your user-level `~/.npmrc`:

```sh
echo "//npm.pkg.github.com/:_authToken=ghp_your_token_here" >> ~/.npmrc
```

For CI, set the `NODE_AUTH_TOKEN` env var to the token value.

## 1. Add the scope config

Create or edit `.npmrc` at your project root:

```
@cuweb:registry=https://npm.pkg.github.com
```

Commit this file. It tells pnpm/npm to look for `@cuweb/*` packages on GitHub Packages, not the public npm registry. It does **not** contain any secrets.

## 2. Install the package

```sh
pnpm add @cuweb/raven-design-system
```

## 3. Import styles

Once, near the top of your application:

```tsx
import '@cuweb/raven-design-system/styles';
```

This imports the full bundled stylesheet — design tokens, base element styles, and every component's CSS. For per-component CSS instead, see [per-component-css.md](per-component-css.md).

## 4. Use components

```tsx
import { Badge, Button, Icon } from '@cuweb/raven-design-system';

<Badge text="New" color="green" />
<Button title="Get started" icon="circle-check" />
<Icon name="calendar-clock" size={24} />
```

For Next.js-specific setup including `LinkProvider`, see [nextjs.md](nextjs.md).

## Troubleshooting

| Error                                              | Fix                                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `ERR_PNPM_FETCH_401 Unauthorized`                  | Auth not set up, or token expired — regenerate your GitHub Packages token                         |
| `ERR_PNPM_FETCH_404 Not Found` on `@cuweb/raven-*` | Project's `.npmrc` is missing the scope config — add `@cuweb:registry=https://npm.pkg.github.com` |
