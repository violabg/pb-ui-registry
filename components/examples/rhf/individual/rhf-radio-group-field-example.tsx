"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { RadioGroupField } from "@/components/ui/rhf-inputs";

const radioSchema = z.object({
  role: z.enum(["developer", "designer", "manager"]),
});

type RadioFormValues = z.infer<typeof radioSchema>;

export function RhfRadioGroupFieldDemo() {
  const { control, handleSubmit } = useForm<RadioFormValues>({
    resolver: zodResolver(radioSchema),
    defaultValues: { role: "developer" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <RadioGroupField
        control={control}
        name="role"
        label="Role"
        required
        options={[
          { value: "developer", label: "Developer" },
          { value: "designer", label: "Designer" },
          { value: "manager", label: "Manager" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfRadioGroupFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { RadioGroupField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  role: z.enum(["developer", "designer", "manager"]),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { role: "developer" },
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}>
      <RadioGroupField
        control={control}
        name="role"
        label="Role"
        required
        options={[
          { value: "developer", label: "Developer" },
          { value: "designer", label: "Designer" },
          { value: "manager", label: "Manager" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
