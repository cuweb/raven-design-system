# Component Structure

This is the canonical taxonomy for rds2 components — what category each component belongs to, its porting status, and the Storybook title it should use.

> When `conventions.md` describes the story title taxonomy and this file disagrees, **this file wins**.

## Category Overview

| Category        | Storybook prefix             | Components  |
| --------------- | ---------------------------- | ----------- |
| Elements        | `Components/Elements/`       | 9           |
| Content         | `Components/Content/`        | 17          |
| Media & Banners | `Components/Media/`          | 8           |
| Navigation      | `Components/Navigation/`     | 7           |
| Forms           | `Components/Forms/`          | 21          |
| Feedback        | `Components/Feedback/`       | 6 + Loaders |
| Layout          | `Components/Layout/`         | 6           |
| Template Parts  | `Components/Template Parts/` | 4           |
| Utilities       | `Components/Utilities/`      | 4           |

Status legend: **done** = implemented in rds2 · **port** = exists in rds, needs porting · **new** = net-new in rds2

---

## DONE: Elements

Atomic, composable primitives. Used as building blocks inside larger components.

| Component    | Refactor Status | Diff Created | Primary Review | Secondary Review |
| ------------ | --------------- | ------------ | -------------- | ---------------- |
| Avatar       | done            | Yes          | Yes            | No               |
| Badge        | done            | Yes          | Yes            | No               |
| Badge Group  | done            | Yes          | Yes            | No               |
| Button       | done            | Yes          | Yes            | No               |
| Button Group | done            | Yes          | Yes            | No               |
| Icon         | done            | Yes          | Yes            | No               |
| Progress Bar | done            | Yes          | Yes            | No               |
| Social Icons | done            | Yes          | Yes            | No               |
| Status       | done            | N/A          | Yes            | No               |

---

## DONE: Content

Mid-level content display patterns. Typically consume Elements and are consumed by Layout.

| Component          | Refactor Status | Diff Created | Primary Review | Secondary Review |
| ------------------ | --------------- | ------------ | -------------- | ---------------- |
| Calendar           | done            | No           | Yes            | No               |
| Call Out           | done            | No           | Yes            | No               |
| Card               | done            | No           | No             | No               |
| Carleton360        | done            | No           | Yes            | No               |
| Details            | done            | No           | Yes            | No               |
| Description        | done            | No           | Yes            | No               |
| Figure             | done            | No           | Yes            | No               |
| Listing            | done            | No           | No             | No               |
| Location           | done            | No           | No             | No               |
| Multi-day Calendar | done            | No           | No             | No               |
| Quote              | done            | No           | No             | No               |
| Table              | done            | No           | No             | No               |
| Testimonial        | done            | No           | No             | No               |
| Text & Image       | done            | No           | No             | No               |
| Text & Media       | done            | No           | No             | No               |
| Timeline           | done            | No           | No             | No               |

### Deprecated

| Component       | Refactor Status | Reasoning                           |
| --------------- | --------------- | ----------------------------------- |
| Funding Details | deprecated      | can be replicated with text & image |

---

## DONE: Media & Banners

Full-width or image/video-heavy promotional components.

| Component    | Refactor Status | Diff Created | Primary Review | Secondary Review |
| ------------ | --------------- | ------------ | -------------- | ---------------- |
| Embed        | done            | No           | No             | No               |
| Full Banner  | done            | No           | No             | No               |
| Image Grid   | done            | No           | No             | No               |
| Image Slider | done            | No           | No             | No               |
| Page Header  | done            | No           | No             | No               |
| Wide Banner  | done            | No           | No             | No               |
| Wide Image   | done            | No           | No             | No               |

### Deprecated

| Component             | Refactor Status | Reasoning                                           |
| --------------------- | --------------- | --------------------------------------------------- |
| Image Caption Overlay | deprecated      | best to have individual control for various reasons |
| Splash                | deprecated      | only used in WordPress, no component required       |

---

## DONE: Navigation

Wayfinding components — site chrome, page-level navigation, search, and pagination.

| Component       | Refactor Status | Diff Created | Primary Review | Secondary Review |
| --------------- | --------------- | ------------ | -------------- | ---------------- |
| Department Bar  | done            | No           | No             | No               |
| Footer          | done            | No           | No             | No               |
| Footer Standard | done            | No           | No             | No               |
| Nav             | done            | No           | No             | No               |
| Pagination      | done            | No           | No             | No               |

---

## DONE: Layout

Structural wrappers and grid composition. These define the skeleton of a page region — they contain other components but carry little visual weight of their own.

| Component    | Refactor Status | Diff Created | Primary Review | Secondary Review |
| ------------ | --------------- | ------------ | -------------- | ---------------- |
| Column       | done            | No           | No             | No               |
| Image Cover  | done            | Yes          | No             | No               |
| Section      | done            | No           | No             | No               |
| Stacked List | done            | No           | No             | No               |
| Wide Wave    | done            | No           | No             | No               |

### Deprecated

| Component | Refactor Status | Reasoning                                             |
| --------- | --------------- | ----------------------------------------------------- |
| Float Box | deprecated      | not very useful, we can do better for presenting data |

---

## DONE: Template Parts

WordPress block editor template part wrappers. These map directly to the template parts concept in the WordPress Site Editor.

| Component | Refactor Status | Diff Created | Primary Review | Secondary Review |
| --------- | --------------- | ------------ | -------------- | ---------------- |
| Article   | done            | No           | No             | No               |
| Aside     | done            | No           | No             | No               |
| Body      | done            | No           | No             | No               |
| Main      | done            | No           | No             | No               |

---

## DONE: Utilities

Behavioral or non-visual components. These don't render meaningful UI on their own.

| Component     | Refactor Status | Diff Created | Primary Review | Secondary Review |
| ------------- | --------------- | ------------ | -------------- | ---------------- |
| Cookie Banner | done            | No           | No             | No               |
| Link Provider | done            | No           | No             | No               |
| Login         | done            | No           | No             | No               |

### Deprecated

| Component | Refactor Status | Reasoning                                                                   |
| --------- | --------------- | --------------------------------------------------------------------------- |
| Meta      | deprecated      | nextJS handles this and is known to have conflicts when used as a component |

---

## Feedback: Part One

Transient overlays, loading skeletons, error states, and empty states.

Loaders mirror their parent components (e.g. `CardLoader` pairs with `Card`) but are grouped here rather than alongside each component — they share a common skeleton pattern and are typically used together.

| Component | Refactor Status | Diff Created | Primary Review | Secondary Review |
| --------- | --------------- | ------------ | -------------- | ---------------- |
| Alert     | done            | No           | Yes            | No               |
| Dialog    | done            | No           | Yes            | No               |
| Modal     | done            | No           | Yes            | No               |
| Toast     | done            | No           | Yes            | No               |

### Deprecated

| Component      | Refactor Status | Reasoning                                   |
| -------------- | --------------- | ------------------------------------------- |
| Error Messages | deprecated      | can be replicated with text & image         |
| Placeholder    | deprecated      | this is for lazy people, dump a div already |

---

## Feedback: Part Two

Transient overlays, loading skeletons, error states, and empty states.

Loaders mirror their parent components (e.g. `CardLoader` pairs with `Card`) but are grouped here rather than alongside each component — they share a common skeleton pattern and are typically used together.

| Component            | Refactor Status | Diff Created | Primary Review | Secondary Review |
| -------------------- | --------------- | ------------ | -------------- | ---------------- |
| **Loaders**          | port            | No           | No             | No               |
| → Block Loader       | port            | No           | No             | No               |
| → Button Loader      | port            | No           | No             | No               |
| → Calendar Loader    | port            | No           | No             | No               |
| → Card Loader        | port            | No           | No             | No               |
| → Description Loader | port            | No           | No             | No               |
| → Event Loader       | port            | No           | No             | No               |
| → Form Loader        | port            | No           | No             | No               |
| → Listing Loader     | port            | No           | No             | No               |
| → Page Header Loader | port            | No           | No             | No               |
| → Page Loader        | port            | No           | No             | No               |
| → Pagination Loader  | port            | No           | No             | No               |
| → Table Loader       | port            | No           | No             | No               |
| → Top Nav Loader     | port            | No           | No             | No               |

---

## DONE: Forms: Part One

Data entry and filtering. Form is a sub-system with its own set of primitive inputs — each sub-component lives under `Components/Forms/` and is built independently.

### Completed

| Component       | Refactor Status | Diff Created | Primary Review | Secondary Review |
| --------------- | --------------- | ------------ | -------------- | ---------------- |
| Filter Panel    | done            | No           | No             | No               |
| Location Picker | done            | No           | No             | No               |
| Search Input    | done            | No           | No             | No               |

## Forms: Part Two

### Form Fields

| Component               | Refactor Status | Diff Created | Primary Review | Secondary Review |
| ----------------------- | --------------- | ------------ | -------------- | ---------------- |
| Form                    | port            | No           | No             | No               |
| → Auto Suggest          | port            | No           | No             | No               |
| → Checkbox              | port            | No           | No             | No               |
| → Date Time             | port            | No           | No             | No               |
| → Error                 | port            | No           | No             | No               |
| → Field Array Container | port            | No           | No             | No               |
| → Field Control         | port            | No           | No             | No               |
| → Field Group           | port            | No           | No             | No               |
| → Field Wrapper         | port            | No           | No             | No               |
| → File Upload           | port            | No           | No             | No               |
| → Form Button           | port            | No           | No             | No               |
| → Form Field            | port            | No           | No             | No               |
| → Form Field Set        | port            | No           | No             | No               |
| → Helper Text           | port            | No           | No             | No               |
| → Input                 | port            | No           | No             | No               |
| → Input Addon           | port            | No           | No             | No               |
| → Places Auto Complete  | port            | No           | No             | No               |
| → Radio                 | port            | No           | No             | No               |
| → Select                | port            | No           | No             | No               |
| → Text Area             | port            | No           | No             | No               |
