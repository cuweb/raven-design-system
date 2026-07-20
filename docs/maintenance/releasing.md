# Releasing

This doc is for maintainers publishing new versions of `@cuweb/raven-design-system`.

## Package structure

```
@cuweb/raven-design-system     (private, GitHub Packages)
    ↑ dependency
Consumer project
```

## When to release

| Change                                             | Release           |
| -------------------------------------------------- | ----------------- |
| Add/remove/update an icon SVG                      | patch or minor    |
| Change the `<Icon>` component behavior             | patch/minor/major |
| Add/change a component                             | patch/minor       |
| Breaking API change (renamed props, removed icons) | **major**         |

## Semver discipline

`@cuweb/raven-design-system` follows [Semantic Versioning](https://semver.org/).

- **Patch (0.1.x)** — bug fixes, new icons (additive), doc-only changes. No consumer changes needed.
- **Minor (0.x.0)** — new features (new components, new props), new icons added to the set. No consumer changes required, but consumers may want to adopt.
- **Major (x.0.0)** — breaking changes: renamed/removed components, changed prop signatures, removed icons, changed `IconName` union. Requires consumer migration.

Until the package hits `1.0.0`, treat minor bumps as potentially breaking and read the CHANGELOG carefully.

## Standard release flow

```sh
cd ~/Develop/raven-design-system

# Make your changes
pnpm build          # run the full library build — verifies everything compiles
pnpm test:storybook # run a11y tests
git add .
git commit -m "feat: add Card component"

# Update CHANGELOG.mdx under [Unreleased], then move those entries under the new version heading
$EDITOR CHANGELOG.mdx

# Bump
pnpm version patch  # or 'minor' or 'major'
git push
git push --tags
```

Pushing the tag triggers [.github/workflows/publish.yml](../../.github/workflows/publish.yml) which:

1. Installs deps
2. Runs `pnpm build` and `pnpm test --run`
3. Publishes `@cuweb/raven-design-system@<version>` to GitHub Packages

Authentication uses the workflow's built-in `secrets.GITHUB_TOKEN` with `packages: write` permission — no external setup needed.

## Adding or removing icons

1. Drop/delete `.svg` files in `src/icons/svg/`
2. `pnpm generate:icons` (regenerates `src/icons/generated/` and `src/icons/iconList.ts`)
3. If removing icons, the `IconName` union shrinks — consumer code referencing a removed name will fail typecheck. **Removing is breaking**, bump major.
4. Commit the `.svg` changes (generated files are gitignored)
5. Tag and push

### Verify

After the workflow completes (usually < 2 min):

```sh
# Check the GitHub Packages UI
open https://github.com/orgs/cuweb/packages

# Or via CLI
pnpm info @cuweb/raven-design-system
```

## Hotfix flow

Something's broken in the latest published version:

1. Create a branch from the failing tag: `git checkout -b hotfix/0.1.1 v0.1.0`
2. Fix the bug, commit
3. `pnpm version patch` (creates `v0.1.1`)
4. Push + push tags → workflow publishes
5. Merge the hotfix branch back to `main`

## Pre-release / canary versions

If you want to test a change without affecting the default install:

```sh
pnpm version prerelease --preid=next  # e.g. 0.2.0-next.0
git push --tags
```

Consumers can opt into the canary with `pnpm add @cuweb/raven-design-system@next`. Default `latest` tag is unaffected.

## CHANGELOG discipline

- Every public change goes in `CHANGELOG.mdx` under `[Unreleased]`
- Entries are prefixed with a keyword: `_Added_`, `_Changed_`, `_Fixed_`, `_Removed_`, `_Deprecated_`, `_Breaking_`, `_Security_`
- Before releasing, move the `[Unreleased]` entries under the new version heading with the date
- `_Breaking_` entries **must** coincide with a major version bump

## Release checklist

Before tagging:

- [ ] All tests pass (`pnpm typecheck`, `pnpm lint`, `pnpm test:storybook`)
- [ ] CHANGELOG entries are under the new version heading, not `[Unreleased]`
- [ ] Version in `package.json` matches the tag you're about to push
- [ ] FA Pro license compliance: no new team members added without updating the FA seat count

## FAQ

**Can I publish from my machine instead of using the workflow?**

Yes. `pnpm publish` after `pnpm build`, provided your `~/.npmrc` has the GitHub Packages auth. But prefer the workflow — it's reproducible, uses a known Node version, and doesn't rely on one person's local setup.

**What if the workflow fails mid-publish?**

Most common cause: the version tag was pushed but the workflow errored before `pnpm publish` completed. Safe to re-run the failed workflow from the Actions UI. If the version was partially published, you'll get an error — delete the broken version from GitHub Packages and re-run.
