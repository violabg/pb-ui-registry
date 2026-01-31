import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Input } from "../input";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { BaseController, BaseControllerProps } from "./base-controller";

type DateTimePickerFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  placeholder?: string;
  formatString?: string;
  calendarProps?: React.ComponentProps<typeof Calendar>;
  buttonProps?: React.ComponentProps<typeof Button>;
  timeInputProps?: Omit<
    React.ComponentProps<typeof Input>,
    "id" | "name" | "type" | "value" | "onChange" | "onBlur" | "disabled"
  >;
  showSeconds?: boolean;
};

function normalizeTimeValue(value: string, showSeconds: boolean) {
  if (!value) return value;
  if (!showSeconds) return value;
  if (/^\d{2}:\d{2}$/.test(value)) return `${value}:00`;
  return value;
}

function applyTimeToDate(baseDate: Date, timeValue: string) {
  const [hours = "0", minutes = "0", seconds = "0"] = timeValue.split(":");
  const nextDate = new Date(baseDate);
  nextDate.setHours(Number(hours), Number(minutes), Number(seconds), 0);
  return nextDate;
}

export function DateTimePickerField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disableFieldError = false,
  required,
  placeholder = "Pick a date & time",
  formatString,
  calendarProps,
  buttonProps,
  timeInputProps,
  showSeconds = false,
}: DateTimePickerFieldProps<T>) {
  const formatter = new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const {
    className: buttonClassName,
    variant,
    ...restButtonProps
  } = buttonProps ?? {};
  const {
    className: timeInputClassName,
    step,
    ...restTimeInputProps
  } = timeInputProps ?? {};
  const timeFormat = showSeconds ? "HH:mm:ss" : "HH:mm";
  const resolvedStep =
    typeof step === "number" ? step : showSeconds ? 1 : undefined;

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
        const dateValue = field.value as Date | undefined;
        const hasValue = Boolean(dateValue);
        const timeValue = dateValue ? format(dateValue, timeFormat) : "";
        const displayValue = dateValue
          ? formatString
            ? format(dateValue, formatString)
            : `${formatter.format(dateValue)} ${format(dateValue, timeFormat)}`
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
              {displayValue ? (
                <span>{displayValue}</span>
              ) : (
                <span>{placeholder}</span>
              )}
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto">
              <div className="flex flex-col">
                <Calendar
                  autoFocus
                  {...calendarProps}
                  mode="single"
                  selected={dateValue}
                  onSelect={(selectedDate) => {
                    if (!selectedDate) {
                      field.onChange(undefined);
                      return;
                    }

                    const nextDate = applyTimeToDate(
                      selectedDate,
                      timeValue || "00:00:00",
                    );
                    field.onChange(nextDate);
                  }}
                />
                <div className="p-3 border-t">
                  <span className="block mb-2 text-muted-foreground text-xs">
                    Time
                  </span>
                  <Input
                    id={`${field.name}-time`}
                    name={`${field.name}-time`}
                    type="time"
                    aria-invalid={!!fieldState.error}
                    aria-required={required}
                    aria-describedby={ariaDescribedBy}
                    disabled={!dateValue}
                    value={timeValue}
                    onBlur={() => {
                      field.onBlur();

                      const normalizedValue = normalizeTimeValue(
                        timeValue,
                        showSeconds,
                      );
                      if (!normalizedValue) {
                        field.onChange(undefined);
                        return;
                      }

                      if (dateValue) {
                        field.onChange(
                          applyTimeToDate(dateValue, normalizedValue),
                        );
                      }
                    }}
                    onChange={(event) => {
                      const nextInputValue = event.target.value;
                      if (!nextInputValue) {
                        field.onChange(undefined);
                        return;
                      }

                      if (!dateValue) return;

                      field.onChange(
                        applyTimeToDate(dateValue, nextInputValue),
                      );
                    }}
                    step={resolvedStep}
                    className={timeInputClassName}
                    {...restTimeInputProps}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        );
      }}
    </BaseController>
  );
}
