"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  DatePickerField,
  DateTimePickerField,
  RangeDatePickerField,
  TimePickerField,
} from "@/components/ui/rhf-inputs";

const datePickerSchema = z.object({
  eventDate: z.date().optional(),
});

type DatePickerValues = z.infer<typeof datePickerSchema>;

export function RhfDatePickerFieldDemo() {
  const { control, handleSubmit } = useForm<DatePickerValues>({
    resolver: zodResolver(datePickerSchema),
    defaultValues: { eventDate: undefined },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <DatePickerField
        control={control}
        name="eventDate"
        label="Event Date"
        placeholder="Pick a date"
        calendarProps={{ captionLayout: "dropdown" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfDatePickerFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { DatePickerField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  eventDate: z.date().optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { eventDate: undefined },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <DatePickerField
        control={control}
        name="eventDate"
        label="Event Date"
        placeholder="Pick a date"
        calendarProps={{ captionLayout: "dropdown" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

export function RhfDatePickerFieldDefaultValuesDemo() {
  const { control, handleSubmit } = useForm<DatePickerValues>({
    resolver: zodResolver(datePickerSchema),
    defaultValues: { eventDate: new Date("2026-02-01") },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <DatePickerField
        control={control}
        name="eventDate"
        label="Event Date"
        placeholder="Pick a date"
        calendarProps={{ captionLayout: "dropdown" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfDatePickerFieldDefaultValuesDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { DatePickerField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  eventDate: z.date().optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { eventDate: new Date("2026-02-01") },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <DatePickerField
        control={control}
        name="eventDate"
        label="Event Date"
        placeholder="Pick a date"
        calendarProps={{ captionLayout: "dropdown" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

const rangeSchema = z.object({
  travelRange: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .optional(),
});

type RangeValues = z.infer<typeof rangeSchema>;

export function RhfRangeDatePickerFieldDemo() {
  const { control, handleSubmit } = useForm<RangeValues>({
    resolver: zodResolver(rangeSchema),
    defaultValues: { travelRange: undefined },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <RangeDatePickerField
        control={control}
        name="travelRange"
        label="Travel Dates"
        placeholder="Pick a date range"
        calendarProps={{ numberOfMonths: 2 }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfRangeDatePickerFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { RangeDatePickerField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  travelRange: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { travelRange: undefined },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <RangeDatePickerField
        control={control}
        name="travelRange"
        label="Travel Dates"
        placeholder="Pick a date range"
        calendarProps={{ numberOfMonths: 2 }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

export function RhfRangeDatePickerFieldDefaultValuesDemo() {
  const { control, handleSubmit } = useForm<RangeValues>({
    resolver: zodResolver(rangeSchema),
    defaultValues: {
      travelRange: {
        from: new Date("2026-02-01"),
        to: new Date("2026-02-07"),
      },
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <RangeDatePickerField
        control={control}
        name="travelRange"
        label="Travel Dates"
        placeholder="Pick a date range"
        calendarProps={{ numberOfMonths: 2 }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfRangeDatePickerFieldDefaultValuesDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { RangeDatePickerField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  travelRange: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      travelRange: {
        from: new Date("2026-02-01"),
        to: new Date("2026-02-07"),
      },
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <RangeDatePickerField
        control={control}
        name="travelRange"
        label="Travel Dates"
        placeholder="Pick a date range"
        calendarProps={{ numberOfMonths: 2 }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

const timeSchema = z.object({
  startTime: z.string().optional(),
});

type TimeValues = z.infer<typeof timeSchema>;

export function RhfTimePickerFieldDemo() {
  const { control, handleSubmit } = useForm<TimeValues>({
    resolver: zodResolver(timeSchema),
    defaultValues: { startTime: undefined },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <TimePickerField
        control={control}
        name="startTime"
        label="Start Time"
        showSeconds
        step={1}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfTimePickerFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { TimePickerField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  startTime: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { startTime: undefined },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <TimePickerField
        control={control}
        name="startTime"
        label="Start Time"
        showSeconds
        step={1}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;

const dateTimeSchema = z.object({
  eventDateTime: z.date().optional(),
});

type DateTimeValues = z.infer<typeof dateTimeSchema>;

export function RhfDateTimePickerFieldDemo() {
  const { control, handleSubmit } = useForm<DateTimeValues>({
    resolver: zodResolver(dateTimeSchema),
    defaultValues: { eventDateTime: undefined },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <DateTimePickerField
        control={control}
        name="eventDateTime"
        label="Event Date & Time"
        placeholder="Pick a date & time"
        calendarProps={{ captionLayout: "dropdown" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfDateTimePickerFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { DateTimePickerField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  eventDateTime: z.date().optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { eventDateTime: undefined },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <DateTimePickerField
        control={control}
        name="eventDateTime"
        label="Event Date & Time"
        placeholder="Pick a date & time"
        calendarProps={{ captionLayout: "dropdown" }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
