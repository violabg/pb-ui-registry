// @vitest-environment node

import { describe, expect, it } from "vitest";

import type { RegistryItemSummary } from "@/lib/registry";
import {
    groupToSidebarSections,
    registrySectionRules,
} from "@/lib/registry-groups";

describe("registry groups", () => {
  it("classifies and sorts RHF and base items through one shared seam", () => {
    const items: RegistryItemSummary[] = [
      { name: "button", title: "Button", categories: [] },
      { name: "rhf-inputs", title: "All Inputs", categories: [] },
      { name: "rhf-date-picker-field", title: "Date Picker Field", categories: [] },
      { name: "alert-dialog", title: "Alert Dialog", categories: [] },
    ];

    const sections = groupToSidebarSections(items);

    expect(sections).toHaveLength(2);
    expect(sections[0]?.key).toBe("React Hook Form");
    expect(sections[0]?.items.map((item) => item.name)).toEqual([
      "rhf-inputs",
      "rhf-date-picker-field",
    ]);
    expect(sections[1]?.key).toBe("Base Components");
    expect(sections[1]?.items.map((item) => item.name)).toEqual([
      "alert-dialog",
      "button",
    ]);
  });

  it("keeps section classification rules explicit", () => {
    expect(registrySectionRules.map((rule) => rule.key)).toEqual([
      "React Hook Form",
      "Base Components",
    ]);
    expect(
      registrySectionRules[0]?.matches({
        name: "rhf-input-field",
        title: "RHF Input Field",
      }),
    ).toBe(true);
  });
});