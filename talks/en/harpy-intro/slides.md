---
title: Introduction Presentation
author: Thiago Bertoldi
lang: en
theme: default
colorSchema: light
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-left
---

# Welcome to the Harpy Eagle Theme

A clean, presentation-ready theme inspired by the majestic harpy eagle.

<div class="pt-8">
  <p class="text-lg" style="color: var(--harpy-talon-gold); font-weight: 500;">Thiago Bertoldi</p>
  <p class="text-sm" style="color: var(--harpy-crown-ash);">Software Engineer</p>
</div>

<!--
Welcome slide. Introduce the theme and its design philosophy: clean, minimal, inspired by the harpy eagle's plumage.
-->

---

# Theme Color Palette

The palette is derived from the plumage of the **harpy eagle** (*Harpia harpyja*).

| Color | Hex | Usage |
|---|---|---|
| **Obsidian Plumage** | `#1A1C20` | Primary text, dark backgrounds |
| **Crown Ash** | `#B5B9BE` | Secondary text, borders, muted elements |
| **Talon Gold** | `#F2A900` | Accents, CTAs, active states |
| **Underbelly White** | `#F8F9FA` | Light backgrounds, high-contrast surfaces |

<!--
Walk through each color and its semantic role. Emphasize that all colors are available as CSS custom properties (--harpy-*).
-->

---
layout: section
---

# Section Slide

<!--
Demonstrate the section layout: dark background with gold heading. Use these as chapter dividers.
-->

---

# Typography & Lists

## Heading level 2

### Heading level 3

Unordered list:

<v-clicks>

- First item with some descriptive text
- Second item demonstrating the **bold** style
- Third item with `inline code` formatting
  - Nested item with hollow bullet

</v-clicks>

Ordered list:

1. Step one
2. Step two
3. Step three

<!--
Show progressive reveal with v-clicks on the unordered list. Note the custom bullet styling: solid gold dots for top-level, hollow for nested.
-->

---

# Code & Quotes

Code blocks use **JetBrains Mono** with the Talon Gold accent for inline snippets.

```ts
interface HarpyEagle {
  wingspan: number;
  habitat: string;
  isPredator: boolean;
}

const harpy: HarpyEagle = {
  wingspan: 2.0,
  habitat: 'Neotropical rainforest',
  isPredator: true,
};
```

> Blockquotes are highlighted with a gold left border and a subtle warm background tint.

<!--
Demonstrate code highlighting with JetBrains Mono and the blockquote styling. Note how inline code uses the talon-gold-dim background.
-->

---

# Two-Column Layout

<div class="grid grid-cols-2 gap-8">
<div>

**Left column**

<v-clicks>

- Clean separation of content
- Great for comparisons
- Works with any content type

</v-clicks>

</div>
<div>

**Right column**

<v-clicks>

- Tables, lists, or paragraphs
- Images and diagrams
- Code snippets side by side

</v-clicks>

</div>
</div>

<br>

> Two-column grids are useful for **before/after**, **pros/cons**, or **concept/example** layouts.

<!--
Show the two-column grid pattern. Each column reveals its items progressively with v-clicks. This is the most common layout for comparison slides.
-->

---
layout: center
class: text-center
---

<div>
  <h1 style="color: var(--harpy-talon-gold); border-bottom: none; font-size: 2.5rem;">Thank you</h1>
  <p class="text-lg mt-4" style="color: var(--harpy-obsidian);">Questions?</p>
  <p class="text-sm mt-2" style="color: var(--harpy-crown-ash);">github.com/thbertoldi</p>
</div>

<!--
Closing slide. Open the floor for questions.
-->
