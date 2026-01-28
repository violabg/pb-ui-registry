import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex bg-transparent dark:bg-input/30 disabled:opacity-50 shadow-xs px-2.5 py-2 border border-input aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive focus-visible:border-ring dark:aria-invalid:border-destructive/50 rounded-md outline-none aria-invalid:focus-visible:ring-destructive/50 focus-visible:ring-[3px] focus-visible:ring-ring/50 w-full min-h-16 placeholder:text-muted-foreground md:text-sm text-base transition-[color,box-shadow] field-sizing-content disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
