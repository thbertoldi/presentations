# Presentations Repository

This repository contains presentations, slide decks, and related materials.

## Overview

This repository is a collection of presentation materials, including slide decks, notes, and any accompanying code samples. The content is organized by topic or event.

## License

### Code
All code in this repository is licensed under the **Mozilla Public License 2.0 (MPL 2.0)**. See the [LICENSE-MPL-2.0.txt](LICENSE-MPL-2.0.txt) file for the full license text.

### Non‑Code Content
All slide decks, text, images, and other non‑code creative content are licensed under the **Creative Commons Attribution‑ShareAlike 4.0 International License (CC BY‑SA 4.0)**. See the [LICENSE-CC-BY-SA-4.0.txt](LICENSE-CC-BY-SA-4.0.txt) file for the full license text.

## Usage

You are free to:
- Use, modify, and distribute the code under the terms of the MPL 2.0.
- Share and adapt the non‑code content under the terms of the CC BY‑SA 4.0, provided you give appropriate credit, indicate if changes were made, and distribute your contributions under the same license.

Please refer to the individual license files for complete details and conditions.

## Contributing

Contributions are welcome! If you would like to contribute, please ensure that any new code adheres to the MPL 2.0 and any new non‑code content adheres to the CC BY‑SA 4.0.

## Slidev Presentations

This repository uses [Slidev](https://sli.dev) for creating presentations. The setup follows a hybrid approach: a single Slidev installation with multiple presentation folders.

### Structure

```
en/               # English presentations
  intro/          # Example presentation
    slides.md     # Slidev markdown file
pt/               # Portuguese presentations
  intro/          # Example presentation
    slides.md     # Slidev markdown file
templates/        # Shared components and layouts
  components/     # Reusable Vue components
  layouts/        # Custom layouts
vite.config.ts    # Vite configuration (shared)
package.json      # Dependencies and scripts
```

### Getting Started

1. Install dependencies (using bun):
   ```bash
   bun install
   ```

2. Run a presentation:
   ```bash
   bun run slidev:en:intro    # English intro
   bun run slidev:pt:intro    # Portuguese intro
   ```

3. Create a new presentation:
   - Create a new folder under `en/` or `pt/`
   - Add a `slides.md` file with frontmatter
   - Add a new script in `package.json` if needed

### Customization

- Shared components are in `templates/components/` and are auto-imported.
- Edit `vite.config.ts` for global Vite configuration.
- Each presentation can have its own `setup/` folder for custom components.