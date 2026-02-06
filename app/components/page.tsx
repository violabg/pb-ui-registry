import { CatalogSidebar } from "@/components/catalog-sidebar";
import { ComponentBrowser } from "@/components/component-browser";
import { FadeIn } from "@/components/fade-in";
import { getRegistryItems } from "@/lib/registry";
import { groupToSidebarSections } from "@/lib/registry-groups";
import { Terminal } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Browse the React Hook Form input collection with Zod integration from the pb-ui registry.",
  openGraph: {
    title: "pb-ui components",
    description:
      "Browse the React Hook Form input collection with Zod integration from the pb-ui registry.",
    url: "/components",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "pb-ui components",
    description:
      "Browse the React Hook Form input collection with Zod integration from the pb-ui registry.",
  },
  alternates: {
    canonical: "/components",
  },
};

export default async function ComponentsPage() {
  const items = await getRegistryItems();

  const sections = groupToSidebarSections(items);

  return (
    <div className="px-4 sm:px-6 xl:px-10 py-12 w-full min-h-screen">
      <div className="lg:gap-10 lg:grid lg:grid-cols-[240px_1fr] mx-auto max-w-8xl">
        <CatalogSidebar sections={sections} />
        <main className="min-w-0">
          <FadeIn className="flex flex-col gap-5 mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 border border-primary/30 rounded-full w-fit font-medium text-primary text-xs uppercase tracking-[0.2em]">
              <Terminal className="size-3.5" />
              Component catalog
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
                Explore the full input library
              </h1>
              <p className="max-w-2xl text-muted-foreground text-lg">
                Filter by category, preview each component, and grab the exact
                install command directly from the registry.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/registry.json"
                className="inline-flex justify-center items-center gap-2 hover:bg-primary/5 px-4 py-2 border border-border/50 hover:border-primary/50 rounded-lg font-medium text-sm transition-all"
              >
                Registry index
              </Link>
              <span className="text-muted-foreground text-sm">
                <span className="font-semibold text-primary">
                  {items.length}
                </span>{" "}
                components available
              </span>
            </div>
          </FadeIn>
          <ComponentBrowser items={items} />
        </main>
      </div>
    </div>
  );
}
