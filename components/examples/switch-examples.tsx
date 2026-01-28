"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export const SwitchDemoCode = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`;

export function SwitchSmall() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="small-switch" size="sm" />
      <Label htmlFor="small-switch">Small switch</Label>
    </div>
  );
}

export const SwitchSmallCode = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchSmall() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="small-switch" size="sm" />
      <Label htmlFor="small-switch">Small switch</Label>
    </div>
  );
}`;
