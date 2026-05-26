/**
 * Vanilla JS companion for <Card.VideoFigure>.
 *
 * Renders no DOM of its own — it enhances markup that matches the rds-2.0
 * Card.VideoFigure contract:
 *
 *   <div class="cu-card">
 *     <figure class="cu-card__figure cu-card__figure--video"
 *             data-rds-video-card
 *             data-embed-url="..."
 *             data-provider="...">
 *       <a class="cu-card__figure-link" href="<canonical-url>" aria-label="Play video: ...">
 *         <img class="cu-card__figure-poster" src="..." data-fallbacks="url1,url2,url3">
 *         <span class="cu-card__figure-play"><!-- icon --></span>
 *       </a>
 *     </figure>
 *     <header class="cu-card__header">
 *       <h3 class="cu-card__header-title">Title</h3>
 *     </header>
 *   </div>
 *
 * On DOMContentLoaded, every `[data-rds-video-card]` is wired up:
 *   - Clicks on the inner link replace it with an autoplaying <iframe>.
 *   - Cmd/Ctrl/Shift/middle-clicks fall through to the canonical link target.
 *   - Poster <img> elements with `data-fallbacks` walk the list on `onerror`.
 *
 * Build target: dist/videoCard.{js,mjs}. No dependencies, no React.
 */
/** Wire up every `[data-rds-video-card]` in the given root (default: document). Idempotent. */
export declare const initVideoCards: (root?: ParentNode) => void;
//# sourceMappingURL=vanilla.d.ts.map