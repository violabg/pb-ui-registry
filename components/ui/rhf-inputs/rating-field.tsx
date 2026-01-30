"use client";

import { FieldValues } from "react-hook-form";
import { Rating, RatingProps } from "../rating";
import { BaseController, BaseControllerProps } from "./base-controller";

type RatingFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> &
  Omit<RatingProps, "value" | "onChange">;

export function RatingField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  max,
  disabled,
  readOnly,
  size,
  className,
}: RatingFieldProps<T>) {
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
        <Rating
          value={field.value ?? 0}
          onChange={(value) => field.onChange(value)}
          max={max}
          disabled={disabled}
          readOnly={readOnly}
          size={size}
          aria-invalid={!!fieldState.error}
          className={className}
        />
      )}
    </BaseController>
  );
}
