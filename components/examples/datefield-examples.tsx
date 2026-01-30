"use client";

import { parseDate } from "@internationalized/date";

import { DateField, DateInput } from "@/components/ui/datefield-rac";

export function DateFieldDemo() {
  return (
    <DateField>
      <DateInput />
    </DateField>
  );
}

export function DateFieldDefaultValueDemo() {
  return (
    <DateField defaultValue={parseDate("2026-01-30")}>
      <DateInput />
    </DateField>
  );
}

export const DateFieldDemoCode = `import { DateField, DateInput } from "@/components/ui/datefield-rac";

export function DateFieldDemo() {
  return (
    <DateField>
      <DateInput />
    </DateField>
  );
}`;

export const DateFieldDefaultValueDemoCode = `import { parseDate } from "@internationalized/date";
import { DateField, DateInput } from "@/components/ui/datefield-rac";

export function DateFieldDefaultValueDemo() {
  return (
    <DateField defaultValue={parseDate("2026-01-30")}>
      <DateInput />
    </DateField>
  );
}`;
