# Motion

A small, accessibility-first motion layer. CSS does the animation; JS only flips one data attribute. Same CSS works for React components and WordPress/Gutenberg markup.

## Pieces

| Piece | Where |
|---|---|
| Motion tokens (durations + easings) | [`src/styles/base/_motion.scss`](../../src/styles/base/_motion.scss) — hand-authored on `:root`. Slated to move into `c2b.config.json` once the tool grows a motion section. |
| `useReducedMotion()` hook | [`src/utils/motion/useReducedMotion.ts`](../../src/utils/motion/useReducedMotion.ts) |
| `useScrollReveal()` hook | [`src/utils/motion/useScrollReveal.ts`](../../src/utils/motion/useScrollReveal.ts) |
| Vanilla `cu-motion` runtime | [`src/utils/motion/vanilla.ts`](../../src/utils/motion/vanilla.ts) → builds to `dist/vanilla-js/cuMotion.{js,mjs}` |
| Per-component reveal CSS | e.g. [`src/components/Card/styles-reveal.scss`](../../src/components/Card/styles-reveal.scss) |

## Tokens

```scss
--rds--duration-instant: 100ms;
--rds--duration-fast:    150ms;
--rds--duration-base:    250ms;
--rds--duration-slow:    400ms;
--rds--duration-slower:  600ms;

--rds--ease-standard:    cubic-bezier(0.2, 0, 0, 1);  // most UI motion
--rds--ease-emphasized:  cubic-bezier(0.3, 0, 0, 1);  // entrances
--rds--ease-accelerate:  cubic-bezier(0.3, 0, 1, 1);  // exits
```

Component CSS reads them via `var(--rds--duration-base)` etc. To add a new value: edit [`_motion.scss`](../../src/styles/base/_motion.scss). When c2b adds a motion section, the file moves into `src/styles/auto/` and is generated from `c2b.config.json` like every other token category.

## React usage

```tsx
import { Card } from '@carletonuniversity/rds2';

// Default — reveals on scroll
<Card>…</Card>

// Disabled — renders visibly with no entrance animation
<Card revealOnScroll={false}>…</Card>
```

`useScrollReveal` is available directly for custom components:

```tsx
import { useScrollReveal } from '@carletonuniversity/rds2';

const MyBlock = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      data-cu-reveal=""
      data-revealed={isVisible ? 'true' : 'false'}
    >
      …
    </section>
  );
};
```

Options: `{ threshold?: number, rootMargin?: string, once?: boolean, disabled?: boolean }`. Defaults: `0`, `'0px 0px 200px 0px'`, `true`, `false`.

The default `rootMargin` extends the IntersectionObserver's trigger zone 200px **below** the viewport — cards start animating while still under the fold so the transition completes by the time they reach the user's eyes. This is deliberate: the animation is a *pre-render*, not a reaction to the card scrolling into view. Fast scrollers don't outrun the motion; slow scrollers just see the card already there.

`useReducedMotion()` returns a live boolean reflecting `prefers-reduced-motion: reduce`. Use it to branch any JS-driven motion.

## WordPress / Gutenberg usage

Enqueue the vanilla runtime alongside the stylesheet:

```php
// functions.php
wp_enqueue_style('rds2', '...rds2/dist/style.css');
wp_enqueue_script(
  'cu-motion',
  '...rds2/dist/vanilla-js/cuMotion.js',
  array(),
  '1.0',
  true
);
```

Opt elements into the reveal by adding `data-cu-reveal`:

```php
// dynamic block render.php
<div class="cu-card" data-cu-reveal>
  <h3><?= esc_html($attributes['title']) ?></h3>
  <p><?= wp_kses_post($attributes['excerpt']) ?></p>
</div>
```

`cu-motion.js`:
- Auto-discovers `[data-cu-reveal]` elements on `DOMContentLoaded` and sets `data-revealed="true"` as each scrolls into view.
- Honours `prefers-reduced-motion: reduce` by revealing everything immediately, no observer attached.
- Idempotent — loading twice is a no-op.
- Exposes `window.cuMotion.register(container)` for AJAX or load-more inserts.

## CSS contract

The hidden state is gated on `[data-cu-reveal]` (the attribute), **not** on the component class alone. This is the no-JS fallback: a plain `<div class="cu-card">` without the attribute renders visibly even if the script never runs.

```scss
.cu-card[data-cu-reveal] {
  --cu-card-stagger: 0ms;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity var(--rds--duration-slower) var(--rds--ease-emphasized) var(--cu-card-stagger),
    transform var(--rds--duration-slower) var(--rds--ease-emphasized) var(--cu-card-stagger);
}

.cu-card[data-cu-reveal][data-revealed='true'] {
  opacity: 1;
  transform: translateY(0);
}
```

Cards revealed in the same IntersectionObserver callback — typically a row scrolling into the trigger zone together — receive a 120ms-stepped delay via `--cu-card-stagger`, set on each element by the hook (or the vanilla bundle) at reveal time. Capped at 600ms (~6 cards). A new row entering the trigger zone fires a new callback and starts the batch fresh at 0ms, so the stagger never accumulates across rows.

To tune: edit `STAGGER_STEP_MS` and `STAGGER_CAP_MS` at the top of [`useScrollReveal.ts`](../../src/utils/motion/useScrollReveal.ts) and [`vanilla.ts`](../../src/utils/motion/vanilla.ts) — keep them in sync.

Animate `transform` and `opacity` only — never `top`/`left`/`width`/`height`.

## Reduced motion

Three layers honour `prefers-reduced-motion: reduce`:

1. **CSS** — every component's reveal styles include a `@media (prefers-reduced-motion: reduce)` block that snaps `opacity: 1; transform: none; transition: none;` so the entrance is instant.
2. **`useScrollReveal`** — forces `isVisible: true` from first render, never attaches an `IntersectionObserver`.
3. **`cuMotion.js`** — reveals every `[data-cu-reveal]` immediately, never attaches an observer.

[`_globals.scss`](../../src/styles/base/_globals.scss) also flips `scroll-behavior` from `smooth` to `auto` so anchor-link jumps don't animate either.
