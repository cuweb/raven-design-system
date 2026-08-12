# ImageSlider — Diff (Legacy RDS → RDS2)

## Summary

Tailwind utility classes replaced with `cu-slider__*` BEM/SCSS. The three `slidesPerView*` props were
replaced by a single `maxWidth` prop that maps to preset per-breakpoint slide counts. The imperative
DOM-manipulating `script.ts` was replaced by a React `useImageSlider` hook using refs, state, and a
`ResizeObserver`. `ImageSlider.Item` no longer delegates to `ImageCaptionOverlay` — it renders its own
overlay and gains a `content` prop.

## Props Changes

### `ImageSlider`

| Prop                   | Legacy                         | RDS2                                                                     | Change  |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------ | ------- |
| `slidesPerViewDesktop` | `slidesPerViewDesktop: number` | _removed_                                                                | Removed |
| `slidesPerViewTablet`  | `slidesPerViewTablet?: number` | _removed_                                                                | Removed |
| `slidesPerViewMobile`  | `slidesPerViewMobile?: number` | _removed_                                                                | Removed |
| `maxWidth`             | _n/a_                          | `'aligncontent' \| 'alignwide' \| 'alignfull'`, default `'aligncontent'` | Added   |

### `ImageSlider.Item`

| Prop      | Legacy | RDS2               | Change |
| --------- | ------ | ------------------ | ------ |
| `content` | _n/a_  | `content?: string` | Added  |

`imageUrl`, `focalPointX`, `focalPointY`, `title`, `link`, and `aspectRatio` are unchanged, including
their defaults (`50`, `50`, `'landscape'`).

### Interface rename

`ImageSliderProp` → `ImageSliderProps`.

## Deprecations

- `slidesPerViewDesktop` / `slidesPerViewTablet` / `slidesPerViewMobile` — no direct replacement.
  Slide counts are now derived from `maxWidth`:
    - `aligncontent` → 2 desktop / 2 tablet / 1 mobile
    - `alignwide` → 3 / 2 / 1
    - `alignfull` → 4 / 2 / 1
- `ImageSliderProp` type export — renamed to `ImageSliderProps`.
- `script.ts` / the default-exported `SliderScript()` function — removed; slider behaviour now lives in
  the internal `useImageSlider` hook and is not exported.
- The `data-slides-desktop` / `data-slides-tablet` / `data-slides-mobile` data attributes are no longer
  rendered, so external scripts can no longer read or drive slide counts from the DOM.
- `ImageCaptionOverlay` is no longer used by `ImageSlider.Item`; the overlay markup is inlined.

## Behavioral / Styling Changes

- **Class naming:** Tailwind utilities → BEM/SCSS.
    - Root: `cu-slider cu-component-updated overflow-hidden -mr-4` → `cu-slider` plus the `maxWidth` value
      as a class (e.g. `cu-slider alignfull`); `cu-component-updated` removed.
    - Track: `cu-slider--wrap flex align-items-center` → `cu-slider__track`.
    - Slide: `cu-slider--item pr-4` → `cu-slider__slide` (spacing now via a `gap` on the track instead of
      right padding and a negative root margin).
    - Image: Tailwind aspect/rounding/background utilities → `cu-slider__item` +
      `cu-slider__item--{landscape|portrait|square|wide}`.
    - Arrows: `cu-slider--arrow cu-slider--arrow-prev/-next` + Tailwind button utilities →
      `cu-slider__arrow cu-slider__arrow--prev/--next`.
    - Overlay: `ImageCaptionOverlay`'s Tailwind classes → `cu-slider__overlay`,
      `cu-slider__overlay--linked`, `cu-slider__overlay-link`, `cu-slider__overlay-title`,
      `cu-slider__overlay-content`.
- **Slider engine:** the legacy `useEffect(() => SliderScript())` ran on every render, queried
  `document` globally (`document.querySelector('.cu-slider')`, so only the first slider on a page
  worked), mutated the DOM directly, appended/prepended slides for infinite looping, and re-added click
  listeners on every resize. RDS2 uses component-scoped refs, React state for the current index, a
  `ResizeObserver` on the container, and applies a single `translateX` transform — multiple sliders per
  page now work independently and no listeners leak.
- **Looping vs. clamping:** legacy navigation wrapped around infinitely by reordering slide DOM nodes.
  RDS2 clamps at both ends (`currentIndex` between `0` and `totalSlides - slidesPerView`) and does not
  loop; slide order in the DOM is never mutated.
- **Arrow disabled state:** legacy disabled both arrows only when the total slide count was ≤
  `slidesPerView` (and logged `console.warn`s). RDS2 disables `prev` at the first slide and `next` at the
  last reachable index via the `disabled` attribute; the console warnings are gone.
- **Slide width math:** legacy divided container width evenly, ignoring gutters. RDS2 subtracts the
  computed `column-gap` before dividing, so slides align with the track gap.
- **Breakpoint source:** legacy switched on `window.innerWidth`; RDS2 measures the slider container's own
  `offsetWidth` (falling back to `window.innerWidth`), so nested/constrained layouts resolve correctly.
- **Buttons:** arrows now render with an explicit `type="button"` so they no longer submit an enclosing form.
- **Overlay content:** legacy `ImageCaptionOverlay` rendered a placeholder `"Please add a title"` when
  `title` was empty. RDS2 renders no overlay at all unless `title` or `content` is provided.
- **Accessibility:** slide images with no overlay content now render `aria-hidden="true"`; arrow icons
  are explicitly `aria-hidden="true"`. Screen-reader `sr-only` arrow labels are unchanged.
- **Styles import:** styles are imported by the component (`import './styles.scss'`) rather than relying
  on a global Tailwind build.
