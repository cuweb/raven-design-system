/**
 * cu-motion — vanilla scroll-reveal runtime for WordPress / non-React contexts.
 *
 * Pairs with the [data-cu-reveal] CSS shipped in @cuweb/rds2.
 * On DOMContentLoaded, observes every [data-cu-reveal] element and sets
 * data-revealed="true" as each scrolls into view, which is what the CSS
 * keys off to fade and translate the element in.
 *
 * Honours prefers-reduced-motion: reduce by revealing everything immediately
 * (no observer attached, no animation delay).
 *
 * Consumption:
 *   wp_enqueue_script('cu-motion', '.../rds2/dist/vanilla-js/cuMotion.js', [], '1.0', true);
 *
 *   <div class="cu-card" data-cu-reveal>...</div>
 *
 * For content inserted after page load (AJAX, load-more):
 *   window.cuMotion.register(container);
 *
 * Idempotent — safe to load twice; the second load is a no-op.
 */

const SELECTOR = '[data-cu-reveal]';
const REVEALED = 'data-revealed';
// Trigger zone extends 200px below the viewport so the reveal animation
// completes before the card is actually seen — fast scrolls don't outrun it.
const THRESHOLD = 0;
const ROOT_MARGIN = '0px 0px 200px 0px';
// Cards revealed in the same observation batch (typically one row scrolling
// in together) stagger by 120ms increments, capped at 600ms. New batches
// start fresh at 0ms — no cumulative lag across rows.
const STAGGER_STEP_MS = 120;
const STAGGER_CAP_MS = 600;
const STAGGER_VAR = '--cu-card-stagger';

declare global {
  interface Window {
    cuMotion?: { init: () => void; register: (root?: ParentNode) => void };
  }
}

const prefersReducedMotion = (): boolean =>
  !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

const reveal = (el: Element): void => {
  el.setAttribute(REVEALED, 'true');
};

let observer: IntersectionObserver | null = null;
const observed: WeakSet<Element> | null =
  typeof WeakSet === 'function' ? new WeakSet<Element>() : null;

const getObserver = (): IntersectionObserver | null => {
  if (observer) return observer;
  if (typeof IntersectionObserver === 'undefined') return null;
  observer = new IntersectionObserver(
    (entries) => {
      let batchIndex = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stagger = Math.min(batchIndex * STAGGER_STEP_MS, STAGGER_CAP_MS);
          (entry.target as HTMLElement).style.setProperty(STAGGER_VAR, `${stagger}ms`);
          reveal(entry.target);
          observer?.unobserve(entry.target);
          batchIndex++;
        }
      });
    },
    { threshold: THRESHOLD, rootMargin: ROOT_MARGIN },
  );
  return observer;
};

export const register = (root: ParentNode = document): void => {
  const elements = root.querySelectorAll<HTMLElement>(SELECTOR);
  if (!elements.length) return;

  const reduced = prefersReducedMotion();
  const obs = reduced ? null : getObserver();

  elements.forEach((el) => {
    if (observed?.has(el)) return;
    if (reduced || !obs) {
      reveal(el);
    } else {
      obs.observe(el);
      observed?.add(el);
    }
  });
};

export const init = (): void => {
  register(document);
};

if (typeof window !== 'undefined' && typeof document !== 'undefined' && !window.cuMotion) {
  window.cuMotion = { init, register };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
