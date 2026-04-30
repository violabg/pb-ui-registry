// @vitest-environment node

import { describe, expect, it } from "vitest";

import {
    getRegistryItemSummary,
    getRegistryItemWithContent,
    getRegistryUrlTemplate,
} from "@/lib/registry";

describe("registry resolution", () => {
  it("resolves local registry dependencies in the summary adapter", async () => {
    const item = await getRegistryItemSummary("field");

    expect(item?.registryDependencies).toEqual([
      getRegistryUrlTemplate("label"),
      getRegistryUrlTemplate("separator"),
    ]);
    expect(item?.files?.every((file) => file.content === undefined)).toBe(true);
  });

  it("loads file content only in the content-bearing adapter", async () => {
    const item = await getRegistryItemWithContent("field");

    expect(item?.files?.[0]?.content).toContain("Field");
  });
});