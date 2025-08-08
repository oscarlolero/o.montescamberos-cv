# CV Oscar – Vite + React + Tailwind

**Deploy to GitHub Pages (pnpm):**
1. `pnpm i`
2. Update `vite.config.ts` -> `base: '/<your-repo>/'` (use `'/'` if deploying to `<user>.github.io` root).
3. Create workflow `.github/workflows/deploy.yml` (see below) or enable Pages from a branch.

**GitHub Actions workflow (recommended):**
```yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - run: pnpm i --frozen-lockfile
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
