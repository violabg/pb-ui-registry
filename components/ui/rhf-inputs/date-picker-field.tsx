import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { BaseController, BaseControllerProps } from "./base-controller";

type DatePickerFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  placeholder?: string;
  formatString?: string;
  calendarProps?: React.ComponentProps<typeof Calendar>;
  buttonProps?: React.ComponentProps<typeof Button>;
};

export function DatePickerField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disableFieldError = false,
  required,
  placeholder = "Pick a date",
  formatString,
  calendarProps,
  buttonProps,
}: DatePickerFieldProps<T>) {
  const formatter = React.useMemo(
    () =>
      new Intl.DateTimeFormat("it-IT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    [],
  );
  const {
    className: buttonClassName,
    variant,
    ...restButtonProps
  } = buttonProps ?? {};

  return (
    <BaseController
      control={control}
      name={name}
      label={label}
      required={required}
      description={description}
      disableFieldError={disableFieldError}
    >
      {({ field, fieldState }) => (
        <Popover>
          <PopoverTrigger
            render={
              <Button
                variant={variant ?? "outline"}
                data-empty={!field.value}
                aria-invalid={!!fieldState.error}
                aria-describedby={
                  fieldState.error ? `${field.name}-error` : undefined
                }
                className={cn(
                  "justify-start font-normal data-[empty=true]:text-muted-foreground text-left",
                  buttonClassName,
                  fieldState.error &&
                    "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/50 focus-visible:ring-[3px] aria-invalid:ring-0",
                )}
                {...restButtonProps}
              />
            }
          >
            <CalendarIcon className="me-2 size-4" />
            {field.value ? (
              formatString ? (
                format(field.value as Date, formatString)
              ) : (
                formatter.format(field.value as Date)
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto">
            <Calendar
              autoFocus
              {...calendarProps}
              mode="single"
              selected={field.value as Date | undefined}
              onSelect={(date) => field.onChange(date ?? undefined)}
            />
          </PopoverContent>
        </Popover>
      )}
    </BaseController>
  );
}
