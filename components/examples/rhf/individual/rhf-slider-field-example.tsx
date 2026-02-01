"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { SliderField } from "@/components/ui/rhf-inputs";

const sliderSchema = z.object({
  volume: z.number().min(0).max(100),
});

type SliderFormValues = z.infer<typeof sliderSchema>;

export function RhfSliderFieldDemo() {
  const { control, handleSubmit } = useForm<SliderFormValues>({
    resolver: zodResolver(sliderSchema),
    defaultValues: { volume: 50 },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <SliderField
        control={control}
        name="volume"
        label="Volume"
        min={0}
        max={100}
        step={1}
        showValue
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfSliderFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SliderField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  volume: z.number().min(0).max(100),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { volume: 50 },
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}>
      <SliderField
        control={control}
        name="volume"
        label="Volume"
        min={0}
        max={100}
        step={1}
        showValue
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
