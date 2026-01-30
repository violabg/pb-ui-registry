"use client";
import { format, isValid } from "date-fns";
import { InputHTMLAttributes, useEffect, useState } from "react";
import { ControllerFieldState, FieldValues } from "react-hook-form";

import { Input } from "../input";
import { BaseController, BaseControllerProps } from "./base-controller";

type TimePickerFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id" | "type"> & {
    showSeconds?: boolean;
  };

function parseTimeValue(value: string) {
  if (!value) return null;
  const [hours, minutes, seconds] = value.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  return {
    hours,
    minutes,
    seconds: Number.isNaN(seconds) ? 0 : seconds,
  };
}

function normalizeTimeValue(value: string, showSeconds: boolean) {
  if (!value) return value;
  if (!showSeconds) return value;
  const parts = value.split(":");
  if (parts.length === 2) {
    return `${value}:00`;
  }
  return value;
}

export function TimePickerField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disableFieldError = false,
  required,
  showSeconds = false,
  ...inputProps
}: TimePickerFieldProps<T>) {
  const { step, ...restInputProps } = inputProps;
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
      {({ field, fieldState }) => (
        <TimePickerInput
          name={field.name}
          value={field.value}
          onBlur={field.onBlur}
          onChange={field.onChange}
          fieldState={fieldState}
          required={required}
          showSeconds={showSeconds}
          step={resolvedStep}
          inputProps={restInputProps}
        />
      )}
    </BaseController>
  );
}

type TimePickerInputProps<T extends FieldValues> = {
  name: string;
  value: T[keyof T] | undefined;
  onBlur: () => void;
  onChange: (value: Date | undefined) => void;
  fieldState: ControllerFieldState;
  required?: boolean;
  showSeconds: boolean;
  step?: number;
  inputProps: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "name" | "id" | "type"
  >;
};

function TimePickerInput<T extends FieldValues>({
  name,
  value: fieldValue,
  onBlur,
  onChange,
  fieldState,
  required,
  showSeconds,
  step,
  inputProps,
}: TimePickerInputProps<T>) {
  const rawValue = fieldValue as unknown;
  const value = rawValue instanceof Date ? rawValue : undefined;
  const formattedValue =
    value && isValid(value)
      ? format(value, showSeconds ? "HH:mm:ss" : "HH:mm")
      : "";
  const [inputValue, setInputValue] = useState(formattedValue);

  useEffect(() => {
    setInputValue(formattedValue);
  }, [formattedValue]);

  return (
    <Input
      id={name}
      name={name}
      type="time"
      aria-invalid={!!fieldState.error}
      aria-required={required}
      aria-describedby={fieldState.error ? `${name}-error` : undefined}
      value={inputValue}
      onBlur={() => {
        onBlur();

        const normalizedValue = normalizeTimeValue(inputValue, showSeconds);
        if (normalizedValue !== inputValue) {
          setInputValue(normalizedValue);
        }

        const nextValue = parseTimeValue(normalizedValue);
        if (!nextValue) {
          onChange(undefined);
          return;
        }

        const nextDate = new Date(value ?? new Date());
        nextDate.setHours(
          nextValue.hours,
          nextValue.minutes,
          nextValue.seconds,
          0,
        );
        onChange(nextDate);
      }}
      onChange={(event) => {
        const nextInputValue = event.target.value;
        setInputValue(nextInputValue);

        const normalizedValue = normalizeTimeValue(nextInputValue, showSeconds);
        const nextValue = parseTimeValue(normalizedValue);
        if (!nextValue) {
          if (!nextInputValue) {
            onChange(undefined);
          }
          return;
        }

        const nextDate = new Date(value ?? new Date());
        nextDate.setHours(
          nextValue.hours,
          nextValue.minutes,
          nextValue.seconds,
          0,
        );
        onChange(nextDate);
      }}
      step={step}
      {...inputProps}
    />
  );
}
