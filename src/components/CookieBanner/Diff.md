# CookieBanner — Diff (Legacy RDS → RDS2)

## Summary

Renamed from `FooterCookie` to `CookieBanner` (confirmed non-mismatch per `docs/name-mismatch.md` —
legacy nests it under `Footer/FooterCookie/`). All hardcoded copy and the privacy-policy link are now
configurable props; hardcoded `<a>` markup was replaced with the `LinkProvider` context system; and
Tailwind utility classes were replaced with BEM/SCSS.

## Props Changes

| Prop          | Legacy                                                                                                    | RDS2                                             | Change |
| ------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------ |
| `cookieName`  | _none_ — hardcoded `'cookieConsent'`                                                                      | `cookieName?: string`, default `'cookieConsent'` | Added  |
| `message`     | _none_ — hardcoded `'This site uses cookies to offer you a better browsing experience. Find out more on'` | `message?: string`, same default                 | Added  |
| `policyHref`  | _none_ — hardcoded `'https://carleton.ca/privacy/privacy-notices/website-privacy-notice/'`                | `policyHref?: string`, same default              | Added  |
| `policyLabel` | _none_ — hardcoded `'how we use cookies and how you can change your settings.'`                           | `policyLabel?: string`, same default             | Added  |
| `buttonLabel` | _none_ — hardcoded `'Ok, got it!'`                                                                        | `buttonLabel?: string`, same default             | Added  |

## Deprecations

None.

## Behavioral / Styling Changes

- Component/export renamed: `FooterCookie` → `CookieBanner`.
- Class naming: Tailwind utilities (`hidden fixed z-50 mx-auto max-w-7xl p-6 border-4 rounded-md
shadow-lg bg-cu-black-25 bottom-6 right-6 left-6 border-white`, toggled via a `!block` override
  class) → BEM (`cu-cookie-banner`, `cu-cookie-banner__content`, `cu-cookie-banner__message`,
  `cu-cookie-banner__link`, `cu-cookie-banner__action`) backed by CSS custom properties.
- Visibility handling: legacy always rendered the markup and toggled visibility purely via CSS
  classes (`hidden` / `!block`) driven by `useState` + `useEffect` running `IsCookieExpired` after
  mount. RDS2 computes `isVisible` synchronously in `useState(() => isCookieExpired(cookieName))` and
  conditionally renders `null` when not visible (`if (!isVisible) return null;`), so the component no
  longer mounts hidden markup into the DOM at all.
- Cookie helpers: `IsCookieExpired`/`SetCookie` (legacy, exported standalone functions with
  PascalCase names) → `isCookieExpired`/`setCookie` (RDS2, camelCase, moved into a dedicated
  `cookies.ts` module). `setCookie` in RDS2 also adds an optional `days` parameter (default `365`)
  for the cookie expiry window, which legacy hardcoded inline.
- Link markup: legacy rendered a hardcoded `<a href="..." className="font-semibold text-cu-red-700
hover:underline">`. RDS2 renders the policy link through `useLinkContext()` — a consumer-provided
  `LinkComponent` (e.g. Next.js `Link`) — so the link can be swapped by the app instead of always
  rendering a plain anchor.
- Accessibility: RDS2 adds `role="dialog"`, `aria-live="polite"`, and `aria-label="Cookie notice"` on
  the root element, none of which existed in legacy.
- The accept button's click handler renamed conceptually (`handleButtonClick` → `handleAccept`) with
  equivalent behavior (sets the cookie, then hides the banner).
