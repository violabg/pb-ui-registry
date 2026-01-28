import { Input as InputPrimitive } from "@base-ui/react/input";
import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "file:inline-flex bg-transparent dark:bg-input/30 file:bg-transparent disabled:opacity-50 shadow-xs px-2.5 py-1 border border-input aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive focus-visible:border-ring dark:aria-invalid:border-destructive/50 file:border-0 rounded-md outline-none aria-invalid:focus-visible:ring-destructive/50 focus-visible:ring-[3px] focus-visible:ring-ring/50 w-full min-w-0 h-9 file:h-7 file:font-medium placeholder:text-muted-foreground file:text-foreground md:text-sm file:text-sm text-base transition-[color,box-shadow] disabled:cursor-not-allowed disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
