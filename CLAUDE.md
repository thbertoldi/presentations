# Presentations

Slidev-based presentations for talks and LinkedIn carousels.

## Project Structure

```
linkedin/en/<carousel>/   — LinkedIn carousels (1:1, 540px canvas)
talks/en/<talk>/           — Conference talks (16:9)
themes/                    — Shared CSS themes
```

Each LinkedIn carousel contains `slides.md`, `style.css` (imports theme), and `global-bottom.vue` (page counter).

## Design System: Harpy

Named after the Brazilian Harpy Eagle (Gavião-real). The visual identity draws from the bird's characteristics: commanding presence, sharp talons, black-white plumage with grey crest, amber eyes.

- **Theme file**: `themes/linkedin.css`
- **Heading font**: Bodoni Moda (high-contrast Didone serif — sharp, editorial, authoritative)
- **Body font**: DM Sans (warm geometric sans — readable, grounded)
- **Label font**: JetBrains Mono uppercase (tactical, mechanical precision)
- **Palette**: obsidian (#121318), cream (#F5F2EB), talon gold (#C8920F)
- **Signature elements**: gold left stripe, diamond bullets, diagonal feather-hatch texture

Do not change fonts, palette, or signature elements without explicit approval.

## LinkedIn Carousels from Academic Text

When creating LinkedIn carousel slides from an academic paper or article, follow this structured approach.

### Content Extraction

1. **Read the full source text first.** Identify the structural themes, key arguments, named concepts, direct quotes, and proposed solutions before writing any slides.
2. **Map themes to carousels.** Each major theme from the source becomes one carousel (7-8 slides including cover and CTA). Do not mix themes across carousels.
3. **Preserve the author's vocabulary.** If the source names a concept (e.g., "purpose creep", "open-washing", "regulatory arbitrage"), use that exact term on the slides. Named concepts are more memorable and shareable than paraphrases.
4. **Use the source's actual quotes.** Do not invent or heavily paraphrase quotes. The academic text contains carefully worded statements — use them verbatim and attribute them.

### Attribution

Always attribute quotes and key claims to their source authors on the slide. This is non-negotiable for thought leadership credibility.

- Introduce with the author name: "As Muehlhoff warns:" or "Liesenfeld and Dingemanse describe it precisely:"
- Keep it conversational, not academic citation format. No "(2024)" parentheticals.
- If a concept comes from a specific researcher, name them when introducing it.

### Slide Structure (7-8 slides per carousel)

```
1. Cover         — Title + subtitle hook (dark background)
2. Setup          — The assumption, context, or status quo
3. Evidence       — Key quote or data point (with attribution)
4. Tension        — The conflict, contradiction, or consequence
5. Deepening      — Second evidence layer or mechanism explanation
6. Resolution     — The proposed shift, solution, or framework
7. CTA            — Closing question (dark background, gold text)
```

Slides 3-6 can be reordered to serve the narrative, but every carousel must have: a setup that establishes stakes, at least one attributed quote, a clear tension/conflict, and a resolution or call to action.

### Writing Rules

- **One idea per slide.** If a slide has two arguments, split it.
- **Bold the key phrase** in each paragraph — the one thing a fast scroller should catch. Use bold sparingly (1-2 per slide max).
- **Highlight boxes** (`<div class="highlight-box">`) are for the single most important takeaway on a slide. Max one per carousel, or the emphasis is diluted.
- **Blockquotes** are for direct quotes from sources only. Never use blockquotes for your own paraphrased summaries.
- **Pill tags** (`<span class="pill-tag">`) label institutions or frameworks (e.g., "EU AI Act", "Meta's Narrative"). Use for proper nouns, not adjectives.
- **Keep body text short.** 2-4 short sentences per slide. If it feels dense, cut.
- **Slide titles should be punchy** — 2-5 words, active language. "The exploit" not "What actually happened with the exemption mechanism".

### What NOT to Do

- Do not invent analogies that aren't in the source text. If the article says "a technology to build products", don't rewrite it as "like electricity." The original framing is always stronger because it's citable.
- Do not use generic closing slides. "What do you think?" is weak. The CTA question should mirror the carousel's specific tension.
- Do not strip all academic nuance for simplicity. LinkedIn audiences for policy/tech content are sophisticated. Terms like "purpose creep" and "regulatory arbitrage" are assets, not jargon.
- Do not present proposed solutions without naming who proposed them. "Researchers suggest X" is weaker than "Muehlhoff and Ruschemeier argue X".

### Interconnection Between Carousels

When multiple carousels originate from the same source, understand the cascade relationships between themes. The article's synthesis section typically shows how themes feed into each other. This awareness should inform:

- The subtitle hooks (can reference tensions from other carousels)
- The CTA questions (can point toward the next carousel's theme)
- The resolution slides (can acknowledge that the problem connects to broader issues)
