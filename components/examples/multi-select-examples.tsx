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

const groupedOptions: OptionType[] = [
  { label: "React", value: "react", category: "JavaScript" },
  { label: "Vue", value: "vue", category: "JavaScript" },
  { label: "Angular", value: "angular", category: "JavaScript" },
  { label: "Svelte", value: "svelte", category: "JavaScript" },
  { label: "Next.js", value: "nextjs", category: "JavaScript" },
  { label: "Django", value: "django", category: "Python" },
  { label: "Flask", value: "flask", category: "Python" },
  { label: "FastAPI", value: "fastapi", category: "Python" },
  { label: "Rails", value: "rails", category: "Ruby" },
  { label: "Sinatra", value: "sinatra", category: "Ruby" },
];

export function MultiSelectGroupedDemo() {
  const [selected, setSelected] = React.useState<string[]>([]);
  return (
    <MultiSelect
      options={groupedOptions}
      selected={selected}
      onChange={setSelected}
      placeholder="Select frameworks..."
      grouped
    />
  );
}

export const MultiSelectGroupedDemoCode = `import { MultiSelect, type OptionType } from "@/components/ui/multi-select";
import { useState } from "react";

const options: OptionType[] = [
  { label: "React", value: "react", category: "JavaScript" },
  { label: "Vue", value: "vue", category: "JavaScript" },
  { label: "Angular", value: "angular", category: "JavaScript" },
  { label: "Svelte", value: "svelte", category: "JavaScript" },
  { label: "Next.js", value: "nextjs", category: "JavaScript" },
  { label: "Django", value: "django", category: "Python" },
  { label: "Flask", value: "flask", category: "Python" },
  { label: "FastAPI", value: "fastapi", category: "Python" },
  { label: "Rails", value: "rails", category: "Ruby" },
  { label: "Sinatra", value: "sinatra", category: "Ruby" },
];

export function MultiSelectGroupedDemo() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <MultiSelect
      options={options}
      selected={selected}
      onChange={setSelected}
      placeholder="Select frameworks..."
      grouped
    />
  );
}`;
