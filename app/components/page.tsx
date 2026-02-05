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
    <div className="relative bg-catalog-grid px-4 sm:px-6 xl:px-8 py-12 w-full">
      <div className="lg:gap-10 lg:grid lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="top-24 sticky pr-4 h-[calc(100vh-6rem)] overflow-y-auto">
            {sections.map((section) => (
              <div key={section.key} className="mb-6">
                <div className="mb-2 font-semibold text-muted-foreground text-sm uppercase tracking-widest">
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
        </aside>

        <main>
          <ComponentBrowser items={items} />
        </main>
      </div>
    </div>
  );
}
