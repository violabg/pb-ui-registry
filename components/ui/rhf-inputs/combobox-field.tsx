"use client";

import { FieldValues } from "react-hook-form";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "../combobox";
import { BaseController, BaseControllerProps } from "./base-controller";

export type ComboboxOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type ComboboxOptionGroup = {
  label: string;
  options: ComboboxOption[];
};

type ComboboxFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  options: (ComboboxOption | ComboboxOptionGroup)[];
  placeholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  showClear?: boolean;
  className?: string;
};

function isOptionGroup(
  option: ComboboxOption | ComboboxOptionGroup,
): option is ComboboxOptionGroup {
  return "options" in option;
}

export function ComboboxField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  options,
  placeholder = "Search...",
  emptyMessage = "No options found.",
  disabled = false,
  showClear = true,
  className,
}: ComboboxFieldProps<T>) {
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
        <Combobox
          value={field.value ?? ""}
          onValueChange={(value) => field.onChange(value)}
          disabled={disabled}
        >
          <ComboboxInput
            id={field.name}
            placeholder={placeholder}
            showClear={showClear}
            aria-invalid={!!fieldState.error}
            aria-describedby={ariaDescribedBy}
            className={className}
          />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
              {options.map((option, index) =>
                isOptionGroup(option) ? (
                  <ComboboxGroup key={`group-${index}`}>
                    <ComboboxLabel>{option.label}</ComboboxLabel>
                    {option.options.map((opt) => (
                      <ComboboxItem
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.disabled}
                      >
                        {opt.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxGroup>
                ) : (
                  <ComboboxItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </ComboboxItem>
                ),
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      )}
    </BaseController>
  );
}
