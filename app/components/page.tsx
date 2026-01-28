import { ComponentBrowser } from "@/components/component-browser";
import { getRegistryItems } from "@/lib/registry";

export const dynamic = "force-static";

export default async function ComponentsPage() {
  const items = await getRegistryItems();

  return (
    <div className="mx-auto px-4 sm:px-6 py-10 w-full max-w-7xl">
      <ComponentBrowser items={items} />
    </div>
  );
}
