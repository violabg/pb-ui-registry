"use client";

import { MultiSelect, type OptionType } from "@/components/ui/multi-select";
import * as React from "react";

const multiSelectOptions: OptionType[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
];

export function MultiSelectDemo() {
  const [selected, setSelected] = React.useState<string[]>([]);
  return (
    <MultiSelect
      options={multiSelectOptions}
      selected={selected}
      onChange={setSelected}
      placeholder="Select frameworks..."
    />
  );
}

export const MultiSelectDemoCode = `import { MultiSelect, type OptionType } from "@/components/ui/multi-select";
import { useState } from "react";

const options: OptionType[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
];

export function MultiSelectDemo() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <MultiSelect
      options={options}
      selected={selected}
      onChange={setSelected}
      placeholder="Select frameworks..."
    />
  );
}`;
