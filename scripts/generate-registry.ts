import fs from "node:fs";
import path from "node:path";
import { registryItems } from "../lib/registry-items";

const ROOT = path.resolve(import.meta.dirname, "..");

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000")
  .replace(/\/$/, "");

const localNames = new Set(registryItems.map((item) => item.name));

function resolveRegistryDependencies(deps?: string[]): string[] | undefined {
  if (!deps || deps.length === 0) return undefined;
  return deps.map((name) => {
    if (localNames.has(name)) {
      return `${siteUrl}/r/${name}.json`;
    }
    // Already a URL or shadcn built-in
    return name;
  });
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "pb-ui",
  homepage: siteUrl,
  items: registryItems.map((item) => ({
    ...item,
    registryDependencies: resolveRegistryDependencies(item.registryDependencies),
  })),
};

const outputPath = path.join(ROOT, "registry.json");
fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2) + "\n");
console.log(`✓ registry.json generated with ${registry.items.length} items`);
