"use client";

import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import PasswordInput from "../password-input";
import { BaseController, BaseControllerProps } from "./base-controller";

type FieldInputProps<T extends FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "id"
> &
  Omit<BaseControllerProps<T>, "children">;

export function PasswordField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disableFieldError = false,
  required,
  ...inputProps
}: FieldInputProps<T>) {
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
        <PasswordInput
          id={field.name}
          aria-invalid={!!fieldState.error}
          aria-required={required}
          aria-describedby={ariaDescribedBy}
          {...field}
          {...inputProps}
          className={`${inputProps.className || ""}`}
        />
      )}
    </BaseController>
  );
}
