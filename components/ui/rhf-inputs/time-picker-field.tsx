"use client";
import { InputHTMLAttributes } from "react";
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

function normalizeTimeValue(value: string, showSeconds: boolean) {
  if (!value) return value;
  if (!showSeconds) return value;
  if (/^\d{2}:\d{2}$/.test(value)) return `${value}:00`;
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
  onChange: (value: string | undefined) => void;
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
  const value = typeof rawValue === "string" ? rawValue : "";
  const inputValue = value;

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
        if (!normalizedValue) {
          onChange(undefined);
          return;
        }

        onChange(normalizedValue);
      }}
      onChange={(event) => {
        const nextInputValue = event.target.value;
        if (!nextInputValue) {
          if (!nextInputValue) {
            onChange(undefined);
          }
          return;
        }

        onChange(nextInputValue);
      }}
      step={step}
      {...inputProps}
    />
  );
}
