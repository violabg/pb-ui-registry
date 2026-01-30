"use client";

import { NumberInput } from "@/components/ui/number-input";
import { useState } from "react";

export function NumberInputDemo() {
  const [value, setValue] = useState<number | null>(5);

  return (
    <div className="space-y-4">
      <NumberInput
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
      />
      <p className="text-muted-foreground text-sm">Value: {value ?? "null"}</p>
    </div>
  );
}

export const NumberInputDemoCode = `"use client";

import { NumberInput } from "@/components/ui/number-input";
import { useState } from "react";

export function NumberInputDemo() {
  const [value, setValue] = useState<number | null>(5);

  return (
    <div className="space-y-4">
      <NumberInput
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
      />
      <p className="text-muted-foreground text-sm">Value: {value ?? "null"}</p>
    </div>
  );
}`;
