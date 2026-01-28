"use client";

import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="flex items-center gap-3">
        <span className="text-sm">Overview</span>
        <Separator orientation="vertical" className="h-4" />
        <span className="text-muted-foreground text-sm">Details</span>
      </div>
      <Separator />
      <div className="text-muted-foreground text-sm">
        Use separators to divide content or layout sections.
      </div>
    </div>
  );
}

export const SeparatorDemoCode = `import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="flex items-center gap-3">
        <span className="text-sm">Overview</span>
        <Separator orientation="vertical" className="h-4" />
        <span className="text-muted-foreground text-sm">Details</span>
      </div>
      <Separator />
      <div className="text-muted-foreground text-sm">
        Use separators to divide content or layout sections.
      </div>
    </div>
  );
}`;
