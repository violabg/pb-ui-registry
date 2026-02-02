"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { OTPField } from "@/components/ui/rhf-inputs/otp-field";

const schema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

type FormValues = z.infer<typeof schema>;

export function RhfOtpFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { otp: "" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <OTPField
        control={control}
        name="otp"
        label="Verification Code"
        length={6}
        required
      />
      <Button type="submit">Verify</Button>
    </form>
  );
}

export const RhfOtpFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { OTPField } from "@/components/ui/rhf-inputs/otp-field";

const schema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

type FormValues = z.infer<typeof schema>;

export function RhfOtpFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { otp: "" },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <OTPField
        control={control}
        name="otp"
        label="Verification Code"
        length={6}
        required
      />
      <Button type="submit">Verify</Button>
    </form>
  );
}`;
