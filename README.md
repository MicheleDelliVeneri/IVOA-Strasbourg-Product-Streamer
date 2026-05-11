# IVOA Strasbourg 2026 — Product Streamer

Slides for the IVOA Interoperability Meeting in Strasbourg, May 2026.

Talk: **SKA Regional Centre DataLink & Product Streamer — A pragmatic extension of IVOA DataLink for dataset-level access.**

Built with [Slidev](https://sli.dev).

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3030>.

## Build a static site

```bash
npm run build
```

Output lands in `dist/`.

## Deploy

`.github/workflows/deploy.yml` builds the deck on every push to `main` and publishes it to GitHub Pages. Enable Pages with **Source: GitHub Actions** in repo settings; the deck will be served from:

<https://micheledelliveneri.github.io/IVOA-Strasbourg-Product-Streamer/>

## Export to PDF

```bash
npm run export
```

Produces `slides-export.pdf`.

## Contents

- `slides.md` — the deck (Markdown + Slidev directives)
- `package.json` — Slidev dependencies and scripts
- `.github/workflows/deploy.yml` — CI for GitHub Pages

## References

- Source code on GitLab — `gitlab.com/ska-telescope/src/src-dm/ska-src-dm-datalink`
- Source code on GitLab — `gitlab.com/ska-telescope/src/src-dm/ska-src-dm-product-service`
- IVOA DataLink 1.1 Recommendation — <https://www.ivoa.net/documents/DataLink/>
