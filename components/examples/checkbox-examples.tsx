"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

export const CheckboxDemoCode = `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`;

export function CheckboxDisabled() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="opacity-50">
        Disabled checkbox
      </Label>
    </div>
  );
}

export const CheckboxDisabledCode = `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDisabled() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="opacity-50">
        Disabled checkbox
      </Label>
    </div>
  );
}`;
