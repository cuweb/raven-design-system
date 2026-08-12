# Nav — Diff (Legacy RDS → RDS2)

## Summary

`Nav` was rewritten from an imperative, vanilla-JS-driven component — DOM-manipulation modules
(`navToggles.ts`, `scrollingNav.ts`, `priorityPlus.ts`/`priority-plus/`) wired up once via
`useEffect` to toggle classes/attributes directly on `querySelector`-matched elements — into a
fully React-controlled implementation using hooks (`useIsMobile`, `NavMenu`'s own
`useState`/`useLayoutEffect`/`ResizeObserver`-based overflow measurement, and an inline scroll-hide
effect in `Nav.tsx`). `Nav.Aside` was removed with no replacement, and `Nav.Buttons` was drastically
simplified — the legacy logged-in/out user-avatar menu system and per-button submenu/menu-item
support were dropped in favor of a plain CTA-link array plus a search toggle (submenu/dropdown
responsibilities moved entirely to `Nav.Menu`). Tailwind utility classes were replaced with
`cu-nav__*` BEM/SCSS classes driven by design tokens.

## Props Changes

| Prop / Component                                                                                         | Legacy                                                                                                     | RDS2                                                                                                   | Change                                               |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `Nav.Aside`                                                                                              | Subcomponent — generic centered flex container composed alongside `Top`/`Bottom`/`Menu`                    | _removed_                                                                                              | Removed — no direct replacement                      |
| `NavButtons` — `menu`                                                                                    | `menu?: ImenuItem[]` — rendered as `cu-button`-styled links, each optionally with its own submenu dropdown | _removed_ — submenu/link-list rendering now lives entirely in `Nav.Menu`/`NavMenuItem`/`NavSubMenu`    | Removed                                              |
| `NavButtons` — `LoggedInUser`/`LoggedOutUser`/`LoggedMenu`/`userNoImage`/`LoggedInLink`/`onClickHandler` | Present — a full logged-in/out user-avatar dropdown system built on `Avatar`                               | _removed_ — no equivalent user-menu system                                                             | Removed                                              |
| `NavButtons` — `buttons`                                                                                 | _n/a_                                                                                                      | `buttons?: NavButton[]` (`{ title, href, variant?: 'primary' \| 'dark' }`) — plain CTA links           | Added — replaces the `menu` prop's CTA-link behavior |
| `NavMenu` — overflow measurement                                                                         | Implicit — handled by the external `priorityPlus.ts` DOM module, invoked once via `menuPriority()`         | `NavMenu` measures overflow itself via a hidden clone + `ResizeObserver`, exposing no new public props | Reimplemented internally (not prop-facing)           |

`Nav` (`children`), `NavTop`/`NavBottom` (`children`), `NavLogo` (`title`, `link`), and
`NavButtons`' `isSearch`/`onClickSearch` are otherwise unchanged in shape.

## Deprecations

- `Nav.Aside` — no direct replacement; there is no RDS2 subcomponent for an arbitrary centered
  flex-item region alongside the nav.
- `NavButtons`' logged-in/out user-avatar menu (`LoggedInUser`, `LoggedOutUser`, `LoggedMenu`,
  `userNoImage`, `LoggedInLink`, `onClickHandler`, and its dependency on `Avatar`) — no direct
  replacement in RDS2's `NavButtons`.
- `NavButtons`' `menu` prop (button-styled links with per-item submenus, `convertToSlug`-based
  `data-menu-item` attributes) — no direct replacement; use `Nav.Menu` for navigational links with
  submenus, and `NavButtons`' new `buttons` prop only for simple CTA links.
- The standalone vanilla-JS modules `navToggles.ts`, `scrollingNav.ts`, and the
  `priorityPlus.ts`/`priority-plus/` overflow algorithm — no direct replacement; equivalent
  behavior now lives in React state/hooks (`useIsMobile`, `NavMenu`'s internal measuring logic, and
  `Nav.tsx`'s own scroll effect).

## Behavioral / Styling Changes

- State management architecture: legacy called `menuPriority()`, `setupMenuToggle()`, and
  `scrollingNav()` once in a mount-only `useEffect`, all of which query the DOM directly
  (`document.querySelector(...)`) and mutate classes/styles/`aria-*` attributes imperatively, with
  helpers like `closeAllSubmenus`/`closeInnerSubMenus`/`isElementOverflowing`. RDS2 tracks all of
  this in React state: `useIsMobile` (a `matchMedia`-based hook) determines the mobile breakpoint,
  `NavMenu` measures overflow via a hidden ARIA-hidden clone `<ul>` plus a `ResizeObserver` (using
  `flushSync` to commit before paint) and drives `visibleCount`/`openDropdown`/`browseOpen` state,
  and `Nav.tsx` runs its own scroll listener to slide the header up/down.
- Mobile CTA relocation: legacy had no equivalent behavior — `NavButtons`/menu placement was fixed
  by whichever subcomponent composed them. RDS2 adds `moveButtonsIntoBottom`, which — only below
  the mobile breakpoint, and only for a `Nav.Top` + `Nav.Bottom` composition with buttons inside
  `Nav.Top` — relocates the `Nav.Buttons` element into `Nav.Bottom` using React
  `Children`/`cloneElement`, so the CTA buttons sit beside the Browse trigger on mobile.
- Scroll-hide algorithm: legacy's `scrollingNav.ts` computed one fixed shift value
  (`navLogo.offsetHeight`) and only engaged it for `NavBottom` compositions or narrow viewports
  (`windowWidth <= 640`) with `NavTop`. RDS2's inline effect computes the shift dynamically per
  composition: it prefers `.cu-nav__bottom`'s position when present, falls back to the logo's
  bottom edge on mobile-only `Nav.Top` compositions, and falls back again to the full header height
  otherwise — and it resets `header.style.top` on mobile/desktop switches to avoid getting stuck
  mid-shift.
- `navType` class removed: legacy computed `cu-nav--top`/`cu-nav--bottom` on the root `<nav>` by
  checking for a `NavBottom` child, and applied `sm:flex-nowrap` only for the `top` type. RDS2's
  root `<nav className="cu-nav__inner">` has no such modifier class or child-type branching.
- Accessibility: legacy's root `<nav>` had no `aria-label`. RDS2's `<nav className="cu-nav__inner">`
  adds `aria-label="Site navigation"`.
- Logo/shield swap breakpoint: legacy swapped between the full horizontal logo and the shield mark
  at the `md` breakpoint (`hidden md:block` / `block md:hidden`). RDS2 swaps at `sm` instead
  (`cu-nav__logomark-full--sm-hidden`, `cu-nav__logomark-shield` hidden at `sm`+) — the full logo
  now appears at a narrower viewport than before.
- Logo asset source: legacy hardcoded raw `cu-production.s3.amazonaws.com` CDN URLs; RDS2 hardcodes
  `cdn.carleton.ca` CDN URLs instead — same images, different host.
- Search icon color: legacy passed an explicit `color="#b3b3b3"` to the search `<Icon>`; RDS2
  passes no explicit color, relying on `.cu-nav__search-btn`'s own CSS color instead.
- Overflow "Browse" dropdown: legacy's priority-plus algorithm moved overflowing items into a
  DOM-toggled dropdown with manual `aria-expanded`/class-based arrow rotation
  (`navArrowRotateClass`, `navArrowActiveClass`) and an `isElementOverflowing` viewport check.
  RDS2's `NavMenu` renders a `Browse` trigger that's always present in the DOM (so its width is
  always measurable), becomes a "ghost" (visually hidden, `aria-hidden`, `tabIndex={-1}`) when
  nothing overflows, and closes on outside click or `Escape` — behavior not present in legacy's
  overflow handling.
- Class naming: Tailwind utility classes (`w-screen max-w-screen-2xl mx-auto`, `bg-cu-black-25
border-t border-t-cu-black-100`, `w-[calc(100%+40px)] sm:w-[calc(100%+64px)]`,
  `text-cu-black-800 hover:text-cu-red-700`) → `cu-nav`, `cu-nav__inner`, `cu-nav__top`,
  `cu-nav__bottom`, `cu-nav__bottom-inner`, `cu-nav__logo`, `cu-nav__logomark*`,
  `cu-nav__site-title`, `cu-nav__buttons`, `cu-nav__cta-link`, `cu-nav__menu`, `cu-nav__list`,
  `cu-nav__item`, `cu-nav__link`, `cu-nav__submenu*`, `cu-nav__browse*` BEM classes, styled with
  `var(--rds--*)` tokens.
