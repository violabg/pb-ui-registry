import {
  getLocalTimeZone,
  parseDate,
  parseDateTime,
} from "@internationalized/date";
import { format } from "date-fns";
import { DateFieldProps, DateValue } from "react-aria-components";
import { FieldValues } from "react-hook-form";
import { DateField, DateInput, DateInputProps } from "../datefield-rac";
import { BaseController, BaseControllerProps } from "./base-controller";

type FieldInputProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> &
  Omit<DateFieldProps<DateValue>, "value" | "onChange" | "children"> & {
    defaultValue?: Date | string;
  } & Pick<DateInputProps, "className" | "unstyled">;

type DateLike = Date | string | null | undefined;

function toDateValue(value: DateLike): DateValue | undefined {
  if (!value) return undefined;
  if (value instanceof Date) {
    const dateString = format(value, "yyyy-MM-dd");
    return parseDate(dateString);
  }
  if (typeof value === "string") {
    try {
      return parseDate(value);
    } catch {
      try {
        return parseDateTime(value);
      } catch {
        return undefined;
      }
    }
  }
  return undefined;
}

export function InputDateField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  disableFieldError = false,
  className,
  required,
  ...inputProps
}: FieldInputProps<T>) {
  const { defaultValue, ...restInputProps } = inputProps;

  return (
    <BaseController
      control={control}
      name={name}
      label={label}
      required={required}
      description={description}
      disableFieldError={disableFieldError}
    >
      {({ field, fieldState }) => {
        const resolvedValue = toDateValue(field.value as DateLike);
        const resolvedDefaultValue = toDateValue(defaultValue);

        return (
          <DateField
            className="*:not-first:mt-2"
            value={resolvedValue}
            defaultValue={resolvedDefaultValue}
            onChange={(nextValue) => {
              if (!nextValue) {
                field.onChange(undefined);
                return;
              }

              const timeZone = getLocalTimeZone();
              field.onChange(nextValue.toDate(timeZone));
            }}
            {...restInputProps}
          >
            <DateInput
              className={className}
              aria-invalid={!!fieldState.error}
              aria-required={required}
              aria-describedby={
                fieldState.error ? `${field.name}-error` : undefined
              }
            />
          </DateField>
        );
      }}
    </BaseController>
  );
}
