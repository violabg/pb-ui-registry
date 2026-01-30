"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { FieldValues } from "react-hook-form";
import { Input } from "../input";
import { BaseController, BaseControllerProps } from "./base-controller";

type CurrencyFieldProps<T extends FieldValues> = Omit<
  BaseControllerProps<T>,
  "children"
> & {
  currency?: string;
  locale?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

function CurrencyInput({
  value,
  onChange,
  onBlur,
  min,
  max,
  currencySymbol,
  placeholder,
  disabled,
  id,
  error,
  required,
}: {
  value: number | null | undefined;
  onChange: (value: number | null) => void;
  onBlur: () => void;
  min?: number;
  max?: number;
  currencySymbol: string;
  placeholder?: string;
  disabled?: boolean;
  id: string;
  error?: boolean;
  required?: boolean;
}) {
  const [inputValue, setInputValue] = React.useState<string>(
    value != null ? String(value) : "",
  );

  React.useEffect(() => {
    setInputValue(value != null ? String(value) : "");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.-]/g, "");
    setInputValue(raw);

    if (raw === "" || raw === "-") {
      onChange(null);
      return;
    }

    const parsed = parseFloat(raw);
    if (!isNaN(parsed)) {
      let clamped = parsed;
      if (min != null) clamped = Math.max(min, clamped);
      if (max != null) clamped = Math.min(max, clamped);
      onChange(clamped);
    }
  };

  const handleBlurInput = () => {
    if (value != null) {
      setInputValue(String(value));
    } else {
      setInputValue("");
    }
    onBlur();
  };

  return (
    <div className="relative">
      <span className="top-1/2 left-3 absolute text-muted-foreground text-sm -translate-y-1/2 pointer-events-none">
        {currencySymbol}
      </span>
      <Input
        id={id}
        type="text"
        inputMode="decimal"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlurInput}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        className="pl-7"
      />
    </div>
  );
}

export function CurrencyField<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  disableFieldError = false,
  currency = "USD",
  locale = "en-US",
  min,
  max,
  placeholder,
  disabled = false,
  className,
}: CurrencyFieldProps<T>) {
  const currencySymbol = React.useMemo(() => {
    return (
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
        .formatToParts(0)
        .find((part) => part.type === "currency")?.value ?? "$"
    );
  }, [locale, currency]);

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
        <div className={cn(className)}>
          <CurrencyInput
            value={field.value}
            onChange={(value) => field.onChange(value)}
            onBlur={field.onBlur}
            min={min}
            max={max}
            currencySymbol={currencySymbol}
            placeholder={placeholder}
            disabled={disabled}
            id={field.name}
            error={!!fieldState.error}
            required={required}
          />
        </div>
      )}
    </BaseController>
  );
}
