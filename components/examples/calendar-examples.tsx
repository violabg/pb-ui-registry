"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="shadow-sm border rounded-md"
    />
  );
}

export const CalendarDemoCode = `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="shadow-sm border rounded-md"
    />
  );
}`;
