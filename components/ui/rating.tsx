"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const sizeClasses = {
  sm: "size-4",
  default: "size-5",
  lg: "size-6",
};

export type RatingProps = {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  disabled?: boolean;
  readOnly?: boolean;
  size?: "sm" | "default" | "lg";
  allowHalf?: boolean;
  className?: string;
  "aria-label"?: string;
  "aria-invalid"?: boolean;
};

const StarIcon = ({
  isFilled,
  isHalfFilled,
  size,
  className,
}: {
  isFilled: boolean;
  isHalfFilled: boolean;
  size: string;
  className?: string;
}) => {
  return (
    <div className={cn("inline-block relative", size, className)}>
      {/* Empty star background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("absolute inset-0 text-muted-foreground")}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      {/* Filled/Half-filled star overlay */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "absolute inset-0 transition-opacity",
          isFilled || isHalfFilled
            ? "text-yellow-400 fill-yellow-400"
            : "opacity-0",
        )}
        style={{
          clipPath: isHalfFilled
            ? "polygon(0 0, 50% 0, 50% 100%, 0 100%)"
            : undefined,
        }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>
  );
};

function Rating({
  value = 0,
  onChange,
  max = 5,
  disabled = false,
  readOnly = false,
  allowHalf = false,
  size = "default",
  className,
  "aria-label": ariaLabel = "Rating",
  "aria-invalid": ariaInvalid,
  ...props
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (disabled || readOnly) return;

    if (allowHalf) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - left) / width;
      const newValue = index + (percent > 0.5 ? 1 : 0.5);
      setHoverValue(newValue);
    } else {
      setHoverValue(index + 1);
    }
  };

  const handleClick = (rating: number) => {
    if (disabled || readOnly) return;
    onChange?.(rating);
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

  // Clean up rating logic for rendering
  const renderStars = () => {
    return Array.from({ length: max }, (_, index) => {
      const starValue = index + 1;
      const isFilled = displayValue >= starValue;
      const isHalfFilled =
        allowHalf && !isFilled && displayValue >= starValue - 0.5;

      return (
        <button
          key={index}
          type="button"
          role="radio"
          aria-checked={
            value === starValue || (allowHalf && value === starValue - 0.5)
          }
          aria-label={`${starValue} star${starValue !== 1 ? "s" : ""}`}
          disabled={disabled}
          tabIndex={readOnly ? -1 : 0}
          onClick={() => handleClick(hoverValue ?? starValue)}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onKeyDown={(e) => handleKeyDown(e, starValue)}
          className={cn(
            "p-0.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 transition-transform",
            !disabled && !readOnly && "cursor-pointer hover:scale-110",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          <StarIcon
            isFilled={isFilled}
            isHalfFilled={isHalfFilled}
            size={sizeClasses[size]}
            className={cn("transition-colors")}
          />
        </button>
      );
    });
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
      className={cn("inline-flex items-center gap-0.5", className)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {renderStars()}
    </div>
  );
}

export { Rating };
