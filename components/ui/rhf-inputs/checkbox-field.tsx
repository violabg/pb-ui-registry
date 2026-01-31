"use client";

import { FieldValues } from "react-hook-form";
import { Checkbox } from "../checkbox";
import { BaseController, BaseControllerProps } from "./base-controller";

type FieldCheckboxProps<T extends FieldValues> = Omit<
  React.ComponentProps<typeof Checkbox>,
  "checked" | "onCheckedChange" | "id"
> &
  Omit<BaseControllerProps<T>, "children" | "layout"> & {
    orientation?: "vertical" | "horizontal";
  };

export function CheckboxField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disableFieldError = false,
  orientation = "horizontal",
  required,
  ...checkboxProps
}: FieldCheckboxProps<T>) {
  return (
    <BaseController
      control={control}
      name={name}
      label={label}
      description={description}
      disableFieldError={disableFieldError}
      required={required}
      layout="inline"
      orientation={orientation}
    >
      {({ field, ariaDescribedBy }) => (
        <Checkbox
          id={field.name}
          checked={field.value}
          onCheckedChange={field.onChange}
          aria-describedby={ariaDescribedBy}
          {...checkboxProps}
        />
      )}
    </BaseController>
  );
}
