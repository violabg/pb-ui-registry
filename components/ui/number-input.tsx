"use client";

import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import * as React from "react";
import { Button } from "./button";
import { Input } from "./input";

export type NumberInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange"
> & {
  value?: number | null;
  onChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  showControls?: boolean;
  /** Allow decimal numbers. When false, only integers are allowed. */
  allowDecimals?: boolean;
  /** Maximum number of decimal places. Only applies when allowDecimals is true. */
  decimalPlaces?: number;
  /** Locale for decimal separator detection. Defaults to browser locale. */
  locale?: string;
};

function NumberInput({
  value,
  onChange,
  min,
  max,
  step = 1,
  showControls = true,
  allowDecimals = false,
  decimalPlaces,
  locale,
  disabled,
  className,
  ...props
}: NumberInputProps) {
  // Get the decimal separator for the locale (defaults to browser locale)
  const decimalSeparator = React.useMemo(() => {
    const parts = new Intl.NumberFormat(locale).formatToParts(1.1);
    return parts.find((part) => part.type === "decimal")?.value ?? ".";
  }, [locale]);

  // Format a number for display
  const formatValue = React.useCallback(
    (val: number) => {
      let formatted: string;
      if (allowDecimals && decimalPlaces !== undefined) {
        formatted = val.toFixed(decimalPlaces);
      } else {
        // Use enough precision to represent the number accurately
        formatted = String(val);
      }
      // Replace standard decimal separator with locale-specific one
      if (decimalSeparator !== ".") {
        formatted = formatted.replace(".", decimalSeparator);
      }
      return formatted;
    },
    [allowDecimals, decimalPlaces, decimalSeparator],
  );

  // Parse input string to number, handling locale decimal separator
  const parseInput = React.useCallback(
    (input: string): number | null => {
      if (input === "" || input === "-") return null;
      // Normalize: replace locale decimal separator with standard dot
      let normalized = input;
      if (decimalSeparator !== ".") {
        normalized = normalized.replace(decimalSeparator, ".");
      }
      // Also accept dot as input even if locale uses comma
      normalized = normalized.replace(",", ".");
      const parsed = parseFloat(normalized);
      return isNaN(parsed) ? null : parsed;
    },
    [decimalSeparator],
  );

  // Clamp and round value according to constraints
  const clampValue = React.useCallback(
    (val: number): number => {
      let result = val;
      if (min != null && result < min) result = min;
      if (max != null && result > max) result = max;
      if (!allowDecimals) {
        result = Math.round(result);
      } else if (decimalPlaces !== undefined) {
        const factor = Math.pow(10, decimalPlaces);
        result = Math.round(result * factor) / factor;
      }
      return result;
    },
    [min, max, allowDecimals, decimalPlaces],
  );

  const [inputValue, setInputValue] = React.useState<string>(
    value != null ? formatValue(value) : "",
  );

  // Track focus state to prevent reformatting while typing
  const isFocusedRef = React.useRef(false);
  const prevValueRef = React.useRef(value);

  React.useEffect(() => {
    // Only update from external value when NOT focused
    // This prevents reformatting while the user is typing
    if (!isFocusedRef.current && value !== prevValueRef.current) {
      setInputValue(value != null ? formatValue(value) : "");
      prevValueRef.current = value;
    }
  }, [value, formatValue]);

  const handleFocus = () => {
    isFocusedRef.current = true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    // Allow free typing - only filter obvious garbage
    // Allow: digits, minus sign, dot, comma (for locale flexibility)
    const isValidChar = /^-?[\d.,]*$/.test(raw);
    if (!isValidChar && raw !== "") return;

    // If decimals not allowed, prevent typing decimal separators
    if (!allowDecimals && (raw.includes(".") || raw.includes(","))) {
      return;
    }

    setInputValue(raw);

    // Parse and notify parent (without clamping during typing)
    const parsed = parseInput(raw);
    if (parsed !== null) {
      onChange?.(parsed);
    } else if (raw === "" || raw === "-") {
      onChange?.(null);
    }
  };

  const handleBlur = () => {
    isFocusedRef.current = false;

    if (value != null) {
      // Clamp and format on blur
      const clamped = clampValue(value);
      setInputValue(formatValue(clamped));
      prevValueRef.current = clamped;
      if (clamped !== value) {
        onChange?.(clamped);
      }
    } else {
      setInputValue("");
    }
  };

  const increment = () => {
    const current = value ?? 0;
    const newValue = clampValue(current + step);
    onChange?.(newValue);
    setInputValue(formatValue(newValue));
    prevValueRef.current = newValue;
  };

  const decrement = () => {
    const current = value ?? 0;
    const newValue = clampValue(current - step);
    onChange?.(newValue);
    setInputValue(formatValue(newValue));
    prevValueRef.current = newValue;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (canIncrement) increment();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (canDecrement) decrement();
    }
  };

  const canIncrement = max == null || (value ?? 0) < max;
  const canDecrement = min == null || (value ?? 0) > min;

  return (
    <div className={cn("flex items-center", className)}>
      {showControls && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decrement}
          disabled={disabled || !canDecrement}
          className="border-r-0 rounded-r-none"
          aria-label="Decrease value"
        >
          <MinusIcon className="size-4" />
        </Button>
      )}
      <Input
        type="text"
        inputMode={allowDecimals ? "decimal" : "numeric"}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn("text-center", showControls && "rounded-none border-x-0")}
        {...props}
      />
      {showControls && (
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={increment}
          disabled={disabled || !canIncrement}
          className="border-l-0 rounded-l-none"
          aria-label="Increase value"
        >
          <PlusIcon className="size-4" />
        </Button>
      )}
    </div>
  );
}

export { NumberInput };
