/**
 * cu-motion — vanilla scroll-reveal runtime for WordPress / non-React contexts.
 *
 * Pairs with the [data-cu-reveal] CSS shipped in @carletonuniversity/rds2.
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
declare global {
    interface Window {
        cuMotion?: {
            init: () => void;
            register: (root?: ParentNode) => void;
        };
    }
}
export declare const register: (root?: ParentNode) => void;
export declare const init: () => void;
//# sourceMappingURL=vanilla.d.ts.map