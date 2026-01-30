"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { ComboboxField } from "@/components/ui/rhf-inputs/combobox-field";

const schema = z.object({
  framework: z.string().min(1, "Please select a framework"),
});

type FormValues = z.infer<typeof schema>;

export function RhfComboboxFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { framework: "" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <ComboboxField
        control={control}
        name="framework"
        label="Framework"
        placeholder="Search frameworks..."
        required
        options={[
          { value: "react", label: "React" },
          { value: "vue", label: "Vue" },
          { value: "angular", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "solid", label: "Solid" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfComboboxFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { ComboboxField } from "@/components/ui/rhf-inputs/combobox-field";

const schema = z.object({
  framework: z.string().min(1, "Please select a framework"),
});

type FormValues = z.infer<typeof schema>;

export function RhfComboboxFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { framework: "" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <ComboboxField
        control={control}
        name="framework"
        label="Framework"
        placeholder="Search frameworks..."
        required
        options={[
          { value: "react", label: "React" },
          { value: "vue", label: "Vue" },
          { value: "angular", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "solid", label: "Solid" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
