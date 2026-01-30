"use client";

import { FieldValues } from "react-hook-form";
import { NumberInput, NumberInputProps } from "../number-input";
import { BaseController, BaseControllerProps } from "./base-controller";

type NumberFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> &
  Omit<NumberInputProps, "value" | "onChange" | "name" | "id">;

export function NumberField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  min,
  max,
  step,
  showControls,
  disabled,
  className,
  ...inputProps
}: NumberFieldProps<T>) {
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
        <NumberInput
          id={field.name}
          value={field.value ?? null}
          onChange={(value) => field.onChange(value)}
          min={min}
          max={max}
          step={step}
          showControls={showControls}
          disabled={disabled}
          aria-invalid={!!fieldState.error}
          aria-required={required}
          aria-describedby={
            fieldState.error ? `${field.name}-error` : undefined
          }
          className={className}
          {...inputProps}
        />
      )}
    </BaseController>
  );
}
