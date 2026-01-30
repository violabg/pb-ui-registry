import { CodeBlock } from "@/components/code-block";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRight, CheckCircle2, Package, Terminal } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "React Hook Form inputs with Zod",
  description:
    "A curated React Hook Form input collection with Zod integration, shipped as a shadcn-compatible registry.",
  openGraph: {
    title: "React Hook Form inputs with Zod",
    description:
      "A curated React Hook Form input collection with Zod integration, shipped as a shadcn-compatible registry.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "React Hook Form inputs with Zod",
    description:
      "A curated React Hook Form input collection with Zod integration, shipped as a shadcn-compatible registry.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function GetStartedPage() {
  return (
    <div className="mx-auto px-4 py-16 max-w-7xl container">
      <div className="relative mb-16 overflow-hidden">
        <div className="z-10 relative flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/20 rounded-full w-fit font-medium text-primary text-sm">
            <Package className="size-4" />
            <span>RHF + Zod ready</span>
          </div>
          <h1 className="font-bold text-5xl sm:text-7xl leading-tight tracking-tight">
            Build forms faster with <span className="text-primary">pb-ui</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-xl/relaxed">
            A curated React Hook Form input collection with Zod integration,
            built on Base UI and Tailwind CSS. Copy, paste, and customize.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/components"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-medium text-primary-foreground transition-colors"
            >
              Browse Components
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="top-1/2 -right-20 -z-10 absolute bg-primary/10 blur-3xl rounded-full w-150 h-150 -translate-y-1/2 pointer-events-none" />
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <div className="bg-card/50 p-6 border rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <CheckCircle2 className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">RHF-first</h3>
          </div>
          <p className="text-muted-foreground">
            Inputs designed for React Hook Form with consistent labels, errors,
            and validation states out of the box.
          </p>
        </div>
        <div className="bg-card/50 p-6 border rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <Terminal className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">Zod-integrated</h3>
          </div>
          <p className="text-muted-foreground">
            Schema-first validation with Zod-friendly patterns and types you can
            rely on across your forms.
          </p>
        </div>
        <div className="bg-card/50 p-6 border rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <Package className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">Registry workflow</h3>
          </div>
          <p className="text-muted-foreground">
            Install inputs directly from the CLI with the shadcn registry, then
            customize the code to fit your app.
          </p>
        </div>
      </div>

      <div className="bg-muted/30 p-8 md:p-12 border border-border/50 rounded-3xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight">
            Start building RHF inputs in seconds
          </h2>
          <p className="text-muted-foreground text-lg">
            Add React Hook Form inputs with the CLI and wire them to Zod schemas
            without extra boilerplate.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-primary rounded-full size-8 font-bold text-primary-foreground shrink-0">
                  1
                </div>
                Configure components.json
              </CardTitle>
              <CardDescription>
                Add the registry URL to your <code>components.json</code> file
                to tell shadcn where to look for components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`"registries": {
  "@pb-ui": "https://pb-ui-five.vercel.app/registry/{name}"
}`}
                language="json"
                className="bg-background border border-border/60"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-primary rounded-full size-8 font-bold text-primary-foreground shrink-0">
                  2
                </div>
                Run the add command
              </CardTitle>
              <CardDescription>
                Use the CLI to add any component. Dependencies and registry
                items will be installed automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code="npx shadcn@latest add @pb-ui/multi-select"
                language="bash"
                className="bg-background border border-border/60"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
