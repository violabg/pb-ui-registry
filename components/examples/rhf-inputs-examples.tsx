"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  CheckboxField,
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

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  email: z.email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  bio: z
    .string()
    .max(500, "Bio must not exceed 500 characters")
    .min(3, "Username must be at least 3 characters"),
  country: z.string().min(1, "Please select a country"),
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
  experience: z.number().min(0).max(20),
  role: z.enum(["developer", "designer", "manager"]),
  notifications: z.boolean(),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

type FormValues = z.infer<typeof formSchema>;

export function RhfInputsDemo() {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      bio: "",
      country: "",
      skills: [],
      tags: [],
      experience: 0,
      role: "developer",
      notifications: false,
      terms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    setSubmittedData(data);
  };

  return (
    <div className="space-y-8 w-full max-w-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <InputField
            control={control}
            name="username"
            label="Username"
            placeholder="Enter your username"
            required
          />
          <InputField
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <PasswordField
          control={control}
          name="password"
          label="Password"
          placeholder="Enter a secure password"
          required
        />

        <TextareaField
          control={control}
          name="bio"
          label="Bio"
          placeholder="Tell us about yourself..."
          description="Max 500 characters"
          required
        />

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
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
              { value: "de", label: "Germany" },
              { value: "fr", label: "France" },
            ]}
          />

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
              { value: "python", label: "Python" },
              { value: "design", label: "UI/UX Design" },
            ]}
          />
        </div>

        <InputWithTagField
          control={control}
          name="tags"
          label="Tags"
          placeholder="Type and press Enter to add tags"
          required
        />

        <SliderField
          control={control}
          name="experience"
          label="Years of Experience"
          min={0}
          max={20}
          step={1}
          showValue
          valueFormatter={(val) => `${val} years`}
        />

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

        <div className="space-y-4">
          <SwitchField
            control={control}
            name="notifications"
            label="Email Notifications"
            description="Receive updates about new features"
          />

          <CheckboxField
            control={control}
            name="terms"
            label="I accept the terms and conditions"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Form
        </Button>
      </form>

      {submittedData && (
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="mb-2 font-semibold text-sm">Submitted Data:</h3>
          <pre className="overflow-auto text-muted-foreground text-xs">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export const RhfInputsDemoCode = `import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  CheckboxField,
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

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  bio: z.string().max(500, "Bio must not exceed 500 characters").optional(),
  country: z.string().min(1, "Please select a country"),
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
  experience: z.number().min(0).max(20),
  role: z.enum(["developer", "designer", "manager"]),
  notifications: z.boolean(),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

type FormValues = z.infer<typeof formSchema>;

export function RhfInputsDemo() {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      bio: "",
      country: "",
      skills: [],
      tags: [],
      experience: 0,
      role: "developer",
      notifications: false,
      terms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    setSubmittedData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <InputField
          control={control}
          name="username"
          label="Username"
          placeholder="Enter your username"
          required
        />
        <InputField
          control={control}
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <PasswordField
        control={control}
        name="password"
        label="Password"
        placeholder="Enter a secure password"
        required
      />

      <TextareaField
        control={control}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        description="Max 500 characters"
      />

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
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
      </div>

      <InputWithTagField
        control={control}
        name="tags"
        label="Tags"
        placeholder="Type and press Enter to add tags"
        required
      />

      <SliderField
        control={control}
        name="experience"
        label="Years of Experience"
        min={0}
        max={20}
        step={1}
        showValue
        valueFormatter={(val) => \`\${val} years\`}
      />

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

      <SwitchField
        control={control}
        name="notifications"
        label="Email Notifications"
        description="Receive updates about new features"
      />

      <CheckboxField
        control={control}
        name="terms"
        label="I accept the terms and conditions"
        required
      />

      <Button type="submit" className="w-full">
        Submit Form
      </Button>
    </form>
  );
}`;
