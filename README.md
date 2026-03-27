# Presentations

Slide decks, LinkedIn carousels, and visual assets built with [Slidev](https://sli.dev), unified under the **Harpy Design System**.

## Design System: Harpy

Named after the Brazilian Harpy Eagle (Gaviao-real) — the largest, most powerful raptor in the Americas. The visual identity draws from the bird's characteristics: commanding presence, sharp talons, black-white plumage with grey crest, amber eyes.

- **Heading font**: Bodoni Moda (high-contrast Didone serif — sharp, editorial, authoritative)
- **Body font**: DM Sans (warm geometric sans — readable, grounded)
- **Label font**: JetBrains Mono uppercase (tactical, mechanical precision)
- **Palette**: obsidian `#121318`, cream `#F5F2EB`, talon gold `#C8920F`
- **Signature elements**: gold left stripe, diamond bullets, diagonal feather-hatch texture, atmospheric gold glows, Bodoni quotation marks on blockquotes

## Project structure

```
themes/                          Shared CSS themes
  harpy.css                        Harpy for 16:9 talks (Bodoni Moda + DM Sans)
  linkedin.css                     Harpy for 1:1 LinkedIn carousels
  suse.css                         SUSE brand (SUSE font + Fira Code)

talks/                           16:9 presentations for events
  en/
    2026-saac/                     SAAC talk (English, SUSE theme)
    harpy-intro/                   Harpy theme demo
  pt/
    2026-saac/                     SAAC talk (Portuguese, SUSE theme)

linkedin/                        1:1 carousels for LinkedIn
  en/
    _template/                     Starter template
    ai-is-infrastructure/          AI as infrastructure (from academic source)
    frontier-dilemma/              Frontier model dilemma
    open-washing/                  Open-washing in AI
    regulation-paradox/            EU AI Act regulation paradox

linkedin-cover/                  LinkedIn banner (1584x396px static HTML)
  banner.html                      Source file
  banner.png                       Exported image
```

Each presentation is a self-contained Slidev project folder with:

- `slides.md` — slide content
- `style.css` — imports from `themes/`
- `global-bottom.vue` — footer (page numbers, progress bar, or carousel counter)
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
| `harpy.css` | 16:9 | Bodoni Moda, DM Sans, JetBrains Mono | Talks and conference presentations |
| `linkedin.css` | 1:1 | Bodoni Moda, DM Sans, JetBrains Mono | LinkedIn carousels (540px canvas) |
| `suse.css` | 16:9 | SUSE, Poppins, Fira Code | SUSE-branded events |

Both Harpy themes share the same design system (palette, signature elements, utility classes). The LinkedIn variant is tuned for smaller canvas sizes and mobile readability.

### Utility classes (Harpy themes)

- `.pill-tag` — mono uppercase label for institutions/frameworks
- `.highlight-box` — gold-edged callout box (use sparingly)
- `.big-stat` — large Bodoni numeral for statistics
- `.gold-rule` — talon scratch divider
- `.vs-block` — comparison layout with gold "vs" label
- `.accent-top` — gold top border for visual emphasis
- `.slide-subtitle` — cover slide subtitle text

### LinkedIn-only classes

- `.carousel-page` — page counter badge (top-right)
- `.swipe-hint` — animated swipe arrow (bottom-right)

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

### LinkedIn banner

The banner is a static HTML file exported with Playwright:

```bash
cd linkedin-cover
npx playwright screenshot --viewport-size="1584,396" --wait-for-timeout=3000 --full-page banner.html banner.png
```

> Export requires `playwright-chromium`. Install it with `bun add -D playwright-chromium` if export fails.

## License

### Code

All code is licensed under the **Mozilla Public License 2.0 (MPL 2.0)**. See [LICENSE-MPL-2.0.txt](LICENSE-MPL-2.0.txt).

### Non-code content

All slide decks, text, images, and other non-code creative content are licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)**. See [LICENSE-CC-BY-SA-4.0.txt](LICENSE-CC-BY-SA-4.0.txt).
