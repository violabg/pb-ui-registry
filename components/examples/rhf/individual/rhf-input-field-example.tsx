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
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
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

