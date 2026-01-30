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
  formatOptions?: Intl.NumberFormatOptions;
  locale?: string;
};

function NumberInput({
  value,
  onChange,
  min,
  max,
  step = 1,
  showControls = true,
  disabled,
  className,
  ...props
}: NumberInputProps) {
  const [inputValue, setInputValue] = React.useState<string>(
    value != null ? String(value) : "",
  );

  React.useEffect(() => {
    setInputValue(value != null ? String(value) : "");
  }, [value]);

  const clampValue = React.useCallback(
    (val: number): number => {
      let clamped = val;
      if (min != null && clamped < min) clamped = min;
      if (max != null && clamped > max) clamped = max;
      return clamped;
    },
    [min, max],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInputValue(raw);

    if (raw === "" || raw === "-") {
      onChange?.(null);
      return;
    }

    const parsed = parseFloat(raw);
    if (!isNaN(parsed)) {
      onChange?.(clampValue(parsed));
    }
  };

  const handleBlur = () => {
    if (value != null) {
      setInputValue(String(value));
    } else {
      setInputValue("");
    }
  };

  const increment = () => {
    const current = value ?? 0;
    const newValue = clampValue(current + step);
    onChange?.(newValue);
  };

  const decrement = () => {
    const current = value ?? 0;
    const newValue = clampValue(current - step);
    onChange?.(newValue);
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
        inputMode="decimal"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
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
