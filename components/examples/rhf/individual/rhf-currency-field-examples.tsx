"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CurrencyField } from "@/components/ui/rhf-inputs/currency-field";

const schema = z.object({
  amount: z.number().min(0.01, "Amount must be at least $0.01"),
});

type FormValues = z.infer<typeof schema>;

export function RhfCurrencyFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { amount: 0 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <CurrencyField
        control={control}
        name="amount"
        label="Amount"
        currency="USD"
        placeholder="0.00"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfCurrencyFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CurrencyField } from "@/components/ui/rhf-inputs/currency-field";

const schema = z.object({
  amount: z.number().min(0.01, "Amount must be at least $0.01"),
});

type FormValues = z.infer<typeof schema>;

export function RhfCurrencyFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { amount: 0 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <CurrencyField
        control={control}
        name="amount"
        label="Amount"
        currency="USD"
        placeholder="0.00"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

const euroSchema = z.object({
  amount: z.number().min(0.01, "Amount must be at least €0.01"),
});

type EuroFormValues = z.infer<typeof euroSchema>;

export function RhfCurrencyFieldEuroDemo() {
  const { control, handleSubmit } = useForm<EuroFormValues>({
    resolver: zodResolver(euroSchema),
    defaultValues: { amount: 0 },
  });

  const onSubmit = (data: EuroFormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <CurrencyField
        control={control}
        name="amount"
        label="Amount"
        currency="EUR"
        locale="it-IT"
        placeholder="0"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfCurrencyFieldEuroDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CurrencyField } from "@/components/ui/rhf-inputs/currency-field";

const schema = z.object({
  amount: z.number().min(0.01, "Amount must be at least €0.01"),
});

type FormValues = z.infer<typeof schema>;

export function RhfCurrencyFieldEuroDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { amount: 0 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <CurrencyField
        control={control}
        name="amount"
        label="Amount"
        currency="EUR"
        locale="it-IT"
        placeholder="0"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

const centsSchema = z.object({
  price: z.number().min(0.01, "Price must be at least $0.01"),
});

type CentsFormValues = z.infer<typeof centsSchema>;

export function RhfCurrencyFieldCentsDemo() {
  const { control, handleSubmit } = useForm<CentsFormValues>({
    resolver: zodResolver(centsSchema),
    defaultValues: { price: 0 },
  });

  const onSubmit = (data: CentsFormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <CurrencyField
        control={control}
        name="price"
        label="Price"
        currency="EUR"
        locale="it-IT"
        placeholder="0,00"
        allowCents
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfCurrencyFieldCentsDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CurrencyField } from "@/components/ui/rhf-inputs/currency-field";

const schema = z.object({
  price: z.number().min(0.01, "Price must be at least $0.01"),
});

type FormValues = z.infer<typeof schema>;

export function RhfCurrencyFieldCentsDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { price: 0 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <CurrencyField
        control={control}
        name="price"
        label="Price"
        currency="EUR"
        locale="it-IT"
        placeholder="0,00"
        allowCents
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
