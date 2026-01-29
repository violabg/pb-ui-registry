# pb-ui registry

A web-based registry for shadcn/ui components, built with Next.js 16. Browse, preview, and install shadcn-compatible components with ease.

## Features

- **Component Browser**: Explore a curated collection of shadcn/ui components with live previews
- **Installation Commands**: Copy ready-to-use `npx shadcn add` commands for each component
- **Registry API**: Access components programmatically via JSON endpoints
- **Modern Stack**: Built with Next.js 16, React 19, and Tailwind CSS v4

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/violabg/shadcd-registry.git
   cd shadcd-registry
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Browsing Components

Navigate to `/components` to browse the available components. Each component page includes:

- Live preview
- Installation command
- Usage examples
- Dependencies

### Using the Registry

To add a component to your shadcn project:

1. Find the component you want on the registry
2. Copy the installation command (e.g., `npx shadcn@latest add http://localhost:3000/registry/alert-dialog`)
3. Run the command in your project directory

### Registry API

Access the full registry data via JSON:

- `/registry.json` - Complete registry index
- `/registry/[name]` - Individual component data

## Building the Registry

To build the component registry for distribution:

```bash
pnpm registry:build
```

This generates optimized component files ready for consumption by shadcn CLI.
