<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanserlust (Wanderlust landing page, Module-46)

Next.js 16.4 App Router + Tailwind v4 project. App code lives in `src/app` (`page.tsx` is the single landing page); everything else is scaffold.

## Commands

- `npm run dev` / `build` / `start` / `lint` (eslint flat config; pass paths to lint a subset).
- No test setup and no `typecheck` script — use `npx tsc --noEmit` for a type-only check.

## Next.js setup quirks (`next.config.ts`)

- `reactCompiler: true` + `babel-plugin-react-compiler`: do **not** add manual `memo`/`useMemo`/`useCallback` optimization — the compiler handles it.
- `cacheComponents: true`: async data fetching in components must be wrapped in `<Suspense>` or builds fail.
- Tailwind runs through Turbopack (`@tailwindcss/turbopack`); there is **no** `tailwind.config` file. Theme tokens and CSS variables are defined in `src/app/globals.css` via `@theme inline` / `@custom-variant dark (`&:is(.dark *)`)` — edit colors/fonts/dark mode there.

## UI stack

- shadcn/ui, style `base-nova` (see `components.json`): primitives are **@base-ui/react**, not Radix — don't import from `@radix-ui/*` when extending components. Nearly all prebuilt components already exist under `src/components/ui`; import via `@/` aliases (`@/components`, `@/hooks`, `@/lib`, mapped to `src/*` in `tsconfig.json`).
- Icons: `lucide-react`. Class merge helper: `cn` from `@/lib/utils`. Google font Josefin Sans is set up in `layout.tsx` as `--font-josefin`.

## Git gotcha

The git repo root is the whole workspace (`N:\Full Stack Web Engineering`), containing ~50 sibling `Module-*` course folders. Never `git add .` / `git commit -a` blindly — stage only paths under `Module-46/wanserlust` so unrelated module work isn't swept into commits.
