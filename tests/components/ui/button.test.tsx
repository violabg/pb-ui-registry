import { describe, expect, it } from "vitest";

import { buttonVariants } from "@/components/ui/button";

describe("Button", () => {
  it("applies the requested variant and size classes", () => {
    const className = buttonVariants({
      variant: "outline",
      size: "sm",
    });

    expect(className).toContain("border-border");
    expect(className).toContain("h-8");
  });
});
