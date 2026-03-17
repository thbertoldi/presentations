# Presentations

Slide decks and LinkedIn carousels built with [Slidev](https://sli.dev), organized by content type and language.

## Project structure

```
themes/                          Shared CSS themes
  harpy.css                        General-purpose (Inter + JetBrains Mono)
  suse.css                         SUSE brand (SUSE font + Fira Code)
  linkedin.css                     LinkedIn carousel (1:1 square, large fonts)

talks/                           16:9 presentations for events
  en/
    2026-saac/                     SAAC talk (English)
    harpy-intro/                   Harpy theme demo
  pt/
    2026-saac/                     SAAC talk (Portuguese)

linkedin/                        1:1 carousels for LinkedIn
  en/
    _template/                     Starter template
  pt/
```

Each presentation is a self-contained Slidev project folder with:

- `slides.md` — slide content
- `style.css` — imports from `themes/`
- `global-bottom.vue` — footer (page numbers, progress bar, or carousel handle)
- `public/` — static assets (images, SVGs)

## Getting started

Install dependencies:

```bash
bun install
```

Run a presentation in dev mode:

```bash
# Talks
bunx slidev talks/en/harpy-intro/slides.md
bunx slidev talks/pt/2026-saac/slides.md

# LinkedIn carousels
bunx slidev linkedin/en/_template/slides.md
```

## Creating new content

### New talk

```bash
cp -r talks/en/harpy-intro talks/en/my-new-talk
# Edit talks/en/my-new-talk/slides.md
bunx slidev talks/en/my-new-talk/slides.md
```

### New LinkedIn carousel

```bash
cp -r linkedin/en/_template linkedin/en/my-carousel
# Edit linkedin/en/my-carousel/slides.md
bunx slidev linkedin/en/my-carousel/slides.md
```

### New language version

Copy an existing presentation into the target language folder:

```bash
cp -r talks/en/2026-saac talks/pt/2026-saac
# Translate talks/pt/2026-saac/slides.md
```

## Themes

All themes live in `themes/` and are imported via `style.css` in each presentation folder:

```css
@import '../../../themes/harpy.css';
```

| Theme | Aspect ratio | Fonts | Best for |
|---|---|---|---|
| `harpy.css` | 16:9 | Inter, JetBrains Mono | General tech talks |
| `suse.css` | 16:9 | SUSE, Fira Code | SUSE-branded events |
| `linkedin.css` | 1:1 | Inter, JetBrains Mono | LinkedIn carousels |

The LinkedIn theme includes utility classes for carousel-specific elements:

- `.carousel-page` — page counter badge (top-right)
- `.carousel-handle` — author handle footer (bottom)
- `.swipe-hint` — swipe arrow (bottom-right)
- `.accent-top` — gold top border for visual emphasis

## Exporting

### Talk to PDF

```bash
bunx slidev export talks/en/2026-saac/slides.md --per-slide
```

### Carousel to PDF (for LinkedIn upload)

```bash
bunx slidev export linkedin/en/my-carousel/slides.md --per-slide
```

### Carousel to PNG (individual images)

```bash
bunx slidev export linkedin/en/my-carousel/slides.md --format png --per-slide
```

> Export requires `playwright-chromium`. Install it with `bun add -D playwright-chromium` if export fails.

## License

### Code

All code is licensed under the **Mozilla Public License 2.0 (MPL 2.0)**. See [LICENSE-MPL-2.0.txt](LICENSE-MPL-2.0.txt).

### Non-code content

All slide decks, text, images, and other non-code creative content are licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)**. See [LICENSE-CC-BY-SA-4.0.txt](LICENSE-CC-BY-SA-4.0.txt).
