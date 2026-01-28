"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldDemo() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldContent>
          <Input id="email" type="email" placeholder="you@example.com" />
          <FieldDescription>
            We’ll only use this for account notifications.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
}

export const FieldDemoCode = `import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldDemo() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldContent>
          <Input id="email" type="email" placeholder="you@example.com" />
          <FieldDescription>
            We’ll only use this for account notifications.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
}`;
