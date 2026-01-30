"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  CheckboxField,
  FileUploadField,
  InputDateField,
  InputField,
  InputWithTagField,
  MultiSelectField,
  PasswordField,
  RadioGroupField,
  SelectField,
  SliderField,
  SwitchField,
  TextareaField,
} from "@/components/ui/rhf-inputs";

// Input Field Example
const inputSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores"),
});

type InputFormValues = z.infer<typeof inputSchema>;

export function RhfInputFieldDemo() {
  const { control, handleSubmit } = useForm<InputFormValues>({
    resolver: zodResolver(inputSchema),
    defaultValues: { username: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <InputField
        control={control}
        name="username"
        label="Username"
        placeholder="Enter your username"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfInputFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <InputField
        control={control}
        name="username"
        label="Username"
        placeholder="Enter your username"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Checkbox Field Example
const checkboxSchema = z.object({
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

type CheckboxFormValues = z.infer<typeof checkboxSchema>;

export function RhfCheckboxFieldDemo() {
  const { control, handleSubmit } = useForm<CheckboxFormValues>({
    resolver: zodResolver(checkboxSchema),
    defaultValues: { terms: false },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <CheckboxField
        control={control}
        name="terms"
        label="I accept the terms and conditions"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfCheckboxFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { CheckboxField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { terms: false },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <CheckboxField
        control={control}
        name="terms"
        label="I accept the terms and conditions"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Select Field Example
const selectSchema = z.object({
  country: z.string().min(1, "Please select a country"),
});

type SelectFormValues = z.infer<typeof selectSchema>;

export function RhfSelectFieldDemo() {
  const { control, handleSubmit } = useForm<SelectFormValues>({
    resolver: zodResolver(selectSchema),
    defaultValues: { country: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <SelectField
        control={control}
        name="country"
        label="Country"
        placeholder="Select a country"
        required
        options={[
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfSelectFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SelectField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  country: z.string().min(1, "Please select a country"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { country: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <SelectField
        control={control}
        name="country"
        label="Country"
        placeholder="Select a country"
        required
        options={[
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Textarea Field Example
const textareaSchema = z.object({
  bio: z.string().max(500, "Bio must not exceed 500 characters"),
});

type TextareaFormValues = z.infer<typeof textareaSchema>;

export function RhfTextareaFieldDemo() {
  const { control, handleSubmit } = useForm<TextareaFormValues>({
    resolver: zodResolver(textareaSchema),
    defaultValues: { bio: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <TextareaField
        control={control}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        description="Max 500 characters"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfTextareaFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { TextareaField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  bio: z.string().max(500, "Bio must not exceed 500 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { bio: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <TextareaField
        control={control}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        description="Max 500 characters"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Radio Group Field Example
const radioSchema = z.object({
  role: z.enum(["developer", "designer", "manager"]),
});

type RadioFormValues = z.infer<typeof radioSchema>;

export function RhfRadioGroupFieldDemo() {
  const { control, handleSubmit } = useForm<RadioFormValues>({
    resolver: zodResolver(radioSchema),
    defaultValues: { role: "developer" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <RadioGroupField
        control={control}
        name="role"
        label="Role"
        required
        options={[
          { value: "developer", label: "Developer" },
          { value: "designer", label: "Designer" },
          { value: "manager", label: "Manager" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfRadioGroupFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { RadioGroupField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  role: z.enum(["developer", "designer", "manager"]),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { role: "developer" },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <RadioGroupField
        control={control}
        name="role"
        label="Role"
        required
        options={[
          { value: "developer", label: "Developer" },
          { value: "designer", label: "Designer" },
          { value: "manager", label: "Manager" },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Slider Field Example
const sliderSchema = z.object({
  volume: z.number().min(0).max(100),
});

type SliderFormValues = z.infer<typeof sliderSchema>;

export function RhfSliderFieldDemo() {
  const { control, handleSubmit } = useForm<SliderFormValues>({
    resolver: zodResolver(sliderSchema),
    defaultValues: { volume: 50 },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <SliderField
        control={control}
        name="volume"
        label="Volume"
        min={0}
        max={100}
        step={1}
        showValue
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfSliderFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SliderField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  volume: z.number().min(0).max(100),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { volume: 50 },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <SliderField
        control={control}
        name="volume"
        label="Volume"
        min={0}
        max={100}
        step={1}
        showValue
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Switch Field Example
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

// Password Field Example
const passwordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Must contain lowercase letter")
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[0-9]/, "Must contain number"),
});

type PasswordFormValues = z.infer<typeof passwordSchema>;

export function RhfPasswordFieldDemo() {
  const { control, handleSubmit } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "" },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <PasswordField
        control={control}
        name="password"
        label="Password"
        placeholder="Enter a secure password"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfPasswordFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { PasswordField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Must contain lowercase letter")
    .regex(/[A-Z]/, "Must contain uppercase letter")
    .regex(/[0-9]/, "Must contain number"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { password: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <PasswordField
        control={control}
        name="password"
        label="Password"
        placeholder="Enter a secure password"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Input with Tag Field Example
const tagSchema = z.object({
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
});

type TagFormValues = z.infer<typeof tagSchema>;

export function RhfInputWithTagFieldDemo() {
  const { control, handleSubmit } = useForm<TagFormValues>({
    resolver: zodResolver(tagSchema),
    defaultValues: { tags: [] },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <InputWithTagField
        control={control}
        name="tags"
        label="Tags"
        placeholder="Type and press Enter to add tags"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfInputWithTagFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { InputWithTagField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { tags: [] },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <InputWithTagField
        control={control}
        name="tags"
        label="Tags"
        placeholder="Type and press Enter to add tags"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

// Multi Select Field Example
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
      onSubmit={handleSubmit((data) => console.log(data))}
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
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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

// Input Date Field Example (Empty)
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

// Input Date Field Example (Default Values)
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

// File Upload Field Example
const fileUploadSchema = z.object({
  resume: z.instanceof(File).optional(),
});

type FileUploadFormValues = z.infer<typeof fileUploadSchema>;

export function RhfFileUploadFieldDemo() {
  const { control, handleSubmit } = useForm<FileUploadFormValues>({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: { resume: undefined },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <FileUploadField
        control={control}
        name="resume"
        label="Resume"
        description="Upload your resume (PDF, DOC, DOCX)"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfFileUploadFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FileUploadField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  resume: z.instanceof(File).optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { resume: undefined },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FileUploadField
        control={control}
        name="resume"
        label="Resume"
        description="Upload your resume (PDF, DOC, DOCX)"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
