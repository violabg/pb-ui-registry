"use client";

import { FieldValues } from "react-hook-form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../input-otp";
import { BaseController, BaseControllerProps } from "./base-controller";

type OTPFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  /** Number of OTP digits */
  length?: number;
  /** Pattern for input validation (e.g., /^[0-9]*$/) */
  pattern?: RegExp;
  disabled?: boolean;
  className?: string;
};

export function OTPField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  length = 6,
  pattern,
  disabled = false,
  className,
}: OTPFieldProps<T>) {
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
        <InputOTP
          id={field.name}
          maxLength={length}
          value={field.value ?? ""}
          onChange={(value) => field.onChange(value)}
          disabled={disabled}
          pattern={pattern?.source}
          aria-invalid={!!fieldState.error}
          className={className}
        >
          <InputOTPGroup>
            {Array.from({ length }, (_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                aria-invalid={!!fieldState.error}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      )}
    </BaseController>
  );
}
