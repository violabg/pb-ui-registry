"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { InputDateField } from "@/components/ui/rhf-inputs";

const dateSchema = z.object({
  birthDate: z.preprocess(
    (value) => (typeof value === "string" ? new Date(value) : value),
    z.date(),
  ),
  hireDate: z.preprocess(
    (value) => (typeof value === "string" ? new Date(value) : value),
    z.date(),
  ),
});

type DateFormInput = z.input<typeof dateSchema>;
type DateFormOutput = z.output<typeof dateSchema>;

export function RhfInputDateFieldDefaultDemo() {
  const { control, handleSubmit } = useForm<DateFormInput>({
    resolver: zodResolver(dateSchema) as Resolver<DateFormInput>,
    defaultValues: {
      birthDate: new Date("1971-03-23T23:00:00.000Z"),
      hireDate: "2026-02-01",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data as DateFormOutput))}
      className="space-y-4 max-w-sm"
    >
      <InputDateField
        control={control}
        name="birthDate"
        label="Birth Date (Date)"
      />
      <InputDateField
        control={control}
        name="hireDate"
        label="Hire Date (String)"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfInputDateFieldDefaultDemoCode = `import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { InputDateField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  birthDate: z.preprocess(
    (value) => (typeof value === "string" ? new Date(value) : value),
    z.date(),
  ),
  hireDate: z.preprocess(
    (value) => (typeof value === "string" ? new Date(value) : value),
    z.date(),
  ),
});

type FormInput = z.input<typeof schema>;
type FormOutput = z.output<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormInput>({
    resolver: zodResolver(schema) as Resolver<FormInput>,
    defaultValues: {
      birthDate: new Date("2026-01-30"),
      hireDate: "2026-02-01",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data as FormOutput))}>
      <InputDateField
        control={control}
        name="birthDate"
        label="Birth Date (Date)"
      />
      <InputDateField
        control={control}
        name="hireDate"
        label="Hire Date (String)"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
