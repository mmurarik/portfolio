# Miranda Murarik — Portfolio

Projects in AI evaluation, automation, and data engineering.

This is a static Next.js website. GitHub Pages serves the HTML, CSS, and browser
JavaScript exported to `out/`; no application server is required.

## Development

Use Node 22.13+ and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Static preview

```sh
pnpm build
pnpm check:static
pnpm preview
```

Open http://localhost:3000. Rebuild after editing when using the static preview.

## Publishing

In repository Settings → Pages, select GitHub Actions. The included workflow
builds and checks the site, then publishes `out/` when `main` changes. It supports
both a GitHub repository address and a custom domain through the Pages base path.

Project entries are in `app/projects.ts`; page layouts and styles are in `app/`.
