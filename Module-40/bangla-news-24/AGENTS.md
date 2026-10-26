<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project shape

- Single Next.js 16 app (App Router, Turbopack), no workspaces/packages. Entry: `src/app/` (`layout.tsx`, `page.tsx`); components in `src/components/`. Path alias `@/*` → `src/*`.
- Only route `/` exists. `NavLinks` and `Marquee` already link to `/category/[slug]` and `/news/[id]`, but those route files are not created yet.
- The git repo root is the workspace (`N:\Full Stack Web Engineering`), not this folder — `git status` shows sibling `Module-*` dirs. Commit only this project's paths.
- `npm` is the package manager (`package-lock.json`); no test runner, no CI, no formatter beyond ESLint.

## Commands

- Dev server: `npm run dev`
- Verify order: `npm run lint` → `npx tsc --noEmit` → `npm run build` (each passes as of this writing; there is no typecheck script, `tsc` is invoked directly).
- PowerShell blocks the `npm.ps1`/`npx.ps1` shims (execution policy) — use `npm.cmd` / `npx.cmd`, or you'll get `UnauthorizedAccess` errors.
- `tsc --noEmit` depends on generated `.next/types` because `layout.tsx` uses the global `LayoutProps<"/">` type. On a clean checkout, run `npm run dev` or `npm run build` once first, or typecheck will fail with "Cannot find name 'LayoutProps'".
- `npm run build` may stop on the first run with Next.js's "known security vulnerability" upgrade nudge; re-running the same command completes the build. It prerenders `/`, which fetches `https://news-api-v2.vercel.app` during the build — network access to that host is required.

## Config quirks

- Tailwind CSS v4 is CSS-first: `@import "tailwindcss"` + daisyUI via `@plugin "daisyui"` in `src/app/globals.css`. There is **no** `tailwind.config`/`postcss.config` — the CSS pipeline is wired in `next.config.ts` under `turbopack.rules` (`@tailwindcss/turbopack` loader). Don't add a config file; change `next.config.ts` instead.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`, `babel-plugin-react-compiler` in devDependencies).
- `Marquee` and `NavLinks` are async server components that `fetch()` the external news API on render; no env vars, database, or API routes exist.
- The auto-generated block at the top of this file is rewritten by `next dev` — keep it in diffs and commit it.
