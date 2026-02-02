"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { NumberField } from "@/components/ui/rhf-inputs/number-field";

// Default example - integers only
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

// Decimal example - with step
const decimalSchema = z.object({
  rating: z.number().min(0, "Minimum 0").max(10, "Maximum 10"),
});

type DecimalFormValues = z.infer<typeof decimalSchema>;

export function RhfNumberFieldDecimalDemo() {
  const { control, handleSubmit } = useForm<DecimalFormValues>({
    resolver: zodResolver(decimalSchema),
    defaultValues: { rating: 5.0 },
  });

  const onSubmit = (data: DecimalFormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <NumberField
        control={control}
        name="rating"
        label="Rating"
        min={0}
        max={10}
        step={0.1}
        allowDecimals
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfNumberFieldDecimalDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { NumberField } from "@/components/ui/rhf-inputs/number-field";

const schema = z.object({
  rating: z.number().min(0, "Minimum 0").max(10, "Maximum 10"),
});

type FormValues = z.infer<typeof schema>;

export function RhfNumberFieldDecimalDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { rating: 5.0 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <NumberField
        control={control}
        name="rating"
        label="Rating"
        min={0}
        max={10}
        step={0.1}
        allowDecimals
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Locale example - Italian locale with comma separator
const localeSchema = z.object({
  price: z.number().min(0, "Minimum 0"),
});

type LocaleFormValues = z.infer<typeof localeSchema>;

export function RhfNumberFieldLocaleDemo() {
  const { control, handleSubmit } = useForm<LocaleFormValues>({
    resolver: zodResolver(localeSchema),
    defaultValues: { price: 1234.56 },
  });

  const onSubmit = (data: LocaleFormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <NumberField
        control={control}
        name="price"
        label="Price (Italian Locale)"
        min={0}
        allowDecimals
        decimalPlaces={4}
        locale="it-IT"
        description="Uses comma as decimal separator. Try typing 12345,2369"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfNumberFieldLocaleDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { NumberField } from "@/components/ui/rhf-inputs/number-field";

const schema = z.object({
  price: z.number().min(0, "Minimum 0"),
});

type FormValues = z.infer<typeof schema>;

export function RhfNumberFieldLocaleDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { price: 1234.56 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <NumberField
        control={control}
        name="price"
        label="Price (Italian Locale)"
        min={0}
        allowDecimals
        decimalPlaces={4}
        locale="it-IT"
        description="Uses comma as decimal separator. Try typing 12345,2369"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
