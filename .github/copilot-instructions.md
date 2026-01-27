# AI Coding Agent Instructions for shadcd-registry

## Project Overview

A Next.js 16 component registry website for browsing, previewing, and installing shadcn/ui-compatible components. Built with React 19, Tailwind CSS v4, and @base-ui/react primitives.

## Architecture & Data Flow

### Central Registry System (`lib/registry.ts`)

- Single source of truth: `registryItems[]` array containing all `RegistryItem` objects
- Each item maps to a component file in `components/ui/` and generates routes at `/components/[name]`
- Key item properties:
  - `files`: Array of `{path, target, type}` - source files bundled in the component package
  - `registryDependencies`: Components this component depends on (e.g., tag-input depends on badge)
  - `categories`: Tags for filtering/organizing (`overlay`, `forms`, `layout`, etc.)
  - `docs`: Link to documentation page (defaults to `/components/[name]`)

### URL Patterns

- **Browse**: `/components` - lists all registry items
- **Detail Page**: `/components/[name]` - component preview + installation command + examples
- **Registry APIs**:
  - `/registry.json` - full registry with component sources
  - `/registry/[name]` - individual component data (used by `install-command`)

### Component Examples (`lib/examples.tsx`)

- Keyed by component name: `examples['component-name'] = Example[]`
- Each example has: `{name, title, component: JSX, code: string}`
- Define examples in one place even if previewed elsewhere

## Key Development Patterns

### Adding a Component

1. Create TSX file in `components/ui/[name].tsx` using @base-ui/react + CVA + Tailwind
2. Add `RegistryItem` to `registryItems[]` in `lib/registry.ts`:
   ```typescript
   {
     name: "component-slug",
     title: "Display Title",
     type: "registry:ui",
     files: [{ path: "components/ui/component-slug.tsx", target: "components/ui/component-slug.tsx", type: "registry:ui" }],
     registryDependencies: ["badge", "button"], // if it uses other components
     categories: ["forms", "data-entry"],
   }
   ```
3. (Optional) Add examples to `lib/examples.tsx` keyed by component name
4. Static pages auto-generate via `generateStaticParams()` in `app/components/[name]/page.tsx`

### UI Component Styling

- Always use `"use client"` directive
- Import primitives from `@base-ui/react/[component]`
- Use CVA for variant management: `cva(baseClasses, { variants: {...} })`
- Merge classes with `cn()` utility from `lib/utils.ts`
- Use Tailwind utilities, semantic color tokens from design system (`bg-primary`, `text-muted-foreground`)
- Icon handling: Default to `size-4` unless specified via class

### Server Pages & Static Generation

- Mark pages with `export const dynamic = "force-static"` for build-time generation
- Server components (`app/` folder pages) fetch registry data
- Detail pages use `generateStaticParams()` for static file generation at build time
- Don't add dynamic content without updating cache strategy

### Component Previews

- `ComponentPreview` (client component) renders live component from registry
- `ComponentPreviewTabs` wraps previews with code toggle
- Examples use `ComponentPreviewTabs` for each variant

## Build & Deployment

### Commands

- `pnpm dev` - dev server with hot reload
- `pnpm build` - production build (generates static pages for all components)
- `pnpm registry:build` - builds registry package using `shadcn@latest` CLI
- `pnpm lint` - ESLint check

### Environment

- `NEXT_PUBLIC_SITE_URL` - controls registry base URL (used in install commands)
- Default: `http://localhost:3000` in dev

## Important Implementation Details

### File Content Loading (`getRegistryItem`)

- Files in `RegistryItem.files` are lazy-loaded only when `withContent = true`
- Used by `/registry/[name]` route to send full component code to CLI
- Component detail pages read file content at build time

### Component Dependencies

- `registryDependencies` array lists required component names
- Used by shadcn CLI to auto-install dependencies when adding a component
- Example: `tag-input` depends on `["badge", "button", "input"]`

### Static Generation

- All component pages pre-rendered at build time (no getServerSideProps)
- Registry data is static per build (redeploy to update components)
- Perfect for static hosting (Vercel, Netlify)

## Common Tasks

**Add new component variant**: Edit component file in `components/ui/`, add example to `lib/examples.tsx`

**Update component metadata**: Edit corresponding `RegistryItem` in `lib/registry.ts`

**Preview component locally**: Run `pnpm dev`, visit `/components/[name]`

**Test registry API**: Request `/registry/[name]` or `/registry.json`

**Fix build issues**: Check that all `files[].path` exist and `registryDependencies` are valid component names

## Design System & Colors

Tailwind CSS v4 with semantic token system:

- Foreground colors: `foreground`, `muted-foreground`, `primary`, `destructive`
- Background colors: `background`, `card`, `muted`
- Border/ring colors: `border`, `input`, `ring`
- Use `dark:` prefix for dark mode overrides (ThemeProvider via next-themes)
