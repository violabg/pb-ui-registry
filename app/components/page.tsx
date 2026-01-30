import { ComponentBrowser } from "@/components/component-browser";
import { getRegistryItems } from "@/lib/registry";
import type { Metadata } from "next";

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

  return (
    <div className="mx-auto px-4 sm:px-6 py-10 w-full max-w-7xl">
      <ComponentBrowser items={items} />
    </div>
  );
}
