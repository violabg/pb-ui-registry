"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">Beta</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Blocked</Badge>
    </div>
  );
}

export const BadgeDemoCode = `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">Beta</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Blocked</Badge>
    </div>
  );
}`;
