import type { RegistryItemSummary } from "./registry";

export type PartitionedRegistry = {
  rhfItems: RegistryItemSummary[];
  baseItems: RegistryItemSummary[];
};

export type RegistrySectionKey = "React Hook Form" | "Base Components";

export type RegistrySectionRule = {
  key: RegistrySectionKey;
  matches: (item: RegistryItemSummary) => boolean;
};

export type RegistrySection = {
  key: RegistrySectionKey;
  items: RegistryItemSummary[];
};

export const registrySectionRules = [
  {
    key: "React Hook Form",
    matches: (item) => item.name.startsWith("rhf-"),
  },
  {
    key: "Base Components",
    matches: () => true,
  },
] satisfies RegistrySectionRule[];

function sortRegistryItems(items: RegistryItemSummary[]) {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}

export function partitionRegistryItems(
  items: RegistryItemSummary[],
): PartitionedRegistry {
  const rhf: RegistryItemSummary[] = [];
  const base: RegistryItemSummary[] = [];
  const [rhfRule] = registrySectionRules;

  for (const item of items) {
    if (rhfRule.matches(item)) {
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
