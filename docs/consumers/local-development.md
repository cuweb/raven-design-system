# Testing local RDS changes in a consumer project

Use `pnpm link` to test an unreleased checkout of `@cuweb/raven-design-system` in a consumer such as `cutheme-block-library`. This creates a symlink in the consumer's `node_modules`; it does not publish a release or change the consumer's `package.json`.

## One-time setup

Keep the consumer's normal version range for `@cuweb/raven-design-system` in its `package.json`. The consumer should also have RDS's peer dependencies installed, including `@cuweb/rds-icons` when it uses icons.

Build RDS once so the package's `dist/` files are available:

```sh
cd /path/to/raven-design-system
pnpm install
pnpm build
```

In another terminal, link the local checkout from the consumer project:

```sh
cd /path/to/cutheme-block-library
pnpm link /path/to/raven-design-system
```

Replace both paths with the actual locations of your checkouts. The link points to the local package directory, and RDS's package exports resolve to its built `dist/` output.

## Iterating on changes

After editing RDS source, rebuild it:

```sh
cd /path/to/raven-design-system
pnpm build
```

Then refresh or restart the consumer's development server if it does not pick up the changed build output. RDS does not currently provide a watch-build script, so run `pnpm build` again after each set of changes you want to test.

## Unlinking

When finished, remove the symlink from the consumer and reinstall its declared dependencies to restore the published package version:

```sh
cd /path/to/cutheme-block-library
pnpm unlink @cuweb/raven-design-system
pnpm install
```

The local link bypasses the RDS release cycle only. Any other packages the consumer needs, such as the private `@cuweb/rds-icons` peer dependency, must still be installed normally.
