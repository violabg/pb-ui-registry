# shadcd-registry

A modern, high-performance component registry for [shadcn/ui](https://ui.shadcn.com/) compatible components, built with Next.js 16, Tailwind CSS v4, and Base UI.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-enabled-orange?logo=pnpm)](https://pnpm.io/)

---

`shadcd-registry` provides a visual gallery and a programmatic API for distributing reusable UI components. It is designed to work seamlessly with the `shadcn` CLI, allowing for instant installation of complex components, including a full suite of React Hook Form (RHF) integrated inputs.

## ⚡ Quick Start

Install any component directly into your project using the `shadcn` CLI:

```bash
# Example: Adding the Multi-Select component
npx shadcn@latest add https://shadcd.com/registry/multi-select.json
```

> [!TIP]
> You can browse all available components and their interactive previews at [shadcd.com/components](https://shadcd.com/components).

## ✨ Key Features

- **Tailwind CSS v4**: Built from the ground up to leverage the latest CSS-only theming and performance improvements.
- **Base UI & RAC**: Uses `@base-ui/react` and `react-aria-components` for accessible, unstyled foundations.
- **RHF First-Class Support**: Includes a comprehensive set of "RHF Inputs" with pre-configured controllers for `react-hook-form` and `zod`.
- **CLI-Ready**: Fully compatible with the `shadcn` CLI for automated dependency management and installation.
- **Interactive Previews**: Every component in the registry includes multiple usage examples and live previews.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Primitives**: [@base-ui/react](https://base-ui.com/), [Radix UI](https://www.radix-ui.com/), [React Aria Components](https://react-spectrum.adobe.com/react-aria/react-aria-components.html)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 🚀 Development

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17.0 or later
- [pnpm](https://pnpm.io/) 8.x or later (recommended)

### Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/violabg/shadcd-registry.git
    cd shadcd-registry
    ```

2.  **Install dependencies**

    ```bash
    pnpm install
    ```

3.  **Start the development server**

    ```bash
    pnpm dev
    ```

4.  **Sync the registry**
    After making changes to components or the registry definitions in `lib/registry.ts`, run the build command to update the JSON files for the CLI:
    ```bash
    pnpm registry:build
    ```

## 📂 Project Structure

- `app/`: Next.js App Router routes and page definitions.
- `components/ui/`: The source code for the registry components.
- `components/examples/`: Usage examples for the component previews.
- `lib/registry.ts`: The source of truth for all registry items and their metadata.
- `public/r/`: Generated JSON registry files served to the CLI.

---

> [!IMPORTANT]
> This registry is maintained as an open-source project. Always review component source code before adding it to production environments.
