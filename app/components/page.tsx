import { ComponentBrowser } from "@/components/component-browser";
import { FadeIn } from "@/components/fade-in";
import { getRegistryItems } from "@/lib/registry";
import { groupToSidebarSections } from "@/lib/registry-groups";
import { Blocks, Terminal } from "lucide-react";
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
    <div className="relative bg-catalog-grid px-4 sm:px-6 xl:px-10 py-12 w-full min-h-screen">
      {/* Floating neon accents */}
      <div className="top-40 -right-20 float-slow absolute bg-[var(--neon-blue)] opacity-15 blur-[100px] rounded-full size-[400px]" />
      <div
        className="bottom-20 -left-20 float-slow absolute bg-[var(--neon-magenta)] opacity-10 blur-[80px] rounded-full size-[300px]"
        style={{ animationDelay: "-4s" }}
      />

      <div className="lg:gap-10 lg:grid lg:grid-cols-[240px_1fr] mx-auto max-w-8xl">
        <aside className="hidden lg:block">
          <div className="top-24 sticky pr-4 h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="p-5 border border-border/50 rounded-xl surface-panel-soft">
              <div className="flex items-center gap-2 mb-5 pb-3 border-border/50 border-b">
                <Blocks className="size-4 text-primary" />
                <span className="font-display font-semibold text-sm uppercase tracking-[0.15em]">
                  Catalog
                </span>
              </div>
              {sections.map((section) => (
                <div key={section.key} className="mb-6 last:mb-0">
                  <div className="mb-2 font-semibold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                    {section.key}
                  </div>
                  <ul className="space-y-1 m-0 p-0 list-none">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={`/components/${item.name}`}
                          className="block py-1 text-muted-foreground hover:text-primary text-sm transition-colors"
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
