# Aside — Diff (Legacy RDS → RDS2)

## Summary

No changes. The RDS2 component is byte-for-byte identical to the legacy component in props,
markup, and class names.

## Props Changes

None. `children`, `isSticky`, and `topSpace` are unchanged in name, type, default, and behavior.

## Deprecations

None.

## Behavioral / Styling Changes

None. The root `<aside className="relative cu-aside cu-prose">` markup, the sticky-wrapper
conditional (`isSticky` rendering an inner `<div className="sticky" style={{ top: `${topSpace}px` }}>`),
and all class names are unchanged between legacy and RDS2.
