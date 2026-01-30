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
  allowCents?: boolean;
};

function CurrencyInput({
  value,
  onChange,
  onBlur,
  min,
  max,
  currencySymbol,
  decimalSeparator,
  placeholder,
  disabled,
  id,
  error,
  required,
  allowCents = false,
  formatValue,
}: {
  value: number | null | undefined;
  onChange: (value: number | null) => void;
  onBlur: () => void;
  min?: number;
  max?: number;
  currencySymbol: string;
  decimalSeparator: string;
  placeholder?: string;
  disabled?: boolean;
  id: string;
  error?: boolean;
  required?: boolean;
  allowCents?: boolean;
  formatValue: (value: number) => string;
}) {
  const [inputValue, setInputValue] = React.useState<string>(
    value != null ? formatValue(value) : "",
  );
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if (!isFocused) {
      setInputValue(value != null ? formatValue(value) : "");
    }
  }, [value, formatValue, isFocused]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Allow digits, minus, and the locale-specific decimal separator
    const escapedSep = decimalSeparator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = allowCents
      ? new RegExp(`[^0-9${escapedSep}-]`, "g")
      : /[^0-9-]/g;

    const raw = input.replace(pattern, "");

    // Normalize decimal separator to period for parsing
    const normalized = raw.replace(decimalSeparator, ".");

    setInputValue(raw);

    if (normalized === "" || normalized === "-") {
      onChange(null);
      return;
    }

    const parsed = allowCents
      ? parseFloat(normalized)
      : parseInt(normalized, 10);
    if (!isNaN(parsed)) {
      let clamped = parsed;
      if (min != null) clamped = Math.max(min, clamped);
      if (max != null) clamped = Math.min(max, clamped);
      onChange(clamped);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    // Show raw number when focused for easier editing
    if (value != null) {
      const rawValue = allowCents
        ? String(value).replace(".", decimalSeparator)
        : String(value);
      setInputValue(rawValue);
    }
  };

  const handleBlurInput = () => {
    setIsFocused(false);
    // Format value on blur
    if (value != null) {
      setInputValue(formatValue(value));
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
        onFocus={handleFocus}
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
  allowCents = false,
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

  const decimalSeparator = React.useMemo(() => {
    return (
      new Intl.NumberFormat(locale)
        .formatToParts(1.1)
        .find((part) => part.type === "decimal")?.value ?? "."
    );
  }, [locale]);

  const formatValue = React.useCallback(
    (value: number) => {
      return new Intl.NumberFormat(locale, {
        minimumFractionDigits: allowCents ? 2 : 0,
        maximumFractionDigits: allowCents ? 2 : 0,
      }).format(value);
    },
    [locale, allowCents],
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
      {({ field, fieldState }) => (
        <div className={cn(className)}>
          <CurrencyInput
            value={field.value}
            onChange={(value) => field.onChange(value)}
            onBlur={field.onBlur}
            min={min}
            max={max}
            currencySymbol={currencySymbol}
            decimalSeparator={decimalSeparator}
            placeholder={placeholder}
            disabled={disabled}
            id={field.name}
            error={!!fieldState.error}
            required={required}
            allowCents={allowCents}
            formatValue={formatValue}
          />
        </div>
      )}
    </BaseController>
  );
}
