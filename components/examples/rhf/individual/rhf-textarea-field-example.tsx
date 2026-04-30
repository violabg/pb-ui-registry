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
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
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

