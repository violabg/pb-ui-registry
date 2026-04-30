"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { PasswordField } from "@/components/ui/rhf-inputs";

const passwordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Must contain lowercase letter")
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[0-9]/, "Must contain number"),
});

type PasswordFormValues = z.infer<typeof passwordSchema>;

export function RhfPasswordFieldDemo() {
  const { control, handleSubmit } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <PasswordField
        control={control}
        name="password"
        label="Password"
        placeholder="Enter a secure password"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

