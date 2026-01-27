import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

type InstallCommandProps = {
  command: string;
  className?: string;
};

export function InstallCommand({ command, className }: InstallCommandProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 bg-muted/40 px-3 py-2 border border-border rounded-lg text-sm",
        className,
      )}
    >
      <div className="text-muted-foreground text-xs">Install</div>
      <div className="flex flex-wrap justify-between items-center gap-2">
        <code className="text-foreground text-xs sm:text-sm">{command}</code>
        <CopyButton value={command} label="Copy" />
      </div>
    </div>
  );
}
