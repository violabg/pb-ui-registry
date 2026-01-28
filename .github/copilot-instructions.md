# AI Coding Agent Instructions for shadcd-registry

## Big picture

- Next.js 16 App Router registry site: server pages in `app/`, reusable UI in `components/`, shared data in `lib/`.
- Registry data is the source of truth in `lib/registry.ts` (`registryItems[]`), which drives routes, install commands, and API output.
- Example data lives in `lib/examples.tsx` (`examples[componentName] = Example[]`) and is rendered by preview UI in `components/`.

## Key routes & data flow

- Browse: `/components` in [app/components/page.tsx](app/components/page.tsx) lists registry items.
- Detail: `/components/[name]` in [app/components/[name]/page.tsx](app/components/[name]/page.tsx) uses `generateStaticParams()` for static output.
- Registry APIs: [app/registry.json/route.ts](app/registry.json/route.ts) and [app/registry/[name]/route.ts](app/registry/[name]/route.ts) serve full component sources for the CLI.
- Install command UI pulls from registry endpoints (see [components/install-command.tsx](components/install-command.tsx)).

## UI component conventions

- `components/ui/*.tsx` are client components using `@base-ui/react`, `cva`, Tailwind v4 tokens, and `cn()` from `lib/utils.ts` (e.g., [components/ui/button.tsx](components/ui/button.tsx)).
- Keep icons at `size-4` unless a variant says otherwise.
- Use semantic tokens (`bg-primary`, `text-muted-foreground`, `border`) and `dark:` overrides.

## Examples & previews

- Examples are defined once in `lib/examples.tsx` and surfaced via preview tabs in [components/component-preview-tabs.tsx](components/component-preview-tabs.tsx).
- Component pages must show live previews + example `code` only; do not render raw component source (that is reserved for `/registry/*`).
- When editing or adding an example for `/components/[name]`, always update the example’s `code` snippet in `lib/examples.tsx` to match the rendered JSX.

## Critical workflows

- Dev server: `pnpm dev`.
- Build: `pnpm build` (static pages for all components).
- Registry package build: `pnpm registry:build` (uses `shadcn@latest`).
- Lint: `pnpm lint`.

## Configuration & dependencies

- `NEXT_PUBLIC_SITE_URL` controls the base URL used in install commands (defaults to http://localhost:3000).
- Registry item `registryDependencies` must match component names in `components/ui/` (e.g., `tag-input` depends on `badge`, `button`, `input`).
