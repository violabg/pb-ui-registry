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


