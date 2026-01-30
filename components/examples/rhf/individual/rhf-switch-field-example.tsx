"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { SwitchField } from "@/components/ui/rhf-inputs";

const switchSchema = z.object({
  notifications: z.boolean(),
});

type SwitchFormValues = z.infer<typeof switchSchema>;

export function RhfSwitchFieldDemo() {
  const { control, handleSubmit } = useForm<SwitchFormValues>({
    resolver: zodResolver(switchSchema),
    defaultValues: { notifications: false },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <SwitchField
        control={control}
        name="notifications"
        label="Email Notifications"
        description="Receive updates about new features"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfSwitchFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SwitchField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  notifications: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { notifications: false },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <SwitchField
        control={control}
        name="notifications"
        label="Email Notifications"
        description="Receive updates about new features"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
