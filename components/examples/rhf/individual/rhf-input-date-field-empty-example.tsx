"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { InputDateField } from "@/components/ui/rhf-inputs";

const emptyDateSchema = z.object({
  emptyDate: z.preprocess(
    (value) => (typeof value === "string" ? new Date(value) : value),
    z.date().optional(),
  ),
});

type EmptyDateFormInput = z.input<typeof emptyDateSchema>;
type EmptyDateFormOutput = z.output<typeof emptyDateSchema>;

export function RhfInputDateFieldEmptyDemo() {
  const { control, handleSubmit } = useForm<EmptyDateFormInput>({
    resolver: zodResolver(emptyDateSchema) as Resolver<EmptyDateFormInput>,
    defaultValues: {
      emptyDate: undefined,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) =>
        console.log(data as EmptyDateFormOutput),
      )}
      className="space-y-4 max-w-sm"
    >
      <InputDateField control={control} name="emptyDate" label="Empty Date" />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfInputDateFieldEmptyDemoCode = `import { Resolver, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { InputDateField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  emptyDate: z.preprocess(
    (value) => (typeof value === "string" ? new Date(value) : value),
    z.date().optional(),
  ),
});

type FormInput = z.input<typeof schema>;
type FormOutput = z.output<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormInput>({
    resolver: zodResolver(schema) as Resolver<FormInput>,
    defaultValues: {
      emptyDate: undefined,
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data as FormOutput))}>
      <InputDateField
        control={control}
        name="emptyDate"
        label="Empty Date"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
