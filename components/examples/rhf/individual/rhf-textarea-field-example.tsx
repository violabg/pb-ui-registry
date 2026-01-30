"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { TextareaField } from "@/components/ui/rhf-inputs";

const textareaSchema = z.object({
  bio: z.string().max(500, "Bio must not exceed 500 characters"),
});

type TextareaFormValues = z.infer<typeof textareaSchema>;

export function RhfTextareaFieldDemo() {
  const { control, handleSubmit } = useForm<TextareaFormValues>({
    resolver: zodResolver(textareaSchema),
    defaultValues: { bio: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <TextareaField
        control={control}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        description="Max 500 characters"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfTextareaFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { TextareaField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  bio: z.string().max(500, "Bio must not exceed 500 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { bio: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <TextareaField
        control={control}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        description="Max 500 characters"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
