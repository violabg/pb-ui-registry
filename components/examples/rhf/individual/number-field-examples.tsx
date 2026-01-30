"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { NumberField } from "@/components/ui/rhf-inputs/number-field";

const schema = z.object({
  quantity: z.number().min(1, "Minimum 1").max(100, "Maximum 100"),
});

type FormValues = z.infer<typeof schema>;

export function RhfNumberFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { quantity: 1 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <NumberField
        control={control}
        name="quantity"
        label="Quantity"
        min={1}
        max={100}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfNumberFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { NumberField } from "@/components/ui/rhf-inputs/number-field";

const schema = z.object({
  quantity: z.number().min(1, "Minimum 1").max(100, "Maximum 100"),
});

type FormValues = z.infer<typeof schema>;

export function RhfNumberFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { quantity: 1 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <NumberField
        control={control}
        name="quantity"
        label="Quantity"
        min={1}
        max={100}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
