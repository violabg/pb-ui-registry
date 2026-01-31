"use client";

import { FieldValues } from "react-hook-form";
import { Checkbox } from "../checkbox";
import { Label } from "../label";
import { BaseController, BaseControllerProps } from "./base-controller";

export type CheckboxGroupOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type CheckboxGroupFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  options: CheckboxGroupOption[];
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  className?: string;
};

export function CheckboxGroupField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  options,
  orientation = "vertical",
  disabled = false,
  className,
}: CheckboxGroupFieldProps<T>) {
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
        const values: string[] = Array.isArray(field.value) ? field.value : [];

        const handleChange = (optionValue: string, checked: boolean) => {
          if (checked) {
            field.onChange([...values, optionValue]);
          } else {
            field.onChange(values.filter((v) => v !== optionValue));
          }
        };

        return (
          <div
            role="group"
            aria-describedby={ariaDescribedBy}
            className={`flex ${
              orientation === "horizontal"
                ? "flex-row flex-wrap gap-4"
                : "flex-col gap-2"
            } ${className ?? ""}`}
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-2">
                <Checkbox
                  id={`${field.name}-${option.value}`}
                  checked={values.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleChange(option.value, !!checked)
                  }
                  disabled={disabled || option.disabled}
                  aria-invalid={!!fieldState.error}
                />
                <Label
                  htmlFor={`${field.name}-${option.value}`}
                  className="font-normal cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        );
      }}
    </BaseController>
  );
}
