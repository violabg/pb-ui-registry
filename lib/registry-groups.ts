import type { RegistryItemSummary } from "./registry";

export type PartitionedRegistry = {
  rhfItems: RegistryItemSummary[];
  baseItems: RegistryItemSummary[];
};

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

  rhf.sort((a, b) => {
    if (a.name === "rhf-inputs") return -1;
    if (b.name === "rhf-inputs") return 1;
    return a.title.localeCompare(b.title);
  });

  base.sort((a, b) => a.title.localeCompare(b.title));

  return { rhfItems: rhf, baseItems: base };
}

export function groupToSidebarSections(items: RegistryItemSummary[]) {
  const { rhfItems, baseItems } = partitionRegistryItems(items);

  return [
    { key: "React Hook Form", items: rhfItems },
    { key: "Base Components", items: baseItems },
  ];
}
