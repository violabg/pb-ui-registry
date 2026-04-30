import fs from "node:fs";
import path from "node:path";

import React from "react";

type ComponentTypeWithName = {
  displayName?: string;
  name?: string;
};

let exampleSourceIndex: Map<string, string> | null = null;

function resolveExampleModulePath(fromFilePath: string, relativeFilePath: string) {
  const basePath = path.resolve(path.dirname(fromFilePath), relativeFilePath);
  const candidatePaths = [
    `${basePath}.tsx`,
    `${basePath}.ts`,
    path.join(basePath, "index.tsx"),
    path.join(basePath, "index.ts"),
  ];

  for (const candidatePath of candidatePaths) {
    if (fs.existsSync(candidatePath)) {
      return candidatePath;
    }
  }

  return null;
}

function parseExportSpecifiers(exportsBlock: string) {
  return exportsBlock
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((specifier) => {
      const [localName, exportedName] = specifier.split(/\s+as\s+/);

      return {
        localName: localName?.trim() ?? "",
        exportedName: (exportedName ?? localName)?.trim() ?? "",
      };
    });
}

function buildExampleSourceIndex(
  filePath: string,
  visitedFiles = new Set<string>(),
): Map<string, string> {
  if (visitedFiles.has(filePath)) {
    return new Map();
  }

  visitedFiles.add(filePath);

  const source = fs.readFileSync(filePath, "utf8");
  const exportToFilePath = new Map<string, string>();

  for (const match of source.matchAll(
    /export\s*\{([\s\S]*?)\}\s*from\s*"(.+?)";/g,
  )) {
    const exportsBlock = match[1];
    const relativeFilePath = match[2];
    const resolvedFilePath = resolveExampleModulePath(filePath, relativeFilePath);

    if (!resolvedFilePath) {
      continue;
    }

    const nestedExports = buildExampleSourceIndex(resolvedFilePath, visitedFiles);

    for (const { localName, exportedName } of parseExportSpecifiers(exportsBlock)) {
      exportToFilePath.set(
        exportedName,
        nestedExports.get(localName) ?? resolvedFilePath,
      );
    }
  }

  return exportToFilePath;
}

function getExampleSourceIndex() {
  if (exampleSourceIndex) {
    return exampleSourceIndex;
  }

  const exportToFilePath = buildExampleSourceIndex(
    path.join(process.cwd(), "components/examples/index.ts"),
  );

  exampleSourceIndex = exportToFilePath;

  return exportToFilePath;
}

function getComponentExportName(component: React.ReactNode) {
  if (!React.isValidElement(component)) {
    return null;
  }

  const type = component.type as ComponentTypeWithName | string;

  if (typeof type === "string") {
    return null;
  }

  return type.displayName ?? type.name ?? null;
}

function getFallbackExportName(code: string) {
  return code.match(/export function\s+([A-Za-z0-9_]+)/)?.[1] ?? null;
}

function normalizeFallbackCode(code: unknown) {
  return typeof code === "string" ? code : null;
}

function extractTopLevelPreamble(source: string) {
  const directiveMatch = source.match(/^("use client";\n\n)/);
  const directive = directiveMatch?.[1] ?? "";
  const afterDirective = source.slice(directive.length);

  let offset = 0;
  const importMatches = afterDirective.match(/^(?:import[\s\S]*?;\n)+/);
  const imports = importMatches?.[0] ?? "";

  offset += imports.length;

  const remainingSource = afterDirective.slice(offset);
  const firstExportIndex = remainingSource.search(/^export /m);
  const sharedTopLevel =
    firstExportIndex >= 0 ? remainingSource.slice(0, firstExportIndex) : "";

  return `${directive}${imports}${sharedTopLevel}`.trimEnd();
}

function extractExportedFunction(source: string, exportName: string) {
  const functionMatch = new RegExp(
    `export function ${exportName}\\s*\\(`,
  ).exec(source);

  if (!functionMatch || functionMatch.index === undefined) {
    return null;
  }

  const startIndex = functionMatch.index;
  const bodyStartIndex = source.indexOf("{", startIndex);

  if (bodyStartIndex < 0) {
    return null;
  }

  let depth = 0;

  for (let index = bodyStartIndex; index < source.length; index += 1) {
    const character = source[index];

    if (character === "{") {
      depth += 1;
    } else if (character === "}") {
      depth -= 1;

      if (depth === 0) {
        return source.slice(startIndex, index + 1).trim();
      }
    }
  }

  return null;
}

function deriveExactExampleCode(exportName: string) {
  const sourceFilePath = getExampleSourceIndex().get(exportName);

  if (!sourceFilePath) {
    return null;
  }

  const source = fs.readFileSync(sourceFilePath, "utf8");
  const preamble = extractTopLevelPreamble(source);
  const exportedFunction = extractExportedFunction(source, exportName);

  if (!exportedFunction) {
    return null;
  }

  return [preamble, exportedFunction].filter(Boolean).join("\n\n");
}

export function getExampleCode(
  component: React.ReactNode,
  fallbackCode: unknown,
  sourceExportName?: string,
) {
  const componentExportName = sourceExportName ?? getComponentExportName(component);
  const normalizedFallbackCode = normalizeFallbackCode(fallbackCode);

  if (componentExportName) {
    const derivedCode = deriveExactExampleCode(componentExportName);

    if (derivedCode) {
      const fallbackExportName = normalizedFallbackCode
        ? getFallbackExportName(normalizedFallbackCode)
        : null;

      if (!fallbackExportName || fallbackExportName === componentExportName) {
        return derivedCode;
      }
    }
  }

  return normalizedFallbackCode ?? "";
}