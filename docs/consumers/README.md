# Consuming the Raven Design System

This section is for Carleton developers using `@cuweb/raven-design-system` in their projects.

## Quick start

```sh
# 1. One-time per machine: GitHub Packages auth
#    gh auth refresh --scopes read:packages
#    echo "//npm.pkg.github.com/:_authToken=$(gh auth token)" >> ~/.npmrc

# 2. In your project
echo "@cuweb:registry=https://npm.pkg.github.com" >> .npmrc
pnpm add @cuweb/raven-design-system
```

```tsx
import { Button, Icon } from '@cuweb/raven-design-system';
import '@cuweb/raven-design-system/styles';

<Button title="Save" icon="floppy-disk" />;
```

## What's in this section

| Doc                                          | When to read                                                                                                    |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [installation.md](installation.md)           | Setting up `.npmrc`, installing both packages, CI authentication                                                |
| [nextjs.md](nextjs.md)                       | Using RDS in a Next.js app, including `LinkProvider` for client-side routing                                    |
| [icons.md](icons.md)                         | The `<Icon>` component, import styles, FA Pro license compliance                                                |
| [per-component-css.md](per-component-css.md) | Importing one component's CSS instead of the bundled stylesheet                                                 |
| [wordpress/](wordpress/)                     | WordPress block plugins, block themes, hybrid themes, Timber/Twig — pick the scenario that matches your project |

## Background

`@cuweb/raven-design-system` is a private package on GitHub Packages — GitHub Packages authentication is required to install it.

## Updating

```sh
pnpm up @cuweb/raven-design-system
```

Check the [CHANGELOG](../../CHANGELOG.mdx) for breaking changes before bumping major versions.

## Removing

```sh
pnpm remove @cuweb/raven-design-system
```

Also remove the `@cuweb:registry=...` line from `.npmrc` (unless other `@cuweb/*` packages are in use) and any `import '@cuweb/raven-design-system/styles'` references.

## Getting help

- **Bug in a component:** open an issue on [`cuweb/raven-design-system`](https://github.com/cuweb/raven-design-system/issues)
- **Missing or incorrect icon:** open an issue on [`cuweb/raven-design-system`](https://github.com/cuweb/raven-design-system/issues) — icons are part of this repo
- **Auth / install problems:** see [installation.md](installation.md), then ask in #design-system
- **Architecture questions:** see [icons.md](icons.md) and [contributing/architecture.md](../contributing/architecture.md)
