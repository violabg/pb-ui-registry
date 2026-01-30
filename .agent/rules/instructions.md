---
trigger: always_on
---

# AI Coding Agent Instructions for pb-ui-registry

## Big Picture

- **Architecture**: A Next.js 16 App Router registry site that serves JSON component data for the `shadcn` CLI, providing React Hook Form inputs with Zod integration and interactive component previews.
- **Source of Truth**: `lib/registry.ts` contains `registryItems[]`, which defines every component, its files, dependencies, and metadata for CLI installation.
- **Component Stack**: Uses `@base-ui/react` primitives, `cva` for variant management, Tailwind v4, and Lucide icons for consistent, accessible UI components.
- **Data Flow**: `lib/registry.ts` → Registry API (`app/registry/[name]/route.ts`) → CLI Installation → UI Browser (`app/components/page.tsx`) for interactive previews.

## Critical Workflows

- **Adding a New Component**:
  1. Create the UI component in `components/ui/[name].tsx` using `@base-ui/react` primitives and `cva` variants.
  2. Register the item in `registryItems` within `lib/registry.ts`, including:
     - `registryDependencies`: all local UI components the file imports (e.g., `["button", "input"]`)
     - `dependencies`: any npm packages required (e.g., `["cmdk"]`)
  3. Create examples in `components/examples/[name]-examples.tsx` with both JSX components and corresponding code strings.
  4. Export examples in `components/examples/index.ts`.
  5. Map examples to the component in `lib/examples.tsx`.
- **Editing a Component**: If you add/remove imports from `@/components/ui/`, update `registryDependencies` in `lib/registry.ts` accordingly.
- **Building Registry**: Run `pnpm registry:build` to generate optimized JSON files in `public/r/` for CLI distribution.
- **Command**: `pnpm dev` for local development with hot reloading.

## Project Conventions

- **Dual-Update Rule**: When editing an example in `components/examples/`, you **must** update both the JSX component and its corresponding `const [Name]Code` string snippet to keep previews and code samples in sync.
- **RHF Pattern**: All form components with React Hook Form integration must use the `BaseController` from `components/ui/rhf-inputs/base-controller.tsx` to handle labels, errors, and validation state consistently.
- **CVA Variants**: Use `class-variance-authority` (cva) for component variants with semantic size names (`xs`, `sm`, `default`, `lg`) and consistent variant patterns (`default`, `secondary`, `outline`, `ghost`, `destructive`).
- **Icon Sizing**: Default all icons to `size-4` unless they are explicitly part of a specific variant (e.g., `icon-xs` uses `size-3`).
- **Tailwind v4**: Use semantic tokens from `globals.css` (e.g., `bg-primary`, `text-muted-foreground`, `border-input`). Avoid hardcoded hex/oklch values in components.
- **Registry URLs**: Relative dependency names in `registryDependencies` (e.g., `button`) are automatically resolved to this registry's full URL if they exist locally via `getRegistryDependencyUrl()`.
- **Registry Dependencies Rule**: When creating or editing a component, you **must** update `registryDependencies` in `lib/registry.ts` to include all local UI components that the file imports from `@/components/ui/`. This ensures the shadcn CLI installs all required components. Also add npm packages to the `dependencies` array (e.g., `react-hook-form`, `cmdk`).
- **Component Categories**: Use consistent category names (`forms`, `overlay`, `data-display`, `layout`, `navigation`, `data-entry`) for component organization.

## Key Files & Directories

- `lib/registry.ts`: The registry configuration (files, dependencies, categories) - single source of truth for all components.
- `lib/examples.tsx`: The mapping of components to their browse-page examples with both components and code strings.
- `components/ui/`: Atomic UI components built with `@base-ui/react` primitives and cva variants.
- `components/ui/rhf-inputs/`: Standardized React Hook Form field wrappers using `BaseController`.
- `app/registry/[name]/route.ts`: Dynamic API route serving individual component JSON for shadcn CLI.
- `app/registry.json/route.ts`: Full registry index endpoint for component discovery.
- `public/r/`: Generated JSON registry files served to the CLI after `pnpm registry:build`.
