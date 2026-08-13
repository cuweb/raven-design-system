# Body — Diff (Legacy RDS → RDS2)

## Summary

Props are unchanged, but the component no longer applies any default classes — `cu-body` and the
Tailwind flex-column utilities were removed with no replacement, leaving only the caller-supplied
`className`.

## Props Changes

None. `children` and `className` are unchanged in name, type, and behavior.

## Deprecations

None.

## Behavioral / Styling Changes

- Class naming: legacy always applied `cu-body flex flex-col min-h-screen` alongside the optional
  `className` (`className={`cu-body flex flex-col min-h-screen ${className ? className : ''}`}`).
  RDS2 applies no default classes at all — the root `<body>` renders with only
  `className={className ? className : ''}`, so `cu-body` and the flex/min-height layout utilities are
  gone. Consumers relying on the previous default flex-column, full-height body layout must now
  supply their own class or wrapper achieving the same effect.
