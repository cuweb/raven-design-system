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

## DONE: Elements

Atomic, composable primitives. Used as building blocks inside larger components.

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Avatar | done | No | No
| Badge | done | No | No
| Badge Group | done | No | No
| Button | done | No | No
| Button Group | done | No | No
| Icon | done | No | No
| Progress Bar | done | No | No
| Social Icons | done | No | No
| Refactor Status | done | No | No

---

## Content

Mid-level content display patterns. Typically consume Elements and are consumed by Layout.

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Description | port | No | No
| Details | port | No | No
| Funding Details | port | No | No

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Calendar | done | No | No
| Call Out | done | No | No
| Card | done | No | No
| Carleton360 | done | No | No
| Figure | done | No | No
| Listing | done | No | No
| Location | done | No | No
| Multi-day Calendar | done | No | No
| Quote | done | No | No
| Table | done | No | No
| Testimonial | done | No | No
| Text & Image | done | No | No
| Text & Media | done | No | No
| Timeline | done | No | No

---

## Media & Banners

Full-width or image/video-heavy promotional components.

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Splash | port | No | No

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Embed | done | No | No
| Full Banner | done | No | No
| Image Grid | done | No | No
| Image Slider | done | No | No
| Page Header | done | No | No
| Wide Banner | done | No | No
| Wide Image | done | No | No

### Deprecated

| Component | Refactor Status | Reasoning
|---|---|---|
| Image Caption Overlay | deprecated | best to have individual control for various reasons

---

## DONE: Navigation

Wayfinding components — site chrome, page-level navigation, search, and pagination.

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Department Bar | done | No | No
| Footer | done | No | No
| Footer Standard | done | No | No
| Nav | done | No | No
| Pagination | done | No | No

---

## Layout

Structural wrappers and grid composition. These define the skeleton of a page region — they contain other components but carry little visual weight of their own.

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Column | done | No | No
| Image Cover | done | No | No
| Section | done | No | No
| Stacked List | done | No | No
| Wide Wave | done | No | No

### Deprecated

| Component | Refactor Status | Reasoning
|---|---|---|
| Float Box | deprecated | not very useful, we can do better for presenting data

---

## DONE: Template Parts

WordPress block editor template part wrappers. These map directly to the template parts concept in the WordPress Site Editor.

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Article | done | No | No
| Aside | done | No | No
| Body | done | No | No
| Main | done | No | No

---

## Utilities

Behavioral or non-visual components. These don't render meaningful UI on their own.

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Login | port | No | No

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Cookie Banner | done | No | No
| Link Provider | done | No | No

### Deprecated

| Component | Refactor Status | Reasoning
|---|---|---|
| Meta | deprecated | nextJS handles this and is known to have conflicts when used as a component

---

## Feedback

Transient overlays, loading skeletons, error states, and empty states.

Loaders mirror their parent components (e.g. `CardLoader` pairs with `Card`) but are grouped here rather than alongside each component — they share a common skeleton pattern and are typically used together.

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Dialog | port | No | No
| **Loaders** | port | No | No
| → Block Loader | port | No | No
| → Button Loader | port | No | No
| → Calendar Loader | port | No | No
| → Card Loader | port | No | No
| → Description Loader | port | No | No
| → Event Loader | port | No | No
| → Form Loader | port | No | No
| → Listing Loader | port | No | No
| → Page Header Loader | port | No | No
| → Page Loader | port | No | No
| → Pagination Loader | port | No | No
| → Table Loader | port | No | No
| → Top Nav Loader | port | No | No
| Modal | port | No | No

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Alert | done | No | No
| Toast | done | No | No

### Deprecated

| Component | Refactor Status | Reasoning
|---|---|---|
| Error Messages | deprecated | can be replicated with text & image
| Placeholder | deprecated | this is for lazy people, dump a div already

---

## DONE: Forms: Part One

Data entry and filtering. Form is a sub-system with its own set of primitive inputs — each sub-component lives under `Components/Forms/` and is built independently.

### Completed

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Filter Panel | done | No | No
| Location Picker | done | No | No
| Search Input | done | No | No

## Forms: Part Two

### Form Fields

| Component | Refactor Status | Primary Review | Secondary Review
|---|---|---|---|
| Form | port | No | No
| → Auto Suggest | port | No | No
| → Checkbox | port | No | No
| → Date Time | port | No | No
| → Error | port | No | No
| → Field Array Container | port | No | No
| → Field Control | port | No | No
| → Field Group | port | No | No
| → Field Wrapper | port | No | No
| → File Upload | port | No | No
| → Form Button | port | No | No
| → Form Field | port | No | No
| → Form Field Set | port | No | No
| → Helper Text | port | No | No
| → Input | port | No | No
| → Input Addon | port | No | No
| → Places Auto Complete | port | No | No
| → Radio | port | No | No
| → Select | port | No | No
| → Text Area | port | No | No
