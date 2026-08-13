# Article — Diff (Legacy RDS → RDS2)

## Summary

Functionally identical component — same `content`/`children` branching logic — but the `cu-article`
class name applied to the root `<article>` element was removed with no replacement.

## Props Changes

None. `children` and `content` are unchanged in name, type, and behavior.

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: legacy always applied `className="cu-article"` to the root `<article>` element in
  both the `content` and `children` render branches. RDS2 renders a bare `<article>` with no class at
  all — `cu-article` was dropped and no replacement class was introduced.
- Rendering logic: legacy used two sibling conditional JSX blocks wrapped in a fragment
  (`{content && <article>...}` / `{!content && <article>...}`); RDS2 uses an early return
  (`if (content) return <article dangerouslySetInnerHTML={...} />`) followed by the default
  `<article>{children}</article>`. The rendered output is equivalent, only the branching style
  changed.
