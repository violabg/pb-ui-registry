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
      onSubmit={handleSubmit((data) => console.log(data))}
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

export const RhfInputWithTagFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { InputWithTagField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { tags: [] },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
}`;
