"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CheckboxGroupField } from "@/components/ui/rhf-inputs/checkbox-group-field";

const schema = z.object({
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

type FormValues = z.infer<typeof schema>;

export function RhfCheckboxGroupFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interests: [] },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <CheckboxGroupField
        control={control}
        name="interests"
        label="Interests"
        required
        options={[
          { value: "sports", label: "Sports" },
          { value: "music", label: "Music" },
          { value: "movies", label: "Movies" },
          { value: "books", label: "Books" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfCheckboxGroupFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CheckboxGroupField } from "@/components/ui/rhf-inputs/checkbox-group-field";

const schema = z.object({
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

type FormValues = z.infer<typeof schema>;

export function RhfCheckboxGroupFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interests: [] },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <CheckboxGroupField
        control={control}
        name="interests"
        label="Interests"
        required
        options={[
          { value: "sports", label: "Sports" },
          { value: "music", label: "Music" },
          { value: "movies", label: "Movies" },
          { value: "books", label: "Books" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
