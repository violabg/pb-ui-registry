// @vitest-environment node

import { describe, expect, it } from "vitest";

import { getExampleItemNames, getExamples } from "@/lib/examples";
import { exampleEnabledRegistryItemNames } from "@/lib/registry";

describe("examples validation", () => {
  it("ensures example-enabled registry items have examples", () => {
    const registryNames = exampleEnabledRegistryItemNames;
    const exampleNames = getExampleItemNames();

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