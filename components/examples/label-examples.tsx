"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LabelDemo() {
  return (
    <div className="gap-2 grid max-w-sm">
      <Label htmlFor="company">Company</Label>
      <Input id="company" placeholder="Acme Inc." />
    </div>
  );
}

export const LabelDemoCode = `import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function LabelDemo() {
  return (
    <div className="gap-2 grid max-w-sm">
      <Label htmlFor="company">Company</Label>
      <Input id="company" placeholder="Acme Inc." />
    </div>
  );
}`;
