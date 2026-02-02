**Repository Overview**

- This is a Next.js 14 app using the App Router (files under [src/app](src/app)).
- TailwindCSS is the styling system; global styles live in [src/app/globals.css](src/app/globals.css).

**How to run**

- **Dev:** `npm run dev` (starts `next dev`). See `scripts` in [package.json](package.json).
- **Build:** `npm run build` then `npm run start` for production preview.
- **Lint:** `npm run lint` (uses `next lint`).

**Architecture & Patterns**

- App Router: top-level layout in [src/app/layout.js](src/app/layout.js) exports `metadata` and a default `RootLayout` that wraps pages.
- Pages live in [src/app/page.js](src/app/page.js) — modify these for route content.
- Server components by default: prefer exporting plain React components from `app` files; mark client components explicitly if needed.
- Fonts: `next/font/google` is used in `layout.js` (Inter). Keep font setup in `layout.js` when changing global typography.

**Styling conventions**

- Tailwind is configured in [tailwind.config.js](tailwind.config.js) and compiled via `postcss.config.js`.
- Global CSS variables and color-mode logic live in [src/app/globals.css](src/app/globals.css) — prefer adjusting design tokens here.

**Project-specific config & aliases**

- Path alias: `@/*` -> `./src/*` (see [jsconfig.json](jsconfig.json)). Use `@/` imports for files under `src/`.
- Next config is minimal: [next.config.js](next.config.js) (no special build hooks configured).

**What to edit for common tasks**

- Change layout/meta: edit [src/app/layout.js](src/app/layout.js).
- Add new routes/pages: create new folder under [src/app](src/app) with `page.js`.
- Add components: create under `src/components` and add to `tailwind.config.js` content paths if needed.

**Integration points & dependencies**

- Core deps: `next@14`, `react@18`, `tailwindcss`, `postcss`, `autoprefixer` (see [package.json](package.json)).
- Deploy: standard Vercel/Next.js flow is expected (no custom adapters present).

**Examples**

- Running locally: `npm run dev` → open http://localhost:3000.
- Add route: create `src/app/about/page.js` exporting a React component.
- Use alias: `import Button from '@/components/Button'` (resolves to `src/components/Button`).

**Agent Guidance / Priorities**

- Preserve the App Router server-first approach — avoid converting components to client unless interacting with browser-only APIs.
- Prefer small, focused changes: update `layout.js` for global layout, `globals.css` for theme tokens, `page.js` for page content.
- When suggesting new packages, check `package.json` and prefer lightweight additions; document why and update `devDependencies` if needed.

**Where to look next**

- Start at [src/app/layout.js](src/app/layout.js) and [src/app/page.js](src/app/page.js) for app structure.
- Check [tailwind.config.js](tailwind.config.js) for styling rules and content scan paths.

If any section is unclear or you'd like more examples (component conventions, testing, or CI), tell me which area to expand.
