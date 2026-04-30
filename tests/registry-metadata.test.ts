// @vitest-environment node

import { describe, expect, it } from "vitest";

import {
  getRegistryDependencyValidationIssues,
  getRegistryItemWithContent,
} from "@/lib/registry";
import { getInvalidRegistryCategoryReferences } from "@/lib/registry-categories";
import { validateRegistryFile } from "@/lib/registry-files";

describe("registry metadata", () => {
  it("keeps declared registry dependencies aligned with local imports", () => {
    expect(getRegistryDependencyValidationIssues()).toEqual([]);
  });

  it("uses a controlled category vocabulary", () => {
    expect(
      getInvalidRegistryCategoryReferences([
        { name: "button", categories: ["forms"] },
        { name: "demo", categories: ["typo"] },
      ]),
    ).toEqual(["demo -> typo"]);
  });

  it("rejects registry files that escape the workspace", () => {
    expect(() =>
      validateRegistryFile("demo", {
        path: "../outside.tsx",
        target: "components/ui/demo.tsx",
        type: "registry:ui",
      }),
    ).toThrow(/inside the workspace/);
  });

  it("loads content through the registry file loader seam", async () => {
    const item = await getRegistryItemWithContent("button");

    expect(item?.files?.[0]?.content).toContain("buttonVariants");
  });
});
