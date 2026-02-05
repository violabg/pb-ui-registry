import { ComponentBrowser } from "@/components/component-browser";
import { getRegistryItems } from "@/lib/registry";
import { groupToSidebarSections } from "@/lib/registry-groups";
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
    <div className="relative bg-catalog-grid px-4 sm:px-6 xl:px-10 py-12 w-full">
      <div className="lg:gap-12 lg:grid lg:grid-cols-[260px_1fr] mx-auto max-w-8xl">
        <aside className="hidden lg:block">
          <div className="top-24 sticky pr-4 h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="p-4 border border-border/70 rounded-2xl surface-ring surface-panel-soft">
              <div className="mb-4 font-semibold text-muted-foreground text-sm uppercase tracking-widest">
                Catalog map
              </div>
              {sections.map((section) => (
                <div key={section.key} className="mb-6">
                  <div className="mb-2 font-semibold text-muted-foreground text-xs uppercase tracking-widest">
                    {section.key}
                  </div>
                  <ul className="space-y-1 m-0 p-0 list-none">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/components/${item.name}`}
                          className="block text-muted-foreground hover:text-foreground text-sm"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="min-w-0">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full surface-ring w-fit font-medium text-primary text-xs uppercase tracking-[0.2em] surface-panel-soft">
              Component catalog
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-4xl sm:text-5xl tracking-tight">
                Explore the full input library
              </h1>
              <p className="max-w-2xl text-muted-foreground text-lg">
                Filter by category, preview each component, and grab the exact
                install command directly from the registry.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/registry.json"
                className="inline-flex justify-center items-center gap-2 px-4 py-2 border border-border/70 rounded-full surface-ring font-medium text-foreground text-sm transition-colors surface-panel-soft"
              >
                Registry index
              </Link>
              <span className="text-muted-foreground text-sm">
                {items.length} components available
              </span>
            </div>
          </div>
          <ComponentBrowser items={items} />
        </main>
      </div>
    </div>
  );
}
