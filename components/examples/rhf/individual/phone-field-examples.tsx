"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { PhoneField } from "@/components/ui/rhf-inputs/phone-field";

const schema = z.object({
  phone: z.string().min(8, "Phone number is required"),
});

type FormValues = z.infer<typeof schema>;

export function RhfPhoneFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { phone: "" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <PhoneField
        control={control}
        name="phone"
        label="Phone Number"
        defaultCountry="US"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfPhoneFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { PhoneField } from "@/components/ui/rhf-inputs/phone-field";

const schema = z.object({
  phone: z.string().min(8, "Phone number is required"),
});

type FormValues = z.infer<typeof schema>;

export function RhfPhoneFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { phone: "" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <PhoneField
        control={control}
        name="phone"
        label="Phone Number"
        defaultCountry="US"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
