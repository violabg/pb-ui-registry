// @vitest-environment node

import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { getExamples } from "@/lib/examples";
import { exampleEnabledRegistryItemNames } from "@/lib/registry";

const workspaceRoot = process.cwd();
const registrySource = fs.readFileSync(
  path.join(workspaceRoot, "lib/registry.ts"),
  "utf8",
);
const examplesSource = fs.readFileSync(
  path.join(workspaceRoot, "lib/examples.tsx"),
  "utf8",
);

function getRegistryItemNames(source: string) {
  const registryItemsBlock = source.match(
    /const registryItems: RegistryItem\[] = \[([\s\S]*?)\n\];/,
  )?.[1];

  if (!registryItemsBlock) {
    throw new Error("Could not locate registryItems in lib/registry.ts");
  }

  return [...registryItemsBlock.matchAll(/name:\s*"([a-z0-9-]+)"/g)].map(
    (match) => match[1],
  );
}

function getExampleItemNames(source: string) {
  return [...source.matchAll(/^\s{2,}"?([a-z0-9-]+)"?: \[$/gm)].map(
    (match) => match[1],
  );
}

describe("examples validation", () => {
  it("ensures example-enabled registry items have examples", () => {
    const registryNames = getRegistryItemNames(registrySource);
    const exampleNames = getExampleItemNames(examplesSource);

    const registrySet = new Set(registryNames);
    const exampleSet = new Set(exampleNames);

    const missingExamples = registryNames.filter(
      (name) => !exampleSet.has(name),
    );
    const unknownExamples = exampleNames.filter(
      (name) => !registrySet.has(name),
    );

    expect(missingExamples).toEqual([]);
    expect(unknownExamples).toEqual([]);
  });

  it("ensures every example resolves visible code", () => {
    const blankExamples = exampleEnabledRegistryItemNames.flatMap((name) =>
      getExamples(name)
        .filter((example) => example.code.trim().length === 0)
        .map((example) => `${name}#${example.name}`),
    );

    expect(blankExamples).toEqual([]);
  });

  it("keeps code visible for the affected RHF detail pages", () => {
    expect(getExamples("rhf-radio-group-field")[0]?.code).toContain(
      "RadioGroupField",
    );
    expect(getExamples("rhf-select-field")[0]?.code).toContain(
      "SelectField",
    );
  });
});