"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Input } from "./input";

export type ColorPickerProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange"
> & {
  value?: string;
  onChange?: (value: string) => void;
  showInput?: boolean;
};

function ColorPicker({
  value = "#000000",
  onChange,
  showInput = true,
  disabled,
  className,
  ...props
}: ColorPickerProps) {
  const [inputValue, setInputValue] = React.useState(value);

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Only trigger onChange if it's a valid hex color
    if (/^#[0-9A-Fa-f]{6}$/.test(newValue)) {
      onChange?.(newValue);
    }
  };

  const handleBlur = () => {
    // Normalize to valid hex on blur
    if (!/^#[0-9A-Fa-f]{6}$/.test(inputValue)) {
      setInputValue(value);
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <input
          type="color"
          value={value}
          onChange={handleColorChange}
          disabled={disabled}
          className={cn(
            "bg-transparent shadow-xs p-1 border border-input rounded-md size-10 transition-shadow cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
            disabled && "cursor-not-allowed opacity-50",
          )}
          {...props}
        />
      </div>
      {showInput && (
        <Input
          type="text"
          value={inputValue}
          onChange={handleTextChange}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder="#000000"
          className="w-28 font-mono uppercase"
          maxLength={7}
        />
      )}
    </div>
  );
}

export { ColorPicker };
