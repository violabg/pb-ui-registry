"use client";

import { FieldValues } from "react-hook-form";
import { ColorPicker, ColorPickerProps } from "../color-picker";
import { BaseController, BaseControllerProps } from "./base-controller";

type ColorPickerFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> &
  Omit<ColorPickerProps, "value" | "onChange">;

export function ColorPickerField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  showInput,
  disabled,
  className,
}: ColorPickerFieldProps<T>) {
  return (
    <BaseController
      control={control}
      name={name}
      label={label}
      required={required}
      description={description}
      disableFieldError={disableFieldError}
    >
      {({ field, fieldState, ariaDescribedBy }) => (
        <ColorPicker
          id={field.name}
          value={field.value ?? "#000000"}
          onChange={(value) => field.onChange(value)}
          showInput={showInput}
          disabled={disabled}
          aria-invalid={!!fieldState.error}
          aria-describedby={ariaDescribedBy}
          className={className}
        />
      )}
    </BaseController>
  );
}
