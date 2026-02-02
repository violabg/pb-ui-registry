"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import {
  CheckboxField,
  CheckboxGroupField,
  ColorPickerField,
  ComboboxField,
  CurrencyField,
  DatePickerField,
  DateTimePickerField,
  FileUploadField,
  InputDateField,
  InputField,
  InputWithTagField,
  MultiSelectField,
  NumberField,
  OTPField,
  PasswordField,
  PhoneField,
  RadioGroupField,
  RangeDatePickerField,
  RatingField,
  SelectField,
  SliderField,
  SwitchField,
  TextareaField,
  TimePickerField,
} from "@/components/ui/rhf-inputs";

const formSchema = z.object({
  // Text inputs
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
    .min(3, "Bio must be at least 3 characters"),

  // Date/Time inputs
  birthDate: z.custom(
    (val) => val !== null && val !== undefined,
    "Birth date is required",
  ),
  eventDate: z.date({ message: "Event date is required" }),
  eventDateTime: z.date({ message: "Event date & time is required" }),
  travelDates: z.object({
    from: z.date({ message: "Start date is required" }),
    to: z.date({ message: "End date is required" }),
  }),
  startTime: z.string().min(1, "Start time is required"),

  // Select inputs
  country: z.string().min(1, "Please select a country"),
  framework: z.string().min(1, "Please select a framework"),
  skills: z.array(z.string()).min(1, "Please select at least one skill"),

  // Number inputs
  quantity: z.number().min(1).max(100),
  experience: z.number().min(0).max(20),
  price: z.number().min(0),
  rating: z.number().min(1, "Please provide a rating"),

  // Other inputs
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
  role: z.enum(["developer", "designer", "manager"]),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  resume: z.instanceof(File, { message: "Please upload your resume" }),
  phone: z.string().min(8, "Phone number is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
  brandColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid hex color"),

  // Boolean inputs
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
      birthDate: null,
      eventDate: undefined,
      eventDateTime: undefined,
      travelDates: undefined,
      startTime: "",
      password: "",
      bio: "",
      country: "",
      framework: "",
      skills: [],
      tags: [],
      quantity: 1,
      experience: 0,
      price: 0,
      rating: 0,
      role: "developer",
      interests: [],
      resume: undefined,
      phone: "",
      otp: "",
      brandColor: "#6366f1",
      notifications: false,
      terms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
    setSubmittedData(data);
  };

  return (
    <div className="space-y-8 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FieldGroup>
          {/* Text Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Text Inputs
            </FieldLegend>
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
          </FieldSet>

          {/* Date/Time Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Date & Time
            </FieldLegend>
            <InputDateField
              control={control}
              name="birthDate"
              label="Birth Date"
              required
            />

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <DatePickerField
                control={control}
                name="eventDate"
                label="Event Date"
                placeholder="Pick a date"
                calendarProps={{ captionLayout: "dropdown" }}
                required
              />
              <TimePickerField
                control={control}
                name="startTime"
                label="Start Time"
                showSeconds
                required
              />
            </div>

            <DateTimePickerField
              control={control}
              name="eventDateTime"
              label="Event Date & Time"
              placeholder="Pick a date & time"
              calendarProps={{ captionLayout: "dropdown" }}
              required
            />

            <RangeDatePickerField
              control={control}
              name="travelDates"
              label="Travel Dates"
              placeholder="Pick a date range"
              calendarProps={{ numberOfMonths: 2 }}
              required
            />
          </FieldSet>

          {/* Selection Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Selection
            </FieldLegend>
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

              <ComboboxField
                control={control}
                name="framework"
                label="Framework"
                placeholder="Search frameworks..."
                required
                options={[
                  { value: "react", label: "React" },
                  { value: "vue", label: "Vue" },
                  { value: "angular", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "solid", label: "Solid" },
                ]}
              />
            </div>

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

            <InputWithTagField
              control={control}
              name="tags"
              label="Tags"
              placeholder="Type and press Enter to add tags"
              required
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

            <CheckboxGroupField
              control={control}
              name="interests"
              label="Interests"
              required
              options={[
                { value: "sports", label: "Sports" },
                { value: "music", label: "Music" },
                { value: "movies", label: "Movies" },
                { value: "books", label: "Books" },
              ]}
            />
          </FieldSet>

          {/* Number Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Number Inputs
            </FieldLegend>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <NumberField
                control={control}
                name="quantity"
                label="Quantity"
                min={1}
                max={100}
                required
              />

              <CurrencyField
                control={control}
                name="price"
                label="Price"
                currency="USD"
                placeholder="0.00"
              />
            </div>

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

            <RatingField
              control={control}
              name="rating"
              label="Your Rating"
              required
            />
          </FieldSet>

          {/* Other Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Other Inputs
            </FieldLegend>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <PhoneField
                control={control}
                name="phone"
                label="Phone Number"
                defaultCountry="US"
                required
              />

              <ColorPickerField
                control={control}
                name="brandColor"
                label="Brand Color"
                required
              />
            </div>

            <OTPField
              control={control}
              name="otp"
              label="Verification Code"
              description="Enter the 6-digit code sent to your email"
              length={6}
              required
            />

            <FileUploadField
              control={control}
              name="resume"
              label="Resume"
              description="Upload your resume (PDF, DOC, DOCX)"
              required
            />
          </FieldSet>

          {/* Boolean Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Toggles
            </FieldLegend>
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
          </FieldSet>

          <Button type="submit">Submit Form</Button>
        </FieldGroup>
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

export const RhfInputsDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import {
  CheckboxField,
  CheckboxGroupField,
  ColorPickerField,
  ComboboxField,
  CurrencyField,
  DatePickerField,
  DateTimePickerField,
  FileUploadField,
  InputDateField,
  InputField,
  InputWithTagField,
  MultiSelectField,
  NumberField,
  OTPField,
  PasswordField,
  PhoneField,
  RadioGroupField,
  RangeDatePickerField,
  RatingField,
  SelectField,
  SliderField,
  SwitchField,
  TextareaField,
  TimePickerField,
} from "@/components/ui/rhf-inputs";

const formSchema = z.object({
  // Text inputs
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
    .min(3, "Bio must be at least 3 characters"),

  // Date/Time inputs
  birthDate: z.custom(
    (val) => val !== null && val !== undefined,
    "Birth date is required",
  ),
  eventDate: z.date({ message: "Event date is required" }),
  eventDateTime: z.date({ message: "Event date & time is required" }),
  travelDates: z.object({
    from: z.date({ message: "Start date is required" }),
    to: z.date({ message: "End date is required" }),
  }),
  startTime: z.string().min(1, "Start time is required"),

  // Select inputs
  country: z.string().min(1, "Please select a country"),
  framework: z.string().min(1, "Please select a framework"),
  skills: z.array(z.string()).min(1, "Please select at least one skill"),

  // Number inputs
  quantity: z.number().min(1).max(100),
  experience: z.number().min(0).max(20),
  price: z.number().min(0),
  rating: z.number().min(1, "Please provide a rating"),

  // Other inputs
  tags: z.array(z.string()).min(1, "Please add at least one tag"),
  role: z.enum(["developer", "designer", "manager"]),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  resume: z.instanceof(File, { message: "Please upload your resume" }),
  phone: z.string().min(8, "Phone number is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
  brandColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Invalid hex color"),

  // Boolean inputs
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
      birthDate: null,
      eventDate: undefined,
      eventDateTime: undefined,
      travelDates: undefined,
      startTime: "",
      password: "",
      bio: "",
      country: "",
      framework: "",
      skills: [],
      tags: [],
      quantity: 1,
      experience: 0,
      price: 0,
      rating: 0,
      role: "developer",
      interests: [],
      resume: undefined,
      phone: "",
      otp: "",
      brandColor: "#6366f1",
      notifications: false,
      terms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
    setSubmittedData(data);
  };

  return (
    <div className="space-y-8 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
          {/* Text Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Text Inputs
            </FieldLegend>
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
          </FieldSet>

          {/* Date/Time Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Date & Time
            </FieldLegend>
            <InputDateField
              control={control}
              name="birthDate"
              label="Birth Date"
              required
            />

            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <DatePickerField
                control={control}
                name="eventDate"
                label="Event Date"
                placeholder="Pick a date"
                calendarProps={{ captionLayout: "dropdown" }}
                required
              />
              <TimePickerField
                control={control}
                name="startTime"
                label="Start Time"
                showSeconds
                required
              />
            </div>

            <DateTimePickerField
              control={control}
              name="eventDateTime"
              label="Event Date & Time"
              placeholder="Pick a date & time"
              calendarProps={{ captionLayout: "dropdown" }}
              required
            />

            <RangeDatePickerField
              control={control}
              name="travelDates"
              label="Travel Dates"
              placeholder="Pick a date range"
              calendarProps={{ numberOfMonths: 2 }}
              required
            />
          </FieldSet>

          {/* Selection Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Selection
            </FieldLegend>
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

              <ComboboxField
                control={control}
                name="framework"
                label="Framework"
                placeholder="Search frameworks..."
                required
                options={[
                  { value: "react", label: "React" },
                  { value: "vue", label: "Vue" },
                  { value: "angular", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "solid", label: "Solid" },
                ]}
              />
            </div>

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

            <InputWithTagField
              control={control}
              name="tags"
              label="Tags"
              placeholder="Type and press Enter to add tags"
              required
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

            <CheckboxGroupField
              control={control}
              name="interests"
              label="Interests"
              required
              options={[
                { value: "sports", label: "Sports" },
                { value: "music", label: "Music" },
                { value: "movies", label: "Movies" },
                { value: "books", label: "Books" },
              ]}
            />
          </FieldSet>

          {/* Number Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Number Inputs
            </FieldLegend>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <NumberField
                control={control}
                name="quantity"
                label="Quantity"
                min={1}
                max={100}
                required
              />

              <CurrencyField
                control={control}
                name="price"
                label="Price"
                currency="USD"
                placeholder="0.00"
              />
            </div>

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

            <RatingField
              control={control}
              name="rating"
              label="Your Rating"
              required
            />
          </FieldSet>

          {/* Other Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Other Inputs
            </FieldLegend>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <PhoneField
                control={control}
                name="phone"
                label="Phone Number"
                defaultCountry="US"
                required
              />

              <ColorPickerField
                control={control}
                name="brandColor"
                label="Brand Color"
                required
              />
            </div>

            <OTPField
              control={control}
              name="otp"
              label="Verification Code"
              description="Enter the 6-digit code sent to your email"
              length={6}
              required
            />

            <FileUploadField
              control={control}
              name="resume"
              label="Resume"
              description="Upload your resume (PDF, DOC, DOCX)"
              required
            />
          </FieldSet>

          {/* Boolean Inputs Section */}
          <FieldSet>
            <FieldLegend className="font-semibold text-lg!">
              Toggles
            </FieldLegend>
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
          </FieldSet>

          <Button type="submit">Submit Form</Button>
        </FieldGroup>
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
}`;
