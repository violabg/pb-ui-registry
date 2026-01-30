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
