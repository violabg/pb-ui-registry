"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select defaultValue="starter">
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="starter">Starter</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="enterprise">Enterprise</SelectItem>
      </SelectContent>
    </Select>
  );
}

export const SelectDemoCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select defaultValue="starter">
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="starter">Starter</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="enterprise">Enterprise</SelectItem>
      </SelectContent>
    </Select>
  );
}`;
