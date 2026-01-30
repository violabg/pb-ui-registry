"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/rhf-inputs";

const inputSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores"),
});

type InputFormValues = z.infer<typeof inputSchema>;

export function RhfInputFieldDemo() {
  const { control, handleSubmit } = useForm<InputFormValues>({
    resolver: zodResolver(inputSchema),
    defaultValues: { username: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <InputField
        control={control}
        name="username"
        label="Username"
        placeholder="Enter your username"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfInputFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <InputField
        control={control}
        name="username"
        label="Username"
        placeholder="Enter your username"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
