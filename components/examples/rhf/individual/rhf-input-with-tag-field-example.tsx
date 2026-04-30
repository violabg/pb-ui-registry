"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { InputWithTagField } from "@/components/ui/rhf-inputs";

const tagSchema = z.object({
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
});

type TagFormValues = z.infer<typeof tagSchema>;

export function RhfInputWithTagFieldDemo() {
  const { control, handleSubmit } = useForm<TagFormValues>({
    resolver: zodResolver(tagSchema),
    defaultValues: { tags: [] },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <InputWithTagField
        control={control}
        name="tags"
        label="Tags"
        placeholder="Type and press Enter to add tags"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}


export function RhfInputWithTagFieldClearDemo() {
  const { control, handleSubmit } = useForm<TagFormValues>({
    resolver: zodResolver(tagSchema),
    defaultValues: { tags: ["React", "Next.js", "Tailwind"] },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <InputWithTagField
        control={control}
        name="tags"
        label="Tags with Clear"
        placeholder="Type and press Enter to add tags"
        showClear
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

