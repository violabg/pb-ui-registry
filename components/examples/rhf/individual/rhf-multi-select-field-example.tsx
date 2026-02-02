"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { MultiSelectField } from "@/components/ui/rhf-inputs";

const multiSelectSchema = z.object({
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
});

type MultiSelectFormValues = z.infer<typeof multiSelectSchema>;

export function RhfMultiSelectFieldDemo() {
  const { control, handleSubmit } = useForm<MultiSelectFormValues>({
    resolver: zodResolver(multiSelectSchema),
    defaultValues: { skills: [] },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <MultiSelectField
        control={control}
        name="skills"
        label="Skills"
        placeholder="Select skills"
        required
        options={[
          { value: "react", label: "React" },
          { value: "typescript", label: "TypeScript" },
          { value: "nodejs", label: "Node.js" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfMultiSelectFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { MultiSelectField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { skills: [] },
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}>
      <MultiSelectField
        control={control}
        name="skills"
        label="Skills"
        placeholder="Select skills"
        required
        options={[
          { value: "react", label: "React" },
          { value: "typescript", label: "TypeScript" },
          { value: "nodejs", label: "Node.js" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

export function RhfMultiSelectFieldClearDemo() {
  const { control, handleSubmit } = useForm<MultiSelectFormValues>({
    resolver: zodResolver(multiSelectSchema),
    defaultValues: { skills: ["react", "typescript"] },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      className="space-y-4 max-w-sm"
    >
      <MultiSelectField
        control={control}
        name="skills"
        label="Skills"
        placeholder="Select skills"
        required
        showClear
        options={[
          { value: "react", label: "React" },
          { value: "typescript", label: "TypeScript" },
          { value: "nodejs", label: "Node.js" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfMultiSelectFieldClearDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { MultiSelectField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { skills: ["react", "typescript"] },
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}>
      <MultiSelectField
        control={control}
        name="skills"
        label="Skills"
        placeholder="Select skills"
        required
        showClear
        options={[
          { value: "react", label: "React" },
          { value: "typescript", label: "TypeScript" },
          { value: "nodejs", label: "Node.js" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
