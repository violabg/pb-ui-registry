"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { ColorPickerField } from "@/components/ui/rhf-inputs/color-picker-field";

const schema = z.object({
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid hex color"),
});

type FormValues = z.infer<typeof schema>;

export function RhfColorPickerFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { color: "#6366f1" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <ColorPickerField
        control={control}
        name="color"
        label="Brand Color"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfColorPickerFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { ColorPickerField } from "@/components/ui/rhf-inputs/color-picker-field";

const schema = z.object({
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid hex color"),
});

type FormValues = z.infer<typeof schema>;

export function RhfColorPickerFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { color: "#6366f1" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <ColorPickerField
        control={control}
        name="color"
        label="Brand Color"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
