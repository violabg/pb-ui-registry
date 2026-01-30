"use client";

import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import * as React from "react";

export type RatingProps = {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  disabled?: boolean;
  readOnly?: boolean;
  size?: "sm" | "default" | "lg";
  className?: string;
  "aria-label"?: string;
  "aria-invalid"?: boolean;
};

const sizeClasses = {
  sm: "size-4",
  default: "size-5",
  lg: "size-6",
};

function Rating({
  value = 0,
  onChange,
  max = 5,
  disabled = false,
  readOnly = false,
  size = "default",
  className,
  "aria-label": ariaLabel = "Rating",
  "aria-invalid": ariaInvalid,
  ...props
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  const handleClick = (rating: number) => {
    if (disabled || readOnly) return;
    onChange?.(rating);
  };

  const handleMouseEnter = (rating: number) => {
    if (disabled || readOnly) return;
    setHoverValue(rating);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, rating: number) => {
    if (disabled || readOnly) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange?.(rating);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
      className={cn(
        "inline-flex items-center gap-0.5",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {Array.from({ length: max }, (_, index) => {
        const rating = index + 1;
        const isFilled = rating <= displayValue;

        return (
          <button
            key={rating}
            type="button"
            role="radio"
            aria-checked={rating === value}
            aria-label={`${rating} star${rating !== 1 ? "s" : ""}`}
            disabled={disabled}
            tabIndex={
              readOnly
                ? -1
                : rating === value || (value === 0 && rating === 1)
                  ? 0
                  : -1
            }
            onClick={() => handleClick(rating)}
            onMouseEnter={() => handleMouseEnter(rating)}
            onKeyDown={(e) => handleKeyDown(e, rating)}
            className={cn(
              "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-colors",
              !disabled && !readOnly && "cursor-pointer hover:scale-110",
              disabled && "cursor-not-allowed",
            )}
          >
            <StarIcon
              className={cn(
                sizeClasses[size],
                "transition-colors",
                isFilled
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-transparent text-muted-foreground",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

export { Rating };
