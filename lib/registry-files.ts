import fs from "node:fs/promises";
import path from "node:path";
import { RegistryFile, RegistryItem } from "./registry-items";


const registryFileTypes = new Set<RegistryFile["type"]>([
  "registry:component",
  "registry:lib",
  "registry:ui",
]);

function normalizeRegistryPath(value: string, fieldName: string, itemName: string) {
  if (!value) {
    throw new Error(`Registry file ${fieldName} is empty for ${itemName}`);
  }

  if (path.isAbsolute(value)) {
    throw new Error(
      `Registry file ${fieldName} must be relative for ${itemName}: ${value}`,
    );
  }

  const normalized = path.posix.normalize(value.replace(/\\/g, "/"));

  if (normalized === "." || normalized === ".." || normalized.startsWith("../")) {
    throw new Error(
      `Registry file ${fieldName} must stay inside the workspace for ${itemName}: ${value}`,
    );
  }

  return normalized;
}

function resolveWorkspacePath(relativePath: string, itemName: string) {
  const workspaceRoot = process.cwd();
  const filePath = path.resolve(workspaceRoot, relativePath);
  const relativeToRoot = path.relative(workspaceRoot, filePath);

  if (
    relativeToRoot === "" ||
    relativeToRoot.startsWith("..") ||
    path.isAbsolute(relativeToRoot)
  ) {
    throw new Error(
      `Registry file path must stay inside the workspace for ${itemName}: ${relativePath}`,
    );
  }

  return filePath;
}

export function validateRegistryFile(itemName: string, file: RegistryFile) {
  if (!registryFileTypes.has(file.type)) {
    throw new Error(`Unknown registry file type for ${itemName}: ${file.type}`);
  }

  normalizeRegistryPath(file.path, "path", itemName);

  if (file.target) {
    normalizeRegistryPath(file.target, "target", itemName);
  }
}

export function validateRegistryItemFiles(items: readonly RegistryItem[]) {
  for (const item of items) {
    for (const file of item.files ?? []) {
      validateRegistryFile(item.name, file);
    }
  }
}

export async function loadRegistryItemFiles(
  item: RegistryItem,
): Promise<RegistryItem> {
  if (!item.files?.length) {
    return item;
  }

  const files = await Promise.all(
    item.files.map(async (file) => {
      validateRegistryFile(item.name, file);

      const filePath = resolveWorkspacePath(file.path, item.name);
      const content = await fs.readFile(filePath, "utf8");

      return {
        ...file,
        content,
      };
    }),
  );

  return {
    ...item,
    files,
  };
}
