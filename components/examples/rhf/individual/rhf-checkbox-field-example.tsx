"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CheckboxField } from "@/components/ui/rhf-inputs";

const checkboxSchema = z.object({
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

type CheckboxFormValues = z.infer<typeof checkboxSchema>;

export function RhfCheckboxFieldDemo() {
  const { control, handleSubmit } = useForm<CheckboxFormValues>({
    resolver: zodResolver(checkboxSchema),
    defaultValues: { terms: false },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <CheckboxField
        control={control}
        name="terms"
        label="I accept the terms and conditions"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

