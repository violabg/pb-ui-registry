"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>@</InputGroupAddon>
      <InputGroupInput placeholder="username" />
      <InputGroupButton>Search</InputGroupButton>
    </InputGroup>
  );
}

export const InputGroupDemoCode = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>@</InputGroupAddon>
      <InputGroupInput placeholder="username" />
      <InputGroupButton>Search</InputGroupButton>
    </InputGroup>
  );
}`;
