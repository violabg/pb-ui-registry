"use client";

import { ColorPicker } from "@/components/ui/color-picker";
import { useState } from "react";

export function ColorPickerDemo() {
  const [color, setColor] = useState("#6366f1");

  return (
    <div className="space-y-4">
      <ColorPicker value={color} onChange={setColor} />
      <div className="flex items-center gap-2">
        <div
          className="border rounded size-8"
          style={{ backgroundColor: color }}
        />
        <p className="text-muted-foreground text-sm">{color}</p>
      </div>
    </div>
  );
}

export const ColorPickerDemoCode = `"use client";

import { ColorPicker } from "@/components/ui/color-picker";
import { useState } from "react";

export function ColorPickerDemo() {
  const [color, setColor] = useState("#6366f1");

  return (
    <div className="space-y-4">
      <ColorPicker value={color} onChange={setColor} />
      <div className="flex items-center gap-2">
        <div
          className="border rounded size-8"
          style={{ backgroundColor: color }}
        />
        <p className="text-muted-foreground text-sm">{color}</p>
      </div>
    </div>
  );
}`;
