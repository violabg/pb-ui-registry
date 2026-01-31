"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { FieldValues } from "react-hook-form";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { BaseController, BaseControllerProps } from "./base-controller";

// Common country codes with their dial codes
const DEFAULT_COUNTRIES = [
  { code: "US", dialCode: "+1", name: "United States" },
  { code: "GB", dialCode: "+44", name: "United Kingdom" },
  { code: "DE", dialCode: "+49", name: "Germany" },
  { code: "FR", dialCode: "+33", name: "France" },
  { code: "IT", dialCode: "+39", name: "Italy" },
  { code: "ES", dialCode: "+34", name: "Spain" },
  { code: "NL", dialCode: "+31", name: "Netherlands" },
  { code: "BE", dialCode: "+32", name: "Belgium" },
  { code: "CH", dialCode: "+41", name: "Switzerland" },
  { code: "AT", dialCode: "+43", name: "Austria" },
  { code: "AU", dialCode: "+61", name: "Australia" },
  { code: "CA", dialCode: "+1", name: "Canada" },
  { code: "JP", dialCode: "+81", name: "Japan" },
  { code: "CN", dialCode: "+86", name: "China" },
  { code: "IN", dialCode: "+91", name: "India" },
  { code: "BR", dialCode: "+55", name: "Brazil" },
  { code: "MX", dialCode: "+52", name: "Mexico" },
  { code: "KR", dialCode: "+82", name: "South Korea" },
  { code: "RU", dialCode: "+7", name: "Russia" },
  { code: "ZA", dialCode: "+27", name: "South Africa" },
];

export type Country = {
  code: string;
  dialCode: string;
  name: string;
};

type PhoneFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  countries?: Country[];
  defaultCountry?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function PhoneField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  countries = DEFAULT_COUNTRIES,
  defaultCountry = "US",
  placeholder = "Phone number",
  disabled = false,
  className,
}: PhoneFieldProps<T>) {
  const [selectedCountry, setSelectedCountry] = React.useState(
    () => countries.find((c) => c.code === defaultCountry) ?? countries[0],
  );

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
        // Parse the current value to extract country and number
        const parsePhoneValue = (value: string | undefined) => {
          if (!value) return { dialCode: selectedCountry.dialCode, number: "" };

          // Find matching country code
          for (const country of countries) {
            if (value.startsWith(country.dialCode)) {
              return {
                dialCode: country.dialCode,
                number: value.slice(country.dialCode.length).trim(),
              };
            }
          }
          return { dialCode: selectedCountry.dialCode, number: value };
        };

        const { number } = parsePhoneValue(field.value);

        const handleCountryChange = (countryCode: string | null) => {
          if (!countryCode) return;
          const country = countries.find((c) => c.code === countryCode);
          if (country) {
            setSelectedCountry(country);
            // Update the full phone number with new dial code
            if (number) {
              field.onChange(`${country.dialCode}${number}`);
            }
          }
        };

        const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const raw = e.target.value.replace(/[^0-9]/g, "");
          if (raw) {
            field.onChange(`${selectedCountry.dialCode}${raw}`);
          } else {
            field.onChange("");
          }
        };

        return (
          <div className={cn("flex gap-2", className)}>
            <Select
              value={selectedCountry.code}
              onValueChange={handleCountryChange}
              disabled={disabled}
            >
              <SelectTrigger className="w-24 shrink-0">
                <SelectValue>
                  <span className="text-sm">{selectedCountry.dialCode}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <span className="flex items-center gap-2">
                      <span className="text-muted-foreground">
                        {country.dialCode}
                      </span>
                      <span>{country.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id={field.name}
              type="tel"
              inputMode="tel"
              value={number}
              onChange={handleNumberChange}
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={!!fieldState.error}
              aria-required={required}
              aria-describedby={ariaDescribedBy}
              className="flex-1"
            />
          </div>
        );
      }}
    </BaseController>
  );
}
