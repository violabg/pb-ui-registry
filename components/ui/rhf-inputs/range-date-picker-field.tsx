import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";
import { FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { BaseController, BaseControllerProps } from "./base-controller";

type RangeDatePickerFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  placeholder?: string;
  formatString?: string;
  calendarProps?: React.ComponentProps<typeof Calendar>;
  buttonProps?: React.ComponentProps<typeof Button>;
};

export function RangeDatePickerField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disableFieldError = false,
  required,
  placeholder = "Pick a date range",
  formatString,
  calendarProps,
  buttonProps,
}: RangeDatePickerFieldProps<T>) {
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
      {({ field, fieldState, ariaDescribedBy }) => {
        const range = field.value as DateRange | undefined;
        const hasValue = Boolean(range?.from);
        const display = range?.from
          ? range.to
            ? formatString
              ? `${format(range.from, formatString)} - ${format(range.to, formatString)}`
              : `${formatter.format(range.from)} - ${formatter.format(range.to)}`
            : formatString
              ? format(range.from, formatString)
              : formatter.format(range.from)
          : null;

        return (
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant={variant ?? "outline"}
                  data-empty={!hasValue}
                  aria-invalid={!!fieldState.error}
                  aria-describedby={ariaDescribedBy}
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
              {display ? <span>{display}</span> : <span>{placeholder}</span>}
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto">
              <Calendar
                autoFocus
                {...calendarProps}
                mode="range"
                selected={range}
                onSelect={(nextRange) => field.onChange(nextRange ?? undefined)}
              />
            </PopoverContent>
          </Popover>
        );
      }}
    </BaseController>
  );
}
