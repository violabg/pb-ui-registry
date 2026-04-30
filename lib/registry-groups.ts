import type { RegistryItemSummary } from "./registry";

export type PartitionedRegistry = {
  rhfItems: RegistryItemSummary[];
  baseItems: RegistryItemSummary[];
};

export type RegistrySection = {
  key: "React Hook Form" | "Base Components";
  items: RegistryItemSummary[];
};

function sortRegistryItems(items: RegistryItemSummary[]) {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}

export function partitionRegistryItems(
  items: RegistryItemSummary[],
): PartitionedRegistry {
  const rhf: RegistryItemSummary[] = [];
  const base: RegistryItemSummary[] = [];

  for (const item of items) {
    if (item.name.startsWith("rhf-")) {
      rhf.push(item);
    } else {
      base.push(item);
    }
  }

  return {
    rhfItems: sortRegistryItems(rhf),
    baseItems: sortRegistryItems(base),
  };
}

export function groupToSidebarSections(items: RegistryItemSummary[]) {
  const { rhfItems, baseItems } = partitionRegistryItems(items);

  return [
    { key: "React Hook Form", items: rhfItems },
    { key: "Base Components", items: baseItems },
  ] satisfies RegistrySection[];
}
