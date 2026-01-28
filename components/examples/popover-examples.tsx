"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div className="gap-2 grid">
          <div className="items-center gap-4 grid grid-cols-3">
            <Label htmlFor="width">Width</Label>
            <input
              id="width"
              defaultValue="100%"
              className="col-span-2 px-2 border rounded h-8"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-3">
            <Label htmlFor="height">Height</Label>
            <input
              id="height"
              defaultValue="25px"
              className="col-span-2 px-2 border rounded h-8"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export const PopoverDemoCode = `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div className="gap-2 grid">
          <div className="items-center gap-4 grid grid-cols-3">
            <Label htmlFor="width">Width</Label>
            <input
              id="width"
              defaultValue="100%"
              className="col-span-2 px-2 border rounded h-8"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-3">
            <Label htmlFor="height">Height</Label>
            <input
              id="height"
              defaultValue="25px"
              className="col-span-2 px-2 border rounded h-8"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`;
