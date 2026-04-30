import fs from "node:fs";
import path from "node:path";

import type { RegistryItem } from "./registry";

type RegistryDependencyIssueKind = "missing" | "unknown";

export type RegistryDependencyIssue = {
  itemName: string;
  dependency: string;
  kind: RegistryDependencyIssueKind;
};

const moduleSpecifierPattern =
  /\b(?:import|export)\b(?:[\s\S]*?\bfrom\s*)?["']([^"']+)["']/g;

function normalizeRegistryPath(value: string) {
  return path.posix.normalize(value.replace(/\\/g, "/"));
}

function createRegistryNameByFilePath(items: readonly RegistryItem[]) {
  const registryNameByFilePath = new Map<string, string>();

  for (const item of items) {
    for (const file of item.files ?? []) {
      registryNameByFilePath.set(normalizeRegistryPath(file.path), item.name);
    }
  }

  return registryNameByFilePath;
}

function getCandidateImportPaths(importPath: string) {
  return [
    importPath,
    `${importPath}.tsx`,
    `${importPath}.ts`,
    path.posix.join(importPath, "index.tsx"),
    path.posix.join(importPath, "index.ts"),
  ];
}

function resolveLocalUiImportPath(importerPath: string, specifier: string) {
  if (specifier.startsWith("@/components/ui/")) {
    return normalizeRegistryPath(specifier.replace("@/", ""));
  }

  if (!specifier.startsWith(".")) {
    return null;
  }

  const importerDirectory = path.posix.dirname(normalizeRegistryPath(importerPath));
  const resolvedPath = path.posix.normalize(
    path.posix.join(importerDirectory, specifier),
  );

  if (!resolvedPath.startsWith("components/ui/")) {
    return null;
  }

  return resolvedPath;
}

function getImportedRegistryDependencies(
  source: string,
  importerPath: string,
  registryNameByFilePath: ReadonlyMap<string, string>,
) {
  const dependencies = new Set<string>();

  for (const match of source.matchAll(moduleSpecifierPattern)) {
    const specifier = match[1];

    if (!specifier) {
      continue;
    }

    const importPath = resolveLocalUiImportPath(importerPath, specifier);

    if (!importPath) {
      continue;
    }

    for (const candidatePath of getCandidateImportPaths(importPath)) {
      const dependencyName = registryNameByFilePath.get(candidatePath);

      if (dependencyName) {
        dependencies.add(dependencyName);
        break;
      }
    }
  }

  return dependencies;
}

export function getRegistryItemImportedDependencies(
  item: RegistryItem,
  items: readonly RegistryItem[],
) {
  const registryNameByFilePath = createRegistryNameByFilePath(items);
  const dependencies = new Set<string>();

  for (const file of item.files ?? []) {
    const filePath = path.resolve(process.cwd(), file.path);
    const source = fs.readFileSync(filePath, "utf8");
    const importedDependencies = getImportedRegistryDependencies(
      source,
      file.path,
      registryNameByFilePath,
    );

    for (const dependency of importedDependencies) {
      if (dependency !== item.name) {
        dependencies.add(dependency);
      }
    }
  }

  return [...dependencies].sort((a, b) => a.localeCompare(b));
}

export function getRegistryDependencyIssues(items: readonly RegistryItem[]) {
  const registryItemNames = new Set(items.map((item) => item.name));
  const issues: RegistryDependencyIssue[] = [];

  for (const item of items) {
    const declaredDependencies = new Set(item.registryDependencies ?? []);

    for (const dependency of declaredDependencies) {
      if (!registryItemNames.has(dependency)) {
        issues.push({
          itemName: item.name,
          dependency,
          kind: "unknown",
        });
      }
    }

    for (const dependency of getRegistryItemImportedDependencies(item, items)) {
      if (!declaredDependencies.has(dependency)) {
        issues.push({
          itemName: item.name,
          dependency,
          kind: "missing",
        });
      }
    }
  }

  return issues;
}

export function formatRegistryDependencyIssue(issue: RegistryDependencyIssue) {
  if (issue.kind === "unknown") {
    return `${issue.itemName} -> ${issue.dependency} (unknown)`;
  }

  return `${issue.itemName} -> ${issue.dependency} (missing)`;
}

export function validateRegistryDependencies(items: readonly RegistryItem[]) {
  const issues = getRegistryDependencyIssues(items);

  if (issues.length > 0) {
    throw new Error(
      `Invalid registryDependencies: ${issues
        .map(formatRegistryDependencyIssue)
        .join(", ")}`,
    );
  }
}
