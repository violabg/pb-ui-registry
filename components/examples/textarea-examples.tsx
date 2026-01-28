"use client";

import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return (
    <Textarea placeholder="Write a short description..." className="max-w-sm" />
  );
}

export const TextareaDemoCode = `import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return (
    <Textarea
      placeholder="Write a short description..."
      className="max-w-sm"
    />
  );
}`;
