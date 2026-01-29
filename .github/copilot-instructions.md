# AI Coding Agent Instructions for pb-ui-registry

## Big Picture

- **Architecture**: A Next.js 16 App Router registry site that serves JSON component data for the `shadcn` CLI.
- **Source of Truth**: `lib/registry.ts` contains `registryItems[]`, which defines every component, its files, and dependencies.
- **Component Stack**: Uses `@base-ui/react` primitives, `cva`, Tailwind v4, and Lucide icons.
- **Data Flow**: `lib/registry.ts` -> Registry API (`app/registry/[name]/route.ts`) -> UI Browser (`app/components/page.tsx`).

## Critical Workflows

- **Adding a New Component**:
  1. Create the UI component in `components/ui/[name].tsx`.
  2. Register the item in `registryItems` within `lib/registry.ts`.
  3. Create examples in `components/examples/[name]-examples.tsx`.
  4. Export examples in `components/examples/index.ts`.
  5. Map examples to the component in `lib/examples.tsx`.
- **Command**: `pnpm registry:build` uses `shadcn build` to generate the optimized registry files.
- **Command**: `pnpm dev` for local development.

## Project Conventions

- **Dual-Update Rule**: When editing an example in `components/examples/`, you **must** update both the JSX component and its corresponding `const [Name]Code` string snippet.
- **RHF Pattern**: All form components with React Hook Form integration must use the `BaseController` from `components/ui/rhf-inputs/base-controller.tsx` to handle labels, errors, and validation state consistently.
- **Icon Sizing**: Default all icons to `size-4` unless they are explicitly part of a specific variant (e.g., `icon-xs` uses `size-3`).
- **Tailwind v4**: Use semantic tokens from `globals.css` (e.g., `bg-primary`, `text-muted-foreground`, `border-input`). Avoid hardcoded hex/oklch values in components.
- **Registry URLs**: Relative dependency names in `registryDependencies` (e.g., `button`) are automatically resolved to this registry's full URL if they exist locally.

## Key Files & Directories

- `lib/registry.ts`: The registry configuration (files, dependencies, categories).
- `lib/examples.tsx`: The mapping of components to their browse-page examples.
- `components/ui/`: Atomic UI components.
- `components/ui/rhf-inputs/`: Standardized React Hook Form field wrappers.
- `app/registry.json/route.ts`: The full registry index endpoint.
