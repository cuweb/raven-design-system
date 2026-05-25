# Component Structure

This is the canonical taxonomy for rds2 components — what category each component belongs to, its porting status, and the Storybook title it should use.

> When `conventions.md` describes the story title taxonomy and this file disagrees, **this file wins**.

## Category Overview

| Category | Storybook prefix | Components |
|---|---|---|
| Elements | `Components/Elements/` | 9 |
| Content | `Components/Content/` | 17 |
| Media & Banners | `Components/Media/` | 8 |
| Navigation | `Components/Navigation/` | 7 |
| Forms | `Components/Forms/` | 21 |
| Feedback | `Components/Feedback/` | 6 + Loaders |
| Layout | `Components/Layout/` | 6 |
| Template Parts | `Components/Template Parts/` | 4 |
| Utilities | `Components/Utilities/` | 4 |

Status legend: **done** = implemented in rds2 · **port** = exists in rds, needs porting · **new** = net-new in rds2

---

## Elements

Atomic, composable primitives. Used as building blocks inside larger components.

| Component | Status |
|---|---|
| Avatar | done |
| Badge | done |
| Badge Group | done |
| Button | done |
| Button Group | done |
| Icon | done |
| Progress Bar | done |
| Social Icons | done |
| Status | done |

---

## Content

Mid-level content display patterns. Typically consume Elements and are consumed by Layout.

| Component | Status |
|---|---|
| Calendar | port |
| Call Out | done |
| Card | done |
| Carleton360 | port |
| Description | port |
| Details | port |
| Figure | port |
| Funding Details | port |
| Listing | port |
| Location | port |
| Multi-day Calendar | port |
| Quote | port |
| Table | port |
| Testimonial | port |
| Text & Image | port |
| Text & Media | port |
| Timeline | port |

---

## Media & Banners

Full-width or image/video-heavy promotional components.

| Component | Status |
|---|---|
| Embed | port |
| Full Banner | port |
| Image Caption Overlay | port |
| Image Grid | port |
| Image Slider | port |
| Page Header | done |
| Splash | port |
| Wide Banner | port |
| Wide Image | port |

---

## Navigation

Wayfinding components — site chrome, page-level navigation, search, and pagination.

| Component | Status |
|---|---|
| Department Bar | done |
| Footer | done |
| Footer Standard | done |
| Nav | done |
| Pagination | port |
| Search Input | port |

---

## Forms

Data entry and filtering. Form is a sub-system with its own set of primitive inputs — each sub-component lives under `Components/Forms/` and is built independently.

| Component | Status |
|---|---|
| Filter Panel | port |
| Location Picker | port |
| **Form** | port |
| → Auto Suggest | port |
| → Checkbox | port |
| → Date Time | port |
| → Error | port |
| → Field Array Container | port |
| → Field Control | port |
| → Field Group | port |
| → Field Wrapper | port |
| → File Upload | port |
| → Form Button | port |
| → Form Field | port |
| → Form Field Set | port |
| → Helper Text | port |
| → Input | port |
| → Input Addon | port |
| → Places Auto Complete | port |
| → Radio | port |
| → Select | port |
| → Text Area | port |

---

## Feedback

Transient overlays, loading skeletons, error states, and empty states.

Loaders mirror their parent components (e.g. `CardLoader` pairs with `Card`) but are grouped here rather than alongside each component — they share a common skeleton pattern and are typically used together.

| Component | Status |
|---|---|
| Alert | port |
| Dialog | port |
| Error Messages | port |
| **Loaders** | port |
| → Block Loader | port |
| → Button Loader | port |
| → Calendar Loader | port |
| → Card Loader | port |
| → Description Loader | port |
| → Event Loader | port |
| → Form Loader | port |
| → Listing Loader | port |
| → Page Header Loader | port |
| → Page Loader | port |
| → Pagination Loader | port |
| → Table Loader | port |
| → Top Nav Loader | port |
| Modal | port |
| Placeholder | port |
| Toast | port |

---

## Layout

Structural wrappers and grid composition. These define the skeleton of a page region — they contain other components but carry little visual weight of their own.

| Component | Status |
|---|---|
| Column | done |
| Float Box | port |
| Image Cover | port |
| Section | done |
| Stacked List | port |
| Wide Wave | port |

---

## Template Parts

WordPress block editor template part wrappers. These map directly to the template parts concept in the WordPress Site Editor.

| Component | Status |
|---|---|
| Article | done |
| Aside | done |
| Body | done |
| Main | done |

---

## Utilities

Behavioral or non-visual components. These don't render meaningful UI on their own.

| Component | Status |
|---|---|
| Cookie Banner | done |
| Link Provider | done |
| Login | port |
| Meta | port |
