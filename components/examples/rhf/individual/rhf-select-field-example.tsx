"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/ui/rhf-inputs";

const selectSchema = z.object({
  country: z.string().min(1, "Please select a country"),
});

type SelectFormValues = z.infer<typeof selectSchema>;

export function RhfSelectFieldDemo() {
  const { control, handleSubmit } = useForm<SelectFormValues>({
    resolver: zodResolver(selectSchema),
    defaultValues: { country: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <SelectField
        control={control}
        name="country"
        label="Country"
        placeholder="Select a country"
        required
        options={[
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfSelectFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  country: z.string().min(1, "Please select a country"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { country: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}>
      <SelectField
        control={control}
        name="country"
        label="Country"
        placeholder="Select a country"
        required
        options={[
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
