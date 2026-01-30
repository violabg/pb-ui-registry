"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { RatingField } from "@/components/ui/rhf-inputs/rating-field";

const schema = z.object({
  rating: z.number().min(1, "Please provide a rating"),
});

type FormValues = z.infer<typeof schema>;

export function RhfRatingFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { rating: 0 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-sm"
    >
      <RatingField
        control={control}
        name="rating"
        label="Your Rating"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfRatingFieldDemoCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { RatingField } from "@/components/ui/rhf-inputs/rating-field";

const schema = z.object({
  rating: z.number().min(1, "Please provide a rating"),
});

type FormValues = z.infer<typeof schema>;

export function RhfRatingFieldDemo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { rating: 0 },
  });

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <RatingField
        control={control}
        name="rating"
        label="Your Rating"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
