export const registryCategories = [
  "data-display",
  "data-entry",
  "feedback",
  "forms",
  "layout",
  "navigation",
  "overlay",
] as const;

export type RegistryCategory = (typeof registryCategories)[number];

const registryCategorySet = new Set<string>(registryCategories);

export type RegistryCategoryCarrier = {
  name: string;
  categories?: readonly string[];
};

export function isRegistryCategory(category: string): category is RegistryCategory {
  return registryCategorySet.has(category);
}

export function getInvalidRegistryCategoryReferences(
  items: readonly RegistryCategoryCarrier[],
) {
  return items.flatMap((item) =>
    (item.categories ?? [])
      .filter((category) => !isRegistryCategory(category))
      .map((category) => `${item.name} -> ${category}`),
  );
}

export function validateRegistryCategories(
  items: readonly RegistryCategoryCarrier[],
) {
  const invalidCategories = getInvalidRegistryCategoryReferences(items);

  if (invalidCategories.length > 0) {
    throw new Error(
      `Unknown registry categories: ${invalidCategories.join(", ")}`,
    );
  }
}
