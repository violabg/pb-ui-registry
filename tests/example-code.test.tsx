// @vitest-environment node

import { describe, expect, it } from "vitest";

import { InputDemo, RhfInputFieldDemo } from "@/components/examples";
import { getExampleCode } from "@/lib/example-code";
import { getExamples } from "@/lib/examples";

describe("example code adapter", () => {
  it("derives code from the source file when the displayed sample matches the component export", () => {
    const code = getExampleCode(<InputDemo />, "");

    expect(code).toContain("export function InputDemo()");
    expect(code).toContain('className="max-w-sm"');
  });

  it("falls back to the hand-written code sample when the displayed sample intentionally differs", () => {
    const fallbackCode = `export function Demo() {
  return null;
}`;
    const code = getExampleCode(<RhfInputFieldDemo />, fallbackCode);

    expect(code).toBe(fallbackCode);
    expect(code).toContain("export function Demo()");
  });

  it("does not crash when the fallback sample is not a string", () => {
    const code = getExampleCode(<InputDemo />, { invalid: true });

    expect(code).toContain("export function InputDemo()");
  });

  it("hydrates generated code for examples that use explicit source export names", () => {
    const code = getExamples("input")[0]?.code;

    expect(code).toContain("export function InputDemo()");
    expect(code).toContain('className="max-w-sm"');
  });

  it("keeps RHF detail-page code samples visible", () => {
    const code = getExamples("rhf-input-field")[0]?.code;

    expect(code).toContain("export function RhfInputFieldDemo()");
    expect(code).toContain("useForm");
  });
});
