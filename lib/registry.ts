import {
  validateRegistryCategories
} from "./registry-categories";
import {
  getRegistryDependencyIssues,
  validateRegistryDependencies,
} from "./registry-dependencies";
import {
  loadRegistryItemFiles,
  validateRegistryItemFiles,
} from "./registry-files";
import { RegistryItem, registryItems } from "./registry-items";


export type RegistryIndex = {
  name: string;
  homepage: string;
  items: RegistryItem[];
};

export type RegistryItemSummary = Pick<
  RegistryItem,
  "name" | "title" | "description" | "docs" | "categories"
>;

type RegistryItemResolutionOptions = {
  includeContent?: boolean;
};

export const exampleEnabledRegistryItemNames = registryItems.map(
  (item) => item.name,
);

const registryItemNames = new Set(registryItems.map((item) => item.name));

validateRegistryCategories(registryItems);
validateRegistryItemFiles(registryItems);
validateRegistryDependencies(registryItems);

export function getRegistryDependencyValidationIssues() {
  return getRegistryDependencyIssues(registryItems);
}

export function isExampleEnabledRegistryItem(name: string) {
  return exampleEnabledRegistryItemNames.includes(name);
}

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.replace(/\/$/, "");
}

function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  );
}

function getRegistryDependencyUrl(name: string): string {
  if (!registryItemNames.has(name)) {
    throw new Error(`Unknown registry dependency: ${name}`);
  }

  return `${getSiteUrl()}/registry/${name}`;
}

function resolveRegistryDependencies(deps?: string[]): string[] | undefined {
  if (!deps) return undefined;
  return deps.map(getRegistryDependencyUrl);
}

export function getRegistryUrlTemplate(name: string) {
  return `${getSiteUrl()}/registry/${name}`;
}

export function getInstallCommand(name: string) {
  return `npx shadcn@latest add ${getRegistryUrlTemplate(name)}`;
}

export async function getRegistryItems(): Promise<RegistryItemSummary[]> {
  return registryItems
    .map(({ name, title, description, docs, categories }) => ({
      name,
      title,
      description,
      docs,
      categories,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function resolveRegistryItem(
  name: string,
  options: RegistryItemResolutionOptions = {},
): Promise<RegistryItem | null> {
  const item = registryItems.find((entry) => entry.name === name);

  if (!item) {
    return null;
  }

  const resolvedItem = {
    ...item,
    registryDependencies: resolveRegistryDependencies(
      item.registryDependencies,
    ),
  };

  if (options.includeContent) {
    return loadRegistryItemFiles(resolvedItem);
  }

  return resolvedItem;
}

export async function getRegistryItemSummary(
  name: string,
): Promise<RegistryItem | null> {
  return resolveRegistryItem(name);
}

export async function getRegistryItemWithContent(
  name: string,
): Promise<RegistryItem | null> {
  return resolveRegistryItem(name, { includeContent: true });
}

export async function getRegistryIndex(): Promise<RegistryIndex> {
  const items = await Promise.all(
    registryItems.map(async (item) => getRegistryItemWithContent(item.name)),
  );

  return {
    name: "shadcd",
    homepage: getSiteUrl(),
    items: items.filter(Boolean) as RegistryItem[],
  };
}
