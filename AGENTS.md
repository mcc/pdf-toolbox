# AGENTS.md

## Project type
- Static website deployed to **Cloudflare Pages**.
- No package manager, bundler, build step, tests, or linting.

## Directory layout
- `public/` — entire site source and build output (`wrangler.toml` sets `pages_build_output_dir = "public"`).
- `public/index.html` — landing page with tool categories.
- `public/tools/` — individual tool pages.
- `public/tools/js/` and `public/tools/css/` — shared vendored libraries (pdf-lib.js, tailwind.min.css, jszip.js, etc.).
- Some standalone pages live directly under `public/` (e.g., `norn-word-game.html`, `three-elements-sentence.html`).

## Adding a new tool
1. Create the HTML file in `public/tools/` (or `public/` for game pages).
2. Add a bilingual card link in `public/index.html` using `data-en` and `data-zh` attributes (see existing `<a class="tool-card">` elements).

## Deployment
- Uses `wrangler.toml` only for Pages output directory config.
- Deploy via Cloudflare Pages connected to this repo.

## Automated workflow
- `.github/workflows/main.yml` runs daily (and on manual dispatch) to fetch JSON from `https://www.1823.gov.hk/common/ical/en.json` and auto-commit `data.json` at repo root via `.github/scripts/update_json.py`.
- `data.json` may not exist locally; it is created/updated by the Action.

## Tech notes
- Most tools are vanilla HTML/CSS/JS.
- Some load libraries from CDNs; others use vendored copies in `public/tools/js/`.
- No test or verification commands exist — validate by opening the HTML in a browser or via a local static server (e.g., `python -m http.server` in `public/`).
