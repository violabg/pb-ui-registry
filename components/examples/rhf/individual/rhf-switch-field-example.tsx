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
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
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

