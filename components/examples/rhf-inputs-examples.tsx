"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

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

type FormValues = {
  username: string;
  email: string;
  password: string;
  bio: string;
  country: string;
  skills: string[];
  tags: string[];
  experience: number;
  role: "developer" | "designer" | "manager";
  notifications: boolean;
  terms: boolean;
};

export function RhfInputsDemo() {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const { control, handleSubmit } = useForm<FormValues>({
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

type FormValues = {
  username: string;
  email: string;
  password: string;
  bio: string;
  country: string;
  skills: string[];
  tags: string[];
  experience: number;
  role: "developer" | "designer" | "manager";
  notifications: boolean;
  terms: boolean;
};

export function RhfInputsDemo() {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const { control, handleSubmit } = useForm<FormValues>({
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
